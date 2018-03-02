import { combineReducers } from 'redux'
import counter from './counter'
import nav from './nav'

const appReducer = combineReducers({
    nav,
    counter
});

export default appReducer;