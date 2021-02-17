/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\examples\tau\.wizzi\src\middlewares\userInViews.js.ittf
    utc time: Wed, 17 Feb 2021 17:02:45 GMT
*/
'use strict';
//
export const UserInViewMiddleware = (app) =>
    app.use((req, res, next) => {
        res.locals.user = req.user;
        next();
    });
