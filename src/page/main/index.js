import React from 'react';
import { Text, View, Button } from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        return {
            title: params ? params.otherParam : 'A Nested Details Screen',
            /* These values are used instead of the shared configuration! */
            // headerStyle: {
            //     backgroundColor: navigationOptions.headerTintColor,
            // },
            // headerTintColor: navigationOptions.headerStyle.backgroundColor,
        };
    };
  render() {
    console.log(this.props.navigation)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>MainScreen!</Text>
        <Button
          title="Go to SettingScreen"
          onPress={() => this.props.navigation.navigate('SettingScreen')}
        />
      </View>
    );
  }
}