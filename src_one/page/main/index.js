import React,{ Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import *as actions from '../../redux/actions/counter';
class HomeScreen extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        return {
            title: params ? params.otherParam : 'MainScreen',
            headerStyle: {
                backgroundColor: 'yellow',
            },
            headerTintColor: 'red',
        };
    };
  render() {
    console.log(this.props.navigation)
    const {increment, decrement, counter,login} = this.props;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>counter:{counter}</Text>
          <Button
            title="+"
            onPress={increment}
          />
        <Text>MainScreen!</Text>
        <Button
          title="Go to SettingsStack"
          onPress={() => this.props.navigation.navigate('SettingsStack')}
        />
        <Button
          title="Go to DetailsScreen"
          onPress={() => this.props.navigation.navigate('DetailsScreen')}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Back to Main"
          onPress={() => this.props.navigation.navigate('Main')}
        />
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
      counter: state.counter
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      increment: () => dispatch(actions.increment),
	    decrement: () => dispatch(actions.decrement),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)