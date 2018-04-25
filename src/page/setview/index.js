import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ActivityIndicator, StyleSheet, StatusBar } from 'react-native';
import Button from '../../modules/Button';
import { Toast } from 'teaset';
class SetEvent extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        StatusBar.setBarStyle('default');
        StatusBar.setBackgroundColor(navigationOptions.headerStyle.backgroundColor, true);
        return {
            title: params ? params.otherParam : 'SetEventScreen',
            headerRight: <View />
        };
    };
    static customKey = null;
    updateHeaderTitle = () => {
        let otherParam = this.props.navigation.getParam('otherParam', 'SetEventScreen');
        otherParam = otherParam === 'TrustTheBoy' ? 'SetEventScreen' : 'TrustTheBoy';
        this.props.navigation.setParams({ otherParam });
    };
    onShowToaseMessage = () => {
        this.showCustom('Toast message');
    };
    showCustom() {
        if (SetEvent.customKey) return;
        SetEvent.customKey = Toast.show({
            text: 'Toast custom',
            icon: <ActivityIndicator size="large" color={'#fff'} />,
            position: 'center',
            duration: 60000,
            modal: false
        });
    }
    hideCustom() {
        if (!SetEvent.customKey) return;
        Toast.hide(SetEvent.customKey);
        SetEvent.customKey = null;
    }
    render() {
        return (
            <View style={styles.container}>
                <Button onClick={this.updateHeaderTitle} title={'update header title'} bgColor="#9DABC0" />
                <Button onClick={this.onShowToaseMessage} title={'show toase'} bgColor="green" />
                <Button onClick={this.hideCustom} title={'hide toase'} />
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
        paddingHorizontal: 10
    }
});
export default connect()(SetEvent);
