import React,{ Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        return {
            title: params ? params.otherParam : 'MainScreen',
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