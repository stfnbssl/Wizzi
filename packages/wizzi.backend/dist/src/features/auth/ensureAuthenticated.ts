/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.backend\.wizzi\src\features\auth\ensureAuthenticated.ts.ittf
    utc time: Mon, 28 Jun 2021 20:09:52 GMT
*/
import {Request, Response} from 'express';
export function ensureAuthenticated(req: Request, res: Response, next: Function) {

    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}
