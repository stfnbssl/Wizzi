/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\sigma_express_auth\.wizzi\src\middlewares\bodyParser.js.ittf
    utc time: Sat, 06 Mar 2021 13:38:40 GMT
*/
'use strict';
import bodyParser from 'body-parser';
export const BodyParserMiddleware = (app) => {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({
        extended: true
    }))
};