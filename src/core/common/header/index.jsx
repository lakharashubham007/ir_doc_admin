import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setDataLayout,
  setDataTheme,
} from "../../data/redux/themeSettingSlice";
import ImageWithBasePath from "../imageWithBasePath";
import {
  setExpandMenu,
  setMobileSidebar,
} from "../../data/redux/sidebarSlice";
import { useState } from "react";
import { all_routes } from "../../../feature-module/router/all_routes";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { logoutApi, clearAuthStorage } from "../../../services/Authentication";

const Header = () => {
  const routes = all_routes;
  const dispatch = useDispatch();
  const dataTheme = useSelector((state) => state.themeSetting.dataTheme);
  const dataLayout = useSelector((state) => state.themeSetting.dataLayout);
  const [notificationVisible, setNotificationVisible] = useState(false);
  const navigate = useNavigate();


  const mobileSidebar = useSelector(
    (state) => state.sidebarSlice.mobileSidebar
  );

  const toggleMobileSidebar = () => {
    dispatch(setMobileSidebar(!mobileSidebar));
  };

  const onMouseEnter = () => {
    dispatch(setExpandMenu(true));
  };
  const onMouseLeave = () => {
    dispatch(setExpandMenu(false));
  };
  const handleToggleMiniSidebar = () => {
    if (dataLayout === "mini_layout") {
      dispatch(setDataLayout("default_layout"));
      localStorage.setItem("dataLayout", "default_layout");
    } else {
      dispatch(setDataLayout("mini_layout"));
      localStorage.setItem("dataLayout", "mini_layout");
    }
  };

  const handleToggleClick = () => {
    if (dataTheme === "default_data_theme") {
      dispatch(setDataTheme("dark_data_theme"));
      // localStorage.setItem(dataTheme,"dark_data_theme")
    } else {
      dispatch(setDataTheme("default_data_theme"));
      // localStorage.removeItem(dataTheme)
    }
  };
  const location = useLocation();
  const toggleNotification = () => {
    setNotificationVisible(!notificationVisible);
  };

  const [isFullscreen, setIsFullscreen] = useState(false);
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {
        });
        setIsFullscreen(true);
      }
    } else {
      if (document.exitFullscreen) {
        if (document.fullscreenElement) {
          document.exitFullscreen().catch(() => {
          });
        }
        setIsFullscreen(false);
      }
    }
  };

  const handleLogout = async () => {
    const confirm = await Swal.fire({
      title: "Logout?",
      text: "Are you sure you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Logout",
    });

    if (!confirm.isConfirmed) return;

    try {
      await logoutApi(); // backend invalidate token (optional)
    } catch (error) {
      console.warn("Logout API failed, continuing logout");
    } finally {
      clearAuthStorage();
      navigate(routes.login, { replace: true });
    }
  };


  return (
    <>
      {/* Header */}
      <div className="header">
        {/* Logo */}
        <div
          className="header-left active"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link to={routes.adminDashboard} className="logo logo-normal">
            <ImageWithBasePath src="assets/img/logo.svg" alt="Logo" />
          </Link>
          <Link to={routes.adminDashboard} className="logo-small">
            <ImageWithBasePath src="assets/img/logo-small.svg" alt="Logo" />
          </Link>
          <Link to={routes.adminDashboard} className="dark-logo">
            <ImageWithBasePath src="assets/img/logo-dark.svg" alt="Logo" />
          </Link>
          <Link id="toggle_btn" to="#" onClick={handleToggleMiniSidebar}>
            <i className="ti ti-menu-deep" />
          </Link>
        </div>
        {/* /Logo */}
        <Link
          id="mobile_btn"
          className="mobile_btn"
          to="#sidebar"
          onClick={toggleMobileSidebar}
        >
          <span className="bar-icon">
            <span />
            <span />
            <span />
          </span>
        </Link>
        <div className="header-user">
          <div className="nav user-menu">
            {/* Search */}
            <div className="nav-item nav-search-inputs me-auto">
              <div className="top-nav-search">
                <Link to="#" className="responsive-search">
                  <i className="fa fa-search" />
                </Link>
                <form action="#" className="dropdown">
                  <div className="searchinputs" id="dropdownMenuClickable">
                    <input type="text" placeholder="Search" />
                    <div className="search-addon">
                      <button type="submit">
                        <i className="ti ti-command" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* /Search */}
            <div className="d-flex align-items-center">




              <div className="dropdown ms-1">
                <Link
                  to="#"
                  className="dropdown-toggle d-flex align-items-center"
                  data-bs-toggle="dropdown"
                >
                  <span className="avatar avatar-md rounded">
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-27.jpg"
                      alt="Img"
                      className="img-fluid"
                    />
                  </span>
                </Link>
                <div className="dropdown-menu">
                  <div className="d-block">
                    <div className="d-flex align-items-center p-2">
                      <span className="avatar avatar-md me-2 online avatar-rounded">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-27.jpg"
                          alt="img"
                        />
                      </span>
                      <div>
                        <h6>Kevin Larry</h6>
                        <p className="text-primary mb-0">Administrator</p>
                      </div>
                    </div>
                    <hr className="m-0" />
                    <Link
                      className="dropdown-item d-inline-flex align-items-center p-2"
                      to={routes.profile}
                    >
                      <i className="ti ti-user-circle me-2" />
                      My Profile
                    </Link>
                    <Link
                      className="dropdown-item d-inline-flex align-items-center p-2"
                      to={routes.profilesettings}
                    >
                      <i className="ti ti-settings me-2" />
                      Settings
                    </Link>
                    <hr className="m-0" />
                    {/* <Link
                      className="dropdown-item d-inline-flex align-items-center p-2"
                      to={routes.login}
                    >
                      <i className="ti ti-login me-2" />
                      Logout
                    </Link> */}
                    <button
                      type="button"
                      className="dropdown-item d-inline-flex align-items-center p-2 border-0 bg-transparent"
                      onClick={handleLogout}
                    >
                      <i className="ti ti-login me-2" />
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
        {/* Mobile Menu */}
        <div className="dropdown mobile-user-menu">
          <Link
            to="#"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa fa-ellipsis-v" />
          </Link>
          <div className="dropdown-menu dropdown-menu-end">
            <Link className="dropdown-item" to={routes.profile}>
              My Profile
            </Link>
            <Link className="dropdown-item" to={routes.profilesettings}>
              Settings
            </Link>
            {/* <Link className="dropdown-item" to={routes.login}>
              Logout
            </Link> */}
            <button
              className="dropdown-item"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
        {/* /Mobile Menu */}
      </div>
      {/* /Header */}
    </>
  );
};

export default Header;




