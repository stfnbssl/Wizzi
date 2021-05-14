/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\server\src\features\packi\mongo\packi2.ts.ittf
    utc time: Mon, 10 May 2021 17:56:08 GMT
*/
import {Schema, Model, model} from "mongoose";
import {ModelBuilderType} from "../../app/types";
import {IPacki2Model} from "../types";
import {TokenSchema} from "./token";

// see https://mongoosejs.com/docs/schematypes.html

const Packi2Schema = new Schema<IPacki2Model>({
    id: {
        type: String
     }, 
    userName: {
        type: String
     }, 
    projectName: {
        type: String
     }, 
    code: {
        type: String
     }, 
    files: {
        type: String
     }, 
    updated_at: {
        type: Date
     }
 }, {
    collection: 'packis2'
 });
Packi2Schema.pre('save', function(next) {

    this.updated_at = Date.now();
    next();
})

export type Packi2ModelType = Model<IPacki2Model>;

let packi2Model: Packi2ModelType;

export function GetPacki2Model():  Packi2ModelType {

    return packi2Model;
}

export const Packi2ModelBuilder: ModelBuilderType = {
    buildModel: () => 
    
        packi2Model = model<IPacki2Model>('Packi2', Packi2Schema)
    
    
 };
    // mongoose models creation is centralized at the app level
    // after connection has been established, the mongodb service calls buildModel(),
    // then the controllers when initializing call GetPacki2Model()
    
