/*
    artifact generator: C:\my\wizzi\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\my\wizzi\wizzi\packages\wizzi-mtree\.wizzi\ittf\lib\loader\mTreeBrickProvider.js.ittf
*/
'use strict';
// generated by v6-wizzi-js.artifacts.js.module.main
function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var verify = require('wizzi-utils').verify;
var path = require('path');
var url = require('url');

var errors = require('../errors');
var LoadHistory = require('./loadHistory').LoadHistory;
var MTreeBrick = require('./mTreeBrick').MTreeBrick;
var IttfDocumentFinder = require('./ittfDocumentFinder');
/**
     Each mTree loading requires one instance of the MTreeBrickProvider.
     TODO To date there is no global cache for mTrees, but only a cache of
     mTreeBricks used during a single loading.
*/
var MTreeBrickProvider = (function () {
    function MTreeBrickProvider() {
        _classCallCheck(this, MTreeBrickProvider);
        this.__type = 'MTreeBrickProvider';
        this.bricksCache = {};
        this.store = null;
        this.storeKind = null;
        this.uri = null;
        this.schema = null;
        this.userId = null;
        this.documentFinder = null;
        this.primaryMTreeBrickCloned = null;
        this.loadHistory = null;
        this.frontMatter = null;
        this.productionContext = null;
        this.mTreeBuildUpContext = null;
        this.sourcePreprocessor = null;
    }
    // The primary mTreeBrick of an mTree loading
    MTreeBrickProvider.prototype.getPrimaryMTreeBrick = function() {
        return this.primaryMTreeBrickCloned;
    }
    // The starting point of an mTree loading
    // Creates the mTree loadHistory
    // Load the primary mTreeBrick from the primary IttfDocument
    MTreeBrickProvider.prototype.init = function(primaryIttfDocumentUri, loadContext, callback) {
        if (typeof(callback) !== 'function') {
            throw new Error(
                error('InvalidArgument', 'init', 'The callback parameter must be a function. Received: ' + callback)
            );
        };
        if (verify.isNotEmpty(primaryIttfDocumentUri) === false) {
            return callback(error(
                'InvalidArgument', 'init', { parameter: 'primaryIttfDocumentUri', message: 'The primaryIttfDocumentUri parameter must be a string. Received: ' + primaryIttfDocumentUri }
            ));
        }
        if (verify.isObject(loadContext) === false) {
            return callback(error(
                'InvalidArgument', 'init', { parameter: 'loadContext', message: 'The loadContext parameter must be an object. Received: ' + loadContext }
            ));
        }
        if (verify.isObject(loadContext.__ittfDocumentStore) === false) {
            return callback(error(
                'InvalidArgument', 'init', { parameter: 'loadContext.__ittfDocumentStore', message: 'The loadContext.__ittfDocumentStore parameter must be an object. Received: ' + loadContext.__ittfDocumentStore }
            ));
        }
        if (verify.isObject(loadContext.productionContext) === false) {
            return callback(error(
                'InvalidArgument', 'init', { parameter: 'loadContext.productionContext', message: 'The loadContext.productionContext parameter must be an object. Received: ' + loadContext.productionContext }
            ));
        }
        if (verify.isObject(loadContext.mTreeBuildUpContext) === false) {
            return callback(error(
                'InvalidArgument', 'init', { parameter: 'loadContext.mTreeBuildUpContext', message: 'The loadContext.mTreeBuildUpContext parameter must be an object. Received: ' + loadContext.mTreeBuildUpContext }
            ));
        }
        if (verify.isNullOrUndefined(loadContext.sourcePreprocessor) === false) {
            if (verify.isFunction(loadContext.sourcePreprocessor) === false) {
                return callback(error(
                    'InvalidArgument', 'init', { parameter: 'loadContext.sourcePreprocessor', message: 'The loadContext.sourcePreprocessor parameter must be a function. Received: ' + loadContext.sourcePreprocessor }
                ));
            }
        }
        this.store = loadContext.__ittfDocumentStore;
        var that = this;
        // parse the primary IttfDocument Uri and collect
        // infos from the uri
        this.store.parseUri(primaryIttfDocumentUri, function(err, parsedUri) {
            if (err) {
                return callback(err);
            }
            that.storeKind = parsedUri.storeKind;
            that.uri = parsedUri.uri || parsedUri.originalUri;
            that.userId = parsedUri.userId;
            that.projectId = parsedUri.projectId;
            that.schema = parsedUri.schema;
            // load the document text content
            that.store.getModelContent(that.uri, function(err, ittfContent) {
                if (err) {
                    err.documentUri = that.uri;
                    return callback(err);
                }
                // init helper objects
                if (!ittfContent || ittfContent.trim().length == 0) {
                    // TODO document this
                    return callback(new errors.IttfLoadError("Empty document", that.uri));
                }
                that.documentFinder = new IttfDocumentFinder(that.store, that.schema);
                that.loadHistory = new LoadHistory();
                that.frontMatter = {};
                that.productionContext = loadContext.productionContext;
                that.mTreeBuildUpContext = loadContext.mTreeBuildUpContext;
                that.sourcePreprocessor = loadContext.sourcePreprocessor;
                // load the primary mTreeBrick from the ittf content
                that.loadMTreeBrickFromSource(that.uri, {}, ittfContent, function(err, primaryMTreeBrickCloned) {
                    if (err) {
                        return callback(err);
                    }
                    // save the cloned primary mTreeBrick on the mTreeBrickProvider instance
                    that.primaryMTreeBrickCloned = primaryMTreeBrickCloned;
                    // callbacks returning the mTreeBrickProvider instance
                    callback(null, that);
                });
            });
        });
    }
    /**
         Clones, or loads from source, an included or mixed ittf document
         params
         { options
         string ittfDocumentUri
         boolean include
         // If true the mTreeBrick loaded from the IttfDocument will be included in the includer mTreeBrick
         // and its scope will become that of the includer (its brickKey will be that of the includer).
         // A $include command must not have any argument.
         // An included ittf document must not have params (must not have the $params command).
         string basedir
         string relpath
         string from
         string includerBrickKey
         { includerMTreeBrick
         api-ref wizzi-mtree.mTreeBrick
        
        
         called from
         ./mtree.load
         ./includer
         ./mixer
        
    */
    MTreeBrickProvider.prototype.get = function(options, callback) {
        if (typeof(callback) !== 'function') {
            throw new Error(
                error('InvalidArgument', 'get', 'The callback parameter must be a function. Received: ' + callback)
            );
        };
        if (verify.isObject(options) === false) {
            return callback(error(
                'InvalidArgument', 'get', { parameter: 'options', message: 'The options parameter must be an object. Received: ' + options }
            ));
        }
        var loadHistory = this.loadHistory;
        var productionContext = this.productionContext;
        var that = this;
        this.documentFinder.resolvePath(options, function(err, uri) {
            if (err) {
                return callback(err);
            }
            var mTreeBrickCloned = null;
            // check cache
            var cachedMTreeBrick = that.bricksCache[uri];
            if (cachedMTreeBrick) {
                // found in cache, clone it
                mTreeBrickCloned = cachedMTreeBrick.clone();
                // this is not superflous
                // the productionContext counts the cached used
                productionContext.addIttfDocument(uri, cachedMTreeBrick.inputContent);
                // adding the mTreeBrickCloned to the loadHistory
                // generates the sourceKey and brickKey
                var mTreeBrickData = loadHistory.addMTreeBrick(uri, that.schema, mTreeBrickCloned, options);
                mTreeBrickCloned.sourceKey = mTreeBrickData.sourceKey;
                mTreeBrickCloned.brickKey = mTreeBrickData.brickKey;
                mTreeBrickCloned.$schema = that.schema;
                return callback(null, mTreeBrickCloned);
            }
            else {
                // not found in cache, check if it is a documentFragment
                if (uri.substr(-11, 11) === '__$fragment') {
                    return that.loadMTreeBrickFromDocumentFragment(uri, options, callback);
                }
                // not found in cache, get the content from the store
                // than load the mTreeBrick from source
                that.store.getModelContent(uri, function(err, ittfContent) {
                    if (err) {
                        return callback(err);
                    }
                    if (!ittfContent || ittfContent.trim().length == 0) {
                        // TODO document this
                        return callback(new errors.IttfLoadError("Empty document", uri));
                    }
                    else {
                        that.loadMTreeBrickFromSource(uri, options, ittfContent, callback);
                    }
                });
            }
        });
    }
    MTreeBrickProvider.prototype.loadMTreeBrickFromSource = function(uri, options, ittfContent, callback) {
        this.productionContext.addIttfDocument(uri, ittfContent);
        this.loadHistory.addIttfDocument(uri, ittfContent);
        if (this.sourcePreprocessor) {
            // TODO save the preprocessed in productionContext and loadHistory
            // or save the sourcePreprocessor function
            ittfContent = this.sourcePreprocessor(ittfContent);
        }
        // Creates the mTreeBrickData object passing
        // null in the mTreeBrick parameter
        // it will be added later if the parameter
        // options.include is false.
        // This because if the mTreeBrick
        // is included it does not have its own evalContext, its nodes become part
        // of the includer, and a cloned mTreeBrick is not needed.
        var mTreeBrickData = this.loadHistory.addMTreeBrick(uri, this.schema, null, options);
        var newMTreeBrick = new MTreeBrick(uri, this.loadHistory, this.frontMatter);
        // parses the ittf document content and loads the mTreeBrick
        // frome the ittf node tree.
        var notUsed = newMTreeBrick.load(ittfContent, mTreeBrickData);
        if (notUsed && notUsed.__is_error) {
            console.log('__is_error ', notUsed);
            return callback(notUsed);
        }
        // caches the newMTreeBrick
        this.bricksCache[uri] = newMTreeBrick;
        // clone it
        var mTreeBrickCloned = newMTreeBrick.clone();
        // set keys
        mTreeBrickCloned.sourceKey = mTreeBrickData.sourceKey;
        mTreeBrickCloned.brickKey = mTreeBrickData.brickKey;
        mTreeBrickCloned.$schema = this.schema;
        
        if (!(options.include)) {
            mTreeBrickData.mTreeBrick = mTreeBrickCloned;
        }
        
        return callback(null, mTreeBrickCloned);
    }
    MTreeBrickProvider.prototype.loadMTreeBrickFromDocumentFragment = function(uri, options, callback) {
        var parentMtreeBrick = options.includerMTreeBrick;
        var newMTreeBrick = new MTreeBrick(uri, this.loadHistory, this.frontMatter);
        // load it
        var i, i_items=options.includerMTreeBrick.documentFragments, i_len=options.includerMTreeBrick.documentFragments.length, item;
        for (i=0; i<i_len; i++) {
            item = options.includerMTreeBrick.documentFragments[i];
            if (item.value === options.relpath) {
                newMTreeBrick.nodes = [item];
                if (!(options.include)) {
                    newMTreeBrick.$params = item.$params;
                }
            }
        }
        // caches the newMTreeBrick
        this.bricksCache[uri] = newMTreeBrick;
        var mTreeBrickData = options.include ? null : this.loadHistory.addMTreeBrick(uri, this.schema, null, options);
        // clone it
        var mTreeBrickCloned = newMTreeBrick.clone();
        mTreeBrickCloned.nodes[0].name = '$group';
        mTreeBrickCloned.nodes[0].value = '';
        // set keys
        if (!(options.include)) {
            mTreeBrickCloned.sourceKey = mTreeBrickData.sourceKey;
            mTreeBrickCloned.brickKey = mTreeBrickData.brickKey;
            mTreeBrickCloned.$schema = parentMtreeBrick.$schema;
            mTreeBrickData.mTreeBrick = mTreeBrickCloned;
        }
        else {
            mTreeBrickCloned.sourceKey = parentMtreeBrick.sourceKey;
            mTreeBrickCloned.brickKey = parentMtreeBrick.brickKey;
            mTreeBrickCloned.$schema = parentMtreeBrick.$schema;
        }
        return callback(null, mTreeBrickCloned);
    }
    MTreeBrickProvider.prototype.enterFragmentCall = function(mixerUri, mixedUri) {
        this.loadHistory.enterFragmentCall(mixerUri, mixedUri);
    }
    MTreeBrickProvider.prototype.exitFragmentCall = function() {
        this.loadHistory.exitFragmentCall();
    }
    MTreeBrickProvider.prototype.checkForRecursion = function() {
        return this.loadHistory.checkForRecursion();
    }
    return MTreeBrickProvider;
})();

