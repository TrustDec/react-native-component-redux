import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Button, Image, View, Text } from 'react-native';
import LogoTitle from "./LogoTitle";
import *as actions from '../redux/actions/counter';
import *as loginAction from '../redux/actions/loginAction';// 导入action方法

class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
      const params = navigation.state.params || {};
      const increaseCount = params.increaseCount || (() => false);
      return {
        headerTitle: <LogoTitle />,
        headerLeft: (
          <Button
            onPress={() => navigation.navigate('MyModal')}
            title="Info"
            color="#fff"
          />
        ),
        headerRight: (
          <Button onPress={increaseCount} title="+1" color="#fff" />
        ),
      };
    };
   state= {
	   title:"login"
   }
    componentWillMount() {
      this.props.navigation.setParams({ increaseCount: this._increaseCount });
    }
  
    state = {
      count: 0,
    };
  
    _increaseCount = () => {
      this.setState({ count: this.state.count + 1 });
    };
	shouldComponentUpdate(nextProps, nextState) {
		// 登录完成,切成功登录
		if (nextProps.status === '登陆成功' && nextProps.isSuccess) {
		  this.setState({title:'登陆成功'});
		  return false;
		}
		return true;
	  }
    render() {
      const {increment, decrement, counter,login} = this.props;
      console.log(this.props)
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>counter:{counter}</Text>
          <Button
            title="login"
            onPress={login}
          />
          <Text>Home Screen</Text>
          <Text>Count: {this.state.count}</Text>
          <Button
            title="Go to Details"
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              this.props.navigation.navigate('Details', {
                itemId: 86,
                otherParam: 'First Details',
              });
            }}
          />
          <Button
            title="Go to NavigationBar"
            onPress={() => {
              /* 1. Navigate to the NavigationBar route with params */
              this.props.navigation.navigate('NavigationBar', {
                itemId: 87,
                otherParam: 'First NavigationBar',
              });
            }}
          />
        </View>
      );
    }
  }

const mapStateToProps = (state) => {
  return {
      counter: state.counter,
      status: state.loginIn.status,
      isSuccess: state.loginIn.isSuccess,
      user: state.loginIn.user,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: () => dispatch(actions.increment),
	  decrement: () => dispatch(actions.decrement),
	  login: () => dispatch(loginAction.login()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)