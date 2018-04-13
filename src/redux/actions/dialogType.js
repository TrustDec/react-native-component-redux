import React from 'react';
import ViewTest from '../../page/DialogModules/ViewTest'
import { DialogTitle } from "react-native-popup-dialog";

export const SHOW_DIALOG = "SHOW_DIALOG";
export const HIDE_DIALOG = {
    type: "HIDE_DIALOG"
};

export const LOGIN_DIALOG = {
    type: SHOW_DIALOG,
    children: <ViewTest routh="LOGIN"/>,
    dialogTitle: <DialogTitle title="LOGIN"/>
};

export const HOME_DIALOG = {
    type: SHOW_DIALOG,
    children: <ViewTest routh="HOME"/>
};