import { combineReducers } from "redux";

import posts from "./posts";
import auth from "./auth";
import users from "./users";
import training from "./training";

export default combineReducers({ posts, auth, users, training });