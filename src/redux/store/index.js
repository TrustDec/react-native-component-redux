import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createReduxBoundAddListener, createReactNavigationReduxMiddleware, } from 'react-navigation-redux-helpers';
import RootStack from '../../AppRouteConfigs'

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
export default createStore(
    appReducer,
    applyMiddleware(middleware),
);