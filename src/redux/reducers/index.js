import { combineReducers } from 'redux'
import nav from './nav'
import counter from './counter'

const AppReducer = combineReducers({
    nav,
    counter
});
export default AppReducer;