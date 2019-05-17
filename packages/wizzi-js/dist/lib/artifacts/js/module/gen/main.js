/*
    artifact generator: C:\My\wizzi\wizzi-mono\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-mono\packages\wizzi-js\.wizzi\ittf\lib\artifacts\js\module\gen\main.js.ittf
*/
'use strict';
var util = require('util');
var verify = require('wizzi-utils').verify;
var module_es6 = require('./codegen/es6/module');
var statement = require('./codegen/statement');
var wzIife = require('./codegen/wziife');
var preprocess = require('./preprocess');

var md = module.exports = {};

var myname = 'v6-wizzi-js.artifacts.js.module.main';

md.gen = function(model, ctx, callback) {
    if (typeof(callback) !== 'function') {
        throw new Error(error('InvalidArgument', 'gen', 'The callback parameter must be a function. Received: ' + callback));
    }
    if (verify.isObject(model) == false) {
        return callback(error('InvalidArgument', 'gen', 'The model parameter must be an object. Received: ' + model));
    }
    if (model.wzElement !== 'module') {
        console.log('v6-wizzi-js', 'artifact', 'model', model);
        return callback(error('InvalidArgument', 'gen', 'Invalid model schema. Expected root element "module". Received: ' + model.wzElement));
    }
    /**
        return callback(ctx.error('test', model));
    */
    try {
        preprocess.exec(model, ctx);
        ctx.__jskind = model.kind;
        ctx.__ecma = model.ecma;
        main_init(model, ctx);
        var len_1 = model.statements.length;
        function repeater_1(index_1) {
            if (index_1 === len_1) {
                return next_1();
            }
            var item_1 = model.statements[index_1];
            if (item_1.wzElement === 'wzIife') {
                wzIife.gen(item_1, ctx, function(err, notUsed) {
                    if (err) {
                        return callback(err);
                    }
                    ctx.w("");
                    process.nextTick(function() {
                        repeater_1(index_1 + 1);
                    });
                });
            }
            else {
                statement.gen(item_1, ctx, function(err, notUsed) {
                    if (err) {
                        return callback(err);
                    }
                    process.nextTick(function() {
                        repeater_1(index_1 + 1);
                    });
                });
            }
        }
        repeater_1(0);
        function next_1() {
            main_close(model, ctx);
            terminate_artifact();
        }
    } 
    catch (ex) {
        return callback(ex);
    } 
    function terminate_artifact() {
        if (ctx.artifactGenerationErrors.length > 0) {
            return callback(ctx.artifactGenerationErrors);
        }
        else {
            return callback(null, ctx);
        }
    }
};
function main_init(model, ctx) {
    if (model.kind === 'nodejs.bin') {
        ctx.w('#!/usr/bin/env node');
    }
    // log myname, 'ctx.values', ctx.values
    if ((!!ctx.values.noGeneratorComments) == false) {
        ctx.w('/*');
        ctx.w('    artifact generator: ' + __filename);
        ctx.w('    primary source IttfDocument: ' + model.wzSourceFilepath('f1'));
        if ((!!ctx.values.isPackageDeploy) == false) {
            ctx.w('    utc time: ' + new Date().toUTCString());
        }
        ctx.w('*/');
    }
    emitResources(model.resources, ctx);
    if (!model.no_strict && (!!ctx.values.noUseStrict) == false) {
        ctx.w("'use strict';");
    }
    main_es6_module(model, ctx);
    if (model.hasFeature('argument-check')) {
        if ((!!ctx.values.isLegacy) == false) {
            if (model.kind === 'react') {
                ctx.w("var verify = require('wizzi-utils-webpack').verify;");
            }
            else if ((!!ctx.values.isWizziUtilsPackage) == true) {
                ctx.w("var verify = require('wizzi-helpers').verify;");
            }
            else {
                ctx.w("var verify = require('wizzi-utils').verify;");
            }
        }
    }
    if (ctx.__wzItems && ctx.__wzItems.length > 0) {
        emit_Iife_WzModule(model, ctx);
    }
}
function main_es6_module(model, ctx) {
    var hasClasses = model.wzModelState.hasClasses,
        ecma = model.ecma;
    // log '==== wizzi-js.artifacts.js.main', model.wzName, model.ecma, model.wzModelState.hasClasses
    if (ecma === 'es5' && hasClasses) {
        ctx.w('// generated by ' + myname);
        ctx.w("function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }");
        ctx.w("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }");
        ctx.w("var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };");
        ctx.w();
    }
}
function main_close(model, ctx) {
    if (ctx.__wzModule && ctx.__wzModule.seen) {
        emit_top_WzModule(model, ctx);
    }
    if (model.hasFeature('argument-check')) {
        ctx.w('/**');
        ctx.w('  params');
        ctx.w('    string code');
        ctx.w('      # the error name or number');
        ctx.w('    string method');
        ctx.w('    string message');
        ctx.w('      # optional');
        ctx.w('    { innerError');
        ctx.w('      # optional');
        ctx.w('*/');
        ctx.w('function error(code, method, message, innerError) {');
        ctx.w('    var parameter = null;');
        ctx.w('    if (verify.isObject(message)) {');
        ctx.w('        parameter = message.parameter;');
        ctx.w('        message = message.message;');
        ctx.w('    }');
        // _ ctx.w('    innerError = innerError || new Error(\'Error created for trace.\');')
        ctx.w("    return verify.error(innerError, {");
        ctx.w("        name: ( verify.isNumber(code) ? 'Err-' + code : code ),");
        ctx.w("        method: '" + model.wzName + ".' + method,");
        ctx.w("        parameter: parameter,");
        ctx.w("        sourcePath: __filename");
        ctx.w("    }, message || 'Error message unavailable');");
        ctx.w('}');
    }
}
function emitResources(requestedResources, ctx) {
    if (requestedResources && requestedResources.length > 0 && ctx.values.jsResources) {
        var resourceRepo = ctx.values.jsResources;
        resourceRepo.clearJsDependencies();
        var i, i_items=requestedResources, i_len=requestedResources.length, item;
        for (i=0; i<i_len; i++) {
            item = requestedResources[i];
            resourceRepo.addJsDependency(item.wzName);
        }
        resourceRepo.emitJsDependencies(ctx);
    }
}
function emit_top_WzModule(model, ctx) {
    ctx.w('');
    ctx.w('module.exports = {');
    ctx.indent();
    var seen = false;
    var i, i_items=ctx.__wzModule.vars, i_len=ctx.__wzModule.vars.length, item;
    for (i=0; i<i_len; i++) {
        item = ctx.__wzModule.vars[i];
        if (seen) {
            ctx.w(',');
        }
        var ss = item.wzName.split(' ');
        ctx.write(ss[0] + ': ' + ss[0]);
        seen = true;
    }
    var i, i_items=ctx.__wzModule.consts, i_len=ctx.__wzModule.consts.length, item;
    for (i=0; i<i_len; i++) {
        item = ctx.__wzModule.consts[i];
        if (seen) {
            ctx.w(',');
        }
        var ss = item.wzName.split(' ');
        ctx.write(ss[0] + ': ' + ss[0]);
        seen = true;
    }
    var i, i_items=ctx.__wzModule.functions, i_len=ctx.__wzModule.functions.length, item;
    for (i=0; i<i_len; i++) {
        item = ctx.__wzModule.functions[i];
        if (seen) {
            ctx.w(',');
        }
        ctx.write(item.wzName + ': ' + item.wzName);
        seen = true;
    }
    var i, i_items=ctx.__wzModule.classes, i_len=ctx.__wzModule.classes.length, item;
    for (i=0; i<i_len; i++) {
        item = ctx.__wzModule.classes[i];
        if (seen) {
            ctx.w(',');
        }
        ctx.write(item.wzName + ': ' + item.wzName);
        seen = true;
    }
    if (seen) {
        ctx.w('');
    }
    ctx.deindent();
    ctx.w('};');
}
function emit_Iife_WzModule(model, ctx) {
    ctx.w('var __wz = (function() {');
    ctx.indent();
    ctx.w('var res = {};');
    var i, i_items=ctx.__wzItems, i_len=ctx.__wzItems.length, item;
    for (i=0; i<i_len; i++) {
        item = ctx.__wzItems[i];
        var j, j_items=item.requires, j_len=item.requires.length, require;
        for (j=0; j<j_len; j++) {
            require = item.requires[j];
            var from = require.from ? require.from : require.wzName;
            ctx.w('res["' + require.wzName + '"] = require("' + from + '");');
        }
    }
    ctx.w('return {');
    ctx.w('    require: function(name) {');
    ctx.w('        return res[name];');
    ctx.w('    }');
    ctx.w('}');
    ctx.deindent();
    ctx.w('})();');
}
/**
     params
     string code
     # the error name or number
     string method
     string message
     # optional
     { innerError
     # optional
*/
function error(code, method, message, innerError) {
    return verify.error(innerError, {
            name: ( verify.isNumber(code) ? 'Err-' + code : code ), 
            method: myname + '.' + method, 
            sourcePath: __filename
        }, message || 'Error message unavailable');
}
