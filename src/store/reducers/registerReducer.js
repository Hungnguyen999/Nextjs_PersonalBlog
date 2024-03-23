
import { createSlice } from '@reduxjs/toolkit';
// step2: Initiate new slice register
const registerSlice = createSlice({
  name: "register",
  initialState: {
    isRegistered: false,
    user: null,
    loading: null,
    error: null,
  },
  reducers: {
    registerSuccess: (state, action) => {
      state.isRegistered = true;
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    registerFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    registerLoading: (state) => {
      state.loading = true;
    },
    registerError: (state) => {
      state.error = null;
    }
  }
})
export const { registerSuccess, registerLoading, registerFailure, registerError } = registerSlice.actions;
export default registerSlice.reducer;