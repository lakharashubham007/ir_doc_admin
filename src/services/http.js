import axios from "axios";
import apis from "./index";

// Create axios instance
const http = axios.create({
  baseURL: apis.baseUrl,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token automatically
http.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")?.replace(/^"(.*)"$/, "$1");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Global error handler
http.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error?.response?.data?.message ||
      error.message ||
      "Something went wrong";

    console.error("API Error:", message);
    return Promise.reject(error);
  }
);

export default http;
