// src/services/index.js

// const BASE_URL = "http://localhost:5000";
const BASE_URL = "https://api.mydox.online";
const apis = {
    baseUrl: BASE_URL,

    baseimageurl: {
        url: BASE_URL,
    },

    images: {
        public: `${BASE_URL}/images/image`,
    },

    auth: {
        login: `${BASE_URL}/public/auth/login`,
        signUp: `${BASE_URL}/auth/register`,
        changePassword: `${BASE_URL}/private/auth/change-password`,
        logout: `${BASE_URL}/public/auth/logout`, // ✅ ADD THIS
    },

    sidebar: {
        getMenus: `${BASE_URL}/private/sidebar/menus`, // 👈 your backend route
        list: `${BASE_URL}/private/sidebar/list`,
    },

    roles: {
        list: `${BASE_URL}/private/roles/list`,
        create: `${BASE_URL}/private/roles/create`,
        update: `${BASE_URL}/private/roles/update`,
        delete: `${BASE_URL}/private/roles/delete`,
        getById: `${BASE_URL}/roles`,
        assignPermission: `${BASE_URL}/private/roles/assign`,
        getRolePermissions: `${BASE_URL}/private/roles/assigned`
        
    },

    users: {
        list: `${BASE_URL}/private/users/list`,
        create: `${BASE_URL}/private/users/create`,
        update: `${BASE_URL}/private/users/edit`,
        delete: `${BASE_URL}/private/users/delete`,
        getById: `${BASE_URL}/private/users`,  
    },

    permissions: {
        list: `${BASE_URL}/private/permissions/list`,
    },
};

export default apis;
