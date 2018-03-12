import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, Text,StyleSheet,StatusBar } from 'react-native';
import Button from '../../modules/Button'
class HomeScreen extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor(navigationOptions.headerTintColor,true);
        return {
            title: params ? params.otherParam : 'HomeScreen',
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor,
            },
            headerRight:<View/>,
            headerTintColor: navigationOptions.headerStyle.backgroundColor,
        }
    }
    onNavigateRouthPush = routhName => {
        this.props.navigation.navigate(routhName);
    }
    render(){
        return(
            <View style={styles.container}>
                <Button
                    onClick={this.onNavigateRouthPush.bind(this,'CounterScreen')}
                    title={"Go to Counter"}
                    bgColor='#9DABC0'
                />
                <Button
                    onClick={this.onNavigateRouthPush.bind(this,'ModalGlobal')}
                    title={"Info"}
                    bgColor='#E3C883'
                />
                <Button
                    onClick={this.onNavigateRouthPush.bind(this,'TodoScreen')}
                    title={"Go to TodoScreen"}
                    bgColor='#3FBF66'
                />
                <Button
                    onClick={this.onNavigateRouthPush.bind(this,'SetEventScreen')}
                    title={"Go to SetViewScreen"}
                />
                <Button
                    onClick={this.onNavigateRouthPush.bind(this,'ImmutableList')}
                    title={"See immutable example"}
                    bgColor='#FF3F00'
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
      backgroundColor: '#f7f7f7',
      paddingHorizontal:10
    },
});
export default connect()(HomeScreen)