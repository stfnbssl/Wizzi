/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\src\features\auth\manager.ts.ittf
    utc time: Wed, 14 Apr 2021 15:53:06 GMT
*/
import passport from 'passport';
import jwt from 'express-jwt';
import {IAccount} from './types';
import {createStrategy as createLocalStrategy} from './strategies/local';
import {createStrategy as createGithubStrategy} from './strategies/github';
import {resolve} from 'path';
import {rejects} from 'assert';
let initialized = false;

// https://stackoverflow.com/questions/27637609/understanding-passport-serialize-deserialize
function initPassport() {

    passport.use(createLocalStrategy());
    passport.use(createGithubStrategy());
    passport.serializeUser(function(user: any, done: any) {
    
        console.log('features.auth.manager.serializeUser.user', user);
        done(null, user.id);
    })
    passport.deserializeUser(function(id: string, done: any) {
    
        console.log('features.auth.manager.deserializeUser.id', id);
        done(null, { id: id });
    })
    initialized = true;
}

function getTokenFromHeaders(req: any) {

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

export function authenticate(strategyName: string, options: passport.AuthenticateOptions, callback?: any) {

    return passport.authenticate(strategyName, options, callback);
}
export const jwtAuth = {
    required: jwt({
        secret: 'secret', 
        userProperty: 'payload', 
        getToken: getTokenFromHeaders, 
        algorithms: [
            'HS256'
        ]
     }), 
    optional: jwt({
        secret: 'secret', 
        userProperty: 'payload', 
        getToken: getTokenFromHeaders, 
        credentialsRequired: false, 
        algorithms: [
            'HS256'
        ]
     })
 };
