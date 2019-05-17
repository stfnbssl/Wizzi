/*
    artifact generator: C:\My\wizzi\wizzi-mono\node_modules\wizzi-legacy-v5\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: c:\my\wizzi\wizzi-mono\node_modules\wizzi-core\lib\artifacts\wfschema\model\gen\ittf\wfschema-model.js.ittf
    utc time: Wed, 24 Apr 2019 06:06:06 GMT
*/
'use strict';
// generated by v5-wizzi-js.artifacts.js.module.main
function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var util = require('util');
var path = require('path');
var _ = require('lodash');
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
var tempBase = (function () {
    function tempBase(name, sourceLineInfo) {
        _classCallCheck(this, tempBase);
        this.wzName = name || '';
        this.wzParent = null;
        this.wzSourceLineInfo = sourceLineInfo;
        this.wzChildren = [];
    }
    tempBase.prototype.wzRoot = function() {
        return this.wzParent == null ? this : this.wzParent.wzRoot();
    }
    tempBase.prototype.wzSourceFilepath = function(sourceKey) {
        return this.wzRoot().loadHistory.getIttfDocumentUri(sourceKey);
    }
    tempBase.prototype.wzSourceErrorLines = function(node, message) {
        return this.wzRoot().loadHistory.getIttfDocumentErrorLines(node.u, {
                row: node.r, 
                col: node.c, 
                description: message
            }, true);
    }
    tempBase.prototype.wzVerify = function() {
    }
    tempBase.prototype.wzInitialize = function() {
    }
    tempBase.prototype.wzInitializeAsync = function(ctx, callback) {
        callback(null);
    }
    tempBase.prototype.wzAddChild = function(node) {
        node.wzParent = this;
        this.wzChildren.push(node);
    }
    tempBase.prototype.wzAddChildToColl = function(node, coll) {
        node.wzParent = this;
        node.wzMoved = true;
        coll.push(node);
    }
    tempBase.prototype.wzMoveChildToColl = function(node, coll, fromColl) {
        var index = fromColl.indexOf(node);
        if (index < 0) {
            this.error('wzMoveChildToColl error. The from collection does not contain the node.', node);
        }
        fromColl.splice(index, 1);
        this.wzAddChildToColl(node, coll);
    }
    tempBase.prototype.wzLoadToChildColl = function(child, type, coll) {
        var item = new type(child.v, new wzSourceLineInfo(child.r, child.c, child.u));
        item.wzTag = child.n;
        item.wzParent = this;
        coll.push(item);
        if (item.loadFromNode) {
            item.loadFromNode(child);
        }
        return true;
    }
    tempBase.prototype.wzCreateChildColl = function(tag, name, type, coll) {
        var item = new type(name, this.wzSourceLineInfo);
        item.wzTag = tag;
        item.wzParent = this;
        item.wzCreated = true;
        coll.push(item);
        return item;
    }
    tempBase.prototype.wzLoadToChildren = function(child, type) {
        var item = new type(child.v, new wzSourceLineInfo(child.r, child.c, child.u));
        item.wzTag = child.n;
        item.wzParent = this;
        this.wzChildren.push(item);
        if (item.loadFromNode) {
            item.loadFromNode(child);
        }
        return true;
    }
    tempBase.prototype.wzLoadOneToOne = function(child, type, fieldName) {
        var item = new type(child.v, new wzSourceLineInfo(child.r, child.c, child.u));
        item.wzParent = this;
        this[fieldName] = item;
        if (item.loadFromNode) {
            item.loadFromNode(child);
        }
        return true;
    }
    tempBase.prototype.wzRemove = function(fromColl) {
        var index = fromColl.indexOf(this);
        if (index < 0) {
            this.error('wzRemove error. The from collection does not contain the node.', this);
        }
        fromColl.splice(index, 1);
    }
    tempBase.prototype.error = function(message, node) {
        throw new _md.tempModelException(message, node, this);
    }
    tempBase.prototype.toJsonProperties = function(result) {
        result.wzElement = this.wzElement;
        result.wzTag = this.wzTag;
        result.wzName = this.wzName;
    }
    tempBase.prototype.toJsonChildren = function(result) {
        if (this.wzChildren.length > 0) {
            var children = [];
            var i, i_items=this.wzChildren, i_len=this.wzChildren.length, item;
            for (i=0; i<i_len; i++) {
                item = this.wzChildren[i];
                children.push(item.toJson());
            }
            result.wzChildren = children;
        }
    }
    return tempBase;
})();

