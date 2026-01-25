import { useEffect, useState } from "react";
import { rolesPermissionsData } from "../../core/data/json/rolesPermissions";
import RoleTable from "./RoleTable";
import PredefinedDateRanges from "../../core/common/datePicker";
import { Link } from "react-router-dom";
import { all_routes } from "../router/all_routes";
import TooltipOption from "../../core/common/tooltipOption";
import { createRoleApi, deleteRoleApi, getRolesApi, updateRoleApi } from "../../services/RolesPermissions";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const RolesPermissions = () => {
  const routes = all_routes;
  const navigate = useNavigate();
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [selectedRole, setSelectedRole] = useState(null);
  const [newRole, setNewRole] = useState({
    name: "",
    description: "",
  });
  const [creating, setCreating] = useState(false);
  const [deleteRole, setDeleteRole] = useState(null);
  const [deleting, setDeleting] = useState(false);


  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    totalRecords: 0,
    totalPages: 0,
  });

  const loadRoles = async () => {
    console.log("Api call inside roles and permission")
    try {
      setLoading(true);

      const res = await getRolesApi(page, limit);

      if (res.success) {
        setRoles(res.data);
        setPagination(res.pagination);
      }
    } catch (err) {
      console.error("Failed to load roles", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRoles();
  }, [page, limit]);

  const handlePageChange = (newPage, newLimit) => {
    setPage(newPage);
    setLimit(newLimit);
  };

  const columns = [
    {
      title: "Role Name",
      dataIndex: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Created On",
      dataIndex: "created_at",
      render: (value) => {
        if (!value) return "-";

        const date = new Date(value);

        return date.toLocaleString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });
      },
    },

    // {
    //   title: "Action",
    //   dataIndex: "action",
    //   render: () => (
    //     <>
    //       <div className="d-flex align-items-center">
    //         <Link
    //           to="#"
    //           className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
    //           data-bs-toggle="modal"
    //           data-bs-target="#edit_role"
    //         >
    //           <i className="ti ti-edit-circle text-primary" />
    //         </Link>
    //         <Link
    //           to={routes.permissions}
    //           className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
    //         >
    //           <i className="ti ti-shield text-skyblue" />
    //         </Link>
    //         <Link
    //           to="#"
    //           className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-3"
    //           data-bs-toggle="modal"
    //           data-bs-target="#delete-modal"
    //         >
    //           <i className="ti ti-trash-x text-danger" />
    //         </Link>
    //       </div>
    //     </>
    //   ),
    // },

    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => (
        <div className="d-flex align-items-center">

          {/* ✏️ EDIT */}
          <button
            className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-2"
            data-bs-toggle="modal"
            data-bs-target="#edit_role"
            onClick={() => handleEditClick(record)}
          >
            <i className="ti ti-edit-circle text-primary" />
          </button>

          {/* 🔐 PERMISSIONS */}
          <button
            className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-2"
            onClick={() => handlePermissionClick(record)}
          >
            <i className="ti ti-shield text-skyblue" />
          </button>

          {/* 🗑 DELETE */}
          {/* <button
            className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-3"
            data-bs-toggle="modal"
            data-bs-target="#delete-modal"
          >
            <i className="ti ti-trash-x text-danger" />
          </button> */}
          <button
            className="btn btn-outline-light bg-white btn-icon rounded-circle p-0 me-3"
            data-bs-toggle="modal"
            data-bs-target="#delete-modal"
            onClick={() => setDeleteRole(record)}
          >
            <i className="ti ti-trash-x text-danger" />
          </button>

        </div>
      ),
    }


  ];


  // 👉 When clicking Permission icon
  const handlePermissionClick = (role) => {
    navigate(routes.permissions, {
      state: {
        roleId: role.id,
        roleName: role.name,
      },
    });
  };

  // 👉 When clicking Edit icon
  const handleEditClick = (role) => {
    // You can open modal and set data
    console.log("Edit Role Data:", role);

    // Example: store in state if using modal form
    setSelectedRole(role);
  };

  const [saving, setSaving] = useState(false);



  const handleUpdateRole = async () => {
    if (!selectedRole?.id) return;
    try {
      setSaving(true);

      const payload = {
        name: selectedRole.name,
        description: selectedRole.description,
        is_active: selectedRole.is_active ?? 1,
      };

      const res = await updateRoleApi(selectedRole.id, payload);

      if (res.success) {
        Swal.fire("Success", "Role updated successfully", "success");
        loadRoles(); // refresh table
      }
    } catch (error) {
      Swal.fire(
        "Error",
        error?.response?.data?.message || "Update failed",
        "error"
      );
    } finally {
      setSaving(false);
    }
  };


  const handleAddRole = async () => {
    if (!newRole.name.trim()) {
      Swal.fire("Validation", "Role name is required", "warning");
      return;
    }

    try {
      setCreating(true);

      const res = await createRoleApi({
        name: newRole.name,
        description: newRole.description,
      });

      if (res.success) {
        Swal.fire("Success", "Role created successfully", "success");

        // Reset form
        setNewRole({ name: "", description: "" });

        // Reload roles
        loadRoles();
      }
    } catch (error) {
      Swal.fire(
        "Error",
        error?.response?.data?.message || "Failed to create role",
        "error"
      );
    } finally {
      setCreating(false);
    }
  };

  const handleDeleteRole = async () => {
    if (!deleteRole?.id) return;

    try {
      setDeleting(true);

      const res = await deleteRoleApi(deleteRole.id);

      if (res.success) {
        Swal.fire("Deleted", "Role deleted successfully", "success");
        loadRoles();
        setDeleteRole(null);
      }
    } catch (error) {
      Swal.fire(
        "Error",
        error?.response?.data?.message || "Failed to delete role",
        "error"
      );
    } finally {
      setDeleting(false);
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
                    {/* <li className="breadcrumb-item">
                      <Link to="#">User Management</Link>
                    </li> */}
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
                {/* Role Permission List */}
                <RoleTable
                  columns={columns}
                  dataSource={roles}
                  Selection={true}
                  loading={loading}
                  pagination={pagination}
                  onPageChange={handlePageChange}
                />
                {/* /Role Permission List */}
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

              {/* Header */}
              <div className="modal-header">
                <h4 className="modal-title">Add Role</h4>
                <button
                  type="button"
                  className="btn-close custom-btn-close"
                  data-bs-dismiss="modal"
                >
                  <i className="ti ti-x" />
                </button>
              </div>

              {/* Body */}
              <form>
                <div className="modal-body">
                  <div className="row">

                    {/* Role Name */}
                    <div className="col-md-12 mb-3">
                      <label className="form-label">Role Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={newRole.name}
                        onChange={(e) =>
                          setNewRole({ ...newRole, name: e.target.value })
                        }
                      />
                    </div>

                    {/* Description */}
                    <div className="col-md-12">
                      <label className="form-label">Description</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        value={newRole.description}
                        onChange={(e) =>
                          setNewRole({ ...newRole, description: e.target.value })
                        }
                      />
                    </div>

                  </div>
                </div>

                {/* Footer */}
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-light me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleAddRole}
                    disabled={creating}
                    data-bs-dismiss="modal"
                  >
                    {creating ? "Creating..." : "Add Role"}
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>


        {/* /Edit Role */}
        <div className="modal fade" id="edit_role">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">

              {/* Header */}
              <div className="modal-header">
                <h4 className="modal-title">Edit Role</h4>
                <button
                  type="button"
                  className="btn-close custom-btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="ti ti-x" />
                </button>
              </div>

              {/* Form */}
              <form>
                <div className="modal-body">
                  <div className="row">

                    {/* Role Name */}
                    <div className="col-md-12 mb-3">
                      <label className="col-form-label">Role Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={selectedRole?.name || ""}
                        onChange={(e) =>
                          setSelectedRole({
                            ...selectedRole,
                            name: e.target.value,
                          })
                        }
                      />
                    </div>

                    {/* Description */}
                    <div className="col-md-12">
                      <label className="col-form-label">Description</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        value={selectedRole?.description || ""}
                        onChange={(e) =>
                          setSelectedRole({
                            ...selectedRole,
                            description: e.target.value,
                          })
                        }
                      />
                    </div>

                  </div>
                </div>

                {/* Footer */}
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-light me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    onClick={handleUpdateRole}
                    disabled={saving}
                  >
                    {saving ? "Saving..." : "Save Changes"}
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>


        {/* Delete Modal */}
        <div className="modal fade" id="delete-modal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <form >
                <div className="modal-body text-center">
                  <span className="delete-icon">
                    <i className="ti ti-trash-x" />
                  </span>
                  <h4>Confirm Deletion</h4>
                  <p>
                    You want to delete all the marked items, this cant be undone
                    once you delete.
                  </p>
                  <div className="d-flex justify-content-center">
                    <Link
                      to="#"
                      className="btn btn-light me-3"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </Link>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={handleDeleteRole}
                      disabled={deleting}
                      data-bs-dismiss="modal"
                    >
                      {deleting ? "Deleting..." : "Yes, Delete"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Delete Modal */}
      </>
    </div>
  );
};

export default RolesPermissions;
