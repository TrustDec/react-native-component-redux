
import React,{ Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux';
import ReduxNavigation from "./ReduxNavigation";
class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxNavigation />
      </Provider>
    );
  }
}
AppRegistry.registerComponent('AwesomeProject', () => Root);