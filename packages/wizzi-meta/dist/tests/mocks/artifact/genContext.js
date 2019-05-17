/*
    artifact generator: C:\My\wizzi\v5\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: c:\my\wizzi\v5\plugins\wizzi-meta\src\ittf\tests\mocks\artifact\gencontext.js.ittf
*/
'use strict';
// generated by wizzi.codegen.js4.es2015.module
function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var StringWriter = require('../util/stringwriter');
var verify = require('../util/verify');
var block = require('./block');
var interpolate = require('../util/interpolate');
var errors = require('../errors');
var GenContext = (function () {
    function GenContext(genconfig) {
        _classCallCheck(this, GenContext);
        if (!verify.isObject(genconfig)) {
            throw new Error('GenContext: genconfig argument must be an Object');
        }
        if (!verify.isObject(genconfig.options)) {
            throw new Error('GenContext: genconfig.options argument must be an Object');
        }
        this.genconfig = genconfig;
        this.model = genconfig.model;
        this.srcPath = genconfig.srcPath;
        this.pman = genconfig.pman;
        this.block = new block(this.genconfig.options);
        this.values = this.genconfig.options.data || {};
    }
    GenContext.prototype.forceIndent = function(value) {
        return this.block.forceIndent(value);
    }
    GenContext.prototype.indent = function(value) {
        this.block.indent(value);
    }
    GenContext.prototype.deindent = function(value) {
        this.block.deindent(value);
    }
    GenContext.prototype.a = function(name, value) {
        this.values[name] = value;
    }
    GenContext.prototype.g = function(name) {
        return this.values[name];
    }
    GenContext.prototype.r = function(name) {
        if (this.values[name]) {
            delete (this.values[name]);
        }
    }
    GenContext.prototype.w = function(text) {
        if (verify.isString(text)) {
            this.block.w(text.indexOf('{') > - (1) ? interpolate(text, this.values) : text);
        }
        else {
            this.block.w('');
        }
    }
    GenContext.prototype.write = function(text) {
        if (!verify.isString(text)) {
            return ;
        }
        this.block.write(interpolate(text, this.values));
    }
    GenContext.prototype.writeFile = function(filePath) {
        this.block.writeFile(interpolate(filePath, this.values));
    }
    GenContext.prototype.toStream = function(stream) {
        this.block.toStream(stream);
    }
    GenContext.prototype.getContent = function() {
        var sw = new StringWriter();
        this.block.toStream(sw);
        return sw.toString();
    }
    GenContext.prototype.getContentInLine = function() {
        return verify.replaceAll(this.getContent(), '\n', '__1_2_3__');
    }
    GenContext.prototype.error = function(message, node) {
        return new errors.NodeError(message, node);
    }
    GenContext.prototype.artifactGenerationError = function(message, location, node) {
        errors.ArtifactGenerationError(message, location, node);
    }
    GenContext.prototype.terminate = function() {
        delete this.pman;
        delete this.genconfig.pman;
        this.block.terminate();
    }
    GenContext.prototype.hydrate = function(block, options) {
        this.block = new block(options);
        this.block.hydrate(block.lines, options);
    }
    GenContext.prototype.toStringFromJSON = function(block, options) {
        if (!block || !block.lines) {
            return 'NO TEXT';
        }
        var gw = new GenContext({
            options: options
        });
        gw.block.hydrate(block.lines, options);
        return gw.getContent();
    }
    return GenContext;
})();

module.exports = GenContext;
