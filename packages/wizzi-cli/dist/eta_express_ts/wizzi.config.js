/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:/My/wizzi/stfnbssl/wizzi/packages/wizzi-cli/dist/resources/create/templates/express_ts/wizzi.config.js.ittf
    utc time: Thu, 01 Apr 2021 15:10:34 GMT
*/
'use strict';
const path = require('path');
module.exports = {
    wfjobName: "/job", 
    wfjobPath: path.join(__dirname, '.wizzi', 'generate.wfjob.ittf'), 
    destPath: path.join(__dirname, 'dist'), 
    plugins: [
        './wizzi-core/dist/index.js', 
        './wizzi-js/dist/index.js', 
        './wizzi-web/dist/index.js'
    ], 
    pluginsBaseFolder: path.join(__dirname, '..', '..', '..'), 
    schemas: [
        
    ], 
    globalContext: {
        wzConfigIsDevelopment: true
    }
};
