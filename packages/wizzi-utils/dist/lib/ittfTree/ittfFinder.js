/*
    artifact generator: C:\My\wizzi\wizzi-mono\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-mono\packages\wizzi-utils\.wizzi\ittf\lib\ittfTree\ittfFinder.js.ittf
*/
'use strict';
// generated by v6-wizzi-js.artifacts.js.module.main
function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var verify = require('wizzi-helpers').verify;
var path = require('path');
var verify = require('../verify');
var errors = require('../errors');
var ittfFinder = (function () {
    function ittfFinder(file, schema) {
        _classCallCheck(this, ittfFinder);
        if (verify.isObject(file) === false) {
            throw new Error(error(
                'InvalidArgument', 'ctor', { parameter: 'file', message: 'The file parameter must be an object. Received: ' + file }
            ));
        }
        this.file = file;
        this.schema = schema;
    }
    /**
         params
         { options
         string ittfDocumentUri
         |
         string basedir
         string fragmentName
         |
         string callerFullPath
         string fragmentName
        
    */
    ittfFinder.prototype.resolvePath = function(options, callback) {
        var ittfDocumentUri = options.ittfDocumentUri,
            fragmentName = options.fragmentName,
            basedir = options.basedir,
            callerFullPath = options.callerFullPath,
            schema = this.schema;
        if (verify.isNotEmpty(callerFullPath)) {
            basedir = path.dirname(callerFullPath);
            var ss = path.basename(callerFullPath).split('.');
            var schema = ss[ss.length-2];
        }
        if (verify.isNotEmpty(ittfDocumentUri) === false) {
            if (verify.isNotEmpty (basedir) === false || verify.isAbsolutePath(basedir) === false) {
                return callback(error('InvalidArgument', 'resolvePath', 'An "options.ittfDocumentUri" parameter or an "options.basedir" parameter with an absolute path is required to load an ITTF document. Received: ' + 'ittfDocumentUri: ' + options.ittfDocumentUri + ', basedir: ' + options.basedir + ', fragmentName: ' + options.fragmentName));
            }
            if ((verify.isNotEmpty(fragmentName) === false) || (fragmentName[0] === '/')) {
                return callback(error('InvalidArgument', 'resolvePath', 'An "options.ittfDocumentUri" parameter or an "options.fragmentName" parameter with a relative path is required to load an ITTF document. Received: ' + 'ittfDocumentUri: ' + options.ittfDocumentUri + ', basedir: ' + options.basedir + ', fragmentName: ' + options.fragmentName));
            }
            ittfDocumentUri = path.join(basedir, fragmentName);
        }
        var that = this;
        this.tryExists(ittfDocumentUri, schema, function(err, result) {
            if (err) {
                return callback(err);
            }
            if (result.found) {
                return callback(null, result.ittfDocumentUri);
            }
            else {
                if (verify.isNotEmpty(fragmentName) === false) {
                    return callback(error('IttfNotFound', 'resolvePath', {
                            parameter: ittfDocumentUri, 
                            message: 'Cannot resolve ittf document: ' + ittfDocumentUri
                        }));
                }
                that.resolvePathInTFolders(path.dirname(ittfDocumentUri), fragmentName, schema, function(err, tresult) {
                    if (err) {
                        return callback(err);
                    }
                    if (tresult.found) {
                        return callback(null, tresult.ittfDocumentUri);
                    }
                    else {
                        // log 'ittfFinder.resolvePath options', options, schema
                        return callback(error('IttfNotFound', 'resolvePath', 'Cannot find ittf document: ' + ittfDocumentUri));
                    }
                });
            }
        });
    }
    ittfFinder.prototype.resolvePathInTFolders = function(basePath, relPath, schema, callback) {
        var that = this;
        function recurserTFolder(basePath, relPath, schema) {
            // log 'recurserTFolder enter', basePath, relPath
            return new Promise(function(resolve, reject) {
                    var ittfDocumentUri = path.join(basePath, 't', relPath);
                    that.tryExists(ittfDocumentUri, schema, function(err, result) {
                        if (err) {
                            return callback(err);
                        }
                        if (result.found) {
                            // return callback(null, result)
                            // log 'recurserTFolder resolve found', result
                            return resolve(result);
                        }
                        else {
                            basePath = path.dirname(basePath);
                            if (basePath.length > 3) {
                                // log 'recurserTFolder try parent', basePath
                                return recurserTFolder(basePath, relPath, schema).then(function(result) {
                                        // log 'recurserTFolder transmit resolve result', basePath, result
                                        resolve(result);
                                    }).catch(function(err) {
                                        // log 'recurserTFolder transmit reject err', basePath, err
                                        reject(err);
                                    })
                                ;
                            }
                            else {
                                // log 'recurserTFolder resolve not found', basePath
                                return resolve({
                                        found: false
                                    });
                            }
                        }
                    });
                });
        }
        recurserTFolder(basePath, relPath, schema).then(function(result) {
            return callback(null, result);
        }).catch(function(err) {
            return callback(err);
        })
    }
    ittfFinder.prototype.tryExists = function(test, schema, callback) {
        var that = this;
        this.file.isFile(test, function(err, result) {
            if (err) {
                return callback(err);
            }
            if (result) {
                return callback(null, {
                        found: true, 
                        ittfDocumentUri: test
                    });
            }
            else {
                if (test.toLowerCase().substr(-5, 5) !== '.ittf') {
                    if (schema) {
                        that.file.isFile(test + '.' + schema + '.ittf', function(err, result) {
                            if (err) {
                                return callback(err);
                            }
                            if (result) {
                                return callback(null, {
                                        found: true, 
                                        ittfDocumentUri: test + '.' + schema + '.ittf'
                                    });
                            }
                            else {
                                that.file.isFile(test + '.ittf', function(err, result) {
                                    if (err) {
                                        return callback(err);
                                    }
                                    if (result) {
                                        return callback(null, {
                                                found: true, 
                                                ittfDocumentUri: test + '.ittf'
                                            });
                                    }
                                    else {
                                        return callback(null, {
                                                found: false
                                            });
                                    }
                                });
                            }
                        });
                    }
                    else {
                        return callback(null, {
                                found: false
                            });
                    }
                }
                else {
                    return callback(null, {
                            found: false
                        });
                }
            }
        });
    }
    ittfFinder.prototype.getReferencePath = function(baseFullPath, referenceName, callback) {
        var dirname = path.dirname(baseFullPath);
        var referencePath = path.resolve(dirname, referenceName);
        file.isFile(referencePath, function(err, isFile) {
            if (err) {
                return callback(err);
            }
            if (isFile) {
                return callback(null, referencePath);
            }
            else {
                return callback(null, {
                        __is_error: true, 
                        message: 'Cannot resolve ittf reference ' + referenceName + ' from base path ' + baseFullPath
                    });
            }
        });
    }
    return ittfFinder;
})();

module.exports = ittfFinder;
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
        method: 'wizzi-utils.ittfFinder.' + method,
        parameter: parameter,
        sourcePath: __filename
    }, message || 'Error message unavailable');
}
