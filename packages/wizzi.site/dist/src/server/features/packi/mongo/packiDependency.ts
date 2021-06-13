/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\server\src\features\packi\mongo\packiDependency.ts.ittf
    utc time: Wed, 09 Jun 2021 05:04:16 GMT
*/
import {Schema, Model, model} from "mongoose";
import {ModelBuilderType} from "../../app/types";
import {IPackiDependencyModel} from "../types";

// see https://mongoosejs.com/docs/schematypes.html

const PackiDependencySchema = new Schema<IPackiDependencyModel>({
    owner: {
        type: String
     }, 
    name: {
        type: String
     }, 
    files: {
        type: String
     }, 
    updated_at: {
        type: Date
     }
 }, {
    collection: 'packiDependencies'
 });
PackiDependencySchema.pre('save', function(next) {

    this.updated_at = new Date();
    next();
})
// see https://docs.mongodb.com/manual/core/index-compound/
PackiDependencySchema.index({
    owner: 1, 
    name: 1
 }, {
    unique: true
 })

export type PackiDependencyModelType = Model<IPackiDependencyModel>;

let packiDependencyModel: PackiDependencyModelType;

export function GetPackiDependencyModel():  PackiDependencyModelType {

    return packiDependencyModel;
}

export 
// mongoose models creation is centralized at the app level

// after connection has been established, the mongodb service calls buildModel(),

// then the controllers when initializing call GetPackiDependencyModel()
const PackiDependencyModelBuilder: ModelBuilderType = {
    buildModel: () => 
    
        packiDependencyModel = model<IPackiDependencyModel>('PackiDependency', PackiDependencySchema)
    
    
 };
