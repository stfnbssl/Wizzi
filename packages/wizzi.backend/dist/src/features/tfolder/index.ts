/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.backend\.wizzi\src\features\tfolder\index.ts.ittf
    utc time: Wed, 07 Jul 2021 15:52:36 GMT
*/
import {ModelBuilderType, ControllerType} from '../app/types';
import * as tFolderTypes from './types';
import {TFolderModelBuilder, GetTFolderModel} from './mongo/tfolder';
import {TFolderController} from './controllers/tfolder';
import {ApiV1TFolderController} from './controllers/apiv1tfolder';
import * as tFolderApi from './api/tfolder';

const tFolderModelGetters = {
    GetTFolderModel
 };

const tFolderModelBuilders: ModelBuilderType[] = [
    TFolderModelBuilder
];

const tFolderControllers: ControllerType[] = [
    new TFolderController(), 
    new ApiV1TFolderController()
];
export {tFolderTypes, tFolderModelGetters, tFolderModelBuilders, tFolderControllers, tFolderApi};
