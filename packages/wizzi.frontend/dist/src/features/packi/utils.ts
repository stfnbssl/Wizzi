/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.frontend\.wizzi\src\features\packi\utils.ts.ittf
    utc time: Sat, 01 May 2021 05:18:17 GMT
*/
import fetchPonyfill from 'fetch-ponyfill';
import {customAlphabet} from 'nanoid';
import {PackiError, PackiUser} from './types';
const {
    fetch
 } = fetchPonyfill();
export {fetch};

// + and - are used as delimiters in the uri, ensure they do not appear in the channel itself
const VALID_CHANNEL_CHARS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!_';
const generateChannel = customAlphabet(VALID_CHANNEL_CHARS, 10);
export function createChannel(channel?: string):  string {

    channel = channel ?? generateChannel();
    if (channel.length < 6) {
        throw new Error();
    }
    for (const char of channel) {
        if (VALID_CHANNEL_CHARS.indexOf(char) < 0) {
            throw new Error();
        }
    }
    return channel;
}
export function createURL(host: string, channel?: string, id?: string) {

    if (host.includes('snack.expo.io')) {
        host = host.replace('snack.expo.io', 'exp.host');
    }
    else {
        if (host.includes('next-snack.expo.io')) {
            host = host.replace('next-snack.expo.io', 'exp.host');
        }
    }
    if (channel) {
        return id ? id.startsWith('@') ? `exp://${host}/${id}+${channel}` : `exp://${host}/@snack/${id}+${channel}` : `exp://${host}/@snack/sdk.0.1-${channel}`;
    }
    else {
        if (id) {
            return `exp://${host}/${
                id.match(/.*\/.*/)
                 ? id
                 : `@snack/${id}`}
                `;
        }
        else {
            return '';
        }
    }
}
export function createError(config: { 
    message: string;
    name?: string;
    fileName?: string;
    lineNumber?: number;
    columnNumber?: number;
    stack?: string;
}):  PackiError {

    const error: PackiError = new Error();
    if (config.name) {
        error.name = config.name;
    }
    if (config.fileName) {
        error.fileName = config.fileName;
    }
    if (config.lineNumber) {
        error.lineNumber = config.lineNumber;
    }
    if (config.columnNumber) {
        error.columnNumber = config.columnNumber;
    }
    if (config.stack) {
        error.stack = config.stack;
    }
    return error;
}
export function createUserHeader(user?: PackiUser):  { 
    [key: string]: string;
} {

    if (user?.sessionSecret) {
        return {
                'Expo-Session': user.sessionSecret
             };
    }
    if (user?.accessToken) {
        return {
                Authorization: `Bearer ${user.accessToken}`
             };
    }
    return {};
}
