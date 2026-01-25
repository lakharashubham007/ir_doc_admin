import { useEffect, useState } from "react";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import { login, saveTokenInLocalStorage, formatError } from "../../../services/Authentication";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const routes = all_routes;
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };
  useEffect(() => {
    localStorage.setItem("menuOpened", "Dashboard");
  }, []);
  const date = () => {
    return new Date().getFullYear();
  };

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Email and password required");
      return;
    }

    try {
      setLoading(true);

      const res = await login(email, password);

      saveTokenInLocalStorage({
        token: res?.data?.accessToken,
        user: res?.data?.user,
      });

      navigate(routes.adminDashboard);

    } catch (error) {
      formatError(error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="container-fuild">
      <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
        <div className="row">
          <div className="col-lg-6">
            <div className="login-background d-lg-flex align-items-center justify-content-center d-lg-block d-none flex-wrap vh-100 overflowy-auto">
              <div>
                <ImageWithBasePath
                  src="assets/img/authentication/authentication-02.jpg"
                  alt=""
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
                      <div className="card-body pb-3">
                        <div className=" mb-4">
                          <h2 className="mb-2">Welcome</h2>
                          <p className="mb-0">
                            Please enter your details to sign in
                          </p>
                        </div>
                        <div className="mt-4">
                          <div className="d-flex align-items-center justify-content-center flex-wrap">
                            <div className="text-center me-2 flex-fill">
                              <Link
                                to="#"
                                className="bg-primary br-10 p-2 btn btn-primary  d-flex align-items-center justify-content-center"
                              >
                                <ImageWithBasePath
                                  className="img-fluid m-1"
                                  src="assets/img/icons/facebook-logo.svg"
                                  alt="Facebook"
                                />
                              </Link>
                            </div>
                            <div className="text-center me-2 flex-fill">
                              <Link
                                to="#"
                                className=" br-10 p-2 btn btn-outline-light  d-flex align-items-center justify-content-center"
                              >
                                <ImageWithBasePath
                                  className="img-fluid  m-1"
                                  src="assets/img/icons/google-logo.svg"
                                  alt="Facebook"
                                />
                              </Link>
                            </div>
                            <div className="text-center flex-fill">
                              <Link
                                to="#"
                                className="bg-dark br-10 p-2 btn btn-dark d-flex align-items-center justify-content-center"
                              >
                                <ImageWithBasePath
                                  className="img-fluid  m-1"
                                  src="assets/img/icons/apple-logo.svg"
                                  alt="Apple"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="login-or">
                          <span className="span-or">Or</span>
                        </div>
                      
                        <div className="mb-3">
                          <label className="form-label">Email Address</label>

                          <div className="input-icon mb-3 position-relative">
                            <span className="input-icon-addon">
                              <i className="ti ti-mail" />
                            </span>

                            <input
                              type="email"
                              className="form-control"
                              placeholder="Enter your email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>

                          <label className="form-label">Password</label>

                          <div className="pass-group">
                            <input
                              type={isPasswordVisible ? "text" : "password"}
                              className="pass-input form-control"
                              placeholder="Enter your password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />

                            <span
                              className={`ti toggle-password ${isPasswordVisible ? "ti-eye" : "ti-eye-off"
                                }`}
                              onClick={togglePasswordVisibility}
                              style={{ cursor: "pointer" }}
                            />
                          </div>
                        </div>

                        <div className="form-wrap form-wrap-checkbox">
                          <div className="d-flex align-items-center">
                            <div className="form-check form-check-md mb-0">
                              <input
                                className="form-check-input mt-0"
                                type="checkbox"
                              />
                            </div>
                            <p className="ms-1 mb-0 ">Remember Me</p>
                          </div>
                          <div className="text-end ">
                            <Link to={routes.forgotPassword} className="link-danger">
                              Forgot Password?
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 pt-0">
                        <div className="mb-3">                         
                          <button
                            type="button"
                            className="btn btn-primary w-100"
                            onClick={handleLogin}
                            disabled={loading}
                          >
                            {loading ? "Signing In..." : "Sign In"}
                          </button>
                        </div>
                        <div className="text-center">
                          <h6 className="fw-normal text-dark mb-0">
                            Don’t have an account?{" "}
                            <Link to={routes.register} className="hover-a ">
                              {" "}
                              Create Account
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 text-center">
                      <p className="mb-0 ">Copyright © {date()} - Admin</p>
                    </div>
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

export default Login;
