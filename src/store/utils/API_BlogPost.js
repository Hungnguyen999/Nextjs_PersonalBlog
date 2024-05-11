import axios from 'axios';
const API_BASE_URL = 'http://localhost:3001'; // Your API base URL
export const createPostAPI = async (postData) => {
  try {
    console.log("asdasd" + postData)
    const response = await axios.post(`${API_BASE_URL}/post/admin/create-new-post`, postData);
    return response.data;
  }
  catch (error) {
    throw error.response.data;
  }
}

export const getPostByIdAPI = async (postData) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/post/get-post-id/${postData.blogID}`, postData);
    return response.data;
  }
  catch (error) {
    throw error.response.data;
  }
}

export const getAllPostAPI = async (postData) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/post/get-all-posts`, postData);
    return response.data;
  }
  catch (error) {
    throw error.response.data;
  }
}