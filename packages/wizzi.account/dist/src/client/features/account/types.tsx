/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\client\src\features\account\types.tsx.ittf
    utc time: Fri, 14 May 2021 03:50:01 GMT
*/

export type Account = { 
    code: string;
};

export type AccountManifest = { 
    name: string;
    description: string;
};

export type SavedAccount = { 
    id: string;
    created: string;
    code?: string;
    manifest: AccountManifest;
};
