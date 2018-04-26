import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PopupDialog, { SlideAnimation, DialogTitle, ScaleAnimation, DialogButton } from 'react-native-popup-dialog';

const dialogTitle = props => <DialogTitle {...props} />;
const Button = props => (
    <TouchableOpacity
        disabled={props.disabled || false}
        activeOpacity={0.6}
        onPress={props.onPress}
        style={[styles.container, { backgroundColor: props.bgColor }]}>
        <Text style={styles.buttonTitle}>{props.title}</Text>
    </TouchableOpacity>
);
const PopupDialogView = props => (
    <PopupDialog {...props}>
        {props.children}
        <View style={{ flexDirection: 'row', position: 'absolute', bottom: 0 }}>
            {props.cancelBtn && (
                <Button
                    onPress={props.cancelBtn.onPress}
                    bgColor={props.cancelBtn.bgColor}
                    title={props.cancelBtn.title}
                />
            )}
            {props.confirmBtn && (
                <Button
                    disabled={props.confirmBtn.disabled}
                    onPress={props.confirmBtn.onPress}
                    bgColor={props.confirmBtn.bgColor}
                    title={props.confirmBtn.title}
                />
            )}
        </View>
    </PopupDialog>
);

const scaleAnimation = new ScaleAnimation();
const actions = [];
PopupDialog.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    show: PropTypes.bool.isRequired,
    dismissOnTouchOutside: PropTypes.bool,
    dialogAnimation: PropTypes.object,
    dialogTitle: PropTypes.element,
    actions: PropTypes.arrayOf(PropTypes.element),
    //children:PropTypes.element.isRequired,
    confirmBtn: PropTypes.object,
    cancelBtn: PropTypes.object,
    overlayOpacity: PropTypes.number,
    overlayBackgroundColor: PropTypes.string,
    dialogStyle: PropTypes.object
};
PopupDialog.defaultProps = {
    width: 100,
    height: 100,
    show: false,
    dismissOnTouchOutside: false,
    dialogAnimation: scaleAnimation,
    dialogTitle: null,
    actions: actions,
    confirmBtn: null,
    cancelBtn: null,
    overlayOpacity: 0.7,
    overlayBackgroundColor: '#000',
    dialogStyle: { overflow: 'hidden' }
};
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        flex: 1
    },
    buttonTitle: {
        color: '#fff',
        fontSize: 16
    }
});
export default PopupDialogView;
