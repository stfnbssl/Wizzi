/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\src\features\auth\strategies\local.ts.ittf
    utc time: Wed, 14 Apr 2021 15:53:06 GMT
*/
import {Strategy} from 'passport-local';
import {config} from '../../config';
export function createStrategy() {

    console.log('features.auth.strategies.local.createStrategy');
    return new Strategy({
            usernameField: 'user[email]', 
            passwordField: 'user[password]'
         }, (email: string, password: string, done: any) => {
        
            console.log('features.auth.strategies.local.verify.email,password', email, password);
            return done(null, {
                    id: email, 
                    email: email
                 });
        }
        );
}
