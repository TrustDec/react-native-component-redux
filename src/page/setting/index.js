import React,{ Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class SettingsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>SettingScreen!</Text>
        <Button
          title="Go to HomeStack"
          onPress={() => this.props.navigation.navigate('HomeStack')}
        />
        <Button
          title="Go to DetailsScreen"
          onPress={() => this.props.navigation.navigate('DetailsScreen')}
        />
      </View>
    );
  }
}
