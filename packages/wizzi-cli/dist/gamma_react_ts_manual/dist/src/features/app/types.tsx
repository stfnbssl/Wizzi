/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\features\app\types.tsx.ittf
    utc time: Wed, 24 Mar 2021 16:19:16 GMT
*/
import {prefTypes} from '../preferences';
export type LoggedUser = { 
    id: string;
    uid: string;
    username: string;
    displayName: string;
    picture?: string;
};
export type QueryParams_VIA = // TODO local packi provider ?
// local_packiger?: 'true' | 'false';
// preview?: 'true' | 'false';
// sdkVersion?: SDKVersion;
// appetizePayerCode?: string;
// iframeId?: string;
{ 
    session_id?: string;
    code?: string;
    name?: string;
    description?: string;
    dependencies?: string;
    waitForData?: 'boolean';
    theme?: prefTypes.ThemeName;
};
