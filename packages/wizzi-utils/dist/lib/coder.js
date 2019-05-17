/*
    artifact generator: C:\My\wizzi\wizzi-mono\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-mono\packages\wizzi-utils\.wizzi\ittf\lib\coder.js.ittf
*/
'use strict';
// generated by v6-wizzi-js.artifacts.js.module.main
function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var Coder = (function () {
    function Coder() {
        _classCallCheck(this, Coder);
        this.buffer = [];
        this.indentValue = 0;
        this.needIndent = false;
        this.ctx = {};
        this.commentPaths = [];
    }
    Coder.prototype.w = function(text) {
        this.do_indent();
        this.buffer.push(text + '\n');
        this.needIndent = true;
    }
    Coder.prototype.write = function(text) {
        this.do_indent();
        this.buffer.push(text);
    }
    Coder.prototype.indent = function() {
        this.indentValue++;
    }
    Coder.prototype.deindent = function() {
        this.indentValue--;
    }
    Coder.prototype.do_indent = function() {
        if (this.needIndent) {
            this.buffer.push((new Array(1 + this.indentValue * 4)).join(' '));
            this.needIndent = false;
        }
    }
    Coder.prototype.pushPath = function(path) {
        this.commentPaths.push(path);
    }
    Coder.prototype.popPath = function() {
        this.commentPaths.pop();
    }
    Coder.prototype.wPath = function(slComment) {
        this.w(slComment + ' ' + this.commentPaths.join(' -> '));
    }
    Coder.prototype.wEntering = function(fname) {
        this.w('console.log(\'Entering match ' + this.commentPaths.join(' -> ') + ' ' + (fname || '') + ' ch: \' + input.codePointAt(pos) + \'/\' + input[pos] + \'/ pos:\' + pos);');
    }
    Coder.prototype.toString = function() {
        return this.buffer.join('');
    }
    return Coder;
})();

module.exports = Coder;
