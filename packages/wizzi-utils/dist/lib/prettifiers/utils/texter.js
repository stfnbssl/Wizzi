/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-utils\.wizzi\ittf\lib\prettifiers\utils\texter.js.ittf
*/
'use strict';
// generated by v6-wizzi-js.artifacts.js.module.main
function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var md = module.exports = {};
var Texter = (function () {
    function Texter(text) {
        _classCallCheck(this, Texter);
        this.text = text;
    }
    Texter.prototype.toString = function() {
        if (typeof this.text !== 'string') {
            return '';
        }
        var ret = '';
        var cmd = '';
        var value = '';
        var i, ch, l = this.text.length, state = 0;
        for (i=0; i<l; i++) {
            ch = this.text[i];
            if (ch === '{' && state == 0) {
                state = 1;
            }
            else if (ch === ' ') {
                if (state == 1) {
                    if (this.isCmd(cmd)) {
                        state = 2;
                    }
                    else {
                        ret += '{' + cmd + ' ';
                        state = 0;
                    }
                }
                else if (state == 2) {
                    value += ch;
                }
                else {
                    ret += ch;
                }
            }
            else if (ch === '}') {
                if (state == 2) {
                    ret += this.get(cmd, value);
                }
                else {
                    ret += "{" + cmd + "}";
                }
                cmd = value = '';
                state = 0;
            }
            else {
                if (state == 1) {
                    cmd += ch;
                }
                else if (state == 2) {
                    value += ch;
                }
                else {
                    ret += ch;
                }
            }
        }
        if (state == 1) {
            ret += '{' + cmd;
        }
        else if (state == 2) {
            ret += '{' + cmd + ' ' + value;
        }
        return ret;
    }
    Texter.prototype.isCmd = function(cmd) {
        return ['label'].indexOf(cmd) >= 0;
    }
    Texter.prototype.get = function(cmd, value) {
        if (cmd === 'label') {
            return '<span class="label">' + value + '</span>';
        }
        else {
            return '<span class="default">' + value + '</span>';
        }
    }
    return Texter;
})();

md.Texter = Texter;
