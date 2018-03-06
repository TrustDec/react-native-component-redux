import React,{ Component } from 'react';
import { AppRegistry } from 'react-native';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxNavigation from "./AppNavigator";
import AppReducer from './redux/reducers';
import { middleware } from './redux';

const store = createStore(
  AppReducer,
  applyMiddleware(thunk,middleware),
);
class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxNavigation />
      </Provider>
    );
  }
}
AppRegistry.registerComponent('AwesomeProject', () => Root);