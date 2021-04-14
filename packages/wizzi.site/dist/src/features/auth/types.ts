/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\src\features\auth\types.ts.ittf
    utc time: Wed, 14 Apr 2021 15:53:06 GMT
*/

import {Request} from 'express';

export interface AuthRequest extends Request {
    session: any;
}

export type IUser = { 
    userName: string;
    realName: string;
    email: string;
    hash: string;
    salt: string;
    createdAt: Date;
    lastAccess: Date;
    setPassword(password: string): void;
    validatePassword(password: string): boolean;
    generateJWT(): any;
};


export type IToken = { 
    kind: string;
    token: string;
    attributes: { 
        [k: string]: string;
    };
};

export type IAccount = { 
    domain: string;
    uid: string;
    username: string;
    displayName: string;
    avatar_url: string;
    tokens: [IToken];
};
