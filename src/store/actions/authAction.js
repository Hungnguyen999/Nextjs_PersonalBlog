import { loginSuccess, setLoading, loginFailure, clearError } from "../reducers/authReducer";
import { registerSuccess, registerLoading, registerFailure, registerError } from "../reducers/registerReducer";
import { signInAPI, signUpAPI, checkTokenValid } from "../utils/api";
import Cookies from 'js-cookie'

// Assuming `oneDay` is defined elsewhere in your code
const oneDay = 24 * 60 * 60 * 1000;
export const login = (credentials) => async (dispatch) => {
  dispatch(setLoading(true));
  dispatch(clearError());
  try {
    const response = await signInAPI(credentials);
    console.log("response from API sign in" + JSON.stringify(response));
    // Set cookie
    Cookies.set('userToken', response.token, { expires: Date.now() - oneDay }) // Set expiry time as needed

    // Set Local storage for some info
    localStorage.setItem("user", JSON.stringify(response.user));
    dispatch(loginSuccess(response));
  }
  catch (error) {
    console.log("Error" + error.message);
    dispatch(loginFailure(error.message));
  }
}

export const verifyToken = async (credentials) => {

  console.log("token from API get " + credentials)
  try {
    // Check if the user is authenticated using the authenticate middleware
    const response = await checkTokenValid(credentials)
    console.log("Verify Token: " + JSON.stringify(response));

    // If the user is authenticated, return account info
    // return res.status(200).json({ message: 'Account info returned successfully', user: req.user });
    return response;
  } catch (error) {
    // return res.status(500).json({ message: 'Internal server error' });
    console.log("Error" + error.message);
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