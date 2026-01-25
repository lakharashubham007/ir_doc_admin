import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { SidebarData } from "../../data/json/sidebarData";
import ImageWithBasePath from "../imageWithBasePath";
import "../../../style/icon/tabler-icons/webfont/tabler-icons.css";
import { setExpandMenu } from "../../data/redux/sidebarSlice";
import { useDispatch } from "react-redux";
import {
  resetAllMode,
  setDataLayout,
  setDataTheme,
} from "../../data/redux/themeSettingSlice";
import usePreviousRoute from "./usePreviousRoute";

import "../../../../node_modules/react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import "../../../../node_modules/react-perfect-scrollbar/dist/css/styles.css";
import { getSidebarMenus } from "../../../services/SidebarMenus";

const Sidebar = () => {
  const Location = useLocation();
  const [subOpen, setSubopen] = useState("");
  const [subsidebar, setSubsidebar] = useState("");
  const location = useLocation();
  const dispatch = useDispatch();
  const previousLocation = usePreviousRoute();
  const [sidebarData, setSidebarData] = useState([]);
  const [loadingMenus, setLoadingMenus] = useState(false);

  // console.log("sidebarData",sidebarData);

  const toggleSidebar = (title) => {
    localStorage.setItem("menuOpened", title);
    if (title === subOpen) {
      setSubopen("");
    } else {
      setSubopen(title);
    }
  };

  const toggleSubsidebar = (subitem) => {
    if (subitem === subsidebar) {
      setSubsidebar("");
    } else {
      setSubsidebar(subitem);
    }
  };

  const formatSidebarData = (apiData = []) => {
  return apiData
    ?.filter(menu => menu.mainmenu === 1 && menu.is_active === 1)
    ?.map((menu) => ({
      // MAIN HEADER
      label: menu.title?.toUpperCase(),
      submenuOpen: true,
      showSubRoute: false,
      submenuHdr: menu.title,

      // CHILD MENUS
      submenuItems: (menu.children || [])
        ?.filter(child => child.is_active === 1)
        ?.map((child) => ({
          label: child.title,
          icon: child.icon || "ti ti-circle",
          link: child.route,
          submenu: child.submenu === 1,   // 👈 important
          showSubRoute: false,

          // future ready if nested children come later
          submenuItems: [],
        })),
    }));
};


  useEffect(() => {
    const fetchSidebarMenus = async () => {
      try {
        setLoadingMenus(true);
        const res = await getSidebarMenus();

        if (res?.success) {
          const formattedMenus = formatSidebarData(res.data);
          setSidebarData(formattedMenus);
          // setSidebarData(res.data);
        } else {
          setSidebarData([]);
        }
      } catch (error) {
        console.error("Failed to load sidebar menus", error);
        setSidebarData([]);
      } finally {
        setLoadingMenus(false);
      }
    };

    fetchSidebarMenus();
  }, []);


  // Handle layout page navigation based on route
  useEffect(() => {
    const layoutRouteMap = {
      '/layout-dark': { theme: 'dark_data_theme', layout: 'default_layout' },
      '/layout-default': { theme: 'default_data_theme', layout: 'default_layout' },
      '/layout-mini': { theme: 'default_data_theme', layout: 'mini_layout' },
      '/layout-rtl': { theme: 'default_data_theme', layout: 'rtl' },
      '/layout-box': { theme: 'default_data_theme', layout: 'boxed_layout' },
    };

    // Check if current path is a layout route
    const currentRoute = Object.keys(layoutRouteMap).find(route =>
      location.pathname.includes(route)
    );

    if (currentRoute) {
      const { theme, layout } = layoutRouteMap[currentRoute];

      // Set both theme and layout for each route
      dispatch(setDataTheme(theme));
      localStorage.setItem("dataTheme", theme);

      dispatch(setDataLayout(layout));
      localStorage.setItem("dataLayout", layout);
    }
  }, [location.pathname, dispatch]);

  useEffect(() => {
    const layoutPages = [
      "/layout-dark",
      "/layout-rtl",
      "/layout-mini",
      "/layout-box",
      "/layout-default",
    ];

    const isCurrentLayoutPage = layoutPages.some((path) =>
      location.pathname.includes(path)
    );
    const isPreviousLayoutPage =
      previousLocation &&
      layoutPages.some((path) => previousLocation.pathname.includes(path));

    // Only reset when leaving ALL layout pages (going to a non-layout page)
    // Don't reset when moving between layout pages
    if (isPreviousLayoutPage && !isCurrentLayoutPage) {
      dispatch(resetAllMode());
    }
  }, [location, previousLocation, dispatch]);

  useEffect(() => {
    setSubopen(localStorage.getItem("menuOpened"));
    // Select all 'submenu' elements
    const submenus = document.querySelectorAll(".submenu");

    const mainWrapper = document.querySelector('.main-wrapper');
    if (mainWrapper) {
      mainWrapper.classList.remove('slide-nav');
    }
    // Loop through each 'submenu'
    submenus.forEach((submenu) => {
      // Find all 'li' elements within the 'submenu'
      const listItems = submenu.querySelectorAll("li");
      submenu.classList.remove("active");
      // Check if any 'li' has the 'active' class
      listItems.forEach((item) => {
        if (item.classList.contains("active")) {
          // Add 'active' class to the 'submenu'
          submenu.classList.add("active");
          return;
        }
      });
    });
  }, [Location.pathname]);


  const onMouseEnter = () => {
    dispatch(setExpandMenu(true));
  };
  const onMouseLeave = () => {
    dispatch(setExpandMenu(false));
  };

  const handleClick = (label, themeSetting, layout) => {
    toggleSidebar(label);
    if (themeSetting) {
      if (label === 'Dark') {
        dispatch(setDataTheme('dark_data_theme'));
        localStorage.setItem("dataTheme", 'dark_data_theme');
      } else if (label === 'Default') {
        dispatch(setDataTheme('default_data_theme'));
        localStorage.setItem("dataTheme", 'default_data_theme');
      } else {
        dispatch(setDataLayout(layout));
        localStorage.setItem("dataLayout", layout);
      }
    }
  };

  const getLayoutClass = (label) => {
    switch (label) {
      case "Default":
        return "default_layout";
      case "Mini":
        return "mini_layout";
      case "Box":
        return "boxed_layout";
      case "Dark":
        return "dark_data_theme";
      case "RTL":
        return "rtl";
      default:
        return "";
    }
  };


  return (
    <>
      <div
        className="sidebar"
        id="sidebar"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <PerfectScrollbar>
          <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu">
              <ul>
                <li>
                  <Link
                    to="#"
                    className="d-flex align-items-center border bg-white rounded p-2 mb-4"
                  >
                    <ImageWithBasePath
                      src="assets/img/icons/global-img.svg"
                      className="avatar avatar-md img-fluid rounded"
                      alt="Profile"
                    />
                    <span className="text-dark ms-2 fw-normal">
                      IR Document
                    </span>
                  </Link>
                </li>
              </ul>

              <ul>
                {sidebarData?.map((mainLabel, index) => (
                  <li key={index}>
                    {/* //header MAin menu  */}
                    <h6 className="submenu-hdr">
                      <span>{mainLabel?.label}</span>
                    </h6>
                    <ul>
                      {mainLabel?.submenuItems?.map((title) => {
                        // Flatten all nested links for active state matching
                        const flatLinks = [
                          title?.link,
                          title?.subLink1,
                          title?.subLink2,
                          title?.subLink3,
                          title?.subLink4,
                          title?.subLink5,
                          title?.subLink6,
                          title?.subLink7,
                          ...(title?.submenuItems?.flatMap((link) => {
                            return [
                              link?.link,
                              ...(link?.submenuItems?.map(
                                (item) => item?.link
                              ) || []),
                            ];
                          }) || []),
                        ].filter(Boolean); // remove undefined/null

                        const isActive = flatLinks.includes(Location.pathname);

                        return (
                          <li className="submenu" key={title.label}>
                            <Link
                              to={title?.submenu ? "#" : title?.link}
                              onClick={() =>
                                handleClick(
                                  title?.label,
                                  title?.themeSetting,
                                  getLayoutClass(title?.label)
                                )
                              }
                              className={`${subOpen === title?.label ? "subdrop" : ""
                                } ${isActive ? "active" : ""}`}
                            >
                              <i className={title.icon}></i>
                              <span>{title?.label}</span>
                              {title?.version && (
                                <span className="badge badge-primary badge-xs text-white fs-10 ms-auto">
                                  {title?.version}
                                </span>
                              )}
                              <span
                                className={title?.submenu ? "menu-arrow" : ""}
                              />
                            </Link>

                            {/* Submenu Level 1 */}
                            {title?.submenu !== false &&
                              subOpen === title?.label && (
                                <ul style={{ display: "block" }}>
                                  {title?.submenuItems?.map((item) => {
                                    const subLinks = [
                                      item?.link,
                                      item?.subLink1,
                                      item?.subLink2,
                                      item?.subLink3,
                                      item?.subLink4,
                                      item?.subLink5,
                                      item?.subLink6,
                                      ...(item?.submenuItems?.map(
                                        (sub) => sub?.link
                                      ) || []),
                                    ].filter(Boolean);

                                    const isSubActive = subLinks.includes(
                                      Location.pathname
                                    );

                                    return (
                                      <li
                                        key={item.label}
                                        className={
                                          item?.submenuItems
                                            ? "submenu submenu-two"
                                            : ""
                                        }
                                      >
                                        <Link
                                          to={item?.link}
                                          className={`${isSubActive ? "active" : ""
                                            } ${subsidebar === item?.label
                                              ? "subdrop"
                                              : ""
                                            }`}
                                          onClick={() =>
                                            toggleSubsidebar(item?.label)
                                          }
                                        >
                                          {item?.label}
                                          <span
                                            className={
                                              item?.submenu ? "menu-arrow" : ""
                                            }
                                          />
                                        </Link>

                                        {/* Submenu Level 2 */}
                                        {item?.submenuItems &&
                                          subsidebar === item?.label && (
                                            <ul style={{ display: "block" }}>
                                              {item?.submenuItems?.map(
                                                (subItem) => {
                                                  const isDeepActive =
                                                    subItem?.link ===
                                                    Location.pathname;

                                                  return (
                                                    <li key={subItem.label}>
                                                      <Link
                                                        to={subItem?.link}
                                                        className={`submenu-two ${isDeepActive
                                                          ? "active"
                                                          : ""
                                                          }`}
                                                      >
                                                        {subItem?.label}
                                                      </Link>
                                                    </li>
                                                  );
                                                }
                                              )}
                                            </ul>
                                          )}
                                      </li>
                                    );
                                  })}
                                </ul>
                              )}
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </PerfectScrollbar>
      </div>
    </>
  );
};

export default Sidebar;
