/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\server\src\middlewares\logger.ts.ittf
    utc time: Fri, 21 May 2021 16:01:34 GMT
*/
import {Application, Request, Response, RequestHandler} from 'express';
import {MiddlewareType} from '../features/app/types';
export const LoggerMiddleware: MiddlewareType = (app: Application) => 

    app.use((request: Request, response: Response, next) => {
    
        console.log(`${request.method} ${request.path}`)
        next();
    }
    )
;
