/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\src\features\packi\index.ts.ittf
    utc time: Wed, 14 Apr 2021 15:53:06 GMT
*/
import {ModelBuilderType, ControllerType} from '../app/types';
import * as packiTypes from './types';
import {TemplatesController} from './controllers/templates';
import {ProductionsController} from './controllers/productions';
const packiControllers: ControllerType[] = [
    new TemplatesController(), 
    new ProductionsController()
];
export {packiTypes, packiControllers};