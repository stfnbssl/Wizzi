/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\server\src\middlewares\authentication.ts.ittf
    utc time: Fri, 04 Jun 2021 20:07:21 GMT
*/
import {Application} from 'express';
import {config} from '../features/config/index';
const authConfig = {
    secret: config.auth0Secret, 
    issuerBaseURL: config.auth0IssuerBaseURL, 
    baseURL: config.auth0BaseURL, 
    clientID: config.auth0ClientId, 
    authRequired: false
 };
const port = config.port;
if (!authConfig.baseURL && process.env.NODE_ENV !== 'production') {
    authConfig.baseURL = `http://localhost:${port}`;
}
export const AuthenticationMiddleware = (app: Application) => {

}
;
