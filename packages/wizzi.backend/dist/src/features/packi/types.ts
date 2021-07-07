/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.backend\.wizzi\src\features\packi\types.ts.ittf
    utc time: Wed, 07 Jul 2021 15:52:36 GMT
*/
import {Document} from "mongoose";
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
export interface IUserModel extends IUser, Document {
}
export type IPacki = { 
    userId: string;
    repoOwner: string;
    repoName: string;
    clonedAt: Date;
    lastCommitWhenCloned: string;
};
export interface IPackiModel extends IPacki, Document {
}
export type IPackiItem = { 
    owner: string;
    name: string;
    wizziSchema: string;
    mainIttf: string;
    files: string;
    dependencies: IPackiDependency[];
    updated_at: Date;
};
export interface IPackiItemModel extends IPackiItem, Document {
}
export type IPackiDependency = { 
    owner: string;
    name: string;
    files: string;
    updated_at: Date;
};
export interface IPackiDependencyModel extends IPackiDependency, Document {
}
