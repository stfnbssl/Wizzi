/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\eta_express_ts\.wizzi\src\middlewares\session.ts.ittf
    utc time: Wed, 31 Mar 2021 20:00:35 GMT
*/
import {Application, CookieOptions} from 'express';
import {MiddlewareType} from '../features/app/types';
import session from 'express-session';
import {config} from '../features/config';
export const SessionMiddleware: MiddlewareType = (app: Application) => {
    const cookieOptions: CookieOptions = {
        secure: app.get('env') === 'production' ? true : false// serve secure cookies, requires https
        , 
        httpOnly: true, 
        maxAge: 14 * 24 * 60 * 60 * 1000// expires in 14 days
        
     };
    // 
    const sessionOptions: session.SessionOptions = {
        name: '.sid', 
        secret: config.sessionSecret, 
        store: new session.MemoryStore(), 
        cookie: cookieOptions, 
        resave: false, 
        saveUninitialized: false
     };
    // 
    app.use(session(sessionOptions));
}
;
