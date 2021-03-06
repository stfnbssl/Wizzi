/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\sigma_express_auth\.wizzi\src\middlewares\index.js.ittf
    utc time: Sat, 06 Mar 2021 13:38:40 GMT
*/
'use strict';
import { AuthenticationMiddleware } from './authentication.js';
import { SessionMiddleware } from './session.js';
import { PassportMiddleware } from './passport.js';
import { IttfStaticMiddleware } from './ittfStatic.js';
import { BodyParserMiddleware } from './bodyParser.js';
import { CacheControlMiddleware } from './cacheControl.js';
import {UserInViewMiddleware} from './userInViews.js';
import { StaticFilesMiddleware } from './static.js';
import { WizziViewEngineMiddleware } from './wizziViewEngine.js';
import { ErrorsMiddleware } from './errors.js';
const appMiddlewaresPre = [
    AuthenticationMiddleware, 
    SessionMiddleware, 
    PassportMiddleware, 
    IttfStaticMiddleware, 
    BodyParserMiddleware, 
    CacheControlMiddleware, 
    UserInViewMiddleware, 
    StaticFilesMiddleware, 
    WizziViewEngineMiddleware
];
const appMiddlewaresPost = [
    ErrorsMiddleware
];
export {appMiddlewaresPre, appMiddlewaresPost};
