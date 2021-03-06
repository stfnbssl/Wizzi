/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\sigma_express_auth\.wizzi\src\features\auth\controllers\authentication.js.ittf
    utc time: Sat, 06 Mar 2021 13:38:40 GMT
*/
'use strict';
import {Router} from 'express';
import {authenticate} from '../manager.js';
import {sendPromiseResult, sendSuccess, sendFailure} from '../../../utils/response.js';
export class AuthenticationController {
    constructor() {
        this.path = '/authenticate';
        this.router = Router();
    }
    initialize(initValues) {
        console.log('Entering AuthenticationController.initialize');
        this.router.get(`/github/callback`, authenticate('github', {
            failureRedirect: `${this.path}/account`
        }), this.githubConnectCallback.bind(this))
        this.router.get(`/github/loggedin/:uid`, this.getGithubLoggedIn)
    }
    githubConnectCallback(req, res) {
        // Successful authentication
        console.log('features.auth.controllers.auth.githubCallback.req.sessionID,session', req.sessionID, req.session);
        console.log('features.auth.controllers.auth.githubCallback.req.user', req.user);
        const user = {
            id: req.user._id, 
            uid: req.user.uid, 
            username: req.user.username, 
            displayName: req.user.displayName, 
            picture: req.user.avatar_url
        };
        req.session.token = req.user.tokens[0];
        const account = {
            domain: 'github.com', 
            uid: req.user.uid, 
            username: req.user.username, 
            displayName: req.user.displayName, 
            avatar_url: req.user.avatar_url, 
            tokens: [
                {
                    kind: req.user.tokens[0].kind, 
                    token: req.user.tokens[0].token, 
                    attributes: req.user.tokens[0].attributes
                }
            ]
        };
        console.log('features.auth.controllers.auth.githubCallback.account', account);
        res.end();
    }
    getGithubLoggedIn(req, res) {
        const uid = req.params.uid;
        console.log('features.auth.controllers.auth.getGithubLoggedIn.uid', uid);
        sendSuccess(res, {
            userId: uid
        })
    }
}
