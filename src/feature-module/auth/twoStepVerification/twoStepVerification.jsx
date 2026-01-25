
import { all_routes } from "../../router/all_routes";
import { useNavigate } from "react-router";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import { Link } from "react-router-dom";

const TwoStepVerification = () => {
  const routes = all_routes;
  const navigation = useNavigate();

  const navigationPath = () => {
    navigation(routes.adminDashboard);
  };
  return (
    <div className="container-fuild">
      <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
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
                <form
                  method="get"
                  className="digit-group login-form-control"
                  data-group-name="digits"
                  data-autosubmit="false"
                  autoComplete="off"
                >
                  <div className=" mx-auto mb-5 text-center">
                    <ImageWithBasePath
                      src="assets/img/authentication/authentication-logo.svg"
                      className="img-fluid"
                      alt="Logo"
                    />
                  </div>
                  <div className="card">
                    <div className="card-body p-4">
                      <div className=" mb-4">
                        <h2 className="mb-2">Login with your Email Address</h2>
                        <p className="mb-0">
                          We sent a verification code to your email. Enter the
                          code from the email in the field below
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="d-flex align-items-center mb-3">
                          <input
                            type="text"
                            className="border rounded w-100 py-sm-3 py-2 text-center fs-26 hw-bold me-3"
                            id="digit-1"
                            name="digit-1"
                            data-next="digit-2"
                            maxLength={1}
                          />
                          <input
                            type="text"
                            className="border rounded w-100 py-sm-3 py-2 text-center fs-26 hw-bold me-3"
                            id="digit-2"
                            name="digit-2"
                            data-next="digit-3"
                            data-previous="digit-1"
                            maxLength={1}
                          />
                          <input
                            type="text"
                            className="border rounded w-100 py-sm-3 py-2 text-center fs-26 hw-bold me-3"
                            id="digit-3"
                            name="digit-3"
                            data-next="digit-4"
                            data-previous="digit-2"
                            maxLength={1}
                          />
                          <input
                            type="text"
                            className="border rounded w-100 py-sm-3 py-2 text-center fs-26 hw-bold"
                            id="digit-4"
                            name="digit-4"
                            data-next="digit-5"
                            data-previous="digit-3"
                            maxLength={1}
                          />
                        </div>
                        <div>
                          <div className="badge bg-soft-danger mb-3">
                            <p>Otp will expire in 09:59</p>
                          </div>
                          <div className="form-wrap mb-0">
                            <button onClick={navigationPath}
                              type="submit"
                              className="btn btn-primary w-100"
                            >
                              Verify My Account
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 text-center">
                    <p className="mb-0 ">Copyright © 2024 - Admin</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoStepVerification;
