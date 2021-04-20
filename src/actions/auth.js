import * as api from "../api";
import { AUTH, UPDATE } from "../constants/actionTypes";

export const signin = (formData, router) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data });

        router.push("/");
    } catch (error) {
        console.log(error);
    }
};

export const signup = (formData, router) => async (dispatch) => {
    try {
      const { data } = await api.signUp(formData);
  
      dispatch({ type: AUTH, data });
  
      router.push("/");
    } catch (error) {
      console.log(error);
    }
};

export const updateProfile = (userData, router) => async (dispatch) => {
  try {
    const { data } = await api.updateProfile(userData);

    dispatch({ type: UPDATE, data })
  } catch (error) {
    console.log(error);
  }
}