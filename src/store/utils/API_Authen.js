import axios from 'axios';
const API_BASE_URL = 'http://localhost:3001'; // Your API base URL
export const signUpAPI = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const signInAPI = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const checkTokenValid = async (token) => {
  try {
    const respone = await axios.post(`${API_BASE_URL}/auth/verify-token`, {}, {
      headers: {
        'Authorization': `${token}`
      }
    });
    console.log("response tu checktoken" + JSON.stringify(respone))
    return respone.data;
  }
  catch (error) {
    throw error.respone.data;
  }
}
