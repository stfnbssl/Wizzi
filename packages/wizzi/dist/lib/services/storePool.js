/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi\.wizzi\ittf\lib\services\storePool.js.ittf
*/
'use strict';
// generated by v6-wizzi-js.artifacts.js.module.main
function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var verify = require('wizzi-utils').verify;
var repo = require('wizzi-repo');
var StorePool = (function () {
    function StorePool(wizziFactory) {
        _classCallCheck(this, StorePool);
        if (verify.isObject(wizziFactory) === false) {
            throw new Error(error(
                'InvalidArgument', 'ctor', { parameter: 'wizziFactory', message: 'The wizziFactory parameter must be an object. Received: ' + wizziFactory }
            ));
        }
        this.wizziFactory = wizziFactory;
        this.stores = [];
    }
    StorePool.prototype.initialize = function(repoOptions, callback) {
        if (typeof(callback) !== 'function') {
            throw new Error(
                error('InvalidArgument', 'initialize', 'The callback parameter must be a function. Received: ' + callback)
            );
        };
        if (verify.isObject(repoOptions) === false) {
            return callback(error(
                'InvalidArgument', 'initialize', { parameter: 'repoOptions', message: 'The repoOptions parameter must be an object. Received: ' + repoOptions }
            ));
        }
        
        this.repoOptions = repoOptions;
        this.storeKind = repoOptions.storeKind || 'filesystem';
        
        if (this.storeKind === 'json' && !repoOptions.storeFsJson && repoOptions.storeJsonFsData) {
            this._initializeFsJson((err, notUsed) => {
                if (err) {
                    return callback(err);
                }
                this.initialize_next_1(callback);
            });
        }
        else {
            this.initialize_next_1(callback);
        }
        
    }
    StorePool.prototype._initializeFsJson = function(callback) {
        if (typeof(callback) !== 'function') {
            throw new Error(
                error('InvalidArgument', '_initializeFsJson', 'The callback parameter must be a function. Received: ' + callback)
            );
        };
        var JsonComponents = repo.JsonComponents;
        JsonComponents.createFsJsonByJsonFsData(this.repoOptions.jsonFsData, (err, fsJson) => {
            if (err) {
                return callback(err);
            }
            this.repoOptions.storeFsJson = fsJson;
            return callback(null);
        });
    }
    StorePool.prototype.initialize_next_1 = function(callback) {
        if (typeof(callback) !== 'function') {
            throw new Error(
                error('InvalidArgument', 'initialize_next_1', 'The callback parameter must be a function. Received: ' + callback)
            );
        };
        this._initializeFileService((err, notUsed) => {
            if (err) {
                return callback(err);
            }
            this._initializeStoreService((err, notUsed) => {
                if (err) {
                    return callback(err);
                }
                return callback(null, {
                        fileService: this.fileService, 
                        createStore: this.getCreateStore_hof()
                    });
            });
        });
    }
    StorePool.prototype._initializeFileService = function(callback) {
        if (typeof(callback) !== 'function') {
            throw new Error(
                error('InvalidArgument', '_initializeFileService', 'The callback parameter must be a function. Received: ' + callback)
            );
        };
        var repoOptions = this.repoOptions;
        var that = this;
        if (this.storeKind === 'filesystem') {
            repo.fsfile(function(err, file) {
                if (err) {
                    return callback(err);
                }
                that.fileService = file;
                return callback(null, null);
            });
        }
        else if (this.storeKind === 'mongodb') {
            repo.dbfile({
                mongoUri: repoOptions.storeUri, 
                mongodbBaseFolder: repoOptions.storeBaseFolder
            }, function(err, file) {
                if (err) {
                    return callback(err);
                }
                that.fileService = file;
                return callback(null, null);
            });
        }
        else if (this.storeKind === 'json') {
            // log 'repoOptions', repoOptions
            repo.jsonfile({
                fsJson: this.repoOptions.storeFsJson
            }, function(err, file) {
                if (err) {
                    return callback(err);
                }
                that.fileService = file;
                return callback(null, null);
            });
        }
        else if (this.storeKind === 'browser') {
            // log 'repoOptions', repoOptions
            repo.browserfile(function(err, file) {
                if (err) {
                    return callback(err);
                }
                that.fileService = file;
                return callback(null, null);
            });
        }
        else {
            return callback(error('NotImplemented', '_initializeFileService', 'Store kind not implemented yet : ' + this.storeKind));
        }
    }
    StorePool.prototype._initializeStoreService = function(callback) {
        var repoOptions = this.repoOptions;
        
        var that = this;
        
        repo.createStoreFactory(repoOptions, function(err, storeFactory) {
            if (err) {
                return callback(err);
            }
            that.storeFactory = storeFactory;
            return callback(null, null);
        });
    }
    StorePool.prototype.add = function(store) {
        if (verify.isObject(store) === false) {
            return error(
                'InvalidArgument', 'add', { parameter: 'store', message: 'The store parameter must be an object. Received: ' + store }
            );
        }
        this.stores.push(store);
    }
    StorePool.prototype.get = function(callback) {
        if (typeof(callback) !== 'function') {
            throw new Error(
                error('InvalidArgument', 'get', 'The callback parameter must be a function. Received: ' + callback)
            );
        };
        if (this.stores.length > 0) {
            return callback(null, this.stores[0]);
        }
        else {
            var that = this;
            this.storeFactory(function(err, store) {
                if (err) {
                    return callback(err);
                }
                that.add(store);
                return callback(null, store);
            });
        }
    }
    StorePool.prototype.getCreateStore_hof = function() {
        var pool = this;
        return function createStore(callback) {
                pool.get(function(err, store) {
                    if (err) {
                        return callback(err);
                    }
                    return callback(null, store);
                });
            };
    }
    StorePool.prototype.close = function() {
        if (this.fileService && this.fileService.close) {
            this.fileService.close();
        }
        var i, i_items=this.stores, i_len=this.stores.length, store;
        for (i=0; i<i_len; i++) {
            store = this.stores[i];
            if (store.close) {
                store.close();
            }
        }
    }
    return StorePool;
})();

module.exports = StorePool;
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
        method: 'wizzi.storePool.' + method,
        parameter: parameter,
        sourcePath: __filename
    }, message || 'Error message unavailable');
}
