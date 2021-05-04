import * as actionType from '../constants/actionTypes';

const usersReducer = (users = [], action) => {
  switch (action.type) {
    case actionType.FETCH_USERS:
        return action.payload;
    case actionType.DELETE_USER:
          return users.filter((user) => user._id !== action.payload);
    default:
      return users;
  }
};

export default usersReducer;