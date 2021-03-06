/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\sigma_express_auth\.wizzi\src\middlewares\authSecured.js.ittf
    utc time: Sat, 06 Mar 2021 13:38:40 GMT
*/
'use strict';
//
export default function getSecured() {
        console.log('middleware.getSecured called');
        return function secured(req, res, next) {
                console.log('middleware.secured called', req.user);
                if (req.user) {
                    return next();
                }
                req.session.returnTo = req.originalUrl;
                res.redirect('/account/login');
            };
    }
