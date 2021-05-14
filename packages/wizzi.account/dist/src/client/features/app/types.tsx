/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\client\src\features\app\types.tsx.ittf
    utc time: Fri, 14 May 2021 03:50:01 GMT
*/
import {SavedAccount} from '../account';

export type RouterData = { 
    type: "success";
    account?: SavedAccount;
} | { 
    type: "error";
    error: { 
        message: string;
    };
};

export type QueryParams = { 
    name?: string;
};
