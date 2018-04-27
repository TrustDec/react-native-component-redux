import React from 'react';
import ViewTest from '../../page/DialogModules/ViewTest';
import LoginDialog from '../../page/DialogModules/Login';
import { UpdateDialog, UpdateScheduleDialog, UpToDateDialog } from '../../page/DialogModules/Update';
import { DialogTitle } from 'react-native-popup-dialog';

export const SHOW_DIALOG = { type: 'SHOW_DIALOG' };
export const HIDE_DIALOG = { type: 'HIDE_DIALOG' };

const PUBLIC_DIALOG = {
    ...SHOW_DIALOG,
    width: 100,
    height: 100,
    overlayOpacity: 0,
    dialogStyle: { backgroundColor: 'rgba(0, 0, 0, .7)' }
};

export const UPDATE_DIALOG = {
    ...PUBLIC_DIALOG,
    children: <UpdateDialog title={'正在检测'} />
};
export const UP_TO_DATE = {
    ...PUBLIC_DIALOG,
    children: <UpToDateDialog title={'暂无更新'} />
};
export const UNKNOWN_ERROR = {
    ...PUBLIC_DIALOG,
    children: <UpdateDialog title={'连接异常'} />
};
export const UPDATE_INSTALLED = {
    ...PUBLIC_DIALOG,
    children: <UpdateDialog title={'安装并重启'} />
};
export const UPDATE_IGNORED = {
    ...PUBLIC_DIALOG,
    children: <UpdateDialog title={'取消更新'} />
};
export const DOWNLOADING_PACKAGE = schedule => ({
    ...PUBLIC_DIALOG,
    schedule,
    children: <UpdateScheduleDialog title={'正在下载更新包'} schedule={schedule} />
});
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
    cancelBtn: { title: '关闭按钮', bgColor: '#9DABC0' },
    dialogStyle: { backgroundColor: '#fff' }
};

export const HOME_DIALOG = {
    ...SHOW_DIALOG,
    width: 0.9,
    height: 300,
    children: <ViewTest routh="HOME" />,
    confirmBtn: { title: '设置字体颜色', bgColor: '#188eee' },
    cancelBtn: { title: '关闭按钮', bgColor: '#9DABC0' },
    dialogStyle: { backgroundColor: '#fff' }
};
