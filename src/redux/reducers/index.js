import { combineReducers } from 'redux'
import nav from './nav'
import counter from './counter'
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

const AppReducer = combineReducers({
    nav,
    counter,
    todos,
    visibilityFilter
});
export default AppReducer;