/**
     Creates an MTreeBrickProvider for loading
     an IttfDocucument
*/
MTreeBrickProvider.createFromUri = function(primaryIttfDocumentUri, loadContext, callback) {
    if (typeof(callback) !== 'function') {
        throw new Error(
            error('InvalidArgument', '', 'The callback parameter must be a function. Received: ' + callback)
        );
    };
    if (verify.isNotEmpty(primaryIttfDocumentUri) === false) {
        return callback(error(
            'InvalidArgument', '', { parameter: 'primaryIttfDocumentUri', message: 'The primaryIttfDocumentUri parameter must be a string. Received: ' + primaryIttfDocumentUri }
        ));
    }
    if (verify.isObject(loadContext) === false) {
        return callback(error(
            'InvalidArgument', '', { parameter: 'loadContext', message: 'The loadContext parameter must be an object. Received: ' + loadContext }
        ));
    }
    var provider = new MTreeBrickProvider();
    try {
        provider.init(primaryIttfDocumentUri, loadContext, function(err, notUsed) {
            if (err) {
                return callback(err);
            }
            callback(null, provider);
        });
    } 
    catch (ex) {
        ex.message += '\n creating from uri: ' + primaryIttfDocumentUri;
        throw ex;
    } 
};
module.exports = MTreeBrickProvider;
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
        method: 'wizzi-mtree.loader.mTreeBrickProvider.' + method,
        parameter: parameter,
        sourcePath: __filename
    }, message || 'Error message unavailable');
}
