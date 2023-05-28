import axios from "axios";
import { clearLocalStorage, getLocalStorage } from "./storageUtil";
import { BASE_URL } from "@env";

const axiosInstance = axios.create({
    headers: {
        "Content-Type": "application/json",
    },
    baseURL: `${BASE_URL}`,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = getLocalStorage("token");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => response,
    (error) => {
        const data = error?.response?.data;
        if (data.code === 401) {
            clearLocalStorage("token");
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
