import React, { Component } from 'react';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import Icons from 'react-native-vector-icons/Ionicons';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import LoginScreen from '../page/Login';
import RootScreen from '../page/Root';
import ModalScreen from '../components/ModalScreen';
import HomeScreen from '../page/home';
import TodoListScreen from '../page/home/containers/TodoList';
import CounterScreen from '../page/home/containers/Counter';
import SetEvent from '../page/setview';
import ImmutableList from '../page/Immutable/List';
import Carousel from '../page/home/containers/Carousel';
import OpenWebView from '../components/WebView';
import ECMAScript2016 from '../page/ECMAScript2016';
// main
import MainScreen from '../page/main';

const TabOptions = (title, yesFocused, noFocused,navigation) => {
    const { state, goBack } = navigation;
    const tabBarLabel = title;//tintColor: '#B6B9C3'
    const tabBarIcon = (({ focused }) => (
        focused
            ? <Icons name={yesFocused} size={28} color={'#188eee'}/>
            : <Icons name={noFocused} size={28} color={'#B6B9C3'} />
    ));
    

    return { tabBarLabel,tabBarIcon };
};

export const NavigationBar = TabNavigator(
    {
        HomeController: {
            screen: MainScreen,
            navigationOptions: ({ navigation }) => TabOptions('圈子', 'ios-aperture','ios-aperture-outline',navigation)
        },
        MyController: {
            screen: MainScreen,
            navigationOptions: ({ navigation }) => TabOptions('我的','ios-contact','ios-contact-outline', navigation)
        }
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: false,
        lazy: true,
        backBehavior: 'none',
        tabBarOptions: {
            activeTintColor: '#188eee',
            inactiveTintColor: '#B6B9C3',
            indicatorStyle: { height: 0 },
            showIcon: true,
            showLabel: true,
            upperCaseLabel: false,
            scrollEnabled: false,
            labelStyle: {
                margin: 0,
                fontSize: 11
            },
            iconStyle: {
                margin: 0,
                padding: 0
            },
            style: {
                backgroundColor: '#fff',
                borderWidth: 0,
                borderTopWidth: 0,
                borderTopColor: '#eee'
            }
        }
    }
);

const MainStack = StackNavigator(
    {
        LoginScreen: {
            screen: LoginScreen
        },
        RootScreen: {
            screen: RootScreen
        },
        HomeScreen: {
            screen: HomeScreen
        },
        NavigationBar: {
            screen: NavigationBar
        },
        TodoScreen: {
            screen: TodoListScreen
        },
        CounterScreen: {
            screen: CounterScreen
        },
        SetEventScreen: {
            screen: SetEvent
        },
        ImmutableList: {
            screen: ImmutableList
        },
        CarouselScreen: {
            screen: Carousel
        },
        OpenWebViewScreen: {
            screen: OpenWebView
        },
        ES6Screen: {
            screen: ECMAScript2016
        }
    },
    {
        initialRouteName: 'LoginScreen',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#FF3F00'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                alignSelf: 'center',
                textAlign: 'center',
                flex: 1
            },
            SmallRui: 'Trust'
        }
    }
);
export default StackNavigator(
    {
        MainStack: {
            screen: MainStack
        },
        ModalGlobal: {
            screen: ModalScreen
        }
    },
    {
        mode: 'modal',
        headerMode: 'none',
        transitionConfig: () => ({
            screenInterpolator: CardStackStyleInterpolator.forFadeFromBottomAndroid
        })
    }
);
