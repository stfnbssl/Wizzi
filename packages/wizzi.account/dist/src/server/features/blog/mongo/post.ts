/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\server\src\features\blog\mongo\post.ts.ittf
    utc time: Thu, 13 May 2021 19:47:49 GMT
*/
// see https://mongoosejs.com/docs/schematypes.html
import mongoose from "mongoose";
import {ModelBuilderType} from "../../app/types";

export interface IPost extends mongoose.Document {
    author: string;
    title: string;
    content: string;
}

const Post = new mongoose.Schema({
    author: {
        type: String
     }, 
    title: {
        type: String
     }, 
    content: {
        type: String
     }
 }, {
    collection: 'posts'
 });

let postModel: mongoose.Model<IPost>;

export function GetPostModel() {

    return postModel;
}

export const PostModelBuilder: ModelBuilderType = {
    buildModel: () => {
    
        postModel = mongoose.model<IPost>('Post', Post)
        ;
        return postModel;
    }
    
 };
