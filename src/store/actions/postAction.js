import { createPostSuccess, getPostByIDSuccess, getAllPostsSuccess, deletePostByIDSuccess, actionPostFailed, setPostLoading, clearPostError } from "../reducers/postReducer";
import { createPostAPI, getPostByIdAPI } from "../utils/api";

export const createPost = (credentials) => async (dispatch) => {
  dispatch(setPostLoading(true));
  dispatch(clearPostError());
  try {
    const response = await createPostAPI(credentials);
    dispatch(createPostSuccess(response));
  }
  catch (error) {
    console.log("Erroe in Create post");
    dispatch(actionPostFailed(error.message));
  }
}
export const getPostByID = (credentials) => async (dispatch) => {
  dispatch(setPostLoading(true));
  dispatch(clearPostError());
  try {

    const response = await getPostByIdAPI(credentials);
    console.log("getPostByID" + JSON.stringify(response));
    dispatch(getPostByIDSuccess(response));
  }
  catch (error) {
    dispatch(actionPostFailed(error.message));
  }
}