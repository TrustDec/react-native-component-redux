import { combineReducers } from 'redux';
import nav from './nav';
import counter from './counter';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import login from './login';
import dialog from './dialog';
import theme from './theme';
import schedule from './schedule';

const AppReducer = combineReducers({
    nav,
    counter,
    todos,
    visibilityFilter,
    login,
    dialog,
    schedule,
    theme
});
export default AppReducer;
