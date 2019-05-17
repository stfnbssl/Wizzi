/*
    artifact generator: C:\My\wizzi\wizzi-mono\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-mono\packages\wizzi-repo\.wizzi\ittf\lib\repo\ittfDocumentStore.js.ittf
*/
'use strict';
// generated by v6-wizzi-js.artifacts.js.module.main
function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var verify = require('wizzi-utils').verify;
var util = require('util');
var errors = require('./errors');
// var uriParser = require('./uriParser')
var uriParser = require('wizzi-utils').uriParser;
var FileSystemStore = require('./fileSystemStore');
var MongoDbStore = {};
var BrowserFSStore = {};
var JsonDbStore = require('./jsonDbStore');
/**
    
    
*/
var IttfDocumentStore = (function () {
    function IttfDocumentStore() {
        _classCallCheck(this, IttfDocumentStore);
    }
    IttfDocumentStore.prototype.parseUri = function(ittfDocumentUri, callback) {
        if (typeof(callback) !== 'function') {
            throw new Error(
                error('InvalidArgument', 'parseUri', 'The callback parameter must be a function. Received: ' + callback)
            );
        };
        if (verify.isNotEmpty(ittfDocumentUri) === false) {
            return callback(error(
                'InvalidArgument', 'parseUri', { parameter: 'ittfDocumentUri', message: 'The ittfDocumentUri parameter must be a string. Received: ' + ittfDocumentUri }
            ));
        }
        uriParser(ittfDocumentUri, callback);
    }
    /**
         params
         { storeInfo
         string storeKind
         oneOf filesystem, mongodb, json, browser
         string storeUri
         # when storeKind === 'mongodb'
         string storeBaseFolder
         # when storeKind === 'mongodb'
         string storeJsonFsData
         # when storeKind === 'json'
    */
    IttfDocumentStore.prototype.init = function(storeInfo, callback) {
        if (typeof(callback) !== 'function') {
            throw new Error(
                error('InvalidArgument', 'init', 'The callback parameter must be a function. Received: ' + callback)
            );
        };
        if (verify.isObject(storeInfo) === false) {
            return callback(error(
                'InvalidArgument', 'init', { parameter: 'storeInfo', message: 'The storeInfo parameter must be an object. Received: ' + storeInfo }
            ));
        }
        if (verify.isNotEmpty(storeInfo.storeKind) === false) {
            return callback(error(
                'InvalidArgument', 'init', { parameter: 'storeInfo.storeKind', message: 'The storeInfo.storeKind parameter must be a string. Received: ' + storeInfo.storeKind }
            ));
        }
        if (storeInfo.storeKind === 'filesystem') {
            this.storeImpl = new FileSystemStore();
            this.storeKind = this.storeImpl.storeKind;
            return callback(null);
        }
        else if (storeInfo.storeKind === 'json') {
            // log 'storeInfo', storeInfo
            this.storeImpl = new JsonDbStore();
            var that = this;
            this.storeImpl.init({
                jsonFsData: storeInfo.storeJsonFsData, 
                fsJson: storeInfo.storeFsJson
            }, function(err, notUsed) {
                if (err) {
                    return callback(err);
                }
                that.storeKind = that.storeImpl.storeKind;
                return callback(null);
            });
        }
        else {
            return callback(error('InvalidArgument', 'init', {
                    parameter: 'storeKind', 
                    message: "Unknown storeKind: " + storeInfo.storeKind
                }));
        }
    }
    IttfDocumentStore.prototype.initSync = function(storeInfo) {
        if (verify.isObject(storeInfo) === false) {
            return error(
                'InvalidArgument', 'initSync', { parameter: 'storeInfo', message: 'The storeInfo parameter must be an object. Received: ' + storeInfo }
            );
        }
        if (verify.isNotEmpty(storeInfo.storeKind) === false) {
            return error(
                'InvalidArgument', 'initSync', { parameter: 'storeInfo.storeKind', message: 'The storeInfo.storeKind parameter must be a string. Received: ' + storeInfo.storeKind }
            );
        }
        if (storeInfo.storeKind === 'filesystem') {
            this.storeImpl = new FileSystemStore();
        }
        else {
            return callback(error('InvalidArgument', 'initSync', {
                    parameter: 'storeInfo.storeKind', 
                    message: 'Method "initSync" is for storeKind "filesystem" only. ' + 'Received: ' + storeInfo.storeKind
                }));
        }
        this.storeKind = this.storeImpl.storeKind;
    }
    IttfDocumentStore.prototype.close = function() {
        if (this.storeImpl && this.storeImpl.close) {
            this.storeImpl.close();
        }
    }
    IttfDocumentStore.prototype.documentExists = function(documentUri, callback) {
        if (typeof(callback) !== 'function') {
            throw new Error(
                error('InvalidArgument', 'documentExists', 'The callback parameter must be a function. Received: ' + callback)
            );
        };
        if (verify.isNotEmpty(documentUri) === false) {
            return callback(error(
                'InvalidArgument', 'documentExists', { parameter: 'documentUri', message: 'The documentUri parameter must be a string. Received: ' + documentUri }
            ));
        }
        this.storeImpl.documentExists(documentUri, callback);
    }
    IttfDocumentStore.prototype.getModelContent = function(documentUri, callback) {
        if (typeof(callback) !== 'function') {
            throw new Error(
                error('InvalidArgument', 'getModelContent', 'The callback parameter must be a function. Received: ' + callback)
            );
        };
        if (verify.isNotEmpty(documentUri) === false) {
            return callback(error(
                'InvalidArgument', 'getModelContent', { parameter: 'documentUri', message: 'The documentUri parameter must be a string. Received: ' + documentUri }
            ));
        }
        this.storeImpl.getModelContent(documentUri, callback);
    }
    IttfDocumentStore.prototype.folderExistsSync = function(folderUri) {
        if (verify.isNotEmpty(folderUri) === false) {
            return error(
                'InvalidArgument', 'folderExistsSync', { parameter: 'folderUri', message: 'The folderUri parameter must be a string. Received: ' + folderUri }
            );
        }
        if (this.storeKind !== 'filesystem') {
            return callback(error('InvalidRequest', 'folderExistsSync', 'Method "folderExistsSync" is for storeKind "filesystem" only. ' + 'Current storeKind is: ' + this.storeKind));
        }
        return this.storeImpl.folderExists(folderUri);
    }
    IttfDocumentStore.prototype.getFoldersSync = function(parentFolderUri, options) {
        if (verify.isNotEmpty(parentFolderUri) === false) {
            return error(
                'InvalidArgument', 'getFoldersSync', { parameter: 'parentFolderUri', message: 'The parentFolderUri parameter must be a string. Received: ' + parentFolderUri }
            );
        }
        if (verify.isObject(options) === false) {
            return error(
                'InvalidArgument', 'getFoldersSync', { parameter: 'options', message: 'The options parameter must be an object. Received: ' + options }
            );
        }
        if (this.storeKind !== 'filesystem') {
            return callback(error('InvalidRequest', 'getFoldersSync', 'Method "getFoldersSync" is for storeKind "filesystem" only. ' + 'Current storeKind is: ' + this.storeKind));
        }
        return this.storeImpl.getFoldersSync(parentFolderUri, options);
    }
    IttfDocumentStore.createFileSystemDocumentStore = function() {
        var ret = new IttfDocumentStore();
        ret.initSync({
            storeKind: "filesystem"
        });
        return ret;
    }
    IttfDocumentStore.prototype.getInfo = function() {
        if (this.storeImpl.getInfo) {
            return this.storeImpl.getInfo();
        }
        else {
            return {
                    storeKind: this.storeKind
                };
        }
    }
    return IttfDocumentStore;
})();

module.exports = IttfDocumentStore;
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
        method: 'wizzi-repo.ittfDocumentStore.' + method,
        parameter: parameter,
        sourcePath: __filename
    }, message || 'Error message unavailable');
}
