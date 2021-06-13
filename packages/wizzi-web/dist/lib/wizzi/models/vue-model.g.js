/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-core\dist\node_modules\wizzi-legacy-v5\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: c:\my\wizzi\stfnbssl\wizzi\packages\wizzi-core\dist\lib\artifacts\wfschema\model\gen\ittf\wfschema-model.js.ittf
    utc time: Sat, 12 Jun 2021 18:05:51 GMT
*/
'use strict';
// generated by v5-wizzi-js.artifacts.js.module.main
function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var util = require('util');
var path = require('path');
var _ = require('lodash');
var chalk = require('chalk');
var wzutils = require('wizzi-utils');
var verify = wzutils.verify;
var _md = module.exports = {};
var wzSourceLineInfo = (function () {
    function wzSourceLineInfo(row, col, sourceKey) {
        _classCallCheck(this, wzSourceLineInfo);
        this.row = row;
        this.col = col;
        this.sourceKey = sourceKey;
    }
    wzSourceLineInfo.prototype.toString = function(instance) {
        if (instance) {
            return 'row: ' + this.row + ', col: ' + this.col + ', file: ' + instance.wzSourceFilepath(this.sourceKey);
        }
        else {
            return 'row: ' + this.row + ', col: ' + this.col + ', sourceKey: ' + this.sourceKey;
        }
    }
    return wzSourceLineInfo;
})();

_md.wzSourceLineInfo = wzSourceLineInfo;
var vueBase = (function () {
    function vueBase(name, sourceLineInfo) {
        _classCallCheck(this, vueBase);
        this.wzName = name || '';
        this.wzParent = null;
        this.wzSourceLineInfo = sourceLineInfo;
        this.wzChildren = [];
    }
    vueBase.prototype.wzRoot = function() {
        return this.wzParent == null ? this : this.wzParent.wzRoot();
    }
    vueBase.prototype.wzSourceFilepath = function(sourceKey) {
        var sk = sourceKey || this.wzSourceLineInfo.sourceKey;
        return this.wzRoot().loadHistory.getIttfDocumentUri(sk);
    }
    vueBase.prototype.wzSourceErrorLines = function(node, message) {
        return this.wzRoot().loadHistory.getIttfDocumentErrorLines(node.u, {
                row: node.r, 
                col: node.c, 
                description: message
            }, true);
    }
    vueBase.prototype.wzVerify = function() {
    }
    vueBase.prototype.wzInitialize = function() {
    }
    vueBase.prototype.wzInitializeAsync = function(ctx, callback) {
        callback(null);
    }
    vueBase.prototype.wzAddChild = function(node) {
        node.wzParent = this;
        this.wzChildren.push(node);
    }
    vueBase.prototype.wzAddChildToColl = function(node, coll) {
        node.wzParent = this;
        node.wzMoved = true;
        coll.push(node);
    }
    vueBase.prototype.wzMoveChildToColl = function(node, coll, fromColl) {
        var index = fromColl.indexOf(node);
        if (index < 0) {
            this.error('wzMoveChildToColl error. The from collection does not contain the node.', node);
        }
        fromColl.splice(index, 1);
        this.wzAddChildToColl(node, coll);
    }
    vueBase.prototype.wzLoadToChildColl = function(child, type, coll) {
        var item = new type(child.v, new wzSourceLineInfo(child.r, child.c, child.u));
        item.wzTag = child.n;
        if (child.wzMTreeData) {
            item.wzMTreeData = child.wzMTreeData;
        }
        item.wzParent = this;
        coll.push(item);
        if (item.loadFromNode) {
            item.loadFromNode(child);
        }
        return true;
    }
    vueBase.prototype.wzCreateChildColl = function(tag, name, type, coll) {
        var item = new type(name, this.wzSourceLineInfo);
        item.wzTag = tag;
        item.wzParent = this;
        item.wzCreated = true;
        coll.push(item);
        return item;
    }
    vueBase.prototype.wzLoadToChildren = function(child, type) {
        var item = new type(child.v, new wzSourceLineInfo(child.r, child.c, child.u));
        item.wzTag = child.n;
        item.wzParent = this;
        if (child.wzMTreeData) {
            item.wzMTreeData = child.wzMTreeData;
        }
        this.wzChildren.push(item);
        if (item.loadFromNode) {
            item.loadFromNode(child);
        }
        return true;
    }
    vueBase.prototype.wzLoadOneToOne = function(child, type, fieldName) {
        var item = new type(child.v, new wzSourceLineInfo(child.r, child.c, child.u));
        if (child.wzMTreeData) {
            item.wzMTreeData = child.wzMTreeData;
        }
        item.wzParent = this;
        this[fieldName] = item;
        if (item.loadFromNode) {
            item.loadFromNode(child);
        }
        return true;
    }
    vueBase.prototype.wzRemove = function(fromColl) {
        var index = fromColl.indexOf(this);
        if (index < 0) {
            this.error('wzRemove error. The from collection does not contain the node.', this);
        }
        fromColl.splice(index, 1);
    }
    vueBase.prototype.error = function(message, node) {
        throw new _md.vueModelException(message, node, this);
    }
    return vueBase;
})();

