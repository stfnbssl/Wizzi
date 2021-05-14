/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\server\src\features\packi\index.ts.ittf
    utc time: Mon, 10 May 2021 17:56:08 GMT
*/
import {ModelBuilderType, ControllerType} from '../app/types';
import * as packiTypes from './types';
import {PackiModelBuilder, GetPackiModel} from './mongo/packi';
import {TemplatesController} from './controllers/templates';
import {PackiController} from './controllers/packi';
import {ProductionsController} from './controllers/productions';
import {GithubController} from './controllers/github';
const packiModelGetters = {
    
    // GetUserModel
    GetPackiModel
 };
const packiModelBuilders: ModelBuilderType[] = [
    PackiModelBuilder
];
const packiControllers: ControllerType[] = [
    new TemplatesController(), 
    new PackiController(), 
    new ProductionsController(), 
    new GithubController()
];
export {packiTypes, packiModelGetters, packiModelBuilders, packiControllers};
