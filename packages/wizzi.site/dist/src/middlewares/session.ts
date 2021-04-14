/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\src\middlewares\session.ts.ittf
    utc time: Wed, 14 Apr 2021 15:53:06 GMT
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
