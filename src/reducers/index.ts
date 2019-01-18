import { user } from "./user.reducer";
import { combineReducers, Reducer } from "redux";

export const reducer: Reducer = combineReducers({ user });

export {
  getUserDataRes,
  getUserReposRes,
} from "./user.reducer";


