import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Button, Image, View, Text } from 'react-native';
import LogoTitle from "./LogoTitle";
import actions from '../redux/actions/counter';

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
  
    componentWillMount() {
      this.props.navigation.setParams({ increaseCount: this._increaseCount });
    }
  
    state = {
      count: 0,
    };
  
    _increaseCount = () => {
      this.setState({ count: this.state.count + 1 });
    };
  
    render() {
      const {increment, decrement, counter} = this.props;
      console.log(this.props)
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>counter:{counter}</Text>
          <Button
            title="+"
            onPress={increment}
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
  //将state.counter绑定到props的counter
const mapStateToProps = (state) => {
  return {
      counter: state.counter
  }
};
//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      increment: (...args) => dispatch(actions.increment(...args)),
      decrement: (...args) => dispatch(actions.decrement(...args))
  }
};

  //export default connect(({ nav }) => ({ nav }))(HomeScreen);
  //通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)