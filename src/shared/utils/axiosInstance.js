import axios from "axios";
import { clearLocalStorage, getLocalStorage } from "./storageUtil";
import { BASE_URL } from "@env";

const fetchToken = async () =>{ 
    const token = await getLocalStorage("token");
    return token
 };

const axiosInstance = axios.create({
    headers: {
        "Content-Type": "application/json",
    },
    baseURL: `${BASE_URL}`,
});

axiosInstance.interceptors.request.use(
    async (config) => {
        const token = await fetchToken()
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
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
