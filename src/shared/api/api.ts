import axios from "axios";
import { USER_LOCALSTORAGE_TOKEN } from "../const/localStorage";

// example
export const $api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// JWT auth
$api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(USER_LOCALSTORAGE_TOKEN);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);