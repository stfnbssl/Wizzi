/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\examples\tau\.wizzi\src\middlewares\index.js.ittf
    utc time: Wed, 17 Feb 2021 17:02:45 GMT
*/
'use strict';
import { IttfDocumentsMiddleware } from './ittf.js';
import { BodyParserMiddleware } from './bodyParser.js';
import { CacheControlMiddleware } from './cacheControl.js';
import {UserInViewMiddleware} from './userInViews.js';
import { StaticFilesMiddleware } from './static.js';
const appMiddlewares = [
    IttfDocumentsMiddleware, 
    BodyParserMiddleware, 
    CacheControlMiddleware, 
    UserInViewMiddleware, 
    StaticFilesMiddleware
];
export {appMiddlewares};
