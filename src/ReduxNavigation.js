import React,{ Component } from 'react';
import { BackHandler } from "react-native";
import { connect } from 'react-redux';
import { addNavigationHelpers, NavigationActions } from "react-navigation";
import { addListener } from "./redux";
import AppNavigator from './AppNavigator';

class ReduxNavigation extends Component {
    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }
    onBackPress = () => {
        const { dispatch, nav } = this.props;
        console.log("============="+nav.index)
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