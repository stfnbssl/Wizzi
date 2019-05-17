/*
    artifact generator: C:\My\wizzi\v5\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: c:\my\wizzi\v5\kernel\wizzi\src\ittf\lib\production\service.js.ittf
*/
'use strict';
// generated by wizzi.codegen.js4.es2015.module
function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var verify = require('wizzi-utils').verify;
var file = require('wizzi-utils').file;
var log = require('../util/log')(module);
var sourcetree = require('./helpers/sourcetree');
var ProductionContext = require('./context');
var ProductionService = (function () {
    function ProductionService(options) {
        _classCallCheck(this, ProductionService);
        this.options = options;
        this.schemaModules = [];
        this.artifactModules = [];
        this.productionContext = new ProductionContext();
        log.setLevel(options.verbose || 0);
    }
    ProductionService.prototype.registerSchemaModule = function(schemaModule) {
        this.schemaModules.push(schemaModule);
    }
    ProductionService.prototype.getSchemaLoader = function(schemaName) {
        // console.log('ProductionService.getSchemaLoader.schemaName: ' + schemaName);
        var result = null;
        var i, i_items=this.schemaModules, i_len=this.schemaModules.length, item;
        for (i=0; i<i_len; i++) {
            item = this.schemaModules[i];
            if (result == null && verify.isFunction(item[schemaName])) {
                result = item[schemaName];
            }
        }
        if (!result) {
            var availables = [];
            var i, i_items=this.schemaModules, i_len=this.schemaModules.length, item;
            for (i=0; i<i_len; i++) {
                item = this.schemaModules[i];
                for (key in item) {
                    if (verify.isFunction(item[key])) {
                        availables.push(key);
                    }
                }
            }
            log.error('getSchemaLoader. Cannot find schema loader: ' + schemaName + '\n' + 'availables: ' + availables.join(', '));
        }
        return result;
    }
    ProductionService.prototype.registerArtifactModule = function(artifactModule) {
        this.artifactModules.push(artifactModule);
    }
    ProductionService.prototype.getArtifactGenerator = function(artifactName) {
        // console.log('ProductionService.getArtifactGenerator.artifactName: ' + artifactName);
        var result = null;
        var i, i_items=this.artifactModules, i_len=this.artifactModules.length, item;
        for (i=0; i<i_len; i++) {
            item = this.artifactModules[i];
            if (result == null && verify.isFunction(item[artifactName])) {
                result = item[artifactName];
            }
        }
        if (!result) {
            log.error('getArtifactGenerator. Cannot find artifact generator: ' + artifactName);
        }
        return result;
    }
    ProductionService.prototype.loadWizziModel = function(schemaName, ittfSource, context, callback) {
        var schemaNameDef = file.exists(ittfSource) ? schemaName : schemaName + 'FromString';
        var schemaLoader = this.getSchemaLoader(schemaNameDef);
        if (schemaLoader == null) {
            return callback({ message: 'ProductionService.loadWmtModel error. Cannot find schema loader for schema ' + schemaName });
        }
        schemaLoader(ittfSource, context, callback);
    }
    ProductionService.prototype.loadWizziModelSourceTree = function(schemaName, ittfSource, context, callback) {
        var schemaNameDef = file.exists(ittfSource) ? schemaName : schemaName + 'FromString';
        var schemaLoader = this.getSchemaLoader(schemaNameDef);
        if (schemaLoader == null) {
            return callback({ message: 'ProductionService.loadWmtModel error. Cannot find schema loader for schema ' + schemaName });
        }
        var self = this;
        schemaLoader(ittfSource, context, callback(err, sourcetree(result, file.exists(ittfSource) ? ittfSource : null, context.wzrepoRootPath)));
    }
    ProductionService.prototype.generateArtifact = function(artifactName, ittfSource, context, callback) {
        if (verify.isString(artifactName) === false) {
            return callback({ message: 'ProductionService.generateArtifact error. Invalid artifact name ' + artifactName });
        }
        var ss = artifactName.split('/');
        if (ss.length == 2) {
            artifactName = ss[0] + ss[1].substr(0, 1).toUpperCase() + ss[1].substr(1);
        }
        var artifactNameDef = file.exists(ittfSource) ? artifactName : artifactName + 'FromString';
        var artifactGenerator = this.getArtifactGenerator(artifactNameDef);
        if (artifactGenerator == null) {
            return callback({ message: 'ProductionService.generateArtifact error. Cannot find artifact generator for artifact ' + artifactName });
        }
        artifactGenerator(ittfSource, context, callback);
    }
    return ProductionService;
})();

module.exports = ProductionService;
