/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:/My/wizzi/stfnbssl/wizzi/packages/wizzi-cli/dist/resources/create/templates/webpack_react_ts/wizzi.config.js.ittf
    utc time: Sat, 01 May 2021 05:17:26 GMT
*/
'use strict';
const path = require('path');
module.exports = {
    wfjobName: "wizzi.frontend/job", 
    wfjobPath: path.join(__dirname, '.wizzi', 'generate.wfjob.ittf'), 
    destPath: path.join(__dirname, 'dist'), 
    plugins: [
        './wizzi-core/dist/index.js', 
        './wizzi-js/dist/index.js', 
        './wizzi-web/dist/index.js'
    ], 
    pluginsBaseFolder: path.join(__dirname, '..'), 
    schemas: [
        
    ], 
    globalContext: {
        wzConfigIsDevelopment: true
    }
};
