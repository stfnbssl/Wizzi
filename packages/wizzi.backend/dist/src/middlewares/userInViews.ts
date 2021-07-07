/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.backend\.wizzi\src\middlewares\userInViews.ts.ittf
    utc time: Wed, 07 Jul 2021 15:52:36 GMT
*/
import {Application, Request, Response, RequestHandler} from 'express';
import {MiddlewareType} from '../features/app/types';

export const UserInViewMiddleware: MiddlewareType = (app: Application) => 

    app.use((req: Request, res: Response, next) => {
    
        console.log('UserInViewMiddleware.req.session.user', req.session && (req.session as any).user);
        res.locals.user = req.session && (req.session as any).user;
        next();
    }
    )
;
    //
    