_md.vueBase = vueBase;
// element comment
var comment = (function (vueBase) {
    _inherits(comment, vueBase);
    function comment(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(comment.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, comment);
        this.wzElement = "comment";
        // relation comment
        this.comments = [];
    }
    comment.prototype.addComment = function(name, sourceLineInfo) {
        var retval = new _md.comment(name, sourceLineInfo);
        retval.wzParent = this;
        this.comments.push(retval);
        return retval;
    }
    comment.prototype.getComment = function(name) {
        var found = null;
        this.comments.forEach(function(item) {
            found = found || (item.wzName === name ? item : null);
        });
        return found;
    }
    comment.prototype.loadChild = function(child) {
        var name = child.n.toLowerCase();
        if (name === '#') {
            return this.wzLoadToChildColl(child, _md.comment, this.comments);
        }
        if (name === '<') {
            return this.wzLoadToChildColl(child, _md.element, this.comments);
        }
        if (name === 'vue') {
            return this.wzLoadToChildColl(child, _md.vue, this.comments);
        }
        if (name === '::style') {
            return this.wzLoadToChildColl(child, _md.cssInclude, this.comments);
        }
        if (name === '::script') {
            return this.wzLoadToChildColl(child, _md.jsInclude, this.comments);
        }
        if (name === '::template') {
            return this.wzLoadToChildColl(child, _md.htmlInclude, this.comments);
        }
        else if (name === '::scriptts') {
            return this.wzLoadToChildColl(child, _md.tsInclude, this.comments);
        }
        if (name === '::script-ts') {
            return this.wzLoadToChildColl(child, _md.tsInclude, this.comments);
        }
        return false;
    }
    comment.prototype.loadFromNode = function(node) {
        node.children.forEach((item) => {
            var loaded = this.loadChild(item);
            if (!loaded) {
                throw new _md.vueModelException("Tag not recognized: " + item.n, item, this);
            }
        });
    }
    comment.prototype.wzVerify = function(ctx) {
        this.comments.forEach((item) => {
            item.wzVerify(ctx);
        });
        _md.vueBase.prototype.wzVerify.call(this, ctx);
    }
    comment.prototype.wzInitialize = function(ctx) {
        this.comments.forEach((item) => {
            item.wzInitialize(ctx);
        });
        _md.vueBase.prototype.wzInitialize.call(this, ctx);
    }
    return comment;
})(vueBase);

