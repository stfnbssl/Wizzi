/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.editor\.wizzi\src\features\app\actions.tsx.ittf
    utc time: Sun, 27 Jun 2021 11:22:09 GMT
*/
import {deprecated} from "typesafe-actions";
const {
    createStandardAction
 } = deprecated;
import {LoggedUser} from './types';

const UPDATE_LOGGED_USER = '@@app/UPDATE_LOGGED_USER';
const LOGIN_USER_BY_STORED_UID = '@@app/LOGIN_USER_BY_STORED_UID';
const LOGIN_USER_BY_STORED_UID_SUCCESS = '@@app/LOGIN_USER_BY_STORED_UID_SUCCESS';
const LOGIN_USER_BY_STORED_UID_ERROR = '@@app/LOGIN_USER_BY_STORED_UID_ERROR';

export interface LoginByStoredUidPayload {
    uid: string;
    selectedPackiId: string;
}

export const updateLoggedUser = createStandardAction(UPDATE_LOGGED_USER)<LoggedUser | undefined>();
export const loginUserByStoredUid = createStandardAction(LOGIN_USER_BY_STORED_UID)<LoginByStoredUidPayload>();
export const loginUserByStoredUidSuccess = createStandardAction(LOGIN_USER_BY_STORED_UID_SUCCESS)<LoggedUser>();
export const loginUserByStoredUidError = createStandardAction(LOGIN_USER_BY_STORED_UID_ERROR)<string>();
