import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PredefinedDateRanges from "../../core/common/datePicker";
import PermissionTable from "./PermissionTable";
import { permission } from "../../core/data/json/permission";
import { all_routes } from "../router/all_routes";
import TooltipOption from "../../core/common/tooltipOption";
import { assignPermissionApi, getPermissionsApi, getRolePermissionsApi } from "../../services/RolesPermissions";
import { getAllSidebarMenus } from "../../services/Sidebar";
import { useLocation } from "react-router-dom";
import { updateRoleApi } from "../../services/RolesPermissions";
import Swal from "sweetalert2";

const Permission = () => {
  const data = permission;
  const routes = all_routes;
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [rolePermissions, setRolePermissions] = useState([]);
  const { roleId, roleName } = location.state || {};
  const selectedRoleId = roleId;

  //Table Rows controll
  const columns = [
    {
      title: "Modules",
      dataIndex: "label",
      render: (text) => text.toUpperCase(),
    },

    ...["create", "view", "update", "delete"].map((key) => ({
      title: key.toUpperCase(),
      dataIndex: key,
      render: (value, row) => (
        <label className="checkboxs">
          <input
            type="checkbox"
            checked={!!value}
            onChange={(e) =>
              handlePermissionToggle({
                moduleRow: row,
                actionKey: key,
                checked: e.target.checked,
              })
            }
          />
          <span className="checkmarks" />
        </label>
      ),
    })),

    {
      title: "ALLOW ALL",
      dataIndex: "allowAll",
      render: (value, row) => (
        <label className="checkboxs">
          <input
            type="checkbox"
            checked={!!value}
            onChange={(e) =>
              handlePermissionToggle({
                moduleRow: row,
                actionKey: "allowAll",
                checked: e.target.checked,
              })
            }
          />
          <span className="checkmarks" />
        </label>
      ),
    },
  ];

  const normalize = (text = "") =>
    text.toLowerCase().replace(/\s+/g, "_").trim();

  //Set view data sidebar menus and permission 
  const buildPermissionMatrix = (
    sidebarMenus = [],
    allPermissions = [],
    rolePermissions = []
  ) => {
    const map = {};

    // 🔥 Convert role permissions to fast lookup
    const rolePermissionSet = new Set(
      rolePermissions.map((p) => p.permission_key)
    );

    /**
     * 1️⃣ Extract only CHILD menus
     */
    const extractChildren = (menus = []) => {
      const result = [];

      menus.forEach((menu) => {
        if (menu.mainmenu === 1 && Array.isArray(menu.children)) {
          menu.children.forEach((child) => {
            result.push({
              ...child,
              parentTitle: menu.title,
            });
          });
        }
      });

      return result;
    };

    const childMenus = extractChildren(sidebarMenus);

    /**
     * 2️⃣ Initialize rows from sidebar
     */
    childMenus.forEach((menu) => {
      const moduleName = normalize(menu.title);

      map[moduleName] = {
        module: moduleName,
        label: menu.title,
        parent: menu.parentTitle || null,
        create: false,
        view: false,
        update: false,
        delete: false,
        allowAll: false,
        permissions: [],
      };
    });

    /**
     * 3️⃣ Attach permissions + mark checked from role_permissions
     */
    allPermissions.forEach((p) => {
      const moduleName = normalize(p.module);
      if (!moduleName) return;

      if (!map[moduleName]) {
        map[moduleName] = {
          module: moduleName,
          label: p.module,
          parent: null,
          create: false,
          view: false,
          update: false,
          delete: false,
          allowAll: false,
          permissions: [],
        };
      }

      const action = p.permission_key.split(".")[1]; // create/view/update/delete
      const isAssigned = rolePermissionSet.has(p.permission_key);

      if (isAssigned) {
        if (action === "create") map[moduleName].create = true;
        if (action === "read" || action === "view") map[moduleName].view = true;
        if (action === "update") map[moduleName].update = true;
        if (action === "delete") map[moduleName].delete = true;
      }

      map[moduleName].permissions.push(p);
    });

    /**
     * 4️⃣ Compute allowAll
     */
    Object.values(map).forEach((m) => {
      m.allowAll =
        m.create &&
        m.view &&
        m.update &&
        m.delete;
    });

    return Object.values(map);
  };

  const loadMatrix = async () => {
    try {
      setLoading(true);

      const [permRes, sidebarRes, rolePermRes] = await Promise.all([
        getPermissionsApi(),
        getAllSidebarMenus(),
        getRolePermissionsApi(selectedRoleId),
      ]);

      if (
        permRes.success &&
        sidebarRes.success &&
        rolePermRes.success
      ) {
        const formatted = buildPermissionMatrix(
          sidebarRes.data,
          permRes.data,
          rolePermRes.data
        );

        setTableData(formatted);
      }
    } finally {
      setLoading(false);
    }
  };

  //Call api to load data from 3 tables
  useEffect(() => {
    loadMatrix();
  }, []);

  const handlePermissionToggle = async ({
    moduleRow,
    actionKey,
    checked,
  }) => {
  

    /**
     * 1️⃣ Optimistically update UI first
     */
    setTableData((prev) =>
      prev.map((row) => {
        if (row.module !== moduleRow.module) return row;

        const updated = { ...row };

        if (actionKey === "allowAll") {
          updated.create = checked;
          updated.view = checked;
          updated.update = checked;
          updated.delete = checked;
        } else {
          updated[actionKey] = checked;
        }

        updated.allowAll =
          updated.create &&
          updated.view &&
          updated.update &&
          updated.delete;

        return updated;
      })
    );

    /**
     * 2️⃣ Find affected permissions safely
     */
    const affectedPermissions =
      actionKey === "allowAll"
        ? moduleRow.permissions
        : moduleRow.permissions.filter((p) => {
          const action = p.permission_key.split(".")[1]; // create/view/update/delete
          return action === actionKey;
        });

    if (!affectedPermissions.length) return;

    /**
     * 3️⃣ Call API in background
     */
    try {
      await Promise.all(
        affectedPermissions.map((p) =>
          assignPermissionApi(selectedRoleId, {
            permission_id: p.id,
            action: checked ? "grant" : "revoke",
          })
        )
      );
    } catch (err) {
      console.error("Permission update failed", err);

      // ❌ Rollback UI if API fails
      setTableData((prev) =>
        prev.map((row) => {
          if (row.module !== moduleRow.module) return row;

          const rollback = { ...row };

          if (actionKey === "allowAll") {
            rollback.create = !checked;
            rollback.view = !checked;
            rollback.update = !checked;
            rollback.delete = !checked;
          } else {
            rollback[actionKey] = !checked;
          }

          rollback.allowAll =
            rollback.create &&
            rollback.view &&
            rollback.update &&
            rollback.delete;

          return rollback;
        })
      );
    }
  };

  


  return (
    <div>
      <>
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content">
            {/* Page Header */}
            <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
              <div className="my-auto mb-2">
                <h3 className="page-title mb-1">Roles &amp; Permissions</h3>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link to={routes.adminDashboard}>Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="#">User Management</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Roles &amp; Permissions
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="d-flex my-xl-auto right-content align-items-center flex-wrap">
                <TooltipOption />
                <div className="mb-2">
                  <Link
                    to="#"
                    className="btn btn-primary d-flex align-items-center"
                    data-bs-toggle="modal"
                    data-bs-target="#add_role"
                  >
                    <i className="ti ti-square-rounded-plus me-2" />
                    Add Role
                  </Link>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            {/* Filter Section */}
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between flex-wrap pb-0">
                <h4 className="mb-3">Roles &amp; Permissions List</h4>
                <div className="d-flex align-items-center flex-wrap">
                  <div className="input-icon-start mb-3 me-2 position-relative">
                    <PredefinedDateRanges />
                  </div>
                  <div className="dropdown mb-3">
                    <Link
                      to="#"
                      className="btn btn-outline-light bg-white dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ti ti-sort-ascending-2 me-2" />
                      Sort by A-Z
                    </Link>
                    <ul className="dropdown-menu p-3">
                      <li>
                        <Link to="#" className="dropdown-item rounded-1 active">
                          Ascending
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Descending
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Recently Viewed
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Recently Added
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body p-0 py-3">
                {/* Student List */}
                {/* <Table columns={columns} dataSource={data} Selection={true} /> */}
                <PermissionTable
                  columns={columns}
                  dataSource={tableData}
                  loading={loading}
                  Selection={false}
                />
                {/* /Student List */}
              </div>
            </div>
            {/* /Filter Section */}
          </div>
        </div>
        {/* /Page Wrapper */}
        {/* Add Role */}
        <div className="modal fade" id="add_role">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Add Role</h4>
                <button
                  type="button"
                  className="btn-close custom-btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="ti ti-x" />
                </button>
              </div>
              <form>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mb-0">
                        <label className="form-label">Role Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter State Name"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <Link
                    to="#"
                    className="btn btn-light me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Add Role
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Add Role */}
      </>
    </div>
  );
};

export default Permission;
