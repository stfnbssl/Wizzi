/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\server\src\features\auth\types.ts.ittf
    utc time: Fri, 21 May 2021 16:01:34 GMT
*/

import {Request} from 'express';
import {Document} from "mongoose";

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

export interface IUserModel extends IUser, Document {
}

export type IToken = { 
    kind: string;
    token: string;
    attributes: { 
        [k: string]: string;
    };
};

export interface ITokenModel extends IToken, Document {
}

export type IAccount = { 
    domain: string;
    uid: string;
    username: string;
    displayName: string;
    avatar_url: string;
    tokens: [IToken];
};

export interface IAccountModel extends IAccount, Document {
}
