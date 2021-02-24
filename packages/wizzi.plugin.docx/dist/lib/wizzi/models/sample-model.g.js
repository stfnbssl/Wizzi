/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\node_modules\wizzi-legacy-v5\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: c:\my\wizzi\stfnbssl\wizzi\node_modules\wizzi-core\lib\artifacts\wfschema\model\gen\ittf\wfschema-model.js.ittf
    utc time: Wed, 24 Feb 2021 15:18:30 GMT
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
var sampleBase = (function () {
    function sampleBase(name, sourceLineInfo) {
        _classCallCheck(this, sampleBase);
        this.wzName = name || '';
        this.wzParent = null;
        this.wzSourceLineInfo = sourceLineInfo;
        this.wzChildren = [];
    }
    sampleBase.prototype.wzRoot = function() {
        return this.wzParent == null ? this : this.wzParent.wzRoot();
    }
    sampleBase.prototype.wzSourceFilepath = function(sourceKey) {
        var sk = sourceKey || this.wzSourceLineInfo.sourceKey;
        return this.wzRoot().loadHistory.getIttfDocumentUri(sk);
    }
    sampleBase.prototype.wzSourceErrorLines = function(node, message) {
        return this.wzRoot().loadHistory.getIttfDocumentErrorLines(node.u, {
                row: node.r, 
                col: node.c, 
                description: message
            }, true);
    }
    sampleBase.prototype.wzVerify = function() {
    }
    sampleBase.prototype.wzInitialize = function() {
    }
    sampleBase.prototype.wzInitializeAsync = function(ctx, callback) {
        callback(null);
    }
    sampleBase.prototype.wzAddChild = function(node) {
        node.wzParent = this;
        this.wzChildren.push(node);
    }
    sampleBase.prototype.wzAddChildToColl = function(node, coll) {
        node.wzParent = this;
        node.wzMoved = true;
        coll.push(node);
    }
    sampleBase.prototype.wzMoveChildToColl = function(node, coll, fromColl) {
        var index = fromColl.indexOf(node);
        if (index < 0) {
            this.error('wzMoveChildToColl error. The from collection does not contain the node.', node);
        }
        fromColl.splice(index, 1);
        this.wzAddChildToColl(node, coll);
    }
    sampleBase.prototype.wzLoadToChildColl = function(child, type, coll) {
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
    sampleBase.prototype.wzCreateChildColl = function(tag, name, type, coll) {
        var item = new type(name, this.wzSourceLineInfo);
        item.wzTag = tag;
        item.wzParent = this;
        item.wzCreated = true;
        coll.push(item);
        return item;
    }
    sampleBase.prototype.wzLoadToChildren = function(child, type) {
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
    sampleBase.prototype.wzLoadOneToOne = function(child, type, fieldName) {
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
    sampleBase.prototype.wzRemove = function(fromColl) {
        var index = fromColl.indexOf(this);
        if (index < 0) {
            this.error('wzRemove error. The from collection does not contain the node.', this);
        }
        fromColl.splice(index, 1);
    }
    sampleBase.prototype.error = function(message, node) {
        throw new _md.sampleModelException(message, node, this);
    }
    return sampleBase;
})();

_md.sampleBase = sampleBase;
// element node
var node = (function (sampleBase) {
    _inherits(node, sampleBase);
    function node(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(node.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, node);
        this.wzElement = "node";
        // relation node
        this.nodes = [];
    }
    node.prototype.addNode = function(name, sourceLineInfo) {
        var retval = new _md.node(name, sourceLineInfo);
        retval.wzParent = this;
        this.nodes.push(retval);
        return retval;
    }
    node.prototype.getNode = function(name) {
        var found = null;
        this.nodes.forEach(function(item) {
            found = found || (item.wzName === name ? item : null);
        });
        return found;
    }
    node.prototype.loadChild = function(child) {
        var name = child.n.toLowerCase();
        if (name === '+') {
            return this.wzLoadToChildColl(child, _md.text, this.nodes);
        }
        if (name === 'b') {
            return this.wzLoadToChildColl(child, _md.bold, this.nodes);
        }
        if (name === 'i') {
            return this.wzLoadToChildColl(child, _md.italic, this.nodes);
        }
        if (name === 'p') {
            return this.wzLoadToChildColl(child, _md.p, this.nodes);
        }
        if (name === 'br') {
            return this.wzLoadToChildColl(child, _md.xbreak, this.nodes);
        }
        if (name === 'h1') {
            return this.wzLoadToChildColl(child, _md.h1, this.nodes);
        }
        else if (name === 'h2') {
            return this.wzLoadToChildColl(child, _md.h2, this.nodes);
        }
        else if (name === 'h3') {
            return this.wzLoadToChildColl(child, _md.h3, this.nodes);
        }
        else if (name === 'h4') {
            return this.wzLoadToChildColl(child, _md.h4, this.nodes);
        }
        else if (name === 'h5') {
            return this.wzLoadToChildColl(child, _md.h5, this.nodes);
        }
        else if (name === 'h6') {
            return this.wzLoadToChildColl(child, _md.h6, this.nodes);
        }
        if (name === 'tr') {
            return this.wzLoadToChildColl(child, _md.tr, this.nodes);
        }
        else if (name === 'td') {
            return this.wzLoadToChildColl(child, _md.td, this.nodes);
        }
        if (name === 'run') {
            return this.wzLoadToChildColl(child, _md.run, this.nodes);
        }
        if (name === 'bold') {
            return this.wzLoadToChildColl(child, _md.boldProp, this.nodes);
        }
        if (name === 'font') {
            return this.wzLoadToChildColl(child, _md.font, this.nodes);
        }
        else if (name === 'fill') {
            return this.wzLoadToChildColl(child, _md.fill, this.nodes);
        }
        if (name === 'node') {
            return this.wzLoadToChildColl(child, _md.node, this.nodes);
        }
        else if (name === 'name') {
            return this.wzLoadToChildColl(child, _md.xname, this.nodes);
        }
        else if (name === 'next') {
            return this.wzLoadToChildColl(child, _md.next, this.nodes);
        }
        if (name === 'size') {
            return this.wzLoadToChildColl(child, _md.size, this.nodes);
        }
        if (name === 'type') {
            return this.wzLoadToChildColl(child, _md.xtype, this.nodes);
        }
        if (name === 'color') {
            return this.wzLoadToChildColl(child, _md.color, this.nodes);
        }
        if (name === 'style') {
            return this.wzLoadToChildColl(child, _md.style, this.nodes);
        }
        if (name === 'table') {
            return this.wzLoadToChildColl(child, _md.table, this.nodes);
        }
        if (name === 'width') {
            return this.wzLoadToChildColl(child, _md.width, this.nodes);
        }
        if (name === 'center') {
            return this.wzLoadToChildColl(child, _md.center, this.nodes);
        }
        if (name === 'italic') {
            return this.wzLoadToChildColl(child, _md.italicProp, this.nodes);
        }
        if (name === 'sample') {
            return this.wzLoadToChildColl(child, _md.sample, this.nodes);
        }
        else if (name === 'strike') {
            return this.wzLoadToChildColl(child, _md.strike, this.nodes);
        }
        else if (name === 'styles') {
            return this.wzLoadToChildColl(child, _md.styles, this.nodes);
        }
        if (name === 'allcaps') {
            return this.wzLoadToChildColl(child, _md.allCaps, this.nodes);
        }
        if (name === 'basedon') {
            return this.wzLoadToChildColl(child, _md.basedOn, this.nodes);
        }
        if (name === 'default') {
            return this.wzLoadToChildColl(child, _md.xdefault, this.nodes);
        }
        if (name === 'section') {
            return this.wzLoadToChildColl(child, _md.section, this.nodes);
        }
        else if (name === 'shading') {
            return this.wzLoadToChildColl(child, _md.shading, this.nodes);
        }
        if (name === 'tabstop') {
            return this.wzLoadToChildColl(child, _md.tabStop, this.nodes);
        }
        if (name === 'bullet_0') {
            return this.wzLoadToChildColl(child, _md.bullet_0, this.nodes);
        }
        if (name === 'position') {
            return this.wzLoadToChildColl(child, _md.position, this.nodes);
        }
        if (name === 'styledef') {
            return this.wzLoadToChildColl(child, _md.styleDef, this.nodes);
        }
        if (name === 'highlight') {
            return this.wzLoadToChildColl(child, _md.highlight, this.nodes);
        }
        if (name === 'subscript') {
            return this.wzLoadToChildColl(child, _md.subScript, this.nodes);
        }
        else if (name === 'smallcaps') {
            return this.wzLoadToChildColl(child, _md.smallCaps, this.nodes);
        }
        else if (name === 'smallcaps') {
            return this.wzLoadToChildColl(child, _md.smallCaps, this.nodes);
        }
        else if (name === 'style-def') {
            return this.wzLoadToChildColl(child, _md.styleDef, this.nodes);
        }
        if (name === 'underline') {
            return this.wzLoadToChildColl(child, _md.underline, this.nodes);
        }
        if (name === 'superscript') {
            return this.wzLoadToChildColl(child, _md.superScript, this.nodes);
        }
        if (name === 'doublestrike') {
            return this.wzLoadToChildColl(child, _md.doubleStrike, this.nodes);
        }
        if (name === 'emphasismark') {
            return this.wzLoadToChildColl(child, _md.emphasisMark, this.nodes);
        }
        if (name === 'paragraphstyles') {
            return this.wzLoadToChildColl(child, _md.paragraphStyles, this.nodes);
        }
        if (name === 'paragraph-styles') {
            return this.wzLoadToChildColl(child, _md.paragraphStyles, this.nodes);
        }
        return false;
    }
    node.prototype.loadFromNode = function(node) {
        node.children.forEach((item) => {
            var loaded = this.loadChild(item);
            if (!loaded) {
                item.v = item.n + ' ' + item.v;
                item.n = 'text';
                loaded = this.loadChild(item);
                if (!loaded) {
                    throw new _md.sampleModelException("Tag not recognized: " + item.n, item, this);
                }
            }
        });
    }
    node.prototype.wzVerify = function(ctx) {
        this.nodes.forEach((item) => {
            item.wzVerify(ctx);
        });
        _md.sampleBase.prototype.wzVerify.call(this, ctx);
    }
    node.prototype.wzInitialize = function(ctx) {
        this.nodes.forEach((item) => {
            item.wzInitialize(ctx);
        });
        _md.sampleBase.prototype.wzInitialize.call(this, ctx);
    }
    return node;
})(sampleBase);

_md.node = node;
// element sample
var sample = (function (node) {
    _inherits(sample, node);
    function sample(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(sample.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, sample);
        this.wzElement = "sample";
    }
    return sample;
})(node);

_md.sample = sample;
// element xname
var xname = (function (node) {
    _inherits(xname, node);
    function xname(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(xname.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, xname);
        this.wzElement = "xname";
    }
    return xname;
})(node);

_md.xname = xname;
// element section
var section = (function (node) {
    _inherits(section, node);
    function section(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(section.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, section);
        this.wzElement = "section";
    }
    return section;
})(node);

_md.section = section;
// element h1
var h1 = (function (node) {
    _inherits(h1, node);
    function h1(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(h1.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, h1);
        this.wzElement = "h1";
    }
    return h1;
})(node);

_md.h1 = h1;
// element h2
var h2 = (function (node) {
    _inherits(h2, node);
    function h2(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(h2.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, h2);
        this.wzElement = "h2";
    }
    return h2;
})(node);

_md.h2 = h2;
// element h3
var h3 = (function (node) {
    _inherits(h3, node);
    function h3(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(h3.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, h3);
        this.wzElement = "h3";
    }
    return h3;
})(node);

_md.h3 = h3;
// element h4
var h4 = (function (node) {
    _inherits(h4, node);
    function h4(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(h4.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, h4);
        this.wzElement = "h4";
    }
    return h4;
})(node);

_md.h4 = h4;
// element h5
var h5 = (function (node) {
    _inherits(h5, node);
    function h5(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(h5.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, h5);
        this.wzElement = "h5";
    }
    return h5;
})(node);

_md.h5 = h5;
// element h6
var h6 = (function (node) {
    _inherits(h6, node);
    function h6(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(h6.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, h6);
        this.wzElement = "h6";
    }
    return h6;
})(node);

_md.h6 = h6;
// element p
var p = (function (node) {
    _inherits(p, node);
    function p(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(p.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, p);
        this.wzElement = "p";
    }
    return p;
})(node);

_md.p = p;
// element xbreak
var xbreak = (function (node) {
    _inherits(xbreak, node);
    function xbreak(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(xbreak.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, xbreak);
        this.wzElement = "xbreak";
    }
    return xbreak;
})(node);

_md.xbreak = xbreak;
// element text
var text = (function (node) {
    _inherits(text, node);
    function text(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(text.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, text);
        this.wzElement = "text";
    }
    return text;
})(node);

_md.text = text;
// element bold
var bold = (function (node) {
    _inherits(bold, node);
    function bold(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(bold.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, bold);
        this.wzElement = "bold";
    }
    return bold;
})(node);

_md.bold = bold;
// element boldProp
var boldProp = (function (node) {
    _inherits(boldProp, node);
    function boldProp(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(boldProp.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, boldProp);
        this.wzElement = "boldProp";
    }
    return boldProp;
})(node);

_md.boldProp = boldProp;
// element italic
var italic = (function (node) {
    _inherits(italic, node);
    function italic(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(italic.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, italic);
        this.wzElement = "italic";
    }
    return italic;
})(node);

_md.italic = italic;
// element italicProp
var italicProp = (function (node) {
    _inherits(italicProp, node);
    function italicProp(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(italicProp.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, italicProp);
        this.wzElement = "italicProp";
    }
    return italicProp;
})(node);

_md.italicProp = italicProp;
// element underline
var underline = (function (node) {
    _inherits(underline, node);
    function underline(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(underline.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, underline);
        this.wzElement = "underline";
    }
    return underline;
})(node);

_md.underline = underline;
// element emphasisMark
var emphasisMark = (function (node) {
    _inherits(emphasisMark, node);
    function emphasisMark(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(emphasisMark.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, emphasisMark);
        this.wzElement = "emphasisMark";
    }
    return emphasisMark;
})(node);

_md.emphasisMark = emphasisMark;
// element strike
var strike = (function (node) {
    _inherits(strike, node);
    function strike(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(strike.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, strike);
        this.wzElement = "strike";
    }
    return strike;
})(node);

_md.strike = strike;
// element doubleStrike
var doubleStrike = (function (node) {
    _inherits(doubleStrike, node);
    function doubleStrike(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(doubleStrike.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, doubleStrike);
        this.wzElement = "doubleStrike";
    }
    return doubleStrike;
})(node);

_md.doubleStrike = doubleStrike;
// element superScript
var superScript = (function (node) {
    _inherits(superScript, node);
    function superScript(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(superScript.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, superScript);
        this.wzElement = "superScript";
    }
    return superScript;
})(node);

_md.superScript = superScript;
// element subScript
var subScript = (function (node) {
    _inherits(subScript, node);
    function subScript(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(subScript.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, subScript);
        this.wzElement = "subScript";
    }
    return subScript;
})(node);

_md.subScript = subScript;
// element smallCaps
var smallCaps = (function (node) {
    _inherits(smallCaps, node);
    function smallCaps(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(smallCaps.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, smallCaps);
        this.wzElement = "smallCaps";
    }
    return smallCaps;
})(node);

_md.smallCaps = smallCaps;
// element allCaps
var allCaps = (function (node) {
    _inherits(allCaps, node);
    function allCaps(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(allCaps.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, allCaps);
        this.wzElement = "allCaps";
    }
    return allCaps;
})(node);

_md.allCaps = allCaps;
// element smallCaps
var smallCaps = (function (node) {
    _inherits(smallCaps, node);
    function smallCaps(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(smallCaps.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, smallCaps);
        this.wzElement = "smallCaps";
    }
    return smallCaps;
})(node);

_md.smallCaps = smallCaps;
// element font
var font = (function (node) {
    _inherits(font, node);
    function font(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(font.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, font);
        this.wzElement = "font";
    }
    return font;
})(node);

_md.font = font;
// element color
var color = (function (node) {
    _inherits(color, node);
    function color(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(color.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, color);
        this.wzElement = "color";
    }
    return color;
})(node);

_md.color = color;
// element fill
var fill = (function (node) {
    _inherits(fill, node);
    function fill(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(fill.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, fill);
        this.wzElement = "fill";
    }
    return fill;
})(node);

_md.fill = fill;
// element size
var size = (function (node) {
    _inherits(size, node);
    function size(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(size.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, size);
        this.wzElement = "size";
    }
    return size;
})(node);

_md.size = size;
// element width
var width = (function (node) {
    _inherits(width, node);
    function width(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(width.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, width);
        this.wzElement = "width";
    }
    return width;
})(node);

_md.width = width;
// element shading
var shading = (function (node) {
    _inherits(shading, node);
    function shading(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(shading.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, shading);
        this.wzElement = "shading";
    }
    return shading;
})(node);

_md.shading = shading;
// element highlight
var highlight = (function (node) {
    _inherits(highlight, node);
    function highlight(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(highlight.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, highlight);
        this.wzElement = "highlight";
    }
    return highlight;
})(node);

_md.highlight = highlight;
// element xtype
var xtype = (function (node) {
    _inherits(xtype, node);
    function xtype(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(xtype.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, xtype);
        this.wzElement = "xtype";
    }
    return xtype;
})(node);

_md.xtype = xtype;
// element table
var table = (function (node) {
    _inherits(table, node);
    function table(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(table.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, table);
        this.wzElement = "table";
    }
    return table;
})(node);

_md.table = table;
// element tr
var tr = (function (node) {
    _inherits(tr, node);
    function tr(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(tr.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, tr);
        this.wzElement = "tr";
    }
    return tr;
})(node);

_md.tr = tr;
// element td
var td = (function (node) {
    _inherits(td, node);
    function td(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(td.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, td);
        this.wzElement = "td";
    }
    return td;
})(node);

_md.td = td;
// element center
var center = (function (node) {
    _inherits(center, node);
    function center(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(center.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, center);
        this.wzElement = "center";
    }
    return center;
})(node);

_md.center = center;
// element bullet_0
var bullet_0 = (function (node) {
    _inherits(bullet_0, node);
    function bullet_0(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(bullet_0.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, bullet_0);
        this.wzElement = "bullet_0";
    }
    return bullet_0;
})(node);

_md.bullet_0 = bullet_0;
// element tabStop
var tabStop = (function (node) {
    _inherits(tabStop, node);
    function tabStop(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(tabStop.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, tabStop);
        this.wzElement = "tabStop";
    }
    return tabStop;
})(node);

_md.tabStop = tabStop;
// element position
var position = (function (node) {
    _inherits(position, node);
    function position(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(position.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, position);
        this.wzElement = "position";
    }
    return position;
})(node);

_md.position = position;
// element styles
var styles = (function (node) {
    _inherits(styles, node);
    function styles(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(styles.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, styles);
        this.wzElement = "styles";
    }
    return styles;
})(node);

_md.styles = styles;
// element style
var style = (function (node) {
    _inherits(style, node);
    function style(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(style.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, style);
        this.wzElement = "style";
    }
    return style;
})(node);

_md.style = style;
// element basedOn
var basedOn = (function (node) {
    _inherits(basedOn, node);
    function basedOn(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(basedOn.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, basedOn);
        this.wzElement = "basedOn";
    }
    return basedOn;
})(node);

_md.basedOn = basedOn;
// element next
var next = (function (node) {
    _inherits(next, node);
    function next(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(next.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, next);
        this.wzElement = "next";
    }
    return next;
})(node);

_md.next = next;
// element paragraphStyles
var paragraphStyles = (function (node) {
    _inherits(paragraphStyles, node);
    function paragraphStyles(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(paragraphStyles.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, paragraphStyles);
        this.wzElement = "paragraphStyles";
    }
    return paragraphStyles;
})(node);

_md.paragraphStyles = paragraphStyles;
// element run
var run = (function (node) {
    _inherits(run, node);
    function run(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(run.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, run);
        this.wzElement = "run";
    }
    return run;
})(node);

_md.run = run;
// element xdefault
var xdefault = (function (node) {
    _inherits(xdefault, node);
    function xdefault(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(xdefault.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, xdefault);
        this.wzElement = "xdefault";
    }
    return xdefault;
})(node);

_md.xdefault = xdefault;
// element styleDef
var styleDef = (function (node) {
    _inherits(styleDef, node);
    function styleDef(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(styleDef.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, styleDef);
        this.wzElement = "styleDef";
    }
    return styleDef;
})(node);

_md.styleDef = styleDef;
_md.__tagElementMapping = { 'name': 'xname', 'br': 'xbreak', '+': 'text', 'b': 'bold', 'bold': 'boldProp', 'i': 'italic', 'italic': 'italicProp', 'type': 'xtype', 'paragraph-styles': 'paragraphStyles', 'paragraphstyles': 'paragraphStyles', 'default': 'xdefault', 'style-def': 'styleDef', 'styledef': 'styleDef' };
// model/replaceUnknownElement( )
var sampleModelException = (function () {
    function sampleModelException(message, node, instance) {
        _classCallCheck(this, sampleModelException);
        this.node = node;
        this.instance = instance;
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
    sampleModelException.prototype.toString = function() {
        var msg = [];
        msg.push(chalk.red('Error: ' + this.message));
        msg.push(chalk.red('  name: sampleModelException'));
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
    return sampleModelException;
})();

_md.sampleModelException = sampleModelException;
var sampleContext = (function () {
    function sampleContext() {
        _classCallCheck(this, sampleContext);
        this.validationErrors = [];
    }
    sampleContext.prototype.schemaIsValid = function() {
        return this.validationErrors.length == 0;
    }
    sampleContext.prototype.addError = function(message, node) {
        var at = node ? ' At ' + node.wzSourceLineInfo.toString(node) : '';
        this.validationErrors.push(message + at);
    }
    return sampleContext;
})();

_md.sampleContext = sampleContext;

