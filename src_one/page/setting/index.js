import React,{ Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class SettingsScreen extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
        title: params ? params.otherParam : 'SettingsScreen',
        headerStyle: {
            backgroundColor: 'yellow',
        },
        headerTintColor: 'red',
    };
};
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>SettingScreen!</Text>
        <Button
          title="Go to HomeStack"
          onPress={() => this.props.navigation.navigate('Main')}
        />
        <Button
          title="Go to DetailsScreen"
          onPress={() => this.props.navigation.navigate('DetailsScreen')}
        />
      </View>
    );
  }
}
