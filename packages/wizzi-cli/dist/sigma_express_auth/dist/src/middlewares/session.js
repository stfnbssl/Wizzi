/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\sigma_express_auth\.wizzi\src\middlewares\session.js.ittf
    utc time: Sat, 06 Mar 2021 13:38:40 GMT
*/
'use strict';
import session from 'express-session';
import {config} from '../features/config/index.js';
export const SessionMiddleware = (app) => {
    const cookieOptions = {
        // serve secure cookies, requires https
        secure: app.get('env') === 'production' ? true : false, 
        httpOnly: true, 
        maxAge: 14 * 24 * 60 * 60 * 1000, 
        // expires in 14 days
        
    };
    const sessionOptions = {
        name: '', 
        secret: config.sessionSecret, 
        store: new session.MemoryStore(), 
        cookie: cookieOptions, 
        resave: false, 
        saveUninitialized: false
    };
    //
    app.use(session(sessionOptions))
};
