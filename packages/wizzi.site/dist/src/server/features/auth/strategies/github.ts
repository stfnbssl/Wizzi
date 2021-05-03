/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\server\src\features\auth\strategies\github.ts.ittf
    utc time: Mon, 03 May 2021 18:21:10 GMT
*/
import {Strategy} from 'passport-github2';
import {GetUserModel, UserModelType} from '../mongo/user';
import {GetAccountModel, AccountModelType} from '../mongo/account';
import {config} from '../../config';
import {AuthRequest} from '../types';

// let userModel: UserModelType;
let accountModel: AccountModelType;
export function createStrategy() {

    
    // userModel = GetUserModel();
    accountModel = GetAccountModel();
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
            var account = new accountModel();
            account.domain = 'github.com';
            account.uid = profile.id;
            account.username = profile.username;
            account.displayName = profile.displayName;
            account.avatar_url = profile._json.avatar_url;
            var t = {
                kind: 'oauth', 
                token: accessToken, 
                attributes: {
                    refreshToken
                 }
             };
            account.tokens.push(t);
            return done(null, account);
        });
}
