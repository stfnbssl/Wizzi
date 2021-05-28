/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\server\src\middlewares\bodyParser.ts.ittf
    utc time: Tue, 25 May 2021 12:34:40 GMT
*/
import {Application} from 'express';
import * as bodyParser from 'body-parser';
import {MiddlewareType} from '../features/app/types';

export const BodyParserMiddleware: MiddlewareType = (app: Application) => {

    app.use(bodyParser.json({
        limit: '50mb'
     }))
    app.use(bodyParser.urlencoded({
        limit: '50mb', 
        extended: true
     }))
}
;
