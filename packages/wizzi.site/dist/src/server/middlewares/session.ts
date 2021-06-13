/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\server\src\middlewares\session.ts.ittf
    utc time: Wed, 09 Jun 2021 05:04:16 GMT
*/
import {Application, CookieOptions} from 'express';
import {MiddlewareType} from '../features/app/types';
import session from 'express-session';
import mongoSessionStore from 'connect-mongo';
import mongoose from 'mongoose';
import {config} from '../features/config';
export const SessionMiddleware: MiddlewareType = (app: Application) => {

    const MongoStore = mongoSessionStore(session);
    const cookieOptions: CookieOptions = {
        
        // serve secure cookies, requires https
        secure: app.get('env') === 'production' ? true : false, 
        httpOnly: true, 
        
        // expires in 14 days
        maxAge: 14 * 24 * 60 * 60 * 1000
     };
    
    /**
        * 
        * if (!dev) {
        * server.set('trust proxy', 1); // trust first proxy
        * }
        * 
    */
    const sessionOptions: session.SessionOptions = {
        name: 'wizzi.site.sid', 
        secret: config.sessionSecret, 
        store: new MongoStore(
        // save session 14 days
        {
            mongooseConnection: mongoose.connection, 
            ttl: 14 * 24 * 60 * 60
         }), 
        cookie: cookieOptions, 
        resave: false, 
        saveUninitialized: false
     };
    /**
        // 
        // if (!dev) {
        // server.set('trust proxy', 1); // trust first proxy
        // }
        // 
    */
    app.use(session(sessionOptions));
}
;
