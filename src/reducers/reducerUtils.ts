import { combineReducers, Reducer } from "redux";

export interface IAction {
  payload: any;
  type: string;
  error?: boolean;
}

export const createResource = (
  resourceName: string,
  initialState: any = null,
  reducers: any = {}
): Reducer =>
  combineReducers({
    isFetching: isFetchingReducer(resourceName),
    error: errorReducer(resourceName),
    payload: payloadReducer(resourceName, initialState),
    ...reducers
  });

export const createReducer = (initialState: any, handlers: any): Reducer => (
  state: any = initialState,
  action: any
) =>
  handlers.hasOwnProperty(action.type)
    ? handlers[action.type](state, action)
    : state;

export const payloadReducer = (
  prefix: string,
  initialState: any = null
): Reducer =>
  createReducer(initialState, {
    [prefix + "_SUCCESS"]: (_: any, action: IAction) => action.payload
  });

export const isFetchingReducer = (prefix: string): Reducer =>
  createReducer(false, {
    [prefix + "_REQUEST"]: (_: any, action: IAction) =>
      action.error ? false : true,
    [prefix + "_SUCCESS"]: (_: any) => false,
    [prefix + "_FAILURE"]: () => false
  });

export const errorReducer = (prefix: string): Reducer =>
  createReducer(null, {
    [prefix + "_REQUEST"]: (_: any, action: IAction) =>
      action.error
        ? {
            response: {
              msg: action.payload.name + " " + action.payload.message
            }
          }
        : null,
    [prefix + "_SUCCESS"]: () => null,
    [prefix + "_FAILURE"]: (_: any, action: IAction) => action.payload
  });

export const expirationReducer = (prefix: string): Reducer =>
  createReducer(0, {
    [prefix + "_SUCCESS"]: () => new Date().getTime(),
    [prefix + "_FAILURE"]: () => 0
  });
