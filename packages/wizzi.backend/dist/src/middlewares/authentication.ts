/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.backend\.wizzi\src\middlewares\authentication.ts.ittf
    utc time: Sun, 18 Jul 2021 15:08:53 GMT
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
