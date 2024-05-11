import { createCategorySuccess, getAllCategoriesSuccess, getAllPostInCategoryIdSuccess, deleteCategoryByIdSuccess, setCategoryLoading, clearCategoryError, actionCategoryFailed } from "../reducers/categoryReducer";
import { createCategoryAPI, getAllCategoryAPI, getAllPostInCategoryAPI, deleteCategoryAPI } from "../utils/API_Category";

export const createCategory = (credentials) => async (dispatch) => {
  dispatch(setCategoryLoading());
  dispatch(clearCategoryError());
  try {
    const response = await createCategoryAPI(credentials);
    dispatch(createCategorySuccess(response));
    return response;
  }
  catch (error) {
    console.log("Error in create Category" + error);
    dispatch(actionCategoryFailed(error.message));
    throw error;
  }
}

export const getAllCategory = () => async (dispatch) => {
  dispatch(setCategoryLoading());
  dispatch(clearCategoryError());
  try {
    const response = await getAllCategoryAPI();
    console.log("getAllCategory" + JSON.stringify(response));
    dispatch(getAllCategoriesSuccess(response))
    return response;
  }
  catch (error) {
    throw error;
  }
}

export const getAllPostInCategory = (credentials) => async (dispatch) => {

}

export const deleteCategory = (credentials) => async (dispatch) => {

}