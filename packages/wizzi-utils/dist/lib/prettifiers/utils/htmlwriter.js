/*
    artifact generator: C:\My\wizzi\wizzi-mono\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-mono\packages\wizzi-utils\.wizzi\ittf\lib\prettifiers\utils\htmlwriter.js.ittf
*/
'use strict';
// generated by v6-wizzi-js.artifacts.js.module.main
function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var Texter = require('./texter').Texter;
var StringWriter = require('./stringwriter').StringWriter;
var md = module.exports = {};
var HtmlWriter = (function () {
    function HtmlWriter(noLF) {
        _classCallCheck(this, HtmlWriter);
        this.sw = new StringWriter(noLF);
        this.lfPending = false;
    }
    HtmlWriter.prototype.writeElement = function(node) {
        if (node.tag === '_text') {
            // TODO _ this.sw.write(new Texter(node.text).toString())
            this.sw.write(node.text);
            return ;
        }
        this.sw.write('<' + node.tag);
        var i, i_items=node.attribs, i_len=node.attribs.length, a;
        for (i=0; i<i_len; i++) {
            a = node.attribs[i];
            this.writeAttribute(a);
        }
        this.sw.write('>');
        if (node.text) {
            // _ this.sw.write(new Texter(node.text).toString())
            this.sw.write(node.text);
        }
        if (node.children.length > 0) {
            this.sw.w();
            this.sw.indent();
            var i, i_items=node.children, i_len=node.children.length, e;
            for (i=0; i<i_len; i++) {
                e = node.children[i];
                this.writeElement(e);
            }
            this.sw.deindent();
        }
        if (this.lfPending && !node.inline) {
            this.sw.w();
        }
        this.sw.write('</' + node.tag + '>');
        if (!node.inline) {
            this.lfPending = true;
        }
    }
    HtmlWriter.prototype.writeAttribute = function(attrib) {
        if (attrib.value === null || typeof attrib.value === 'undefined') {
            this.sw.write(' ' + attrib.name);
        }
        else {
            this.sw.write(' ' + attrib.name + '="' + attrib.value + '"');
        }
    }
    HtmlWriter.prototype.toLines = function() {
        return this.sw.toLines();
    }
    HtmlWriter.prototype.toString = function() {
        return this.sw.toString();
    }
    return HtmlWriter;
})();

md.HtmlWriter = HtmlWriter;
