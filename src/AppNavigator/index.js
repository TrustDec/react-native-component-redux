import React,{ Component } from 'react';
import { BackHandler } from "react-native";
import { connect } from 'react-redux';
import { StackNavigator,TabNavigator,TabBarBottom,addNavigationHelpers, NavigationActions } from "react-navigation";
import { addListener } from "../redux";
import AppNavigator1 from './AppNavigator';
import SettingScreen from "../page/setting";
import MainScreen from "../page/main";
export const AppNavigator = StackNavigator({
      Main: {
        screen: MainScreen,
      },
      SettingsStack: {
        screen: SettingScreen,
      },
    },
    {
      mode: 'modal',
      headerMode: 'none',
    }
  );
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