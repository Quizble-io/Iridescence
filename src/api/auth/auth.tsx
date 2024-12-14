import { userCreateInfo } from "../../models/auth/authModels";
import { api_routes } from "../routes";
import axios from 'axios';


async function createUser(newUser:userCreateInfo) {
    const response = await fetch( api_routes.createUserRoute, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });
    
    if (!response.ok) {
      throw new Error('Failed to create user');
    } else {
        console.log('Account created!!!')
    }
    
    return response;
}

async function logInUser(data: { email: string; password: string }) {
    const response = await fetch(api_routes.loginUserRoute, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      throw new Error("Failed to sign in");
    }
    
    return await response.json();
}

const refreshAccessToken = async (refreshToken:string) => {
  try {
    const response = await axios.post(api_routes.refreshTokenRoute, { refreshToken });
    return response.data.token;
  } catch (error) {
    console.error('Error refreshing token', error);
    throw error;
  }
};
  





  export {
    createUser,
    logInUser,
    refreshAccessToken,
  }