_md.comment = comment;
/**
    element element
     a generic vue element (tag)
*/
var element = (function (comment) {
    _inherits(element, comment);
    function element(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(element.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, element);
        this.wzElement = "element";
        // relation element
        this.elements = [];
    }
    element.prototype.addElement = function(name, sourceLineInfo) {
        var retval = new _md.element(name, sourceLineInfo);
        retval.wzParent = this;
        this.elements.push(retval);
        return retval;
    }
    element.prototype.getElement = function(name) {
        var found = null;
        this.elements.forEach(function(item) {
            found = found || (item.wzName === name ? item : null);
        });
        return found;
    }
    element.prototype.loadChild = function(child) {
        var ok = false, name = child.n.toLowerCase();
        if (name === '<') {
            return this.wzLoadToChildColl(child, _md.element, this.elements);
        }
        if (name === 'vue') {
            return this.wzLoadToChildColl(child, _md.vue, this.elements);
        }
        if (name === '::style') {
            return this.wzLoadToChildColl(child, _md.cssInclude, this.elements);
        }
        if (name === '::script') {
            return this.wzLoadToChildColl(child, _md.jsInclude, this.elements);
        }
        if (name === '::template') {
            return this.wzLoadToChildColl(child, _md.htmlInclude, this.elements);
        }
        else if (name === '::scriptts') {
            return this.wzLoadToChildColl(child, _md.tsInclude, this.elements);
        }
        if (name === '::script-ts') {
            return this.wzLoadToChildColl(child, _md.tsInclude, this.elements);
        }
        ok = _md.comment.prototype.loadChild.call(this, child);
        return ok;
    }
    element.prototype.loadFromNode = function(node) {
        node.children.forEach((item) => {
            var loaded = this.loadChild(item);
            if (!loaded) {
                throw new _md.vueModelException("Tag not recognized: " + item.n, item, this);
            }
        });
    }
    element.prototype.wzVerify = function(ctx) {
        this.elements.forEach((item) => {
            item.wzVerify(ctx);
        });
        _md.comment.prototype.wzVerify.call(this, ctx);
    }
    element.prototype.wzInitialize = function(ctx) {
        this.elements.forEach((item) => {
            item.wzInitialize(ctx);
        });
        _md.comment.prototype.wzInitialize.call(this, ctx);
    }
    return element;
})(comment);

_md.element = element;
/**
    element vue
     The root element
*/
var vue = (function (element) {
    _inherits(vue, element);
    function vue(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(vue.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, vue);
        this.wzElement = "vue";
    }
    return vue;
})(element);

_md.vue = vue;
// element htmlInclude
var htmlInclude = (function (element) {
    _inherits(htmlInclude, element);
    function htmlInclude(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(htmlInclude.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, htmlInclude);
        this.wzElement = "htmlInclude";
        this.html_html_items = [];
    }
    htmlInclude.prototype.loadChild = function(child) {
        var ok = false, name = child.n.toLowerCase();
        if (name === 'html') {
            // generated by wizzi/lib/wizzi/models/bootstrap/t/wfschema/t/element_load;
            this.html_html_items.push(child);
            var err, wizziModel;
            this.wzRoot().wzFactory.loadModelFromMtree( //;
                'html',  //;
                { nodes: [ child ], loadHistory: this.wzRoot().loadHistory }, //;
                function(cberr, cbwizziModel) { //;
                    err = cberr;
                    wizziModel = cbwizziModel;
                });
            this.get_html = function(callback) { //;
                // We must wait until the async loadModelFromMtree(..) has returned a wizziModel or an err;
                var iv = setInterval(function() { //;
                    if (err || wizziModel) { //;
                        clearInterval(iv);
                        if (callback) { //;
                            callback(err, wizziModel);
                            callback = null;
                        } //;
                    } //;
                }, 100);
            };
            return true;
        }
        ok = _md.element.prototype.loadChild.call(this, child);
        return ok;
    }
    htmlInclude.prototype.loadFromNode = function(node) {
        node.children.forEach((item) => {
            var loaded = this.loadChild(item);
            if (!loaded) {
                throw new _md.vueModelException("Tag not recognized: " + item.n, item, this);
            }
        });
    }
    return htmlInclude;
})(element);

