/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\server\src\features\app\types.ts.ittf
    utc time: Tue, 25 May 2021 12:34:40 GMT
*/
import {Application, Router} from 'express';
import {ConfigType} from '../config';
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
    auth0Secured: () => RequestHandlerParams;
};
