/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi\.wizzi\ittf\lib\production\options.js.ittf
*/
'use strict';
var _ = require('lodash');
var verify = require('wizzi-utils').verify;
module.exports = function(userdefaults, genoptions) {
    return _.merge({
            isDebug: false, 
            CRLF: '\n', 
            indentSpaces: 4, 
            dotgExtensionPrefix: false, 
            dumps: {}
        }, userdefaults || {}, genoptions || {});
};
