import * as api from "../api";
import { FETCH_TRAINING, DELETE_TRAINING, SAVE_TRAINING } from "../constants/actionTypes";

export const getTraining = (id) => async (dispatch) => {
    try {
        const { data } = await api.getTraining();
        console.log(data);
        data.filter((person) => person.id === id);
        dispatch({ type: FETCH_TRAINING, payload: data });
    } catch (error) {
        console.log(error.message)
    }
};

export const deleteTraining = (id) => async (dispatch) => {
    try {
        await api.deleteUser(id);

        dispatch( { type: DELETE_TRAINING, payload: id });
    } catch (error) {
        console.log(error);
    }
}

export const saveTraining = (id, training) => async (dispatch) => {
    try {
        const { data } = await api.saveTraining(id, training);

        dispatch( { type: SAVE_TRAINING, payload: data });
    } catch (error) {
        console.log(error);
    }
}