import React,{ Component } from 'react';
import { StackNavigator,TabNavigator,TabBarBottom } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import LoginScreen from '../page'
import ModalScreen from '../components/ModalScreen'
import HomeScreen from '../page/home'
import TodoListScreen from '../page/home/containers/TodoList'
import CounterScreen from '../page/home/containers/Counter'
import SetEvent from '../page/setview'
import ImmutableList from "../page/Immutable/List";
import Carousel from '../page/home/containers/Carousel'
import OpenWebView from "../components/WebView";
import ECMAScript2016 from '../page/ECMAScript2016';

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
		CounterScreen:{
			screen: CounterScreen
		},
		SetEventScreen: {
			screen: SetEvent,
		},
		ImmutableList: {
			screen:ImmutableList
		},
		CarouselScreen: {
			screen:Carousel
		},
		OpenWebViewScreen: {
			screen:OpenWebView
		},
		ES6Screen: {
			screen:ECMAScript2016
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