import { AlertIOS } from 'react-native';
const ToastRoot = {
    show:()=>AlertIOS.alert('Plain Text Entry'),
    SHORT:"show"
};
export default ToastRoot;