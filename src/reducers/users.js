import * as actionType from '../constants/actionTypes';

const usersReducer = (users = [], action) => {
  switch (action.type) {
    case actionType.FETCH_USERS:
        return action.payload;
    default:
      return users;
  }
};

export default usersReducer;