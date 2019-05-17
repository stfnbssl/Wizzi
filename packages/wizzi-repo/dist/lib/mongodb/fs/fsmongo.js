/*
    artifact generator: C:\My\wizzi\wizzi-mono\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-mono\packages\wizzi-repo\.wizzi\ittf\lib\mongodb\fs\fsmongo.js.ittf
*/
'use strict';
// generated by v6-wizzi-js.artifacts.js.module.main
function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var verify = require('wizzi-utils').verify;
var assert = require('assert');
var path = require('path');
var util = require('util');
var verify = require('wizzi-utils').verify;
var MongoClient = null;
var FSITEMS = 'fsitems';
var DOCUMENTS = 'documents';
/**
     class FsMongo (Filesystem Db)
    
     Filesystem item
     { fsitem
     ObjectId _id
     string basename
     ObjectId parentId
     string dirname
     string path
     integer kind
     one-of 0 (directory), 1 (file)
    
     Document
     { document
     ObjectId _id
     string content
     ISODate lastModified
*/
var FsMongo = (function () {
    function FsMongo(db) {
        _classCallCheck(this, FsMongo);
        this.db = db;
    }
    FsMongo.prototype.getItem = function(key, callback) {
        if (typeof(callback) !== 'function') {
            throw new Error(
                error('InvalidArgument', 'getItem', 'The callback parameter must be a function. Received: ' + callback)
            );
        };
        if (verify.isNullOrUndefined(key) === false) {
            if (verify.isObject(key) === false) {
                return callback(error(
                    'InvalidArgument', 'getItem', { parameter: 'key', message: 'The key parameter must be an object. Received: ' + key }
                ));
            }
        }
        if (key == null) {
            return this.db.collection(FSITEMS).find().toArray(callback)
            ;
        }
        this.db.collection(FSITEMS).find(key).toArray(function(err, r) {
            if (err) {
                return callback(err);
            }
            // log 'wizzi-repo.mongodb.FsMongo.getItem.r', key, r
            if (r.length == 1) {
                return callback(null, r[0]);
            }
            else {
                return callback(null, null);
            }
        })
    }
    FsMongo.prototype.getItemById = function(id, callback) {
        if (typeof(callback) !== 'function') {
            throw new Error(
                error('InvalidArgument', 'getItemById', 'The callback parameter must be a function. Received: ' + callback)
            );
        };
        if (verify.isObject(id) === false) {
            return callback(error(
                'InvalidArgument', 'getItemById', { parameter: 'id', message: 'The id parameter must be an object. Received: ' + id }
            ));
        }
        this.getItem({
            _id: id
        }, callback);
    }
    FsMongo.prototype.getItemByPath = function(path, callback) {
        if (typeof(callback) !== 'function') {
            throw new Error(
                error('InvalidArgument', 'getItemByPath', 'The callback parameter must be a function. Received: ' + callback)
            );
        };
        if (verify.isNotEmpty(path) === false) {
            return callback(error(
                'InvalidArgument', 'getItemByPath', { parameter: 'path', message: 'The path parameter must be a string. Received: ' + path }
            ));
        }
        this.getItem({
            path: path
        }, callback);
    }
    FsMongo.prototype.getItemByNameAndParent = function(basename, parentId, callback) {
        if (typeof(callback) !== 'function') {
            throw new Error(
                error('InvalidArgument', 'getItemByNameAndParent', 'The callback parameter must be a function. Received: ' + callback)
            );
        };
        if (verify.isNotEmpty(basename) === false) {
            return callback(error(
                'InvalidArgument', 'getItemByNameAndParent', { parameter: 'basename', message: 'The basename parameter must be a string. Received: ' + basename }
            ));
        }
        if (verify.isNullOrUndefined(parentId) === false) {
            if (verify.isObject(parentId) === false) {
                return callback(error(
                    'InvalidArgument', 'getItemByNameAndParent', { parameter: 'parentId', message: 'The parentId parameter must be an object. Received: ' + parentId }
                ));
            }
        }
        this.getItem({
            basename: basename, 
            parentId: parentId
        }, callback);
    }
    FsMongo.prototype.getItemChildren = function(parentId, callback) {
        if (typeof(callback) !== 'function') {
            throw new Error(
                error('InvalidArgument', 'getItemChildren', 'The callback parameter must be a function. Received: ' + callback)
            );
        };
        if (verify.isObject(parentId) === false) {
            return callback(error(
                'InvalidArgument', 'getItemChildren', { parameter: 'parentId', message: 'The parentId parameter must be an object. Received: ' + parentId }
            ));
        }
        this.db.collection(FSITEMS).find({
            parentId: parentId
        }).toArray(function(err, r) {
            if (err) {
                return callback(err);
            }
            // log 'wizzi-repo.mongodb.FsMongo.getItemChildren.r', parentId, r
            return callback(null, r);
        })
        
    }
    FsMongo.prototype.insertItem = function(fsItem, callback) {
        if (typeof(callback) !== 'function') {
            throw new Error(
                error('InvalidArgument', 'insertItem', 'The callback parameter must be a function. Received: ' + callback)
            );
        };
        if (verify.isObject(fsItem) === false) {
            return callback(error(
                'InvalidArgument', 'insertItem', { parameter: 'fsItem', message: 'The fsItem parameter must be an object. Received: ' + fsItem }
            ));
        }
        if (verify.isNotEmpty(fsItem.basename) === false) {
            return callback(error(
                'InvalidArgument', 'insertItem', { parameter: 'fsItem.basename', message: 'The fsItem.basename parameter must be a string. Received: ' + fsItem.basename }
            ));
        }
        if (verify.isNumber(fsItem.kind) === false) {
            return callback(error(
                'InvalidArgument', 'insertItem', { parameter: 'fsItem.kind', message: 'The fsItem.kind parameter must be a number. Received: ' + fsItem.kind }
            ));
        }
        // log 'wizzi-repo.mongodb.FsMongo.insertItem.fsItem', fsItem
        var basename = fsItem.basename;
        var dirname = fsItem.dirname;
        var parentId = fsItem.parentId;
        fsItem.path = dirname ? normalize(path.join(dirname, basename)) : basename;
        const that = this;
        this.getItemByNameAndParent(basename, parentId, function(err, item) {
            if (err) {
                return callback(err);
            }
            if (item == null) {
                that.db.collection(FSITEMS).insertOne(fsItem, function(err, r) {
                    if (err) {
                        return callback(err);
                    }
                    delete r.connection
                    delete r.message
                    console.log('wizzi-repo.mongodb.FsMongo.insertItem.insertOne.r', r);
                    assert.equal(1, r.insertedCount);
                    assert.equal(1, r.ops.length);
                    return callback(null, {
                            code: 'FSITEM_INSERTED', 
                            insertedId: r.insertedId, 
                            insertedCount: r.insertedCount, 
                            item: r.ops[0]
                        });
                });
            }
            else {
                return callback(null, {
                        code: 'FSITEM_EXISTS', 
                        item: item
                    });
            }
        });
    }
    FsMongo.prototype.updateItem = function(fsitem, callback) {
        if (typeof(callback) !== 'function') {
            throw new Error(
                error('InvalidArgument', 'updateItem', 'The callback parameter must be a function. Received: ' + callback)
            );
        };
        if (verify.isObject(fsitem) === false) {
            return callback(error(
                'InvalidArgument', 'updateItem', { parameter: 'fsitem', message: 'The fsitem parameter must be an object. Received: ' + fsitem }
            ));
        }
        if (verify.isNotEmpty(fsitem.basename) === false) {
            return callback(error(
                'InvalidArgument', 'updateItem', { parameter: 'fsitem.basename', message: 'The fsitem.basename parameter must be a string. Received: ' + fsitem.basename }
            ));
        }
        if (verify.isNumber(fsitem.kind) === false) {
            return callback(error(
                'InvalidArgument', 'updateItem', { parameter: 'fsitem.kind', message: 'The fsitem.kind parameter must be a number. Received: ' + fsitem.kind }
            ));
        }
        this.db.collection(FSITEMS).replaceOne({
            _id: fsitem._id
        }, fsitem, function(err, r_upd) {
            if (err) {
                return callback(err);
            }
            delete r_upd.connection
            delete r_upd.message
            console.log('wizzi-repo.mongodb.FsMongo.updateItem', r_upd);
            if (r_upd.result.nModified == 1) {
                return callback(null, {
                        code: 'FSITEM_UPDATED', 
                        updatedCount: r_upd.result.nModified, 
                        item: r_upd.ops[0]
                    });
            }
            else {
                return callback(error('MongoRepoError', 'updateItem', util.inspect( r_upd.result )));
            }
        });
    }
    FsMongo.prototype.updateItemLastModified = function(id, lastModified, callback) {
        if (typeof(callback) !== 'function') {
            throw new Error(
                error('InvalidArgument', 'updateItemLastModified', 'The callback parameter must be a function. Received: ' + callback)
            );
        };
        if (verify.isObject(id) === false) {
            return callback(error(
                'InvalidArgument', 'updateItemLastModified', { parameter: 'id', message: 'The id parameter must be an object. Received: ' + id }
            ));
        }
        var that = this;
        this.getItemById(id, function(err, r) {
            if (err) {
                return callback(err);
            }
            console.log('wizzi-repo.mongodb.FsMongo.updateItemLastModified, getItemById', id, r);
            if (r != null) {
                r.lastModified = lastModified;
                that.db.collection(FSITEMS).replaceOne({
                    _id: id
                }, r, function(err, r_upd) {
                    if (err) {
                        return callback(err);
                    }
                    delete r_upd.connection
                    delete r_upd.message
                    console.log('wizzi-repo.mongodb.FsMongo.updateItemLastModified', r_upd);
                    if (r_upd.result.nModified == 1) {
                        return callback(null, {
                                code: 'FSITEM_LASTMODIFIED_UPDATED', 
                                updatedCount: r_upd.result.nModified, 
                                item: r_upd.ops[0]
                            });
                    }
                    else {
                        return callback(error('MongoRepoError', 'updateItemLastModified', util.inspect( r_upd.result )));
                    }
                });
            }
            else {
                return callback(error('MongoRepoError', 'updateItemLastModified', 'FsMongo item not found, id: ' + id));
            }
        });
    }
    FsMongo.prototype.deleteItem = function(id, callback) {
        if (typeof(callback) !== 'function') {
            throw new Error(
                error('InvalidArgument', 'deleteItem', 'The callback parameter must be a function. Received: ' + callback)
            );
        };
        if (verify.isObject(id) === false) {
            return callback(error(
                'InvalidArgument', 'deleteItem', { parameter: 'id', message: 'The id parameter must be an object. Received: ' + id }
            ));
        }
        var that = this;
        this.getItemById(id, function(err, fsitem) {
            if (err) {
                return callback(err);
            }
            if (fsitem == null) {
                return callback(error('MongoRepoError', 'deleteItem', 'FsMongo item not found: ' + id));
            }
            that._deleteDocument(id, function(err, r) {
                if (err) {
                    return callback(err);
                }
                that.db.collection(FSITEMS).deleteOne({
                    _id: id
                }, function(err, r) {
                    if (err) {
                        return callback(err);
                    }
                    delete r.connection
                    delete r.message
                    console.log('wizzi-repo.mongodb.FsMongo.deleteItem,r', r);
                    if (r.deletedCount == 1 && r.result.ok == 1) {
                        return callback(null, {
                                code: 'FSITEM_DELETED', 
                                deletedCount: r.deletedCount
                            });
                    }
                    else {
                        return callback(error('MongoRepoError', 'deleteItem', 'FsMongo error deleting item. Result: ' + util.inspect( r.result )));
                    }
                });
            });
        });
    }
    FsMongo.prototype._deleteDocument = function(id, callback) {
        this.db.collection(DOCUMENTS).deleteOne({
            _id: id
        }, function(err, r) {
            if (err) {
                return callback(err);
            }
            delete r.connection
            delete r.message
            console.log('wizzi-repo.mongodb.FsMongo._deleteDocument.r', r);
            if (r.deletedCount == 1 && r.result.ok == 1) {
                // log 'wizzi-repo.mongodb.FsMongo._deleteDocument', true
                return callback(null, true);
            }
            else {
                // log 'wizzi-repo.mongodb.FsMongo._deleteDocument', false
                return callback(null, false);
            }
        });
    }
    FsMongo.prototype.readDocument = function(id, callback) {
        if (typeof(callback) !== 'function') {
            throw new Error(
                error('InvalidArgument', 'readDocument', 'The callback parameter must be a function. Received: ' + callback)
            );
        };
        if (verify.isObject(id) === false) {
            return callback(error(
                'InvalidArgument', 'readDocument', { parameter: 'id', message: 'The id parameter must be an object. Received: ' + id }
            ));
        }
        this.db.collection(DOCUMENTS).find({
            _id: id
        }).toArray(function(err, r) {
            if (err) {
                return callback(err);
            }
            // log 'wizzi-repo.mongodb.FsMongo.read.r', id, r
            if (r.length == 1) {
                return callback(null, r[0].content);
            }
            else {
                return callback(error('MongoRepoError', 'readDocument', 'Document not found, id: ' + id));
            }
        })
    }
    FsMongo.prototype.writeDocument = function(id, content, callback) {
        if (typeof(callback) !== 'function') {
            throw new Error(
                error('InvalidArgument', 'writeDocument', 'The callback parameter must be a function. Received: ' + callback)
            );
        };
        if (verify.isObject(id) === false) {
            return callback(error(
                'InvalidArgument', 'writeDocument', { parameter: 'id', message: 'The id parameter must be an object. Received: ' + id }
            ));
        }
        if (verify.isNullOrUndefined(content) === false) {
            if (verify.isNotEmpty(content) === false) {
                return callback(error(
                    'InvalidArgument', 'writeDocument', { parameter: 'content', message: 'The content parameter must be a string. Received: ' + content }
                ));
            }
        }
        var that = this;
        this.readDocument(id, function(err, f) {
            console.log('wizzi-repo.mongodb.FsMongo.writeDocument.readDocument.f', id, f, content === f);
            if (err && err.code == 'MongoRepoError') {
            }
            else {
                if (f === content) {
                    console.log('wizzi-repo.mongodb.FsMongo.writeDocument not modified', f);
                    return callback(null, {
                            code: 'DOCUMENT_NOT_MODIFIED'
                        });
                }
            }
            console.log('wizzi-repo.mongodb.FsMongo.writeDocument.readDocument.upsert', id, content, lastModified);
            var lastModified = new Date();
            that.db.collection(DOCUMENTS).replaceOne({
                _id: id
            }, {
                _id: id, 
                content: content, 
                lastModified: lastModified
            }, {
                upsert: true
            }, function(err, r) {
                if (err) {
                    return callback(err);
                }
                delete r.connection
                delete r.message
                console.log('wizzi-repo.mongodb.FsMongo.writeDocument.r', r);
                var modified = r.modifiedCount + r.upsertedCount;
                assert.equal(1, modified);
                that.updateItemLastModified(id, lastModified, function(err, rUpd) {
                    if (err) {
                        return callback(err);
                    }
                    // log 'wizzi-repo.mongodb.FsMongo.writeDocument upd', rUpd
                    return callback(null, {
                            code: 'DOCUMENT_WRITTEN', 
                            item: r.ops[0]
                        });
                });
            });
        });
    }
    FsMongo.prototype.close = function() {
        if (this.db) {
            // log '***** wizzi-repo.mongodb.FsMongo start closing'
            this.db.close();
            this.db = null;
            // log '***** wizzi-repo.mongodb.FsMongo closed'
        }
    }
    return FsMongo;
})();

/**
     Creates a FsMongo instance
*/
FsMongo.create = function(mongoUri, callback) {
    
    if (verify.isUndefined(callback) && verify.isFunction(mongoUri)) {
        callback = mongoUri;
        mongoUri = null;
    }
    
    if (MongoClient == null) {
        MongoClient = require('mongodb').MongoClient;
    }
    mongoUri = mongoUri || 'mongodb://localhost:27017/test';
    MongoClient.connect(mongoUri, function(err, mongoDb) {
        if (err) {
            return callback(err);
        }
        return callback(null, new FsMongo(mongoDb));
    });
};
function error(method, message) {
    return {
            __is_error: true, 
            method: 'Mongo.FsMongo.' + method, 
            message: message
        };
}
function normalize(path) {
    return path.trim().replace(/\\/g,'/').toLowerCase();
}
module.exports = FsMongo;
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
        method: 'wizzi-repo.mongodb.FsMongo.' + method,
        parameter: parameter,
        sourcePath: __filename
    }, message || 'Error message unavailable');
}
