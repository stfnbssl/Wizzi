/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.backend\.wizzi\src\features\auth\mongo\account.ts.ittf
    utc time: Wed, 30 Jun 2021 15:18:36 GMT
*/
import {Schema, Model, model} from "mongoose";
import {ModelBuilderType} from "../../app/types";
import {IAccountModel} from "../types";
import {TokenSchema} from "./token";

const AccountSchema = new Schema<IAccountModel>({
    domain: {
        type: String
     }, 
    uid: {
        type: String
     }, 
    username: {
        type: String
     }, 
    displayName: {
        type: String
     }, 
    avatar_url: {
        type: String
     }, 
    tokens: []
 });

export type AccountModelType = Model<IAccountModel>;

let accountModel: AccountModelType;

export function GetAccountModel():  AccountModelType {

    return accountModel;
}

export const AccountModelBuilder: ModelBuilderType = {
    buildModel: () => 
    
        accountModel = model<IAccountModel>('Account', AccountSchema)
    
    
 };
