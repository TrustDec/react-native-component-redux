import { combineReducers } from 'redux'
import counter from './counter'
import nav from './nav'
import loginIn from './loginReducer'; // 导入登录的redux处理过程

const AppReducer = combineReducers({
    nav,
    counter,
    loginIn
});
export default AppReducer;