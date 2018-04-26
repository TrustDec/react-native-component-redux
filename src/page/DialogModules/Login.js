import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
export default class LoginDialog extends Component {
    render() {
        return (
            <View style={styles.centering}>
                <ActivityIndicator animating={true} size="large" />
                <Text style={styles.loginStateTitle}>正在登录</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    centering: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginStateTitle: {
        textAlign: 'center',
        fontSize: 16,
        marginTop: 5,
        color: '#fff'
    }
});
