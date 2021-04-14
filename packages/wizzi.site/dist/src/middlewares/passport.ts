/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\src\middlewares\passport.ts.ittf
    utc time: Wed, 14 Apr 2021 15:53:06 GMT
*/
import {Application} from 'express';
import {authManager} from '../features/auth';
export const PassportMiddleware = (app: Application) => {

    const passport = authManager.getPassport();
    app.use(passport.initialize());
    app.use(passport.session());
}
;
