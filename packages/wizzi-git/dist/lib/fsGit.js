/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-git\.wizzi\ittf\lib\fsGit.js.ittf
*/
'use strict';
var git = require('isomorphic-git');
var u = require('wizzi-utils');
var verify = u.verify;
var fs = require('fs');
function initialize(options, callback) {
    git.plugins.set('fs', fs);
    if (callback) {
        return callback(null);
    }
    else {
        return ;
    }
}
//
module.exports = function(options, callback) {
    if (typeof callback === 'undefined') {
        callback = options;
        options = {};
    }
    options = options || {};
    if (callback) {
        initialize(options, function(err, notUsed) {
            if (err) {
                return callback(err);
            }
            return callback(null, {
                    fs: fs, 
                    git: git
                });
        });
    }
    else {
        initialize(options);
        return {
                fs: fs, 
                git: git
            };
    }
};
