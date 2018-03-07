import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { BackHandler } from "react-native";
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
    onBackPress = () => {
        const { dispatch, nav } = this.props;
        if (nav.index === 0) {
          return false;
        }
        dispatch(NavigationActions.back());
        return true;
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