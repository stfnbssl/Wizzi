/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:/My/wizzi/stfnbssl/wizzi/packages/wizzi-cli/dist/resources/create/templates/wizzi_plugin/wizzi.config.js.ittf
    utc time: Sun, 21 Mar 2021 08:17:29 GMT
*/
'use strict';
const path = require('path');
module.exports = {
    wfjobName: "wizzi.plugin.ppt/job", 
    wfjobPath: path.join(__dirname, '.wizzi', 'generate.wfjob.ittf'), 
    destPath: path.join(__dirname, 'dist'), 
    plugins: [
        'wizzi-core', 
        'wizzi-js', 
        'wizzi-web'
    ], 
    schemas: [
        "ppt"
    ], 
    globalContext: {
        wzConfigIsDevelopment: true
    }
};
