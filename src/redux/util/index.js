import { createStore, applyMiddleware } from 'redux';
import {
    createReactNavigationReduxMiddleware,
    createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import AppReducer from '../reducers';
//const logger = createLogger();
export const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);
export const addListener = createReduxBoundAddListener("root");
export default createStore(
    AppReducer,
    applyMiddleware(thunk,middleware,/*createLogger*/),
  );