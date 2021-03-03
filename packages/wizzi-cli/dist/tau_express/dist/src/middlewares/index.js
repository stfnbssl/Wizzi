/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\tau_express\.wizzi\src\middlewares\index.js.ittf
    utc time: Wed, 03 Mar 2021 15:56:02 GMT
*/
'use strict';
import { Auth0OpenIdMiddleware } from './auth0_openid.js';
import { IttfStaticMiddleware } from './ittfStatic.js';
import { BodyParserMiddleware } from './bodyParser.js';
import { CacheControlMiddleware } from './cacheControl.js';
import {UserInViewMiddleware} from './userInViews.js';
import { StaticFilesMiddleware } from './static.js';
import { WizziViewEngineMiddleware } from './wizziViewEngine.js';
import { WebpackAppMiddleware } from './webpackApp.js';
const appMiddlewares = [
    Auth0OpenIdMiddleware, 
    IttfStaticMiddleware, 
    BodyParserMiddleware, 
    CacheControlMiddleware, 
    UserInViewMiddleware, 
    StaticFilesMiddleware, 
    WizziViewEngineMiddleware, 
    WebpackAppMiddleware
];
export {appMiddlewares};
