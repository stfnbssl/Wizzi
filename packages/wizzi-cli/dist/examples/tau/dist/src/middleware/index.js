/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\examples\tau\.wizzi\src\middleware\index.js.ittf
    utc time: Tue, 16 Feb 2021 20:56:05 GMT
*/
'use strict';
import { BodyParserMiddleware } from './bodyParser';
import { CacheControlMiddleware } from './cacheControl';
import {UserInViewMiddleware} from './userInViews';
import { ErrorsMiddleware } from './errors';
const appMiddlewares = [
    BodyParserMiddleware, 
    CacheControlMiddleware, 
    UserInViewMiddleware, 
    ErrorsMiddleware
];
export {appMiddlewares};
