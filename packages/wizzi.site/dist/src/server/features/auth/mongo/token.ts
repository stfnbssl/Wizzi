/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\server\src\features\auth\mongo\token.ts.ittf
    utc time: Sat, 05 Jun 2021 04:08:41 GMT
*/
import {Schema, Model, model} from "mongoose";
import {ModelBuilderType} from "../../app/types";
import {ITokenModel} from "../types";

export const TokenSchema = new Schema<ITokenModel>({
    kind: {
        type: String
     }, 
    token: {
        type: String
     }, 
    attributes: {
        type: Map, 
        of: String
     }
 });

export type TokenModelType = Model<ITokenModel>;

let tokenModel: TokenModelType;

export function GetTokenModel() {

    return tokenModel;
}

export const TokenModelBuilder: ModelBuilderType = {
    buildModel: () => 
    
        tokenModel = model('Token', TokenSchema)
    
 };
