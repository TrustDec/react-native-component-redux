import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { StackNavigator,TabNavigator,TabBarBottom,addNavigationHelpers } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { addListener } from './index'
import HomeScreen from './components/HomeScreen'
import DetailsScreenPage from './components/DetailsScreen'
import ModalScreen from './components/ModalScreen'

import SettingScreen from "./page/setting";
import MainScreen from "./page/main";
import DetailsScreen from './page/details';

const HomeStack = StackNavigator({
	MainScreen: { screen: MainScreen, },
	DetailsScreen: { screen: DetailsScreen },
});
  
const SettingsStack = StackNavigator({
	SettingsScreen: { screen: SettingScreen },
	DetailsScreen: { screen: DetailsScreen },
});

const NavigationBar = TabNavigator({
  HomeStack: { screen: HomeStack, navigationOptions: { header: null }},
  SettingsStack: { screen: SettingsStack,navigationOptions: { header: null } },
},{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'HomeStack') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      } else if (routeName === 'SettingsStack') {
        iconName = `ios-options${focused ? '' : '-outline'}`;
      }
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
});

const MainStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreenPage,
    },
    NavigationBar:{
      screen: NavigationBar,
    }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export const RootStack = StackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

const AppWithNavigationState = ({ dispatch, nav }) => (
    <RootStack navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
        addListener,
    })} />
);

export default connect(state => ({ nav: state.nav }))(AppWithNavigationState);