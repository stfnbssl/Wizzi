/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\server\src\features\auth\strategies\local.ts.ittf
    utc time: Fri, 04 Jun 2021 20:07:21 GMT
*/
import {Strategy} from 'passport-local';
import {GetUserModel, UserModelType} from '../mongo/user';
import {config} from '../../config';
let userModel: UserModelType;
export function createStrategy() {

    userModel = GetUserModel();
    console.log('features.auth.strategies.local.createStrategy');
    return new Strategy({
            usernameField: 'user[email]', 
            passwordField: 'user[password]'
         }, (email: string, password: string, done: any) => {
        
            console.log('features.auth.strategies.local.verify.email,password', email, password);
            userModel.findOne({
                email
             }).then((user: any) => {
            
                if (!user || !user.validatePassword(password)) {
                    console.log('features.auth.strategies.local.verify.false');
                    return done(null, false, {
                            errors: {
                                'email or password': 'is invalid'
                             }
                         });
                }
                console.log('features.auth.strategies.local.verify.true.user', user);
                return done(null, user);
            }
            ).catch(done)
        }
        );
}
