import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import {
    Alert,
    AlertIOS,
    Image,
    View,
    Text,
    StyleSheet,
    StatusBar,
    ActivityIndicator,
    ScrollView,
    LayoutAnimation
} from 'react-native';
import Button from '../../modules/Button';
const customAnimationConfig = {
    duration: 400,
    create: {
        type: LayoutAnimation.Types.spring,
        property: LayoutAnimation.Properties.scaleXY,
        springDamping: 1
    },
    update: {
        type: LayoutAnimation.Types.spring,
        springDamping: 1
    }
};
export default class MainHomeScreen extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        return {
            title: params ? params.otherParam : 'MainHome',
            headerStyle: {
                backgroundColor: "#188eee"
            },
            headerRight: <View />,
            headerTintColor: "#fff"
        };
    };
    onExitLogin = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'LoginScreen' })]
        });
        LayoutAnimation.spring();
        this.props.navigation.dispatch(resetAction);
    };
    render() {
        return (
            <View>
                <Text>MainHomeScreen</Text>
                <Button onClick={this.onExitLogin} title={'退出登录'} bgColor="#188eee" />
            </View>
        );
    }
}
