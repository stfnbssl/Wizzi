/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\tau_express\.wizzi\src\features\blog\mongo\post.js.ittf
    utc time: Wed, 03 Mar 2021 15:56:02 GMT
*/
'use strict';
// see https://mongoosejs.com/docs/schematypes.html
import mongoose from "mongoose";
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
let postModel = null;
export function GetPostModel() {
    return postModel;
}
export const PostModelBuilder = {
    buildModel: () =>
        postModel = mongoose.model('Post', Post)
};
