/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\features\auth\types.tsx.ittf
    utc time: Sun, 21 Mar 2021 14:14:13 GMT
*/
import {appTypes} from '../app';
export type AuthProps = { 
    loggedUser?: appTypes.LoggedUser | undefined;
    onLoggedOn: (user: appTypes.LoggedUser) => void;
    onLoggedOff: () => void;
};