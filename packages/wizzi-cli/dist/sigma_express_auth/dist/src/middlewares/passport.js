/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\sigma_express_auth\.wizzi\src\middlewares\passport.js.ittf
    utc time: Sat, 06 Mar 2021 13:38:40 GMT
*/
'use strict';
import {authManager} from '../features/auth/index.js';
// passport.session() acts as a middleware to alter the req object
// and change the 'user' value that is currently the session id (from the client cookie)
// into the true deserialized user object.
// see https://stackoverflow.com/questions/22052258/what-does-passport-session-middleware-do
export const PassportMiddleware = (app) => {
    // serializeUser and deserializeUser are set by the authManager
    const passport = authManager.getPassport();
    
    app.use(passport.initialize())
    
    // is equivalent to
    // app.use(passport.authenticate('session'));
    app.use(passport.session())
};
