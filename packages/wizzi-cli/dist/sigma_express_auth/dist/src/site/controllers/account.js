/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\sigma_express_auth\.wizzi\src\site\controllers\account.js.ittf
    utc time: Sat, 06 Mar 2021 13:38:40 GMT
*/
'use strict';
import { Router, Request, Response } from 'express';
import * as passport from 'passport';
import { authApiCalls } from '../../features/auth.js';
export class AccountController {
    const path = '/account';
    const router = Router();
    initialize(initValues) {
        console.log('Entering AccountController.initialize');
        this.router.get(`${this.path}/login`, passport.authenticate('auth0', {
            scope: 'openid email profile
        }, (req, res) =>
            res.redirect('/')))
        this.router.get(`${this.path}/callback`, this.callback);
        this.router.get(`${this.path}/logout`, this.logout);
        this.router.get(`${this.path}/user`, initValues.authSecured(), this.user);
    }
}
function callback(request, response, next) {
    passport.authenticate('auth0', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return response.redirect(`${this.path}/login`);
        }
        request.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            const full_user = await authApiCalls.getUser(user.user_id);
            console.log('full_user', full_user);
            request.session.github_accessToken = full_user.identities[0].access_token;
            let returnTo = `${this.path}/user`;
            if (request.session) {
                returnTo = request.session.returnTo;
                delete request.session.returnTo
            }
            response.redirect(returnTo || `${this.path}/user`)
        })
    })
    // (request, response, next);
}
function logout(request, response) {
    request.logout();
    response.redirect('/');
}
function user(request, response) {
    const { _raw, _json, ...user } = request.user;
    response.render('account/user.html.ittf', {
        user: user, 
        userProfile: JSON.stringify(user, null, 2), 
        title: 'Profile page'
    })
}
