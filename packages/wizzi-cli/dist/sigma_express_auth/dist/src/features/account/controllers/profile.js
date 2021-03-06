/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\sigma_express_auth\.wizzi\src\features\account\controllers\profile.js.ittf
    utc time: Sat, 06 Mar 2021 13:38:40 GMT
*/
'use strict';
import { Router } from 'express';
import eoic from 'express-openid-connect';
const { requiresAuth } = eoic;
import { sendFailure, sendSuccess } from '../../../utils/response.js';
export class ProfileController {
    constructor() {
        this.path = '/account/profile';
        this.router = Router();
    }
    initialize(initValues) {
        console.log('Entering ProfileController.initialize');
        this.router.get(`/`, requiresAuth(), this.get).bind(this)
    }
    get(request, response, next) {
        response.render('account/profile/index.html.ittf', {
            title: 'Profile page', 
            user: request.oidc.user, 
            userProfile: JSON.stringify(request.oidc.user, null, 2)
        })
    }
}
