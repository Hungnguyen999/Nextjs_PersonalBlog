// store/utils/api.js

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
    console.log("vccccccc" + userData.username + " " + userData.password + JSON.stringify(userData))
    const response = await axios.post(`${API_BASE_URL}/auth/login`, userData);
    console.log("cac" + JSON.stringify(response.data))
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
