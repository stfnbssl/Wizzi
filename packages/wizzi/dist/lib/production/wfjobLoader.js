/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi\.wizzi\ittf\lib\production\wfjobLoader.js.ittf
*/
'use strict';
// generated by v6-wizzi-js.artifacts.js.module.main
function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var verify = require('wizzi-utils').verify;
var path = require('path');
var util = require('util');
var assert = require('assert');
var async = require('async');
var verify = require('wizzi-utils').verify;
//
var WfjobLoader = (function () {
    function WfjobLoader(productionManager) {
        _classCallCheck(this, WfjobLoader);
        this.productionManager = productionManager;
        this.globalModelInfoConfigs = [];
        this.pendingWfjobRequests = [];
        // FIXME checking pendingWfjobRequests should be enough. Why seenWfjobRequests?
        this.seenWfjobRequests = [];
        this.artifactInfoConfigs = [];
    }
    WfjobLoader.prototype.load = function(wfjobRequest, callback) {
        this.seenWfjobRequests.push(wfjobRequest);
        var ittfDocumentUri = verify.isAbsolutePath(wfjobRequest.model.src) ? wfjobRequest.model.src : path.join(wfjobRequest.model.cwd, wfjobRequest.model.src);
        // wfjobRequest.context has not been implemented yet
        // and probably it will never be.
        // Its properties should be produced by previous
        // executions in the wfjob load recursive process.
        // To pass a context to the wfjob mTree loader
        // we use the globalContext of the wizziFactory.
        var that = this;
        this.productionManager.loadWfjob(ittfDocumentUri, wfjobRequest.context || {}, function(err, wfjobModel) {
            if (err) {
                return callback(err);
            }
            that.processWfjobModel(wfjobModel);
            return callback(null, that);
        })
    }
    WfjobLoader.prototype.addGlobalModelInfoConfig = function(globalModelInfoConfig) {
        if (this._isGlobalModelInfoConfigAdded(globalModelInfoConfig) == false) {
            this.globalModelInfoConfigs.push(globalModelInfoConfig);
        }
    }
    WfjobLoader.prototype._isGlobalModelInfoConfigAdded = function(globalModelInfoConfig) {
        var i, i_items=this.globalModelInfoConfigs, i_len=this.globalModelInfoConfigs.length, item;
        for (i=0; i<i_len; i++) {
            item = this.globalModelInfoConfigs[i];
            if (this._areGlobalModelInfoConfigsEqual(item, globalModelInfoConfig)) {
                return true;
            }
        }
        return false;
    }
    WfjobLoader.prototype.addPendingWfjobRequest = function(artifactInfoConfig) {
        if (this._isWfjobSeen(artifactInfoConfig) == false) {
            this.pendingWfjobRequests.push(artifactInfoConfig);
        }
    }
    WfjobLoader.prototype._isWfjobSeen = function(artifactInfoConfig) {
        var i, i_items=this.seenWfjobRequests, i_len=this.seenWfjobRequests.length, item;
        for (i=0; i<i_len; i++) {
            item = this.seenWfjobRequests[i];
            if (this._areWfjobRequestsEqual(item, artifactInfoConfig)) {
                return true;
            }
        }
        return false;
    }
    WfjobLoader.prototype.addArtifactInfoConfig = function(artifactInfoConfig) {
        if (this._isArtifactInfoConfigAdded(artifactInfoConfig) == false) {
            this.artifactInfoConfigs.push(artifactInfoConfig);
        }
    }
    WfjobLoader.prototype._isArtifactInfoConfigAdded = function(artifactInfoConfig) {
        var i, i_items=this.artifactInfoConfigs, i_len=this.artifactInfoConfigs.length, item;
        for (i=0; i<i_len; i++) {
            item = this.artifactInfoConfigs[i];
            if (this._areArtifactInfoConfigsEqual(item, artifactInfoConfig)) {
                return true;
            }
        }
        return false;
    }
    WfjobLoader.prototype._areGlobalModelInfoConfigsEqual = function(a, b) {
        return a.exportName === b.exportName && a.src === b.src;
    }
    WfjobLoader.prototype._areWfjobRequestsEqual = function(a, b) {
        return a.model.cwd === b.model.cwd && a.model.src === b.model.src;
    }
    WfjobLoader.prototype._areArtifactInfoConfigsEqual = function(a, b) {
        return a.model.cwd === b.model.cwd && a.model.src === b.model.src && a.dest.baseFolder === b.dest.baseFolder && a.dest.folder === b.dest.folder && a.dest.path === b.dest.path && a.dest.extension === b.dest.extension && a.gen.generator === b.gen.generator;
    }
    WfjobLoader.prototype.processWfjobModel = function(wfjobModel) {
        //
        var artifactInfoConfig;
        var i, i_items=wfjobModel.models, i_len=wfjobModel.models.length, wfjobModelElement;
        for (i=0; i<i_len; i++) {
            wfjobModelElement = wfjobModel.models[i];
            if (verify.isNotEmpty(wfjobModelElement.exportName)) {
                var globalModelInfoConfig = {
                    exportName: wfjobModelElement.exportName, 
                    src: wfjobModelElement.src, 
                    cwd: wfjobModel.modelsBaseFolder, 
                    schema: wfjobModelElement.schema, 
                    format: wfjobModelElement.format
                };
                this.addGlobalModelInfoConfig(globalModelInfoConfig);
            }
        }
        var i, i_items=wfjobModel.productions, i_len=wfjobModel.productions.length, wfjobProductionElement;
        for (i=0; i<i_len; i++) {
            wfjobProductionElement = wfjobModel.productions[i];
            // log 'wizzi.wfjobLoader.processWfjobModel.production', wfjobProductionElement.wzName, util.inspect(wfjobProductionElement, { depth: 2 })
            var j, j_items=wfjobProductionElement.lines, j_len=wfjobProductionElement.lines.length, wfjobLineElement;
            for (j=0; j<j_len; j++) {
                wfjobLineElement = wfjobProductionElement.lines[j];
                // log 'wizzi.wfjobLoader.processWfjobModel.line', wfjobLineElement.wzName, util.inspect(wfjobLineElement, { depth: null })
                var k, k_items=wfjobLineElement.artifacts, k_len=wfjobLineElement.artifacts.length, wfjobArtifactElement;
                for (k=0; k<k_len; k++) {
                    wfjobArtifactElement = wfjobLineElement.artifacts[k];
                    // log 'wizzi.wfjobLoader.processWfjobModel.artifact', util.inspect(wfjobArtifactElement, { depth: 1 })
                    if (verify.isEmpty(wfjobArtifactElement.src)) {
                        //
                        artifactInfoConfig = {
                            name: wfjobArtifactElement.wzName, 
                            options: {}, 
                            contexts: [], 
                            gen: {
                                generator: wfjobArtifactElement.generator
                            }, 
                            dest: {
                                baseFolder: wfjobModel.destBaseFolder, 
                                folder: wfjobLineElement.destFolder || wfjobProductionElement.destFolder, 
                                path: wfjobArtifactElement.destPath, 
                                extension: wfjobArtifactElement.extension
                            }, 
                            collection: wfjobArtifactElement.collection, 
                            toString: function() {
                                return 'Artifact info config: ' + this.name + '/' + this.gen.generator;
                            }
                        };
                        var l, l_items=wfjobArtifactElement.modelRefs, l_len=wfjobArtifactElement.modelRefs.length, modelRef;
                        for (l=0; l<l_len; l++) {
                            modelRef = wfjobArtifactElement.modelRefs[l];
                            // log 'WizziJob.getArtifactInfoConfigs.modelRef', modelRef.wzName, modelRef.collName, modelRef.modelCollections.length, util.inspect(modelRef, { depth: 2 })
                            var modelInfoConfig = this._createContextModelInfoConfig(wfjobModel, modelRef);
                            artifactInfoConfig.contexts.push(modelInfoConfig);
                        }
                    }
                    else {
                        // This is a WIZZIMODEL artifact or WFJOB artifact
                        artifactInfoConfig = {
                            name: wfjobArtifactElement.wzName, 
                            options: {}, 
                            model: {
                                cwd: wfjobLineElement.cwdFolder, 
                                src: wfjobArtifactElement.src, 
                                ignore: wfjobArtifactElement.ignore, 
                                schema: wfjobArtifactElement.schema, 
                                format: wfjobArtifactElement.format, 
                                isCompile: wfjobArtifactElement.isCompile, 
                                contexts: [], 
                                transformers: this._getTransformerList(wfjobArtifactElement.transformers)
                            }, 
                            isWfJob: wfjobArtifactElement.isWfJob, 
                            isWfModelType: wfjobArtifactElement.isWfModelType, 
                            gen: {
                                generator: wfjobArtifactElement.generator
                            }, 
                            dest: {
                                baseFolder: wfjobModel.destBaseFolder, 
                                folder: wfjobLineElement.destFolder || wfjobProductionElement.destFolder, 
                                path: wfjobArtifactElement.destPath, 
                                extension: wfjobArtifactElement.extension
                            }, 
                            collection: wfjobArtifactElement.collection, 
                            toString: function() {
                                return 'Artifact info config: ' + this.name + '/' + this.model.src + '/' + this.model.schema;
                            }
                        };
                        // log 'WizziJob.getArtifactInfoConfigs.art', wfjobArtifactElement.wzName, wfjobLineElement.srcFolder, wfjobArtifactElement.src, wfjobArtifactElement.schema
                        var l, l_items=wfjobArtifactElement.modelRefs, l_len=wfjobArtifactElement.modelRefs.length, modelRef;
                        for (l=0; l<l_len; l++) {
                            modelRef = wfjobArtifactElement.modelRefs[l];
                            // log 'WizziJob.getArtifactInfoConfigs.modelRef', modelRef.wzName, modelRef.collName, modelRef.modelCollections.length, util.inspect(modelRef, { depth: 2 })
                            var modelInfoConfig = this._createContextModelInfoConfig(wfjobModel, modelRef);
                            artifactInfoConfig.model.contexts.push(modelInfoConfig);
                        }
                    }
                    // log 'WizziJob.artifactInfoConfig', util.inspect(artifactInfoConfig, { depth: 1 })
                    if (wfjobArtifactElement.isWfJob) {
                        this.addPendingWfjobRequest(artifactInfoConfig);
                    }
                    else {
                        this.addArtifactInfoConfig(artifactInfoConfig);
                    }
                }
            }
        }
    }
    //
    WfjobLoader.prototype._createContextModelInfoConfig = function(wfjobModel, wfjobModelRefElement) {
        // model existence has already been verified loading the wfjobModel
        var wfjobModelElement = wfjobModel.getModel(wfjobModelRefElement.wzName);
        var modelInfoConfig = {
            exportName: wfjobModelRefElement.exportName, 
            src: this._getModelSrc(wfjobModel, wfjobModelElement.src, wfjobModelElement), 
            schema: wfjobModelElement.schema, 
            format: wfjobModelElement.format, 
            isCompile: wfjobModelElement.isCompile, 
            contexts: [], 
            transformers: this._getTransformerList(wfjobModelRefElement.transformers), 
            coll: null
        };
        if (wfjobModelRefElement.collName) {
            // Single items of a collection contained in a WizziModelInstance may act as data contexts
            // of artifacts where each collection item generates a separate artifact.
            // The coll property specifies:
            // . name                the collection name
            // . itemName            the export name of the collection item when acting as a data context
            // . pathTemplateValues  the property names of the collection item that will be used to build
            // the destination path of the artifact
            modelInfoConfig.coll = {
                name: wfjobModelRefElement.collName, 
                itemName: wfjobModelRefElement.collItemName, 
                pathTemplateValues: wfjobModelRefElement.collPathTemplateValues
            };
        }
        // recurse creation of context modelInfos
        var i, i_items=wfjobModelElement.modelRefs, i_len=wfjobModelElement.modelRefs.length, modelRef;
        for (i=0; i<i_len; i++) {
            modelRef = wfjobModelElement.modelRefs[i];
            modelInfoConfig.contexts.push(this._createContextModelInfoConfig(wfjobModel, modelRef))
        }
        return modelInfoConfig;
    }
    WfjobLoader.prototype._getArtifactModelSrc = function(cwd, src, node) {
        //
        if (verify.isAbsolutePath(src)) {
            return src;
        }
        else {
            if (verify.isString(cwd)) {
                return path.join(cwd, src);
            }
            else {
                return errorMsg('PathError', "The src attribute of the artifact element: " + src + ' is a relative path. A cwd attribute is required on the line element.', node);
            }
        }
    }
    WfjobLoader.prototype._getModelSrc = function(wfjobModel, src, node) {
        //
        if (verify.isAbsolutePath(src)) {
            return src;
        }
        else {
            if (verify.isString(wfjobModel.modelsBaseFolder)) {
                return path.join(wfjobModel.modelsBaseFolder, src);
            }
            else {
                return errorMsg('PathError', "The src attribute of the model element: " + src + ' is a relative path. A models-base-folder attribute is required on the wfjob element.', node);
            }
        }
    }
    WfjobLoader.prototype._getTransformerList = function(transformers) {
        var ret = [];
        var i, i_items=transformers, i_len=transformers.length, item;
        for (i=0; i<i_len; i++) {
            item = transformers[i];
            ret.push({
                name: item.wzName, 
                dumpFile: item.dumpFile
            })
        }
        return ret;
    }
    return WfjobLoader;
})();

