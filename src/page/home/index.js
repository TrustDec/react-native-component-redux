import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Button, Image, View, Text,StyleSheet } from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        return {
            title: params ? params.otherParam : 'HomeScreen',
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor,
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor,
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>HomeScreen</Text>
                <Button
                    onPress={()=>this.props.navigation.navigate('ModalGlobal')}
                    title={"Info"}
                />
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
});