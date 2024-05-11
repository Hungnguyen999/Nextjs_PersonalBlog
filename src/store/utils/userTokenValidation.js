import { useState, useEffect } from "react";
import { redirect } from 'next/navigation'
import { useDispatch } from "react-redux";
import { logoutSuccess } from "../reducers/authReducer";

import jwtDecode from 'jwt-decode'; // Correct import statement
import { verifyToken } from "../actions/authAction";
import Cookies from 'js-cookie'

const useTokenValidation = () => {
  const storedToken = Cookies.get('userToken');
  try {
    // Fetch the validation route to check if the token is valid
    if (storedToken) {
      const response = verifyToken(storedToken)
      // const decodedToken = jwtDecode(token);
      // // Check if token is expired
      // if (decodedToken.exp < Date.now() / 1000) {
      //   return false; // Token expired
      // }
      // If token is valid, extract user information from the response
      console.log("respone " + JSON.stringify(response.user))
      return true
    }
    else {
      console.log("Khong co token ")
      dispatch(logoutSuccess);
      return false;
    }
  } catch (error) {
    console.log("Loi khong xac dinh" + error)
    return false;
  }
};
export default useTokenValidation;
