
import React from 'react';
import { Provider } from 'react-redux';
import AppWithNavigationState from "./AppRouteConfigs";
//import store from "./redux/store";
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createReduxBoundAddListener, createReactNavigationReduxMiddleware, } from 'react-navigation-redux-helpers';
import {RootStack} from './AppRouteConfigs'
console.log()
const AppNavigator = RootStack;

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Main'));
const navReducer = (state = initialState, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state);
    return nextState || state;
};
  
const appReducer = combineReducers({
    nav: navReducer,
});
 
const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);
export const addListener = createReduxBoundAddListener("root");
const store = createStore(
    appReducer,
    applyMiddleware(middleware),
);
export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
AppRegistry.registerComponent('AwesomeProject', () => Root);
