/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\eta_express_ts\.wizzi\src\features\packi\index.ts.ittf
    utc time: Thu, 01 Apr 2021 15:10:45 GMT
*/
import {ModelBuilderType, ControllerType} from '../app/types';
import * as packiTypes from './types';
import {PackiModelBuilder, GetPackiModel} from './mongo/packi';
import {TemplatesController} from './controllers/templates';
import {ProductionsController} from './controllers/productions';
import {GithubController} from './controllers/github';
const packiModelGetters = {
    GetPackiModel// GetUserModel,
    
 };
const packiModelBuilders: ModelBuilderType[] = [
    PackiModelBuilder
];
const packiControllers: ControllerType[] = [
    new TemplatesController(), 
    new ProductionsController(), 
    new GithubController()
];
export {packiTypes, packiModelGetters, packiModelBuilders, packiControllers};
