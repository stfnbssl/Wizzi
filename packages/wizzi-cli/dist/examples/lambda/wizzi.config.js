/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:/My/wizzi/stfnbssl/wizzi/packages/wizzi-cli/dist/resources/create/templates/wizzi_plugin/wizzi.config.js.ittf
    utc time: Wed, 24 Feb 2021 13:30:32 GMT
*/
'use strict';
const path = require('path');
module.exports = {
    wfjobName: "/job", 
    wfjobPath: path.join(__dirname, '.wizzi', 'generate.wfjob.ittf'), 
    destPath: path.join(__dirname, 'dist'), 
    plugins: [
        'wizzi-core', 
        'wizzi-js', 
        'wizzi-web'
    ], 
    schemas: [
        "sample"
    ], 
    globalContext: {
        wzConfigIsDevelopment: true
    }
};
