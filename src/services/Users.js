import http from "./http";
import apis from "./index";

/**
 * GET USERS (PAGINATION)
 */
export const getUsersApi = async (page , limit ) => {
  const response = await http.get(
    `${apis.users.list}?page=${page}&limit=${limit}`
  );
  return response.data;
};

/**
 * CREATE USER
 */
export const createUserApi = async (payload) => {
  const response = await http.post(apis.users.create, payload);
  return response.data;
};

/**
 * UPDATE USER
 */
export const updateUserApi = async (id, payload) => {
  const response = await http.put(`${apis.users.update}/${id}`, payload);
  return response.data;
};

/**
 * DELETE USER
 */
export const deleteUserApi = async (id) => {
  const response = await http.delete(`${apis.users.delete}/${id}`);
  return response.data;
};

/**
 * GET USER BY ID
 */
export const getUserByIdApi = async (id) => {
  const response = await http.get(`${apis.users.getById}/${id}`);
  return response.data;
};

