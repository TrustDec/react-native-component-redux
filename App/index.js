import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AppReducer from './reducers';
import AppWithNavigationState from './navigators/AppNavigator';
import { middleware } from './utils/redux';
const middlewares = [thunk,middleware]
const store = createStore(
  AppReducer,
  applyMiddleware(middleware),
);

class ReduxExampleApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => ReduxExampleApp);