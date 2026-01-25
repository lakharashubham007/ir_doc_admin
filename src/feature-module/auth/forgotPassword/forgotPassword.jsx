
import { Link, useNavigate } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";

const ForgotPassword = () => {
  const routes = all_routes;
  const navigation = useNavigate();

  const navigationPath = () => {
    navigation(routes.resetPassword);
  };
  return (
    <>
      <div className="container-fuild">
        <div className="login-wrapper w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
          <div className="row">
            <div className="col-lg-6">
              <div className="login-background position-relative d-lg-flex align-items-center justify-content-center d-lg-block d-none flex-wrap vh-100 overflowy-auto">
                <div>
                  <ImageWithBasePath
                    src="assets/img/authentication/authentication-03.jpg"
                    alt="Img"
                  />
                </div>
                 <div className="authen-overlay-item w-100 p-4">
                <h4 className="text-white mb-3">
                  IR Document Management – Platform Overview
                </h4>

                {/* Feature 1 */}
                <div className="d-flex align-items-center flex-row mb-3 justify-content-between p-3 br-5 gap-3 card">
                  <div>
                    <h6>Centralized Document Repository</h6>
                    <p
                      className="mb-0 text-muted"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      Securely store, organize, and manage all investor relations documents in a unified and searchable platform.
                    </p>
                  </div>
                  <Link to="#">
                    <i className="ti ti-chevrons-right" />
                  </Link>
                </div>

                {/* Feature 2 */}
                <div className="d-flex align-items-center flex-row mb-3 justify-content-between p-3 br-5 gap-3 card">
                  <div>
                    <h6>Version Control & Audit Trail</h6>
                    <p
                      className="mb-0 text-muted"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      Track every document revision, approval history, and change log to ensure transparency and compliance readiness.
                    </p>
                  </div>
                  <Link to="#">
                    <i className="ti ti-chevrons-right" />
                  </Link>
                </div>

                {/* Feature 3 */}
                <div className="d-flex align-items-center flex-row mb-3 justify-content-between p-3 br-5 gap-3 card">
                  <div>
                    <h6>Role-Based Access & Security</h6>
                    <p
                      className="mb-0 text-muted"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      Protect sensitive financial and compliance documents with granular access control and permission management.
                    </p>
                  </div>
                  <Link to="#">
                    <i className="ti ti-chevrons-right" />
                  </Link>
                </div>

                {/* Feature 4 */}
                <div className="d-flex align-items-center flex-row mb-3 justify-content-between p-3 br-5 gap-3 card">
                  <div>
                    <h6>Regulatory Compliance Automation</h6>
                    <p
                      className="mb-0 text-muted"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      Manage SEBI filings, disclosures, deadlines, and alerts using automated workflows and validations.
                    </p>
                  </div>
                  <Link to="#">
                    <i className="ti ti-chevrons-right" />
                  </Link>
                </div>

                {/* Feature 5 */}
                <div className="d-flex align-items-center flex-row mb-0 justify-content-between p-3 br-5 gap-3 card">
                  <div>
                    <h6>Collaboration, Review & Approvals</h6>
                    <p
                      className="mb-0 text-muted"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      Enable real-time collaboration between legal, finance, and leadership teams with approval workflows.
                    </p>
                  </div>
                  <Link to="#">
                    <i className="ti ti-chevrons-right" />
                  </Link>
                </div>
              </div>

              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap ">
                <div className="col-md-8 mx-auto p-4">
                  <form>
                    <div>
                      <div className=" mx-auto mb-5 text-center">
                        <ImageWithBasePath
                          src="assets/img/logo.svg"
                          className="img-fluid"
                          alt="Logo"
                        />
                      </div>
                      <div className="card">
                        <div className="card-body p-4">
                          <div className=" mb-4">
                            <h2 className="mb-2">Forgot Password?</h2>
                            <p className="mb-0">
                              If you forgot your password, well, then we’ll
                              email you instructions to reset your password.
                            </p>
                          </div>
                          <div className="mb-3 ">
                            <label className="form-label">Email Address</label>
                            <div className="input-icon mb-3 position-relative">
                              <span className="input-icon-addon">
                                <i className="ti ti-mail" />
                              </span>
                              <input
                                type="text"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="mb-3">
                            <button onClick={navigationPath}
                              type="submit"
                              className="btn btn-primary w-100"
                            >
                              Sign In
                            </button>
                          </div>
                          <div className="text-center">
                            <h6 className="fw-normal text-dark mb-0">
                              Return to{" "}
                              <Link to={routes.login} className="hover-a ">
                                {" "}
                                Login
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="mt-5 text-center">
                        <p className="mb-0 ">Copyright © 2024 - Admin</p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
