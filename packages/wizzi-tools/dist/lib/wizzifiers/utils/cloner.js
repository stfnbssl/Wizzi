/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-tools\.wizzi\ittf\lib\wizzifiers\utils\cloner.js.ittf
*/
'use strict';
var verify = require('wizzi-utils').verify;
function clone(obj) {
    if (verify.isArray(obj)) {
        var ret = [];
        var i, i_items=obj, i_len=obj.length, item;
        for (i=0; i<i_len; i++) {
            item = obj[i];
            var value = clone(item);
            if (value !== null) {
                ret.push(value);
            }
        }
        return ret;
    }
    else if (verify.isObject(obj)) {
        var ret = {};
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                ret[prop] = clone(obj[prop]);
            }
        }
        return ret;
    }
    else {
        return obj;
    }
}
module.exports = function(ast) {
    return clone(ast);
};
