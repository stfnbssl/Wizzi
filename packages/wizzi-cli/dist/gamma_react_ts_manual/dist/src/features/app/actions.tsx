/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\features\app\actions.tsx.ittf
    utc time: Wed, 24 Mar 2021 16:19:16 GMT
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
export const updateLoggedUser = createStandardAction(UPDATE_LOGGED_USER)<LoggedUser>();
export const loginUserByStoredUid = createStandardAction(LOGIN_USER_BY_STORED_UID)<LoginByStoredUidPayload>();
export const loginUserByStoredUidSuccess = createStandardAction(LOGIN_USER_BY_STORED_UID_SUCCESS)<LoggedUser>();
export const loginUserByStoredUidError = createStandardAction(LOGIN_USER_BY_STORED_UID_ERROR)<string>();
