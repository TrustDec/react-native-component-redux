import React from 'react';
import ViewTest from '../../page/DialogModules/ViewTest';
import LoginDialog from '../../page/DialogModules/Login';
import { DialogTitle } from 'react-native-popup-dialog';

export const SHOW_DIALOG = { type: 'SHOW_DIALOG' };
export const HIDE_DIALOG = { type: 'HIDE_DIALOG' };

export const LOGIN_DIALOG = {
    ...SHOW_DIALOG,
    width: 100,
    height: 100,
    children: <LoginDialog />,
    dialogTitle: null,
    overlayOpacity: 0,
    dialogStyle: { backgroundColor: 'rgba(0, 0, 0, .7)' }
};

export const LOGINMN_DIALOG = {
    ...SHOW_DIALOG,
    width: 0.9,
    height: 300,
    children: <ViewTest routh="LOGIN" />,
    dialogTitle: <DialogTitle title="LOGIN" />,
    confirmBtn: { title: '设置字体颜色', bgColor: '#188eee' },
    cancelBtn: { title: '关闭按钮', bgColor: '#9DABC0' }
};

export const HOME_DIALOG = {
    ...SHOW_DIALOG,
    width: 0.9,
    height: 300,
    children: <ViewTest routh="HOME" />,
    confirmBtn: { title: '设置字体颜色', bgColor: '#188eee' },
    cancelBtn: { title: '关闭按钮', bgColor: '#9DABC0' }
};
