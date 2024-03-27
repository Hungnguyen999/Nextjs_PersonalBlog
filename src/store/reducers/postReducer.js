import { createSlice } from '@reduxjs/toolkit';
const postSlice = createSlice({
  name: "blog_post",
  initialState: {
    post: null,
    loading: true,
    error: null,
  },
  reducers: {
    createPostSuccess: (state, action) => {
      state.post = action.payload;
      state.loading = false;
      state.error = null;
    },
    getPostByIDSuccess: (state, action) => {
      state.post = action.payload;
      state.loading = false;
      state.error = null;
    },
    getAllPostsSuccess: (state, action) => {
      state.post = action.payload;
      state.loading = false;
      state.error = null;
    },
    deletePostByIDSuccess: (state, action) => {
      state.post = action.payload;
      state.loading = false;
      state.error = null;
    },
    actionPostFailed: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setPostLoading: (state, action) => {
      state.loading = true;
    },
    clearPostError: (state) => {
      state.error = null
    },
  }
});
export const { createPostSuccess, actionPostFailed, getPostByIDSuccess, getAllPostsSuccess, deletePostByIDSuccess, setPostLoading, clearPostError } = postSlice.actions;
export default postSlice.reducer;