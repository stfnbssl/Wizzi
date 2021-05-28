/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\server\src\features\auth\ensureAuthenticated.ts.ittf
    utc time: Fri, 28 May 2021 20:54:57 GMT
*/
import {Request, Response} from 'express';
export function ensureAuthenticated(req: Request, res: Response, next: Function) {

    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}
