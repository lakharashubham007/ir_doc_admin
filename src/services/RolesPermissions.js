import http from "./http";
import apis from "./index";

/**
 * GET ROLES (PAGINATION)
 */
export const getRolesApi = async (page, limit) => {
  const response = await http.get(
    `${apis.roles.list}?page=${page}&limit=${limit}`
  );
  return response.data;
};


export const getRolesListApi = async (page, limit) => {
  const response = await http.get(
    `${apis.roles.list}`
  );
  return response.data;
};


/**
 * CREATE ROLE
 */
export const createRoleApi = async (payload) => {
  const response = await http.post(apis.roles.create, payload);
  return response.data;
};

/**
 * UPDATE ROLE
 */
export const updateRoleApi = async (id, payload) => {
  const response = await http.put(`${apis.roles.update}/${id}`, payload);
  return response.data;
};

/**
 * DELETE ROLE
 */
export const deleteRoleApi = async (id) => {
  const response = await http.delete(`${apis.roles.delete}/${id}`);
  return response.data;
};

/**
 * GET PERMISSIONS LIST
 */
export const getPermissionsApi = async () => {
  const response = await http.get(
    `${apis.permissions.list}`
  );
  return response.data;
};

/**
 * UPDATE ROLE PERMISSION
 */
export const assignPermissionApi = async (roleId, payload) => {
  const response = await http.post(
    `${apis.roles.assignPermission}/${roleId}`,
    payload
  );
  return response.data;
};

/**
 * GET PERMISSIONS ASSIGNED TO ROLE
 */
export const getRolePermissionsApi = async (roleId) => {
  const response = await http.get(
    `${apis.roles.getRolePermissions}/${roleId}`
  );
  return response.data;
};

