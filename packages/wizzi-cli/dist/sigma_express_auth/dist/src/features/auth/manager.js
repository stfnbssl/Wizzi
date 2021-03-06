/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\sigma_express_auth\.wizzi\src\features\auth\manager.js.ittf
    utc time: Sat, 06 Mar 2021 13:38:40 GMT
*/
'use strict';
import passport from 'passport';
import jwt from 'express-jwt';
import {createStrategy as createLocalStrategy} from './strategies/local.js';
import {createStrategy as createGithubStrategy} from './strategies/github.js';
import {resolve} from 'path';
import {rejects} from 'assert';
let initialized = false;
function initPassport() {
    passport.use(createLocalStrategy())
    passport.use(createGithubStrategy())
    passport.serializeUser(function(user, done) {
        console.log('features.auth.manager.serializeUser.user', user);
        done(null, user.id);
    })
    passport.deserializeUser(function(id, done) {
        console.log('features.auth.manager.deserializeUser.id', id);
        done(null, {
            id: id
        })
    })
    console.log('features.auth.manager.initPassport', 'done');
    initialized = true;
}
function getTokenFromHeaders(req) {
    const {
        headers: {
            authorization
        }
    } = req;
    if (authorization && authorization.split(' ')[0] === 'Token') {
        return authorization.split(' ')[1];
    }
    return null;
}
export function getPassport() {
    if (initialized == false) {
        initPassport();
    }
    return passport;
}
export function authenticate(strategyName, options, callback) {
    return passport.authenticate(strategyName, options, callback);
}
export const jwtAuth = {
    required: jwt({
        secret: 'secret', 
        userProperty: 'payload', 
        algorithms: [
            'HS256'
        ], 
        getToken: getTokenFromHeaders
    }), 
    optional: jwt({
        secret: 'secret', 
        userProperty: 'payload', 
        algorithms: [
            'HS256'
        ], 
        getToken: getTokenFromHeaders, 
        credentialsRequired: false
    })
};
