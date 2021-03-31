/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\eta_express_ts\.wizzi\src\middlewares\static.ts.ittf
    utc time: Wed, 31 Mar 2021 20:00:35 GMT
*/
import * as path from 'path';
import {Application, static as expressStatic} from 'express';
import {MiddlewareType} from '../features/app/types';
export const StaticFilesMiddleware: MiddlewareType = (app: Application) => {
    console.log('StaticFilesMiddleware. Folder served from ', path.resolve(__dirname, '..', '..', 'static'));
    // simply browse ittfs when IttfDocumentsMiddleware is not used
    // app.use('/ittf', expressStatic(path.resolve(__dirname, '..', '..', 'ittf')));
    app.use('/static', expressStatic(path.resolve(__dirname, '..', '..', 'static')));
}
;
