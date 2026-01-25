import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  departmentName,
  designationName,
  morefilterStaff,
  staffName,
} from "../../../../core/common/selectoption/selectoption";
import ImageWithBasePath from "../../../../core/common/imageWithBasePath";
import PredefinedDateRanges from "../../../../core/common/datePicker";
import CommonSelect from "../../../../core/common/commonSelect";
import { all_routes } from "../../../router/all_routes";
import TooltipOption from "../../../../core/common/tooltipOption";
import StaffTable from "./StaffTable";
import { deleteUserApi, getUsersApi } from "../../../../services/Users";
import Swal from "sweetalert2";


const Staff = () => {
  const routes = all_routes;
  const dropdownMenuRef = useRef(null);

  // ================= STATE =================
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const [pagination, setPagination] = useState({
    totalPages: 1,
    totalRecords: 0,
  });


  // ================= FILTER UI =================
  const handleApplyClick = () => {
    if (dropdownMenuRef.current) {
      dropdownMenuRef.current.classList.remove("show");
    }
  };

  // ================= API CALL =================
  const fetchUsers = async (pageNo = page, pageSize = limit) => {
    try {
      setLoading(true);

      const res = await getUsersApi(pageNo, pageSize);

      if (res?.success) {
        // Temporary mapping (backend fields → UI fields)
        const formatted = res?.data?.map((u) => ({
          ...u,
          img: "assets/img/profiles/avatar-27.jpg",
          department: "Engineering",
          designation: "Developer",
          phone: "9999999999",
          dateOfJoin: "-",
        }));

        setData(formatted);
        setPagination(res?.pagination);
      }
    } catch (error) {
      console.error("Failed to load staff list", error);
    } finally {
      setLoading(false);
    }
  };

  // ================= LOAD ON CHANGE =================
  useEffect(() => {
    fetchUsers(page, limit);
  }, [page, limit]);


    const handleDeleteUser = async (user) => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "This staff will be permanently deleted.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, Delete",
  });

  if (!result.isConfirmed) return;

  try {
    const res = await deleteUserApi(user.id);

    if (res.success) {
      Swal.fire("Deleted!", "Staff deleted successfully.", "success");
      fetchUsers(); // reload table
    }
  } catch (error) {
    Swal.fire(
      "Error",
      error?.response?.data?.message || "Delete failed",
      "error"
    );
  }
};


  // ================= TABLE COLUMNS =================
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      render: (text) => (
        <Link to={routes.staffDetails} className="link-primary">
          {text}
        </Link>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => (
        <div className="d-flex align-items-center">
          {/* <Link to={routes.staffDetails} className="avatar avatar-md">
            <ImageWithBasePath
              src={record.img}
              className="img-fluid rounded-circle"
              alt="img"
            />
          </Link> */}
          <div className="ms-2">
            <p className="text-dark mb-0">
              <Link to={routes.staffDetails}>{text}</Link>
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Department",
      dataIndex: "department",
    },
    {
      title: "Designation",
      dataIndex: "designation",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    // {
    //   title: "Date of Join",
    //   dataIndex: "dateOfJoin",
    // },
    {
      title: "Action",
      render: (record) => (
        <div className="d-flex align-items-center">
          <div className="dropdown">
            <Link
              to="#"
              className="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"
              data-bs-toggle="dropdown"
            >
              <i className="ti ti-dots-vertical fs-14" />
            </Link>
            <ul className="dropdown-menu dropdown-menu-right p-3">
              <li>
                <Link className="dropdown-item rounded-1" to={routes.staffDetails}>
                  <i className="ti ti-menu me-2" />
                  View Staff
                </Link>
              </li>
              {/* <li>
                <Link className="dropdown-item rounded-1" to={routes.editStaff}>
                  <i className="ti ti-edit-circle me-2" />
                  Edit
                </Link>
              </li> */}

              <li>
            <Link
              className="dropdown-item rounded-1"
               to={`/edit-staff/${record.id}`}
            >
              <i className="ti ti-edit-circle me-2" />
              Edit
            </Link>
          </li>
              <li>
                <button
                  className="dropdown-item rounded-1 text-danger"
                  onClick={() => handleDeleteUser(record)}
                >
                  <i className="ti ti-trash-x me-2" />
                  Delete
                </button>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];




  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
            <div className="my-auto mb-2">
              <h3 className="page-title mb-1">Staffs</h3>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={routes.adminDashboard}>Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Staffs</li>
                </ol>
              </nav>
            </div>

            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap">
              <TooltipOption />
              <div className="mb-2">
                <Link
                  to={routes.addStaff}
                  className="btn btn-primary d-flex align-items-center"
                >
                  <i className="ti ti-square-rounded-plus me-2" />
                  Add Staff
                </Link>
              </div>
            </div>
          </div>

          {/* Card */}
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap pb-0">
              <h4 className="mb-3">Staff List</h4>

              {/* Rows selector */}
              {/* <div className="d-flex align-items-center mb-3">
                <span className="me-2">Rows:</span>
                <select
                  className="form-select form-select-sm w-auto"
                  value={limit}
                  onChange={(e) => {
                    setLimit(Number(e.target.value));
                    setPage(1);
                  }}
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
              </div> */}
            </div>

            <div className="card-body p-0 py-3">
              {/* Staff Table */}
              <StaffTable
                columns={columns}
                dataSource={data}
                Selection={true}
                loading={loading}
                
                pagination={pagination}
                onPageChange={(page, limit) => {
                  setPage(page);
                  setLimit(limit);
                }}
              />

              {/* Pagination */}
              {/* <div className="d-flex justify-content-between align-items-center px-3 mt-3">
                <div>
                  Page {page} of {pagination.totalPages} | Total{" "}
                  {pagination.totalRecords}
                </div>

                <div className="btn-group">
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    disabled={page === 1}
                    onClick={() => setPage((p) => p - 1)}
                  >
                    Prev
                  </button>
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    disabled={page === pagination.totalPages}
                    onClick={() => setPage((p) => p + 1)}
                  >
                    Next
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Delete Modal */}
      <div className="modal fade" id="delete-modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="delete-icon">
                <i className="ti ti-trash-x" />
              </span>
              <h4>Confirm Deletion</h4>
              <p>This action cannot be undone.</p>
              <div className="d-flex justify-content-center">
                <button className="btn btn-light me-3" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button className="btn btn-danger" data-bs-dismiss="modal">
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;


// import { useRef } from "react";
// import { Link } from "react-router-dom";

// import {
//   departmentName,
//   designationName,
//   morefilterStaff,
//   staffName,
// } from "../../../../core/common/selectoption/selectoption";
// // import Table from "../../../../core/common/dataTable/index";
// import ImageWithBasePath from "../../../../core/common/imageWithBasePath";
// import { staff } from "../../../../core/data/json/staff";
// import PredefinedDateRanges from "../../../../core/common/datePicker";
// import CommonSelect from "../../../../core/common/commonSelect";
// import { all_routes } from "../../../router/all_routes";
// import TooltipOption from "../../../../core/common/tooltipOption";
// import StaffTable from "./StaffTable";


// const Staff = () => {
//   const data = staff;
//   const routes = all_routes;
//   const dropdownMenuRef = useRef(null);
//   const handleApplyClick = () => {
//     if (dropdownMenuRef.current) {
//       dropdownMenuRef.current.classList.remove("show");
//     }
//   };
  
//   const columns = [
//     {
//       title: "ID",
//       dataIndex: "id",
//       render: (text) => (
//         <>
//           <Link to={routes.staffDetails} className="link-primary">
//             {text}
//           </Link>
//         </>
//       ),
//       sorter: (a, b) => a.id.length - b.id.length,
//     },
//     {
//       title: "Name",
//       dataIndex: "name",
//       render: (text, record) => (
//         <div className="d-flex align-items-center">
//           <Link to={routes.staffDetails} className="avatar avatar-md">
//             <ImageWithBasePath
//               src={record.img}
//               className="img-fluid rounded-circle"
//               alt="img"
//             />
//           </Link>
//           <div className="ms-2">
//             <p className="text-dark mb-0">
//               <Link to={routes.staffDetails}>{text}</Link>
//             </p>
//           </div>
//         </div>
//       ),
//       sorter: (a, b) => a.name.length - b.name.length,
//     },
//     {
//       title: "Department",
//       dataIndex: "department",
//       sorter: (a, b) =>
//         a.department.length - b.department.length,
//     },
//     {
//       title: "Designation",
//       dataIndex: "designation",
//       sorter: (a, b) =>
//         a.designation.length - b.designation.length,
//     },
//     {
//       title: "Phone",
//       dataIndex: "phone",
//       sorter: (a, b) => a.phone.length - b.phone.length,
//     },
//     {
//       title: "Email",
//       dataIndex: "email",
//       sorter: (a, b) => a.email.length - b.email.length,
//     },
//     {
//       title: "Date of Join",
//       dataIndex: "dateOfJoin",
//       sorter: (a, b) =>
//         a.dateOfJoin.length - b.dateOfJoin.length,
//     },
//     {
//       title: "Action",
//       dataIndex: "action",
//       render: () => (
//         <>
//           <div className="d-flex align-items-center">
//             <div className="dropdown">
//               <Link
//                 to="#"
//                 className="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 <i className="ti ti-dots-vertical fs-14" />
//               </Link>
//               <ul className="dropdown-menu dropdown-menu-right p-3">
//                 <li>
//                   <Link
//                     className="dropdown-item rounded-1"
//                     to={routes.staffDetails}
//                   >
//                     <i className="ti ti-menu me-2" />
//                     View Staff
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     className="dropdown-item rounded-1"
//                     to={routes.editStaff}
//                   >
//                     <i className="ti ti-edit-circle me-2" />
//                     Edit
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     className="dropdown-item rounded-1"
//                     to="#"
//                     data-bs-toggle="modal"
//                     data-bs-target="#delete-modal"
//                   >
//                     <i className="ti ti-trash-x me-2" />
//                     Delete
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </>
//       ),
//     },
//   ];



//   return (
//     <div>
//       <div className="page-wrapper">
//         <div className="content">
//           {/* Page Header */}
//           <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
//             <div className="my-auto mb-2">
//               <h3 className="page-title mb-1">Staffs</h3>
//               <nav>
//                 <ol className="breadcrumb mb-0">
//                   <li className="breadcrumb-item">
//                     <Link to={routes.adminDashboard}>Dashboard</Link>
//                   </li>
//                   {/* <li className="breadcrumb-item">
//                     <Link to="#">HRM</Link>
//                   </li> */}
//                   <li className="breadcrumb-item active" aria-current="page">
//                     Staffs
//                   </li>
//                 </ol>
//               </nav>
//             </div>
//             <div className="d-flex my-xl-auto right-content align-items-center flex-wrap">
//             <TooltipOption/>
//               <div className="mb-2">
//                 <Link
//                   to={routes.addStaff}
//                   className="btn btn-primary d-flex align-items-center"
//                 >
//                   <i className="ti ti-square-rounded-plus me-2" />
//                   Add Staff
//                 </Link>
//               </div>
//             </div>
//           </div>
//           {/* /Page Header */}
//           <div className="card">
//             <div className="card-header d-flex align-items-center justify-content-between flex-wrap pb-0">
//               <h4 className="mb-3">Staff List</h4>
//               <div className="d-flex align-items-center flex-wrap">
//                 <div className="input-icon-start mb-3 me-2 position-relative">
//                   <PredefinedDateRanges />
//                 </div>
//                 <div className="dropdown mb-3 me-2">
//                   <Link
//                     to="#"
//                     className="btn btn-outline-light bg-white dropdown-toggle"
//                     data-bs-toggle="dropdown"
//                     data-bs-auto-close="outside"
//                   >
//                     <i className="ti ti-filter me-2" />
//                     Filter
//                   </Link>
//                   <div className="dropdown-menu drop-width"  ref={dropdownMenuRef}>
//                     <form >
//                       <div className="d-flex align-items-center border-bottom p-3">
//                         <h4>Filter</h4>
//                       </div>
//                       <div className="p-3 border-bottom">
//                         <div className="row">
//                           <div className="col-md-6">
//                             <div className="mb-3">
//                               <label className="form-label">Name</label>
//                               <CommonSelect
//                                 className="select"
//                                 options={staffName}
//                               />
//                             </div>
//                           </div>
//                           <div className="col-md-6">
//                             <div className="mb-3">
//                               <label className="form-label">Department</label>
//                               <CommonSelect
//                                 className="select"
//                                 options={departmentName}
//                               />
//                             </div>
//                           </div>
//                           <div className="col-md-6">
//                             <div className="mb-0">
//                               <label className="form-label">Designation</label>
//                               <CommonSelect
//                                 className="select"
//                                 options={designationName}
//                               />
//                             </div>
//                           </div>
//                           <div className="col-md-6">
//                             <div className="mb-0">
//                               <label className="form-label">More Filter</label>
//                               <CommonSelect
//                                 className="select"
//                                 options={morefilterStaff}
//                               />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="p-3 d-flex align-items-center justify-content-end">
//                         <Link to="#" className="btn btn-light me-3">
//                           Reset
//                         </Link>
//                         <Link
//                           to="#"
//                           className="btn btn-primary"
//                           onClick={handleApplyClick}
//                         >
//                           Apply
//                         </Link>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//                 <div className="dropdown mb-3">
//                   <Link
//                     to="#"
//                     className="btn btn-outline-light bg-white dropdown-toggle"
//                     data-bs-toggle="dropdown"
//                   >
//                     <i className="ti ti-sort-ascending-2 me-2" />
//                     Sort by A-Z{" "}
//                   </Link>
//                   <ul className="dropdown-menu p-3">
//                     <li>
//                       <Link to="#" className="dropdown-item rounded-1 active">
//                         Ascending
//                       </Link>
//                     </li>
//                     <li>
//                       <Link to="#" className="dropdown-item rounded-1">
//                         Descending
//                       </Link>
//                     </li>
//                     <li>
//                       <Link to="#" className="dropdown-item rounded-1">
//                         Recently Viewed
//                       </Link>
//                     </li>
//                     <li>
//                       <Link to="#" className="dropdown-item rounded-1">
//                         Recently Added
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//             <div className="card-body p-0 py-3">
//               {/* Staffs List */}
//               <StaffTable columns={columns} dataSource={data} Selection={true} />
//               {/* /Staffs List */}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="modal fade" id="delete-modal">
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <form >
//               <div className="modal-body text-center">
//                 <span className="delete-icon">
//                   <i className="ti ti-trash-x" />
//                 </span>
//                 <h4>Confirm Deletion</h4>
//                 <p>
//                   You want to delete all the marked items, this cant be undone
//                   once you delete.
//                 </p>
//                 <div className="d-flex justify-content-center">
//                   <Link
//                     to="#"
//                     className="btn btn-light me-3"
//                     data-bs-dismiss="modal"
//                   >
//                     Cancel
//                   </Link>
//                   <Link to="#" className="btn btn-danger" data-bs-dismiss="modal"
//                   >
//                     Yes, Delete
//                   </Link>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Staff;
