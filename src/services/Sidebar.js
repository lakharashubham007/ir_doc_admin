import http from "./http";
import apis from "./index";

/**
 * GET SIDEBAR MENUS (Token Based)
 */
export const getSidebarMenus = async () => {
  const response = await http.get(apis.sidebar.getMenus);
  return response.data; 
};


export const getAllSidebarMenus = async () => {
  const response = await http.get(
    `${apis.sidebar.list}`
  );
  return response.data;
};


