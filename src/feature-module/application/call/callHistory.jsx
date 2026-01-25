
import { Link } from "react-router-dom";
import { callhistorydata } from "../../../core/data/json/callHistoryData";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import Table from "../../../core/common/dataTable/index";
import { all_routes } from "../../router/all_routes";

const CallHistory = () => {
  const routes = all_routes;
  const data = callhistorydata;
  const columns = [
    {
      title: "UserName",
      dataIndex: "username",
      render: (text, record) => (
        <span className="d-flex align-items-center">
          <Link to="#" className="avatar avatar-md">
            <ImageWithBasePath alt="" src={record.image_url} className="img-fluid rounded-circle" />
          </Link>
          <Link to="#" className="ms-2">{record.username}</Link>
        </span>
      ),
      sorter: (a, b) => a.username.length - b.username.length,
    },
    {
      title: "Phone Number",
      dataIndex: "phone_number",
      sorter: (a, b) => a.phone_number.length - b.phone_number.length,
    },

    {
      title: "Call Type",
      dataIndex: "call_type",
      sorter: (a, b) => a.call_type.length - b.call_type.length,
    },

    {
      title: "Duration",
      dataIndex: "duration",
      sorter: (a, b) => a.duration.length - b.duration.length,
    },
    {
      title: "Date & Time",
      dataIndex: "date_time",
      sorter: (a, b) => a.duration.length - b.duration.length,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: () => (
        <div className="dropdown table-action">
          <Link
            to="#"
            className="action-icon"
            data-bs-toggle="dropdown"
            aria-expanded="true"
          >
            <i className="fa fa-ellipsis-v"></i>
          </Link>
          <div
            className="dropdown-menu dropdown-menu-right"
            data-bs-toggle="modal"
            data-bs-target="#user-profile-new"
            style={{
              position: "absolute",
              inset: "0px auto auto 0px",
              margin: "0px",
              transform: "translate3d(-99.3333px, 35.3333px, 0px)",
            }}
            data-popper-placement="bottom-start"
          >
            <Link className="dropdown-item edit-popup" to="#">
              <i className="ti ti-edit text-blue"></i> View
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#delete-modal"
            >
              <i className="ti ti-trash text-danger"></i> Delete
            </Link>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-header menu">
            <div className="page-title">
              <h4>Call History</h4>
              <h6>Manage your products</h6>
            </div>
          </div>
        </div>
        {/* /product list */}
        <div className="card table-list-card">
          <div className="card-body">
            {/* /Filter */}
            <div className="table-responsive product-list">
              <Table columns={columns} dataSource={data} />
            </div>
          </div>
        </div>
        {/* /product list */}
      </div>
      {/* details popup */}
      <div className="modal fade" id="user-profile-new">
        <div className="modal-dialog modal-dialog-centered history-modal-profile">
          <div className="modal-content">
            <div className="modal-body">
              <div className="text-center right-sidebar-profile mb-3">
                <figure className="avatar avatar-xxxl">
                  <ImageWithBasePath src="assets/img/users/user-23.jpg" alt="image" />
                </figure>
                <div className="chat-options chat-option-profile">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="call.html" className="btn btn-outline-light rounded-circle btn-icon"
                        data-bs-toggle="tooltip" data-bs-placement="bottom" title=""
                        data-bs-original-title="Voice Call">
                        <i className="bx bx-phone"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="chat.html" className="btn btn-outline-light rounded-circle btn-icon"
                        data-bs-toggle="tooltip" data-bs-placement="bottom" title=""
                        data-bs-original-title="Chat">
                        <i className="bx bx-message-square-dots"></i>
                      </a>
                    </li>
                    <li className="list-inline-item ">
                      <a href="video-call.html"
                        className="btn btn-outline-light profile-open rounded-circle btn-icon"
                        data-bs-toggle="tooltip" data-bs-placement="bottom" title=""
                        data-bs-original-title="Video Call">
                        <i className="bx bx-video"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-light-300 p-3 pb-1 rounded">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="modal-userlist">
                      <ul>
                        <li className="d-flex flex-column text-dark fw-medium mb-2">Name<span
                            className="text-default fw-normal">Thomas</span></li>
                        <li className="d-flex flex-column text-dark fw-medium mb-2">Phone<span
                            className="text-default fw-normal">+1 25182 94528</span></li>
                        <li className="d-flex flex-column text-dark fw-medium mb-2">Email<span
                            className="text-default fw-normal">thomas@example.com</span></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="">
                      <ul>
                        <li className="d-flex flex-column text-dark fw-medium mb-2">Total Calls<span
                            className="text-default fw-normal">20</span></li>
                        <li className="d-flex flex-column text-dark fw-medium mb-2">Average Call Timing<span
                            className="text-default fw-normal">0.30</span></li>
                        <li className="d-flex flex-column text-dark fw-medium mb-2">Average Waiting
                          Time<span className="text-default fw-normal">00.5</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /details popup */}
      {/* Delete Modal */}
      <div className="modal fade" id="delete-modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <form action="#">
              <div className="modal-body text-center">
                <span className="delete-icon">
                  <i className="ti ti-trash-x"></i>
                </span>
                <h4>Confirm Deletion</h4>
                <p>You want to delete all the marked items, this cant be undone once you delete.</p>
                <div className="d-flex justify-content-center">
                  <a href="javascript:void(0);" className="btn btn-light me-3"
                    data-bs-dismiss="modal">Cancel</a>
                  <button type="submit" className="btn btn-danger">Yes, Delete</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Delete Modal */}
    </div>
  );
};

export default CallHistory;
