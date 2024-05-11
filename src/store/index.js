import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import registerReducer from "./reducers/registerReducer";
import postReducer from "./reducers/postReducer";
import categoryReducer from "./reducers/categoryReducer";
import loggerMiddleware from "./middleware/loggerMiddleware";

const rootReducer = combineReducers({
  auth: authReducer,
  register: registerReducer,
  blog_post: postReducer,
  blog_category: categoryReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware)
})

export default store;