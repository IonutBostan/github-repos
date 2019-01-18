import { combineReducers } from "redux";
import { createResource } from "./reducerUtils";
import {types as c} from "../actions/user.actions"

type IRes = {
  payload:any
}

type IState = {
  [x: string]: any;
}

export const user = combineReducers({
  userDataRes: createResource(c.USER_DATA),
  userReposRes: createResource(c.USER_REPOS),
});

export const getUserDataRes = (state: IState): IRes => state.user.userDataRes;
export const getUserReposRes = (state: IState): IRes => state.user.userReposRes;