_md.htmlInclude = htmlInclude;
// element jsInclude
var jsInclude = (function (element) {
    _inherits(jsInclude, element);
    function jsInclude(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(jsInclude.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, jsInclude);
        this.wzElement = "jsInclude";
        this.js_module_items = [];
    }
    jsInclude.prototype.loadChild = function(child) {
        var ok = false, name = child.n.toLowerCase();
        if (name === 'module') {
            // generated by wizzi/lib/wizzi/models/bootstrap/t/wfschema/t/element_load;
            this.js_module_items.push(child);
            var err, wizziModel;
            this.wzRoot().wzFactory.loadModelFromMtree( //;
                'js',  //;
                { nodes: [ child ], loadHistory: this.wzRoot().loadHistory }, //;
                function(cberr, cbwizziModel) { //;
                    err = cberr;
                    wizziModel = cbwizziModel;
                });
            this.get_js = function(callback) { //;
                // We must wait until the async loadModelFromMtree(..) has returned a wizziModel or an err;
                var iv = setInterval(function() { //;
                    if (err || wizziModel) { //;
                        clearInterval(iv);
                        if (callback) { //;
                            callback(err, wizziModel);
                            callback = null;
                        } //;
                    } //;
                }, 100);
            };
            return true;
        }
        ok = _md.element.prototype.loadChild.call(this, child);
        return ok;
    }
    jsInclude.prototype.loadFromNode = function(node) {
        node.children.forEach((item) => {
            var loaded = this.loadChild(item);
            if (!loaded) {
                throw new _md.vueModelException("Tag not recognized: " + item.n, item, this);
            }
        });
    }
    return jsInclude;
})(element);

_md.jsInclude = jsInclude;
// element tsInclude
var tsInclude = (function (element) {
    _inherits(tsInclude, element);
    function tsInclude(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(tsInclude.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, tsInclude);
        this.wzElement = "tsInclude";
        this.ts_module_items = [];
    }
    tsInclude.prototype.loadChild = function(child) {
        var ok = false, name = child.n.toLowerCase();
        if (name === 'module') {
            // generated by wizzi/lib/wizzi/models/bootstrap/t/wfschema/t/element_load;
            this.ts_module_items.push(child);
            var err, wizziModel;
            this.wzRoot().wzFactory.loadModelFromMtree( //;
                'ts',  //;
                { nodes: [ child ], loadHistory: this.wzRoot().loadHistory }, //;
                function(cberr, cbwizziModel) { //;
                    err = cberr;
                    wizziModel = cbwizziModel;
                });
            this.get_ts = function(callback) { //;
                // We must wait until the async loadModelFromMtree(..) has returned a wizziModel or an err;
                var iv = setInterval(function() { //;
                    if (err || wizziModel) { //;
                        clearInterval(iv);
                        if (callback) { //;
                            callback(err, wizziModel);
                            callback = null;
                        } //;
                    } //;
                }, 100);
            };
            return true;
        }
        ok = _md.element.prototype.loadChild.call(this, child);
        return ok;
    }
    tsInclude.prototype.loadFromNode = function(node) {
        node.children.forEach((item) => {
            var loaded = this.loadChild(item);
            if (!loaded) {
                throw new _md.vueModelException("Tag not recognized: " + item.n, item, this);
            }
        });
    }
    return tsInclude;
})(element);

_md.tsInclude = tsInclude;
// element cssInclude
var cssInclude = (function (element) {
    _inherits(cssInclude, element);
    function cssInclude(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(cssInclude.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, cssInclude);
        this.wzElement = "cssInclude";
        this.scoped = false;
        this.css_css_items = [];
    }
    cssInclude.prototype.loadChild = function(child) {
        var ok = false, name = child.n.toLowerCase();
        if (name === 'css') {
            // generated by wizzi/lib/wizzi/models/bootstrap/t/wfschema/t/element_load;
            this.css_css_items.push(child);
            var err, wizziModel;
            this.wzRoot().wzFactory.loadModelFromMtree( //;
                'css',  //;
                { nodes: [ child ], loadHistory: this.wzRoot().loadHistory }, //;
                function(cberr, cbwizziModel) { //;
                    err = cberr;
                    wizziModel = cbwizziModel;
                });
            this.get_css = function(callback) { //;
                // We must wait until the async loadModelFromMtree(..) has returned a wizziModel or an err;
                var iv = setInterval(function() { //;
                    if (err || wizziModel) { //;
                        clearInterval(iv);
                        if (callback) { //;
                            callback(err, wizziModel);
                            callback = null;
                        } //;
                    } //;
                }, 100);
            };
            return true;
        }
        if (name === 'scoped') {
            this.scoped = parseboolean(child.v, true, child); return true;
        }
        ok = _md.element.prototype.loadChild.call(this, child);
        return ok;
    }
    cssInclude.prototype.loadFromNode = function(node) {
        node.children.forEach((item) => {
            var loaded = this.loadChild(item);
            if (!loaded) {
                throw new _md.vueModelException("Tag not recognized: " + item.n, item, this);
            }
        });
    }
    return cssInclude;
})(element);

