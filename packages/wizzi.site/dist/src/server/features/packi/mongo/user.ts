/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\server\src\features\packi\mongo\user.ts.ittf
    utc time: Fri, 04 Jun 2021 20:07:21 GMT
*/
import {Schema, Model, model} from "mongoose";
import {ModelBuilderType} from "../../app/types";
import {IUserModel} from "../types";

// mongoose models creation is centralized

// mongodb calls buildModel() when starting, after connection has been established

// controllers call UserModel() when initialized, after buildModel() has benn called
const UserSchema: Schema<IUserModel> = new Schema({
    email: {
        type: String
     }, 
    nickname: String, 
    social_user_id: String, 
    createdAt: Date, 
    lastAccess: Date, 
    packies: [
        {
            type: Schema.Types.ObjectId, 
            ref: 'Packi'
         }
    ]
 });
export type UserModelType_stop = Model<IUserModel>;
    // mongoose models creation is centralized
    // mongodb calls buildModel() when starting, after connection has been established
    // controllers call UserModel() when initialized, after buildModel() has benn called
    
let userModel: UserModelType_stop;
export function GetUserModel_stop():  UserModelType_stop {

    return userModel;
}
export const UserModelBuilder: ModelBuilderType = {
    buildModel: () => 
    
        userModel = model<IUserModel>("User", UserSchema)
    
    
 };
