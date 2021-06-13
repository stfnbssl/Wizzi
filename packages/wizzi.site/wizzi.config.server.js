/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:/My/wizzi/stfnbssl/wizzi/packages/wizzi-cli/dist/resources/create/templates/ts/express_site/wizzi.config.server.js.ittf
    utc time: Wed, 09 Jun 2021 05:03:58 GMT
*/
'use strict';
const path = require('path');
module.exports = {
    wfjobName: "wizzi.site/server/job", 
    wfjobPath: path.join(__dirname, '.wizzi', 'server', 'generate.wfjob.ittf'), 
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