_md.cssInclude = cssInclude;
_md.__tagElementMapping = { '#': 'comment', '<': 'element', '::template': 'htmlInclude', '::script': 'jsInclude', '::script-ts': 'tsInclude', '::scriptts': 'tsInclude', '::style': 'cssInclude' };
// model/replaceUnknownElement( )
var vueModelException = (function () {
    function vueModelException(message, node, instance) {
        _classCallCheck(this, vueModelException);
        // VIA 14/2/21 (pollutes log) set this.node = node
        // VIA 14/2/21 (pollutes log) set this.instance = instance
        if (node && instance) {
            this.message = message + ', wzElement: ' + node.wzElement + ', wzName:' + (node.wzName || '') + ', row:' + node.r + ', col:' + node.c + ', source:' + instance.wzSourceFilepath(node.u);
            this.errorLines = instance.wzSourceErrorLines(node, message);
        }
        else if (instance) {
            this.message = message + instance.wzSourceLineInfo.toString(instance);
        }
        else {
            this.message = message;
        }
        console.log('message', this.message);
        this.stack = (new Error()).stack;
    }
    vueModelException.prototype.toString = function() {
        var msg = [];
        msg.push(chalk.red('Error: ' + this.message));
        msg.push(chalk.red('  name: vueModelException'));
        if (this.node) {
            msg.push(chalk.yellow('  row: ' + this.node.r + ', col: ' + this.node.c));
        }
        if (this.instance) {
            if (this.node) {
                msg.push(chalk.yellow('  uri: ' + this.instance.wzSourceFilepath(this.node.u)));
            }
            else {
                msg.push(chalk.yellow('  uri: ' + this.instance.wzSourceLineInfo.toString(this.instance)));
            }
        }
        else {
            msg.push(chalk.yellow('  uri: unknown'));
        }
        if (this.errorLines) {
            var i, i_items=this.errorLines, i_len=this.errorLines.length, line;
            for (i=0; i<i_len; i++) {
                line = this.errorLines[i];
                msg.push(chalk.yellow('  ' + line));
            }
        }
        return msg.join('\n');
    }
    return vueModelException;
})();

_md.vueModelException = vueModelException;
var vueContext = (function () {
    function vueContext() {
        _classCallCheck(this, vueContext);
        this.validationErrors = [];
    }
    vueContext.prototype.schemaIsValid = function() {
        return this.validationErrors.length == 0;
    }
    vueContext.prototype.addError = function(message, node) {
        var at = node ? ' At ' + node.wzSourceLineInfo.toString(node) : '';
        this.validationErrors.push(message + at);
    }
    return vueContext;
})();

_md.vueContext = vueContext;
function parseboolean(value, defaultValue, node) {
    if (isEmpty( value )) {
        return defaultValue;
    }
    if (!isBoolean(value)) {
        throw new vueModelException('Must be a boolean value (\"true\" or \"false\"), got:' + value, node);
    }
    return value === 'true' ? true : false;
}
function isString(value) {
    return (typeof value === 'string' || value instanceof String);
}
function isEmpty(value) {
    return !isString( value ) || value.length === 0;
}
function isBoolean(value) {
    return value === 'true' || value === 'false';
}

