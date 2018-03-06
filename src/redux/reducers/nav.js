import AppNavigator from '../../navigators/AppWithNavigation';
const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('MainStack'));
  
export default navReducer = (state = initialState, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state);
    return nextState || state;
};