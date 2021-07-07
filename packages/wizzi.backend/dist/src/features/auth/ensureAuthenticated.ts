/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.backend\.wizzi\src\features\auth\ensureAuthenticated.ts.ittf
    utc time: Wed, 07 Jul 2021 15:52:36 GMT
*/
import {Request, Response} from 'express';
export function ensureAuthenticated(req: Request, res: Response, next: Function) {

    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}
