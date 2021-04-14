/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\src\features\auth\strategies\github.ts.ittf
    utc time: Wed, 14 Apr 2021 15:53:06 GMT
*/
import {Strategy} from 'passport-github2';
import {config} from '../../config';
import {AuthRequest} from '../types';
export function createStrategy() {

    console.log('features.auth.strategies.github.createStrategy');
    return new Strategy({
            clientID: config.githubClientId, 
            clientSecret: config.githubClientSecret, 
            callbackURL: config.githubCallbackURL, 
            passReqToCallback: true
         }, function(req: AuthRequest, accessToken: string, refreshToken: string, profile: any, done: any) {
        
            console.log('features.auth.strategies.github.req.session.socketId,socketUserId', req.session.socketId, req.session.socketUserId);
            console.log('features.auth.strategies.github.req.sessionID,session', req.sessionID, req.session);
            console.log('features.auth.strategies.github.req.user', req.user);
            console.log('features.auth.strategies.github.accessToken.refreshToken', accessToken, refreshToken);
            console.log('features.auth.strategies.github.profile', profile);
            return done(null, {
                    id: profile.id
                 });
        });
}
