import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { BackHandler,ToastAndroid,View,Text, } from "react-native";
import { DialogButton,DialogTitle } from "react-native-popup-dialog";
import SplashScreen from 'react-native-splash-screen';
import * as dialogType from "../redux/actions/dialogType";
import ReactNavigation from "react-navigation";
import AppNavigator from './AppWithNavigation';
import { addListener } from "../redux/util";
import Button from '../modules/Button'
import PopupDialog from '../modules/PopupDialog';
const {StackNavigator,TabNavigator,TabBarBottom,addNavigationHelpers, NavigationActions} = ReactNavigation;
const confirmBtn = {
    text: '确定按钮',
    onPress: ()=>false
  };
const cancelBtn = {
    text: '取消按钮',
    onPress: ()=>false
};
class ReduxNavigation extends Component {
    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackButtonPressAndroid);
        setTimeout(()=>{
            SplashScreen.hide();
        },1500);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackButtonPressAndroid);
    }
    
    onBackButtonPressAndroid = () => {
        console.log(this.props.nav.routes)
        const routersTop = this.props.nav.routes;
        const routers = this.props.nav.routes[0].routes;
        if (routers.length > 1 || routersTop.length > 1) {
            this.props.dispatch(NavigationActions.back());
            return true;
        } else {
            if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
                return false
            }
            ToastAndroid.show('再按一次退出!', 1000);
            this.lastBackPressed = Date.now();
            return true;
        }
    }
    render() {
        const { dispatch, nav, dialog, setTheme, theme } = this.props;
        const navigation = addNavigationHelpers({
            dispatch,
            state: nav,
            addListener,
            theme
        });
        return <View style={{flex:1}}>
                <AppNavigator navigation={navigation} />
                <PopupDialog 
                    show={dialog.isShow} 
                    confirmBtn={{title:'set dark',bgColor:'#188eee',disabled:theme.id === 'dark',onPress:this.props.setTheme}}
                    cancelBtn={{title:'关闭按钮',bgColor:'#9DABC0',onPress:this.props.hideDialog}}
                    dialogTitle={dialog.dialogTitle}
                >
                    {dialog.children}
                </PopupDialog>
            </View>
    }
}
const mapStateToProps = (state) => {
    return {
        nav:state.nav,
        dialog:state.dialog,
        theme:state.theme
    }
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch:dispatch,
        hideDialog: ()=>dispatch(dialogType.HIDE_DIALOG),
        setTheme:()=>dispatch({type:'DARK_THEME'}),
        setDefaultTheme:()=>dispatch({type:'DEFAULT_THEME'})
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(ReduxNavigation);