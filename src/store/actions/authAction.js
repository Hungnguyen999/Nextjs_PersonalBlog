import { setUser, setLoading, setError, clearError } from "../reducers/authReducer";
import { signInAPI, signUpAPI } from "../utils/api";

export const login = (credentials) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    console.log("asdasdasd" + credentials.username + " " + credentials.password)
    const userData = await signInAPI(credentials);
    dispatch(setUser({ username: userData.username }));
  }
  catch (error) {
    console.log("Error" + error.message);
    dispatch(setError(error.message));
  }
}