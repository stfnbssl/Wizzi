/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\tau_express\.wizzi\src\middlewares\static.js.ittf
    utc time: Tue, 02 Mar 2021 21:04:16 GMT
*/
'use strict';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
import path from 'path';
import express from 'express';
export const StaticFilesMiddleware = (app) => {
    console.log('StaticFilesMiddleware. Folder served from ', path.resolve(__dirname,  '..', '..', 'static'));
    app.use('/static', express.static(path.resolve(__dirname, '..', '..', 'static')));
    // simply browse ittfs when IttfStaticMiddleware is not used
    // app.use('/ittf', express.static(path.resolve(__dirname, '..', '..', 'ittf')));
};
