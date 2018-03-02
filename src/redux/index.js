import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createReduxBoundAddListener, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import appReducer from "./reducers";

const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);
export const addListener = createReduxBoundAddListener("root");
export default createStore(
    appReducer,
    applyMiddleware(middleware),
  );