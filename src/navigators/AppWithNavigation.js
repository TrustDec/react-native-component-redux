import React,{ Component } from 'react';
import { StackNavigator,TabNavigator,TabBarBottom } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import LoginScreen from '../page'
import ModalScreen from '../components/ModalScreen'
import HomeScreen from '../page/home'
import TodoListScreen from '../page/home/containers/TodoList'

import ImmutableList from "../page/Immutable/List";

const MainStack = StackNavigator(
	{
		LoginScreen: {
			screen: LoginScreen,
		},
		HomeScreen: {
			screen: HomeScreen,
		},
		TodoScreen: {
			screen: TodoListScreen,
		},
		ImmutableList: {
			screen:ImmutableList
		}
	},
	{
	  initialRouteName: 'LoginScreen',
	  navigationOptions: {
			headerStyle: {
				backgroundColor: '#FF3F00',
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold',
				alignSelf: 'center',
				textAlign: 'center',
				flex:1
			},
			SmallRui:"Trust"
	  },
	}
  );
export default StackNavigator(
	{
		MainStack: {
			screen: MainStack,
		},
		ModalGlobal: {
			screen: ModalScreen,
		},
	},
	{
		mode: 'modal',
		headerMode: 'none',
		transitionConfig: () => ({
            screenInterpolator: CardStackStyleInterpolator.forFadeFromBottomAndroid
        }),
	}
);