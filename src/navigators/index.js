import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { BackHandler,ToastAndroid,View,Text, } from "react-native";
import PopupDialog,{ SlideAnimation,DialogTitle,ScaleAnimation,DialogButton } from 'react-native-popup-dialog';
import * as dialogType from "../redux/actions/dialogType";
import ReactNavigation from "react-navigation";
import AppNavigator from './AppWithNavigation';
import { addListener } from "../redux/util";
const {StackNavigator,TabNavigator,TabBarBottom,addNavigationHelpers, NavigationActions} = ReactNavigation;

class ReduxNavigation extends Component {
    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackButtonPressAndroid);
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
        const { dispatch, nav, dialog } = this.props;
        console.log(this.props);
        const navigation = addNavigationHelpers({
            dispatch,
            state: nav,
            addListener,
        });
        return <View style={{flex:1}}>
            <AppNavigator navigation={navigation} />;
            <PopupDialog
                    ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                    dialogAnimation={scaleAnimation}
                    dialogTitle={<DialogTitle title="Dialog Title" />}
                    width={.9}
                    height={300}
                    show={dialog}
                    dismissOnTouchOutside={false}
                    actions={[
                        <DialogButton
                          text="关闭"
                          onPress={()=>this.props.hideDialog()}
                          key="button-1"
                        />,
                      ]}
                >
                    <View>
                        <Text>Hello</Text>
                    </View>
                </PopupDialog>
        </View>
    }
}
const scaleAnimation = new ScaleAnimation();
//export default connect(({ nav }) => ({ nav }))(ReduxNavigation);
const mapStateToProps = (state) => {
    console.log(state)
    return {
        nav:state.nav,
        dialog:state.dialog
    }
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        hideDialog: ()=>dispatch(dialogType.HIDE_DIALOG),
        dispatch:dispatch
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(ReduxNavigation);