_md.tempBase = tempBase;
// element comment
var comment = (function (tempBase) {
    _inherits(comment, tempBase);
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
    comment.prototype.toJson = function() {
        var result = {};
        this.toJsonProperties(result);
        this.toJsonChildren(result);
        return result;
    }
    comment.prototype.toJsonProperties = function(result) {
        _md.tempBase.prototype.toJsonProperties.call(this, result);
        if (this.__jsonProps) {
            for (var k in this.__jsonProps) {
                result[k] = this.__jsonProps[k];
            }
        }
    }
    comment.prototype.toJsonChildren = function(result) {
        _md.tempBase.prototype.toJsonChildren.call(this, result);
        var items, item;
        items = [];
        var i, i_items=this.comments, i_len=this.comments.length, item;
        for (i=0; i<i_len; i++) {
            item = this.comments[i];
            items.push(item.toJson());
        }
        result['comments'] = items;
    }
    comment.prototype.loadChild = function(child) {
        // Make test case insensitive
        var item,
            ok = false,
            name = child.n.toLowerCase(),
            _l = name.length,
            _ch = name[0];
        if (_l == 1 && _ch == '#') {
            if (name === '#') {
                return this.wzLoadToChildColl(child, _md.comment, this.comments);
            }
        }
        return ok;
    }
    comment.prototype.loadFromNode = function(node) {
        var loaded = false;
        // TODO VIA after transition to node.children
        var children = node.children;
        var i, i_items=children, i_len=children.length, item;
        for (i=0; i<i_len; i++) {
            item = children[i];
            loaded = this.loadChild(item);
            if (!loaded) {
                throw new _md.tempModelException("Tag not recognized: " + item.n, item, this);
            }
        }
    }
    comment.prototype.wzVerify = function(ctx) {
        var i, i_items=this.comments, i_len=this.comments.length, item;
        for (i=0; i<i_len; i++) {
            item = this.comments[i];
            item.wzVerify(ctx);
        }
        _md.tempBase.prototype.wzVerify.call(this, ctx);
    }
    comment.prototype.wzInitialize = function(ctx) {
        var i, i_items=this.comments, i_len=this.comments.length, item;
        for (i=0; i<i_len; i++) {
            item = this.comments[i];
            item.wzInitialize(ctx);
        }
        _md.tempBase.prototype.wzInitialize.call(this, ctx);
    }
    return comment;
})(tempBase);

_md.comment = comment;
// element commentable
var commentable = (function (tempBase) {
    _inherits(commentable, tempBase);
    function commentable(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(commentable.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, commentable);
        this.wzElement = "commentable";
        // relation comment
        this.comments = [];
    }
    commentable.prototype.addComment = function(name, sourceLineInfo) {
        var retval = new _md.comment(name, sourceLineInfo);
        retval.wzParent = this;
        this.comments.push(retval);
        return retval;
    }
    commentable.prototype.getComment = function(name) {
        var found = null;
        this.comments.forEach(function(item) {
            found = found || (item.wzName === name ? item : null);
        });
        return found;
    }
    commentable.prototype.toJson = function() {
        var result = {};
        this.toJsonProperties(result);
        this.toJsonChildren(result);
        return result;
    }
    commentable.prototype.toJsonProperties = function(result) {
        _md.tempBase.prototype.toJsonProperties.call(this, result);
        if (this.__jsonProps) {
            for (var k in this.__jsonProps) {
                result[k] = this.__jsonProps[k];
            }
        }
    }
    commentable.prototype.toJsonChildren = function(result) {
        _md.tempBase.prototype.toJsonChildren.call(this, result);
        var items, item;
        items = [];
        var i, i_items=this.comments, i_len=this.comments.length, item;
        for (i=0; i<i_len; i++) {
            item = this.comments[i];
            items.push(item.toJson());
        }
        result['comments'] = items;
    }
    commentable.prototype.loadChild = function(child) {
        // Make test case insensitive
        var item,
            ok = false,
            name = child.n.toLowerCase(),
            _l = name.length,
            _ch = name[0];
        if (_l == 1 && _ch == '#') {
            if (name === '#') {
                return this.wzLoadToChildColl(child, _md.comment, this.comments);
            }
        }
        return ok;
    }
    commentable.prototype.loadFromNode = function(node) {
        var loaded = false;
        // TODO VIA after transition to node.children
        var children = node.children;
        var i, i_items=children, i_len=children.length, item;
        for (i=0; i<i_len; i++) {
            item = children[i];
            loaded = this.loadChild(item);
            if (!loaded) {
                throw new _md.tempModelException("Tag not recognized: " + item.n, item, this);
            }
        }
    }
    commentable.prototype.wzVerify = function(ctx) {
        var i, i_items=this.comments, i_len=this.comments.length, item;
        for (i=0; i<i_len; i++) {
            item = this.comments[i];
            item.wzVerify(ctx);
        }
        _md.tempBase.prototype.wzVerify.call(this, ctx);
    }
    commentable.prototype.wzInitialize = function(ctx) {
        var i, i_items=this.comments, i_len=this.comments.length, item;
        for (i=0; i<i_len; i++) {
            item = this.comments[i];
            item.wzInitialize(ctx);
        }
        _md.tempBase.prototype.wzInitialize.call(this, ctx);
    }
    return commentable;
})(tempBase);

