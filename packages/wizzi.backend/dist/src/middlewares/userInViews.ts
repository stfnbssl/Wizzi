/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.backend\.wizzi\src\middlewares\userInViews.ts.ittf
    utc time: Fri, 25 Jun 2021 04:12:06 GMT
*/
import {Application, Request, Response, RequestHandler} from 'express';
import {MiddlewareType} from '../features/app/types';
export const UserInViewMiddleware: MiddlewareType = (app: Application) => 

    app.use((req: Request, res: Response, next) => {
    
        res.locals.user = req.user;
        next();
    }
    )
;
    //
    