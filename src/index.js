import React,{ Component } from 'react';
import { Provider } from 'react-redux';
import { AppRegistry,View } from 'react-native';
import AppWithNavigationState from "./navigators";
import store,{ middleware } from './redux/util';
import CodePush from 'react-native-code-push'
const Root = () => (
    <Provider store={store}>
        <AppWithNavigationState />
    </Provider>
);
let codePushOptions = { checkFrequency: CodePush.CheckFrequency.MANUAL };
const AwesomeView = CodePush(codePushOptions)(Root);
AppRegistry.registerComponent('AwesomeProject', () => AwesomeView);