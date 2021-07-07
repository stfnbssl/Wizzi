/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\.wizzi\ittf\root\index.js.ittf
*/
'use strict';
// generated by v6-wizzi-js.artifacts.js.module.main
function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };



var util = require('util');
var path = require('path');
var stringify = require('json-stringify-safe');

var md = module.exports = {};
md.name = 'wizzi-js';


//
var FactoryPlugin = (function () {
    function FactoryPlugin(wizziPackage, provides) {
        _classCallCheck(this, FactoryPlugin);
        this.file = wizziPackage.file;
        this.provides = provides;
        this.modelFactories = {};
        this.modelTransformers = {};
        this.artifactGenerators = {};
        this.schemaDefinitions = {};
    }
    FactoryPlugin.prototype.initialize = function(options, callback) {
        // TODO
        return callback(null);
    }
    FactoryPlugin.prototype.getName = function() {
        return 'wizzi-js';
    }
    FactoryPlugin.prototype.getFilename = function() {
        return __filename;
    }
    FactoryPlugin.prototype.getVersion = function() {
        return '0.7.9';
    }
    FactoryPlugin.prototype.getProvides = function() {
        return this.provides;
    }
    //
    FactoryPlugin.prototype.getModelFactory = function(schemaName) {
        var factory = this.modelFactories[schemaName] || null;
        if (factory == null) {
            if (typeof window !== 'undefined') {
                factory = window_modelFactories[schemaName];
            }
            else {
                var modulePath = path.resolve(__dirname, './lib/wizzi/models/' + schemaName + '-factory.g.js');
                if (this.file.exists(modulePath)) {
                    try {
                        factory = require('./lib/wizzi/models/' + schemaName + '-factory.g');
                    } 
                    catch (ex) {
                        return error('WizziPluginError', 'Error loading wizzi model factory: ' + modulePath + ', in plugin: ' + this.getFilename() + ', err: ' + ex.message + ', stack: ' + ex.stack);
                    } 
                }
            }
            this.modelFactories[schemaName] = factory;
        }
        return factory;
    }
    //
    FactoryPlugin.prototype.getModelTransformer = function(transformerName) {
        
        var transformer = this.modelTransformers[transformerName] || null;
        if (transformer == null) {
            if (typeof window !== 'undefined') {
                transformer = window_transformers[transformerName];
            }
            else {
                var modulePath = path.resolve(__dirname, './lib/artifacts/' + transformerName + '/trans/main.js');
                if (this.file.exists(modulePath)) {
                    try {
                        transformer = require('./lib/artifacts/' + transformerName + '/trans/main');
                    } 
                    catch (ex) {
                        return error('WizziPluginError', 'Error loading wizzi model transformer: ' + modulePath + ', in plugin: ' + this.getFilename() + ', err: ' + ex.message + ', stack: ' + ex.stack);
                    } 
                }
            }
            this.modelTransformers[transformerName] = transformer;
        }
        return transformer;
    }
    //
    FactoryPlugin.prototype.getArtifactGenerator = function(generationName) {
        
        var generator = this.artifactGenerators[generationName] || null;
        if (generator == null) {
            if (typeof window !== 'undefined') {
                generator = window_artifactGenerators[generationName];
            }
            else {
                var modulePath = path.resolve(__dirname, './lib/artifacts/' + generationName + '/gen/main.js');
                if (this.file.exists(modulePath)) {
                    try {
                        generator = require('./lib/artifacts/' + generationName + '/gen/main');
                    } 
                    catch (ex) {
                        return error('WizziPluginError', 'Error loading artifact generator: ' + modulePath + ', in plugin: ' + this.getFilename() + ', err: ' + ex.message + ', stack: ' + ex.stack);
                    } 
                }
            }
            this.artifactGenerators[generationName] = generator;
        }
        return generator;
    }
    //
    FactoryPlugin.prototype.getSchemaDefinition = function(schemaName) {
        var definition = this.schemaDefinitions[schemaName] || null;
        if (definition == null) {
            if (typeof window !== 'undefined') {
                definition = window_schemaDefinitions[schemaName];
            }
            else {
                var schemaJsonUri = path.resolve(__dirname, './lib/wizzi/models/' + schemaName + '-schema.g.json');
                if (this.file.exists(schemaJsonUri)) {
                    try {
                        definition = this.file.readJSON(schemaJsonUri);
                    } 
                    catch (ex) {
                        return error('WizziPluginError', 'Error loading wizzi schema definition: ' + schemaJsonUri + ', in plugin: ' + this.getFilename() + ', err: ' + ex.message + ', stack: ' + ex.stack);
                    } 
                    this.schemaDefinitions[schemaName] = definition;
                }
            }
        }
        return definition;
    }
    return FactoryPlugin;
})();


function error(code, message) {
    return {
            __is_error: true, 
            source: 'wizzi-js/FactoryPlugin', 
            code: code, 
            message: message
         };
}

module.exports = {
    provides: {
        schemas: [
            'js', 
            'ts'
        ], 
        modelTransformers: [], 
        artifactGenerators: [
            'js/module', 
            'ts/module'
        ]
     }, 
    createFactoryPlugin: function(wizziPackage, options, callback) {
        var plugin = new FactoryPlugin(wizziPackage, this.provides);
        plugin.initialize(options, function(err, notUsed) {
            if (err) {
                return callback(err);
            }
            return callback(null, plugin);
        })
    }
 };

