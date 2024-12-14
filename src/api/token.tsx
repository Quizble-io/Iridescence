import axios from "axios";
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';

import { refreshAccessToken } from "./auth/auth";

const isTokenExpired = (token:string) => {
    if (!token) return true;
    const { exp } = jwtDecode(token); 
    if (exp) {
        return Date.now() >= exp * 1000;  
    }
};

let isRefreshing = false;
let failedQueue: any[] = [];

const axiosInstance = axios.create();

const processQueue = (error:any, token = null) => {
    failedQueue.forEach((promise) => {
        if (token) {
            promise.resolve(token)
        } else {
            promise.reject(error)
        }
    });

    failedQueue = [];
}

axiosInstance.interceptors.request.use(
    (config) => {
        const token = Cookies.get("token");

        if (token && !isTokenExpired(token)) {
            config.headers['Authorization'] = `Bearer ${token}`
        }

        return config;
    },
    (error) => Promise.reject(error)
    
);

axiosInstance.interceptors.response.use(
    (response) => response,

    async (error) => {
        const { response } = error
        console.log(response)
        if (response && response.status === 401 && !isRefreshing) {
            isRefreshing = true;
            
            const refreshToken = Cookies.get("refreshToken");
            console.log(refreshToken)
            if (refreshToken) {
                try {
                    const newAccessToken = await refreshAccessToken(refreshToken);
                    Cookies.set('token', newAccessToken, { expires: 1, sameSite: 'Strict' });

                    processQueue(null, newAccessToken);

                    return axiosInstance(error.config)
                } catch (refreshError) {
                    processQueue(refreshError, null);
                    return Promise.reject(refreshError);
                } finally {
                    isRefreshing = false;
                }
            } else {
                return Promise.reject(error);
            }

        }
        return Promise.reject(error);
    }
)

export default axiosInstance;




