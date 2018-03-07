import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { BackHandler,ToastAndroid } from "react-native";
import ReactNavigation from "react-navigation";
import AppNavigator from './AppWithNavigation';
import { addListener } from "../redux/util";
const {StackNavigator,TabNavigator,TabBarBottom,addNavigationHelpers, NavigationActions} = ReactNavigation;

class ReduxNavigation extends Component {
    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }
    
    onBackPressOne = () => {
        const { dispatch, nav } = this.props;
        if (nav.index === 0) {
          return false;
        }
        dispatch(NavigationActions.back());
        return true;
    }
    onBackPress = () => {
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
        const { dispatch, nav } = this.props;
        const navigation = addNavigationHelpers({
            dispatch,
            state: nav,
            addListener,
        });
        return <AppNavigator navigation={navigation} />;
    }
}
export default connect(({ nav }) => ({ nav }))(ReduxNavigation);