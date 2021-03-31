/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\eta_express_ts\.wizzi\src\middlewares\passportAuth0.ts.ittf
    utc time: Wed, 31 Mar 2021 20:00:35 GMT
*/
import {Application, Request, Response, RequestHandler, CookieOptions} from 'express';
import {MiddlewareType} from '../features/app/types';
import * as passport from 'passport';
import {Strategy as Auth0Strategy} from 'passport-auth0';
import {config} from '../features/config';
// Configure Passport to use Auth0
var strategy = new Auth0Strategy({
    domain: config.Auth0Domain, 
    clientID: config.Auth0PackiClientId, 
    clientSecret: config.Auth0PackiClientSecret, 
    callbackURL: config.Auth0PackiCallbackUrl
 }, function(accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
});
export const PassportAuth0Middleware: MiddlewareType = (app: Application) => {
    // You can use this section to keep a smaller payload
    passport.use(strategy);
    // You can use this section to keep a smaller payload
    passport.serializeUser(function(user, done) {
        done(null, user);
    })
    passport.deserializeUser(function(user, done) {
        done(null, user);
    })
    app.use(passport.initialize());
    app.use(passport.session());
}
;
