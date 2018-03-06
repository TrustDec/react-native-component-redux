import React,{ Component } from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import AppWithNavigationState from "./navigators";
import store,{ middleware } from './redux/util';

const Root = () => (
    <Provider store={store}>
        <AppWithNavigationState />
    </Provider>
);
AppRegistry.registerComponent('AwesomeProject', () => Root);