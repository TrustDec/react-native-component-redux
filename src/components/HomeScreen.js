import React from 'react';
import { Button, Image, View, Text } from 'react-native';
import LogoTitle from "./LogoTitle";

export default class HomeScreen extends React.Component {
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
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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