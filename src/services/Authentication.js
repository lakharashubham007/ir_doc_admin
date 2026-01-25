// src/services/Authentication.js

import Swal from "sweetalert2";
import http from "./http";
import apis from "./index";

/**
 * LOGIN
 */
export const login = async (email, password) => {
  const payload = { email, password };
  const response = await http.post(apis.auth.login, payload);
  return response.data;
};

/**
 * ROLE PERMISSIONS
 */
export const getRolePermissions = async (roleId) => {
  const response = await http.get(`${apis.roles.getById}/${roleId}`);
  return response.data;
};


/**
 * CHANGE PASSWORD
 */
export const changePasswordApi = async (data) => {
  const response = await http.post(apis.auth.changePassword, data);
  return response.data;
};

/**
 * SAVE TOKEN
 */
export const saveTokenInLocalStorage = (tokenDetails) => { 
  localStorage.setItem("token", tokenDetails?.token);
  localStorage.setItem("user", JSON.stringify(tokenDetails?.user));
};

/**
 * LOGOUT
 */
export const logoutApi = async () => {
  const response = await http.post(apis.auth.logout);
  return response.data;
};

/**
 * CLEAR TOKEN
 */
export const clearAuthStorage = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("menuOpened");
};

/**
 * FORMAT ERROR
 */
export const formatError = (error) => {
  const message =
    error?.response?.data?.message || "Something went wrong";

  Swal.fire({
    icon: "error",
    title: "Oops",
    text: message,
  });
};
