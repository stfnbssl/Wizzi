/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\tau_express\.wizzi\src\middlewares\bodyParser.js.ittf
    utc time: Thu, 04 Mar 2021 19:31:00 GMT
*/
'use strict';
import bodyParser from 'body-parser';
export const BodyParserMiddleware = (app) => {
    app.use(bodyParser.urlencoded({
        extended: true
    }))
    app.use(bodyParser.json())
};
