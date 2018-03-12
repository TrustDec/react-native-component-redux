import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StatusBar } from 'react-native';
import Button from '../modules/Button'
class ModalScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <StatusBar
            backgroundColor={'#EFEFF4'}
            animated={true}
            barStyle='dark-content'
        />
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
export default connect()(ModalScreen)