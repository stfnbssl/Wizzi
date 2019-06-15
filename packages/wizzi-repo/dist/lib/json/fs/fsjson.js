/*
    artifact generator: C:\My\wizzi\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi\packages\wizzi-repo\.wizzi\ittf\lib\json\fs\fsjson.js.ittf
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
var Collection = require('../../utils/collection');
/**
     class FsJson (Filesystem Json)
    
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
var FsJson = (function () {
    function FsJson(db) {
        _classCallCheck(this, FsJson);
        this.classType = 'wizzi-repo.json.FsJson';
        if (verify.isObject(db)) {
            if (verify.isArray(db.items) === false) {
                throw new Error(error('InvalidArgument', 'ctor', {
                        parameter: 'db.items', 
                        message: 'The db.items parameter must be an array. Received: ' + db.items
                    }));
            }
            if (verify.isArray(db.documents) === false) {
                throw new Error(error('InvalidArgument', 'ctor', {
                        parameter: 'db.documents', 
                        message: 'The db.documents parameter must be an array. Received: ' + db.documents
                    }));
            }
            this.items = new Collection(db.items);
            this.documents = new Collection(db.documents);
        }
        else {
            this.items = new Collection([]);
            this.documents = new Collection([]);
        }
    }
    FsJson.prototype.getItem = function(key, callback) {
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
            return this.items.find().toArray(callback)
            ;
        }
        this.items.find(key).toArray(function(err, r) {
            if (err) {
                return callback(err);
            }
            // log 'wizzi-repo.json.FsJson.getItem.r', key, r
            if (r.length == 1) {
                return callback(null, r[0]);
            }
            else {
                return callback(null, null);
            }
        })
    }
    FsJson.prototype.getItemById = function(id, callback) {
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
    FsJson.prototype.getItemByPath = function(path, callback) {
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
    FsJson.prototype.getItemByNameAndParent = function(basename, parentId, callback) {
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
    FsJson.prototype.getItemChildren = function(parentId, callback) {
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
        // log 'wizzi-repo.json.FsJson.getItemChildren.enter', parentId
        this.items.find({
            parentId: parentId
        }).toArray(function(err, r) {
            if (err) {
                return callback(err);
            }
            // log 'wizzi-repo.json.FsJson.getItemChildren.r', parentId, r
            return callback(null, r);
        })
    }
    FsJson.prototype.insertItem = function(fsItem, callback) {
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
        // log 'wizzi-repo.json.FsJson.insertItem. fsItem:', fsItem
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
                // log 'wizzi-repo.json.FsJson.insertItem. Item does not exists. So insertOne'
                that.items.insertOne(fsItem, function(err, r) {
                    if (err) {
                        return callback(err);
                    }
                    // log 'wizzi-repo.json.FsJson.insertItem.insertOne', r
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
                // log 'wizzi-repo.json.FsJson.insertItem. Item exists. So return it'
                return callback(null, {
                        code: 'FSITEM_EXISTS', 
                        item: item
                    });
            }
        });
    }
    FsJson.prototype.updateItem = function(fsitem, callback) {
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
        if (verify.isObject(fsitem._id) === false) {
            return callback(error(
                'InvalidArgument', 'updateItem', { parameter: 'fsitem._id', message: 'The fsitem._id parameter must be an object. Received: ' + fsitem._id }
            ));
        }
        var upd_item = Object.assign({}, fsitem);
        upd_item.path = fsitem.dirname ? normalize(path.join(fsitem.dirname, fsitem.basename)) : fsitem.basename;
        this.items.replaceOne({
            _id: upd_item._id
        }, upd_item, function(err, r_upd) {
            if (err) {
                return callback(err);
            }
            // log 'wizzi-repo.json.FsJson.updateItem', r_upd.result
            if (r_upd.modifiedCount == 1) {
                return callback(null, {
                        code: 'FSITEM_UPDATED', 
                        updatedCount: r_upd.modifiedCount, 
                        item: r_upd.ops[0]
                    });
            }
            else {
                return callback(error('JsonRepoError', 'updateItem', util.inspect( r_upd.result )));
            }
        });
    }
    FsJson.prototype.updateItemLastModified = function(id, lastModified, callback) {
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
            if (r != null) {
                r.lastModified = lastModified;
                that.items.replaceOne({
                    _id: id
                }, r, function(err, r_upd) {
                    if (err) {
                        return callback(err);
                    }
                    // log 'wizzi-repo.json.FsJson.updateItemLastModified', r_upd.result
                    if (r_upd.modifiedCount == 1) {
                        return callback(null, {
                                code: 'FSITEM_LASTMODIFIED_UPDATED', 
                                updatedCount: r_upd.modifiedCount, 
                                item: r_upd.ops[0]
                            });
                    }
                    else {
                        return callback(error('JsonRepoError', 'updateItemLastModified', util.inspect( r_upd.result )));
                    }
                });
            }
            else {
                return callback(error('JsonRepoError', 'updateItemLastModified', 'FsJson item not found, id: ' + id));
            }
        });
    }
    FsJson.prototype.deleteItem = function(id, callback) {
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
                return callback(error('JsonRepoError', 'deleteItem', 'FsJson item not found: ' + id));
            }
            that._deleteDocument(id, function(err, r) {
                if (err) {
                    return callback(err);
                }
                that.items.deleteOne({
                    _id: id
                }, function(err, r) {
                    if (err) {
                        return callback(err);
                    }
                    console.log('*** wizzi-repo.json.FsJson.deleteItem,r', r);
                    if (r.deletedCount == 1 && r.result.ok == 1) {
                        return callback(null, {
                                code: 'FSITEM_DELETED', 
                                deletedCount: r.deletedCount, 
                                ok: r.ok
                            });
                    }
                    else {
                        return callback(error('JsonRepoError', 'deleteItem', 'FsJson error deleting item. Result: ' + util.inspect( r )));
                    }
                });
            });
        });
    }
    FsJson.prototype._deleteDocument = function(id, callback) {
        this.documents.deleteOne({
            _id: id
        }, function(err, r) {
            if (err) {
                return callback(err);
            }
            // log '*** wizzi-repo.json.FsJson._deleteDocument.r', r
            if (r.deletedCount == 1 && r.result.ok == 1) {
                // log 'wizzi-repo.json.FsJson._deleteDocument', true
                return callback(null, true);
            }
            else {
                // log 'wizzi-repo.json.FsJson._deleteDocument', false
                return callback(null, false);
            }
        });
    }
    FsJson.prototype.readDocument = function(id, callback) {
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
        this.documents.find({
            _id: id
        }).toArray(function(err, r) {
            if (err) {
                return callback(err);
            }
            // log 'wizzi-repo.json.FsJson.read.r', id, r
            if (r.length == 1) {
                return callback(null, r[0].content);
            }
            else {
                return callback(null, null);
            }
        })
    }
    FsJson.prototype.writeDocument = function(id, content, callback) {
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
            if (err) {
                return callback(err);
            }
            // log 'wizzi-repo.json.FsJson.writeDocument.readDocument.f', id, f, content === f
            if (f === content) {
                // log 'wizzi-repo.json.FsJson.writeDocument not modified', f
                return callback(null, {
                        code: 'DOCUMENT_NOT_MODIFIED'
                    });
            }
            // log 'wizzi-repo.json.FsJson.writeDocument.readDocument.upsert', id, content
            var lastModified = new Date();
            that.documents.replaceOne({
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
                // log 'wizzi-repo.json.FsJson.writeDocument', r
                var modified = r.modifiedCount + r.upsertedCount;
                assert.equal(1, modified);
                that.updateItemLastModified(id, lastModified, function(err, rUpd) {
                    if (err) {
                        return callback(err);
                    }
                    // log 'wizzi-repo.json.FsJson.writeDocument upd', rUpd
                    return callback(null, {
                            code: 'DOCUMENT_WRITTEN', 
                            item: r.ops[0]
                        });
                });
            });
        });
    }
    FsJson.prototype.toJson = function(callback) {
        if (typeof(callback) !== 'function') {
            throw new Error(
                error('InvalidArgument', 'toJson', 'The callback parameter must be a function. Received: ' + callback)
            );
        };
        var that = this;
        that.items.toArray(function(err, items) {
            if (err) {
                return callback(err);
            }
            that.documents.toArray(function(err, documents) {
                if (err) {
                    return callback(err);
                }
                callback(null, {
                    items: items, 
                    documents: documents
                });
            });
        });
    }
    FsJson.prototype.toFiles = function(options, callback) {
        if (typeof(callback) !== 'function') {
            throw new Error(
                error('InvalidArgument', 'toFiles', 'The callback parameter must be a function. Received: ' + callback)
            );
        };
        if (verify.isObject(options) === false) {
            return callback(error(
                'InvalidArgument', 'toFiles', { parameter: 'options', message: 'The options parameter must be an object. Received: ' + options }
            ));
        }
        if (verify.isNullOrUndefined(options.removeRoot) === false) {
            if (verify.isNotEmpty(options.removeRoot) === false) {
                return callback(error(
                    'InvalidArgument', 'toFiles', { parameter: 'options.removeRoot', message: 'The options.removeRoot parameter must be a string. Received: ' + options.removeRoot }
                ));
            }
        }
        this.items.toArray((err, items) => {
            if (err) {
                return callback(err);
            }
            this.documents.toArray((err, documents) => {
                if (err) {
                    return callback(err);
                }
                var ret = [];
                var i, i_items=documents, i_len=documents.length, d;
                for (i=0; i<i_len; i++) {
                    d = documents[i];
                    var j, j_items=items, j_len=items.length, item;
                    for (j=0; j<j_len; j++) {
                        item = items[j];
                        if (item._id === d._id) {
                            ret.push({
                                fullPath: item.path, 
                                relPath: options.removeRoot ? item.path.substr(options.removeRoot.length) : '', 
                                content: d.content
                            });
                        }
                    }
                }
                callback(null, ret);
            });
        });
    }
    FsJson.prototype.close = function() {
        // nothing to do
    }
    return FsJson;
})();

/**
     Creates a FsJson instance
*/
FsJson.create = function(jsonData, callback) {
    
    if (verify.isUndefined(callback) && verify.isFunction(mongoUri)) {
        callback = jsonData;
        jsonData = null;
    }
    
    if (jsonData == null) {
        jsonData = {
            items: [], 
            documents: []
        };
    }
    else {
        if (verify.isObject(jsonData) == false) {
            return callback(error('create', 'parameter jsondata must be an object'));
        }
        if (verify.isArray(jsonData.items) == false) {
            return callback(error('create', 'parameter jsondata must contain an item property'));
        }
        if (verify.isArray(jsonData.documents) == false) {
            return callback(error('create', 'parameter jsondata must contain a documents property'));
        }
    }
    
    return callback(null, new FsJson(jsonData));
};
function error(method, message) {
    return {
            __is_error: true, 
            method: 'Json.JsonDb.' + method, 
            message: message
        };
}
function normalize(path) {
    return path.trim().replace(/\\/g,'/').toLowerCase();
}
module.exports = FsJson;
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
        method: 'wizzi-repo.json.FsJson.' + method,
        parameter: parameter,
        sourcePath: __filename
    }, message || 'Error message unavailable');
}
