import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import * as dialogType from '../../redux/actions/dialogType';
import Button from '../../modules/Button';
import { ColorUtils } from '../../equipment/ColorUtils';
import * as CONFIG from '../../equipment/ComponentUtil';
import ToastRoot from '../../modules/Toast';

class HomeScreen extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        StatusBar.setBarStyle('dark-content');
        !CONFIG.OS && StatusBar.setBackgroundColor(navigationOptions.headerTintColor, true);
        return {
            title: params ? params.otherParam : 'HomeScreen',
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor
            },
            headerRight: <View />,
            headerTintColor: navigationOptions.headerStyle.backgroundColor
        };
    };
    onNavigateRouthPush = routhName => {
        this.props.navigation.navigate(routhName);
    };
    openWebView = () => {
        this.props.navigation.navigate('OpenWebViewScreen');
    };
    showDialog = () => {
        console.log(this.props);
        const diaOptin = dialogType.HOME_DIALOG;
        diaOptin.confirmBtn.disabled = this.props.theme.id === 'dark';
        diaOptin.confirmBtn.onPress = this.props.setTheme;
        diaOptin.cancelBtn.onPress = this.props.hideDialog;
        this.props.showDialog(dialogType.HOME_DIALOG);
    };
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Button
                        onClick={this.onNavigateRouthPush.bind(this, 'CarouselScreen')}
                        title={'Go to Carousel'}
                        bgColor="#3FBF66"
                    />
                    <Button
                        onClick={this.onNavigateRouthPush.bind(this, 'CounterScreen')}
                        title={'Go to Counter'}
                        bgColor="#9DABC0"
                    />
                    <Button
                        onClick={this.onNavigateRouthPush.bind(this, 'ModalGlobal')}
                        title={'open Info'}
                        bgColor="#E3C883"
                    />
                    <Button
                        onClick={this.onNavigateRouthPush.bind(this, 'TodoScreen')}
                        title={'Go to TodoScreen'}
                        bgColor="#2F3436"
                    />
                    <Button
                        onClick={this.onNavigateRouthPush.bind(this, 'SetEventScreen')}
                        title={'Go to SetViewScreen'}
                        bgColor="rgb(215, 82, 145)"
                    />
                    <Button
                        onClick={this.onNavigateRouthPush.bind(this, 'ImmutableList')}
                        title={'See immutable example'}
                        bgColor="#FF3F00"
                    />
                    <Button
                        onClick={() => alert(ColorUtils.hex2Rgb('#188eee'))}
                        title={'转换成rgb'}
                        bgColor="#188eee"
                    />
                    <Button onClick={this.openWebView} title={'测试WebView'} bgColor="#8E44AD" />
                    <Button onClick={this.showDialog} title={'ShowDialog'} bgColor="#5ACBC8" />
                    <Button
                        onClick={this.onNavigateRouthPush.bind(this, 'ES6Screen')}
                        title={'ES6Screen'}
                        bgColor="#5ACBC8"
                    />
                    <Button
                        onClick={() => ToastRoot.show('Toast模块', ToastRoot.SHORT)}
                        title={'ToastRoot'}
                        bgColor="#8E44AD"
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
        paddingHorizontal: 10
    }
});
const mapStateToProps = state => {
    return {
        theme: state.theme
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showDialog: option => dispatch(option),
        hideDialog: () => dispatch(dialogType.HIDE_DIALOG),
        setTheme: () => dispatch({ type: 'DARK_THEME' })
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
