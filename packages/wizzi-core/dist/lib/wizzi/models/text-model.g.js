/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-core\.wizzi\ittf\lib\wizzi\models\text-model.g.js.ittf
*/
'use strict';
/**
     Pseudo schema text
*/
var util = require('util');

module.exports = function(mTree, ittfDocumentUri, request, callback) {
    if (!(mTree.nodes && mTree.nodes.length == 1)) {
        return callback(error('Malformed mTree. Must have one root node. Found mTree.nodes: ' + mTree.nodes.length));
    }
    var root = mTree.nodes[0];
    if (root.n !== "text") {
        return callback(error('The root node of a text ittf document must be : "text". Found: ' + root.n + ' ' + root.v + ', mTree: ' + util.inspect(mTree, { depth: null } )));
    }
    // log 'wizzi-core.wizzi.models.text-model root', root
    // log 'wizzi-core.wizzi.models.text-model root.children[0].children', root.children[0].children
    var sb = [];
    //
    // TODO in text-factory do not insert another root text node
    // we now have
    // text
    // text
    // lorem ipsum
    // lorem ipsum
    // Do eliminate the first 'text' node !
    //
    var hr = toText('', sb, root.children);
    if (hr && hr.__is_error) {
        console.log('__is_error ', hr);
        return callback(hr);
    }
    return callback(null, {
            wzElement: 'text', 
            content: sb.join('\n')
        });
};
function toText(indent, sb, nodes) {
    var i, i_items=nodes, i_len=nodes.length, node;
    for (i=0; i<i_len; i++) {
        node = nodes[i];
        // log 'wizzi-core/wizzi/models/text-model/toText', node.n, node.v
        var n = node.n;
        var v = node.v;
        var nextIndent = '    ';
        if (n === 'text') {
            // skip
            nextIndent = '';
        }
        else if (n === 'br' && (!v || v.length == 0)) {
            sb.push('');
        }
        else if (n === '\\br') {
            sb.push(indent + 'br ' + v);
        }
        else if (n === 'span') {
            sb[sb.length - 1] += v;
        }
        else if (n === '\\span') {
            sb.push(indent + 'span ' + v);
        }
        else if (n === 'bspan') {
            sb[sb.length - 1] += ' ' + v;
        }
        else if (n === '\\bspan') {
            sb.push(indent + 'bspan ' + v);
        }
        else if (n == '---' && v.length == 0) {
            sb.push('');
        }
        else if (n == '\\---' && v.length == 0) {
            sb.push('---');
        }
        else {
            sb.push(indent + n + ' ' + v);
        }
        if (node.children) {
            toText(indent + nextIndent, sb, node.children);
        }
    }
}
function error(message) {
    return {
            __is_error: true, 
            source: 'wizzi-core/lib/wizzi/models/text-model.g', 
            message: message
        };
}
