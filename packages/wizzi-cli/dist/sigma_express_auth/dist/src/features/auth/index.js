/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\sigma_express_auth\.wizzi\src\features\auth\index.js.ittf
    utc time: Sat, 06 Mar 2021 13:38:40 GMT
*/
'use strict';
// see https://auth0.com/docs/get-started#use-cases-for-auth0
import {AuthenticationController} from './controllers/authentication.js';
import * as authManager from './manager.js';
const authenticationControllers = [
    new AuthenticationController()
];
export {authenticationControllers, authManager};
