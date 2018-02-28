import React,{ Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator,TabNavigator,TabBarBottom } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './components/HomeScreen'
import DetailsScreen from './components/DetailsScreen'
import ModalScreen from './components/ModalScreen'

import SettingScreen from "./page/setting";
import MainScreen from "./page/main";

const NavigationBar = TabNavigator({
  MainScreen: { screen: MainScreen },
  SettingScreen: { screen: SettingScreen },
},{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'MainScreen') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      } else if (routeName === 'SettingScreen') {
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
      screen: DetailsScreen,
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

const RootStack = StackNavigator(
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

class App extends Component {
  render = () => <RootStack />
}
AppRegistry.registerComponent('AwesomeProject', () => App);