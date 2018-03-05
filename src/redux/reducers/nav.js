// import AppNavigator from '../../AppNavigator';
import {  AppNavigator } from "../../AppNavigator/index";
const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Main'));
  
export default navReducer = (state = initialState, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state);
    return nextState || state;
};