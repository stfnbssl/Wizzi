/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\src\features\packi\types.ts.ittf
    utc time: Wed, 14 Apr 2021 15:53:06 GMT
*/
import {commonTypes} from '../../common';
export type PackiFiles = commonTypes.PackiFiles;
export type TemplateList = string[];
export type Template = { 
    name: string;
    files: PackiFiles;
};
export type IUser = { 
    userId: string;
    email: string;
    createdAt: Date;
    lastAccess: Date;
};
export type IPacki = { 
    userId: string;
    repoOwner: string;
    repoName: string;
    clonedAt: Date;
    lastCommitWhenCloned: string;
};
