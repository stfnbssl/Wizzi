/*
    artifact generator: C:\My\wizzi\wizzi-mono\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-mono\packages\wizzi-repo\.wizzi\ittf\lib\mongodb\mongoFsimpl.js.ittf
*/
'use strict';
// generated by v6-wizzi-js.artifacts.js.module.main
function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var verify = require('wizzi-utils').verify;
/**
     Implements the `fsimpl` interface for a mongodb backed file system.
*/
var MongoClient = require('mongodb').MongoClient
,
    FsMongo = require('./fs/fsmongo'),
    Document = require('./fs/document'),
    mongoUriParser = require('./mongoUriParser');
var MongoFsImpl = (function () {
    function MongoFsImpl(mongoUri, mongodbBaseFolder) {
        _classCallCheck(this, MongoFsImpl);
        if (verify.isNotEmpty(mongodbBaseFolder) === false) {
            throw new Error(error(
                'InvalidArgument', 'ctor', { parameter: 'mongodbBaseFolder', message: 'The mongodbBaseFolder parameter must be a string. Received: ' + mongodbBaseFolder }
            ));
        }
        this.mongoUri = mongoUri || 'mongodb://localhost:27017/test';
        this.mongodbBaseFolder = mongodbBaseFolder;
        this.mongoDb = null;
        this.connecting = false;
    }
    MongoFsImpl.prototype.db = function(callback) {
        if (typeof(callback) !== 'function') {
            throw new Error(
                error('InvalidArgument', 'db', 'The callback parameter must be a function. Received: ' + callback)
            );
        };
        if (this.mongoDb == null) {
            return callback(error('InvalidOperation', 'db', 'Connection not opened. The method `open` must be called before calling `db`.'));
        }
        else {
            return callback(null, this.mongoDb);
        }
    }
    MongoFsImpl.prototype.open = function(callback) {
        if (typeof(callback) !== 'function') {
            throw new Error(
                error('InvalidArgument', 'open', 'The callback parameter must be a function. Received: ' + callback)
            );
        };
        var that = this;
        if (this.mongoDb) {
            return callback(null, this.mongoDb);
        }
        MongoClient.connect(this.mongoUri, function(err, db) {
            if (err) {
                return callback(err);
            }
            that.mounted_db = db;
            var fsmongo = new FsMongo(db);
            that.mongoDb = new Document(fsmongo);
            // log '***** mongodb connected'
            return callback(null, that.mongoDb);
        });
    }
    MongoFsImpl.prototype.close = function() {
        if (this.mounted_db) {
            // log '***** mongodb start closing'
            this.mounted_db.close();
            this.mounted_db = null;
            this.mongoDb = null;
            // log '***** mongodb closed'
        }
    }
    MongoFsImpl.prototype.stat = function(documentUri, callback) {
        // log 'wizzi-repo.mongodb.mongoFsImpl.stat.documentUri', documentUri
        if (verify.isFunction(callback) === false) {
            throw new Error(error('InvalidArgument', 'stat', 'The callback parameter must be a function. Received: ' + callback));
        }
        if (verify.isNotEmpty(documentUri) === false) {
            return callback(error('InvalidArgument', 'stat', {
                    parameter: 'documentUri', 
                    message: 'The documentUri parameter must be a string. Received: ' + documentUri
                }));
        }
        var parsedUri = mongoUriParser(documentUri, this.mongodbBaseFolder);
        if (parsedUri && parsedUri.__is_error) {
            console.log('__is_error ', parsedUri);
            return callback(parsedUri);
        }
        var that = this;
        this.db(function(err, mongoDb) {
            if (err) {
                return callback(err);
            }
            mongoDb.stat(parsedUri.internalPath, function(err, result) {
                if (err) {
                    return callback(err);
                }
                callback(null, result);
            });
        });
    }
    MongoFsImpl.prototype.lstat = function(documentUri, callback) {
        // log 'wizzi-repo.mongodb.mongoFsImpl.lstat.documentUri', documentUri
        if (verify.isFunction(callback) === false) {
            throw new Error(error('InvalidArgument', 'lstat', 'The callback parameter must be a function. Received: ' + callback));
        }
        if (verify.isNotEmpty(documentUri) === false) {
            return callback(error('InvalidArgument', 'lstat', {
                    parameter: 'documentUri', 
                    message: 'The documentUri parameter must be a string. Received: ' + documentUri
                }));
        }
        var parsedUri = mongoUriParser(documentUri, this.mongodbBaseFolder);
        if (parsedUri && parsedUri.__is_error) {
            console.log('__is_error ', parsedUri);
            return callback(parsedUri);
        }
        var that = this;
        this.db(function(err, mongoDb) {
            if (err) {
                return callback(err);
            }
            mongoDb.stat(parsedUri.internalPath, function(err, result) {
                if (err) {
                    return callback(err);
                }
                callback(null, result);
            });
        });
    }
    MongoFsImpl.prototype.readFile = function(documentUri, options, callback) {
        // log 'wizzi-repo.mongodb.mongoFsImpl.readFile.documentUri', documentUri
        if (typeof(callback) === 'undefined' && verify.isFunction(options)) {
            callback = options;
            options = {};
        }
        if (verify.isFunction(callback) === false) {
            throw new Error(error('InvalidArgument', 'readFile', 'The callback parameter must be a function. Received: ' + callback));
        }
        if (verify.isNotEmpty(documentUri) === false) {
            return callback(error('InvalidArgument', 'readFile', {
                    parameter: 'documentUri', 
                    message: 'The documentUri parameter must be a string. Received: ' + documentUri
                }));
        }
        var parsedUri = mongoUriParser(documentUri, this.mongodbBaseFolder);
        if (parsedUri && parsedUri.__is_error) {
            console.log('__is_error ', parsedUri);
            return callback(parsedUri);
        }
        var that = this;
        this.db(function(err, mongoDb) {
            if (err) {
                return callback(err);
            }
            mongoDb.readFile(parsedUri.internalPath, function(err, result) {
                if (err) {
                    return callback(err);
                }
                callback(null, result);
            });
        });
    }
    MongoFsImpl.prototype.writeFile = function(documentUri, content, options, callback) {
        // log 'wizzi-repo.mongodb.mongoFsImpl.writeFile.documentUri', documentUri
        if (typeof(callback) === 'undefined' && verify.isFunction(options)) {
            callback = options;
            options = {};
        }
        if (verify.isFunction(callback) === false) {
            throw new Error(error('InvalidArgument', 'writeFile', 'The callback parameter must be a function. Received: ' + callback));
        }
        if (verify.isNotEmpty(documentUri) === false) {
            return callback(error('InvalidArgument', 'writeFile', {
                    parameter: 'documentUri', 
                    message: 'The documentUri parameter must be a string. Received: ' + documentUri
                }));
        }
        var parsedUri = mongoUriParser(documentUri, this.mongodbBaseFolder);
        if (parsedUri && parsedUri.__is_error) {
            console.log('__is_error ', parsedUri);
            return callback(parsedUri);
        }
        var that = this;
        this.db(function(err, mongoDb) {
            if (err) {
                return callback(err);
            }
            mongoDb.writeFile(parsedUri.internalPath, content, function(err, result) {
                if (err) {
                    return callback(err);
                }
                callback(null, result);
            });
        });
    }
    MongoFsImpl.prototype.readdir = function(documentUri, options, callback) {
        // log 'wizzi-repo.mongodb.mongoFsImpl.readdir.documentUri', documentUri
        if (typeof(callback) === 'undefined' && verify.isFunction(options)) {
            callback = options;
            options = {};
        }
        if (verify.isFunction(callback) === false) {
            throw new Error(error('InvalidArgument', 'readdir', 'The callback parameter must be a function. Received: ' + callback));
        }
        if (verify.isNotEmpty(documentUri) === false) {
            return callback(error('InvalidArgument', 'readdir', {
                    parameter: 'documentUri', 
                    message: 'The documentUri parameter must be a string. Received: ' + documentUri
                }));
        }
        var parsedUri = mongoUriParser(documentUri, this.mongodbBaseFolder);
        if (parsedUri && parsedUri.__is_error) {
            console.log('__is_error ', parsedUri);
            return callback(parsedUri);
        }
        var that = this;
        this.db(function(err, mongoDb) {
            if (err) {
                return callback(err);
            }
            mongoDb.getDir(parsedUri.internalPath, options, function(err, result) {
                if (err) {
                    return callback(err);
                }
                var dir = [];
                var i, i_items=result, i_len=result.length, item;
                for (i=0; i<i_len; i++) {
                    item = result[i];
                    // log 'wizzi-repo.mongodb.mongoFsImpl.readdir.parsedUri.internalPath, item', parsedUri.internalPath, item
                    dir.push(item.basename);
                }
                callback(null, dir);
            });
        });
    }
    MongoFsImpl.prototype.mkdir = function(documentUri, options, callback) {
        // log 'wizzi-repo.mongodb.mongoFsImpl.mkdir.documentUri', documentUri
        if (typeof(callback) === 'undefined' && verify.isFunction(options)) {
            callback = options;
            options = {};
        }
        if (verify.isFunction(callback) === false) {
            throw new Error(error('InvalidArgument', 'mkdir', 'The callback parameter must be a function. Received: ' + callback));
        }
        if (verify.isNotEmpty(documentUri) === false) {
            return callback(error('InvalidArgument', 'mkdir', {
                    parameter: 'documentUri', 
                    message: 'The documentUri parameter must be a string. Received: ' + documentUri
                }));
        }
        var parsedUri = mongoUriParser(documentUri, this.mongodbBaseFolder);
        if (parsedUri && parsedUri.__is_error) {
            console.log('__is_error ', parsedUri);
            return callback(parsedUri);
        }
        var that = this;
        this.db(function(err, mongoDb) {
            if (err) {
                return callback(err);
            }
            mongoDb.createFolder(parsedUri.internalPath, function(err, result) {
                if (err) {
                    return callback(err);
                }
                callback(null, result);
            });
        });
    }
    MongoFsImpl.prototype.unlink = function(documentUri, callback) {
        // log 'wizzi-repo.mongodb.mongoFsImpl.unlink.documentUri', documentUri
        if (verify.isFunction(callback) === false) {
            throw new Error(error('InvalidArgument', 'unlink', 'The callback parameter must be a function. Received: ' + callback));
        }
        if (verify.isNotEmpty(documentUri) === false) {
            return callback(error('InvalidArgument', 'unlink', {
                    parameter: 'documentUri', 
                    message: 'The documentUri parameter must be a string. Received: ' + documentUri
                }));
        }
        var parsedUri = mongoUriParser(documentUri, this.mongodbBaseFolder);
        if (parsedUri && parsedUri.__is_error) {
            console.log('__is_error ', parsedUri);
            return callback(parsedUri);
        }
        var that = this;
        this.db(function(err, mongoDb) {
            if (err) {
                return callback(err);
            }
            mongoDb.deleteFile(parsedUri.internalPath, function(err, result) {
                if (err) {
                    return callback(err);
                }
                callback(null, result);
            });
        });
    }
    MongoFsImpl.prototype.createWriteStream = function(documentUri) {
        if (verify.isNotEmpty(documentUri) === false) {
            return error(
                'InvalidArgument', 'createWriteStream', { parameter: 'documentUri', message: 'The documentUri parameter must be a string. Received: ' + documentUri }
            );
        }
        var parsedUri = mongoUriParser(documentUri, this.mongodbBaseFolder);
        if (parsedUri && parsedUri.__is_error) {
            return parsedUri;
        }
        return this.mongoDb.createWriteStream(parsedUri.internalPath);
    }
    return MongoFsImpl;
})();

module.exports = MongoFsImpl;
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
        method: 'wizzi-repo.mongodb.mongoFsImpl.' + method,
        parameter: parameter,
        sourcePath: __filename
    }, message || 'Error message unavailable');
}