//
function AsyncRecurseWfjobLoad(wfjobRequest, callback) {
    if (typeof(callback) !== 'function') {
        throw new Error(
            error('InvalidArgument', 'AsyncRecurseWfjobLoad', 'The callback parameter must be a function. Received: ' + callback)
        );
    };
    if (verify.isObject(wfjobRequest) === false) {
        return callback(error(
            'InvalidArgument', 'AsyncRecurseWfjobLoad', { parameter: 'wfjobRequest', message: 'The wfjobRequest parameter must be an object. Received: ' + wfjobRequest }
        ));
    }
    if (verify.isObject(wfjobRequest.wfjobLoader) === false) {
        return callback(error(
            'InvalidArgument', 'AsyncRecurseWfjobLoad', { parameter: 'wfjobRequest.wfjobLoader', message: 'The wfjobRequest.wfjobLoader parameter must be an object. Received: ' + wfjobRequest.wfjobLoader }
        ));
    }
    console.log('=');
    console.log('= ========= wizzi.AsyncRecurseWfjobLoad. Start. wfjobRequest.model : ', wfjobRequest.model);
    console.log('=');
    var wfjobLoader = wfjobRequest.wfjobLoader;
    wfjobLoader.load(wfjobRequest, function(err, result) {
        if (err) {
            return callback(err);
        }
        console.log('=');
        console.log('= ========= wizzi.AsyncRecurseWfjobLoad. Results. ', 'seenWfjobRequests: ', result.seenWfjobRequests.length, ', globalModelInfoConfigs: ', result.globalModelInfoConfigs.length, ', artifactInfoConfigs: ', result.artifactInfoConfigs.length, ', pendingWfjobRequests: ', result.pendingWfjobRequests);
        console.log('=');
        if (result.pendingWfjobRequests.length > 0) {
            var jobRequests = result.pendingWfjobRequests;
            result.pendingWfjobRequests = [];
            // set the same wfjobLoader for any jobRequest
            var i, i_items=jobRequests, i_len=jobRequests.length, item;
            for (i=0; i<i_len; i++) {
                item = jobRequests[i];
                item.wfjobLoader = wfjobLoader;
            }
            // recurse
            async.map(jobRequests, AsyncRecurseWfjobLoad, function(err, result) {
                if (err) {
                    return callback(err);
                }
                return callback(null, wfjobLoader);
            })
        }
        else {
            return callback(null, wfjobLoader);
        }
    })
}
function errorMsg(code, message, node) {
    message = node ? new errors.NodeError(message, node).toString() : message;
    return {
            __is_error: true, 
            code: code, 
            message: message
        };
}

module.exports = {
    WfjobLoader: WfjobLoader,
    AsyncRecurseWfjobLoad: AsyncRecurseWfjobLoad
};
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
    var parameter = null;
    if (verify.isObject(message)) {
        parameter = message.parameter;
        message = message.message;
    }
    return verify.error(innerError, {
        name: ( verify.isNumber(code) ? 'Err-' + code : code ),
        method: '.' + method,
        parameter: parameter,
        sourcePath: __filename
    }, message || 'Error message unavailable');
}
