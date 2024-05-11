import axios from 'axios';
const API_BASE_URL = 'http://localhost:3001'; // Your API base URL

export const createCategoryAPI = async (categoryData) => {
  try {
    console.log("vai cac create 1" + categoryData);
    const response = await axios.post(`${API_BASE_URL}/category/admin/create-category`, categoryData);
    console.log("vai cac create" + response);
    return response.data
  } catch (error) {
    throw error;
  }
}
export const getAllCategoryAPI = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/category/get-all-category`);
    console.log("response from getallcategory API" + JSON.stringify(response))
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const getAllPostInCategoryAPI = async (categoryData) => {
  try {
    // const respone = await axios.post(`${API_BASE_URL}/category/get-category-id/${categoryData.categoryID}`, categoryData);
    // return response.data
  } catch (error) {
    throw error;
  }
}

export const deleteCategoryAPI = async (categoryData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/category/admin/delete-category/${categoryData.categoryID}`, categoryData);
    return response.data
  } catch (error) {
    throw error;
  }
}