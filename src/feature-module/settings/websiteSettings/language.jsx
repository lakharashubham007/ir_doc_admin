
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import CommonSelect from "../../../core/common/commonSelect";
import Table from "../../../core/common/dataTable/index";
import {
  codeLanguage,
  languageOptions,
} from "../../../core/common/selectoption/selectoption";
import { languageSet } from "../../../core/data/json/language";
import PredefinedDateRanges from "../../../core/common/datePicker";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Languagesettings = () => {
  const routes = all_routes;
  const data = languageSet;
  const columns = [
    {
      title: "Language",
      dataIndex: "language",
      sorter: (a, b) => a.language.length - b.language.length,
    },
    {
      title: "Code",
      dataIndex: "code",
      sorter: (a, b) => a.code.length - b.code.length,
    },
    {
      title: "RTL",
      dataIndex: "rtl",
      render: () => (
        <>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="switch-sm"
            />
          </div>
        </>
      ),

      sorter: (a, b) => a.rtl.length - b.rtl.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: () => (
        <>
          <span className="badge badge-soft-success d-inline-flex align-items-center">
            <i className="ti ti-circle-filled fs-5 me-1"></i>Active
          </span>
        </>
      ),
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <>
          <div className="dropdown">
            <Link
              to="#"
              className="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="ti ti-dots-vertical fs-14" />
            </Link>
            <ul className="dropdown-menu dropdown-menu-right p-3">
              <li>
                <Link className="dropdown-item rounded-1" to="#">
                  <i className="ti ti-language me-2" />
                  Make as Default
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item rounded-1"
                  to="#"
                  data-bs-toggle="modal"
                  data-bs-target="#edit_language"
                >
                  <i className="ti ti-edit-circle me-2" />
                  Edit
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item rounded-1"
                  to="#"
                  data-bs-toggle="modal"
                  data-bs-target="#language_setup"
                >
                  <i className="ti ti-settings me-2" />
                  Set up
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item rounded-1"
                  to="#"
                  data-bs-toggle="modal"
                  data-bs-target="#delete-modal"
                >
                  <i className="ti ti-trash-x me-2" />
                  Delete
                </Link>
              </li>
            </ul>
          </div>
        </>
      ),
    },
  ];
  return (
    <div>
      <div className="page-wrapper">
        <div className="content bg-white">
          <div className="d-md-flex d-block align-items-center justify-content-between border-bottom pb-3">
            <div className="my-auto mb-2">
              <h3 className="page-title mb-1">Website Settings</h3>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="index">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="#">Settings</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Website Settings
                  </li>
                </ol>
              </nav>
            </div>
            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap">
              <div className="pe-1 mb-2">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="tooltip-top">Refresh</Tooltip>}
                >
                  <Link
                    to="#"
                    className="btn btn-outline-light bg-white btn-icon me-1"
                  >
                    <i className="ti ti-refresh" />
                  </Link>
                </OverlayTrigger>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-2 col-xl-3">
              <div className="pt-3 d-flex flex-column list-group mb-4">
                <Link
                  to={routes.companySettings}
                  className="d-block rounded p-2"
                >
                  Company Settings
                </Link>
                <Link to={routes.localization} className="d-block rounded p-2">
                  Localization
                </Link>
                <Link to={routes.prefixes} className="d-block rounded p-2">
                  Prefixes
                </Link>
                <Link to={routes.preference} className="d-block rounded p-2">
                  Preferences
                </Link>
                <Link
                  to={routes.socialAuthentication}
                  className="d-block rounded p-2"
                >
                  Social Authentication
                </Link>
                <Link
                  to={routes.language}
                  className="d-block rounded p-2 active"
                >
                  Language
                </Link>
              </div>
            </div>
            <div className="col-xxl-10 col-xl-9">
              <div className="border-start ps-3">
                <div className="d-flex align-items-center justify-content-between flex-wrap border-bottom pt-3 mb-3">
                  <div className="mb-3">
                    <h5 className="mb-1">Language</h5>
                    <p>Personalize your Language settings of your website</p>
                  </div>
                  <div className="mb-3">
                    <Link
                      to="#"
                      className="btn btn-light me-2"
                      data-bs-toggle="modal"
                      data-bs-target="#import_file"
                    >
                      <i className="ti ti-download me-2" />
                      Import
                    </Link>
                    <Link
                      to="#"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#add_language"
                    >
                      <i className="ti ti-square-rounded-plus-filled me-2" />
                      Add Language
                    </Link>
                  </div>
                </div>
                {/* Students List */}
                <div className="card">
                  <div className="card-header d-flex align-items-center justify-content-between flex-wrap pb-0">
                    <h4 className="mb-3">Language</h4>
                    <div className="d-flex align-items-center flex-wrap">
                      <div className="input-icon-start mb-3 me-2 position-relative">
                        <PredefinedDateRanges />
                      </div>
                      <div className="dropdown mb-3 me-2">
                        <Link
                          to="#"
                          className="btn btn-outline-light bg-white dropdown-toggle"
                          data-bs-toggle="dropdown"
                          data-bs-auto-close="outside"
                        >
                          <i className="ti ti-filter me-2" />
                          Filter
                        </Link>
                        <div className="dropdown-menu drop-width">
                          <form>
                            <div className="d-flex align-items-center border-bottom p-3">
                              <h4>Filter</h4>
                            </div>
                            <div className="p-3 pb-0 border-bottom">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="mb-3">
                                    <label className="form-label">
                                      Language
                                    </label>
                                    <CommonSelect
                                      className="select"
                                      options={languageOptions}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="mb-3">
                                    <label className="form-label">Code</label>
                                    <CommonSelect
                                      className="select"
                                      options={codeLanguage}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="p-3 d-flex align-items-center justify-content-end">
                              <Link to="#" className="btn btn-light me-2">
                                Reset
                              </Link>
                              <button type="submit" className="btn btn-primary">
                                Apply
                              </button>
                            </div>
                          </form>
                        </div>
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
                            <Link to="#" className="dropdown-item rounded-1">
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
                    <Table
                      columns={columns}
                      dataSource={data}
                      Selection={true}
                    />
                    {/* /Student List */}
                  </div>
                </div>
                {/* /Students List */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Language */}
      <div className="modal fade" id="add_language">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add Language</h4>
              <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal"
                aria-label="Close">
                <i className="ti ti-x"></i>
              </button>
            </div>
            <form>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Language Name</label>
                      <input type="text" className="form-control" placeholder="Enter Language Name" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Code</label>
                      <input type="text" className="form-control" placeholder="Enter Code" />
                    </div>
                    <div className="modal-satus-toggle d-flex align-items-center justify-content-between mb-3">
                      <div className="status-title">
                        <h5>RTL</h5>
                        <p>Change the Status by toggle </p>
                      </div>
                      <div className="status-toggle modal-status">
                        <input type="checkbox" id="user5" className="check" />
                        <label htmlFor="user5" className="checktoggle"> </label>
                      </div>
                    </div>
                    <div className="modal-satus-toggle d-flex align-items-center justify-content-between">
                      <div className="status-title">
                        <h5>Status</h5>
                        <p>Change the Status by toggle </p>
                      </div>
                      <div className="status-toggle modal-status">
                        <input type="checkbox" id="user6" className="check" defaultChecked />
                        <label htmlFor="user6" className="checktoggle"> </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-light me-2" data-bs-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-primary">Add Language</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Language */}

      {/* Edit Language */}
      <div className="modal fade" id="edit_language">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Language</h4>
              <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal"
                aria-label="Close">
                <i className="ti ti-x"></i>
              </button>
            </div>
            <form>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Language Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Language Name"
                        defaultValue="English"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Code</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Code"
                        defaultValue="en"
                      />
                    </div>
                    <div className="modal-satus-toggle d-flex align-items-center justify-content-between mb-3">
                      <div className="status-title">
                        <h5>RTL</h5>
                        <p>Change the Status by toggle </p>
                      </div>
                      <div className="status-toggle modal-status">
                        <input type="checkbox" id="user7" className="check" defaultChecked />
                        <label htmlFor="user7" className="checktoggle"> </label>
                      </div>
                    </div>
                    <div className="modal-satus-toggle d-flex align-items-center justify-content-between">
                      <div className="status-title">
                        <h5>Status</h5>
                        <p>Change the Status by toggle </p>
                      </div>
                      <div className="status-toggle modal-status">
                        <input type="checkbox" id="user8" className="check" defaultChecked />
                        <label htmlFor="user8" className="checktoggle"> </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-light me-2" data-bs-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-primary">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Edit Language */}

      {/* Language Setup */}
      <div className="modal fade" id="language_setup">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Language Setup</h4>
              <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal"
                aria-label="Close">
                <i className="ti ti-x"></i>
              </button>
            </div>
            <div className="modal-body">
              {/* Table Filter */}
              <div className="d-flex align-items-center justify-content-between flex-wrap">
                <div className="d-flex align-items-center">
                  <h5 className="mb-3 me-2">Search Criteria</h5>
                  <div className="dropdown mb-3 me-2">
                    <button type="button" className="btn btn-outline-light bg-white dropdown-toggle"
                      data-bs-toggle="dropdown" data-bs-auto-close="outside">
                      <i className="ti ti-filter me-2"></i>Filter
                    </button>
                    <div className="dropdown-menu drop-width">
                      <form>
                        <div className="d-flex align-items-center border-bottom p-3">
                          <h4>Filter</h4>
                        </div>
                        <div className="p-3 pb-0 border-bottom">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="mb-3">
                                <label className="form-label">Select Language</label>
                                <select className="form-select">
                                  <option>English</option>
                                  <option>Arabic</option>
                                  <option>Chinese</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="p-3 d-flex align-items-center justify-content-end">
                          <button type="button" className="btn btn-light me-3">Reset</button>
                          <button type="button" className="btn btn-primary">Apply</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="dropdown mb-3">
                  <button type="button" className="btn btn-outline-light bg-white dropdown-toggle"
                    data-bs-toggle="dropdown">
                    <i className="ti ti-sort-ascending-2 me-2"></i>Sort by A-Z
                  </button>
                  <ul className="dropdown-menu p-3">
                    <li>
                      <button type="button" className="dropdown-item rounded-1 active">
                        Ascending
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item rounded-1">
                        Descending
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item rounded-1">
                        Recently Viewed
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item rounded-1">
                        Recently Added
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /Table Filter */}

              <div className="table-responsive">
                <div className="custom-table language-setup-table">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Default Phrases</th>
                        <th>Change Phrases</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                        <tr key={item}>
                          <td>Description {item}</td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Text"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-light me-2" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
      {/* /Language Setup */}

      {/* Import File */}
      <div className="modal fade" id="import_file">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Import Files</h4>
              <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal"
                aria-label="Close">
                <i className="ti ti-x"></i>
              </button>
            </div>
            <form>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Module Name</label>
                      <select className="form-select">
                        <option>Select</option>
                        <option>Students</option>
                        <option>Parents</option>
                        <option>Teachers</option>
                      </select>
                    </div>
                    <div className="mb-0">
                      <label className="form-label">Language</label>
                      <select className="form-select">
                        <option>Select</option>
                        <option>English</option>
                        <option>Arabic</option>
                        <option>Chinese</option>
                        <option>Hindi</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-light me-2" data-bs-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-primary">Import</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Import File */}

      {/* Delete Modal */}
      <div className="modal fade" id="delete-modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="delete-icon">
                <i className="ti ti-trash-x"></i>
              </span>
              <h4>Confirm Deletion</h4>
              <p>You want to delete all the marked items, this cant be undone once you delete.</p>
              <div className="d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-light me-2"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-danger">
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete Modal */}
    </div>
  );
};

export default Languagesettings;
