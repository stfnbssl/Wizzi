/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.backend\.wizzi\src\features\packi\mongo\user.ts.ittf
    utc time: Wed, 30 Jun 2021 15:18:36 GMT
*/
import {Schema, Model, model} from "mongoose";
import {ModelBuilderType} from "../../app/types";
import {IUserModel} from "../types";

// see https://mongoosejs.com/docs/schematypes.html

const UserSchema = new Schema<IUserModel>({
    username: {
        type: String, 
        index: {
            unique: true
         }
     }, 
    email: {
        index: {
            unique: true
         }
     }, 
    firstName: {
        type: String
     }, 
    lastName: {
        type: String
     }, 
    nickname: {
        type: String
     }, 
    createdAt: {
        type: Date
     }, 
    lastAccess: {
        type: Date
     }
 }, {
    collection: ''
 });

export type UserModelType = Model<IUserModel>;

let userModel: UserModelType;

export function GetUserModel():  UserModelType {

    return userModel;
}

export 
// mongoose models creation is centralized at the app level

// after connection has been established, the mongodb service calls buildModel(),

// then the controllers when initializing call GetUserModel()
const UserModelBuilder: ModelBuilderType = {
    buildModel: () => 
    
        userModel = model<IUserModel>('User', UserSchema)
    
    
 };
