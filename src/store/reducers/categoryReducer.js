import { createSlice } from "@reduxjs/toolkit";
const categorySlice = createSlice({
  name: "blog_category",
  initialState: {
    category: null,
    listCategory: null,
    loading: true,
    error: null,
  },
  reducers: {
    createCategorySuccess: (state, action) => {
      state.category = action.payload;
      state.loading = false;
      state.error = null;
    },
    getAllCategoriesSuccess: (state, action) => {
      state.listCategory = action.payload;
      state.loading = false;
      state.error = null;
    },
    getAllPostInCategoryIdSuccess: (state, action) => {
      state.listCategory = action.payload;
      state.loading = false;
      state.error = null;
    },
    deleteCategoryByIdSuccess: (state, action) => {
      state.category = action.payload;
      state.loading = false;
      state.error = null;
    },
    actionCategoryFailed: (state, action) => {
      state.category = action.payload;
      state.loading = false;
    },
    setCategoryLoading: (state) => {
      state.loading = true;
    },
    clearCategoryError: (state) => {
      state.error = null;
    }
  }
})

export const { createCategorySuccess, deleteCategoryByIdSuccess, getAllCategoriesSuccess, getAllPostInCategoryIdSuccess, setCategoryLoading, clearCategoryError, actionCategoryFailed } = categorySlice.actions
export default categorySlice.reducer;