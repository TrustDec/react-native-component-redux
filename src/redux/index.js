import React,{ Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createReduxBoundAddListener, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import AppNavigator from '../AppNavigator';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Main'));
  
const navReducer = (state = initialState, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state);
    return nextState || state;
};
  
const appReducer = combineReducers({
    nav: navReducer
});
  
const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);
const addListener = createReduxBoundAddListener("root");
  
class App extends React.Component {
    render() {
      return (
        <AppNavigator navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
          addListener,
        })} />
      );
    }
}
  
export const store = createStore(
    appReducer,
    applyMiddleware(middleware),
  );
export default connect(({ nav }) => ({ nav }))(App);