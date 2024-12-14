import Cookies from 'js-cookie';

import { api_routes } from "../routes";
import axiosInstance from '../token';


async function fetchUserInfo() {
    try {
        const response = await axiosInstance.get(api_routes.getUserRoute);
        await console.log(response.data)
        return response.data
      } catch (error) {
        console.error('API call error:', error);
      }
}

export {
    fetchUserInfo,
}