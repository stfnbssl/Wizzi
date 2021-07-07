/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.backend\.wizzi\src\features\packi\index.ts.ittf
    utc time: Wed, 07 Jul 2021 15:52:36 GMT
*/
import {ModelBuilderType, ControllerType} from '../app/types';
import * as packiTypes from './types';
import {PackiModelBuilder, GetPackiModel} from './mongo/packi';
import {PackiEditingController} from './controllers/packiEditing';
import {PackiAdminController} from './controllers/packiAdmin';
import {ArtifactProductionController} from './controllers/artifactProduction';
import {TFolderController} from './controllers/tfolder';
import {PackiController} from './controllers/packi';
import {ProductionsController} from './controllers/productions';
import {ProxyController} from './controllers/proxy';

const packiModelGetters = {
    
    // GetUserModel
    GetPackiModel
 };

const packiModelBuilders: ModelBuilderType[] = [
    PackiModelBuilder
];

const packiControllers: ControllerType[] = [
    new PackiEditingController(), 
    new PackiAdminController(), 
    new ArtifactProductionController(), 
    new TFolderController(), 
    new PackiController(), 
    new ProductionsController(), 
    new ProxyController()
];

export {packiTypes, packiModelGetters, packiModelBuilders, packiControllers};
