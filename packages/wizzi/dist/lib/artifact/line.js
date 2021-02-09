/*
    artifact generator: C:\my\wizzi\stfnbssl\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\my\wizzi\stfnbssl\wizzi\packages\wizzi\.wizzi\ittf\lib\artifact\line.js.ittf
*/
'use strict';
// generated by v6-wizzi-js.artifacts.js.module.main
function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var verify = require('wizzi-utils').verify;
var file = require('wizzi-utils').file;
var Line = (function () {
    function Line(textOrPath, indentValue, options, isFilePath) {
        _classCallCheck(this, Line);
        this.containsFilePath = isFilePath;
        this.text = [];
        if (isFilePath) {
            this.text.push({
                k: 0, 
                t: textOrPath
            });
        }
        else {
            this.text.push(textOrPath);
        }
        this.indentValue = indentValue;
        this.options = options || {};
    }
    Line.prototype.add = function(text) {
        if (this.containsFilePath) {
            this.text.push({
                k: 1, 
                t: text
            });
        }
        else {
            this.text.push(text);
        }
    }
    Line.prototype.addFile = function(filePath) {
        if (this.containsFilePath) {
            this.text.push({
                k: 0, 
                t: filePath
            });
        }
        else {
            for (var i = 0; i < text.length; i++) {
                text[i] = {
                    k: 1, 
                    t: text[i]
                };
            }
            this.text.push({
                k: 0, 
                t: filePath
            });
        }
    }
    Line.prototype.toStream = function(stream, ctx) {
        if (this.options.isDebugLine && !ctx.isDebug) {
            return ;
        }
        var seen_tokens = false;
        if (this.containsFilePath) {
            var i,
                t,
                len = this.text.length;
            for (i = 0; i < len; i++) {
                var t = this.text[i];
                if (t.k === 1) {
                    stream.write(t.t);
                    seen_tokens = true;
                }
                else {
                    this._fileToStream(seen_tokens, stream, t.t, ctx);
                }
                if (i == len - 1) {
                    stream.write(this.options.CRLF);
                }
            }
        }
        else {
            stream.write(spaces(this.indentValue * this.options.indentSpaces) + this.text.join('') + this.options.CRLF);
        }
    }
    Line.prototype._fileToStream = function(seen_tokens, stream, filePath, ctx) {
        var lines = file.readLines(filePath);
        var indent = spaces(this.indentValue * this.options.indentSpaces);
        var i,
            t,
            len = lines.length,
            tabspaces = spaces(this.options.indentSpaces),
            line;
        for (i = 0; i < len; i++) {
            line = verify.replaceAll(lines[i], '\t', tabspaces);
            if (line.length > 0) {
                if (i > 0 || seen_tokens == false) {
                    stream.write(indent);
                }
                stream.write(line);
            }
            if (i < len - 1) {
                stream.write(this.options.CRLF);
            }
        }
    }
    Line.prototype.terminate = function() {
        delete (this.options);
    }
    Line.prototype.hydrate = function(item) {
        this.text = item.text;
        this.indentValue = item.indentValue;
    }
    return Line;
})();

function spaces(num) {
    return Array(num + 1).join(" ")
    ;
}
module.exports = Line;
