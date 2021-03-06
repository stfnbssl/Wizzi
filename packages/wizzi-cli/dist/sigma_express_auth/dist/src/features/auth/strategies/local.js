/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\sigma_express_auth\.wizzi\src\features\auth\strategies\local.js.ittf
    utc time: Sat, 06 Mar 2021 13:38:40 GMT
*/
'use strict';
import {Strategy} from 'passport-local';
import {config} from '../../config/index.js';
let userModel;
export function createStrategy() {
    console.log('features.auth.strategies.local.createStrategy');
    return new Strategy({
            usernameField: 'user[email]', 
            passwordField: 'user[password]'
        }, (email, password, done) => {
            console.log('features.auth.strategies.local.verify.email,password', email, password);
            return done(null, {
                    email: email, 
                    id: "dummy_id_1"
                });
        });
}
