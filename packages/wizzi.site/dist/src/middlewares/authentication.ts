/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\src\middlewares\authentication.ts.ittf
    utc time: Wed, 14 Apr 2021 15:53:06 GMT
*/
import {Application} from 'express';
import eoic from 'express-openid-connect';
const { auth, requiresAuth } = eoic;
import {config} from '../features/config/index';
// https://github.com/auth0/express-openid-connect
// Express JS middleware implementing sign on for Express web apps using OpenID Connect.
// Applications using this library MUST run over secure channels (HTTPS URLs),
// otherwise they may experience "invalid state" errors.
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

    app.use(auth(authConfig))
    console.log('AuthenticationMiddleware.config', authConfig);
}
;
