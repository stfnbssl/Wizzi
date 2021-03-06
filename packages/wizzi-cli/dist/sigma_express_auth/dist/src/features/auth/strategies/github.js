/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\sigma_express_auth\.wizzi\src\features\auth\strategies\github.js.ittf
    utc time: Sat, 06 Mar 2021 13:38:40 GMT
*/
'use strict';
import {Strategy} from 'passport-github2';
import {config} from '../../config/index.js';
// let userModel: UserModelType;
let accountModel;
export function createStrategy() {
    // userModel = GetUserModel();
    console.log('features.auth.strategies.github.createStrategy');
    return new Strategy({
            clientID: config.githubClientID, 
            clientSecret: config.githubClientSecret, 
            callbackURL: config.githubCallbackURL, 
            passReqToCallback: true
        }, function(req, accessToken, refreshToken, profile, done) {
            console.log('features.auth.strategies.github.req.sessionID,session', req.sessionID, req.session);
            console.log('features.auth.strategies.github.req.user', req.user);
            console.log('features.auth.strategies.github.accessToken.refreshToken', accessToken, refreshToken);
            console.log('features.auth.strategies.github.profile', profile);
            var account = {
                tokens: [
                    
                ]
            };
            account.domain = 'github.com';
            account.uid = profile.id;
            account.username = profile.username;
            account.displayName = profile.displayName;
            account.avatar_url = profile._json.avatar_url;
            var token = {
                kind: 'oauth', 
                token: accessToken, 
                attributes: {
                    refreshToken
                }
            };
            account.tokens.push(token);
            return done(null, account);
        });
}
