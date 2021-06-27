/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.editor\.wizzi\src\features\packi\defaultConfig.ts.ittf
    utc time: Sun, 27 Jun 2021 11:22:04 GMT
*/
import {SDKVersion} from './sdks/types';
import {PackiState} from './types';

export const apiURL: string = 'https://exp.host';

export const packierURL: string = 'https://packier.expo.io';

export const host: string = 'expo.io';

export const webPlayerURL: string = 'https://packi-web-player.s3.us-west-1.amazonaws.com/v2/%%SDK_VERSION%%';

export const sdkVersion: SDKVersion = '1.0.0';

export const PackiIdentityState: PackiState = {
    sdkVersion, 
    name: '', 
    description: '', 
    dependencies: {
        
     }, 
    missingDependencies: {
        
     }, 
    files: {
        
     }, 
    disabled: false, 
    unsaved: false, 
    url: ''
 };

const defaultConfig = {
    apiURL, 
    packierURL, 
    host, 
    sdkVersion, 
    webPlayerURL
 };

export default defaultConfig;
