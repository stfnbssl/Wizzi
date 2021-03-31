/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\eta_express_ts\.wizzi\src\middlewares\helmet.ts.ittf
    utc time: Wed, 31 Mar 2021 20:00:35 GMT
*/
import {Application} from 'express';
import * as helmet from 'helmet';
import {MiddlewareType} from '../features/app/types';
export const HelmetMiddleware: MiddlewareType = (app: Application) => 
    app.use(helmet())
;
