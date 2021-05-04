import * as api from "../api";
import { FETCH_USERS, DELETE_USER } from "../constants/actionTypes";

export const getUsers = () => async (dispatch) => {
    try {
        const { data } = await api.getUsers();
        dispatch({ type: FETCH_USERS, payload: data });
    } catch (error) {
        console.log(error.message)
    }
};

export const deleteUser = (id) => async (dispatch) => {
    try {
        await api.deleteUser(id);

        dispatch( { type: DELETE_USER, payload: id });
    } catch (error) {
        console.log(error);
    }
}