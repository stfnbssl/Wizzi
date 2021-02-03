/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-meta\.wizzi\ittf\lib\artifacts\api\traverse\trans\main.js.ittf
*/
'use strict';
var util = require('util');
var verify = require('wizzi-utils').verify;
var md = module.exports = {};
var myname = 'model.transformation.api.traverse.main';
var _args_simple = ['string', 'boolean', 'integer', 'float', 'date', 'json', 'any'];
var name_object = 'object';
var name_mergedobject = 'mergedobject';
var name_array = 'array';
var name_callback = 'callback';
var name_callbackfunction = 'callback-function';
var name_alternative = 'alternative';
var name_switch = 'switch';
var name_closure = 'closure';
var name_function = 'function';
var name_hof = 'high-order-function';
var name_facade = 'facade-function';
var name_exception = 'exception';
var name_empty = '';
var name_null = '';
md.trans = function(model, ctx, callback) {
    ctx.apis = {};
    ctx.apiCount = 0;
    var root = {
        name: model.name, 
        value: model.value, 
        parent: null, 
        children: []
    };
    var i, i_items=model.children, i_len=model.children.length, item;
    for (i=0; i<i_len; i++) {
        item = model.children[i];
        if (item.name === 'api') {
            md.api(item, ctx, root);
        }
    }
    // log 'api/traverse.root', root
    callback(null, root);
};
md.api = function(node, ctx, parent) {
    var newnode;
    ctx.apiCount++;
    var newnode = createNode('api', node.value, parent);
    if (ctx.apis[node.value]) {
        throw ctx.error('Duplicated api name: ' + node.value);
    }
    ctx.apis[node.value] = newnode;
    var apiId = verify.replaceAll(node.value, '.', '_');
    apiId = verify.replaceAll(apiId, '-', '_');
    var apiIdNode = createNode('id', apiId, newnode);
    var i, i_items=node.children, i_len=node.children.length, item;
    for (i=0; i<i_len; i++) {
        item = node.children[i];
        if (['kernel', 'plugin'].indexOf(item.name) > -1) {
            createNode('kind', item.name, newnode);
        }
        else if (item.name === 'iface') {
            md.api_iface(item, ctx, newnode);
        }
        else if (item.name === '{') {
            md.api_type(item, ctx, newnode);
        }
        else if (['extends'].indexOf(item.name) > -1) {
            var attrib = createNode(item.name, item.value, newnode);
        }
        else if (['module', 'class-instance', 'pojo'].indexOf(item.name) > -1) {
            md.api_implementation(item, ctx, newnode);
        }
        else if (item.name === '#') {
            md.comment(item, ctx, newnode);
        }
        else {
            newnode = createNode('***', item.name + ' ' + item.value + ' oper: api', parent);
        }
    }
};
function(node, ctx, parent) {
    var newnode;
    createNode('interface', node.value, parent);
    var i, i_items=node.children, i_len=node.children.length, item;
    for (i=0; i<i_len; i++) {
        item = node.children[i];
        md.api_member(item, ctx, newnode);
    }
}
function(node, ctx, parent) {
    var newnode;
    createNode('type', node.value, parent);
    var i, i_items=node.children, i_len=node.children.length, item;
    for (i=0; i<i_len; i++) {
        item = node.children[i];
        md.api_member(item, ctx, newnode);
    }
}
function(node, ctx, parent) {
    var newnode;
    createNode('implementation', node.value, parent);
    createNode('type', node.name, nimplementation);
    var i, i_items=node.children, i_len=node.children.length, item;
    for (i=0; i<i_len; i++) {
        item = node.children[i];
        if (['path', 'standard-path'].indexOf(item.name) > -1) {
            newnode = createNode(item.name, item.value, nimplementation);
        }
        else if (item.name === '#') {
            md.comment(item, ctx, newnode);
        }
        else {
            createNode('***', item.name + ' ' + item.value + ' oper: api_implementation', parent);
        }
    }
}
function(node, ctx, parent) {
    var newnode;
    if (_args_simple.indexOf(node.name) > -1) {
        createNode('property', node.value, parent);
        createNode('type', node.name, nproperty);
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            md.constraint(item, ctx, nproperty);
        }
    }
    else if (node.name === '{') {
        createNode('property', node.value, parent);
        createNode('type', name_object, nproperty);
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            md.object_prop(item, ctx, nproperty);
        }
    }
    else if (node.name === '[') {
        createNode('property', node.value, parent);
        createNode('type', name_array, nproperty);
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            md.array_item(item, ctx, nproperty);
        }
    }
    else if (node.name === 'function') {
        createNode('property', node.value, parent);
        createNode('type', node.name, nproperty);
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            md.function_params(item, ctx, nproperty);
        }
    }
    else if (node.name === 'merge') {
        createNode('property', node.value, parent);
        createNode('type', name_mergedobject, nproperty);
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            md.object_prop(item, ctx, nproperty);
        }
    }
    else if (node.name === 'm') {
        createNode('method', node.value, parent);
        createNode('type', name_function, nmethod);
    }
    else if (node.name === 'hof') {
        createNode('method', node.value, parent);
        createNode('type', name_hof, nmethod);
    }
    else if (node.name === 'ctor') {
        createNode('ctor', node.value, parent);
    }
    else if (node.name === 'facade') {
        createNode('method', node.value, parent);
        createNode('type', name_facade, nmethod);
    }
    else if (node.name === '#') {
        md.comment(node, ctx, parent);
    }
    else {
        createNode('***', node.name + ' ' + node.value + ' oper: api_member', parent);
    }
    if (['ctor', 'm', 'hof', 'facade'].indexOf(node.name) > -1) {
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            md.method_member(item, ctx, nmethod);
        }
    }
}
function(node, ctx, parent) {
    var newnode;
    if (_args_simple.indexOf(node.name) > -1) {
        createNode('param', node.value, parent);
        createNode('type', node.name, nparam);
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            md.constraint(item, ctx, nparam);
        }
    }
    else if (node.name === 'alt') {
        md.param_alternative(node, ctx, parent);
    }
    else if (node.name === '{') {
        md.object_param(node, ctx, parent);
    }
    else if (node.name === '[') {
        md.array_param(node, ctx, parent);
    }
    else if (node.name === 'function') {
        createNode('param', node.value, parent);
        createNode('type', node.name, nparam);
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            md.function_params(item, ctx, nparam);
        }
    }
    else if (node.name === 'callback') {
        createNode('is-async', name_empty, parent);
        md.callback(node, ctx, parent);
    }
    else if (node.name === 'function') {
        createNode('argument', node.value, parent);
        createNode('type', node.name, narg);
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            md.function_params(item, ctx, narg);
        }
    }
    else if (node.name === 'called-by') {
        createNode('called-by', node.value, parent);
    }
    else if (node.name === 'return') {
        md.return(node, ctx, parent);
    }
    else if (node.name === 'info') {
        md.method_info(node, ctx, parent);
    }
    else if (node.name === 'implemented-by') {
        createNode('implemented-by', node.value, parent);
    }
    else if (node.name === 'internal') {
        createNode('is-internal', node.value, parent);
    }
    else if (node.name === 'throw-if') {
        createNode('throw-if', node.value, parent);
    }
    else if (node.name === '#') {
        md.comment(node, ctx, parent);
    }
    else {
        createNode('***', node.name + ' ' + node.value + ' oper: method_member', parent);
    }
}
function(node, ctx, parent) {
    var newnode;
    createNode('param', node.value, parent);
    createNode('type', name_alternative, nparam);
    var i, i_items=node.children, i_len=node.children.length, item;
    for (i=0; i<i_len; i++) {
        item = node.children[i];
        md.value_item(item, ctx, nparam);
    }
}
function(node, ctx, parent) {
    var newnode;
    createNode('info', node.value, parent);
    var i, i_items=node.children, i_len=node.children.length, item;
    for (i=0; i<i_len; i++) {
        item = node.children[i];
        md.info_item(item, ctx, ninfo);
    }
}
function(node, ctx, parent) {
    var newnode;
    createNode('param', name_callback, parent);
    createNode('type', name_callbackfunction, nparam);
    var i, i_items=node.children, i_len=node.children.length, item;
    for (i=0; i<i_len; i++) {
        item = node.children[i];
        md.arg_item(item, ctx, nparam);
    }
}
function(node, ctx, parent) {
    var newnode;
    if (node.name === 'alt') {
        md.arg_alternative(node, ctx, parent);
    }
    else if (node.name === 'switch') {
        md.arg_switch(node, ctx, parent);
    }
    else if (_args_simple.indexOf(node.name) > -1) {
        createNode('argument', node.name, parent);
        createNode('type', node.name, narg);
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            md.constraint(item, ctx, narg);
        }
    }
    else if (node.name === '{') {
        createNode('argument', node.value, parent);
        createNode('type', name_object, narg);
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            md.object_prop(item, ctx, narg);
        }
    }
    else if (node.name === '[') {
        createNode('argument', node.value, parent);
        createNode('type', name_array, narg);
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            md.array_item(item, ctx, narg);
        }
    }
    else if (node.name === 'exception') {
        createNode('argument', node.value, parent);
        createNode('type', name_exception, narg);
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            md.exception_error(item, ctx, narg);
        }
    }
    else if (node.name === 'function') {
        createNode('argument', node.value, parent);
        createNode('type', node.name, narg);
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            md.function_params(item, ctx, narg);
        }
    }
    else if (node.name === 'api-ref') {
        createNode('argument', node.name, parent);
        createNode('type', name_null, narg);
    }
    else if (node.name === 'iface') {
        createNode('argument', node.value, parent);
        createNode('iface', node.value, narg);
    }
    else if (node.name === 'null') {
        createNode('argument', node.name, parent);
        createNode('type', name_null, narg);
    }
    else if (node.name === '#') {
        md.comment(node, ctx, parent);
    }
    else {
        createNode('***', node.name + ' ' + node.value + ' oper: arg_item', parent);
    }
}
function(node, ctx, parent) {
    var newnode;
    createNode('argument', node.value, parent);
    createNode('type', name_alternative, nargument);
    var i, i_items=node.children, i_len=node.children.length, item;
    for (i=0; i<i_len; i++) {
        item = node.children[i];
        md.value_item(item, ctx, nargument);
    }
}
function(node, ctx, parent) {
    var newnode;
    // api_member, object_prop, array_item, value_item, arg_item
    if (_args_simple.indexOf(node.name) > -1) {
        createNode('param', node.value, parent);
        createNode('type', node.name, nparam);
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            md.constraint(item, ctx, nparam);
        }
    }
    else if (node.name === 'alt') {
        md.param_alternative(node, ctx, parent);
    }
    else if (node.name === '{') {
        md.object_param(node, ctx, parent);
    }
    else if (node.name === '[') {
        md.array_param(node, ctx, parent);
    }
    else if (node.name === 'callback') {
        createNode('is-async', name_empty, parent);
        md.callback(node, ctx, parent);
    }
    else if (node.name === 'called-by') {
        createNode('called-by', node.value, parent);
    }
    else if (node.name === 'return') {
        md.return(node, ctx, parent);
    }
    else if (node.name === 'info') {
        md.method_info(node, ctx, parent);
    }
    else if (node.name === 'implemented-by') {
        createNode('implemented-by', node.value, parent);
    }
    else if (node.name === 'internal') {
        createNode('is-internal', node.value, parent);
    }
    else if (node.name === 'throw-if') {
        createNode('throw-if', node.value, parent);
    }
    else {
        md.constraint(node, ctx, parent);
    }
}
function(node, ctx, parent) {
    var newnode;
    createNode('param', node.value, parent);
    createNode('type', name_object, nparam);
    var i, i_items=node.children, i_len=node.children.length, item;
    for (i=0; i<i_len; i++) {
        item = node.children[i];
        md.object_prop(item, ctx, nparam);
    }
}
function(node, ctx, parent) {
    var newnode;
    if (['iface', 'api-ref', 'POJO'].indexOf(node.name) > -1) {
        createNode(node.name, node.value, parent);
    }
    else if (node.name === 'required') {
        createNode('is-required', node.value, parent);
    }
    else if (_args_simple.indexOf(node.name) > -1) {
        createNode('property', node.value, parent);
        createNode('type', node.name, nproperty);
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            md.constraint(item, ctx, nproperty);
        }
    }
    else if (node.name === '{') {
        createNode('property', node.value, parent);
        createNode('type', name_object, nproperty);
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            md.object_prop(item, ctx, nproperty);
        }
    }
    else if (node.name === '[') {
        createNode('property', node.value, parent);
        createNode('type', name_array, nproperty);
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            md.array_item(item, ctx, nproperty);
        }
    }
    else if (node.name === 'function') {
        createNode('property', node.value, parent);
        createNode('type', node.name, nproperty);
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            md.function_params(item, ctx, nproperty);
        }
    }
    else if (node.name === 'merge') {
        createNode('property', node.value, parent);
        createNode('type', name_mergedobject, nproperty);
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            md.object_prop(item, ctx, nproperty);
        }
    }
    else if (node.name === 'alt') {
        md.prop_alternative(node, ctx, parent);
    }
    else if (node.name === 'switch') {
        md.object_prop_switch(node, ctx, parent);
    }
    else if (node.name === '#') {
        md.comment(node, ctx, parent);
    }
    else {
        createNode('***', node.name + ' ' + node.value + ' oper: object_prop', parent);
    }
}
function(node, ctx, parent) {
    var newnode;
    createNode('property', node.value, parent);
    createNode('type', name_alternative, nproperty);
    var i, i_items=node.children, i_len=node.children.length, item;
    for (i=0; i<i_len; i++) {
        item = node.children[i];
        md.value_item(item, ctx, nproperty);
    }
}
function(node, ctx, parent) {
    var newnode;
    if (_args_simple.indexOf(node.name) > -1) {
        createNode('value', node.value, parent);
        createNode('type', node.name, nvalue);
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            md.constraint(item, ctx, nvalue);
        }
    }
    else if (node.name === '{') {
        createNode('value', node.value, parent);
        createNode('type', name_object, nvalue);
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            md.object_prop(item, ctx, nvalue);
        }
    }
    else if (node.name === '[') {
        createNode('value', node.value, parent);
        createNode('type', name_array, nvalue);
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            md.array_item(item, ctx, nvalue);
        }
    }
    else if (node.name === 'function') {
        createNode('value', node.value, parent);
        createNode('type', node.name, nvalue);
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            md.function_params(item, ctx, nvalue);
        }
    }
    else if (node.name === 'null') {
        createNode('value', node.name, parent);
        createNode('type', node.name, nvalue);
    }
    else if (node.name === 'exception') {
        createNode('value', node.name, parent);
        createNode('type', node.name, nvalue);
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            md.exception(item, ctx, nvalue);
        }
    }
    else if (['iface', 'api-ref', 'POJO'].indexOf(node.name) > -1) {
        createNode('value', node.value, parent);
        createNode(node.name, node.value, nvalue);
    }
    else if (node.name === '#') {
        md.comment(node, ctx, parent);
    }
    else {
        createNode('***', node.name + ' ' + node.value + ' oper: value_item', parent);
    }
}
function(node, ctx, parent) {
    var newnode;
    if (_args_simple.indexOf(node.name) > -1) {
        createNode('item', node.value, parent);
        createNode('type', node.name, nitem);
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            md.constraint(item, ctx, nitem);
        }
    }
    else if (node.name === '{') {
        createNode('item', node.value, parent);
        createNode('type', name_object, nitem);
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            md.object_prop(item, ctx, nitem);
        }
    }
    else if (node.name === '[') {
        createNode('item', node.value, parent);
        createNode('type', name_array, nitem);
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            md.array_item(item, ctx, nitem);
        }
    }
    else if (node.name === 'function') {
        createNode('item', node.value, parent);
        createNode('type', node.name, nitem);
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            md.function_params(item, ctx, nitem);
        }
    }
    else if (node.name === 'null') {
        createNode('item', node.name, parent);
        createNode('type', node.name, nitem);
    }
    else if (node.name === 'exception') {
        createNode('item', node.name, parent);
        createNode('type', node.name, nitem);
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            md.exception(item, ctx, nitem);
        }
    }
    else if (node.name === 'alt') {
        md.array_alternative(node, ctx, parent);
    }
    else if (['iface', 'api-ref', 'json', 'POJO'].indexOf(node.name) > -1) {
        createNode('item', node.value, parent);
        createNode(node.name, node.value, nitem);
    }
    else if (node.name === '#') {
        md.comment(node, ctx, parent);
    }
    else {
        createNode('***', node.name + ' ' + node.value + ' oper: array_item', parent);
    }
}
function(node, ctx, parent) {
    var newnode;
}
function(node, ctx, parent) {
    var newnode;
    createNode('param', node.value, parent);
    createNode('type', name_array, nparam);
    var i, i_items=node.children, i_len=node.children.length, item;
    for (i=0; i<i_len; i++) {
        item = node.children[i];
        md.array_item(item, ctx, nparam);
    }
}
function(node, ctx, parent) {
    var newnode;
    createNode('item', node.value, parent);
    createNode('type', name_alternative, nitem);
    var i, i_items=node.children, i_len=node.children.length, item;
    for (i=0; i<i_len; i++) {
        item = node.children[i];
        md.value_item(item, ctx, nitem);
    }
}
function(node, ctx, parent) {
    var newnode;
    createNode('return', node.value, parent);
    var i, i_items=node.children, i_len=node.children.length, item;
    for (i=0; i<i_len; i++) {
        item = node.children[i];
        if (item.name === 'alt') {
            createNode('type', name_alternative, nreturn);
            var j, j_items=item.children, j_len=item.children.length, item2;
            for (j=0; j<j_len; j++) {
                item2 = item.children[j];
                md.value_item(item2, ctx, nreturn);
            }
        }
        else {
            md.value_item(item, ctx, nreturn);
        }
    }
}
function(node, ctx, parent) {
    var newnode;
    if (node.name === 'error') {
        createNode('error', node.value, parent);
    }
    else if (node.name === '#') {
        md.comment(node, ctx, parent);
    }
    else {
        createNode('***', node.name + ' ' + node.value + ' oper: exception', parent);
    }
}
function(node, ctx, parent) {
    var newnode;
    createNode('#', node.value, parent);
    var i, i_items=node.children, i_len=node.children.length, item;
    for (i=0; i<i_len; i++) {
        item = node.children[i];
        md.comment(item, ctx, newnode);
    }
}
function(node, ctx, parent) {
    var newnode;
    if (node.name === 'required' || node.name === 'is-required') {
        createNode('is-required', node.value, parent);
    }
    else if (node.name === 'default') {
        createNode('default', node.value, parent);
    }
    else if (node.name === 'restrict') {
        md.restrict(node, ctx, parent);
    }
    else if (['iface', 'api-ref', 'POJO'].indexOf(node.name) > -1) {
        createNode(node.name, node.value, parent);
    }
    else if (node.name === '#') {
        md.comment(node, ctx, parent);
    }
    else {
        createNode('***', node.name + ' ' + node.value + ' oper: constraint', parent);
    }
}
function(node, ctx, parent) {
    var newnode;
    createNode('restrict', node.value, parent);
    var i, i_items=node.children, i_len=node.children.length, item;
    for (i=0; i<i_len; i++) {
        item = node.children[i];
        if (item.name === 'enum') {
            createNode('enum', item.value, nrestrict);
        }
        else if (item.name === '#') {
            md.comment(item, ctx, nrestrict);
        }
        else {
            createNode('***', item.name + ' ' + item.value + ' oper: restrict', parent);
        }
    }
}
function(node, ctx, parent) {
    var newnode;
    createNode('argument', node.value, parent);
    createNode('type', name_switch, nargument);
    var i, i_items=node.children, i_len=node.children.length, item;
    for (i=0; i<i_len; i++) {
        item = node.children[i];
        if (item.name === 'on') {
            createNode('on', item.value, nargument);
            var j, j_items=item.children, j_len=item.children.length, item2;
            for (j=0; j<j_len; j++) {
                item2 = item.children[j];
                md.value_item(item2, ctx, non);
            }
        }
        else if (item.name === '#') {
            md.comment(item, ctx, nswitch);
        }
        else {
            createNode('***', item.name + ' ' + item.value + ' oper: arg_switch', parent);
        }
    }
}
function(node, ctx, parent) {
    var newnode;
    createNode('property', node.value, parent);
    createNode('type', name_switch, nproperty);
    var i, i_items=node.children, i_len=node.children.length, item;
    for (i=0; i<i_len; i++) {
        item = node.children[i];
        if (item.name === 'on') {
            createNode('on', item.value, nproperty);
            var j, j_items=item.children, j_len=item.children.length, item2;
            for (j=0; j<j_len; j++) {
                item2 = item.children[j];
                md.value_item(item2, ctx, non);
            }
        }
        else if (item.name === '#') {
            md.comment(item, ctx, nswitch);
        }
        else {
            createNode('***', item.name + ' ' + item.value + ' oper: arg_switch', parent);
        }
    }
}
function(node, ctx, parent) {
    var newnode;
    if (node.name === 'api-ref') {
        createNode('api-ref', node.value, parent);
    }
    else if (node.name === 'closure') {
        createNode('dependency', node.value, parent);
        createNode('type', name_closure, ndep);
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            md.info_item(item, ctx, ndep);
        }
    }
    else if (node.name === 'store-on-this') {
        createNode('store-on-this', node.value, parent);
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            md.info_item(item, ctx, newnode);
        }
    }
    else if (node.name === 'api-call') {
        createNode('api-call', node.value, parent);
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            md.info_item(item, ctx, newnode);
        }
    }
    else if (node.name === 'api-receive') {
        createNode('api-receive', node.value, parent);
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            md.info_item(item, ctx, newnode);
        }
    }
    else if (node.name === 'api-send') {
        createNode('api-send', node.value, parent);
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            md.info_item(item, ctx, newnode);
        }
    }
    else if (node.name === 'api-create') {
        createNode('api-create', node.value, parent);
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            md.info_item(item, ctx, newnode);
        }
    }
    else if (node.name === 'internal-call') {
        createNode('internal-call', node.value, parent);
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            md.info_item(item, ctx, newnode);
        }
    }
    else if (node.name === 'receive') {
        createNode('receive', node.value, parent);
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            md.info_item(item, ctx, newnode);
        }
    }
    else if (node.name === 'send') {
        createNode('send', node.value, parent);
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            md.info_item(item, ctx, newnode);
        }
    }
    else if (node.name === 'set') {
        createNode('set', node.value, parent);
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            md.info_item(item, ctx, newnode);
        }
    }
    else if (node.name === 'merge') {
        createNode('merge', node.value, parent);
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            md.info_item(item, ctx, newnode);
        }
    }
    else if (node.name === '#') {
        md.comment(node, ctx, parent);
    }
    else {
        md.value_item(node, ctx, parent);
    }
}
function createNode(name, value, parent) {
    var node = {
        name: name, 
        value: value, 
        parent: parent, 
        children: []
    };
    parent.children.push(node);
    return node;
}
