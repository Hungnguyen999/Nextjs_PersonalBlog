import { loginSuccess, setLoading, loginFailure, clearError } from "../reducers/authReducer";
import { registerSuccess, registerLoading, registerFailure, registerError } from "../reducers/registerReducer";
import { signInAPI, signUpAPI } from "../utils/api";
import Cookies from 'js-cookie'

// Assuming `oneDay` is defined elsewhere in your code
const oneDay = 24 * 60 * 60 * 1000;
export const login = (credentials) => async (dispatch) => {
  dispatch(setLoading(true));
  dispatch(clearError());
  try {
    const response = await signInAPI(credentials);
    console.log("response from API sign in" + JSON.stringify(response));
    Cookies.set('userToken', response.token, { expires: Date.now() - oneDay }) // Set expiry time as needed
    dispatch(loginSuccess(response));
  }
  catch (error) {
    console.log("Error" + error.message);
    dispatch(loginFailure(error.message));
  }
}


// Step 3: Create action for call API
export const register = (credentials) => async (dispatch) => {
  dispatch(registerLoading(true));
  dispatch(registerError());
  try {
    const response = await signUpAPI(credentials);
    console.log("response from API sign up" + JSON.stringify(response));
    dispatch(registerSuccess(response));
  }
  catch (err) {
    console.log("Error when register new Acc" + err.message);
    dispatch(registerFailure(err.message));
  }
}