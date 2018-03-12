import { combineReducers } from 'redux'
import nav from './nav'
import counter from './counter'
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import login from "./login";

const AppReducer = combineReducers({
    nav,
    counter,
    todos,
    visibilityFilter,
    login
});
export default AppReducer;