/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi\.wizzi\ittf\lib\artifact\artifactInfo.js.ittf
*/
'use strict';
// generated by v6-wizzi-js.artifacts.js.module.main
function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };


var assert = require('assert');
var path = require('path');
var util = require('util');
var _ = require('lodash');
var verify = require('wizzi-utils').verify;
var interpolate = require('../util/interpolate');
var ModelInfo = require("../model/modelInfo").ModelInfo;

//

function logme() {
    if (false) {
        console.log.apply(console, arguments);
    }
}

var ArtifactInfo = (function () {
    function ArtifactInfo(artifactConfig) {
        _classCallCheck(this, ArtifactInfo);
        this.name = artifactConfig.name;
        this.options = artifactConfig.options;
        if (verify.isObject(artifactConfig.model)) {
            this.modelInfo = new ModelInfo(artifactConfig.model);
            this.contextInfos = null;
        }
        else {
            this.contextInfos = [];
            var i, i_items=artifactConfig.contexts, i_len=artifactConfig.contexts.length, item;
            for (i=0; i<i_len; i++) {
                item = artifactConfig.contexts[i];
                this.contextInfos.push(new ModelInfo(item))
            }
            this.modelInfo = null;
        }
        this.collection = artifactConfig.collection;
        this.isWfJob = artifactConfig.isWfJob;
        this.isWfModelType = artifactConfig.isWfModelType;
        this.transformers = artifactConfig.transformers;
        this.gen = artifactConfig.gen;
        this.dest = artifactConfig.dest;
        this.wfjob = artifactConfig.wfjob;
        this.genContexts = [];
    }
    ArtifactInfo.prototype.initialize = function(productionManager) {
        this.productionManager = productionManager;
        if (this.modelInfo) {
            this.modelInfo.productionManager(productionManager)
        }
        else {
            var i, i_items=this.contextInfos, i_len=this.contextInfos.length, item;
            for (i=0; i<i_len; i++) {
                item = this.contextInfos[i];
                item.productionManager(productionManager)
            }
        }
        this.options = _.merge({}, productionManager.options || {}, this.options || {});
    }
    ArtifactInfo.prototype.addGenContext = function(genContext) {
        this.genContexts.push(genContext);
    }
    ArtifactInfo.prototype.isWizziModelTypesArtifact = function() {
        return this.modelInfo != null && this.modelInfo.getModelCollectionInfo() == null && this.isWfModelType;
    }
    ArtifactInfo.prototype.isWizziFactoryJob = function() {
        return this.modelInfo != null && this.modelInfo.getModelCollectionInfo() == null && this.isWfJob;
    }
    ArtifactInfo.prototype.isWizziModelArtifact = function() {
        return this.modelInfo != null && this.modelInfo.getModelCollectionInfo() == null && verify.isObject(this.gen) && verify.isNotEmpty(this.gen.generator);
    }
    ArtifactInfo.prototype.isModelCollectionArtifact = function() {
        return this.modelInfo != null && verify.isObject(this.modelInfo.getModelCollectionInfo()) && verify.isObject(this.gen);
    }
    ArtifactInfo.prototype.isCodeWriteArtifact = function() {
        return this.modelInfo == null && verify.isObject(this.gen) && verify.isNotEmpty(this.gen.generator);
    }
    ArtifactInfo.prototype.isFinalArtifact = function() {
        return this.modelInfo != null && (verify.isObject(this.gen) === false || verify.isEmpty(this.gen.generator));
    }
    ArtifactInfo.prototype.getFileService = function() {
        assert.ok(verify.isObject(this.productionManager), 'productionManager not set.')
        assert.ok(verify.isObject(this.productionManager.wizziFactory.fileService), 'fileService must be set on wizziFactory')
        return this.productionManager.wizziFactory.fileService;
    }
    ArtifactInfo.prototype.getItemsToPersistToFile = function(callback) {
        var check = {};
        var items = [];
        var i, i_items=this.genContexts, i_len=this.genContexts.length, genContext;
        for (i=0; i<i_len; i++) {
            genContext = this.genContexts[i];
            var srcPath = genContext.srcPath;
            if (this.isModelCollectionArtifact()) {
                var collectionItem = genContext.model;
                assert.strictEqual(verify.isObject(collectionItem), true, 'genContext.model must contain an object.')
                var ipcontext = this.getInterpolatePathNameContext(collectionItem);
                if (ipcontext && ipcontext.__is_error) {
                    console.log('__is_error ', ipcontext);
                    return callback(ipcontext);
                }
                var destUri = this.getDestinationUri(srcPath);
                if (destUri && destUri.__is_error) {
                    console.log('__is_error ', destUri);
                    return callback(destUri);
                }
                var filepath = interpolate(destUri, ipcontext, {
                    delimiter: '{}'
                });
                logme('ArtifactInfo.getItemsToPersistToFile.ipcontext', ipcontext, 'filepath', filepath);
                if (check[filepath]) {
                    return callback(this.error("Duplicated destination filepath: " + filepath, "getItemsToPersistToFile"));
                }
                check[filepath] = true;
                var persisteable = {
                    artifactInfo: this, 
                    genContext: genContext, 
                    filepath: filepath
                };
                items.push(persisteable);
            }
            else {
                var destUri = this.getDestinationUri(srcPath);
                if (destUri && destUri.__is_error) {
                    console.log('__is_error ', destUri);
                    return callback(destUri);
                }
                var persisteable = {
                    artifactInfo: this, 
                    genContext: genContext, 
                    filepath: destUri
                };
                items.push(persisteable);
            }
        }
        callback(null, items);
    }
    ArtifactInfo.prototype.getInterpolatePathNameContext = function(collectionItem) {
        if (this.isModelCollectionArtifact()) {
            var result = {};
            var info = this.modelInfo.getModelCollectionInfo();
            var i, i_items=info.pathTemplateValues, i_len=info.pathTemplateValues.length, templValue;
            for (i=0; i<i_len; i++) {
                templValue = info.pathTemplateValues[i];
                if (templValue.function) {
                    result[templValue.token] = collectionItem[templValue.function]();
                    if (verify.isEmpty(result[templValue.token])) {
                        return this.error('the path template value function must return a not empty string for token: "' + templValue.token + '"', 'getInterpolatePathNameContext');
                    }
                }
                else if (templValue.attribute) {
                    result[templValue.token] = collectionItem[templValue.attribute];
                    logme('result[templValue.token]', result[templValue.token], verify.isEmpty(result[templValue.token]))
                    if (verify.isEmpty(result[templValue.token])) {
                        return this.error('the path template value attribute "' + templValue.attribute + '" must return a not empty string for token: "' + templValue.token + '"', 'getInterpolatePathNameContext');
                    }
                }
                else {
                    return this.error('path template value must contain an attribute or a function value for token: "' + templValue.token + '"', 'getInterpolatePathNameContext');
                }
            }
            return result;
        }
        else {
            return this.error("Method called on an artifact that is not a wizzi collection artifact.", 'getInterpolatePathNameContext');
        }
    }
    ArtifactInfo.prototype.getDestinationUri = function(srcPath) {
        var dest = this.dest;
        var msg = [
            'ArtifactInfo.getDestinationUri', 
            'config.dest'
        ];
        if (verify.isNotEmpty(dest.fullpath)) {
            return dest.fullpath;
        }
        if (verify.isEmpty(dest.folder)) {
            return this.error('A not empty dest.folder is required', 'getDestinationUri');
        }
        var destpath;
        if (dest.path && verify.isAbsolutePath(dest.path)) {
            destpath = path.join(dest.path, srcPath);
        }
        else {
            if (dest.path) {
                destpath = path.join(dest.folder, dest.path);
            }
            else {
                if (verify.isEmpty(srcPath)) {
                    return this.error('A not empty srcPath is required', 'getDestinationUri');
                }
                destpath = path.join(dest.folder, srcPath);
                if (this.isFinalArtifact() === false) {
                    if (dest.extension === '@@null') {
                        destpath = verify.stripIttfExtension(destpath);
                        destpath = verify.replaceExtension(destpath, '');
                        if (verify.endsWith(destpath, '.')) {
                            destpath = destpath.substr(0, destpath.length - 1);
                        }
                    }
                    else {
                        var ext = (dest.extension || 'js');
                        ext = verify.startsWith(ext, '.') ? ext.substr(1) : ext;
                        if (this.options.dotgExtensionPrefix) {
                            ext = 'g.' + ext;
                        }
                        destpath = verify.stripIttfExtension(destpath);
                        destpath = verify.replaceExtension(destpath, ext);
                    }
                }
            }
        }
        if (this.isFinalArtifact() === true) {
            destpath = verify.replaceAll(destpath, '__copy', '');
        }
        if (verify.isAbsolutePath(destpath)) {
            return destpath;
        }
        if (verify.isEmpty(dest.baseFolder)) {
            return this.error('When dest.folder is a relative path, a not empty dest.baseFolder value is required. Received destpath : ' + destpath, 'getDestinationUri');
        }
        return path.join(dest.baseFolder, destpath);
    }
    ArtifactInfo.prototype.error = function(message, method) {
        var err = {
            __is_error: true, 
            message: message, 
            source: "wizzi/lib/production/artifactInfo.js/" + method, 
            modelInfo: this.modelInfo
        };
        logme(err);
        return err;
    }
    ArtifactInfo.prototype.dump = function() {
        throw new Error('Not implemented');
    }
    ArtifactInfo.prototype._relPath = function() {
        if (this.modelInfo) {
            return this.options.basedir ? this.modelInfo.srcFullPath().substr(this.options.basedir.length + 1)
                 : this.modelInfo.srcFullPath();
        }
        else {
            return 'null';
        }
    }
    ArtifactInfo.prototype.toString = function() {
        return [
                '\n', 
                'ArtifactInfo ', 
                'name: ' + this.name, 
                'model.src: ' + this._relPath(), 
                ', gen.generator:', 
                this.gen ? this.gen.generator : 'none', 
                '\n'
            ].join(' ');
    }
    ArtifactInfo.prototype.terminate = function() {
        if (this.modelInfo) {
            this.modelInfo.terminate();
        }
        if (this.contextInfos) {
            var i, i_items=this.contextInfos, i_len=this.contextInfos.length, item;
            for (i=0; i<i_len; i++) {
                item = this.contextInfos[i];
                item.terminate();
            }
        }
        if (this.genContexts) {
            var i, i_items=this.genContexts, i_len=this.genContexts.length, item;
            for (i=0; i<i_len; i++) {
                item = this.genContexts[i];
                item.terminate();
            }
        }
    }
    ArtifactInfo.isArtifactConfig = function(test) {
        if (!test) {
            return false;
        }
        if (!verify.isObject(test.options)) {
            return false;
        }
        if (!verify.isObject(test.model) && !verify.isObject(test.contexts)) {
            return false;
        }
        if (!verify.isObject(test.dest)) {
            return false;
        }
        if (!verify.isObject(test.gen)) {
            return false;
        }
        return true;
    }
    ArtifactInfo.isArtifactInstance = function(test) {
        throw new Error('Not implemented');
    }
    return ArtifactInfo;
})();


module.exports = {
    ArtifactInfo: ArtifactInfo
};
