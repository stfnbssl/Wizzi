/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-utils\.wizzi\ittf\lib\ittfTree\asIsLoader\nodifier.js.ittf
*/
'use strict';
var util = require('util');
var verify = require('../../verify');
//
module.exports = function(lines, mTreeBrick) {
    var nodes = [],
        root = null,
        current = null,
        nameFirstChar = null,
        nameLength = 0,
        line,
        i,
        l = lines.length;
    for (var i = 0; i < l; i++) {
        line = lines[i];
        nameFirstChar = line.name[0];
        nameLength = line.name.length;
        line.id = mTreeBrick.loadHistory.getNewNodeId();
        line.model = mTreeBrick;
        if (line.indent == 0 && current == null) {
            line.parent = null;
            nodes.push(line);
        }
        else if (current == null) {
            return local_error('InvalidIttfError', 'default', 'Malformed tree, root node cannot have an indent.', line, mTreeBrick);
        }
        else if (line.indent == current.indent) {
            if (typeof(current.parent) === 'undefined' || current.parent === null) {
                return local_error('InvalidIttfError', 'default', 'Malformed tree, only one root note allowed.', line, mTreeBrick);
            }
            line.parent = current.parent;
            current.parent.children.push(line);
        }
        else if (line.indent > current.indent) {
            if (nameFirstChar == '$' && line.name === '$params') {
                if (current.indent > 0) {
                    return local_error('InvalidIttfError', 'default', 'The $params node must be a child of the root node.', line, mTreeBrick);
                }
                current.model.$params = line.value;
                continue;
            }
            line.parent = current;
            current.children.push(line);
        }
        else if (line.indent < current.indent) {
            var parent = current.parent;
            while (parent != null && line.indent < parent.indent) {
                parent = parent.parent;
            }
            line.parent = parent.parent;
            if (parent.parent) {
                parent.parent.children.push(line);
            }
            else {
                return local_error('InvalidIttfError', 'default', 'Malformed tree, only one root note allowed.', line, mTreeBrick);
            }
        }
        current = line;
        current.children = [];
    }
    return nodes;
};
function local_error(name, method, message, line, mTreeBrick) {
    if (line) {
        message = message + '\nIn node: ' + line.name + ' ' + (line.value || '') + ' row: ' + line.row + ' col: ' + line.col + ' file: ' + mTreeBrick.uri;
    }
    return error(name, method, message);
}
function error(code, method, message, innerError) {
    var parameter = null;
    if (verify.isObject(message)) {
        parameter = message.parameter;
        message = message.message;
    }
    innerError = innerError || new Error('Error created for trace.');
    return verify.error(innerError, {
            name: verify.isNumber(code) ? 'Err-' + code : code, 
            method: 'wizzi-utils.ittfTree.asIsLoader.nodifier.' + method, 
            parameter: parameter, 
            sourcePath: __filename
        }, message || 'Error message unavailable');
}
