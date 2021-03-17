/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.plugin.ppt\.wizzi\ittf\lib\artifacts\ppt\extended\trans\main.js.ittf
    utc time: Wed, 17 Mar 2021 09:59:13 GMT
*/
'use strict';
var util = require('util');
var async = require('async');
var verify = require('wizzi-utils').verify;
var lineparser = verify.lineParser;

var md = module.exports = {};
var myname = '.ppt..trans.main';

md.trans = function(model, ctx, callback) {
    var transformedModel = {};
    if (model.wzElement !== 'ppt') {
        console.log('wizzi-core', 'transformer', 'model', model);
        callback(error('InvalidArgument', 'gen', 'Invalid model schema. Expected "ppt". Received: ' + model.wzElement, model))
    }
    
    try {
    } 
    catch (ex) {
        return callback(ex);
    } 
    callback(null, transformedModel);
};

//
function error(errorName, method, message, model, innerError) {
    return new errors.WizziPluginError(message, model, {
            errorName: errorName, 
            method: '/lib/artifacts/ppt/extended/trans/main.' + method, 
            sourcePath: __filename, 
            inner: innerError
        });
}
