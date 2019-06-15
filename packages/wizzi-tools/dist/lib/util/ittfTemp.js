/*
    artifact generator: C:\My\wizzi\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi\packages\wizzi-tools\.wizzi\ittf\lib\util\ittfTemp.js.ittf
*/
'use strict';
// generated by v6-wizzi-js.artifacts.js.module.main
function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var file = require('./file');
var IttfTemp = (function () {
    function IttfTemp(name, value, parent) {
        _classCallCheck(this, IttfTemp);
        this.name = name;
        this.value = value;
        this.parent = parent || null;
        this.children = [];
    }
    IttfTemp.prototype.add = function(name, value) {
        if ({}.toString.call(name) === '[object Object]' && name.name) {
            name.parent = this;
            this.children.push(name);
            return name;
        }
        else {
            var node = new IttfTemp(name, value, this);
            this.children.push(node);
            return node;
        }
    }
    IttfTemp.prototype.write = function(sb, indent) {
        // log 'sb',sb
        sb.push(indentTabs(indent) + this.name + (this.value && this.value.length > 0 ? ' ' + this.value : ''));
        var i, i_items=this.children, i_len=this.children.length, node;
        for (i=0; i<i_len; i++) {
            node = this.children[i];
            node.write(sb, indent + 1);
        }
    }
    IttfTemp.prototype.writeFile = function(string_path, callback) {
        var sb = [];
        this.write(sb, 0);
        var that = this;
        file.openWrite(string_path, function(err, stream) {
            if (err) {
                return callback(err);
            }
            stream.write(sb.join('\n'));
            stream.end();
            callback(null);
        });
    }
    return IttfTemp;
})();

function indentTabs(num) {
    var ret = [];
    for (var i=0; i<num; i++) {
        ret.push('\t');
    }
    return ret.join('');
}
module.exports = IttfTemp;
