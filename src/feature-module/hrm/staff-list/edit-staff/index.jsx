import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Select from "react-select";

import { all_routes } from "../../../router/all_routes";
import { getUserByIdApi, updateUserApi } from "../../../../services/Users";
import { getRolesListApi } from "../../../../services/RolesPermissions";

const EditStaff = () => {
  const routes = all_routes;
  const navigate = useNavigate();
  const { id } = useParams();

  // ================= STATE =================
  const [roles, setRoles] = useState([]);
  const [loadingRoles, setLoadingRoles] = useState(false);
  const [loadingUser, setLoadingUser] = useState(false);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role_id: null,
  });

  // ================= DERIVED SELECT VALUE =================
  const selectedRole = useMemo(() => {
    return roles.find((r) => r.value === Number(form.role_id)) || null;
  }, [roles, form.role_id]);

  // ================= LOAD ROLES =================
  const loadRoles = async () => {
    try {
      setLoadingRoles(true);
      const res = await getRolesListApi();

      if (res.success) {
        const mapped = res.data.map((r) => ({
          label: r.name,
          value: Number(r.id),
        }));
        setRoles(mapped);
      }
    } catch (err) {
      console.error("Failed loading roles", err);
      Swal.fire("Error", "Failed to load roles", "error");
    } finally {
      setLoadingRoles(false);
    }
  };

  // ================= LOAD USER =================
  const loadUser = async () => {
    try {
      setLoadingUser(true);
      const res = await getUserByIdApi(id);

      if (res.success) {
        const user = res.data;
        const nameParts = user.name?.split(" ") || [];

        setForm({
          firstName: nameParts[0] || "",
          lastName: nameParts.slice(1).join(" ") || "",
          email: user.email || "",
          role_id: Number(user.role_id) || null, // ✅ important
        });
      }
    } catch (err) {
      console.error("Failed loading user", err);
      Swal.fire("Error", "Failed to load staff data", "error");
      navigate(routes.staff);
    } finally {
      setLoadingUser(false);
    }
  };

  // ================= INIT =================
  useEffect(() => {
    loadRoles();
    loadUser();
  }, [id]);

  // ================= HANDLERS =================
  const updateField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleUpdateStaff = async () => {
    if (!form.firstName || !form.email || !form.role_id) {
      Swal.fire("Validation", "Please fill all required fields", "warning");
      return;
    }

    try {
      setSaving(true);

      const payload = {
        name: `${form.firstName} ${form.lastName}`.trim(),
        email: form.email,
        role_id: form.role_id,
      };

      const res = await updateUserApi(id, payload);

      if (res.success) {
        Swal.fire("Success", "Staff updated successfully", "success");
        navigate(routes.staff);
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

  if (loadingUser) {
    return <div className="text-center p-5">Loading staff...</div>;
  }

  // ================= UI =================
  return (
    <div className="page-wrapper">
      <div className="content content-two">

        {/* Header */}
        <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
          <div className="my-auto mb-2">
            <h3 className="mb-1">Edit Staff</h3>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to={routes.adminDashboard}>Dashboard</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to={routes.staff}>Staff</Link>
                </li>
                <li className="breadcrumb-item active">Edit Staff</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* FORM */}
        <div className="row">
          <div className="col-md-12">
            <form>

              {/* Personal Info */}
              <div className="card">
                <div className="card-header bg-light">
                  <h4 className="text-dark mb-0">Personal Information</h4>
                </div>

                <div className="card-body pb-1">
                  <div className="row">

                    {/* First Name */}
                    <div className="col-md-4 mb-3">
                      <label className="form-label">First Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        value={form.firstName}
                        onChange={(e) =>
                          updateField("firstName", e.target.value)
                        }
                      />
                    </div>

                    {/* Last Name */}
                    <div className="col-md-4 mb-3">
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={form.lastName}
                        onChange={(e) =>
                          updateField("lastName", e.target.value)
                        }
                      />
                    </div>

                    {/* Role */}
                    <div className="col-md-4 mb-3">
                      <label className="form-label">Role *</label>

                      <Select
                        classNamePrefix="react-select"
                        options={roles}
                        isLoading={loadingRoles}
                        value={selectedRole}
                        onChange={(opt) =>
                          updateField("role_id", opt?.value ?? null)
                        }
                        placeholder="Select role"
                      />
                    </div>

                    {/* Email */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Email *</label>
                      <input
                        type="email"
                        className="form-control"
                        value={form.email}
                        onChange={(e) =>
                          updateField("email", e.target.value)
                        }
                      />
                    </div>

                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="text-end">
                <Link to={routes.staff} className="btn btn-light me-3">
                  Cancel
                </Link>

                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleUpdateStaff}
                  disabled={saving}
                >
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditStaff;
