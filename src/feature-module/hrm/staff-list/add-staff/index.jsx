import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Select from "react-select";   // ✅ Direct react-select

import { all_routes } from "../../../router/all_routes";
import { createUserApi } from "../../../../services/Users";
import { getRolesListApi } from "../../../../services/RolesPermissions";

const AddStaff = () => {
  const routes = all_routes;
  const navigate = useNavigate();

  // ================= STATE =================
  const [roles, setRoles] = useState([]);
  const [loadingRoles, setLoadingRoles] = useState(false);
  const [creating, setCreating] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role_id: null,
    password: "",
    confirmPassword: "",
  });

  console.log("form",form);
  

  // ================= LOAD ROLES =================
  const loadRoles = async () => {
    try {
      setLoadingRoles(true);

      const res = await getRolesListApi();

      if (res?.success) {
        const mapped = res.data.map((r) => ({
          label: r.name,
          value: r.id,
        }));
        setRoles(mapped);
      }
    } catch (err) {
      console.error("Failed loading roles", err);
    } finally {
      setLoadingRoles(false);
    }
  };

  useEffect(() => {
    loadRoles();
  }, []);

  // ================= HANDLERS =================
  const updateField = (key, value) => {
    console.log("updateField:", key, value);
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleCreateStaff = async () => {
    if (!form.firstName || !form.email || !form.password || !form.role_id) {
      Swal.fire("Validation", "Please fill all required fields", "warning");
      return;
    }

    if (form.password !== form.confirmPassword) {
      Swal.fire("Validation", "Passwords do not match", "warning");
      return;
    }

    try {
      setCreating(true);

      const payload = {
        name: `${form.firstName} ${form.lastName}`.trim(),
        email: form.email,
        password: form.password,
        role_id: form.role_id,
      };

      const res = await createUserApi(payload);

      if (res.success) {
        Swal.fire("Success", "Staff created successfully", "success");
        navigate(routes.staff);
      }
    } catch (error) {
      Swal.fire(
        "Error",
        error?.response?.data?.message || "Failed to create staff",
        "error"
      );
    } finally {
      setCreating(false);
    }
  };

  // ================= UI =================
  return (
    <div className="page-wrapper">
      <div className="content content-two">

        {/* Page Header */}
        <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
          <div className="my-auto mb-2">
            <h3 className="mb-1">Add Staff</h3>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to={routes.adminDashboard}>Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Add Staff</li>
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
                          placeholder="Enter first name"
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
                          placeholder="Enter last name"
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
                        className="select"
                        options={roles}
                        isLoading={loadingRoles}
                        placeholder="Select role"
                        value={
                          roles.find((r) => r.value === form.role_id) || null
                        }
                        onChange={(opt) => {
                          console.log("Selected Role:", opt);
                          updateField("role_id", opt?.value ?? null);
                        }}
                        isClearable
                      />
                    </div>

                    {/* Email */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Email *</label>
                      <input
                        type="email"
                        className="form-control"
                          placeholder="Enter email"
                        value={form.email}
                        onChange={(e) =>
                          updateField("email", e.target.value)
                        }
                      />
                    </div>

                  </div>
                </div>
              </div>

              {/* Password */}
              <div className="card">
                <div className="card-header bg-light">
                  <h4 className="text-dark mb-0">Password</h4>
                </div>

                <div className="card-body pb-1">
                  <div className="row">

                    {/* Password */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Password *</label>
                      <input
                        type="password"
                        className="form-control"
                        value={form.password}
                          placeholder="Enter password"
                        onChange={(e) =>
                          updateField("password", e.target.value)
                        }
                      />
                    </div>

                    {/* Confirm Password */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Confirm Password *</label>
                      <input
                        type="password"
                        className="form-control"
                         placeholder="Enter confirm password"
                        value={form.confirmPassword}
                        onChange={(e) =>
                          updateField("confirmPassword", e.target.value)
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
                  onClick={handleCreateStaff}
                  disabled={creating}
                >
                  {creating ? "Creating..." : "Add Staff"}
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AddStaff;


// import  { useState } from "react";
// import CommonSelect from "../../../../core/common/commonSelect";
// import {
//   staffrole,
// } from "../../../../core/common/selectoption/selectoption";
// import { Link } from "react-router-dom";
// import { all_routes } from "../../../router/all_routes";


// const AddStaff = () => {
//   const [owner, setOwner] = useState([]);
//    const handleTagsChange = (newTags) => {
//     setOwner(newTags);
//   };
//   const routes = all_routes;
//   return (
//     <div>
//       <>
//         {/* Page Wrapper */}
//         <div className="page-wrapper">
//           <div className="content content-two">
//             {/* Page Header */}
//             <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
//               <div className="my-auto mb-2">
//                 <h3 className="mb-1">Add Staff</h3>
//                 <nav>
//                   <ol className="breadcrumb mb-0">
//                     <li className="breadcrumb-item">
//                       <Link to={routes.adminDashboard}>Dashboard</Link>
//                     </li>
//                     {/* <li className="breadcrumb-item">HRM</li> */}
//                     <li className="breadcrumb-item active" aria-current="page">
//                       Add Staff
//                     </li>
//                   </ol>
//                 </nav>
//               </div>
//             </div>
//             {/* /Page Header */}
//             <div className="row">
//               <div className="col-md-12">
//                 <form >
//                   {/* Personal Information */}
//                   <div className="card">
//                     <div className="card-header bg-light">
//                       <div className="d-flex align-items-center">
//                         <span className="bg-white avatar avatar-sm me-2 text-gray-7 flex-shrink-0">
//                           <i className="ti ti-info-square-rounded fs-16" />
//                         </span>
//                         <h4 className="text-dark">Personal Information</h4>
//                       </div>
//                     </div>
//                     <div className="card-body pb-1">
//                       <div className="add-section">
//                         <div className="row">
//                           <div className="col-md-12">
//                             <div className="d-flex align-items-center flex-wrap row-gap-3 mb-3">
//                               <div className="d-flex align-items-center justify-content-center avatar avatar-xxl border border-dashed me-2 flex-shrink-0 text-dark frames">
//                                 <i className="ti ti-photo-plus fs-16" />
//                               </div>
//                               <div className="profile-upload">
//                                 <div className="profile-uploader d-flex align-items-center">
//                                   <div className="drag-upload-btn mb-3">
//                                     Upload
//                                     <input
//                                       type="file"
//                                       className="form-control image-sign"
//                                       multiple
//                                     />
//                                   </div>
//                                   <Link to="#" className="btn btn-primary mb-3">
//                                     Remove
//                                   </Link>
//                                 </div>
//                                 <p className="fs-12">
//                                   Upload image size 4MB, Format JPG, PNG, SVG
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="row row-cols-xxl-5 row-cols-md-6">
//                           <div className="col-xxl col-xl-3 col-md-6">
//                             <div className="mb-3">
//                               <label className="form-label">First Name</label>
//                               <input type="text" className="form-control" />
//                             </div>
//                           </div>
//                           <div className="col-xxl col-xl-3 col-md-6">
//                             <div className="mb-3">
//                               <label className="form-label">Last Name</label>
//                               <input type="text" className="form-control" />
//                             </div>
//                           </div>
//                           <div className="col-xxl col-xl-3 col-md-6">
//                             <div className="mb-3">
//                               <label className="form-label">Role</label>
//                               <CommonSelect
//                                 className="select"
//                                 options={staffrole}
//                               />
//                             </div>
//                           </div>
                          
//                           <div className="col-xxl col-xl-3 col-md-6">
//                             <div className="mb-3">
//                               <label className="form-label">
//                                 Primary Contact Number
//                               </label>
//                               <input type="text" className="form-control" />
//                             </div>
//                           </div>
//                           <div className="col-xxl col-xl-3 col-md-6">
//                             <div className="mb-3">
//                               <label className="form-label">
//                                 Email Address
//                               </label>
//                               <input type="email" className="form-control" />
//                             </div>
//                           </div>
                          
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   {/* password */}
//                   <div className="card">
//                     <div className="card-header bg-light">
//                       <div className="d-flex align-items-center">
//                         <span className="bg-white avatar avatar-sm me-2 text-gray-7 flex-shrink-0">
//                           <i className="ti ti-file fs-16" />
//                         </span>
//                         <h4 className="text-dark">Password</h4>
//                       </div>
//                     </div>
//                     <div className="card-body pb-1">
//                       <div className="row">
//                         <div className="col-md-6">
//                           <div className="mb-3">
//                             <label className="form-label">New Password</label>
//                             <input type="password" className="form-control" />
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="mb-3">
//                             <label className="form-label">
//                               Confirm Password
//                             </label>
//                             <input type="password" className="form-control" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   {/* /Password */}
//                   <div className="text-end">
//                     <button type="button" className="btn btn-light me-3">
//                       Cancel
//                     </button>
//                     <Link to={routes.staff} className="btn btn-primary">
//                       Add Staff
//                     </Link>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     </div>
//   );
// };

// export default AddStaff;
