import { applyMiddleware, compose, createStore } from "redux";
import { reducer } from "../reducers";
import thunk from 'redux-thunk';

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = (state = {}) =>
  createStore(
    reducer,
    state,
    composeEnhancers(
      applyMiddleware(
        thunk,
      )
    )
  );