_md.commentable = commentable;
/**
    element temp
     The root tag of the temp schema.
*/
var temp = (function (commentable) {
    _inherits(temp, commentable);
    function temp(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(temp.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, temp);
        this.wzElement = "temp";
        // relation item
        this.items = [];
    }
    temp.prototype.addItem = function(name, sourceLineInfo) {
        var retval = new _md.item(name, sourceLineInfo);
        retval.wzParent = this;
        this.items.push(retval);
        return retval;
    }
    temp.prototype.getItem = function(name) {
        var found = null;
        this.items.forEach(function(item) {
            found = found || (item.wzName === name ? item : null);
        });
        return found;
    }
    temp.prototype.toJson = function() {
        var result = {};
        this.toJsonProperties(result);
        this.toJsonChildren(result);
        return result;
    }
    temp.prototype.toJsonProperties = function(result) {
        _md.commentable.prototype.toJsonProperties.call(this, result);
        if (this.__jsonProps) {
            for (var k in this.__jsonProps) {
                result[k] = this.__jsonProps[k];
            }
        }
    }
    temp.prototype.toJsonChildren = function(result) {
        _md.commentable.prototype.toJsonChildren.call(this, result);
        var items, item;
        items = [];
        var i, i_items=this.items, i_len=this.items.length, item;
        for (i=0; i<i_len; i++) {
            item = this.items[i];
            items.push(item.toJson());
        }
        result['items'] = items;
    }
    temp.prototype.loadChild = function(child) {
        // Make test case insensitive
        var item,
            ok = false,
            name = child.n.toLowerCase(),
            _l = name.length,
            _ch = name[0];
        if (_l == 4 && _ch == 'i') {
            if (name === 'item') {
                return this.wzLoadToChildColl(child, _md.item, this.items);
            }
        }
        ok = _md.commentable.prototype.loadChild.call(this, child);
        return ok;
    }
    temp.prototype.loadFromNode = function(node) {
        var loaded = false;
        // TODO VIA after transition to node.children
        var children = node.children;
        var i, i_items=children, i_len=children.length, item;
        for (i=0; i<i_len; i++) {
            item = children[i];
            loaded = this.loadChild(item);
            if (!loaded) {
                throw new _md.tempModelException("Tag not recognized: " + item.n, item, this);
            }
        }
    }
    temp.prototype.wzVerify = function(ctx) {
        var i, i_items=this.items, i_len=this.items.length, item;
        for (i=0; i<i_len; i++) {
            item = this.items[i];
            item.wzVerify(ctx);
        }
        _md.commentable.prototype.wzVerify.call(this, ctx);
    }
    temp.prototype.wzInitialize = function(ctx) {
        var i, i_items=this.items, i_len=this.items.length, item;
        for (i=0; i<i_len; i++) {
            item = this.items[i];
            item.wzInitialize(ctx);
        }
        _md.commentable.prototype.wzInitialize.call(this, ctx);
    }
    return temp;
})(commentable);

_md.temp = temp;
/**
    element item
     A wizzi schema comment is considered a markdown text and
     can contain markdown synthax
    
     ### Title 1
     ## Title 2
     # Title 3
    
     An element comment can be multiline in a single paragraph using the ittf continuation tag 'slash'b or '\b' or '\\b'.
     Could have a second paragraph line ...
        with an inner line ...
            and more ...
                and more deep lines.
     And can embed an ittf ...
     [*ittf
   function hello
       param name
       log 'hello ' + name
       _ go
           @ "charlie"
     And embed code
     ```ruby
     require 'redcarpet'
     markdown = Redcarpet.new("Hello World!")
     puts markdown.to_html
     ```
*/
var item = (function (commentable) {
    _inherits(item, commentable);
    function item(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(item.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, item);
        this.wzElement = "item";
    }
    item.prototype.toJson = function() {
        var result = {};
        this.toJsonProperties(result);
        this.toJsonChildren(result);
        return result;
    }
    item.prototype.toJsonProperties = function(result) {
        _md.commentable.prototype.toJsonProperties.call(this, result);
        if (this.__jsonProps) {
            for (var k in this.__jsonProps) {
                result[k] = this.__jsonProps[k];
            }
        }
    }
    item.prototype.toJsonChildren = function(result) {
        _md.commentable.prototype.toJsonChildren.call(this, result);
    }
    return item;
})(commentable);

_md.item = item;
_md.__tagElementMapping = { '#': 'comment' };
// model/replaceUnknownElement( )
var tempModelException = (function () {
    function tempModelException(message, node, instance) {
        _classCallCheck(this, tempModelException);
        // TODO node seems superflous
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
        this.node = node;
    }
    return tempModelException;
})();

_md.tempModelException = tempModelException;
var tempContext = (function () {
    function tempContext() {
        _classCallCheck(this, tempContext);
        this.validationErrors = [];
    }
    tempContext.prototype.schemaIsValid = function() {
        return this.validationErrors.length == 0;
    }
    tempContext.prototype.addError = function(message, node) {
        var at = node ? ' At ' + node.wzSourceLineInfo.toString(node) : '';
        this.validationErrors.push(message + at);
    }
    return tempContext;
})();

_md.tempContext = tempContext;

