import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import * as imagesFile from '../../utils/images';
const activityIndicator = <ActivityIndicator animating={true} size="large" color={'#fff'} />;

export const UpdateDialog = props => {
    console.log(props);
    return (
        <View style={styles.centering}>
            {activityIndicator}
            <Text style={styles.loginStateTitle}>{props.title}</Text>
        </View>
    );
};
export const UpdateMessDialog = props => {
    console.log(props.updateMess);
    return (
        <View style={styles.updateMessBox}>
            <Text style={styles.updateMess}>{props.updateMess.description}</Text>
        </View>
    );
};
export const UpToDateDialog = props => {
    return (
        <View style={styles.centering}>
            <Image style={{ tintColor: '#fff', width: 36, height: 36 }} source={imagesFile.SAD} />
            <Text style={styles.loginStateTitle}>{props.title}</Text>
        </View>
    );
};
export const UpdateScheduleDialog = props => {
    return (
        <View style={styles.centering}>
            {activityIndicator}
            <Text style={styles.loginStateTitle}>{props.schedule}%</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    centering: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    updateMessBox: {
        flex: 1
    },
    loginStateTitle: {
        textAlign: 'center',
        fontSize: 16,
        marginTop: 5,
        color: '#fff'
    },
    updateMess: {
        color: '#000'
    }
});
