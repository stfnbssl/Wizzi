/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.backend\.wizzi\src\middlewares\index.ts.ittf
    utc time: Mon, 28 Jun 2021 20:09:52 GMT
*/
import {MiddlewareType} from '../features/app';
import { AuthenticationMiddleware } from './authentication';
import { CorsMiddleware } from './cors';
import { SessionMiddleware } from './session';
import { PassportMiddleware } from './passport';
import { IttfStaticMiddleware } from './ittfStatic';
import { PackiBrowseMiddleware } from './packiBrowse';
import { BodyParserMiddleware } from './bodyParser';
import { CacheControlMiddleware } from './cacheControl';
import {UserInViewMiddleware} from './userInViews';
import { StaticFilesMiddleware } from './static';
import { WizziViewEngineMiddleware } from './wizziViewEngine';
const appMiddlewaresPre: MiddlewareType[] = [
    AuthenticationMiddleware, 
    CorsMiddleware, 
    SessionMiddleware, 
    PassportMiddleware, 
    IttfStaticMiddleware, 
    PackiBrowseMiddleware, 
    BodyParserMiddleware, 
    CacheControlMiddleware, 
    UserInViewMiddleware, 
    StaticFilesMiddleware, 
    WizziViewEngineMiddleware
];
const appMiddlewaresPost: MiddlewareType[] = [];
import auth0Secured from './auth0Secured';
export {appMiddlewaresPre, appMiddlewaresPost, auth0Secured};
