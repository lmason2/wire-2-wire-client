import * as api from "../api";
import { FETCH_USERS } from "../constants/actionTypes";

export const getUsers = () => async (dispatch) => {
    try {
        const { data } = await api.getUsers();
        dispatch({ type: FETCH_USERS, payload: data });
    } catch (error) {
        console.log(error.message)
    }
};