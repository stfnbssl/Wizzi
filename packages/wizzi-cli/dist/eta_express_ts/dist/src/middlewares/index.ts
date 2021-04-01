/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\eta_express_ts\.wizzi\src\middlewares\index.ts.ittf
    utc time: Thu, 01 Apr 2021 15:10:45 GMT
*/
import {MiddlewareType} from '../features/app';
import { SessionMiddleware } from './session';
import { IttfStaticMiddleware } from './ittfStatic';
import { BodyParserMiddleware } from './bodyParser';
import { CacheControlMiddleware } from './cacheControl';
import {UserInViewMiddleware} from './userInViews';
import { StaticFilesMiddleware } from './static';
import { WizziViewEngineMiddleware } from './wizziViewEngine';
const appMiddlewaresPre: MiddlewareType[] = [
    SessionMiddleware, 
    IttfStaticMiddleware, 
    BodyParserMiddleware, 
    CacheControlMiddleware, 
    UserInViewMiddleware, 
    StaticFilesMiddleware, 
    WizziViewEngineMiddleware
];
const appMiddlewaresPost: MiddlewareType[] = [];
export {appMiddlewaresPre, appMiddlewaresPost};
