/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\features\app\actions.tsx.ittf
    utc time: Sat, 20 Mar 2021 13:20:50 GMT
*/
import {createStandardAction} from 'typesafe-actions';
import {LoggedUser} from './types';
const UPDATE_LOGGED_USER = '@@app/UPDATE_LOGGED_USER';
const LOGIN_USER_BY_STORED_UID = '@@app/LOGIN_USER_BY_STORED_UID';
const LOGIN_USER_BY_STORED_UID_SUCCESS = '@@app/LOGIN_USER_BY_STORED_UID_SUCCESS';
const LOGIN_USER_BY_STORED_UID_ERROR = '@@app/LOGIN_USER_BY_STORED_UID_ERROR';
export interface LoginByStoredUidPayload {
    uid: string;
    selectedPackiId: string;
}
export const updateLoggedUser = createStandardAction(UPDATE_LOGGED_USER);
export const loginUserByStoredUid = createStandardAction(LOGIN_USER_BY_STORED_UID);
export const loginUserByStoredUidSuccess = createStandardAction(LOGIN_USER_BY_STORED_UID_SUCCESS);
export const loginUserByStoredUidError = createStandardAction(LOGIN_USER_BY_STORED_UID_ERROR);
