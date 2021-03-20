/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\features\app\types.tsx.ittf
    utc time: Sat, 20 Mar 2021 13:20:50 GMT
*/
import {prefTypes} from '../preferences';
export type LoggedUser = { 
    id: string;
    uid: string;
    username: string;
    displayName: string;
    picture?: string;
} 
;
export type QueryParams_VIA = { 
    session_id?: string;
    // TODO local packi provider ?
    // local_packiger?: 'true' | 'false';
    // preview?: 'true' | 'false';
    code?: string;
    name?: string;
    description?: string;
    dependencies?: string;
    // sdkVersion?: SDKVersion;
    // appetizePayerCode?: string;
    // iframeId?: string;
    waitForData?: 'boolean';
    theme?: prefTypes.ThemeName;
} 
;
