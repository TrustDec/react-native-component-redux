import React from 'react';
import { Text, View, Button } from 'react-native';

export default class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>SettingScreen!</Text>
        <Button
          title="Go to MainScreen"
          onPress={() => this.props.navigation.navigate('MainScreen')}
        />
      </View>
    );
  }
}
