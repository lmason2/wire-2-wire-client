import { FETCH_TRAINING, SAVE_TRAINING, DELETE_TRAINING } from "../constants/actionTypes";

const training = (training = [], action) => {
    switch (action.type) {
        case FETCH_TRAINING:
            return action.payload;
        case SAVE_TRAINING:
            return [...training, action.payload];
        case DELETE_TRAINING:
            return training.filter((training) => training.date !== action.payload);
        default:
            return training;
    }
}

export default training;