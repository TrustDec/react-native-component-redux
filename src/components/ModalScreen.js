import React,{ Component } from 'react';
import { View, Text } from 'react-native';
import Button from '../modules/Button'
export default class ModalScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 30 }}>This is a modal!</Text>
          <Button
                onClick={() => this.props.navigation.goBack()}
                title={"关闭"}
                bgColor='#188eee'
            />
        </View>
      );
    }
  }