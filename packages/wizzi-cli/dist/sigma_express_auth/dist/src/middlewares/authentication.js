/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\sigma_express_auth\.wizzi\src\middlewares\authentication.js.ittf
    utc time: Sat, 06 Mar 2021 13:38:40 GMT
*/
'use strict';
import eoic from 'express-openid-connect';
const { auth, requiresAuth } = eoic;
import {config} from '../features/config/index.js';
// https://github.com/auth0/express-openid-connect
// Express JS middleware implementing sign on for Express web apps using OpenID Connect.
// Applications using this library MUST run over secure channels (HTTPS URLs),
// otherwise they may experience "invalid state" errors.
const authConfig = {
    secret: config.auth0Secret, 
    issuerBaseURL: config.auth0IssuerBaseURL, 
    baseURL: config.auth0BaseURL, 
    clientID: config.auth0ClientID, 
    authRequired: false
};
const port = config.port;
if (!authConfig.baseURL && process.env.NODE_ENV !== 'production') {
    authConfig.baseURL = `http://localhost:${port}`;
}
export const AuthenticationMiddleware = (app) => {
    app.use(auth(authConfig))
    console.log('AuthenticationMiddleware.config', authConfig);
};
