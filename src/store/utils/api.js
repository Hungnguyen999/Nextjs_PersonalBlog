import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001'; // Your API base URL

export const signUpAPI = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
    console.log("response from sign up" + response);
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

export const createPostAPI = async (postData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/post/admin/create-new-post`, postData);
    return response.data;
  }
  catch (error) {
    throw error.response.data;
  }
}

export const getPostByIdAPI = async (postData) => {
  try {
    console.log("getPostByIdAPI" + JSON.stringify(postData.blogID));
    const response = await axios.get(`${API_BASE_URL}/post/get-post-id/${postData.blogID}`, postData);
    console.log("response from get post by Id " + JSON.stringify(response.data))
    return response.data;
  }
  catch (error) {
    throw error.response.data;
  }
}

export const getAllPostAPI = async (postData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/post/get-all-posts`, postData);
    return response.data;
  }
  catch (error) {
    throw error.response.data;
  }
}