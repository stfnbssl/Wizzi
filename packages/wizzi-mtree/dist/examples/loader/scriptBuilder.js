/*
    artifact generator: C:\my\wizzi\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\my\wizzi\wizzi\packages\wizzi-mtree\.wizzi\ittf\examples\loader\scriptBuilder.js.ittf
*/
'use strict';
var path = require('path');
var util = require('util');
var async = require('async');
var stringify = require('json-stringify-safe');
var inspect = require('object-inspect');
var verify = require('wizzi-utils').verify;
var vfile = require('wizzi-utils').vfile;
var file = vfile();
var mocks = require('wizzi-utils').mocks;
var repo = mocks.repo;
var packageIndex = require('../../index');
var JsWizziScriptCoder = require('../../lib/jswizzi/JsWizziScriptCoder');
var mTreeBuildUpScripter = require('../../lib/loader/mTreeBuildUpScripter');
var scriptBuilder = function(step_callback) {
    heading1('EXAMPLE');
    /**
         EXAMPLE: mTreeBuildUpScripter
    */
    var loadMTree = packageIndex.createLoadMTree(repo.getCreateFilesystemStore(), {
        raw: true
    });
    exec('scriptBuilder_1', () => {
    });
    function exec(name, callback) {
        console.log('exec', name);
        var ctx = {
            brickKey: null, 
            counter: 0, 
            startTime: Date.now(), 
            isCompile: false
        };
        var scriptCoder = new JsWizziScriptCoder();
        loadMTree(path.join(__dirname, 'ittf', name + '.html.ittf'), {
            __productionManager: mocks.getProductionManager(), 
            mTreeBuildUpContext: {
                
            }
        }, function(err, mTree) {
            if (err) {
                console.log('err', err);
                if (err.toString()) {
                    console.log('err.toString()', err.toString());
                }
                if (err.inner) {
                    console.log('err.inner', err.inner);
                    if (err.inner.toString) {
                        console.log('err.inner.toString()', err.inner.toString());
                    }
                }
                throw new Error(err.message);
            }
            var i, i_items=mTree.nodes, i_len=mTree.nodes.length, item;
            for (i=0; i<i_len; i++) {
                item = mTree.nodes[i];
                mTreeBuildUpScripter.codify(item, 0, scriptCoder, ctx);
            }
            heading1('Script ' + name);
            printValue('mTree', mTree);
            console.log(scriptCoder.toCode());
        });
    }
};
scriptBuilder.__name = 'scriptBuilder';
function heading1(text) {
    console.log('');
    console.log('*'.repeat(120));
    console.log('** level 0 - step 1 - scriptBuilder - ' + text);
    console.log('*'.repeat(120));
    console.log('');
}
function heading2(text) {
    console.log('');
    console.log('   ', '-'.repeat(100));
    console.log('   ','-- scriptBuilder - ' + text);
    console.log('   ', '-'.repeat(100));
    console.log('');
}
function printArray(name, arr, fields, format) {
    if (format === 'dashes') {
        console.log('   ', '-'.repeat(100));
    }
    console.log('   ', '* array ' + name + ' : ');
    var i, i_items=arr, i_len=arr.length, item;
    for (i=0; i<i_len; i++) {
        item = arr[i];
        console.log('    {', i);
        var keys = fields || Object.keys(item);
        var j, j_items=keys, j_len=keys.length, k;
        for (j=0; j<j_len; j++) {
            k = keys[j];
            printValue(k, item[k]);
        }
    }
}
function printValue(k, v, format, p1) {
    if (format === 'dashes' || format === 'meter') {
        console.log('   ', '-'.repeat(100));
    }
    if (format === 'json') {
        v = stringify(v, null, 4);
    }
    if (verify.isNotEmpty(v)) {
        var lines = verify.splitLines(v, {
            numbered: true
        });
        if (lines.length === 1) {
            console.log('   ', k, ':', lines[0].text);
        }
        else {
            for (var i=0; i<lines.length; i++) {
                if (i === 0) {
                    console.log('   ', k, ':', lines[0].numFmt, lines[0].text);
                }
                else {
                    console.log('   ', spaces(k.length+1), ' ', lines[i].numFmt, lines[i].text);
                }
            }
        }
    }
    else if (verify.isObject(v)) {
        console.log('   ', k, ':', inspect(v));
    }
    else {
        console.log('   ', k, ':', v);
    }
    if (format === 'meter') {
        meterLine(p1, '     ' + new Array(1 + k.length).join(' '));
    }
}
function printObject(k, v, format, p1) {
    if (format === 'dashes' || format === 'meter') {
        console.log('   ', '-'.repeat(100));
    }
    console.log('   ', k, '{');
    __printObject(v, 2, 6);
    if (format === 'meter') {
        meterLine(p1, '     ' + new Array(1 + k.length).join(' '));
    }
}
function __printObject(v, level, limit) {
    if (level < limit) {
        var indent = new Array(1 + level * 4).join(' ');
        var prop;
        for (var k in v) {
            prop = v[k];
            if (verify.isObject(prop)) {
                console.log(indent, k, '{');
                __printObject(prop, level+1, limit);
            }
            else if (verify.isFunction(prop)) {
                console.log(indent, k, 'function');
            }
            else if (verify.isArray(prop)) {
                console.log(indent, k, '[');
                var indent2 = new Array(1 + (level+1) * 4).join(' ');
                var i, i_items=prop, i_len=prop.length, item;
                for (i=0; i<i_len; i++) {
                    item = prop[i];
                    if (verify.isObject(item)) {
                        __printObject(item, level+1, limit);
                    }
                    else if (verify.isFunction(item)) {
                        console.log(indent2, 'function');
                    }
                    else {
                        console.log(indent2, item);
                    }
                }
            }
            else {
                console.log(indent, k, prop);
            }
        }
    }
}
function spaces(len) {
    return new Array(len).join(' ');
}
function meterLine(len, indent) {
    var sb = [];
    var numW = len < 10 ? 1 : ( len < 100 ? 2 : 3 );
    var x;
    for (var i=0; i<numW; i++) {
        for (var j=0; j<len; j++) {
            x = formatNum(j, numW);
            sb.push(x.substr(i,1));
        }
        console.log(indent, sb.join(''));
        sb = [];
    }
}
function formatNum(num, len) {
    var x = num.toString();
    return new Array(1 + len-x.length).join(' ') + x;
}
module.exports = scriptBuilder;
if (typeof require != 'undefined' && require.main === module) {
    scriptBuilder();
}
