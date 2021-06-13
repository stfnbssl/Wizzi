/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\server\src\features\packi\mongo\packiItem.ts.ittf
    utc time: Wed, 09 Jun 2021 05:04:16 GMT
*/
import {Schema, Model, model} from "mongoose";
import {ModelBuilderType} from "../../app/types";
import {IPackiItemModel} from "../types";

// see https://mongoosejs.com/docs/schematypes.html

const PackiItemSchema = new Schema<IPackiItemModel>({
    owner: {
        type: String
     }, 
    name: {
        type: String
     }, 
    wizziSchema: {
        type: String
     }, 
    mainIttf: {
        type: String
     }, 
    files: {
        type: String
     }, 
    dependencies: [
        {
            type: Schema.Types.ObjectId, 
            ref: 'PackiDependency'
         }
    ], 
    updated_at: {
        type: Date
     }
 }, {
    collection: 'packiItems'
 });
PackiItemSchema.pre('save', function(next) {

    this.updated_at = new Date();
    next();
})
// see https://docs.mongodb.com/manual/core/index-compound/
PackiItemSchema.index({
    owner: 1, 
    name: 1
 }, {
    unique: true
 })

export type PackiItemModelType = Model<IPackiItemModel>;

let packiItemModel: PackiItemModelType;

export function GetPackiItemModel():  PackiItemModelType {

    return packiItemModel;
}

export 
// mongoose models creation is centralized at the app level

// after connection has been established, the mongodb service calls buildModel(),

// then the controllers when initializing call GetPackiItemModel()
const PackiItemModelBuilder: ModelBuilderType = {
    buildModel: () => 
    
        packiItemModel = model<IPackiItemModel>('PackiItem', PackiItemSchema)
    
    
 };
