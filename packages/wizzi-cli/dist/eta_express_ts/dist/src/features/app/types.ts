/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\eta_express_ts\.wizzi\src\features\app\types.ts.ittf
    utc time: Thu, 01 Apr 2021 15:10:45 GMT
*/
import {Application, Router} from 'express';
import {ConfigType} from '../config';
import {fsTypes} from '../filesystem';
import {RequestHandlerParams} from 'express-serve-static-core';
export type ModelBuilderType = { 
    buildModel: () => void;
};
export type ControllerType = { 
    path: string;
    router: Router;
    initialize: (initValues: AppInitializerType) => void;
};
export type MiddlewareType = (app: Application) => void;
export type AppInitializerType = { 
    config: ConfigType;
    controllers: ControllerType[];
    middlewaresPre: MiddlewareType[];
    middlewaresPost: MiddlewareType[];
};
