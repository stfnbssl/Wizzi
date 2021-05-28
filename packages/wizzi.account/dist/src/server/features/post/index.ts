/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\server\src\features\post\index.ts.ittf
    utc time: Tue, 25 May 2021 12:34:40 GMT
*/
import {ModelBuilderType, ControllerType} from '../app/types';
import {PostModelBuilder, GetPostModel} from './mongo/post';
import {PostController} from './controllers/post';
const postModels = {
    GetPostModel
 };
const postModelBuilders: ModelBuilderType[] = [
    PostModelBuilder
];
const postControllers: ControllerType[] = [
    new PostController()
];
export {postModels, postModelBuilders, postControllers};
