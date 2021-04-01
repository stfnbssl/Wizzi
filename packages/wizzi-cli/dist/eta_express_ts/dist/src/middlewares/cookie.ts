/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\eta_express_ts\.wizzi\src\middlewares\cookie.ts.ittf
    utc time: Thu, 01 Apr 2021 15:10:45 GMT
*/
import {Application, Request, Response, RequestHandler} from 'express';
import {MiddlewareType} from '../features/app/types';
import * as cookieParser from 'cookie-parser';
export const CookieMiddleware: MiddlewareType = (app: Application) => 
    app.use(cookieParser())
;
