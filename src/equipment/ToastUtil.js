import {Toast} from 'teaset';
import React,{ Component } from 'react';
import { ActivityIndicator } from 'react-native';
export default class ToastView extends Component {
    static toastKey = null
    static showCustom = text => {
        if (ToastView.toastKey) return;
        ToastView.toastKey = Toast.show({
            text: text,
            icon: <ActivityIndicator size='large' color={'#fff'} />,
            position: 'center',
            duration: 60000,
            modal: true,
          });
    }    
    static hideCustom = () => {
        if (!ToastView.toastKey) return;
        Toast.hide(ToastView.toastKey);
        ToastView.toastKey = null
    }
}