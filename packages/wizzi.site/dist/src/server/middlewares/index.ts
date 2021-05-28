/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\server\src\middlewares\index.ts.ittf
    utc time: Fri, 28 May 2021 20:54:57 GMT
*/
import {MiddlewareType} from '../features/app';
import { AuthenticationMiddleware } from './authentication';
import { CorsMiddleware } from './cors';
import { SessionMiddleware } from './session';
import { PassportMiddleware } from './passport';
import { IttfStaticMiddleware } from './ittfStatic';
import { BodyParserMiddleware } from './bodyParser';
import { CacheControlMiddleware } from './cacheControl';
import {UserInViewMiddleware} from './userInViews';
import { StaticFilesMiddleware } from './static';
import { WizziViewEngineMiddleware } from './wizziViewEngine';
import { WebpackAppMiddleware } from './webpackApp';
const appMiddlewaresPre: MiddlewareType[] = [
    AuthenticationMiddleware, 
    CorsMiddleware, 
    SessionMiddleware, 
    PassportMiddleware, 
    IttfStaticMiddleware, 
    BodyParserMiddleware, 
    CacheControlMiddleware, 
    UserInViewMiddleware, 
    StaticFilesMiddleware, 
    WizziViewEngineMiddleware, 
    WebpackAppMiddleware
];
const appMiddlewaresPost: MiddlewareType[] = [];
import auth0Secured from './auth0Secured';
export {appMiddlewaresPre, appMiddlewaresPost, auth0Secured};
