/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\examples\tau\.wizzi\src\middlewares\cacheControl.js.ittf
    utc time: Fri, 19 Feb 2021 10:35:17 GMT
*/
'use strict';
import {config} from '../features/config/index.js';
export const CacheControlMiddleware = (app) => {
    if (config.noCache) {
        app.use((req, res, next) => {
            res.set('Cache-Control', 'no-store');
            next();
        })
    }
};
