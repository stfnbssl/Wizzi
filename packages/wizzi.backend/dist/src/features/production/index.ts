/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.backend\.wizzi\src\features\production\index.ts.ittf
    utc time: Wed, 07 Jul 2021 15:52:36 GMT
*/
import {ModelBuilderType, ControllerType} from '../app/types';
import * as productionTypes from './types';
import {ArtifactProductionModelBuilder, GetArtifactProductionModel} from './mongo/artifact';
import {PackageProductionModelBuilder, GetPackageProductionModel} from './mongo/package';
import {ArtifactProductionController} from './controllers/artifact';
import {ApiV1ArtifactProductionController} from './controllers/apiv1artifact';
import {PackageProductionController} from './controllers/package';
import {ApiV1PackageProductionController} from './controllers/apiv1package';
import * as artifactApi from './api/artifact';
import * as packageApi from './api/package';

const productionModelGetters = {
    GetArtifactProductionModel, 
    GetPackageProductionModel
 };

const productionModelBuilders: ModelBuilderType[] = [
    ArtifactProductionModelBuilder, 
    PackageProductionModelBuilder
];

const productionControllers: ControllerType[] = [
    new ArtifactProductionController(), 
    new ApiV1ArtifactProductionController(), 
    new PackageProductionController(), 
    new ApiV1PackageProductionController()
];
export {productionTypes, productionModelGetters, productionModelBuilders, productionControllers, artifactApi, packageApi};
