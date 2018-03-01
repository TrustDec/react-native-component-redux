import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import { addListener } from "./redux";
import AppNavigator from './AppNavigator';

class ReduxNavigation extends React.Component {
    render() {
      return (
        <AppNavigator navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
          addListener,
        })} />
      );
    }
}
export default connect(({ nav }) => ({ nav }))(ReduxNavigation);