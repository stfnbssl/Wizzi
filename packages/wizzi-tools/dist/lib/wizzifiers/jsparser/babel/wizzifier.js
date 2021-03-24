/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-tools\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-tools\.wizzi\ittf\lib\wizzifiers\jsparser\babel\wizzifier.js.ittf
*/
'use strict';
var util = require('util');
var path = require('path');
var async = require('async');
var file = require('wizzi-utils').file;
var verify = require('wizzi-utils').verify;
var parser = require("@babel/parser");
var ittfwriter = require("../../../util/ittfwriter");
var cleanBabel = require('./cleanBabel');
var codeReplacer = require('../../../util/jsCodeReplacer');
var CommentManager = require('../../../util/commentManager');
var csswizzifier = null;
var htmlwizzifier = null;
var format = function(parent, ast, options) {
    if (!ast) {
        throw new Error('missing ast. parent is: ' + util.inspect(parent, { depth: 2 }));
    }
    if (parent === null) {
        if (options.starter) {
            options.starter = false;
        }
        else if (options.returnText) {
            // ok
        }
        else {
            showstack(options);
            throw new Error('parent is null.' + util.inspect(ast, 4));
        }
    }
    if (options.verbose) {
        // log 'ast.type', ast.type
    }
    var formatter = format[ast.type];
    if (formatter) {
        options.stack.push(ast);
        var result = formatter(parent, ast, options);
        options.stack.pop();
        return result;
    }
    else {
        throw new Error('no formatter for type: ' + ast.type);
    }
};
var formatText = function(parent, ast, options, node) {
    var saveReturnText = options.returnText;
    options.returnText = true;
    if (node) {
        options.formatTextNodes.push(node);
    }
    var value = format(parent, ast, options);
    if (node) {
        options.formatTextNodes.pop();
    }
    options.returnText = saveReturnText;
    return value;
};
var wzDocs = {
    AstgNodes: [
        
    ]
};
// process AST node File
var File_astNode = {
    name: "File", 
    ittfTag: "File", 
    skip: true, 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(File_astNode)
format.File = function(parent, node, options) {
    var f_astNode = File_astNode;
    var __isText = false;
    // log 'node : File ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = parent;
    // process AST-node-property program and append ittfNode to `ret`
    f_astNode.props.push({
        name: "program", 
        descr: "process AST-node-property program and append ittfNode to `ret`"
    })
    if (node.program) {
        if (!node.program.type) {
            throw 'Node program has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.program, options)
    }
    else {
        throw new Error('AST-node-property program undefined: ' + JSON.stringify(node, null, 2));
    }
    // TODO VIA f_a( comments
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
    }
};
// process AST node Program
var Program_astNode = {
    name: "Program", 
    ittfTag: "Program", 
    skip: true, 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(Program_astNode)
format.Program = function(parent, node, options) {
    var f_astNode = Program_astNode;
    var __isText = false;
    // log 'node : Program ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = parent;
    // s( sourceType, "script" | "module"
    // process AST-node-property-collection directives and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "directives", 
        throwIfUndefined: true, 
        descr: "process AST-node-property-collection directives and append ittfNode(s) to `ret`"
    })
    if (node.directives) {
        if (typeof node.directives.length === 'undefined') {
            throw new Error('Property node.directives must be an array');
        }
        var i, i_items=node.directives, i_len=node.directives.length, item;
        for (i=0; i<i_len; i++) {
            item = node.directives[i];
            item.__parent = {
                name: 'directives', 
                len: node.directives.length
            };
            format(ret, item, options)
        }
    }
    else {
        throw new Error('AST-node-property-collection directives undefined: ' + JSON.stringify(node, null, 2));
    }
    // process AST-node-property-collection body and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "body", 
        throwIfUndefined: true, 
        descr: "process AST-node-property-collection body and append ittfNode(s) to `ret`"
    })
    if (node.body) {
        if (typeof node.body.length === 'undefined') {
            throw new Error('Property node.body must be an array');
        }
        var i, i_items=node.body, i_len=node.body.length, item;
        for (i=0; i<i_len; i++) {
            item = node.body[i];
            item.__parent = {
                name: 'body', 
                len: node.body.length
            };
            format(ret, item, options)
        }
    }
    else {
        throw new Error('AST-node-property-collection body undefined: ' + JSON.stringify(node, null, 2));
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
    }
};
// process AST node Identifier
var Identifier_astNode = {
    name: "Identifier", 
    ittfTag: "@id", 
    isText: true, 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(Identifier_astNode)
format.Identifier = function(parent, node, options) {
    var f_astNode = Identifier_astNode;
    var __isText = true;
    // log 'node : Identifier ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: '@id', 
        name: '', 
        isText: true, 
        textified: null, 
        AST: 'Identifier', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // log 't/name.node.name, value: ', node.name, '
    if (typeof node.name !== 'undefined') {
        ret.name = node.name.toString();
    }
    // log 't/name ittf.ret', ret
    // An identifier. Note that an identifier may be an expression or a destructuring pattern.
    if (node.__parent && node.__parent.name === 'body' && node.__parent.len == 1) {
        // is the return value of an ArrowExpression
        if (node.extra && node.extra.parenthesized == true) {
            ret.tag = '(';
        }
        else {
            ret.tag = '+';
        }
    }
    // process AST-node-property typeAnnotation and append ittfNode to `ret`
    f_astNode.props.push({
        name: "typeAnnotation", 
        descr: "process AST-node-property typeAnnotation and append ittfNode to `ret`"
    })
    if (node.typeAnnotation) {
        if (!node.typeAnnotation.type) {
            throw 'Node typeAnnotation has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.typeAnnotation, options)
    }
    if (node.optional) {
        ret.children.push({
            tag: ':optional', 
            name: '', 
            children: [
                
            ]
        })
    }
    if (ret.children.length > 0) {
        __isText = false;
        ret.isText = false;
        ret.textified = null;
        ret.CICCIO = "MAGIC";
    }
    // log 'Identifier', ret
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node PrivateName
var PrivateName_astNode = {
    name: "PrivateName", 
    ittfTag: "none", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(PrivateName_astNode)
format.PrivateName = function(parent, node, options) {
    var f_astNode = PrivateName_astNode;
    var __isText = false;
    // log 'node : PrivateName ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'none', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'PrivateName', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // Process AST-node-property Identifier and
    // set the resulting node.name on : ret || parent (cmd: onparent)
    // used mainly for Identifier(s)
    f_astNode.props.push({
        name: "Identifier", 
        onParent: false, 
        iftext: false, 
        descr: "Process AST-node-property Identifier and set the resulting node.name on : ret || parent (cmd: onparent) used mainly for Identifier(s)"
    })
    if (node.Identifier) {
        if (!node.Identifier.type) {
            throw 'Node Identifier has no type: ' + JSON.stringify(node, null, 2);
        }
        var tempIdentifier = {
            children: [
                
            ]
        };
        format(tempIdentifier, node.Identifier, options)
        /**
            if (tempIdentifier .children.length > 0) {
                throw 'node.Identifier must result zero node, returned: ' + tempIdentifier.children.length + ' source: ' + options.input.substring(node.start, node.end);
            }
        */
        var appto = false ? parent : ret;
        if (tempIdentifier.children.length > 0) {
            appto.name = tempIdentifier.children[0].name;
        }
        else {
            appto.name = tempIdentifier.name;
        }
    }
    // A Private Name Identifier.
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node RegExpLiteral
var RegExpLiteral_astNode = {
    name: "RegExpLiteral", 
    ittfTag: "literal", 
    isText: true, 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(RegExpLiteral_astNode)
format.RegExpLiteral = function(parent, node, options) {
    var f_astNode = RegExpLiteral_astNode;
    var __isText = true;
    // log 'node : RegExpLiteral ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'literal', 
        name: '', 
        isText: true, 
        textified: null, 
        AST: 'RegExpLiteral', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    ret.name = '/' + node.pattern + '/';
    if (node.flags && node.flags.length > 0) {
        ret.name += node.flags;
        // log '*************** RegExpLiteral.ret.name', ret.name
    }
    if (node.__parent && node.__parent.name === 'body' && node.__parent.len == 1) {
        // is the return value of an ArrowExpression
        if (node.extra && node.extra.parenthesized == true) {
            ret.tag = '(';
        }
        else {
            ret.tag = '+';
        }
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node NullLiteral
var NullLiteral_astNode = {
    name: "NullLiteral", 
    ittfTag: "literal", 
    isText: true, 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(NullLiteral_astNode)
format.NullLiteral = function(parent, node, options) {
    var f_astNode = NullLiteral_astNode;
    var __isText = true;
    // log 'node : NullLiteral ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'literal', 
        name: '', 
        isText: true, 
        textified: null, 
        AST: 'NullLiteral', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    ret.name = 'null';
    if (node.__parent && node.__parent.name === 'body' && node.__parent.len == 1) {
        // is the return value of an ArrowExpression
        if (node.extra && node.extra.parenthesized == true) {
            ret.tag = '(';
        }
        else {
            ret.tag = '+';
        }
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node StringLiteral
var StringLiteral_astNode = {
    name: "StringLiteral", 
    ittfTag: "literal", 
    isText: true, 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(StringLiteral_astNode)
format.StringLiteral = function(parent, node, options) {
    var f_astNode = StringLiteral_astNode;
    var __isText = true;
    // log 'node : StringLiteral ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'literal', 
        name: '', 
        isText: true, 
        textified: null, 
        AST: 'StringLiteral', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    ret.name = node.extra.raw;
    if (node.__parent && node.__parent.name === 'body' && node.__parent.len == 1) {
        // is the return value of an ArrowExpression
        if (node.extra && node.extra.parenthesized == true) {
            ret.tag = '(';
        }
        else {
            ret.tag = '+';
        }
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node BooleanLiteral
var BooleanLiteral_astNode = {
    name: "BooleanLiteral", 
    ittfTag: "literal", 
    isText: true, 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(BooleanLiteral_astNode)
format.BooleanLiteral = function(parent, node, options) {
    var f_astNode = BooleanLiteral_astNode;
    var __isText = true;
    // log 'node : BooleanLiteral ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'literal', 
        name: '', 
        isText: true, 
        textified: null, 
        AST: 'BooleanLiteral', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // log 't/name.node.value, value: ', node.value, '
    if (typeof node.value !== 'undefined') {
        ret.name = node.value.toString();
    }
    // log 't/name ittf.ret', ret
    if (node.__parent && node.__parent.name === 'body' && node.__parent.len == 1) {
        // is the return value of an ArrowExpression
        if (node.extra && node.extra.parenthesized == true) {
            ret.tag = '(';
        }
        else {
            ret.tag = '+';
        }
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node NumericLiteral
var NumericLiteral_astNode = {
    name: "NumericLiteral", 
    ittfTag: "literal", 
    isText: true, 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(NumericLiteral_astNode)
format.NumericLiteral = function(parent, node, options) {
    var f_astNode = NumericLiteral_astNode;
    var __isText = true;
    // log 'node : NumericLiteral ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'literal', 
        name: '', 
        isText: true, 
        textified: null, 
        AST: 'NumericLiteral', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // log 't/name.node.value, value: ', node.value, '
    if (typeof node.value !== 'undefined') {
        ret.name = node.value.toString();
    }
    // log 't/name ittf.ret', ret
    if (node.__parent && node.__parent.name === 'body' && node.__parent.len == 1) {
        // is the return value of an ArrowExpression
        if (node.extra && node.extra.parenthesized == true) {
            ret.tag = '(';
        }
        else {
            ret.tag = '+';
        }
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node Function
var Function_astNode = {
    name: "Function", 
    ittfTag: "function", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(Function_astNode)
format.Function = function(parent, node, options) {
    var f_astNode = Function_astNode;
    var __isText = false;
    // log 'node : Function ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'function', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'Function', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // A function [declaration](#functiondeclaration) or [expression](#functionexpression).
    // Process AST-node-property id and
    // set the resulting node.name on : ret || parent (cmd: onparent)
    // used mainly for Identifier(s)
    f_astNode.props.push({
        name: "id", 
        onParent: false, 
        iftext: false, 
        descr: "Process AST-node-property id and set the resulting node.name on : ret || parent (cmd: onparent) used mainly for Identifier(s)"
    })
    if (node.id) {
        if (!node.id.type) {
            throw 'Node id has no type: ' + JSON.stringify(node, null, 2);
        }
        var tempid = {
            children: [
                
            ]
        };
        format(tempid, node.id, options)
        /**
            if (tempid .children.length > 0) {
                throw 'node.id must result zero node, returned: ' + tempid.children.length + ' source: ' + options.input.substring(node.start, node.end);
            }
        */
        var appto = false ? parent : ret;
        if (tempid.children.length > 0) {
            appto.name = tempid.children[0].name;
        }
        else {
            appto.name = tempid.name;
        }
    }
    // process AST-node-property-collection params and
    // embed its array of nodes in a new tag
    f_astNode.props.push({
        name: "params", 
        tag: "params", 
        descr: "# process AST-node-property-collection params and embed its array of nodes in a new tag"
    })
    if (node.params) {
        if (typeof node.params.length === 'undefined') {
            throw new Error('Property node.params must be an array');
        }
        if (node.params.length > 0) {
            var tempparams = {
                tag: 'params', 
                ASTProp: 'params', 
                children: [
                    
                ]
            };
            var i, i_items=node.params, i_len=node.params.length, item;
            for (i=0; i<i_len; i++) {
                item = node.params[i];
                item.__parent = {
                    name: 'params', 
                    len: node.params.length
                };
                format(tempparams, item, options)
            }
            ret.children.push(tempparams)
        }
    }
    processParams(ret);
    // [ Pattern ]
    // process AST-node-property body and append ittfNode to `ret`
    f_astNode.props.push({
        name: "body", 
        descr: "process AST-node-property body and append ittfNode to `ret`"
    })
    if (node.body) {
        if (!node.body.type) {
            throw 'Node body has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.body, options)
    }
    else {
        throw new Error('AST-node-property body undefined: ' + JSON.stringify(node, null, 2));
    }
    // b( generator
    // b( async
    /**
        VIA
        replaceChildrenOfChildWhenText(ret, getChildPosByTag(ret, 'params'), 'param')*/
    if (node.generator) {
        ret.tag = 'function*';
    }
    if (node.async) {
        ret.tag = 'async-function';
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node ExpressionStatement
var ExpressionStatement_astNode = {
    name: "ExpressionStatement", 
    ittfTag: "stm", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(ExpressionStatement_astNode)
format.ExpressionStatement = function(parent, node, options) {
    var f_astNode = ExpressionStatement_astNode;
    var __isText = false;
    // log 'node : ExpressionStatement ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'stm', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'ExpressionStatement', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // An expression statement, i.e., a statement consisting of a single expression.
    // process AST-node-property expression and append ittfNode to `ret`
    f_astNode.props.push({
        name: "expression", 
        descr: "process AST-node-property expression and append ittfNode to `ret`"
    })
    if (node.expression) {
        if (!node.expression.type) {
            throw 'Node expression has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.expression, options)
    }
    else {
        throw new Error('AST-node-property expression undefined: ' + JSON.stringify(node, null, 2));
    }
    if (replaceWithSingleChild(ret, 'set')) {
    }
    else if (replaceWithSingleChild(ret, '_')) {
    }
    else {
        console.log('ExpressionStatement.failed.ret', ret);
        throw new Error();
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node BlockStatement
var BlockStatement_astNode = {
    name: "BlockStatement", 
    ittfTag: "block", 
    skip: true, 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(BlockStatement_astNode)
format.BlockStatement = function(parent, node, options) {
    var f_astNode = BlockStatement_astNode;
    var __isText = false;
    // log 'node : BlockStatement ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = parent;
    // process AST-node-property-collection body and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "body", 
        throwIfUndefined: true, 
        descr: "process AST-node-property-collection body and append ittfNode(s) to `ret`"
    })
    if (node.body) {
        if (typeof node.body.length === 'undefined') {
            throw new Error('Property node.body must be an array');
        }
        var i, i_items=node.body, i_len=node.body.length, item;
        for (i=0; i<i_len; i++) {
            item = node.body[i];
            item.__parent = {
                name: 'body', 
                len: node.body.length
            };
            format(ret, item, options)
        }
    }
    else {
        throw new Error('AST-node-property-collection body undefined: ' + JSON.stringify(node, null, 2));
    }
    // process AST-node-property-collection directives and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "directives", 
        throwIfUndefined: true, 
        descr: "process AST-node-property-collection directives and append ittfNode(s) to `ret`"
    })
    if (node.directives) {
        if (typeof node.directives.length === 'undefined') {
            throw new Error('Property node.directives must be an array');
        }
        var i, i_items=node.directives, i_len=node.directives.length, item;
        for (i=0; i<i_len; i++) {
            item = node.directives[i];
            item.__parent = {
                name: 'directives', 
                len: node.directives.length
            };
            format(ret, item, options)
        }
    }
    else {
        throw new Error('AST-node-property-collection directives undefined: ' + JSON.stringify(node, null, 2));
    }
    // A block statement, i.e., a sequence of statements surrounded by braces.
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
    }
};
// process AST node EmptyStatement
var EmptyStatement_astNode = {
    name: "EmptyStatement", 
    ittfTag: "", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(EmptyStatement_astNode)
format.EmptyStatement = function(parent, node, options) {
    var f_astNode = EmptyStatement_astNode;
    var __isText = false;
    // log 'node : EmptyStatement ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: '', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'EmptyStatement', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // An empty statement, i.e., a solitary semicolon.
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node DebuggerStatement
var DebuggerStatement_astNode = {
    name: "DebuggerStatement", 
    ittfTag: "debugger", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(DebuggerStatement_astNode)
format.DebuggerStatement = function(parent, node, options) {
    var f_astNode = DebuggerStatement_astNode;
    var __isText = false;
    // log 'node : DebuggerStatement ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'debugger', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'DebuggerStatement', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // A `debugger` statement.
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node WithStatement
var WithStatement_astNode = {
    name: "WithStatement", 
    ittfTag: "with", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(WithStatement_astNode)
format.WithStatement = function(parent, node, options) {
    var f_astNode = WithStatement_astNode;
    var __isText = false;
    // log 'node : WithStatement ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'with', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'WithStatement', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property object and append ittfNode to `ret`
    f_astNode.props.push({
        name: "object", 
        descr: "process AST-node-property object and append ittfNode to `ret`"
    })
    if (node.object) {
        if (!node.object.type) {
            throw 'Node object has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.object, options)
    }
    else {
        throw new Error('AST-node-property object undefined: ' + JSON.stringify(node, null, 2));
    }
    // process AST-node-property body and append ittfNode to `ret`
    f_astNode.props.push({
        name: "body", 
        descr: "process AST-node-property body and append ittfNode to `ret`"
    })
    if (node.body) {
        if (!node.body.type) {
            throw 'Node body has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.body, options)
    }
    else {
        throw new Error('AST-node-property body undefined: ' + JSON.stringify(node, null, 2));
    }
    // A `with` statement.
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node ReturnStatement
var ReturnStatement_astNode = {
    name: "ReturnStatement", 
    ittfTag: "return", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(ReturnStatement_astNode)
format.ReturnStatement = function(parent, node, options) {
    var f_astNode = ReturnStatement_astNode;
    var __isText = false;
    // log 'node : ReturnStatement ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'return', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'ReturnStatement', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property argument and append ittfNode to `ret`
    f_astNode.props.push({
        name: "argument", 
        descr: "process AST-node-property argument and append ittfNode to `ret`"
    })
    if (node.argument) {
        if (!node.argument.type) {
            throw 'Node argument has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.argument, options)
    }
    // log 'get_text_from_1_children', isChildrenCount(ret, 1)
    var got_text_1 = false;
    if (isChildrenCount(ret, 1)) {
        if (ret.children[0].textified || ret.children[0].isText) {
            var c1 = ret.children[0].textified || ret.children[0].name;
            ret.name = c1;
            ret.textified = ret.name;
            ret.children = [];
            got_text_1 = true;
        }
    }
    // log 'ReturnStatement', ret
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node LabeledStatement
var LabeledStatement_astNode = {
    name: "LabeledStatement", 
    ittfTag: "label", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(LabeledStatement_astNode)
format.LabeledStatement = function(parent, node, options) {
    var f_astNode = LabeledStatement_astNode;
    var __isText = false;
    // log 'node : LabeledStatement ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'label', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'LabeledStatement', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property label and set it in a var
    var p_label = null;
    if (typeof(node.label) !== 'undefined' && node.label != null) {
        p_label = {
            textified: null, 
            isText: false, 
            ASTProp: 'label', 
            children: [
                
            ]
        };
        if (node.label == null) {
            p_label.text = "null";
        }
        else {
            if (!node.label.type) {
                throw 'Node label has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp label before format'
            format(p_label, node.label, options)
            // log 'f_p_temp label after format', p_label.children.length, p_label
            var label_comments = extractCommentsIf(p_label, 1);
            if (p_label.children.length == 1) {
                p_label.tag = p_label.children[0].tag;
                if (!(p_label.children[0].isText || p_label.children[0].textified)) {
                    p_label.name = p_label.children[0].name;
                    p_label.source = p_label.children[0].source;
                    p_label.children = p_label.children[0].children;
                }
                else {
                    if (p_label.children[0].textified) {
                        p_label.textified = p_label.children[0].textified;
                    }
                    if (p_label.children[0].isText) {
                        p_label.isText = true;
                    }
                    p_label.name = p_label.children[0].name;
                    p_label.source = p_label.children[0].source;
                    p_label.children = [];
                }
            }
            if (label_comments.length > 0) {
                p_label.children = p_label.children.concat(label_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property label undefined: ' + JSON.stringify(node, null, 2));
    }
    ret.name = getNodeText(p_label);
    // process AST-node-property body and append ittfNode to `ret`
    f_astNode.props.push({
        name: "body", 
        descr: "process AST-node-property body and append ittfNode to `ret`"
    })
    if (node.body) {
        if (!node.body.type) {
            throw 'Node body has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.body, options)
    }
    else {
        throw new Error('AST-node-property body undefined: ' + JSON.stringify(node, null, 2));
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node BreakStatement
var BreakStatement_astNode = {
    name: "BreakStatement", 
    ittfTag: "break", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(BreakStatement_astNode)
format.BreakStatement = function(parent, node, options) {
    var f_astNode = BreakStatement_astNode;
    var __isText = false;
    // log 'node : BreakStatement ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'break', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'BreakStatement', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // Process AST-node-property label and
    // set the resulting node.name on : ret || parent (cmd: onparent)
    // used mainly for Identifier(s)
    f_astNode.props.push({
        name: "label", 
        onParent: false, 
        iftext: false, 
        descr: "Process AST-node-property label and set the resulting node.name on : ret || parent (cmd: onparent) used mainly for Identifier(s)"
    })
    if (node.label) {
        if (!node.label.type) {
            throw 'Node label has no type: ' + JSON.stringify(node, null, 2);
        }
        var templabel = {
            children: [
                
            ]
        };
        format(templabel, node.label, options)
        /**
            if (templabel .children.length > 0) {
                throw 'node.label must result zero node, returned: ' + templabel.children.length + ' source: ' + options.input.substring(node.start, node.end);
            }
        */
        var appto = false ? parent : ret;
        if (templabel.children.length > 0) {
            appto.name = templabel.children[0].name;
        }
        else {
            appto.name = templabel.name;
        }
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node ContinueStatement
var ContinueStatement_astNode = {
    name: "ContinueStatement", 
    ittfTag: "continue", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(ContinueStatement_astNode)
format.ContinueStatement = function(parent, node, options) {
    var f_astNode = ContinueStatement_astNode;
    var __isText = false;
    // log 'node : ContinueStatement ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'continue', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'ContinueStatement', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // Process AST-node-property label and
    // set the resulting node.name on : ret || parent (cmd: onparent)
    // used mainly for Identifier(s)
    f_astNode.props.push({
        name: "label", 
        onParent: false, 
        iftext: false, 
        descr: "Process AST-node-property label and set the resulting node.name on : ret || parent (cmd: onparent) used mainly for Identifier(s)"
    })
    if (node.label) {
        if (!node.label.type) {
            throw 'Node label has no type: ' + JSON.stringify(node, null, 2);
        }
        var templabel = {
            children: [
                
            ]
        };
        format(templabel, node.label, options)
        /**
            if (templabel .children.length > 0) {
                throw 'node.label must result zero node, returned: ' + templabel.children.length + ' source: ' + options.input.substring(node.start, node.end);
            }
        */
        var appto = false ? parent : ret;
        if (templabel.children.length > 0) {
            appto.name = templabel.children[0].name;
        }
        else {
            appto.name = templabel.name;
        }
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node IfStatement
var IfStatement_astNode = {
    name: "IfStatement", 
    ittfTag: "if", 
    retIsArray: true, 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(IfStatement_astNode)
format.IfStatement = function(parent, node, options) {
    var f_astNode = IfStatement_astNode;
    var __isText = false;
    // log 'node : IfStatement ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'if', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'IfStatement', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    f_astNode.props.push({
        name: "test", 
        tag: "test", 
        descr: "fragment f_p_tag"
    })
    var p_test = {
        textified: null, 
        isText: false, 
        ASTProp: 'test', 
        children: [
            
        ]
    };
    if (node.test) {
        if (!node.test.type) {
            throw 'Node test has no type: ' + JSON.stringify(node, null, 2);
        }
        format(p_test, node.test, options)
        p_test.tag = 'test';
        ret.children.push(p_test)
        if (p_test.children.length == 1) {
            // log '*** f_p_tag test children[0].textified', p_test.children[0].textified
            // log '*** f_p_tag test children[0].isText', p_test.children[0].isText
            // log '*** f_p_tag test children[0].name', p_test.children[0].name
            if (p_test.children[0].textified) {
                p_test.textified = p_test.children[0].textified;
            }
            if (p_test.children[0].isText) {
                p_test.isText = true;
                p_test.name = p_test.children[0].name;
                p_test.children = [];
            }
        }
        /**
            TODO VIA
            else {
                throw new Error('AST-property test/test not managed by f_p_tag');
            }
        */
    }
    setNameFromChildByTag(ret, 'test', true);
    if (node.consequent) {
        // process AST-node-property consequent and set it in a var
        var p_consequent = null;
        if (typeof(node.consequent) !== 'undefined' && node.consequent != null) {
            p_consequent = {
                textified: null, 
                isText: false, 
                ASTProp: 'consequent', 
                children: [
                    
                ]
            };
            if (node.consequent == null) {
                p_consequent.text = "null";
            }
            else {
                if (!node.consequent.type) {
                    throw 'Node consequent has no type: ' + JSON.stringify(node, null, 2);
                }
                // log 'f_p_temp consequent before format'
                format(p_consequent, node.consequent, options)
                // log 'f_p_temp consequent after format', p_consequent.children.length, p_consequent
                var consequent_comments = extractCommentsIf(p_consequent, 1);
                if (p_consequent.children.length == 1) {
                    p_consequent.tag = p_consequent.children[0].tag;
                    if (!(p_consequent.children[0].isText || p_consequent.children[0].textified)) {
                        p_consequent.name = p_consequent.children[0].name;
                        p_consequent.source = p_consequent.children[0].source;
                        p_consequent.children = p_consequent.children[0].children;
                    }
                    else {
                        if (p_consequent.children[0].textified) {
                            p_consequent.textified = p_consequent.children[0].textified;
                        }
                        if (p_consequent.children[0].isText) {
                            p_consequent.isText = true;
                        }
                        p_consequent.name = p_consequent.children[0].name;
                        p_consequent.source = p_consequent.children[0].source;
                        p_consequent.children = [];
                    }
                }
                if (consequent_comments.length > 0) {
                    p_consequent.children = p_consequent.children.concat(consequent_comments);
                }
            }
        }
        else {
            throw new Error('AST-node-property consequent undefined: ' + JSON.stringify(node, null, 2));
        }
        // log 'IfStatement', p_consequent
        if (p_consequent.tag && p_consequent.tag.length > 0) {
            ret.children.push(p_consequent);
        }
        else {
            var i, i_items=p_consequent.children, i_len=p_consequent.children.length, item;
            for (i=0; i<i_len; i++) {
                item = p_consequent.children[i];
                ret.children.push(item);
            }
        }
    }
    if (node.alternate) {
        // process AST-node-property alternate and set it in a var
        var p_alternate = null;
        if (typeof(node.alternate) !== 'undefined' && node.alternate != null) {
            p_alternate = {
                textified: null, 
                isText: false, 
                ASTProp: 'alternate', 
                children: [
                    
                ]
            };
            if (node.alternate == null) {
                p_alternate.text = "null";
            }
            else {
                if (!node.alternate.type) {
                    throw 'Node alternate has no type: ' + JSON.stringify(node, null, 2);
                }
                // log 'f_p_temp alternate before format'
                format(p_alternate, node.alternate, options)
                // log 'f_p_temp alternate after format', p_alternate.children.length, p_alternate
                var alternate_comments = extractCommentsIf(p_alternate, 1);
                if (p_alternate.children.length == 1) {
                    p_alternate.tag = p_alternate.children[0].tag;
                    if (!(p_alternate.children[0].isText || p_alternate.children[0].textified)) {
                        p_alternate.name = p_alternate.children[0].name;
                        p_alternate.source = p_alternate.children[0].source;
                        p_alternate.children = p_alternate.children[0].children;
                    }
                    else {
                        if (p_alternate.children[0].textified) {
                            p_alternate.textified = p_alternate.children[0].textified;
                        }
                        if (p_alternate.children[0].isText) {
                            p_alternate.isText = true;
                        }
                        p_alternate.name = p_alternate.children[0].name;
                        p_alternate.source = p_alternate.children[0].source;
                        p_alternate.children = [];
                    }
                }
                if (alternate_comments.length > 0) {
                    p_alternate.children = p_alternate.children.concat(alternate_comments);
                }
            }
        }
        else {
            throw new Error('AST-node-property alternate undefined: ' + JSON.stringify(node, null, 2));
        }
        var p_else = {
            tag: 'else', 
            children: [
                
            ]
        };
        // log 'IfStatement', p_consequent
        if (p_alternate.tag && p_alternate.tag.length > 0) {
            p_else.children.push(p_alternate);
        }
        else {
            var i, i_items=p_alternate.children, i_len=p_alternate.children.length, item;
            for (i=0; i<i_len; i++) {
                item = p_alternate.children[i];
                p_else.children.push(item);
            }
        }
        ret = [ret, p_else];
    }
    else {
        ret = [ret];
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            var i, i_items=ret, i_len=ret.length, item;
            for (i=0; i<i_len; i++) {
                item = ret[i];
                parent.children.push(item);
            }
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node SwitchStatement
var SwitchStatement_astNode = {
    name: "SwitchStatement", 
    ittfTag: "switch", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(SwitchStatement_astNode)
format.SwitchStatement = function(parent, node, options) {
    var f_astNode = SwitchStatement_astNode;
    var __isText = false;
    // log 'node : SwitchStatement ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'switch', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'SwitchStatement', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // A `switch` statement.
    // process AST-node-property discriminant and set it in a var
    var p_discriminant = null;
    if (typeof(node.discriminant) !== 'undefined' && node.discriminant != null) {
        p_discriminant = {
            textified: null, 
            isText: false, 
            ASTProp: 'discriminant', 
            children: [
                
            ]
        };
        if (node.discriminant == null) {
            p_discriminant.text = "null";
        }
        else {
            if (!node.discriminant.type) {
                throw 'Node discriminant has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp discriminant before format'
            format(p_discriminant, node.discriminant, options)
            // log 'f_p_temp discriminant after format', p_discriminant.children.length, p_discriminant
            var discriminant_comments = extractCommentsIf(p_discriminant, 1);
            if (p_discriminant.children.length == 1) {
                p_discriminant.tag = p_discriminant.children[0].tag;
                if (!(p_discriminant.children[0].isText || p_discriminant.children[0].textified)) {
                    p_discriminant.name = p_discriminant.children[0].name;
                    p_discriminant.source = p_discriminant.children[0].source;
                    p_discriminant.children = p_discriminant.children[0].children;
                }
                else {
                    if (p_discriminant.children[0].textified) {
                        p_discriminant.textified = p_discriminant.children[0].textified;
                    }
                    if (p_discriminant.children[0].isText) {
                        p_discriminant.isText = true;
                    }
                    p_discriminant.name = p_discriminant.children[0].name;
                    p_discriminant.source = p_discriminant.children[0].source;
                    p_discriminant.children = [];
                }
            }
            if (discriminant_comments.length > 0) {
                p_discriminant.children = p_discriminant.children.concat(discriminant_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property discriminant undefined: ' + JSON.stringify(node, null, 2));
    }
    if (isTextualNode(p_discriminant)) {
        ret.name = p_discriminant.textified || p_discriminant.name;
        ret.textified = ret.name;
    }
    else {
        ret.children.push(p_discriminant)
    }
    // process AST-node-property-collection cases and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "cases", 
        throwIfUndefined: true, 
        descr: "process AST-node-property-collection cases and append ittfNode(s) to `ret`"
    })
    if (node.cases) {
        if (typeof node.cases.length === 'undefined') {
            throw new Error('Property node.cases must be an array');
        }
        var i, i_items=node.cases, i_len=node.cases.length, item;
        for (i=0; i<i_len; i++) {
            item = node.cases[i];
            item.__parent = {
                name: 'cases', 
                len: node.cases.length
            };
            format(ret, item, options)
        }
    }
    else {
        throw new Error('AST-node-property-collection cases undefined: ' + JSON.stringify(node, null, 2));
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node SwitchCase
var SwitchCase_astNode = {
    name: "SwitchCase", 
    ittfTag: "case", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(SwitchCase_astNode)
format.SwitchCase = function(parent, node, options) {
    var f_astNode = SwitchCase_astNode;
    var __isText = false;
    // log 'node : SwitchCase ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'case', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'SwitchCase', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property test and set it in a var
    var p_test = null;
    if (typeof(node.test) !== 'undefined' && node.test != null) {
        p_test = {
            textified: null, 
            isText: false, 
            ASTProp: 'test', 
            children: [
                
            ]
        };
        if (node.test == null) {
            p_test.text = "null";
        }
        else {
            if (!node.test.type) {
                throw 'Node test has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp test before format'
            format(p_test, node.test, options)
            // log 'f_p_temp test after format', p_test.children.length, p_test
            var test_comments = extractCommentsIf(p_test, 1);
            if (p_test.children.length == 1) {
                p_test.tag = p_test.children[0].tag;
                if (!(p_test.children[0].isText || p_test.children[0].textified)) {
                    p_test.name = p_test.children[0].name;
                    p_test.source = p_test.children[0].source;
                    p_test.children = p_test.children[0].children;
                }
                else {
                    if (p_test.children[0].textified) {
                        p_test.textified = p_test.children[0].textified;
                    }
                    if (p_test.children[0].isText) {
                        p_test.isText = true;
                    }
                    p_test.name = p_test.children[0].name;
                    p_test.source = p_test.children[0].source;
                    p_test.children = [];
                }
            }
            if (test_comments.length > 0) {
                p_test.children = p_test.children.concat(test_comments);
            }
        }
    }
    // process AST-node-property-collection consequent and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "consequent", 
        throwIfUndefined: true, 
        descr: "process AST-node-property-collection consequent and append ittfNode(s) to `ret`"
    })
    if (node.consequent) {
        if (typeof node.consequent.length === 'undefined') {
            throw new Error('Property node.consequent must be an array');
        }
        var i, i_items=node.consequent, i_len=node.consequent.length, item;
        for (i=0; i<i_len; i++) {
            item = node.consequent[i];
            item.__parent = {
                name: 'consequent', 
                len: node.consequent.length
            };
            format(ret, item, options)
        }
    }
    else {
        throw new Error('AST-node-property-collection consequent undefined: ' + JSON.stringify(node, null, 2));
    }
    // A `case` (if `test` is an `Expression`) or `default` (if `test === null`) clause in the body of a `switch` statement.
    //
    if (node.test == null) {
        ret.tag = 'default';
    }
    else {
        if (p_test.textified || p_test.isText) {
            ret.name = p_test.textified || p_test.name;
            ret.textified = ret.name;
        }
        else {
            throw new Error('SwitchCase.test must be textual:' + JSON.stringify(node, null, 2));
        }
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node ThrowStatement
var ThrowStatement_astNode = {
    name: "ThrowStatement", 
    ittfTag: "throw", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(ThrowStatement_astNode)
format.ThrowStatement = function(parent, node, options) {
    var f_astNode = ThrowStatement_astNode;
    var __isText = false;
    // log 'node : ThrowStatement ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'throw', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'ThrowStatement', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property argument and set it in a var
    var p_argument = null;
    if (typeof(node.argument) !== 'undefined' && node.argument != null) {
        p_argument = {
            textified: null, 
            isText: false, 
            ASTProp: 'argument', 
            children: [
                
            ]
        };
        if (node.argument == null) {
            p_argument.text = "null";
        }
        else {
            if (!node.argument.type) {
                throw 'Node argument has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp argument before format'
            format(p_argument, node.argument, options)
            // log 'f_p_temp argument after format', p_argument.children.length, p_argument
            var argument_comments = extractCommentsIf(p_argument, 1);
            if (p_argument.children.length == 1) {
                p_argument.tag = p_argument.children[0].tag;
                if (!(p_argument.children[0].isText || p_argument.children[0].textified)) {
                    p_argument.name = p_argument.children[0].name;
                    p_argument.source = p_argument.children[0].source;
                    p_argument.children = p_argument.children[0].children;
                }
                else {
                    if (p_argument.children[0].textified) {
                        p_argument.textified = p_argument.children[0].textified;
                    }
                    if (p_argument.children[0].isText) {
                        p_argument.isText = true;
                    }
                    p_argument.name = p_argument.children[0].name;
                    p_argument.source = p_argument.children[0].source;
                    p_argument.children = [];
                }
            }
            if (argument_comments.length > 0) {
                p_argument.children = p_argument.children.concat(argument_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property argument undefined: ' + JSON.stringify(node, null, 2));
    }
    // A `throw` statement.
    if (isTextualNode(p_argument)) {
        ret.name = getNodeText(p_argument);
    }
    else {
        ret.children.push(p_argument)
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TryStatement
var TryStatement_astNode = {
    name: "TryStatement", 
    ittfTag: "try", 
    retIsArray: true, 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TryStatement_astNode)
format.TryStatement = function(parent, node, options) {
    var f_astNode = TryStatement_astNode;
    var __isText = false;
    // log 'node : TryStatement ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'try', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TryStatement', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // log 'wizzifiers.js.TryStatement', JSON.stringify(node, null, 2)
    // process AST-node-property block and append ittfNode to `ret`
    f_astNode.props.push({
        name: "block", 
        descr: "process AST-node-property block and append ittfNode to `ret`"
    })
    if (node.block) {
        if (!node.block.type) {
            throw 'Node block has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.block, options)
    }
    else {
        throw new Error('AST-node-property block undefined: ' + JSON.stringify(node, null, 2));
    }
    // process AST-node-property handler and set it in a var
    var p_handler = null;
    if (typeof(node.handler) !== 'undefined' && node.handler != null) {
        p_handler = {
            textified: null, 
            isText: false, 
            ASTProp: 'handler', 
            children: [
                
            ]
        };
        if (node.handler == null) {
            p_handler.text = "null";
        }
        else {
            if (!node.handler.type) {
                throw 'Node handler has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp handler before format'
            format(p_handler, node.handler, options)
            // log 'f_p_temp handler after format', p_handler.children.length, p_handler
            var handler_comments = extractCommentsIf(p_handler, 1);
            if (p_handler.children.length == 1) {
                p_handler.tag = p_handler.children[0].tag;
                if (!(p_handler.children[0].isText || p_handler.children[0].textified)) {
                    p_handler.name = p_handler.children[0].name;
                    p_handler.source = p_handler.children[0].source;
                    p_handler.children = p_handler.children[0].children;
                }
                else {
                    if (p_handler.children[0].textified) {
                        p_handler.textified = p_handler.children[0].textified;
                    }
                    if (p_handler.children[0].isText) {
                        p_handler.isText = true;
                    }
                    p_handler.name = p_handler.children[0].name;
                    p_handler.source = p_handler.children[0].source;
                    p_handler.children = [];
                }
            }
            if (handler_comments.length > 0) {
                p_handler.children = p_handler.children.concat(handler_comments);
            }
        }
    }
    // process AST-node-property finalizer and set it in a var
    var p_finalizer = null;
    if (typeof(node.finalizer) !== 'undefined' && node.finalizer != null) {
        p_finalizer = {
            textified: null, 
            isText: false, 
            ASTProp: 'finalizer', 
            children: [
                
            ]
        };
        if (node.finalizer == null) {
            p_finalizer.text = "null";
        }
        else {
            if (!node.finalizer.type) {
                throw 'Node finalizer has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp finalizer before format'
            format(p_finalizer, node.finalizer, options)
            // log 'f_p_temp finalizer after format', p_finalizer.children.length, p_finalizer
            var finalizer_comments = extractCommentsIf(p_finalizer, 1);
            if (p_finalizer.children.length == 1) {
                p_finalizer.tag = p_finalizer.children[0].tag;
                if (!(p_finalizer.children[0].isText || p_finalizer.children[0].textified)) {
                    p_finalizer.name = p_finalizer.children[0].name;
                    p_finalizer.source = p_finalizer.children[0].source;
                    p_finalizer.children = p_finalizer.children[0].children;
                }
                else {
                    if (p_finalizer.children[0].textified) {
                        p_finalizer.textified = p_finalizer.children[0].textified;
                    }
                    if (p_finalizer.children[0].isText) {
                        p_finalizer.isText = true;
                    }
                    p_finalizer.name = p_finalizer.children[0].name;
                    p_finalizer.source = p_finalizer.children[0].source;
                    p_finalizer.children = [];
                }
            }
            if (finalizer_comments.length > 0) {
                p_finalizer.children = p_finalizer.children.concat(finalizer_comments);
            }
        }
    }
    var tempRet = [ ret ];
    // log 'TryStatement.p_handler', p_handler
    // log 'TryStatement.p_finalizer', p_finalizer
    if (p_handler) {
        tempRet.push(p_handler);
    }
    if (p_finalizer) {
        if (p_finalizer.children.length > 0) {
            p_finalizer.tag = 'finally';
            tempRet.push(p_finalizer);
        }
        else {
            if (p_finalizer.tag) {
                tempRet.push({
                    tag: 'finally', 
                    name: '', 
                    children: [
                        p_finalizer
                    ]
                })
            }
        }
    }
    ret = tempRet;
    // A `try` statement. If `handler` is `null` then `finalizer` must be a `BlockStatement`.
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            var i, i_items=ret, i_len=ret.length, item;
            for (i=0; i<i_len; i++) {
                item = ret[i];
                parent.children.push(item);
            }
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node CatchClause
var CatchClause_astNode = {
    name: "CatchClause", 
    ittfTag: "catch", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(CatchClause_astNode)
format.CatchClause = function(parent, node, options) {
    var f_astNode = CatchClause_astNode;
    var __isText = false;
    // log 'node : CatchClause ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'catch', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'CatchClause', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // A `catch` clause following a `try` block.
    // Process AST-node-property param and
    // set the resulting node.name on : ret || parent (cmd: onparent)
    // used mainly for Identifier(s)
    f_astNode.props.push({
        name: "param", 
        onParent: false, 
        iftext: false, 
        descr: "Process AST-node-property param and set the resulting node.name on : ret || parent (cmd: onparent) used mainly for Identifier(s)"
    })
    if (node.param) {
        if (!node.param.type) {
            throw 'Node param has no type: ' + JSON.stringify(node, null, 2);
        }
        var tempparam = {
            children: [
                
            ]
        };
        format(tempparam, node.param, options)
        /**
            if (tempparam .children.length > 0) {
                throw 'node.param must result zero node, returned: ' + tempparam.children.length + ' source: ' + options.input.substring(node.start, node.end);
            }
        */
        var appto = false ? parent : ret;
        if (tempparam.children.length > 0) {
            appto.name = tempparam.children[0].name;
        }
        else {
            appto.name = tempparam.name;
        }
    }
    // process AST-node-property body and append ittfNode to `ret`
    f_astNode.props.push({
        name: "body", 
        descr: "process AST-node-property body and append ittfNode to `ret`"
    })
    if (node.body) {
        if (!node.body.type) {
            throw 'Node body has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.body, options)
    }
    else {
        throw new Error('AST-node-property body undefined: ' + JSON.stringify(node, null, 2));
    }
    // log 'CatchClause.ret', ret
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node WhileStatement
var WhileStatement_astNode = {
    name: "WhileStatement", 
    ittfTag: "while", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(WhileStatement_astNode)
format.WhileStatement = function(parent, node, options) {
    var f_astNode = WhileStatement_astNode;
    var __isText = false;
    // log 'node : WhileStatement ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'while', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'WhileStatement', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    f_astNode.props.push({
        name: "test", 
        tag: "test", 
        descr: "fragment f_p_tag"
    })
    var p_test = {
        textified: null, 
        isText: false, 
        ASTProp: 'test', 
        children: [
            
        ]
    };
    if (node.test) {
        if (!node.test.type) {
            throw 'Node test has no type: ' + JSON.stringify(node, null, 2);
        }
        format(p_test, node.test, options)
        p_test.tag = 'test';
        ret.children.push(p_test)
        if (p_test.children.length == 1) {
            // log '*** f_p_tag test children[0].textified', p_test.children[0].textified
            // log '*** f_p_tag test children[0].isText', p_test.children[0].isText
            // log '*** f_p_tag test children[0].name', p_test.children[0].name
            if (p_test.children[0].textified) {
                p_test.textified = p_test.children[0].textified;
            }
            if (p_test.children[0].isText) {
                p_test.isText = true;
                p_test.name = p_test.children[0].name;
                p_test.children = [];
            }
        }
        /**
            TODO VIA
            else {
                throw new Error('AST-property test/test not managed by f_p_tag');
            }
        */
    }
    // log 'get_text_from_1_children', isChildrenCount(ret, 1)
    var got_text_1 = false;
    if (isChildrenCount(ret, 1)) {
        if (ret.children[0].textified || ret.children[0].isText) {
            var c1 = ret.children[0].textified || ret.children[0].name;
            ret.name = c1;
            ret.textified = ret.name;
            ret.children = [];
            got_text_1 = true;
        }
    }
    // process AST-node-property body and append ittfNode to `ret`
    f_astNode.props.push({
        name: "body", 
        descr: "process AST-node-property body and append ittfNode to `ret`"
    })
    if (node.body) {
        if (!node.body.type) {
            throw 'Node body has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.body, options)
    }
    else {
        throw new Error('AST-node-property body undefined: ' + JSON.stringify(node, null, 2));
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node DoWhileStatement
var DoWhileStatement_astNode = {
    name: "DoWhileStatement", 
    ittfTag: "do", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(DoWhileStatement_astNode)
format.DoWhileStatement = function(parent, node, options) {
    var f_astNode = DoWhileStatement_astNode;
    var __isText = false;
    // log 'node : DoWhileStatement ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'do', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'DoWhileStatement', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    f_astNode.props.push({
        name: "test", 
        tag: "test", 
        descr: "fragment f_p_tag"
    })
    var p_test = {
        textified: null, 
        isText: false, 
        ASTProp: 'test', 
        children: [
            
        ]
    };
    if (node.test) {
        if (!node.test.type) {
            throw 'Node test has no type: ' + JSON.stringify(node, null, 2);
        }
        format(p_test, node.test, options)
        p_test.tag = 'test';
        ret.children.push(p_test)
        if (p_test.children.length == 1) {
            // log '*** f_p_tag test children[0].textified', p_test.children[0].textified
            // log '*** f_p_tag test children[0].isText', p_test.children[0].isText
            // log '*** f_p_tag test children[0].name', p_test.children[0].name
            if (p_test.children[0].textified) {
                p_test.textified = p_test.children[0].textified;
            }
            if (p_test.children[0].isText) {
                p_test.isText = true;
                p_test.name = p_test.children[0].name;
                p_test.children = [];
            }
        }
        /**
            TODO VIA
            else {
                throw new Error('AST-property test/test not managed by f_p_tag');
            }
        */
    }
    // log 'get_text_from_1_children', isChildrenCount(ret, 1)
    var got_text_1 = false;
    if (isChildrenCount(ret, 1)) {
        if (ret.children[0].textified || ret.children[0].isText) {
            var c1 = ret.children[0].textified || ret.children[0].name;
            ret.name = c1;
            ret.textified = ret.name;
            ret.children = [];
            got_text_1 = true;
        }
    }
    // process AST-node-property body and append ittfNode to `ret`
    f_astNode.props.push({
        name: "body", 
        descr: "process AST-node-property body and append ittfNode to `ret`"
    })
    if (node.body) {
        if (!node.body.type) {
            throw 'Node body has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.body, options)
    }
    else {
        throw new Error('AST-node-property body undefined: ' + JSON.stringify(node, null, 2));
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node ForStatement
var ForStatement_astNode = {
    name: "ForStatement", 
    ittfTag: "for", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(ForStatement_astNode)
format.ForStatement = function(parent, node, options) {
    var f_astNode = ForStatement_astNode;
    var __isText = false;
    // log 'node : ForStatement ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'for', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'ForStatement', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    f_astNode.props.push({
        name: "init", 
        tag: "init", 
        descr: "fragment f_p_tag"
    })
    var p_init = {
        textified: null, 
        isText: false, 
        ASTProp: 'init', 
        children: [
            
        ]
    };
    if (node.init) {
        if (!node.init.type) {
            throw 'Node init has no type: ' + JSON.stringify(node, null, 2);
        }
        format(p_init, node.init, options)
        p_init.tag = 'init';
        ret.children.push(p_init)
        if (p_init.children.length == 1) {
            // log '*** f_p_tag init children[0].textified', p_init.children[0].textified
            // log '*** f_p_tag init children[0].isText', p_init.children[0].isText
            // log '*** f_p_tag init children[0].name', p_init.children[0].name
            if (p_init.children[0].textified) {
                p_init.textified = p_init.children[0].textified;
            }
            if (p_init.children[0].isText) {
                p_init.isText = true;
                p_init.name = p_init.children[0].name;
                p_init.children = [];
            }
        }
        /**
            TODO VIA
            else {
                throw new Error('AST-property init/init not managed by f_p_tag');
            }
        */
    }
    f_astNode.props.push({
        name: "test", 
        tag: "test", 
        descr: "fragment f_p_tag"
    })
    var p_test = {
        textified: null, 
        isText: false, 
        ASTProp: 'test', 
        children: [
            
        ]
    };
    if (node.test) {
        if (!node.test.type) {
            throw 'Node test has no type: ' + JSON.stringify(node, null, 2);
        }
        format(p_test, node.test, options)
        p_test.tag = 'test';
        ret.children.push(p_test)
        if (p_test.children.length == 1) {
            // log '*** f_p_tag test children[0].textified', p_test.children[0].textified
            // log '*** f_p_tag test children[0].isText', p_test.children[0].isText
            // log '*** f_p_tag test children[0].name', p_test.children[0].name
            if (p_test.children[0].textified) {
                p_test.textified = p_test.children[0].textified;
            }
            if (p_test.children[0].isText) {
                p_test.isText = true;
                p_test.name = p_test.children[0].name;
                p_test.children = [];
            }
        }
        /**
            TODO VIA
            else {
                throw new Error('AST-property test/test not managed by f_p_tag');
            }
        */
    }
    f_astNode.props.push({
        name: "update", 
        tag: "update", 
        descr: "fragment f_p_tag"
    })
    var p_update = {
        textified: null, 
        isText: false, 
        ASTProp: 'update', 
        children: [
            
        ]
    };
    if (node.update) {
        if (!node.update.type) {
            throw 'Node update has no type: ' + JSON.stringify(node, null, 2);
        }
        format(p_update, node.update, options)
        p_update.tag = 'update';
        ret.children.push(p_update)
        if (p_update.children.length == 1) {
            // log '*** f_p_tag update children[0].textified', p_update.children[0].textified
            // log '*** f_p_tag update children[0].isText', p_update.children[0].isText
            // log '*** f_p_tag update children[0].name', p_update.children[0].name
            if (p_update.children[0].textified) {
                p_update.textified = p_update.children[0].textified;
            }
            if (p_update.children[0].isText) {
                p_update.isText = true;
                p_update.name = p_update.children[0].name;
                p_update.children = [];
            }
        }
        /**
            TODO VIA
            else {
                throw new Error('AST-property update/update not managed by f_p_tag');
            }
        */
    }
    // log 'p_init.textified', p_init.textified
    var c1 = p_init.isText ? p_init.name : (p_init.textified ? p_init.textified : '');
    var c2 = p_test.isText ? p_test.name : (p_test.textified ? p_test.textified : '');
    var c3 = p_update.isText ? p_update.name : (p_update.textified ? p_update.textified : '');
    ret.name = c1 + '; ' + c2 + '; ' + c3;
    removeChildByTag(ret, 'init');
    removeChildByTag(ret, 'test');
    removeChildByTag(ret, 'update');
    // process AST-node-property body and append ittfNode to `ret`
    f_astNode.props.push({
        name: "body", 
        descr: "process AST-node-property body and append ittfNode to `ret`"
    })
    if (node.body) {
        if (!node.body.type) {
            throw 'Node body has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.body, options)
    }
    else {
        throw new Error('AST-node-property body undefined: ' + JSON.stringify(node, null, 2));
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node ForInStatement
var ForInStatement_astNode = {
    name: "ForInStatement", 
    ittfTag: "for", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(ForInStatement_astNode)
format.ForInStatement = function(parent, node, options) {
    var f_astNode = ForInStatement_astNode;
    var __isText = false;
    // log 'node : ForInStatement ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'for', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'ForInStatement', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property left and set it in a var
    var p_left = null;
    if (typeof(node.left) !== 'undefined' && node.left != null) {
        p_left = {
            textified: null, 
            isText: false, 
            ASTProp: 'left', 
            children: [
                
            ]
        };
        if (node.left == null) {
            p_left.text = "null";
        }
        else {
            if (!node.left.type) {
                throw 'Node left has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp left before format'
            format(p_left, node.left, options)
            // log 'f_p_temp left after format', p_left.children.length, p_left
            var left_comments = extractCommentsIf(p_left, 1);
            if (p_left.children.length == 1) {
                p_left.tag = p_left.children[0].tag;
                if (!(p_left.children[0].isText || p_left.children[0].textified)) {
                    p_left.name = p_left.children[0].name;
                    p_left.source = p_left.children[0].source;
                    p_left.children = p_left.children[0].children;
                }
                else {
                    if (p_left.children[0].textified) {
                        p_left.textified = p_left.children[0].textified;
                    }
                    if (p_left.children[0].isText) {
                        p_left.isText = true;
                    }
                    p_left.name = p_left.children[0].name;
                    p_left.source = p_left.children[0].source;
                    p_left.children = [];
                }
            }
            if (left_comments.length > 0) {
                p_left.children = p_left.children.concat(left_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property left undefined: ' + JSON.stringify(node, null, 2));
    }
    // process AST-node-property right and set it in a var
    var p_right = null;
    if (typeof(node.right) !== 'undefined' && node.right != null) {
        p_right = {
            textified: null, 
            isText: false, 
            ASTProp: 'right', 
            children: [
                
            ]
        };
        if (node.right == null) {
            p_right.text = "null";
        }
        else {
            if (!node.right.type) {
                throw 'Node right has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp right before format'
            format(p_right, node.right, options)
            // log 'f_p_temp right after format', p_right.children.length, p_right
            var right_comments = extractCommentsIf(p_right, 1);
            if (p_right.children.length == 1) {
                p_right.tag = p_right.children[0].tag;
                if (!(p_right.children[0].isText || p_right.children[0].textified)) {
                    p_right.name = p_right.children[0].name;
                    p_right.source = p_right.children[0].source;
                    p_right.children = p_right.children[0].children;
                }
                else {
                    if (p_right.children[0].textified) {
                        p_right.textified = p_right.children[0].textified;
                    }
                    if (p_right.children[0].isText) {
                        p_right.isText = true;
                    }
                    p_right.name = p_right.children[0].name;
                    p_right.source = p_right.children[0].source;
                    p_right.children = [];
                }
            }
            if (right_comments.length > 0) {
                p_right.children = p_right.children.concat(right_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property right undefined: ' + JSON.stringify(node, null, 2));
    }
    if (isTextualNode(p_left)) {
        ret.name = getNodeText(p_left);
        if (isTextualNode(p_right)) {
            ret.name += ' in ' + getNodeText(p_right);
        }
        else {
            ret.children.push({
                tag: 'in', 
                children: [
                    p_right
                ]
            })
        }
    }
    else {
        ret.children.push({
            tag: 'left', 
            children: [
                p_left
            ]
        })
        if (isTextualNode(p_right)) {
            ret.children.push({
                tag: 'in', 
                name: getNodeText(p_right), 
                children: [
                    
                ]
            })
        }
        else {
            ret.children.push({
                tag: 'in', 
                children: [
                    p_right
                ]
            })
        }
    }
    // log 'node.await', node.await
    if (!!node.await == true) {
        ret.children.push({
            tag: 'await', 
            children: [
                
            ]
        })
    }
    // process AST-node-property body and append ittfNode to `ret`
    f_astNode.props.push({
        name: "body", 
        descr: "process AST-node-property body and append ittfNode to `ret`"
    })
    if (node.body) {
        if (!node.body.type) {
            throw 'Node body has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.body, options)
    }
    else {
        throw new Error('AST-node-property body undefined: ' + JSON.stringify(node, null, 2));
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node ForOfStatement
var ForOfStatement_astNode = {
    name: "ForOfStatement", 
    ittfTag: "for", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(ForOfStatement_astNode)
format.ForOfStatement = function(parent, node, options) {
    var f_astNode = ForOfStatement_astNode;
    var __isText = false;
    // log 'node : ForOfStatement ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'for', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'ForOfStatement', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property left and set it in a var
    var p_left = null;
    if (typeof(node.left) !== 'undefined' && node.left != null) {
        p_left = {
            textified: null, 
            isText: false, 
            ASTProp: 'left', 
            children: [
                
            ]
        };
        if (node.left == null) {
            p_left.text = "null";
        }
        else {
            if (!node.left.type) {
                throw 'Node left has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp left before format'
            format(p_left, node.left, options)
            // log 'f_p_temp left after format', p_left.children.length, p_left
            var left_comments = extractCommentsIf(p_left, 1);
            if (p_left.children.length == 1) {
                p_left.tag = p_left.children[0].tag;
                if (!(p_left.children[0].isText || p_left.children[0].textified)) {
                    p_left.name = p_left.children[0].name;
                    p_left.source = p_left.children[0].source;
                    p_left.children = p_left.children[0].children;
                }
                else {
                    if (p_left.children[0].textified) {
                        p_left.textified = p_left.children[0].textified;
                    }
                    if (p_left.children[0].isText) {
                        p_left.isText = true;
                    }
                    p_left.name = p_left.children[0].name;
                    p_left.source = p_left.children[0].source;
                    p_left.children = [];
                }
            }
            if (left_comments.length > 0) {
                p_left.children = p_left.children.concat(left_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property left undefined: ' + JSON.stringify(node, null, 2));
    }
    // process AST-node-property right and set it in a var
    var p_right = null;
    if (typeof(node.right) !== 'undefined' && node.right != null) {
        p_right = {
            textified: null, 
            isText: false, 
            ASTProp: 'right', 
            children: [
                
            ]
        };
        if (node.right == null) {
            p_right.text = "null";
        }
        else {
            if (!node.right.type) {
                throw 'Node right has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp right before format'
            format(p_right, node.right, options)
            // log 'f_p_temp right after format', p_right.children.length, p_right
            var right_comments = extractCommentsIf(p_right, 1);
            if (p_right.children.length == 1) {
                p_right.tag = p_right.children[0].tag;
                if (!(p_right.children[0].isText || p_right.children[0].textified)) {
                    p_right.name = p_right.children[0].name;
                    p_right.source = p_right.children[0].source;
                    p_right.children = p_right.children[0].children;
                }
                else {
                    if (p_right.children[0].textified) {
                        p_right.textified = p_right.children[0].textified;
                    }
                    if (p_right.children[0].isText) {
                        p_right.isText = true;
                    }
                    p_right.name = p_right.children[0].name;
                    p_right.source = p_right.children[0].source;
                    p_right.children = [];
                }
            }
            if (right_comments.length > 0) {
                p_right.children = p_right.children.concat(right_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property right undefined: ' + JSON.stringify(node, null, 2));
    }
    console.log('ForOfStatement', isTextualNode(p_left), isTextualNode(p_right));
    if (isTextualNode(p_left)) {
        ret.name = getNodeText(p_left);
        if (isTextualNode(p_right)) {
            ret.name += ' of ' + getNodeText(p_right);
            ret.textified = ret.name;
            ret.isText = true;
        }
        else {
            ret.children.push({
                tag: 'of', 
                children: [
                    p_right
                ]
            })
        }
    }
    else {
        ret.children.push({
            tag: 'left', 
            children: [
                p_left
            ]
        })
        if (isTextualNode(p_right)) {
            ret.children.push({
                tag: 'of', 
                name: getNodeText(p_right), 
                children: [
                    
                ]
            })
        }
        else {
            ret.children.push({
                tag: 'of', 
                children: [
                    p_right
                ]
            })
        }
    }
    // log 'node.await', node.await
    if (!!node.await == true) {
        ret.children.push({
            tag: 'await', 
            children: [
                
            ]
        })
    }
    // process AST-node-property body and append ittfNode to `ret`
    f_astNode.props.push({
        name: "body", 
        descr: "process AST-node-property body and append ittfNode to `ret`"
    })
    if (node.body) {
        if (!node.body.type) {
            throw 'Node body has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.body, options)
    }
    else {
        throw new Error('AST-node-property body undefined: ' + JSON.stringify(node, null, 2));
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node FunctionDeclaration
var FunctionDeclaration_astNode = {
    name: "FunctionDeclaration", 
    ittfTag: "function", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(FunctionDeclaration_astNode)
format.FunctionDeclaration = function(parent, node, options) {
    var f_astNode = FunctionDeclaration_astNode;
    var __isText = false;
    // log 'node : FunctionDeclaration ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'function', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'FunctionDeclaration', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // A function [declaration](#functiondeclaration) or [expression](#functionexpression).
    // Process AST-node-property id and
    // set the resulting node.name on : ret || parent (cmd: onparent)
    // used mainly for Identifier(s)
    f_astNode.props.push({
        name: "id", 
        onParent: false, 
        iftext: false, 
        descr: "Process AST-node-property id and set the resulting node.name on : ret || parent (cmd: onparent) used mainly for Identifier(s)"
    })
    if (node.id) {
        if (!node.id.type) {
            throw 'Node id has no type: ' + JSON.stringify(node, null, 2);
        }
        var tempid = {
            children: [
                
            ]
        };
        format(tempid, node.id, options)
        /**
            if (tempid .children.length > 0) {
                throw 'node.id must result zero node, returned: ' + tempid.children.length + ' source: ' + options.input.substring(node.start, node.end);
            }
        */
        var appto = false ? parent : ret;
        if (tempid.children.length > 0) {
            appto.name = tempid.children[0].name;
        }
        else {
            appto.name = tempid.name;
        }
    }
    // process AST-node-property typeParameters and append ittfNode to `ret`
    f_astNode.props.push({
        name: "typeParameters", 
        descr: "process AST-node-property typeParameters and append ittfNode to `ret`"
    })
    if (node.typeParameters) {
        if (!node.typeParameters.type) {
            throw 'Node typeParameters has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.typeParameters, options)
    }
    // process AST-node-property-collection params and
    // embed its array of nodes in a new tag
    f_astNode.props.push({
        name: "params", 
        tag: "params", 
        descr: "# process AST-node-property-collection params and embed its array of nodes in a new tag"
    })
    if (node.params) {
        if (typeof node.params.length === 'undefined') {
            throw new Error('Property node.params must be an array');
        }
        if (node.params.length > 0) {
            var tempparams = {
                tag: 'params', 
                ASTProp: 'params', 
                children: [
                    
                ]
            };
            var i, i_items=node.params, i_len=node.params.length, item;
            for (i=0; i<i_len; i++) {
                item = node.params[i];
                item.__parent = {
                    name: 'params', 
                    len: node.params.length
                };
                format(tempparams, item, options)
            }
            ret.children.push(tempparams)
        }
    }
    processParams(ret);
    // process AST-node-property returnType and set it in a var
    var p_returnType = null;
    if (typeof(node.returnType) !== 'undefined' && node.returnType != null) {
        p_returnType = {
            textified: null, 
            isText: false, 
            ASTProp: 'returnType', 
            children: [
                
            ]
        };
        if (node.returnType == null) {
            p_returnType.text = "null";
        }
        else {
            if (!node.returnType.type) {
                throw 'Node returnType has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp returnType before format'
            format(p_returnType, node.returnType, options)
            // log 'f_p_temp returnType after format', p_returnType.children.length, p_returnType
            var returnType_comments = extractCommentsIf(p_returnType, 1);
            if (p_returnType.children.length == 1) {
                p_returnType.tag = p_returnType.children[0].tag;
                if (!(p_returnType.children[0].isText || p_returnType.children[0].textified)) {
                    p_returnType.name = p_returnType.children[0].name;
                    p_returnType.source = p_returnType.children[0].source;
                    p_returnType.children = p_returnType.children[0].children;
                }
                else {
                    if (p_returnType.children[0].textified) {
                        p_returnType.textified = p_returnType.children[0].textified;
                    }
                    if (p_returnType.children[0].isText) {
                        p_returnType.isText = true;
                    }
                    p_returnType.name = p_returnType.children[0].name;
                    p_returnType.source = p_returnType.children[0].source;
                    p_returnType.children = [];
                }
            }
            if (returnType_comments.length > 0) {
                p_returnType.children = p_returnType.children.concat(returnType_comments);
            }
        }
    }
    if (p_returnType) {
        // log 'p_returnType', JSON.stringify(p_returnType)
        p_returnType = {
            tag: ':return', 
            children: [
                p_returnType
            ]
        };
        ret.children.push(p_returnType);
    }
    // process AST-node-property predicate and append ittfNode to `ret`
    f_astNode.props.push({
        name: "predicate", 
        descr: "process AST-node-property predicate and append ittfNode to `ret`"
    })
    if (node.predicate) {
        if (!node.predicate.type) {
            throw 'Node predicate has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.predicate, options)
    }
    // process AST-node-property body and append ittfNode to `ret`
    f_astNode.props.push({
        name: "body", 
        descr: "process AST-node-property body and append ittfNode to `ret`"
    })
    if (node.body) {
        if (!node.body.type) {
            throw 'Node body has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.body, options)
    }
    else {
        throw new Error('AST-node-property body undefined: ' + JSON.stringify(node, null, 2));
    }
    if (node.generator) {
        ret.tag = 'function*';
    }
    if (node.async) {
        ret.tag = 'async-function';
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node VariableDeclaration
var VariableDeclaration_astNode = {
    name: "VariableDeclaration", 
    ittfTag: "node.kind", 
    tagIsVar: true, 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(VariableDeclaration_astNode)
format.VariableDeclaration = function(parent, node, options) {
    var f_astNode = VariableDeclaration_astNode;
    var __isText = false;
    // log 'node : VariableDeclaration ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: node.kind, 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'VariableDeclaration', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // enum "var" | "let" | "const"
    // process AST-node-property-collection declarations and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "declarations", 
        throwIfUndefined: true, 
        descr: "process AST-node-property-collection declarations and append ittfNode(s) to `ret`"
    })
    if (node.declarations) {
        if (typeof node.declarations.length === 'undefined') {
            throw new Error('Property node.declarations must be an array');
        }
        var i, i_items=node.declarations, i_len=node.declarations.length, item;
        for (i=0; i<i_len; i++) {
            item = node.declarations[i];
            item.__parent = {
                name: 'declarations', 
                len: node.declarations.length
            };
            format(ret, item, options)
        }
    }
    else {
        throw new Error('AST-node-property-collection declarations undefined: ' + JSON.stringify(node, null, 2));
    }
    // log '=== VariableDeclaration ittf result 1', JSON.stringify(ret, null, 2)
    // log 'get_text_from_1_children', isChildrenCount(ret, 1)
    var got_text_1 = false;
    if (isChildrenCount(ret, 1)) {
        if (ret.children[0].textified || ret.children[0].isText) {
            var c1 = ret.children[0].textified || ret.children[0].name;
            ret.name = c1;
            ret.textified = ret.name;
            ret.children = [];
            got_text_1 = true;
        }
    }
    console.log('=== VariableDeclaration ittf result 2', ret, 'got_text_1', got_text_1);
    if (got_text_1) {
        ret.textified = node.kind + ' ' + ret.textified;
    }
    else if (ret.children.length == 1) {
        // log 'VariableDeclaration.ret.children[0].children.length', ret.children[0].children.length
        if (ret.children[0].children.length == 0) {
            ret.name = ret.children[0].name;
            ret.children = [];
            // no init value
        }
        else if (ret.children[0].children.length == 1) {
            ret.name = ret.children[0].name;
            ret.children[0] = ret.children[0].children[0];
            // log 'ret.name', ret.name
            // log 'ret.children[0]', ret.children[0]
            // set ret.textified = node.kind + ' ' + ret.name
        }
        else if (ret.children[0].children.length == 2) {
            var child1 = ret.children[0].children[0];
            var child2 = ret.children[0].children[1];
            // log 'ret.name', ret.name
            // log 'ret.children[0].name', ret.children[0].name
            // log 'child1.tag.name', child1.tag, child1.name
            // log 'child2.tag.name', child2.tag, child2.name
            if (child2.tag === '=' || isTypeReference(child1.tag)) {
                ret.name = ret.children[0].name;
                ret.children = [];
                ret.children.push(child1)
                ret.children.push(child2)
            }
            else {
                if (child1.name && child1.name.length > 0 && child1.children.length > 0) {
                    ret.name = child1.name;
                    ret.children = [];
                    var i, i_items=child1.children, i_len=child1.children.length, item;
                    for (i=0; i<i_len; i++) {
                        item = child1.children[i];
                        ret.children.push(item)
                    }
                    ret.children.push(child2)
                }
                else {
                    ret.name = ret.children[0].name;
                    ret.children = [];
                    ret.children.push(child1)
                    ret.children.push(child2)
                }
            }
        }
        else {
            console.log('Error VariableDeclaration. Case not managed.',);
            var i, i_items=ret.children, i_len=ret.children.length, item;
            for (i=0; i<i_len; i++) {
                item = ret.children[i];
                console.log('VariableDeclaration.child', item);
            }
            throw new Error("VariableDeclaration. Case not managed.");
        }
    }
    else if (ret.children.length > 1) {
        var sb = [];
        var i, i_items=ret.children, i_len=ret.children.length, item;
        for (i=0; i<i_len; i++) {
            item = ret.children[i];
            if (item.textified) {
                sb.push(item.textified);
            }
            else {
                sb = null;
                break;
            }
        }
        if (sb) {
            ret.textified = node.kind + ' ' + sb.join(', ');
        }
    }
    if (node.declare) {
        ret = {
            tag: ':declare', 
            name: '', 
            children: [
                ret
            ]
        };
    }
    // log 'VariableDeclaration.exit.ret', ret
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node VariableDeclarator
var VariableDeclarator_astNode = {
    name: "VariableDeclarator", 
    ittfTag: "decl", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(VariableDeclarator_astNode)
format.VariableDeclarator = function(parent, node, options) {
    var f_astNode = VariableDeclarator_astNode;
    var __isText = false;
    // log 'node : VariableDeclarator ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'decl', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'VariableDeclarator', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property id and set it in a var
    var p_id = null;
    if (typeof(node.id) !== 'undefined' && node.id != null) {
        p_id = {
            textified: null, 
            isText: false, 
            ASTProp: 'id', 
            children: [
                
            ]
        };
        if (node.id == null) {
            p_id.text = "null";
        }
        else {
            if (!node.id.type) {
                throw 'Node id has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp id before format'
            format(p_id, node.id, options)
            // log 'f_p_temp id after format', p_id.children.length, p_id
            var id_comments = extractCommentsIf(p_id, 1);
            if (p_id.children.length == 1) {
                p_id.tag = p_id.children[0].tag;
                if (!(p_id.children[0].isText || p_id.children[0].textified)) {
                    p_id.name = p_id.children[0].name;
                    p_id.source = p_id.children[0].source;
                    p_id.children = p_id.children[0].children;
                }
                else {
                    if (p_id.children[0].textified) {
                        p_id.textified = p_id.children[0].textified;
                    }
                    if (p_id.children[0].isText) {
                        p_id.isText = true;
                    }
                    p_id.name = p_id.children[0].name;
                    p_id.source = p_id.children[0].source;
                    p_id.children = [];
                }
            }
            if (id_comments.length > 0) {
                p_id.children = p_id.children.concat(id_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property id undefined: ' + JSON.stringify(node, null, 2));
    }
    console.log('VariableDeclarator,p_id, isTextualNode(p_id)', p_id, isTextualNode(p_id));
    if (isTextualNode(p_id)) {
        ret.name = getNodeText(p_id);
    }
    else {
        if (p_id.tag === '@id') {
            ret.name = p_id.name;
            ret.children = p_id.children;
        }
        else {
            ret.children.push(p_id)
        }
    }
    console.log('VariableDeclarator 1', ret);
    // process AST-node-property typeAnnotation and append ittfNode to `ret`
    f_astNode.props.push({
        name: "typeAnnotation", 
        descr: "process AST-node-property typeAnnotation and append ittfNode to `ret`"
    })
    if (node.typeAnnotation) {
        if (!node.typeAnnotation.type) {
            throw 'Node typeAnnotation has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.typeAnnotation, options)
    }
    // process AST-node-property init and set it in a var
    var p_init = null;
    if (typeof(node.init) !== 'undefined' && node.init != null) {
        p_init = {
            textified: null, 
            isText: false, 
            ASTProp: 'init', 
            children: [
                
            ]
        };
        if (node.init == null) {
            p_init.text = "null";
        }
        else {
            if (!node.init.type) {
                throw 'Node init has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp init before format'
            format(p_init, node.init, options)
            // log 'f_p_temp init after format', p_init.children.length, p_init
            var init_comments = extractCommentsIf(p_init, 1);
            if (p_init.children.length == 1) {
                p_init.tag = p_init.children[0].tag;
                if (!(p_init.children[0].isText || p_init.children[0].textified)) {
                    p_init.name = p_init.children[0].name;
                    p_init.source = p_init.children[0].source;
                    p_init.children = p_init.children[0].children;
                }
                else {
                    if (p_init.children[0].textified) {
                        p_init.textified = p_init.children[0].textified;
                    }
                    if (p_init.children[0].isText) {
                        p_init.isText = true;
                    }
                    p_init.name = p_init.children[0].name;
                    p_init.source = p_init.children[0].source;
                    p_init.children = [];
                }
            }
            if (init_comments.length > 0) {
                p_init.children = p_init.children.concat(init_comments);
            }
        }
    }
    // log 'VariableDeclarator.p_init', p_init
    if (p_init) {
        // log 'VariableDeclarator.p_init', isTextualNode(p_id), isTextualNode(p_id), 'p_id', p_id, 'p_init', p_init
        if (isTextualNode(p_id)) {
            if (isTextualNode(p_init)) {
                ret.name += ' = ' + getNodeText(p_init);
                ret.textified = ret.name;
                ret.isText = true;
            }
            else {
                ret.children.push(p_init)
            }
        }
        else {
            if (p_id.tag === '@id') {
                ret.children.push(p_init)
            }
            else {
                if (isTextualNode(p_init)) {
                    ret.children.push({
                        tag: '=', 
                        name: getNodeText(p_init), 
                        children: [
                            
                        ]
                    })
                }
                else {
                    ret.children.push({
                        tag: '=', 
                        children: [
                            p_init
                        ]
                    })
                }
            }
        }
    }
    else {
    }
    console.log('VariableDeclarator 2 ret', ret);
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node Decorator
var Decorator_astNode = {
    name: "Decorator", 
    ittfTag: "@decorator", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(Decorator_astNode)
format.Decorator = function(parent, node, options) {
    var f_astNode = Decorator_astNode;
    var __isText = false;
    // log 'node : Decorator ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: '@decorator', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'Decorator', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property expression and set it in a var
    var p_expression = null;
    if (typeof(node.expression) !== 'undefined' && node.expression != null) {
        p_expression = {
            textified: null, 
            isText: false, 
            ASTProp: 'expression', 
            children: [
                
            ]
        };
        if (node.expression == null) {
            p_expression.text = "null";
        }
        else {
            if (!node.expression.type) {
                throw 'Node expression has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp expression before format'
            format(p_expression, node.expression, options)
            // log 'f_p_temp expression after format', p_expression.children.length, p_expression
            var expression_comments = extractCommentsIf(p_expression, 1);
            if (p_expression.children.length == 1) {
                p_expression.tag = p_expression.children[0].tag;
                if (!(p_expression.children[0].isText || p_expression.children[0].textified)) {
                    p_expression.name = p_expression.children[0].name;
                    p_expression.source = p_expression.children[0].source;
                    p_expression.children = p_expression.children[0].children;
                }
                else {
                    if (p_expression.children[0].textified) {
                        p_expression.textified = p_expression.children[0].textified;
                    }
                    if (p_expression.children[0].isText) {
                        p_expression.isText = true;
                    }
                    p_expression.name = p_expression.children[0].name;
                    p_expression.source = p_expression.children[0].source;
                    p_expression.children = [];
                }
            }
            if (expression_comments.length > 0) {
                p_expression.children = p_expression.children.concat(expression_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property expression undefined: ' + JSON.stringify(node, null, 2));
    }
    if (isTextualNode(p_expression)) {
        ret.name = getNodeText(p_expression);
    }
    else {
        ret.children.push(p_expression)
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node Directive
var Directive_astNode = {
    name: "Directive", 
    ittfTag: "directive", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(Directive_astNode)
format.Directive = function(parent, node, options) {
    var f_astNode = Directive_astNode;
    var __isText = false;
    // log 'node : Directive ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'directive', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'Directive', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    if (node.value && node.value.value === 'use strict') {
        ret = null;
    }
    else {
        // process AST-node-property value and set it in a var
        var p_value = null;
        if (typeof(node.value) !== 'undefined' && node.value != null) {
            p_value = {
                textified: null, 
                isText: false, 
                ASTProp: 'value', 
                children: [
                    
                ]
            };
            if (node.value == null) {
                p_value.text = "null";
            }
            else {
                if (!node.value.type) {
                    throw 'Node value has no type: ' + JSON.stringify(node, null, 2);
                }
                // log 'f_p_temp value before format'
                format(p_value, node.value, options)
                // log 'f_p_temp value after format', p_value.children.length, p_value
                var value_comments = extractCommentsIf(p_value, 1);
                if (p_value.children.length == 1) {
                    p_value.tag = p_value.children[0].tag;
                    if (!(p_value.children[0].isText || p_value.children[0].textified)) {
                        p_value.name = p_value.children[0].name;
                        p_value.source = p_value.children[0].source;
                        p_value.children = p_value.children[0].children;
                    }
                    else {
                        if (p_value.children[0].textified) {
                            p_value.textified = p_value.children[0].textified;
                        }
                        if (p_value.children[0].isText) {
                            p_value.isText = true;
                        }
                        p_value.name = p_value.children[0].name;
                        p_value.source = p_value.children[0].source;
                        p_value.children = [];
                    }
                }
                if (value_comments.length > 0) {
                    p_value.children = p_value.children.concat(value_comments);
                }
            }
        }
        else {
            throw new Error('AST-node-property value undefined: ' + JSON.stringify(node, null, 2));
        }
        if (isTextualNode(p_value)) {
            ret.name = getNodeText(p_value);
        }
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node DirectiveLiteral
var DirectiveLiteral_astNode = {
    name: "DirectiveLiteral", 
    ittfTag: "none", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(DirectiveLiteral_astNode)
format.DirectiveLiteral = function(parent, node, options) {
    var f_astNode = DirectiveLiteral_astNode;
    var __isText = false;
    // log 'node : DirectiveLiteral ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'none', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'DirectiveLiteral', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node Expression
var Expression_astNode = {
    name: "Expression", 
    ittfTag: "expr", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(Expression_astNode)
format.Expression = function(parent, node, options) {
    var f_astNode = Expression_astNode;
    var __isText = false;
    // log 'node : Expression ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'expr', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'Expression', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // Any expression node. Since the left-hand side of an assignment may be any expression in general, an expression can also be a pattern.
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node Super
var Super_astNode = {
    name: "Super", 
    ittfTag: "super", 
    isText: true, 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(Super_astNode)
format.Super = function(parent, node, options) {
    var f_astNode = Super_astNode;
    var __isText = true;
    // log 'node : Super ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'super', 
        name: '', 
        isText: true, 
        textified: null, 
        AST: 'Super', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // A `super` pseudo-expression.
    ret.name = 'super';
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node Import
var Import_astNode = {
    name: "Import", 
    ittfTag: "import", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(Import_astNode)
format.Import = function(parent, node, options) {
    var f_astNode = Import_astNode;
    var __isText = false;
    // log 'node : Import ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'import', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'Import', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // A `import` pseudo-expression.
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node ThisExpression
var ThisExpression_astNode = {
    name: "ThisExpression", 
    ittfTag: "this", 
    isText: true, 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(ThisExpression_astNode)
format.ThisExpression = function(parent, node, options) {
    var f_astNode = ThisExpression_astNode;
    var __isText = true;
    // log 'node : ThisExpression ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'this', 
        name: '', 
        isText: true, 
        textified: null, 
        AST: 'ThisExpression', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // A `this` expression.
    ret.name = 'this';
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node ArrowFunctionExpression
var ArrowFunctionExpression_astNode = {
    name: "ArrowFunctionExpression", 
    ittfTag: "=>", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(ArrowFunctionExpression_astNode)
format.ArrowFunctionExpression = function(parent, node, options) {
    var f_astNode = ArrowFunctionExpression_astNode;
    var __isText = false;
    // log 'node : ArrowFunctionExpression ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: '=>', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'ArrowFunctionExpression', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    if (verify.isArray(node.body) == false) {
        node.body = [node.body];
    }
    // process AST-node-property-collection params and
    // embed its array of nodes in a new tag
    f_astNode.props.push({
        name: "params", 
        tag: "params", 
        descr: "# process AST-node-property-collection params and embed its array of nodes in a new tag"
    })
    if (node.params) {
        if (typeof node.params.length === 'undefined') {
            throw new Error('Property node.params must be an array');
        }
        if (node.params.length > 0) {
            var tempparams = {
                tag: 'params', 
                ASTProp: 'params', 
                children: [
                    
                ]
            };
            var i, i_items=node.params, i_len=node.params.length, item;
            for (i=0; i<i_len; i++) {
                item = node.params[i];
                item.__parent = {
                    name: 'params', 
                    len: node.params.length
                };
                format(tempparams, item, options)
            }
            ret.children.push(tempparams)
        }
    }
    processParams(ret);
    // process AST-node-property returnType and set it in a var
    var p_returnType = null;
    if (typeof(node.returnType) !== 'undefined' && node.returnType != null) {
        p_returnType = {
            textified: null, 
            isText: false, 
            ASTProp: 'returnType', 
            children: [
                
            ]
        };
        if (node.returnType == null) {
            p_returnType.text = "null";
        }
        else {
            if (!node.returnType.type) {
                throw 'Node returnType has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp returnType before format'
            format(p_returnType, node.returnType, options)
            // log 'f_p_temp returnType after format', p_returnType.children.length, p_returnType
            var returnType_comments = extractCommentsIf(p_returnType, 1);
            if (p_returnType.children.length == 1) {
                p_returnType.tag = p_returnType.children[0].tag;
                if (!(p_returnType.children[0].isText || p_returnType.children[0].textified)) {
                    p_returnType.name = p_returnType.children[0].name;
                    p_returnType.source = p_returnType.children[0].source;
                    p_returnType.children = p_returnType.children[0].children;
                }
                else {
                    if (p_returnType.children[0].textified) {
                        p_returnType.textified = p_returnType.children[0].textified;
                    }
                    if (p_returnType.children[0].isText) {
                        p_returnType.isText = true;
                    }
                    p_returnType.name = p_returnType.children[0].name;
                    p_returnType.source = p_returnType.children[0].source;
                    p_returnType.children = [];
                }
            }
            if (returnType_comments.length > 0) {
                p_returnType.children = p_returnType.children.concat(returnType_comments);
            }
        }
    }
    if (p_returnType) {
        p_returnType = {
            tag: ':return', 
            children: [
                p_returnType
            ]
        };
        ret.children.push(p_returnType);
    }
    // process AST-node-property-collection body and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "body", 
        throwIfUndefined: true, 
        descr: "process AST-node-property-collection body and append ittfNode(s) to `ret`"
    })
    if (node.body) {
        if (typeof node.body.length === 'undefined') {
            throw new Error('Property node.body must be an array');
        }
        var i, i_items=node.body, i_len=node.body.length, item;
        for (i=0; i<i_len; i++) {
            item = node.body[i];
            item.__parent = {
                name: 'body', 
                len: node.body.length
            };
            format(ret, item, options)
        }
    }
    else {
        throw new Error('AST-node-property-collection body undefined: ' + JSON.stringify(node, null, 2));
    }
    // log 'node.expression', node.expression
    if (!!node.expression == true) {
        ret.children.push({
            tag: 'expression', 
            children: [
                
            ]
        })
    }
    // log '*** ArrowFunctionExpression.ret.params', getChildByTag(ret, 'params')
    // log '*** ArrowFunctionExpression.ret', ret
    // A fat arrow function expression, e.g., `let foo = (bar) => { /* body */ }`.
    if (node.async) {
        ret.tag = 'async=>';
    }
    if (node.generator) {
        ret.tag += '*';
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node YieldExpression
var YieldExpression_astNode = {
    name: "YieldExpression", 
    ittfTag: "yield", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(YieldExpression_astNode)
format.YieldExpression = function(parent, node, options) {
    var f_astNode = YieldExpression_astNode;
    var __isText = false;
    // log 'node : YieldExpression ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'yield', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'YieldExpression', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property argument and set it in a var
    var p_argument = null;
    if (typeof(node.argument) !== 'undefined' && node.argument != null) {
        p_argument = {
            textified: null, 
            isText: false, 
            ASTProp: 'argument', 
            children: [
                
            ]
        };
        if (node.argument == null) {
            p_argument.text = "null";
        }
        else {
            if (!node.argument.type) {
                throw 'Node argument has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp argument before format'
            format(p_argument, node.argument, options)
            // log 'f_p_temp argument after format', p_argument.children.length, p_argument
            var argument_comments = extractCommentsIf(p_argument, 1);
            if (p_argument.children.length == 1) {
                p_argument.tag = p_argument.children[0].tag;
                if (!(p_argument.children[0].isText || p_argument.children[0].textified)) {
                    p_argument.name = p_argument.children[0].name;
                    p_argument.source = p_argument.children[0].source;
                    p_argument.children = p_argument.children[0].children;
                }
                else {
                    if (p_argument.children[0].textified) {
                        p_argument.textified = p_argument.children[0].textified;
                    }
                    if (p_argument.children[0].isText) {
                        p_argument.isText = true;
                    }
                    p_argument.name = p_argument.children[0].name;
                    p_argument.source = p_argument.children[0].source;
                    p_argument.children = [];
                }
            }
            if (argument_comments.length > 0) {
                p_argument.children = p_argument.children.concat(argument_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property argument undefined: ' + JSON.stringify(node, null, 2));
    }
    // log 'ObjectProperty.p_value', p_value
    if (isTextualNode(p_argument)) {
        ret.name = getNodeText(p_argument);
    }
    else {
        ret.children.push(p_argument)
    }
    // log 'node.delegate', node.delegate
    if (!!node.delegate == true) {
        ret.children.push({
            tag: 'delegate', 
            children: [
                
            ]
        })
    }
    // A `yield` expression.
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node AwaitExpression
var AwaitExpression_astNode = {
    name: "AwaitExpression", 
    ittfTag: "await", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(AwaitExpression_astNode)
format.AwaitExpression = function(parent, node, options) {
    var f_astNode = AwaitExpression_astNode;
    var __isText = false;
    // log 'node : AwaitExpression ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'await', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'AwaitExpression', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property argument and append ittfNode to `ret`
    f_astNode.props.push({
        name: "argument", 
        descr: "process AST-node-property argument and append ittfNode to `ret`"
    })
    if (node.argument) {
        if (!node.argument.type) {
            throw 'Node argument has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.argument, options)
    }
    // A `await` expression.
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node ArrayExpression
var ArrayExpression_astNode = {
    name: "ArrayExpression", 
    ittfTag: "[", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(ArrayExpression_astNode)
format.ArrayExpression = function(parent, node, options) {
    var f_astNode = ArrayExpression_astNode;
    var __isText = false;
    // log 'node : ArrayExpression ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: '[', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'ArrayExpression', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property-collection elements and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "elements", 
        throwIfUndefined: true, 
        descr: "process AST-node-property-collection elements and append ittfNode(s) to `ret`"
    })
    if (node.elements) {
        if (typeof node.elements.length === 'undefined') {
            throw new Error('Property node.elements must be an array');
        }
        var i, i_items=node.elements, i_len=node.elements.length, item;
        for (i=0; i<i_len; i++) {
            item = node.elements[i];
            item.__parent = {
                name: 'elements', 
                len: node.elements.length
            };
            format(ret, item, options)
        }
    }
    else {
        throw new Error('AST-node-property-collection elements undefined: ' + JSON.stringify(node, null, 2));
    }
    // An array expression.
    if (options.mustBeText) {
        if (setTextList(ret, ', ')) {
            ret.textified = '[' + ret.textified + ']';
            // log '### ArrayExpression', 'name:', ret.name, 'textified', ret.textified, ret.isText
        }
        else {
            throw new Error("ArrayExpression. Cannot textify node as requested: " + JSON.stringify(node, null, 2));
        }
    }
    else if (options.couldBeText) {
        var tlist = getTextList(ret, ', ');
        if (tlist && tlist.length < 15) {
            ret.textified = '[' + ret.textified + ']';
            // TODO??? set ret.children = []
        }
        else {
            ret.textified = null;
            var i, i_items=ret.children, i_len=ret.children.length, item;
            for (i=0; i<i_len; i++) {
                item = ret.children[i];
                if (isTextualNode(item)) {
                    item.tag = '@';
                    item.name = getNodeText(item);
                }
                else if (['@expr', '@id', 'literal'].indexOf(item.tag) > -1) {
                    item.tag = '@';
                }
            }
        }
    }
    else {
        var i, i_items=ret.children, i_len=ret.children.length, item;
        for (i=0; i<i_len; i++) {
            item = ret.children[i];
            if (isTextualNode(item)) {
                item.tag = '@';
                item.name = getNodeText(item);
            }
            else if (['@expr', '@id', 'literal'].indexOf(item.tag) > -1) {
                item.tag = '@';
            }
        }
    }
    if (ret.children.length == 0) {
        ret.textified = '[]';
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node ObjectExpression
var ObjectExpression_astNode = {
    name: "ObjectExpression", 
    ittfTag: "{", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(ObjectExpression_astNode)
format.ObjectExpression = function(parent, node, options) {
    var f_astNode = ObjectExpression_astNode;
    var __isText = false;
    // log 'node : ObjectExpression ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: '{', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'ObjectExpression', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    if (options.stateAST[options.stateAST.length-1] === 'JSXExpressionContainer') {
        parent.children.pop();
        ret = parent;
        var __skip = true;
    }
    // process AST-node-property-collection properties and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "properties", 
        throwIfUndefined: true, 
        descr: "process AST-node-property-collection properties and append ittfNode(s) to `ret`"
    })
    if (node.properties) {
        if (typeof node.properties.length === 'undefined') {
            throw new Error('Property node.properties must be an array');
        }
        var i, i_items=node.properties, i_len=node.properties.length, item;
        for (i=0; i<i_len; i++) {
            item = node.properties[i];
            item.__parent = {
                name: 'properties', 
                len: node.properties.length
            };
            format(ret, item, options)
        }
    }
    else {
        throw new Error('AST-node-property-collection properties undefined: ' + JSON.stringify(node, null, 2));
    }
    if (options.mustBeText) {
        if (setTextList(ret, ', ')) {
            ret.textified = '{' + ret.textified + '}';
            if (node.extra && node.extra.parenthesized == true) {
                ret.textified = '(' + ret.textified + ')';
            }
        }
        else {
            throw new Error("ObjectExpression. Cannot textify node as requested: " + JSON.stringify(node, null, 2));
        }
    }
    else {
        var i, i_items=ret.children, i_len=ret.children.length, item;
        for (i=0; i<i_len; i++) {
            item = ret.children[i];
            if (item.tag === '...') {
                // log 'ObjectExpression, item.tag, item.children.length', item.tag, item.textified, item.children.length
                if (item.children.length == 0) {
                    item.name = item.textified;
                    item.tag = '@';
                }
                else if (item.children.length == 1) {
                    if (item.children[0].name) {
                        item.children[0].name = '...' + item.children[0].name;
                    }
                    if (item.textified) {
                        item.children[0].textified = '...' + item.children[0].textified;
                    }
                    if (item.children[0].name || item.textified) {
                        item.tag = item.children[0].tag;
                        item.textified = item.children[0].textified;
                        item.name = item.children[0].name;
                        item.children = item.children[0].children;
                        console.log('ObjectExpression length 1', item.tag, item.name, item.textified);
                    }
                    else {
                        // go on
                    }
                }
            }
            if (item.tag === '@' && item.name === 'template' && item.children.length == 1 && item.children[0].tag === '`lit') {
                // log 'ObjectExpression', item.tag, item.name, getLiteral(item.children[0])
                options.wizziIncludes.push({
                    kind: 'html', 
                    node: item, 
                    literal: getLiteral(item.children[0])
                })
                item.children = [];
            }
        }
        if (!ret.textified && ret.children.length == 0) {
            if (node.extra && node.extra.parenthesized == true) {
                // set ret.name = ret.textified = '({})' // 10/1/19
                ret.textified = '({})';
            }
            else {
                // set ret.name = ret.textified = '{}' // 10/1/19
                ret.textified = '{}';
            }
        }
        else {
            if (node.extra && node.extra.parenthesized == true) {
                var temp = {
                    tag: '(', 
                    children: [
                        ret
                    ]
                };
                ret = temp;
            }
        }
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node ObjectProperty
var ObjectProperty_astNode = {
    name: "ObjectProperty", 
    ittfTag: "@", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(ObjectProperty_astNode)
format.ObjectProperty = function(parent, node, options) {
    var f_astNode = ObjectProperty_astNode;
    var __isText = false;
    // log 'node : ObjectProperty ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: '@', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'ObjectProperty', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // log 'ObjectProperty enter options.mustBeText', options.mustBeText
    const save = options.mustBeText;
    options.mustBeText = true;
    // process AST-node-property key and set it in a var
    var p_key = null;
    if (typeof(node.key) !== 'undefined' && node.key != null) {
        p_key = {
            textified: null, 
            isText: false, 
            ASTProp: 'key', 
            children: [
                
            ]
        };
        if (node.key == null) {
            p_key.text = "null";
        }
        else {
            if (!node.key.type) {
                throw 'Node key has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp key before format'
            format(p_key, node.key, options)
            // log 'f_p_temp key after format', p_key.children.length, p_key
            var key_comments = extractCommentsIf(p_key, 1);
            if (p_key.children.length == 1) {
                p_key.tag = p_key.children[0].tag;
                if (!(p_key.children[0].isText || p_key.children[0].textified)) {
                    p_key.name = p_key.children[0].name;
                    p_key.source = p_key.children[0].source;
                    p_key.children = p_key.children[0].children;
                }
                else {
                    if (p_key.children[0].textified) {
                        p_key.textified = p_key.children[0].textified;
                    }
                    if (p_key.children[0].isText) {
                        p_key.isText = true;
                    }
                    p_key.name = p_key.children[0].name;
                    p_key.source = p_key.children[0].source;
                    p_key.children = [];
                }
            }
            if (key_comments.length > 0) {
                p_key.children = p_key.children.concat(key_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property key undefined: ' + JSON.stringify(node, null, 2));
    }
    // log 'ObjectProperty.p_key', p_key
    options.mustBeText = save;
    if (isTextualNode(p_key)) {
        ret.name = getNodeText(p_key);
        if (node.computed) {
            ret.name = '[' + ret.name + ']';
        }
    }
    else {
        var p_computed = {
            tag: '[', 
            children: [
                p_key
            ]
        };
        ret.children.push(p_computed)
        ret = p_computed;
    }
    // process AST-node-property-collection decorators and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "decorators", 
        throwIfUndefined: false, 
        descr: "process AST-node-property-collection decorators and append ittfNode(s) to `ret`"
    })
    if (node.decorators) {
        if (typeof node.decorators.length === 'undefined') {
            throw new Error('Property node.decorators must be an array');
        }
        var i, i_items=node.decorators, i_len=node.decorators.length, item;
        for (i=0; i<i_len; i++) {
            item = node.decorators[i];
            item.__parent = {
                name: 'decorators', 
                len: node.decorators.length
            };
            format(ret, item, options)
        }
    }
    // log 'ObjectProperty.ret.name', ret.name, 'node.value.type', node.value.type
    if (node.value.type === 'AssignmentPattern') {
        // process AST-node-property value.left and set it in a var
        var p_value_left = null;
        if (typeof(node.value.left) !== 'undefined' && node.value.left != null) {
            p_value_left = {
                textified: null, 
                isText: false, 
                ASTProp: 'value_left', 
                children: [
                    
                ]
            };
            if (node.value.left == null) {
                p_value_left.text = "null";
            }
            else {
                if (!node.value.left.type) {
                    throw 'Node value_left has no type: ' + JSON.stringify(node, null, 2);
                }
                // log 'f_p_temp value_left before format'
                format(p_value_left, node.value.left, options)
                // log 'f_p_temp value_left after format', p_value_left.children.length, p_value_left
                var value_left_comments = extractCommentsIf(p_value_left, 1);
                if (p_value_left.children.length == 1) {
                    p_value_left.tag = p_value_left.children[0].tag;
                    if (!(p_value_left.children[0].isText || p_value_left.children[0].textified)) {
                        p_value_left.name = p_value_left.children[0].name;
                        p_value_left.source = p_value_left.children[0].source;
                        p_value_left.children = p_value_left.children[0].children;
                    }
                    else {
                        if (p_value_left.children[0].textified) {
                            p_value_left.textified = p_value_left.children[0].textified;
                        }
                        if (p_value_left.children[0].isText) {
                            p_value_left.isText = true;
                        }
                        p_value_left.name = p_value_left.children[0].name;
                        p_value_left.source = p_value_left.children[0].source;
                        p_value_left.children = [];
                    }
                }
                if (value_left_comments.length > 0) {
                    p_value_left.children = p_value_left.children.concat(value_left_comments);
                }
            }
        }
        else {
            throw new Error('AST-node-property value_left undefined: ' + JSON.stringify(node, null, 2));
        }
        // process AST-node-property value.right and set it in a var
        var p_value_right = null;
        if (typeof(node.value.right) !== 'undefined' && node.value.right != null) {
            p_value_right = {
                textified: null, 
                isText: false, 
                ASTProp: 'value_right', 
                children: [
                    
                ]
            };
            if (node.value.right == null) {
                p_value_right.text = "null";
            }
            else {
                if (!node.value.right.type) {
                    throw 'Node value_right has no type: ' + JSON.stringify(node, null, 2);
                }
                // log 'f_p_temp value_right before format'
                format(p_value_right, node.value.right, options)
                // log 'f_p_temp value_right after format', p_value_right.children.length, p_value_right
                var value_right_comments = extractCommentsIf(p_value_right, 1);
                if (p_value_right.children.length == 1) {
                    p_value_right.tag = p_value_right.children[0].tag;
                    if (!(p_value_right.children[0].isText || p_value_right.children[0].textified)) {
                        p_value_right.name = p_value_right.children[0].name;
                        p_value_right.source = p_value_right.children[0].source;
                        p_value_right.children = p_value_right.children[0].children;
                    }
                    else {
                        if (p_value_right.children[0].textified) {
                            p_value_right.textified = p_value_right.children[0].textified;
                        }
                        if (p_value_right.children[0].isText) {
                            p_value_right.isText = true;
                        }
                        p_value_right.name = p_value_right.children[0].name;
                        p_value_right.source = p_value_right.children[0].source;
                        p_value_right.children = [];
                    }
                }
                if (value_right_comments.length > 0) {
                    p_value_right.children = p_value_right.children.concat(value_right_comments);
                }
            }
        }
        else {
            throw new Error('AST-node-property value_right undefined: ' + JSON.stringify(node, null, 2));
        }
        console.log('p_value_left', p_value_left);
        // log 'p_value_right', p_value_right
        if (node.value.left.type === 'ObjectPattern') {
            ret.children.push(p_value_left)
            if (isTextualNode(p_value_right)) {
                ret.children.push({
                    tag: '=', 
                    name: getNodeText(p_value_right), 
                    children: [
                        
                    ]
                })
            }
            else if (p_value_right.tag === 'none' && verify.isNotEmpty(p_value_right.name)) {
                // FIXME why this?
                ret.children.push({
                    tag: '=', 
                    name: p_value_right.name, 
                    children: [
                        
                    ]
                })
            }
            else {
                ret.children.push({
                    tag: '=', 
                    children: [
                        p_value_right
                    ]
                })
            }
        }
        else {
            if (isTextualNode(p_value_right)) {
                if (options.mustBeText) {
                    ret.textified = ret.name += ' = ' + getNodeText(p_value_right);
                }
                else {
                    ret.children.push({
                        tag: '=', 
                        name: getNodeText(p_value_right), 
                        children: [
                            
                        ]
                    })
                }
            }
            else if (p_value_right.tag === 'none' && verify.isNotEmpty(p_value_right.name)) {
                // FIXME why this?
                ret.children.push({
                    tag: '=', 
                    name: p_value_right.name, 
                    children: [
                        
                    ]
                })
            }
            else {
                ret.children.push({
                    tag: '=', 
                    children: [
                        p_value_right
                    ]
                })
            }
        }
    }
    else {
        // process AST-node-property value and set it in a var
        var p_value = null;
        if (typeof(node.value) !== 'undefined' && node.value != null) {
            p_value = {
                textified: null, 
                isText: false, 
                ASTProp: 'value', 
                children: [
                    
                ]
            };
            if (node.value == null) {
                p_value.text = "null";
            }
            else {
                if (!node.value.type) {
                    throw 'Node value has no type: ' + JSON.stringify(node, null, 2);
                }
                // log 'f_p_temp value before format'
                format(p_value, node.value, options)
                // log 'f_p_temp value after format', p_value.children.length, p_value
                var value_comments = extractCommentsIf(p_value, 1);
                if (p_value.children.length == 1) {
                    p_value.tag = p_value.children[0].tag;
                    if (!(p_value.children[0].isText || p_value.children[0].textified)) {
                        p_value.name = p_value.children[0].name;
                        p_value.source = p_value.children[0].source;
                        p_value.children = p_value.children[0].children;
                    }
                    else {
                        if (p_value.children[0].textified) {
                            p_value.textified = p_value.children[0].textified;
                        }
                        if (p_value.children[0].isText) {
                            p_value.isText = true;
                        }
                        p_value.name = p_value.children[0].name;
                        p_value.source = p_value.children[0].source;
                        p_value.children = [];
                    }
                }
                if (value_comments.length > 0) {
                    p_value.children = p_value.children.concat(value_comments);
                }
            }
        }
        else {
            throw new Error('AST-node-property value undefined: ' + JSON.stringify(node, null, 2));
        }
        // log 'ObjectProperty.p_value', p_value, isTextualNode(p_value), isTextualNode(p_key)
        if (isTextualNode(p_value)) {
            if (isTextualNode(p_key)) {
                if (options.mustBeText) {
                    if (ret.name !== getNodeText(p_value)) {
                        ret.textified = ret.name += ': ' + getNodeText(p_value);
                    }
                    else {
                        ret.textified = ret.name;
                    }
                }
                else {
                    if (ret.name !== getNodeText(p_value)) {
                        ret.name += ' ' + getNodeText(p_value);
                    }
                }
            }
            else {
                ret.children.push({
                    tag: '+', 
                    name: getNodeText(p_value), 
                    children: [
                        
                    ]
                })
            }
        }
        else if (p_value.tag === 'none' && verify.isNotEmpty(p_value.name)) {
            if (isTextualNode(p_key)) {
                if (ret.name !== p_value.name) {
                    ret.name += ' ' + p_value.name;
                }
            }
            else {
                ret.children.push({
                    tag: '+', 
                    name: p_value.name, 
                    children: [
                        
                    ]
                })
            }
        }
        else {
            ret.children.push(p_value)
        }
    }
    // TODO b( shorthand
    // TODO b( async
    // TODO b( generator
    if (ret.children.length == 1 && ret.children[0].tag === '{') {
        ret.tag = '{' + ret.tag.substr(1);
        ret.children = ret.children[0].children;
    }
    else if (ret.children.length == 1 && ret.children[0].tag === '[') {
        ret.tag = '[' + ret.tag.substr(1);
        ret.children = ret.children[0].children;
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node ObjectMethod
var ObjectMethod_astNode = {
    name: "ObjectMethod", 
    ittfTag: "node.kind", 
    tagIsVar: true, 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(ObjectMethod_astNode)
format.ObjectMethod = function(parent, node, options) {
    var f_astNode = ObjectMethod_astNode;
    var __isText = false;
    // log 'node : ObjectMethod ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: node.kind, 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'ObjectMethod', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // log 'ObjectMethod enter options.mustBeText', options.mustBeText
    // s( kind
    // enum "get" | "set" | "method"
    const save = options.mustBeText;
    options.mustBeText = true;
    // process AST-node-property key and set it in a var
    var p_key = null;
    if (typeof(node.key) !== 'undefined' && node.key != null) {
        p_key = {
            textified: null, 
            isText: false, 
            ASTProp: 'key', 
            children: [
                
            ]
        };
        if (node.key == null) {
            p_key.text = "null";
        }
        else {
            if (!node.key.type) {
                throw 'Node key has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp key before format'
            format(p_key, node.key, options)
            // log 'f_p_temp key after format', p_key.children.length, p_key
            var key_comments = extractCommentsIf(p_key, 1);
            if (p_key.children.length == 1) {
                p_key.tag = p_key.children[0].tag;
                if (!(p_key.children[0].isText || p_key.children[0].textified)) {
                    p_key.name = p_key.children[0].name;
                    p_key.source = p_key.children[0].source;
                    p_key.children = p_key.children[0].children;
                }
                else {
                    if (p_key.children[0].textified) {
                        p_key.textified = p_key.children[0].textified;
                    }
                    if (p_key.children[0].isText) {
                        p_key.isText = true;
                    }
                    p_key.name = p_key.children[0].name;
                    p_key.source = p_key.children[0].source;
                    p_key.children = [];
                }
            }
            if (key_comments.length > 0) {
                p_key.children = p_key.children.concat(key_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property key undefined: ' + JSON.stringify(node, null, 2));
    }
    ret.name = getNodeText(p_key);
    options.mustBeText = save;
    // log 'node.async', node.async
    if (!!node.async == true) {
        ret.children.push({
            tag: 'async', 
            children: [
                
            ]
        })
    }
    // process AST-node-property-collection params and
    // embed its array of nodes in a new tag
    f_astNode.props.push({
        name: "params", 
        tag: "params", 
        descr: "# process AST-node-property-collection params and embed its array of nodes in a new tag"
    })
    if (node.params) {
        if (typeof node.params.length === 'undefined') {
            throw new Error('Property node.params must be an array');
        }
        if (node.params.length > 0) {
            var tempparams = {
                tag: 'params', 
                ASTProp: 'params', 
                children: [
                    
                ]
            };
            var i, i_items=node.params, i_len=node.params.length, item;
            for (i=0; i<i_len; i++) {
                item = node.params[i];
                item.__parent = {
                    name: 'params', 
                    len: node.params.length
                };
                format(tempparams, item, options)
            }
            ret.children.push(tempparams)
        }
    }
    processParams(ret);
    // process AST-node-property returnType and set it in a var
    var p_returnType = null;
    if (typeof(node.returnType) !== 'undefined' && node.returnType != null) {
        p_returnType = {
            textified: null, 
            isText: false, 
            ASTProp: 'returnType', 
            children: [
                
            ]
        };
        if (node.returnType == null) {
            p_returnType.text = "null";
        }
        else {
            if (!node.returnType.type) {
                throw 'Node returnType has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp returnType before format'
            format(p_returnType, node.returnType, options)
            // log 'f_p_temp returnType after format', p_returnType.children.length, p_returnType
            var returnType_comments = extractCommentsIf(p_returnType, 1);
            if (p_returnType.children.length == 1) {
                p_returnType.tag = p_returnType.children[0].tag;
                if (!(p_returnType.children[0].isText || p_returnType.children[0].textified)) {
                    p_returnType.name = p_returnType.children[0].name;
                    p_returnType.source = p_returnType.children[0].source;
                    p_returnType.children = p_returnType.children[0].children;
                }
                else {
                    if (p_returnType.children[0].textified) {
                        p_returnType.textified = p_returnType.children[0].textified;
                    }
                    if (p_returnType.children[0].isText) {
                        p_returnType.isText = true;
                    }
                    p_returnType.name = p_returnType.children[0].name;
                    p_returnType.source = p_returnType.children[0].source;
                    p_returnType.children = [];
                }
            }
            if (returnType_comments.length > 0) {
                p_returnType.children = p_returnType.children.concat(returnType_comments);
            }
        }
    }
    if (p_returnType) {
        p_returnType = {
            tag: ':return', 
            children: [
                p_returnType
            ]
        };
        ret.children.push(p_returnType);
    }
    // process AST-node-property body and append ittfNode to `ret`
    f_astNode.props.push({
        name: "body", 
        descr: "process AST-node-property body and append ittfNode to `ret`"
    })
    if (node.body) {
        if (!node.body.type) {
            throw 'Node body has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.body, options)
    }
    else {
        throw new Error('AST-node-property body undefined: ' + JSON.stringify(node, null, 2));
    }
    ret.tag = ret.tag == 'constructor' ? 'ctor' : (ret.tag == 'method' ? 'm' : ret.tag);
    setNameFromChildByTag(ret, 'key', true);
    if (ret.tag === 'ctor') {
        ret.name = '';
    }
    else if (node.computed) {
        ret.name = '[' + ret.name + ']';
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node FunctionExpression
var FunctionExpression_astNode = {
    name: "FunctionExpression", 
    ittfTag: "function", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(FunctionExpression_astNode)
format.FunctionExpression = function(parent, node, options) {
    var f_astNode = FunctionExpression_astNode;
    var __isText = false;
    // log 'node : FunctionExpression ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'function', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'FunctionExpression', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // Process AST-node-property id and
    // set the resulting node.name on : ret || parent (cmd: onparent)
    // used mainly for Identifier(s)
    f_astNode.props.push({
        name: "id", 
        onParent: false, 
        iftext: false, 
        descr: "Process AST-node-property id and set the resulting node.name on : ret || parent (cmd: onparent) used mainly for Identifier(s)"
    })
    if (node.id) {
        if (!node.id.type) {
            throw 'Node id has no type: ' + JSON.stringify(node, null, 2);
        }
        var tempid = {
            children: [
                
            ]
        };
        format(tempid, node.id, options)
        /**
            if (tempid .children.length > 0) {
                throw 'node.id must result zero node, returned: ' + tempid.children.length + ' source: ' + options.input.substring(node.start, node.end);
            }
        */
        var appto = false ? parent : ret;
        if (tempid.children.length > 0) {
            appto.name = tempid.children[0].name;
        }
        else {
            appto.name = tempid.name;
        }
    }
    // process AST-node-property-collection params and
    // embed its array of nodes in a new tag
    f_astNode.props.push({
        name: "params", 
        tag: "params", 
        descr: "# process AST-node-property-collection params and embed its array of nodes in a new tag"
    })
    if (node.params) {
        if (typeof node.params.length === 'undefined') {
            throw new Error('Property node.params must be an array');
        }
        if (node.params.length > 0) {
            var tempparams = {
                tag: 'params', 
                ASTProp: 'params', 
                children: [
                    
                ]
            };
            var i, i_items=node.params, i_len=node.params.length, item;
            for (i=0; i<i_len; i++) {
                item = node.params[i];
                item.__parent = {
                    name: 'params', 
                    len: node.params.length
                };
                format(tempparams, item, options)
            }
            ret.children.push(tempparams)
        }
    }
    processParams(ret);
    // process AST-node-property returnType and set it in a var
    var p_returnType = null;
    if (typeof(node.returnType) !== 'undefined' && node.returnType != null) {
        p_returnType = {
            textified: null, 
            isText: false, 
            ASTProp: 'returnType', 
            children: [
                
            ]
        };
        if (node.returnType == null) {
            p_returnType.text = "null";
        }
        else {
            if (!node.returnType.type) {
                throw 'Node returnType has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp returnType before format'
            format(p_returnType, node.returnType, options)
            // log 'f_p_temp returnType after format', p_returnType.children.length, p_returnType
            var returnType_comments = extractCommentsIf(p_returnType, 1);
            if (p_returnType.children.length == 1) {
                p_returnType.tag = p_returnType.children[0].tag;
                if (!(p_returnType.children[0].isText || p_returnType.children[0].textified)) {
                    p_returnType.name = p_returnType.children[0].name;
                    p_returnType.source = p_returnType.children[0].source;
                    p_returnType.children = p_returnType.children[0].children;
                }
                else {
                    if (p_returnType.children[0].textified) {
                        p_returnType.textified = p_returnType.children[0].textified;
                    }
                    if (p_returnType.children[0].isText) {
                        p_returnType.isText = true;
                    }
                    p_returnType.name = p_returnType.children[0].name;
                    p_returnType.source = p_returnType.children[0].source;
                    p_returnType.children = [];
                }
            }
            if (returnType_comments.length > 0) {
                p_returnType.children = p_returnType.children.concat(returnType_comments);
            }
        }
    }
    if (p_returnType) {
        p_returnType = {
            tag: ':return', 
            children: [
                p_returnType
            ]
        };
        ret.children.push(p_returnType);
    }
    // process AST-node-property body and append ittfNode to `ret`
    f_astNode.props.push({
        name: "body", 
        descr: "process AST-node-property body and append ittfNode to `ret`"
    })
    if (node.body) {
        if (!node.body.type) {
            throw 'Node body has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.body, options)
    }
    else {
        throw new Error('AST-node-property body undefined: ' + JSON.stringify(node, null, 2));
    }
    if (node.async) {
        ret.tag = 'async-function';
    }
    if (node.generator) {
        ret.tag += '*';
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node UnaryExpression
var UnaryExpression_astNode = {
    name: "UnaryExpression", 
    ittfTag: "'op' + node.operator", 
    tagIsVar: true, 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(UnaryExpression_astNode)
format.UnaryExpression = function(parent, node, options) {
    var f_astNode = UnaryExpression_astNode;
    var __isText = false;
    // log 'node : UnaryExpression ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'op' + node.operator, 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'UnaryExpression', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // A unary operator expression.
    // s( operator, UnaryOperator enum "-" | "+" | "!" | "~" | "typeof" | "void" | "delete" | "throw"
    // b( prefix
    if (ret.tag == 'opdelete') {
        ret.tag = 'delete';
    }
    // process AST-node-property argument and set it in a var
    var p_argument = null;
    if (typeof(node.argument) !== 'undefined' && node.argument != null) {
        p_argument = {
            textified: null, 
            isText: false, 
            ASTProp: 'argument', 
            children: [
                
            ]
        };
        if (node.argument == null) {
            p_argument.text = "null";
        }
        else {
            if (!node.argument.type) {
                throw 'Node argument has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp argument before format'
            format(p_argument, node.argument, options)
            // log 'f_p_temp argument after format', p_argument.children.length, p_argument
            var argument_comments = extractCommentsIf(p_argument, 1);
            if (p_argument.children.length == 1) {
                p_argument.tag = p_argument.children[0].tag;
                if (!(p_argument.children[0].isText || p_argument.children[0].textified)) {
                    p_argument.name = p_argument.children[0].name;
                    p_argument.source = p_argument.children[0].source;
                    p_argument.children = p_argument.children[0].children;
                }
                else {
                    if (p_argument.children[0].textified) {
                        p_argument.textified = p_argument.children[0].textified;
                    }
                    if (p_argument.children[0].isText) {
                        p_argument.isText = true;
                    }
                    p_argument.name = p_argument.children[0].name;
                    p_argument.source = p_argument.children[0].source;
                    p_argument.children = [];
                }
            }
            if (argument_comments.length > 0) {
                p_argument.children = p_argument.children.concat(argument_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property argument undefined: ' + JSON.stringify(node, null, 2));
    }
    if (isTextualNode(p_argument)) {
        ret.name = getNodeText(p_argument);
        const space = ['-','+','!','{'].indexOf(node.operator) > -1 ? '' : ' ';
        ret.textified = node.operator + space + ret.name;
    }
    else {
        ret.children.push(p_argument)
    }
    if (node.__parent && node.__parent.name === 'body' && node.__parent.len == 1) {
        if (node.extra && node.extra.parenthesized == true) {
            // is the return value of an ArrowExpression
            // TODO ...
            if (isTextualNode(p_argument)) {
                ret.tag = '(';
                ret.name = node.operator + getNodeText(p_argument);
                ret.textified = '(' + node.operator + getNodeText(p_argument) + ')';
            }
            else {
                var temp = {
                    tag: '(', 
                    children: [
                        ret
                    ]
                };
                ret = temp;
            }
        }
        else {
            // TODO ...
            if (isTextualNode(p_argument)) {
                ret.tag = '+';
                ret.name = node.operator + getNodeText(p_argument);
            }
            else {
                var temp = {
                    tag: '+', 
                    children: [
                        ret
                    ]
                };
                ret = temp;
            }
        }
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node UpdateExpression
var UpdateExpression_astNode = {
    name: "UpdateExpression", 
    ittfTag: "'op' + node.operator", 
    tagIsVar: true, 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(UpdateExpression_astNode)
format.UpdateExpression = function(parent, node, options) {
    var f_astNode = UpdateExpression_astNode;
    var __isText = false;
    // log 'node : UpdateExpression ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'op' + node.operator, 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'UpdateExpression', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // An update (increment or decrement) operator expression.
    // s( operator, UpdateOperator enum "++" | "--"
    // process AST-node-property argument and append ittfNode to `ret`
    f_astNode.props.push({
        name: "argument", 
        descr: "process AST-node-property argument and append ittfNode to `ret`"
    })
    if (node.argument) {
        if (!node.argument.type) {
            throw 'Node argument has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.argument, options)
    }
    else {
        throw new Error('AST-node-property argument undefined: ' + JSON.stringify(node, null, 2));
    }
    // b( prefix
    // log 'get_text_from_1_children', isChildrenCount(ret, 1)
    var got_text_1 = false;
    if (isChildrenCount(ret, 1)) {
        if (ret.children[0].textified || ret.children[0].isText) {
            var c1 = ret.children[0].textified || ret.children[0].name;
            ret.name = c1;
            ret.textified = ret.name;
            ret.children = [];
            got_text_1 = true;
        }
    }
    if (got_text_1) {
        ret.tag = 'set';
        if (node.prefix) {
            ret.name = node.operator + ret.name;
        }
        else {
            ret.name = ret.name + node.operator;
        }
        ret.textified = ret.name;
    }
    if (node.prefix) {
        ret.tag = node.operator + 'op';
    }
    if (node.__parent && node.__parent.name === 'body' && node.__parent.len == 1) {
        // is the return value of an ArrowExpression
        if (got_text_1) {
            if (node.extra && node.extra.parenthesized == true) {
                ret.tag = '(';
            }
            else {
                ret.tag = '+';
            }
        }
        else {
            // TODO
            // is the return value of an ArrowExpression
            if (got_text_1) {
                ret.tag = '(';
            }
            else {
                ret.tag = '(' + ret.tag;
            }
        }
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node BinaryExpression
var BinaryExpression_astNode = {
    name: "BinaryExpression", 
    ittfTag: "'op' + node.operator", 
    tagIsVar: true, 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(BinaryExpression_astNode)
format.BinaryExpression = function(parent, node, options) {
    var f_astNode = BinaryExpression_astNode;
    var __isText = false;
    // log 'node : BinaryExpression ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'op' + node.operator, 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'BinaryExpression', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // A binary operator token.
    // s( operator, BinaryOperator
    // enum "==" | "!=" | "===" | "!==" "<" | "<=" | ">" | ">=" | "<<" | ">>" | ">>>" | "+" | "-" | "*" | "/" | "%" | "|" | "^" | "&" | "in" | "instanceof" | "|>"
    if (node.operator.length > 1) {
        ret.tag = node.operator;
    }
    // process AST-node-property left and set it in a var
    var p_left = null;
    if (typeof(node.left) !== 'undefined' && node.left != null) {
        p_left = {
            textified: null, 
            isText: false, 
            ASTProp: 'left', 
            children: [
                
            ]
        };
        if (node.left == null) {
            p_left.text = "null";
        }
        else {
            if (!node.left.type) {
                throw 'Node left has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp left before format'
            format(p_left, node.left, options)
            // log 'f_p_temp left after format', p_left.children.length, p_left
            var left_comments = extractCommentsIf(p_left, 1);
            if (p_left.children.length == 1) {
                p_left.tag = p_left.children[0].tag;
                if (!(p_left.children[0].isText || p_left.children[0].textified)) {
                    p_left.name = p_left.children[0].name;
                    p_left.source = p_left.children[0].source;
                    p_left.children = p_left.children[0].children;
                }
                else {
                    if (p_left.children[0].textified) {
                        p_left.textified = p_left.children[0].textified;
                    }
                    if (p_left.children[0].isText) {
                        p_left.isText = true;
                    }
                    p_left.name = p_left.children[0].name;
                    p_left.source = p_left.children[0].source;
                    p_left.children = [];
                }
            }
            if (left_comments.length > 0) {
                p_left.children = p_left.children.concat(left_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property left undefined: ' + JSON.stringify(node, null, 2));
    }
    // log 'BinaryExpression.p_left', p_left
    // process AST-node-property right and set it in a var
    var p_right = null;
    if (typeof(node.right) !== 'undefined' && node.right != null) {
        p_right = {
            textified: null, 
            isText: false, 
            ASTProp: 'right', 
            children: [
                
            ]
        };
        if (node.right == null) {
            p_right.text = "null";
        }
        else {
            if (!node.right.type) {
                throw 'Node right has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp right before format'
            format(p_right, node.right, options)
            // log 'f_p_temp right after format', p_right.children.length, p_right
            var right_comments = extractCommentsIf(p_right, 1);
            if (p_right.children.length == 1) {
                p_right.tag = p_right.children[0].tag;
                if (!(p_right.children[0].isText || p_right.children[0].textified)) {
                    p_right.name = p_right.children[0].name;
                    p_right.source = p_right.children[0].source;
                    p_right.children = p_right.children[0].children;
                }
                else {
                    if (p_right.children[0].textified) {
                        p_right.textified = p_right.children[0].textified;
                    }
                    if (p_right.children[0].isText) {
                        p_right.isText = true;
                    }
                    p_right.name = p_right.children[0].name;
                    p_right.source = p_right.children[0].source;
                    p_right.children = [];
                }
            }
            if (right_comments.length > 0) {
                p_right.children = p_right.children.concat(right_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property right undefined: ' + JSON.stringify(node, null, 2));
    }
    // log 'BinaryExpression.p_right', p_right
    if (isTextualNode(p_left) && isTextualNode(p_right)) {
        ret.tag = 'set';
        ret.name = getNodeText(p_left) + ' ' + node.operator + ' ' + getNodeText(p_right);
        ret.textified = ret.name;
        if (node.extra && node.extra.parenthesized == true) {
            ret.textified = '(' + ret.textified + ')';
        }
    }
    else {
        if (isTextualNode(p_left) || (p_left.children.length == 0 && [ '@id', 'literal'].indexOf(p_left.tag) > -1)) {
            p_left.tag = '+';
            if (isTextualNode(p_left)) {
                p_left.name = getNodeText(p_left);
                p_left.children = [];
            }
        }
        ret.children.push(p_left)
        if (isTextualNode(p_right) || (p_right.children.length == 0 && [ '@id', 'literal'].indexOf(p_right.tag) > -1)) {
            p_right.tag = '+';
            if (isTextualNode(p_right)) {
                p_right.name = getNodeText(p_right);
                p_right.children = [];
            }
        }
        ret.children.push(p_right)
        if (node.__parent && node.__parent.name === 'body' && node.__parent.len == 1) {
            // is the return value of an ArrowExpression
            if (node.extra && node.extra.parenthesized == true) {
                ret.tag = '(' + ret.tag;
            }
            else {
                // 18/3/21 set ret.tag = '+'
            }
        }
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node AssignmentExpression
var AssignmentExpression_astNode = {
    name: "AssignmentExpression", 
    ittfTag: "set", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(AssignmentExpression_astNode)
format.AssignmentExpression = function(parent, node, options) {
    var f_astNode = AssignmentExpression_astNode;
    var __isText = false;
    // log 'node : AssignmentExpression ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'set', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'AssignmentExpression', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // log 'AssignmentExpression enter options.mustBeText', options.mustBeText
    // An assignment operator expression.
    // s( operator, AssignmentOperator
    // enum AssignmentOperator { "=" | "+=" | "-=" | "*=" | "/=" | "%=" | "<<=" | ">>=" | ">>>=" | "|=" | "^=" | "&="
    const save = options.mustBeText;
    options.mustBeText = true;
    // process AST-node-property left and set it in a var
    var p_left = null;
    if (typeof(node.left) !== 'undefined' && node.left != null) {
        p_left = {
            textified: null, 
            isText: false, 
            ASTProp: 'left', 
            children: [
                
            ]
        };
        if (node.left == null) {
            p_left.text = "null";
        }
        else {
            if (!node.left.type) {
                throw 'Node left has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp left before format'
            format(p_left, node.left, options)
            // log 'f_p_temp left after format', p_left.children.length, p_left
            var left_comments = extractCommentsIf(p_left, 1);
            if (p_left.children.length == 1) {
                p_left.tag = p_left.children[0].tag;
                if (!(p_left.children[0].isText || p_left.children[0].textified)) {
                    p_left.name = p_left.children[0].name;
                    p_left.source = p_left.children[0].source;
                    p_left.children = p_left.children[0].children;
                }
                else {
                    if (p_left.children[0].textified) {
                        p_left.textified = p_left.children[0].textified;
                    }
                    if (p_left.children[0].isText) {
                        p_left.isText = true;
                    }
                    p_left.name = p_left.children[0].name;
                    p_left.source = p_left.children[0].source;
                    p_left.children = [];
                }
            }
            if (left_comments.length > 0) {
                p_left.children = p_left.children.concat(left_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property left undefined: ' + JSON.stringify(node, null, 2));
    }
    options.mustBeText = save;
    // process AST-node-property right and set it in a var
    var p_right = null;
    if (typeof(node.right) !== 'undefined' && node.right != null) {
        p_right = {
            textified: null, 
            isText: false, 
            ASTProp: 'right', 
            children: [
                
            ]
        };
        if (node.right == null) {
            p_right.text = "null";
        }
        else {
            if (!node.right.type) {
                throw 'Node right has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp right before format'
            format(p_right, node.right, options)
            // log 'f_p_temp right after format', p_right.children.length, p_right
            var right_comments = extractCommentsIf(p_right, 1);
            if (p_right.children.length == 1) {
                p_right.tag = p_right.children[0].tag;
                if (!(p_right.children[0].isText || p_right.children[0].textified)) {
                    p_right.name = p_right.children[0].name;
                    p_right.source = p_right.children[0].source;
                    p_right.children = p_right.children[0].children;
                }
                else {
                    if (p_right.children[0].textified) {
                        p_right.textified = p_right.children[0].textified;
                    }
                    if (p_right.children[0].isText) {
                        p_right.isText = true;
                    }
                    p_right.name = p_right.children[0].name;
                    p_right.source = p_right.children[0].source;
                    p_right.children = [];
                }
            }
            if (right_comments.length > 0) {
                p_right.children = p_right.children.concat(right_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property right undefined: ' + JSON.stringify(node, null, 2));
    }
    if (isTextualNode(p_left)) {
        ret.name = getNodeText(p_left) + ' ' + node.operator + ' ';
    }
    else {
        ret.name = node.operator;
        ret.children.push(p_left)
    }
    // log 'AssignmentExpression.isTextualNode(p_right)', isTextualNode(p_right)
    // log 'AssignmentExpression.p_right', p_right
    if (isTextualNode(p_left) && isTextualNode(p_right)) {
        ret.name += getNodeText(p_right);
    }
    else {
        if (verify.isEmpty(p_right.tag)) {
            var i, i_items=p_right.children, i_len=p_right.children.length, item;
            for (i=0; i<i_len; i++) {
                item = p_right.children[i];
                ret.children.push(item)
            }
        }
        else {
            ret.children.push(p_right)
        }
    }
    // log 'AssignmentExpression.ret final', ret
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node LogicalExpression
var LogicalExpression_astNode = {
    name: "LogicalExpression", 
    ittfTag: "'op' + node.operator", 
    tagIsVar: true, 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(LogicalExpression_astNode)
format.LogicalExpression = function(parent, node, options) {
    var f_astNode = LogicalExpression_astNode;
    var __isText = false;
    // log 'node : LogicalExpression ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'op' + node.operator, 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'LogicalExpression', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // A logical operator expression.
    // s( operator, LogicalOperator enum "||" | "&&" | "??"
    // process AST-node-property left and set it in a var
    var p_left = null;
    if (typeof(node.left) !== 'undefined' && node.left != null) {
        p_left = {
            textified: null, 
            isText: false, 
            ASTProp: 'left', 
            children: [
                
            ]
        };
        if (node.left == null) {
            p_left.text = "null";
        }
        else {
            if (!node.left.type) {
                throw 'Node left has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp left before format'
            format(p_left, node.left, options)
            // log 'f_p_temp left after format', p_left.children.length, p_left
            var left_comments = extractCommentsIf(p_left, 1);
            if (p_left.children.length == 1) {
                p_left.tag = p_left.children[0].tag;
                if (!(p_left.children[0].isText || p_left.children[0].textified)) {
                    p_left.name = p_left.children[0].name;
                    p_left.source = p_left.children[0].source;
                    p_left.children = p_left.children[0].children;
                }
                else {
                    if (p_left.children[0].textified) {
                        p_left.textified = p_left.children[0].textified;
                    }
                    if (p_left.children[0].isText) {
                        p_left.isText = true;
                    }
                    p_left.name = p_left.children[0].name;
                    p_left.source = p_left.children[0].source;
                    p_left.children = [];
                }
            }
            if (left_comments.length > 0) {
                p_left.children = p_left.children.concat(left_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property left undefined: ' + JSON.stringify(node, null, 2));
    }
    // process AST-node-property right and set it in a var
    var p_right = null;
    if (typeof(node.right) !== 'undefined' && node.right != null) {
        p_right = {
            textified: null, 
            isText: false, 
            ASTProp: 'right', 
            children: [
                
            ]
        };
        if (node.right == null) {
            p_right.text = "null";
        }
        else {
            if (!node.right.type) {
                throw 'Node right has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp right before format'
            format(p_right, node.right, options)
            // log 'f_p_temp right after format', p_right.children.length, p_right
            var right_comments = extractCommentsIf(p_right, 1);
            if (p_right.children.length == 1) {
                p_right.tag = p_right.children[0].tag;
                if (!(p_right.children[0].isText || p_right.children[0].textified)) {
                    p_right.name = p_right.children[0].name;
                    p_right.source = p_right.children[0].source;
                    p_right.children = p_right.children[0].children;
                }
                else {
                    if (p_right.children[0].textified) {
                        p_right.textified = p_right.children[0].textified;
                    }
                    if (p_right.children[0].isText) {
                        p_right.isText = true;
                    }
                    p_right.name = p_right.children[0].name;
                    p_right.source = p_right.children[0].source;
                    p_right.children = [];
                }
            }
            if (right_comments.length > 0) {
                p_right.children = p_right.children.concat(right_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property right undefined: ' + JSON.stringify(node, null, 2));
    }
    var parenthesized = node.extra && node.extra.parenthesized;
    // log 'LogicalExpression', isTextualNode(p_left), isTextualNode(p_right)
    // log 'LogicalExpression,p_left', p_left
    // log 'LogicalExpression,p_right', p_right
    if (isTextualNode(p_left) && isTextualNode(p_right)) {
        ret.tag = 'set';
        ret.name = parenthesize(getNodeText(p_left) + ' ' + node.operator + ' ' + getNodeText(p_right), parenthesized);
        ret.textified = ret.name;
    }
    else {
        ret.tag = node.operator;
        // log 'LogicalExpression,isTextualNode(p_left),p_left', isTextualNode(p_left), p_left
        if (isTextualNode(p_left) || ['@expr', '@id', 'literal','set'].indexOf(p_left.tag) > -1) {
            p_left.tag = '+';
            if (isTextualNode(p_left)) {
                p_left.name = getNodeText(p_left);
                p_left.children = [];
            }
        }
        ret.children.push(p_left)
        // log 'LogicalExpression,isTextualNode(p_right),p_right', isTextualNode(p_right), p_right
        if (isTextualNode(p_right) || ['@expr', '@id', 'literal','set'].indexOf(p_right.tag) > -1) {
            p_right.tag = '+';
            if (isTextualNode(p_right)) {
                p_right.name = getNodeText(p_right);
                p_right.children = [];
            }
        }
        ret.children.push(p_right)
        if (parenthesized) {
            ret = {
                tag: '(', 
                children: [ret]
            };
        }
    }
    if (node.__parent && node.__parent.name === 'body' && node.__parent.len == 1) {
        // is the return value of an ArrowExpression
        if (node.extra && node.extra.parenthesized == true) {
            if (ret.tag === 'set') {
                ret.tag = '(';
            }
            else {
                ret.tag = '(' + ret.tag;
            }
        }
        else {
            if (ret.tag === 'set') {
                ret.tag = '+';
            }
            else {
                // TODO Do nothing is OK?
            }
        }
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node SpreadElement
var SpreadElement_astNode = {
    name: "SpreadElement", 
    ittfTag: "...", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(SpreadElement_astNode)
format.SpreadElement = function(parent, node, options) {
    var f_astNode = SpreadElement_astNode;
    var __isText = false;
    // log 'node : SpreadElement ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: '...', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'SpreadElement', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property argument and set it in a var
    var p_argument = null;
    if (typeof(node.argument) !== 'undefined' && node.argument != null) {
        p_argument = {
            textified: null, 
            isText: false, 
            ASTProp: 'argument', 
            children: [
                
            ]
        };
        if (node.argument == null) {
            p_argument.text = "null";
        }
        else {
            if (!node.argument.type) {
                throw 'Node argument has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp argument before format'
            format(p_argument, node.argument, options)
            // log 'f_p_temp argument after format', p_argument.children.length, p_argument
            var argument_comments = extractCommentsIf(p_argument, 1);
            if (p_argument.children.length == 1) {
                p_argument.tag = p_argument.children[0].tag;
                if (!(p_argument.children[0].isText || p_argument.children[0].textified)) {
                    p_argument.name = p_argument.children[0].name;
                    p_argument.source = p_argument.children[0].source;
                    p_argument.children = p_argument.children[0].children;
                }
                else {
                    if (p_argument.children[0].textified) {
                        p_argument.textified = p_argument.children[0].textified;
                    }
                    if (p_argument.children[0].isText) {
                        p_argument.isText = true;
                    }
                    p_argument.name = p_argument.children[0].name;
                    p_argument.source = p_argument.children[0].source;
                    p_argument.children = [];
                }
            }
            if (argument_comments.length > 0) {
                p_argument.children = p_argument.children.concat(argument_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property argument undefined: ' + JSON.stringify(node, null, 2));
    }
    // log 'SpreadElement.p_argument', p_argument
    if (isTextualNode(p_argument)) {
        ret.name = getNodeText(p_argument);
        ret.textified = '...' + ret.name;
    }
    else {
        ret.children.push(p_argument)
        // set ret.textified = p_argument.source
        // throw new Error('SpreadElement must be textual:' + JSON.stringify(p_argument, null, 2))
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node MemberExpression
var MemberExpression_astNode = {
    name: "MemberExpression", 
    ittfTag: "@expr", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(MemberExpression_astNode)
format.MemberExpression = function(parent, node, options) {
    var f_astNode = MemberExpression_astNode;
    var __isText = false;
    // log 'node : MemberExpression ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: '@expr', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'MemberExpression', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property object and set it in a var
    var p_object = null;
    if (typeof(node.object) !== 'undefined' && node.object != null) {
        p_object = {
            textified: null, 
            isText: false, 
            ASTProp: 'object', 
            children: [
                
            ]
        };
        if (node.object == null) {
            p_object.text = "null";
        }
        else {
            if (!node.object.type) {
                throw 'Node object has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp object before format'
            format(p_object, node.object, options)
            // log 'f_p_temp object after format', p_object.children.length, p_object
            var object_comments = extractCommentsIf(p_object, 1);
            if (p_object.children.length == 1) {
                p_object.tag = p_object.children[0].tag;
                if (!(p_object.children[0].isText || p_object.children[0].textified)) {
                    p_object.name = p_object.children[0].name;
                    p_object.source = p_object.children[0].source;
                    p_object.children = p_object.children[0].children;
                }
                else {
                    if (p_object.children[0].textified) {
                        p_object.textified = p_object.children[0].textified;
                    }
                    if (p_object.children[0].isText) {
                        p_object.isText = true;
                    }
                    p_object.name = p_object.children[0].name;
                    p_object.source = p_object.children[0].source;
                    p_object.children = [];
                }
            }
            if (object_comments.length > 0) {
                p_object.children = p_object.children.concat(object_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property object undefined: ' + JSON.stringify(node, null, 2));
    }
    // process AST-node-property property and set it in a var
    var p_property = null;
    if (typeof(node.property) !== 'undefined' && node.property != null) {
        p_property = {
            textified: null, 
            isText: false, 
            ASTProp: 'property', 
            children: [
                
            ]
        };
        if (node.property == null) {
            p_property.text = "null";
        }
        else {
            if (!node.property.type) {
                throw 'Node property has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp property before format'
            format(p_property, node.property, options)
            // log 'f_p_temp property after format', p_property.children.length, p_property
            var property_comments = extractCommentsIf(p_property, 1);
            if (p_property.children.length == 1) {
                p_property.tag = p_property.children[0].tag;
                if (!(p_property.children[0].isText || p_property.children[0].textified)) {
                    p_property.name = p_property.children[0].name;
                    p_property.source = p_property.children[0].source;
                    p_property.children = p_property.children[0].children;
                }
                else {
                    if (p_property.children[0].textified) {
                        p_property.textified = p_property.children[0].textified;
                    }
                    if (p_property.children[0].isText) {
                        p_property.isText = true;
                    }
                    p_property.name = p_property.children[0].name;
                    p_property.source = p_property.children[0].source;
                    p_property.children = [];
                }
            }
            if (property_comments.length > 0) {
                p_property.children = p_property.children.concat(property_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property property undefined: ' + JSON.stringify(node, null, 2));
    }
    // b( computed
    // b( optional, optional
    // If `computed` is `true`, the node corresponds to a computed (`a[b]`) member expression and `property` is an `Expression`.
    // If `computed` is `false`, the node corresponds to a static (`a.b`) member expression and `property` is an `Identifier`.
    // The `optional` flags indicates that the member expression can be called even if the object is null or undefined.
    // If this is the object value (null/undefined) should be returned.
    // log 'MemberExpression.p_object', isTextualNode(p_object), p_object
    if (isTextualNode(p_object)) {
        var obj = getNodeText(p_object);
        if (isTextualNode(p_property)) {
            var prop = getNodeText(p_property);
            ret.name = node.computed ? obj + '[' + prop + ']' : obj + '.' + prop;
            ret.textified = ret.name;
            ret.children = [];
            // log 'MemberExpression.textified', ret.textified
        }
        else {
            ret.name = obj;
            var link = {
                tag: node.computed ? '.[' : '.', 
                children: [
                    
                ]
            };
            link.children.push(p_property)
            ret.children.push(link)
        }
    }
    else {
        // log 1
        if (node.computed) {
            p_property.tag = '.[';
        }
        else {
            p_property.tag = '.';
        }
        if (p_object.tag === '(') {
            // log 2
            ret.children.push(p_object)
            ret.children.push(p_property)
        }
        else {
            // log 3, p_object.tag, p_object.name
            ret.tag = p_object.tag;
            ret.name = p_object.name;
            ret.source = p_object.source;
            ret.children = p_object.children;
            ret.children.push(p_property)
        }
        // log 'MemberExpression.tag.name', ret.tag, ret.name
        var i, i_items=ret.children, i_len=ret.children.length, item;
        for (i=0; i<i_len; i++) {
            item = ret.children[i];
            // log 'MemberExpression.child', i, ret.children[i].tag, ret.children[i].name
        }
    }
    if (node.__parent && node.__parent.name === 'body' && node.__parent.len == 1) {
        // is the return value of an ArrowExpression
        if (node.extra && node.extra.parenthesized == true) {
            ret.tag = '(';
        }
        else {
            ret.tag = '+';
        }
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node BindExpression
var BindExpression_astNode = {
    name: "BindExpression", 
    ittfTag: "bind-expr", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(BindExpression_astNode)
format.BindExpression = function(parent, node, options) {
    var f_astNode = BindExpression_astNode;
    var __isText = false;
    // log 'node : BindExpression ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'bind-expr', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'BindExpression', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property object and append ittfNode to `ret`
    f_astNode.props.push({
        name: "object", 
        descr: "process AST-node-property object and append ittfNode to `ret`"
    })
    if (node.object) {
        if (!node.object.type) {
            throw 'Node object has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.object, options)
    }
    // process AST-node-property callee and append ittfNode to `ret`
    f_astNode.props.push({
        name: "callee", 
        descr: "process AST-node-property callee and append ittfNode to `ret`"
    })
    if (node.callee) {
        if (!node.callee.type) {
            throw 'Node callee has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.callee, options)
    }
    else {
        throw new Error('AST-node-property callee undefined: ' + JSON.stringify(node, null, 2));
    }
    // if `object` is `null`, then `callee` should be a `MemberExpression`.
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node ConditionalExpression
var ConditionalExpression_astNode = {
    name: "ConditionalExpression", 
    ittfTag: "iif", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(ConditionalExpression_astNode)
format.ConditionalExpression = function(parent, node, options) {
    var f_astNode = ConditionalExpression_astNode;
    var __isText = false;
    // log 'node : ConditionalExpression ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'iif', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'ConditionalExpression', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // A conditional expression, i.e., a ternary `?`/`:` expression.
    f_astNode.props.push({
        name: "test", 
        tag: "test", 
        descr: "fragment f_p_tag"
    })
    var p_test = {
        textified: null, 
        isText: false, 
        ASTProp: 'test', 
        children: [
            
        ]
    };
    if (node.test) {
        if (!node.test.type) {
            throw 'Node test has no type: ' + JSON.stringify(node, null, 2);
        }
        format(p_test, node.test, options)
        p_test.tag = 'test';
        ret.children.push(p_test)
        if (p_test.children.length == 1) {
            // log '*** f_p_tag test children[0].textified', p_test.children[0].textified
            // log '*** f_p_tag test children[0].isText', p_test.children[0].isText
            // log '*** f_p_tag test children[0].name', p_test.children[0].name
            if (p_test.children[0].textified) {
                p_test.textified = p_test.children[0].textified;
            }
            if (p_test.children[0].isText) {
                p_test.isText = true;
                p_test.name = p_test.children[0].name;
                p_test.children = [];
            }
        }
        /**
            TODO VIA
            else {
                throw new Error('AST-property test/test not managed by f_p_tag');
            }
        */
    }
    // process AST-node-property consequent and set it in a var
    var p_consequent = null;
    if (typeof(node.consequent) !== 'undefined' && node.consequent != null) {
        p_consequent = {
            textified: null, 
            isText: false, 
            ASTProp: 'consequent', 
            children: [
                
            ]
        };
        if (node.consequent == null) {
            p_consequent.text = "null";
        }
        else {
            if (!node.consequent.type) {
                throw 'Node consequent has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp consequent before format'
            format(p_consequent, node.consequent, options)
            // log 'f_p_temp consequent after format', p_consequent.children.length, p_consequent
            var consequent_comments = extractCommentsIf(p_consequent, 1);
            if (p_consequent.children.length == 1) {
                p_consequent.tag = p_consequent.children[0].tag;
                if (!(p_consequent.children[0].isText || p_consequent.children[0].textified)) {
                    p_consequent.name = p_consequent.children[0].name;
                    p_consequent.source = p_consequent.children[0].source;
                    p_consequent.children = p_consequent.children[0].children;
                }
                else {
                    if (p_consequent.children[0].textified) {
                        p_consequent.textified = p_consequent.children[0].textified;
                    }
                    if (p_consequent.children[0].isText) {
                        p_consequent.isText = true;
                    }
                    p_consequent.name = p_consequent.children[0].name;
                    p_consequent.source = p_consequent.children[0].source;
                    p_consequent.children = [];
                }
            }
            if (consequent_comments.length > 0) {
                p_consequent.children = p_consequent.children.concat(consequent_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property consequent undefined: ' + JSON.stringify(node, null, 2));
    }
    // process AST-node-property alternate and set it in a var
    var p_alternate = null;
    if (typeof(node.alternate) !== 'undefined' && node.alternate != null) {
        p_alternate = {
            textified: null, 
            isText: false, 
            ASTProp: 'alternate', 
            children: [
                
            ]
        };
        if (node.alternate == null) {
            p_alternate.text = "null";
        }
        else {
            if (!node.alternate.type) {
                throw 'Node alternate has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp alternate before format'
            format(p_alternate, node.alternate, options)
            // log 'f_p_temp alternate after format', p_alternate.children.length, p_alternate
            var alternate_comments = extractCommentsIf(p_alternate, 1);
            if (p_alternate.children.length == 1) {
                p_alternate.tag = p_alternate.children[0].tag;
                if (!(p_alternate.children[0].isText || p_alternate.children[0].textified)) {
                    p_alternate.name = p_alternate.children[0].name;
                    p_alternate.source = p_alternate.children[0].source;
                    p_alternate.children = p_alternate.children[0].children;
                }
                else {
                    if (p_alternate.children[0].textified) {
                        p_alternate.textified = p_alternate.children[0].textified;
                    }
                    if (p_alternate.children[0].isText) {
                        p_alternate.isText = true;
                    }
                    p_alternate.name = p_alternate.children[0].name;
                    p_alternate.source = p_alternate.children[0].source;
                    p_alternate.children = [];
                }
            }
            if (alternate_comments.length > 0) {
                p_alternate.children = p_alternate.children.concat(alternate_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property alternate undefined: ' + JSON.stringify(node, null, 2));
    }
    // log 'ConditionalExpression 1', ret.tag
    setNameFromChildByTag(ret, 'test', true);
    // log 'ConditionalExpression 2', ret.tag
    setOrInlineIfTextualNode(ret, p_consequent, 'then')
    setOrInlineIfTextualNode(ret, p_alternate, 'else')
    // log 'ConditionalExpression 3', ret.tag
    if (node.__parent && node.__parent.name === 'body' && node.__parent.len == 1) {
        // is the return value of an ArrowExpression
        if (node.extra && node.extra.parenthesized == true) {
            var temp = {
                tag: '(', 
                children: [
                    ret
                ]
            };
            ret = temp;
        }
        else {
            // TODO do nothing
        }
    }
    // log 'ConditionalExpression 4', ret.tag
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node CallExpression
var CallExpression_astNode = {
    name: "CallExpression", 
    ittfTag: "_", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(CallExpression_astNode)
format.CallExpression = function(parent, node, options) {
    var f_astNode = CallExpression_astNode;
    var __isText = false;
    // log 'node : CallExpression ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: '_', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'CallExpression', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // A function or method call expression.
    // process AST-node-property typeParameters and append ittfNode to `ret`
    f_astNode.props.push({
        name: "typeParameters", 
        descr: "process AST-node-property typeParameters and append ittfNode to `ret`"
    })
    if (node.typeParameters) {
        if (!node.typeParameters.type) {
            throw 'Node typeParameters has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.typeParameters, options)
    }
    // process AST-node-property callee and set it in a var
    var p_callee = null;
    if (typeof(node.callee) !== 'undefined' && node.callee != null) {
        p_callee = {
            textified: null, 
            isText: false, 
            ASTProp: 'callee', 
            children: [
                
            ]
        };
        if (node.callee == null) {
            p_callee.text = "null";
        }
        else {
            if (!node.callee.type) {
                throw 'Node callee has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp callee before format'
            format(p_callee, node.callee, options)
            // log 'f_p_temp callee after format', p_callee.children.length, p_callee
            var callee_comments = extractCommentsIf(p_callee, 1);
            if (p_callee.children.length == 1) {
                p_callee.tag = p_callee.children[0].tag;
                if (!(p_callee.children[0].isText || p_callee.children[0].textified)) {
                    p_callee.name = p_callee.children[0].name;
                    p_callee.source = p_callee.children[0].source;
                    p_callee.children = p_callee.children[0].children;
                }
                else {
                    if (p_callee.children[0].textified) {
                        p_callee.textified = p_callee.children[0].textified;
                    }
                    if (p_callee.children[0].isText) {
                        p_callee.isText = true;
                    }
                    p_callee.name = p_callee.children[0].name;
                    p_callee.source = p_callee.children[0].source;
                    p_callee.children = [];
                }
            }
            if (callee_comments.length > 0) {
                p_callee.children = p_callee.children.concat(callee_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property callee undefined: ' + JSON.stringify(node, null, 2));
    }
    // process AST-node-property-collection arguments and
    // embed its array of nodes in a temp var
    if (node.arguments) {
        if (typeof node.arguments.length === 'undefined') {
            throw new Error('Property node.arguments must be an array');
        }
        var p_arguments = {
            tag: 'notUsed', 
            children: [
                
            ]
        };
        var i, i_items=node.arguments, i_len=node.arguments.length, item;
        for (i=0; i<i_len; i++) {
            item = node.arguments[i];
            item.__parent = {
                name: 'arguments', 
                len: node.arguments.length
            };
            format(p_arguments, item, options)
        }
    }
    var lastCallee = ret;
    // log 'CallExpression.p_callee', p_callee
    if (isTextualNode(p_callee)) {
        // log 'CallExpression.isTextualNode(p_callee), node.typeParameters', isTextualNode(p_callee), getNodeText(p_callee), node.typeParameters
        // first of all try to set ret.textified
        ret.name = getNodeText(p_callee);
        if (node.typeParameters) {
            var i, i_items=p_arguments.children, i_len=p_arguments.children.length, item;
            for (i=0; i<i_len; i++) {
                item = p_arguments.children[i];
                if (['@expr', '@id', 'literal'].indexOf(item.tag) > -1) {
                    item.tag = '@';
                }
                lastCallee.children.push(item)
            }
        }
        else {
            // log 'CallExpression p_arguments', p_arguments
            if (p_arguments && p_arguments.children.length > 0) {
                var tlist = getTextList(p_arguments, ', ');
                if (tlist) {
                    ret.name += '(' + tlist + ')';
                    ret.textified = ret.name;
                    ret.isText = true;
                }
                else {
                    var i, i_items=p_arguments.children, i_len=p_arguments.children.length, item;
                    for (i=0; i<i_len; i++) {
                        item = p_arguments.children[i];
                        if (['@expr', '@id', 'literal'].indexOf(item.tag) > -1) {
                            item.tag = '@';
                        }
                        lastCallee.children.push(item)
                    }
                }
            }
            else {
                ret.textified = ret.name + '()';
                ret.isText = true;
            }
            if (ret.textified && node.extra && node.extra.parenthesized == true) {
                ret.textified = '(' + ret.textified + ')';
            }
        }
        // log 'CallExpression', 'ret.name,textified', ret.name, ret.textified
    }
    else {
        // log 'CallExpression', 'p_callee.tag.name, p_callee.name, ret.tag', p_callee.tag, p_callee.name, ret.tag
        var i, i_items=p_callee.children, i_len=p_callee.children.length, item;
        for (i=0; i<i_len; i++) {
            item = p_callee.children[i];
            // log 'CallExpression', 'p_callee.children', i, p_callee.children[i].tag, p_callee.children[i].name
        }
        if (p_arguments) {
            var i, i_items=p_arguments.children, i_len=p_arguments.children.length, item;
            for (i=0; i<i_len; i++) {
                item = p_arguments.children[i];
                // log 'CallExpression', 'p_arguments.children', i, p_arguments.children[i].tag, p_arguments.children[i].name
            }
        }
        if (['[', '{'].indexOf(p_callee.tag) > -1) {
            ret.tag = p_callee.tag;
        }
        if (['`lit','iif'].indexOf(p_callee.tag) < 0) {
            ret.name = p_callee.name;
            ret.children = p_callee.children;
            if (p_callee.children.length > 0) {
                // log 'p_callee.children.length > 0'
                lastCallee = p_callee.children[p_callee.children.length-1];
                if (p_arguments && p_arguments.children.length > 0) {
                    if (lastCallee.tag === '.') {
                        lastCallee.tag = '._';
                        var i, i_items=p_arguments.children, i_len=p_arguments.children.length, item;
                        for (i=0; i<i_len; i++) {
                            item = p_arguments.children[i];
                            if (['@expr', '@id', 'literal'].indexOf(item.tag) > -1) {
                                item.tag = '@';
                            }
                            lastCallee.children.push(item)
                        }
                    }
                    else {
                        var call = {
                            tag: '(', 
                            children: [
                                
                            ]
                        };
                        var i, i_items=p_arguments.children, i_len=p_arguments.children.length, item;
                        for (i=0; i<i_len; i++) {
                            item = p_arguments.children[i];
                            if (['@expr', '@id', 'literal'].indexOf(item.tag) > -1) {
                                item.tag = '@';
                            }
                            call.children.push(item)
                        }
                        ret.children.push(call);
                    }
                }
                else {
                    if (lastCallee.tag === '.') {
                        lastCallee.tag = '._';
                    }
                }
            }
            else {
                // log 'p_callee.children.length == 0'
                ret.tag = "_";
                ret.name = p_callee.tag;
                if (p_arguments && p_arguments.children.length > 0) {
                    var i, i_items=p_arguments.children, i_len=p_arguments.children.length, item;
                    for (i=0; i<i_len; i++) {
                        item = p_arguments.children[i];
                        if (['@expr', '@id', 'literal'].indexOf(item.tag) > -1) {
                            item.tag = '@';
                        }
                        ret.children.push(item)
                    }
                }
                // log 'CallExpression', p_callee, ret
            }
            // log 'node.callee.type', node.callee.type, ret.tag
        }
        else {
            var temp = [p_callee];
            lastCallee = p_callee.children[p_callee.children.length-1];
            if (lastCallee.tag === '.') {
                lastCallee.tag = '._';
                p_callee.children.length --;
                temp.push(lastCallee)
            }
            ret.children = temp;
            var i, i_items=p_arguments.children, i_len=p_arguments.children.length, item;
            for (i=0; i<i_len; i++) {
                item = p_arguments.children[i];
                if (['@expr', '@id', 'literal'].indexOf(item.tag) > -1) {
                    item.tag = '@';
                }
                lastCallee.children.push(item)
            }
        }
        if (node.callee.type === 'FunctionExpression' && ret.tag === '_') {
            // log 'node.callee.type 2', node.callee.type, ret.tag
            ret.tag = 'iife' // 9/1/19;
        }
    }
    if (node.extra && node.extra.parenthesized == true && !ret.textified) {
        var temp = {
            tag: '(', 
            children: [
                ret
            ]
        };
        ret = temp;
    }
    // log 'CallExpression.exit.ret', ret
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node NewExpression
var NewExpression_astNode = {
    name: "NewExpression", 
    ittfTag: "new", 
    couldBeText: true, 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(NewExpression_astNode)
format.NewExpression = function(parent, node, options) {
    var f_astNode = NewExpression_astNode;
    var __isText = false;
    options.couldBeText = true;
    // log 'node : NewExpression ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'new', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'NewExpression', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property-collection arguments and
    // embed its array of nodes in a new tag
    f_astNode.props.push({
        name: "arguments", 
        tag: "arguments", 
        descr: "# process AST-node-property-collection arguments and embed its array of nodes in a new tag"
    })
    if (node.arguments) {
        if (typeof node.arguments.length === 'undefined') {
            throw new Error('Property node.arguments must be an array');
        }
        if (node.arguments.length > 0) {
            var temparguments = {
                tag: 'arguments', 
                ASTProp: 'arguments', 
                children: [
                    
                ]
            };
            var i, i_items=node.arguments, i_len=node.arguments.length, item;
            for (i=0; i<i_len; i++) {
                item = node.arguments[i];
                item.__parent = {
                    name: 'arguments', 
                    len: node.arguments.length
                };
                format(temparguments, item, options)
            }
            ret.children.push(temparguments)
        }
    }
    // process AST-node-property callee and set it in a var
    var p_callee = null;
    if (typeof(node.callee) !== 'undefined' && node.callee != null) {
        p_callee = {
            textified: null, 
            isText: false, 
            ASTProp: 'callee', 
            children: [
                
            ]
        };
        if (node.callee == null) {
            p_callee.text = "null";
        }
        else {
            if (!node.callee.type) {
                throw 'Node callee has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp callee before format'
            format(p_callee, node.callee, options)
            // log 'f_p_temp callee after format', p_callee.children.length, p_callee
            var callee_comments = extractCommentsIf(p_callee, 1);
            if (p_callee.children.length == 1) {
                p_callee.tag = p_callee.children[0].tag;
                if (!(p_callee.children[0].isText || p_callee.children[0].textified)) {
                    p_callee.name = p_callee.children[0].name;
                    p_callee.source = p_callee.children[0].source;
                    p_callee.children = p_callee.children[0].children;
                }
                else {
                    if (p_callee.children[0].textified) {
                        p_callee.textified = p_callee.children[0].textified;
                    }
                    if (p_callee.children[0].isText) {
                        p_callee.isText = true;
                    }
                    p_callee.name = p_callee.children[0].name;
                    p_callee.source = p_callee.children[0].source;
                    p_callee.children = [];
                }
            }
            if (callee_comments.length > 0) {
                p_callee.children = p_callee.children.concat(callee_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property callee undefined: ' + JSON.stringify(node, null, 2));
    }
    if (p_callee.isText || p_callee.textified) {
        ret.name = p_callee.textified || p_callee.name;
    }
    else {
        throw new Error('NewExpression.callee must be textual:' + p_callee.children[0].tag);
    }
    var argumentsNode = getChildByTag(ret, 'arguments');
    ret.children = [];
    if (argumentsNode) {
        var tlist = getTextList(argumentsNode, ', ');
        // log 'NewExpression.tlist', tlist
        // if tlist && tlist.length < 15
        if (tlist) {
            ret.name += '(' + tlist + ')';
            ret.textified = 'new ' + ret.name;
        }
        else {
            var i, i_items=argumentsNode.children, i_len=argumentsNode.children.length, item;
            for (i=0; i<i_len; i++) {
                item = argumentsNode.children[i];
                if (['@expr', '@id', 'literal'].indexOf(item.tag) > -1) {
                    item.tag = '@';
                }
                ret.children.push(item)
            }
        }
    }
    else {
        ret.textified = 'new ' + ret.name + '()';
    }
    // log 'NewExpression.ret', ret
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
    options.couldBeText = false;
};
// process AST node SequenceExpression
var SequenceExpression_astNode = {
    name: "SequenceExpression", 
    ittfTag: "sequence", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(SequenceExpression_astNode)
format.SequenceExpression = function(parent, node, options) {
    var f_astNode = SequenceExpression_astNode;
    var __isText = false;
    // log 'node : SequenceExpression ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'sequence', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'SequenceExpression', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property-collection expressions and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "expressions", 
        throwIfUndefined: true, 
        descr: "process AST-node-property-collection expressions and append ittfNode(s) to `ret`"
    })
    if (node.expressions) {
        if (typeof node.expressions.length === 'undefined') {
            throw new Error('Property node.expressions must be an array');
        }
        var i, i_items=node.expressions, i_len=node.expressions.length, item;
        for (i=0; i<i_len; i++) {
            item = node.expressions[i];
            item.__parent = {
                name: 'expressions', 
                len: node.expressions.length
            };
            format(ret, item, options)
        }
    }
    else {
        throw new Error('AST-node-property-collection expressions undefined: ' + JSON.stringify(node, null, 2));
    }
    // A sequence expression, i.e., a comma-separated sequence of expressions.
    var i, i_items=ret.children, i_len=ret.children.length, item;
    for (i=0; i<i_len; i++) {
        item = ret.children[i];
        if (['@expr', '@id', 'literal'].indexOf(item.tag) > -1) {
            item.tag = 'set';
        }
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node DoExpression
var DoExpression_astNode = {
    name: "DoExpression", 
    ittfTag: "do", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(DoExpression_astNode)
format.DoExpression = function(parent, node, options) {
    var f_astNode = DoExpression_astNode;
    var __isText = false;
    // log 'node : DoExpression ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'do', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'DoExpression', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property body and append ittfNode to `ret`
    f_astNode.props.push({
        name: "body", 
        descr: "process AST-node-property body and append ittfNode to `ret`"
    })
    if (node.body) {
        if (!node.body.type) {
            throw 'Node body has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.body, options)
    }
    else {
        throw new Error('AST-node-property body undefined: ' + JSON.stringify(node, null, 2));
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TemplateLiteral
var TemplateLiteral_astNode = {
    name: "TemplateLiteral", 
    ittfTag: "`lit", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TemplateLiteral_astNode)
format.TemplateLiteral = function(parent, node, options) {
    var f_astNode = TemplateLiteral_astNode;
    var __isText = false;
    // log 'node : TemplateLiteral ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: '`lit', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TemplateLiteral', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property-collection quasis and
    // embed its array of nodes in a temp var
    if (node.quasis) {
        if (typeof node.quasis.length === 'undefined') {
            throw new Error('Property node.quasis must be an array');
        }
        var p_quasis = {
            tag: 'true', 
            children: [
                
            ]
        };
        var i, i_items=node.quasis, i_len=node.quasis.length, item;
        for (i=0; i<i_len; i++) {
            item = node.quasis[i];
            item.__parent = {
                name: 'quasis', 
                len: node.quasis.length
            };
            format(p_quasis, item, options)
        }
    }
    // process AST-node-property-collection expressions and
    // embed its array of nodes in a temp var
    if (node.expressions) {
        if (typeof node.expressions.length === 'undefined') {
            throw new Error('Property node.expressions must be an array');
        }
        var p_expressions = {
            tag: 'true', 
            children: [
                
            ]
        };
        var i, i_items=node.expressions, i_len=node.expressions.length, item;
        for (i=0; i<i_len; i++) {
            item = node.expressions[i];
            item.__parent = {
                name: 'expressions', 
                len: node.expressions.length
            };
            format(p_expressions, item, options)
        }
    }
    var i = 0, j;
    for (i = 0; i < p_expressions.children.length; i++) {
        var q = p_quasis.children[i];
        for (j = 0; j < q.children.length; j++) {
            item = q.children[j];
            ret.children.push(item);
        }
        var e = p_expressions.children[i];
        // log 'TemplateLiteral.e', e
        if (['@expr', '@id', 'literal', 'set'].indexOf(e.tag) > -1) {
            e.tag = '@';
        }
        ret.children.push(e);
    }
    if (p_quasis.children[i] && p_quasis.children[i].children.length > 0) {
        for (j = 0; j < p_quasis.children[i].children.length; j++) {
            item = p_quasis.children[i].children[j];
            ret.children.push(item);
        }
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TaggedTemplateExpression
var TaggedTemplateExpression_astNode = {
    name: "TaggedTemplateExpression", 
    ittfTag: "_`", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TaggedTemplateExpression_astNode)
format.TaggedTemplateExpression = function(parent, node, options) {
    var f_astNode = TaggedTemplateExpression_astNode;
    var __isText = false;
    // log 'node : TaggedTemplateExpression ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: '_`', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TaggedTemplateExpression', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property tag and set it in a var
    var p_tag = null;
    if (typeof(node.tag) !== 'undefined' && node.tag != null) {
        p_tag = {
            textified: null, 
            isText: false, 
            ASTProp: 'tag', 
            children: [
                
            ]
        };
        if (node.tag == null) {
            p_tag.text = "null";
        }
        else {
            if (!node.tag.type) {
                throw 'Node tag has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp tag before format'
            format(p_tag, node.tag, options)
            // log 'f_p_temp tag after format', p_tag.children.length, p_tag
            var tag_comments = extractCommentsIf(p_tag, 1);
            if (p_tag.children.length == 1) {
                p_tag.tag = p_tag.children[0].tag;
                if (!(p_tag.children[0].isText || p_tag.children[0].textified)) {
                    p_tag.name = p_tag.children[0].name;
                    p_tag.source = p_tag.children[0].source;
                    p_tag.children = p_tag.children[0].children;
                }
                else {
                    if (p_tag.children[0].textified) {
                        p_tag.textified = p_tag.children[0].textified;
                    }
                    if (p_tag.children[0].isText) {
                        p_tag.isText = true;
                    }
                    p_tag.name = p_tag.children[0].name;
                    p_tag.source = p_tag.children[0].source;
                    p_tag.children = [];
                }
            }
            if (tag_comments.length > 0) {
                p_tag.children = p_tag.children.concat(tag_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property tag undefined: ' + JSON.stringify(node, null, 2));
    }
    if (isTextualNode(p_tag)) {
        ret.name = getNodeText(p_tag);
    }
    else {
        throw new Error('TaggedTemplateExpression.tag must be textual:' + JSON.stringify(node, null, 2));
    }
    // process AST-node-property quasi and set it in a var
    var p_quasi = null;
    if (typeof(node.quasi) !== 'undefined' && node.quasi != null) {
        p_quasi = {
            textified: null, 
            isText: false, 
            ASTProp: 'quasi', 
            children: [
                
            ]
        };
        if (node.quasi == null) {
            p_quasi.text = "null";
        }
        else {
            if (!node.quasi.type) {
                throw 'Node quasi has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp quasi before format'
            format(p_quasi, node.quasi, options)
            // log 'f_p_temp quasi after format', p_quasi.children.length, p_quasi
            var quasi_comments = extractCommentsIf(p_quasi, 1);
            if (p_quasi.children.length == 1) {
                p_quasi.tag = p_quasi.children[0].tag;
                if (!(p_quasi.children[0].isText || p_quasi.children[0].textified)) {
                    p_quasi.name = p_quasi.children[0].name;
                    p_quasi.source = p_quasi.children[0].source;
                    p_quasi.children = p_quasi.children[0].children;
                }
                else {
                    if (p_quasi.children[0].textified) {
                        p_quasi.textified = p_quasi.children[0].textified;
                    }
                    if (p_quasi.children[0].isText) {
                        p_quasi.isText = true;
                    }
                    p_quasi.name = p_quasi.children[0].name;
                    p_quasi.source = p_quasi.children[0].source;
                    p_quasi.children = [];
                }
            }
            if (quasi_comments.length > 0) {
                p_quasi.children = p_quasi.children.concat(quasi_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property quasi undefined: ' + JSON.stringify(node, null, 2));
    }
    var i, i_items=p_quasi.children, i_len=p_quasi.children.length, item;
    for (i=0; i<i_len; i++) {
        item = p_quasi.children[i];
        ret.children.push(item);
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TemplateElement
var TemplateElement_astNode = {
    name: "TemplateElement", 
    ittfTag: "+", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TemplateElement_astNode)
format.TemplateElement = function(parent, node, options) {
    var f_astNode = TemplateElement_astNode;
    var __isText = false;
    // log 'node : TemplateElement ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: '+', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TemplateElement', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // b( tail
    var lines = node.value.raw.split('\n');
    var i, i_items=lines, i_len=lines.length, line;
    for (i=0; i<i_len; i++) {
        line = lines[i];
        if (line[0] === ' ') {
            line = '&nbsp;' + line.substr(1);
        }
        if (line[line.length-1] === ' ') {
            line = line.substr(0, line.length -1) + '&nbsp;';
        }
        ret.children.push({
            tag: '+', 
            name: line + (( i < lines.length - 1) ? '&lf;' : '' ), 
            children: [
                
            ]
        })
    }
    // f_p( value
    // f_p_p( value, cooked, optional
    // f_p_p( value, raw
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node ObjectPattern
var ObjectPattern_astNode = {
    name: "ObjectPattern", 
    ittfTag: "{", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(ObjectPattern_astNode)
format.ObjectPattern = function(parent, node, options) {
    var f_astNode = ObjectPattern_astNode;
    var __isText = false;
    // log 'node : ObjectPattern ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: '{', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'ObjectPattern', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // log 'ObjectPattern enter options.mustBeText', options.mustBeText
    // process AST-node-property-collection properties and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "properties", 
        throwIfUndefined: true, 
        descr: "process AST-node-property-collection properties and append ittfNode(s) to `ret`"
    })
    if (node.properties) {
        if (typeof node.properties.length === 'undefined') {
            throw new Error('Property node.properties must be an array');
        }
        var i, i_items=node.properties, i_len=node.properties.length, item;
        for (i=0; i<i_len; i++) {
            item = node.properties[i];
            item.__parent = {
                name: 'properties', 
                len: node.properties.length
            };
            format(ret, item, options)
        }
    }
    else {
        throw new Error('AST-node-property-collection properties undefined: ' + JSON.stringify(node, null, 2));
    }
    // log 'wizzifiers.js.ObjectPattern.ret', JSON.stringify(ret, null, 2)
    if (options.mustBeText) {
        if (setTextList(ret, ', ') && !!node.typeAnnotation == false) {
            ret.textified = '{' + ret.textified + '}';
            if (node.extra && node.extra.parenthesized == true) {
                ret.textified = '(' + ret.textified + ')';
            }
        }
        else {
            throw new Error("ObjectPattern. Cannot textify node as requested: " + JSON.stringify(node, null, 2));
        }
    }
    else {
        // process AST-node-property typeAnnotation and append ittfNode to `ret`
        f_astNode.props.push({
            name: "typeAnnotation", 
            descr: "process AST-node-property typeAnnotation and append ittfNode to `ret`"
        })
        if (node.typeAnnotation) {
            if (!node.typeAnnotation.type) {
                throw 'Node typeAnnotation has no type: ' + JSON.stringify(node, null, 2);
            }
            format(ret, node.typeAnnotation, options)
        }
        if (ret.children.length == 0) {
            if (node.extra && node.extra.parenthesized == true) {
                ret.name = ret.textified = '({})';
            }
            else {
                ret.name = ret.textified = '{}';
            }
        }
        else {
            if (node.extra && node.extra.parenthesized == true) {
                var temp = {
                    tag: '(', 
                    children: [
                        ret
                    ]
                };
                ret = temp;
            }
        }
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node ArrayPattern
var ArrayPattern_astNode = {
    name: "ArrayPattern", 
    ittfTag: "none", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(ArrayPattern_astNode)
format.ArrayPattern = function(parent, node, options) {
    var f_astNode = ArrayPattern_astNode;
    var __isText = false;
    // log 'node : ArrayPattern ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'none', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'ArrayPattern', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property-collection elements and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "elements", 
        throwIfUndefined: false, 
        descr: "process AST-node-property-collection elements and append ittfNode(s) to `ret`"
    })
    if (node.elements) {
        if (typeof node.elements.length === 'undefined') {
            throw new Error('Property node.elements must be an array');
        }
        var i, i_items=node.elements, i_len=node.elements.length, item;
        for (i=0; i<i_len; i++) {
            item = node.elements[i];
            item.__parent = {
                name: 'elements', 
                len: node.elements.length
            };
            format(ret, item, options)
        }
    }
    if (setTextList(ret, ', ')) {
        ret.textified = '[' + ret.textified + ']';
        // log '*** ArrayPattern len, textified: ', ret.children.length, ret.textified
    }
    else {
        throw new Error('ArrayPattern must be textual: ' + JSON.stringify(node, null, 2));
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node RestElement
var RestElement_astNode = {
    name: "RestElement", 
    ittfTag: "...", 
    isText: true, 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(RestElement_astNode)
format.RestElement = function(parent, node, options) {
    var f_astNode = RestElement_astNode;
    var __isText = true;
    // log 'node : RestElement ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: '...', 
        name: '', 
        isText: true, 
        textified: null, 
        AST: 'RestElement', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property argument and append ittfNode to `ret`
    f_astNode.props.push({
        name: "argument", 
        descr: "process AST-node-property argument and append ittfNode to `ret`"
    })
    if (node.argument) {
        if (!node.argument.type) {
            throw 'Node argument has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.argument, options)
    }
    else {
        throw new Error('AST-node-property argument undefined: ' + JSON.stringify(node, null, 2));
    }
    // log 'get_text_from_1_children', isChildrenCount(ret, 1)
    var got_text_1 = false;
    if (isChildrenCount(ret, 1)) {
        if (ret.children[0].textified || ret.children[0].isText) {
            var c1 = ret.children[0].textified || ret.children[0].name;
            ret.name = c1;
            ret.textified = ret.name;
            ret.children = [];
            got_text_1 = true;
        }
    }
    // process AST-node-property typeAnnotation and append ittfNode to `ret`
    f_astNode.props.push({
        name: "typeAnnotation", 
        descr: "process AST-node-property typeAnnotation and append ittfNode to `ret`"
    })
    if (node.typeAnnotation) {
        if (!node.typeAnnotation.type) {
            throw 'Node typeAnnotation has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.typeAnnotation, options)
    }
    ret.textified = '...' + ret.name;
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node AssignmentPattern
var AssignmentPattern_astNode = {
    name: "AssignmentPattern", 
    ittfTag: "none", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(AssignmentPattern_astNode)
format.AssignmentPattern = function(parent, node, options) {
    var f_astNode = AssignmentPattern_astNode;
    var __isText = false;
    // log 'node : AssignmentPattern ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'none', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'AssignmentPattern', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property left and set it in a var
    var p_left = null;
    if (typeof(node.left) !== 'undefined' && node.left != null) {
        p_left = {
            textified: null, 
            isText: false, 
            ASTProp: 'left', 
            children: [
                
            ]
        };
        if (node.left == null) {
            p_left.text = "null";
        }
        else {
            if (!node.left.type) {
                throw 'Node left has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp left before format'
            format(p_left, node.left, options)
            // log 'f_p_temp left after format', p_left.children.length, p_left
            var left_comments = extractCommentsIf(p_left, 1);
            if (p_left.children.length == 1) {
                p_left.tag = p_left.children[0].tag;
                if (!(p_left.children[0].isText || p_left.children[0].textified)) {
                    p_left.name = p_left.children[0].name;
                    p_left.source = p_left.children[0].source;
                    p_left.children = p_left.children[0].children;
                }
                else {
                    if (p_left.children[0].textified) {
                        p_left.textified = p_left.children[0].textified;
                    }
                    if (p_left.children[0].isText) {
                        p_left.isText = true;
                    }
                    p_left.name = p_left.children[0].name;
                    p_left.source = p_left.children[0].source;
                    p_left.children = [];
                }
            }
            if (left_comments.length > 0) {
                p_left.children = p_left.children.concat(left_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property left undefined: ' + JSON.stringify(node, null, 2));
    }
    // process AST-node-property right and set it in a var
    var p_right = null;
    if (typeof(node.right) !== 'undefined' && node.right != null) {
        p_right = {
            textified: null, 
            isText: false, 
            ASTProp: 'right', 
            children: [
                
            ]
        };
        if (node.right == null) {
            p_right.text = "null";
        }
        else {
            if (!node.right.type) {
                throw 'Node right has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp right before format'
            format(p_right, node.right, options)
            // log 'f_p_temp right after format', p_right.children.length, p_right
            var right_comments = extractCommentsIf(p_right, 1);
            if (p_right.children.length == 1) {
                p_right.tag = p_right.children[0].tag;
                if (!(p_right.children[0].isText || p_right.children[0].textified)) {
                    p_right.name = p_right.children[0].name;
                    p_right.source = p_right.children[0].source;
                    p_right.children = p_right.children[0].children;
                }
                else {
                    if (p_right.children[0].textified) {
                        p_right.textified = p_right.children[0].textified;
                    }
                    if (p_right.children[0].isText) {
                        p_right.isText = true;
                    }
                    p_right.name = p_right.children[0].name;
                    p_right.source = p_right.children[0].source;
                    p_right.children = [];
                }
            }
            if (right_comments.length > 0) {
                p_right.children = p_right.children.concat(right_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property right undefined: ' + JSON.stringify(node, null, 2));
    }
    // log 'AssignmentPattern.p_left', JSON.stringify(p_left, null, 2)
    // log 'AssignmentPattern.p_right', JSON.stringify(p_right, null, 2)
    if (isTextualNode(p_left)) {
        ret.name = getNodeText(p_left) + ' ' + (node.operator || '=') + ' ';
        if (isTextualNode(p_right)) {
            ret.name += getNodeText(p_right);
        }
        else {
            ret.children.push(p_right)
        }
    }
    else {
        ret.children.push(p_left)
        ret.children.push(p_right)
    }
    // log 'AssignmentPattern', JSON.stringify(ret, null, 2)
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node Class
var Class_astNode = {
    name: "Class", 
    ittfTag: "class", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(Class_astNode)
format.Class = function(parent, node, options) {
    var f_astNode = Class_astNode;
    var __isText = false;
    // log 'node : Class ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'class', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'Class', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // Process AST-node-property id and
    // set the resulting node.name on : ret || parent (cmd: onparent)
    // used mainly for Identifier(s)
    f_astNode.props.push({
        name: "id", 
        onParent: false, 
        iftext: false, 
        descr: "Process AST-node-property id and set the resulting node.name on : ret || parent (cmd: onparent) used mainly for Identifier(s)"
    })
    if (node.id) {
        if (!node.id.type) {
            throw 'Node id has no type: ' + JSON.stringify(node, null, 2);
        }
        var tempid = {
            children: [
                
            ]
        };
        format(tempid, node.id, options)
        /**
            if (tempid .children.length > 0) {
                throw 'node.id must result zero node, returned: ' + tempid.children.length + ' source: ' + options.input.substring(node.start, node.end);
            }
        */
        var appto = false ? parent : ret;
        if (tempid.children.length > 0) {
            appto.name = tempid.children[0].name;
        }
        else {
            appto.name = tempid.name;
        }
    }
    // process AST-node-property superClass and set it in a var
    var p_superClass = null;
    if (typeof(node.superClass) !== 'undefined' && node.superClass != null) {
        p_superClass = {
            textified: null, 
            isText: false, 
            ASTProp: 'superClass', 
            children: [
                
            ]
        };
        if (node.superClass == null) {
            p_superClass.text = "null";
        }
        else {
            if (!node.superClass.type) {
                throw 'Node superClass has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp superClass before format'
            format(p_superClass, node.superClass, options)
            // log 'f_p_temp superClass after format', p_superClass.children.length, p_superClass
            var superClass_comments = extractCommentsIf(p_superClass, 1);
            if (p_superClass.children.length == 1) {
                p_superClass.tag = p_superClass.children[0].tag;
                if (!(p_superClass.children[0].isText || p_superClass.children[0].textified)) {
                    p_superClass.name = p_superClass.children[0].name;
                    p_superClass.source = p_superClass.children[0].source;
                    p_superClass.children = p_superClass.children[0].children;
                }
                else {
                    if (p_superClass.children[0].textified) {
                        p_superClass.textified = p_superClass.children[0].textified;
                    }
                    if (p_superClass.children[0].isText) {
                        p_superClass.isText = true;
                    }
                    p_superClass.name = p_superClass.children[0].name;
                    p_superClass.source = p_superClass.children[0].source;
                    p_superClass.children = [];
                }
            }
            if (superClass_comments.length > 0) {
                p_superClass.children = p_superClass.children.concat(superClass_comments);
            }
        }
    }
    if (p_superClass) {
        if (isTextualNode(p_superClass)) {
            ret.children.push({
                tag: 'super', 
                name: getNodeText(p_superClass)
            })
        }
        else {
            throw new Error('Class. superClass must be textual: ' + JSON.stringify(node, null, 2));
        }
    }
    // process AST-node-property-collection decorators and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "decorators", 
        throwIfUndefined: false, 
        descr: "process AST-node-property-collection decorators and append ittfNode(s) to `ret`"
    })
    if (node.decorators) {
        if (typeof node.decorators.length === 'undefined') {
            throw new Error('Property node.decorators must be an array');
        }
        var i, i_items=node.decorators, i_len=node.decorators.length, item;
        for (i=0; i<i_len; i++) {
            item = node.decorators[i];
            item.__parent = {
                name: 'decorators', 
                len: node.decorators.length
            };
            format(ret, item, options)
        }
    }
    // process AST-node-property body and append ittfNode to `ret`
    f_astNode.props.push({
        name: "body", 
        descr: "process AST-node-property body and append ittfNode to `ret`"
    })
    if (node.body) {
        if (!node.body.type) {
            throw 'Node body has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.body, options)
    }
    else {
        throw new Error('AST-node-property body undefined: ' + JSON.stringify(node, null, 2));
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node ClassBody
var ClassBody_astNode = {
    name: "ClassBody", 
    ittfTag: "ClassBody", 
    skip: true, 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(ClassBody_astNode)
format.ClassBody = function(parent, node, options) {
    var f_astNode = ClassBody_astNode;
    var __isText = false;
    // log 'node : ClassBody ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = parent;
    // process AST-node-property-collection body and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "body", 
        throwIfUndefined: true, 
        descr: "process AST-node-property-collection body and append ittfNode(s) to `ret`"
    })
    if (node.body) {
        if (typeof node.body.length === 'undefined') {
            throw new Error('Property node.body must be an array');
        }
        var i, i_items=node.body, i_len=node.body.length, item;
        for (i=0; i<i_len; i++) {
            item = node.body[i];
            item.__parent = {
                name: 'body', 
                len: node.body.length
            };
            format(ret, item, options)
        }
    }
    else {
        throw new Error('AST-node-property-collection body undefined: ' + JSON.stringify(node, null, 2));
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
    }
};
// process AST node ClassMethod
var ClassMethod_astNode = {
    name: "ClassMethod", 
    ittfTag: "node.kind", 
    tagIsVar: true, 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(ClassMethod_astNode)
format.ClassMethod = function(parent, node, options) {
    var f_astNode = ClassMethod_astNode;
    var __isText = false;
    // log 'node : ClassMethod ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: node.kind, 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'ClassMethod', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    f_astNode.props.push({
        name: "key", 
        tag: "key", 
        descr: "fragment f_p_tag"
    })
    var p_key = {
        textified: null, 
        isText: false, 
        ASTProp: 'key', 
        children: [
            
        ]
    };
    if (node.key) {
        if (!node.key.type) {
            throw 'Node key has no type: ' + JSON.stringify(node, null, 2);
        }
        format(p_key, node.key, options)
        p_key.tag = 'key';
        ret.children.push(p_key)
        if (p_key.children.length == 1) {
            // log '*** f_p_tag key children[0].textified', p_key.children[0].textified
            // log '*** f_p_tag key children[0].isText', p_key.children[0].isText
            // log '*** f_p_tag key children[0].name', p_key.children[0].name
            if (p_key.children[0].textified) {
                p_key.textified = p_key.children[0].textified;
            }
            if (p_key.children[0].isText) {
                p_key.isText = true;
                p_key.name = p_key.children[0].name;
                p_key.children = [];
            }
        }
        /**
            TODO VIA
            else {
                throw new Error('AST-property key/key not managed by f_p_tag');
            }
        */
    }
    // s( kind
    // enum "constructor" | "method" | "get" | "set"
    // b( computed
    // log 'node.static', node.static
    if (!!node.static == true) {
        ret.children.push({
            tag: 'static', 
            children: [
                
            ]
        })
    }
    // log 'node.async', node.async
    if (!!node.async == true) {
        ret.children.push({
            tag: 'async', 
            children: [
                
            ]
        })
    }
    // log 'node.generator', node.generator
    if (!!node.generator == true) {
        ret.children.push({
            tag: 'generator', 
            children: [
                
            ]
        })
    }
    if (node.accessibility) {
        ret.children.push({
            tag: ':' + node.accessibility, 
            name: '', 
            children: [
                
            ]
        })
    }
    // process AST-node-property-collection decorators and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "decorators", 
        throwIfUndefined: false, 
        descr: "process AST-node-property-collection decorators and append ittfNode(s) to `ret`"
    })
    if (node.decorators) {
        if (typeof node.decorators.length === 'undefined') {
            throw new Error('Property node.decorators must be an array');
        }
        var i, i_items=node.decorators, i_len=node.decorators.length, item;
        for (i=0; i<i_len; i++) {
            item = node.decorators[i];
            item.__parent = {
                name: 'decorators', 
                len: node.decorators.length
            };
            format(ret, item, options)
        }
    }
    // process AST-node-property-collection params and
    // embed its array of nodes in a new tag
    f_astNode.props.push({
        name: "params", 
        tag: "params", 
        descr: "# process AST-node-property-collection params and embed its array of nodes in a new tag"
    })
    if (node.params) {
        if (typeof node.params.length === 'undefined') {
            throw new Error('Property node.params must be an array');
        }
        if (node.params.length > 0) {
            var tempparams = {
                tag: 'params', 
                ASTProp: 'params', 
                children: [
                    
                ]
            };
            var i, i_items=node.params, i_len=node.params.length, item;
            for (i=0; i<i_len; i++) {
                item = node.params[i];
                item.__parent = {
                    name: 'params', 
                    len: node.params.length
                };
                format(tempparams, item, options)
            }
            ret.children.push(tempparams)
        }
    }
    processParams(ret);
    // process AST-node-property returnType and set it in a var
    var p_returnType = null;
    if (typeof(node.returnType) !== 'undefined' && node.returnType != null) {
        p_returnType = {
            textified: null, 
            isText: false, 
            ASTProp: 'returnType', 
            children: [
                
            ]
        };
        if (node.returnType == null) {
            p_returnType.text = "null";
        }
        else {
            if (!node.returnType.type) {
                throw 'Node returnType has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp returnType before format'
            format(p_returnType, node.returnType, options)
            // log 'f_p_temp returnType after format', p_returnType.children.length, p_returnType
            var returnType_comments = extractCommentsIf(p_returnType, 1);
            if (p_returnType.children.length == 1) {
                p_returnType.tag = p_returnType.children[0].tag;
                if (!(p_returnType.children[0].isText || p_returnType.children[0].textified)) {
                    p_returnType.name = p_returnType.children[0].name;
                    p_returnType.source = p_returnType.children[0].source;
                    p_returnType.children = p_returnType.children[0].children;
                }
                else {
                    if (p_returnType.children[0].textified) {
                        p_returnType.textified = p_returnType.children[0].textified;
                    }
                    if (p_returnType.children[0].isText) {
                        p_returnType.isText = true;
                    }
                    p_returnType.name = p_returnType.children[0].name;
                    p_returnType.source = p_returnType.children[0].source;
                    p_returnType.children = [];
                }
            }
            if (returnType_comments.length > 0) {
                p_returnType.children = p_returnType.children.concat(returnType_comments);
            }
        }
    }
    if (p_returnType) {
        p_returnType = {
            tag: ':return', 
            children: [
                p_returnType
            ]
        };
        ret.children.push(p_returnType);
    }
    // process AST-node-property body and append ittfNode to `ret`
    f_astNode.props.push({
        name: "body", 
        descr: "process AST-node-property body and append ittfNode to `ret`"
    })
    if (node.body) {
        if (!node.body.type) {
            throw 'Node body has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.body, options)
    }
    else {
        throw new Error('AST-node-property body undefined: ' + JSON.stringify(node, null, 2));
    }
    ret.tag = ret.tag == 'constructor' ? 'ctor' : (ret.tag == 'method' ? 'm' : ret.tag);
    setNameFromChildByTag(ret, 'key', true);
    if (ret.tag === 'ctor') {
        ret.name = '';
    }
    else if (node.computed) {
        ret.name = '[' + ret.name + ']';
    }
    /**
        VIA
        replaceChildrenOfChildWhenText(ret, getChildPosByTag(ret, 'params'), 'param')*/
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node ClassPrivateMethod
var ClassPrivateMethod_astNode = {
    name: "ClassPrivateMethod", 
    ittfTag: "node.kind", 
    tagIsVar: true, 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(ClassPrivateMethod_astNode)
format.ClassPrivateMethod = function(parent, node, options) {
    var f_astNode = ClassPrivateMethod_astNode;
    var __isText = false;
    // log 'node : ClassPrivateMethod ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: node.kind, 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'ClassPrivateMethod', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property key and append ittfNode to `ret`
    f_astNode.props.push({
        name: "key", 
        descr: "process AST-node-property key and append ittfNode to `ret`"
    })
    if (node.key) {
        if (!node.key.type) {
            throw 'Node key has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.key, options)
    }
    else {
        throw new Error('AST-node-property key undefined: ' + JSON.stringify(node, null, 2));
    }
    // s( kind, "method" | "get" | "set"
    // log 'node.static', node.static
    if (!!node.static == true) {
        ret.children.push({
            tag: 'static', 
            children: [
                
            ]
        })
    }
    // process AST-node-property-collection decorators and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "decorators", 
        throwIfUndefined: false, 
        descr: "process AST-node-property-collection decorators and append ittfNode(s) to `ret`"
    })
    if (node.decorators) {
        if (typeof node.decorators.length === 'undefined') {
            throw new Error('Property node.decorators must be an array');
        }
        var i, i_items=node.decorators, i_len=node.decorators.length, item;
        for (i=0; i<i_len; i++) {
            item = node.decorators[i];
            item.__parent = {
                name: 'decorators', 
                len: node.decorators.length
            };
            format(ret, item, options)
        }
    }
    // process AST-node-property-collection params and
    // embed its array of nodes in a new tag
    f_astNode.props.push({
        name: "params", 
        tag: "params", 
        descr: "# process AST-node-property-collection params and embed its array of nodes in a new tag"
    })
    if (node.params) {
        if (typeof node.params.length === 'undefined') {
            throw new Error('Property node.params must be an array');
        }
        if (node.params.length > 0) {
            var tempparams = {
                tag: 'params', 
                ASTProp: 'params', 
                children: [
                    
                ]
            };
            var i, i_items=node.params, i_len=node.params.length, item;
            for (i=0; i<i_len; i++) {
                item = node.params[i];
                item.__parent = {
                    name: 'params', 
                    len: node.params.length
                };
                format(tempparams, item, options)
            }
            ret.children.push(tempparams)
        }
    }
    ret.tag = ret.tag == 'method' ? 'm' : ret.tag;
    processParams(ret);
    // process AST-node-property returnType and set it in a var
    var p_returnType = null;
    if (typeof(node.returnType) !== 'undefined' && node.returnType != null) {
        p_returnType = {
            textified: null, 
            isText: false, 
            ASTProp: 'returnType', 
            children: [
                
            ]
        };
        if (node.returnType == null) {
            p_returnType.text = "null";
        }
        else {
            if (!node.returnType.type) {
                throw 'Node returnType has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp returnType before format'
            format(p_returnType, node.returnType, options)
            // log 'f_p_temp returnType after format', p_returnType.children.length, p_returnType
            var returnType_comments = extractCommentsIf(p_returnType, 1);
            if (p_returnType.children.length == 1) {
                p_returnType.tag = p_returnType.children[0].tag;
                if (!(p_returnType.children[0].isText || p_returnType.children[0].textified)) {
                    p_returnType.name = p_returnType.children[0].name;
                    p_returnType.source = p_returnType.children[0].source;
                    p_returnType.children = p_returnType.children[0].children;
                }
                else {
                    if (p_returnType.children[0].textified) {
                        p_returnType.textified = p_returnType.children[0].textified;
                    }
                    if (p_returnType.children[0].isText) {
                        p_returnType.isText = true;
                    }
                    p_returnType.name = p_returnType.children[0].name;
                    p_returnType.source = p_returnType.children[0].source;
                    p_returnType.children = [];
                }
            }
            if (returnType_comments.length > 0) {
                p_returnType.children = p_returnType.children.concat(returnType_comments);
            }
        }
    }
    if (p_returnType) {
        p_returnType = {
            tag: ':return', 
            children: [
                p_returnType
            ]
        };
        ret.children.push(p_returnType);
    }
    // process AST-node-property body and append ittfNode to `ret`
    f_astNode.props.push({
        name: "body", 
        descr: "process AST-node-property body and append ittfNode to `ret`"
    })
    if (node.body) {
        if (!node.body.type) {
            throw 'Node body has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.body, options)
    }
    else {
        throw new Error('AST-node-property body undefined: ' + JSON.stringify(node, null, 2));
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node ClassProperty
var ClassProperty_astNode = {
    name: "ClassProperty", 
    ittfTag: "p", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(ClassProperty_astNode)
format.ClassProperty = function(parent, node, options) {
    var f_astNode = ClassProperty_astNode;
    var __isText = false;
    // log 'node : ClassProperty ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'p', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'ClassProperty', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // Process AST-node-property key and
    // set the resulting node.name on : ret || parent (cmd: onparent)
    // used mainly for Identifier(s)
    f_astNode.props.push({
        name: "key", 
        onParent: false, 
        iftext: false, 
        descr: "Process AST-node-property key and set the resulting node.name on : ret || parent (cmd: onparent) used mainly for Identifier(s)"
    })
    if (node.key) {
        if (!node.key.type) {
            throw 'Node key has no type: ' + JSON.stringify(node, null, 2);
        }
        var tempkey = {
            children: [
                
            ]
        };
        format(tempkey, node.key, options)
        /**
            if (tempkey .children.length > 0) {
                throw 'node.key must result zero node, returned: ' + tempkey.children.length + ' source: ' + options.input.substring(node.start, node.end);
            }
        */
        var appto = false ? parent : ret;
        if (tempkey.children.length > 0) {
            appto.name = tempkey.children[0].name;
        }
        else {
            appto.name = tempkey.name;
        }
    }
    // process AST-node-property value and set it in a var
    var p_value = null;
    if (typeof(node.value) !== 'undefined' && node.value != null) {
        p_value = {
            textified: null, 
            isText: false, 
            ASTProp: 'value', 
            children: [
                
            ]
        };
        if (node.value == null) {
            p_value.text = "null";
        }
        else {
            if (!node.value.type) {
                throw 'Node value has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp value before format'
            format(p_value, node.value, options)
            // log 'f_p_temp value after format', p_value.children.length, p_value
            var value_comments = extractCommentsIf(p_value, 1);
            if (p_value.children.length == 1) {
                p_value.tag = p_value.children[0].tag;
                if (!(p_value.children[0].isText || p_value.children[0].textified)) {
                    p_value.name = p_value.children[0].name;
                    p_value.source = p_value.children[0].source;
                    p_value.children = p_value.children[0].children;
                }
                else {
                    if (p_value.children[0].textified) {
                        p_value.textified = p_value.children[0].textified;
                    }
                    if (p_value.children[0].isText) {
                        p_value.isText = true;
                    }
                    p_value.name = p_value.children[0].name;
                    p_value.source = p_value.children[0].source;
                    p_value.children = [];
                }
            }
            if (value_comments.length > 0) {
                p_value.children = p_value.children.concat(value_comments);
            }
        }
    }
    // process AST-node-property typeAnnotation and set it in a var
    var p_typeAnnotation = null;
    if (typeof(node.typeAnnotation) !== 'undefined' && node.typeAnnotation != null) {
        p_typeAnnotation = {
            textified: null, 
            isText: false, 
            ASTProp: 'typeAnnotation', 
            children: [
                
            ]
        };
        if (node.typeAnnotation == null) {
            p_typeAnnotation.text = "null";
        }
        else {
            if (!node.typeAnnotation.type) {
                throw 'Node typeAnnotation has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp typeAnnotation before format'
            format(p_typeAnnotation, node.typeAnnotation, options)
            // log 'f_p_temp typeAnnotation after format', p_typeAnnotation.children.length, p_typeAnnotation
            var typeAnnotation_comments = extractCommentsIf(p_typeAnnotation, 1);
            if (p_typeAnnotation.children.length == 1) {
                p_typeAnnotation.tag = p_typeAnnotation.children[0].tag;
                if (!(p_typeAnnotation.children[0].isText || p_typeAnnotation.children[0].textified)) {
                    p_typeAnnotation.name = p_typeAnnotation.children[0].name;
                    p_typeAnnotation.source = p_typeAnnotation.children[0].source;
                    p_typeAnnotation.children = p_typeAnnotation.children[0].children;
                }
                else {
                    if (p_typeAnnotation.children[0].textified) {
                        p_typeAnnotation.textified = p_typeAnnotation.children[0].textified;
                    }
                    if (p_typeAnnotation.children[0].isText) {
                        p_typeAnnotation.isText = true;
                    }
                    p_typeAnnotation.name = p_typeAnnotation.children[0].name;
                    p_typeAnnotation.source = p_typeAnnotation.children[0].source;
                    p_typeAnnotation.children = [];
                }
            }
            if (typeAnnotation_comments.length > 0) {
                p_typeAnnotation.children = p_typeAnnotation.children.concat(typeAnnotation_comments);
            }
        }
    }
    // log 'node.static', node.static
    if (!!node.static == true) {
        ret.children.push({
            tag: 'static', 
            children: [
                
            ]
        })
    }
    if (node.readonly) {
        ret.children.push({
            tag: ':readonly', 
            name: '', 
            children: [
                
            ]
        })
    }
    if (node.accessibility) {
        ret.children.push({
            tag: ':' + node.accessibility, 
            name: '', 
            children: [
                
            ]
        })
    }
    if (p_value && p_value.tag === '=>') {
        ret.tag = p_value.tag;
        if (p_typeAnnotation) {
            ret.children.push({
                tag: ':return', 
                name: '', 
                children: [p_typeAnnotation]
            })
            var i, i_items=p_value.children, i_len=p_value.children.length, item;
            for (i=0; i<i_len; i++) {
                item = p_value.children[i];
                ret.children.push(item)
            }
        }
        else {
            ret.children = p_value.children;
        }
    }
    else {
        if (p_typeAnnotation) {
            ret.children.push(p_typeAnnotation)
        }
        if (node.computed) {
            ret.name = '[' + ret.name + ']';
        }
        else if (p_value && p_value.tag) {
            if (['@id', '@expr', 'literal'].indexOf(p_value.tag) > -1) {
                p_value.tag = '=';
            }
            ret.children.push(p_value)
        }
        else {
            // do nothing
        }
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node ClassPrivateProperty
var ClassPrivateProperty_astNode = {
    name: "ClassPrivateProperty", 
    ittfTag: "p", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(ClassPrivateProperty_astNode)
format.ClassPrivateProperty = function(parent, node, options) {
    var f_astNode = ClassPrivateProperty_astNode;
    var __isText = false;
    // log 'node : ClassPrivateProperty ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'p', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'ClassPrivateProperty', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property key and append ittfNode to `ret`
    f_astNode.props.push({
        name: "key", 
        descr: "process AST-node-property key and append ittfNode to `ret`"
    })
    if (node.key) {
        if (!node.key.type) {
            throw 'Node key has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.key, options)
    }
    else {
        throw new Error('AST-node-property key undefined: ' + JSON.stringify(node, null, 2));
    }
    // process AST-node-property value and append ittfNode to `ret`
    f_astNode.props.push({
        name: "value", 
        descr: "process AST-node-property value and append ittfNode to `ret`"
    })
    if (node.value) {
        if (!node.value.type) {
            throw 'Node value has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.value, options)
    }
    // log 'node.static', node.static
    if (!!node.static == true) {
        ret.children.push({
            tag: 'static', 
            children: [
                
            ]
        })
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node ClassDeclaration
var ClassDeclaration_astNode = {
    name: "ClassDeclaration", 
    ittfTag: "class", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(ClassDeclaration_astNode)
format.ClassDeclaration = function(parent, node, options) {
    var f_astNode = ClassDeclaration_astNode;
    var __isText = false;
    // log 'node : ClassDeclaration ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'class', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'ClassDeclaration', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // Process AST-node-property id and
    // set the resulting node.name on : ret || parent (cmd: onparent)
    // used mainly for Identifier(s)
    f_astNode.props.push({
        name: "id", 
        onParent: false, 
        iftext: false, 
        descr: "Process AST-node-property id and set the resulting node.name on : ret || parent (cmd: onparent) used mainly for Identifier(s)"
    })
    if (node.id) {
        if (!node.id.type) {
            throw 'Node id has no type: ' + JSON.stringify(node, null, 2);
        }
        var tempid = {
            children: [
                
            ]
        };
        format(tempid, node.id, options)
        /**
            if (tempid .children.length > 0) {
                throw 'node.id must result zero node, returned: ' + tempid.children.length + ' source: ' + options.input.substring(node.start, node.end);
            }
        */
        var appto = false ? parent : ret;
        if (tempid.children.length > 0) {
            appto.name = tempid.children[0].name;
        }
        else {
            appto.name = tempid.name;
        }
    }
    // log 'node.abstract', node.abstract
    if (!!node.abstract == true) {
        ret.children.push({
            tag: ':abstract', 
            children: [
                
            ]
        })
    }
    // process AST-node-property typeParameters and append ittfNode to `ret`
    f_astNode.props.push({
        name: "typeParameters", 
        descr: "process AST-node-property typeParameters and append ittfNode to `ret`"
    })
    if (node.typeParameters) {
        if (!node.typeParameters.type) {
            throw 'Node typeParameters has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.typeParameters, options)
    }
    // process AST-node-property superClass and set it in a var
    var p_superClass = null;
    if (typeof(node.superClass) !== 'undefined' && node.superClass != null) {
        p_superClass = {
            textified: null, 
            isText: false, 
            ASTProp: 'superClass', 
            children: [
                
            ]
        };
        if (node.superClass == null) {
            p_superClass.text = "null";
        }
        else {
            if (!node.superClass.type) {
                throw 'Node superClass has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp superClass before format'
            format(p_superClass, node.superClass, options)
            // log 'f_p_temp superClass after format', p_superClass.children.length, p_superClass
            var superClass_comments = extractCommentsIf(p_superClass, 1);
            if (p_superClass.children.length == 1) {
                p_superClass.tag = p_superClass.children[0].tag;
                if (!(p_superClass.children[0].isText || p_superClass.children[0].textified)) {
                    p_superClass.name = p_superClass.children[0].name;
                    p_superClass.source = p_superClass.children[0].source;
                    p_superClass.children = p_superClass.children[0].children;
                }
                else {
                    if (p_superClass.children[0].textified) {
                        p_superClass.textified = p_superClass.children[0].textified;
                    }
                    if (p_superClass.children[0].isText) {
                        p_superClass.isText = true;
                    }
                    p_superClass.name = p_superClass.children[0].name;
                    p_superClass.source = p_superClass.children[0].source;
                    p_superClass.children = [];
                }
            }
            if (superClass_comments.length > 0) {
                p_superClass.children = p_superClass.children.concat(superClass_comments);
            }
        }
    }
    // process AST-node-property superTypeParameters and set it in a var
    var p_superTypeParameters = null;
    if (typeof(node.superTypeParameters) !== 'undefined' && node.superTypeParameters != null) {
        p_superTypeParameters = {
            textified: null, 
            isText: false, 
            ASTProp: 'superTypeParameters', 
            children: [
                
            ]
        };
        if (node.superTypeParameters == null) {
            p_superTypeParameters.text = "null";
        }
        else {
            if (!node.superTypeParameters.type) {
                throw 'Node superTypeParameters has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp superTypeParameters before format'
            format(p_superTypeParameters, node.superTypeParameters, options)
            // log 'f_p_temp superTypeParameters after format', p_superTypeParameters.children.length, p_superTypeParameters
            var superTypeParameters_comments = extractCommentsIf(p_superTypeParameters, 1);
            if (p_superTypeParameters.children.length == 1) {
                p_superTypeParameters.tag = p_superTypeParameters.children[0].tag;
                if (!(p_superTypeParameters.children[0].isText || p_superTypeParameters.children[0].textified)) {
                    p_superTypeParameters.name = p_superTypeParameters.children[0].name;
                    p_superTypeParameters.source = p_superTypeParameters.children[0].source;
                    p_superTypeParameters.children = p_superTypeParameters.children[0].children;
                }
                else {
                    if (p_superTypeParameters.children[0].textified) {
                        p_superTypeParameters.textified = p_superTypeParameters.children[0].textified;
                    }
                    if (p_superTypeParameters.children[0].isText) {
                        p_superTypeParameters.isText = true;
                    }
                    p_superTypeParameters.name = p_superTypeParameters.children[0].name;
                    p_superTypeParameters.source = p_superTypeParameters.children[0].source;
                    p_superTypeParameters.children = [];
                }
            }
            if (superTypeParameters_comments.length > 0) {
                p_superTypeParameters.children = p_superTypeParameters.children.concat(superTypeParameters_comments);
            }
        }
    }
    var p_super;
    if (p_superClass) {
        if (isTextualNode(p_superClass)) {
            p_super = {
                tag: 'super', 
                name: getNodeText(p_superClass), 
                children: [
                    
                ]
            };
            ret.children.push(p_super)
        }
        else if (p_superClass.text === 'null') {
            // OK
        }
        else {
            throw new Error('Class. superClass must be textual: ' + JSON.stringify(node, null, 2));
        }
    }
    if (p_superTypeParameters) {
        if (p_super) {
            var i, i_items=p_superTypeParameters.children, i_len=p_superTypeParameters.children.length, item;
            for (i=0; i<i_len; i++) {
                item = p_superTypeParameters.children[i];
                if (item.tag !== ':param') {
                    p_super.children.push({
                        tag: ':param', 
                        name: '', 
                        children: [
                            item
                        ]
                    })
                }
                else {
                    p_super.children.push(item)
                }
            }
        }
        else {
            p_superTypeParameters.tag = ':super-type-params';
            ret.children.push(p_superTypeParameters)
        }
    }
    // process AST-node-property-collection implements and
    // embed its array of nodes in a temp var
    if (node.implements) {
        if (typeof node.implements.length === 'undefined') {
            throw new Error('Property node.implements must be an array');
        }
        var p_implements = {
            tag: 'false', 
            children: [
                
            ]
        };
        var i, i_items=node.implements, i_len=node.implements.length, item;
        for (i=0; i<i_len; i++) {
            item = node.implements[i];
            item.__parent = {
                name: 'implements', 
                len: node.implements.length
            };
            format(p_implements, item, options)
        }
    }
    if (p_implements) {
        var i, i_items=p_implements.children, i_len=p_implements.children.length, item;
        for (i=0; i<i_len; i++) {
            item = p_implements.children[i];
            item.tag = ':implements';
            ret.children.push(item)
        }
    }
    // process AST-node-property-collection decorators and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "decorators", 
        throwIfUndefined: false, 
        descr: "process AST-node-property-collection decorators and append ittfNode(s) to `ret`"
    })
    if (node.decorators) {
        if (typeof node.decorators.length === 'undefined') {
            throw new Error('Property node.decorators must be an array');
        }
        var i, i_items=node.decorators, i_len=node.decorators.length, item;
        for (i=0; i<i_len; i++) {
            item = node.decorators[i];
            item.__parent = {
                name: 'decorators', 
                len: node.decorators.length
            };
            format(ret, item, options)
        }
    }
    // process AST-node-property body and append ittfNode to `ret`
    f_astNode.props.push({
        name: "body", 
        descr: "process AST-node-property body and append ittfNode to `ret`"
    })
    if (node.body) {
        if (!node.body.type) {
            throw 'Node body has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.body, options)
    }
    else {
        throw new Error('AST-node-property body undefined: ' + JSON.stringify(node, null, 2));
    }
    if (node.declare) {
        ret = {
            tag: ':declare', 
            name: '', 
            children: [
                ret
            ]
        };
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node ClassExpression
var ClassExpression_astNode = {
    name: "ClassExpression", 
    ittfTag: "class", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(ClassExpression_astNode)
format.ClassExpression = function(parent, node, options) {
    var f_astNode = ClassExpression_astNode;
    var __isText = false;
    // log 'node : ClassExpression ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'class', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'ClassExpression', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // Process AST-node-property id and
    // set the resulting node.name on : ret || parent (cmd: onparent)
    // used mainly for Identifier(s)
    f_astNode.props.push({
        name: "id", 
        onParent: false, 
        iftext: false, 
        descr: "Process AST-node-property id and set the resulting node.name on : ret || parent (cmd: onparent) used mainly for Identifier(s)"
    })
    if (node.id) {
        if (!node.id.type) {
            throw 'Node id has no type: ' + JSON.stringify(node, null, 2);
        }
        var tempid = {
            children: [
                
            ]
        };
        format(tempid, node.id, options)
        /**
            if (tempid .children.length > 0) {
                throw 'node.id must result zero node, returned: ' + tempid.children.length + ' source: ' + options.input.substring(node.start, node.end);
            }
        */
        var appto = false ? parent : ret;
        if (tempid.children.length > 0) {
            appto.name = tempid.children[0].name;
        }
        else {
            appto.name = tempid.name;
        }
    }
    // process AST-node-property superClass and set it in a var
    var p_superClass = null;
    if (typeof(node.superClass) !== 'undefined' && node.superClass != null) {
        p_superClass = {
            textified: null, 
            isText: false, 
            ASTProp: 'superClass', 
            children: [
                
            ]
        };
        if (node.superClass == null) {
            p_superClass.text = "null";
        }
        else {
            if (!node.superClass.type) {
                throw 'Node superClass has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp superClass before format'
            format(p_superClass, node.superClass, options)
            // log 'f_p_temp superClass after format', p_superClass.children.length, p_superClass
            var superClass_comments = extractCommentsIf(p_superClass, 1);
            if (p_superClass.children.length == 1) {
                p_superClass.tag = p_superClass.children[0].tag;
                if (!(p_superClass.children[0].isText || p_superClass.children[0].textified)) {
                    p_superClass.name = p_superClass.children[0].name;
                    p_superClass.source = p_superClass.children[0].source;
                    p_superClass.children = p_superClass.children[0].children;
                }
                else {
                    if (p_superClass.children[0].textified) {
                        p_superClass.textified = p_superClass.children[0].textified;
                    }
                    if (p_superClass.children[0].isText) {
                        p_superClass.isText = true;
                    }
                    p_superClass.name = p_superClass.children[0].name;
                    p_superClass.source = p_superClass.children[0].source;
                    p_superClass.children = [];
                }
            }
            if (superClass_comments.length > 0) {
                p_superClass.children = p_superClass.children.concat(superClass_comments);
            }
        }
    }
    if (p_superClass) {
        if (isTextualNode(p_superClass)) {
            ret.children.push({
                tag: 'super', 
                name: getNodeText(p_superClass), 
                children: [
                    
                ]
            })
        }
        else {
            throw new Error('Class. superClass must be textual: ' + JSON.stringify(node, null, 2));
        }
    }
    // process AST-node-property body and append ittfNode to `ret`
    f_astNode.props.push({
        name: "body", 
        descr: "process AST-node-property body and append ittfNode to `ret`"
    })
    if (node.body) {
        if (!node.body.type) {
            throw 'Node body has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.body, options)
    }
    else {
        throw new Error('AST-node-property body undefined: ' + JSON.stringify(node, null, 2));
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node MetaProperty
var MetaProperty_astNode = {
    name: "MetaProperty", 
    ittfTag: "meta", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(MetaProperty_astNode)
format.MetaProperty = function(parent, node, options) {
    var f_astNode = MetaProperty_astNode;
    var __isText = false;
    // log 'node : MetaProperty ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'meta', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'MetaProperty', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property meta and append ittfNode to `ret`
    f_astNode.props.push({
        name: "meta", 
        descr: "process AST-node-property meta and append ittfNode to `ret`"
    })
    if (node.meta) {
        if (!node.meta.type) {
            throw 'Node meta has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.meta, options)
    }
    else {
        throw new Error('AST-node-property meta undefined: ' + JSON.stringify(node, null, 2));
    }
    // process AST-node-property property and append ittfNode to `ret`
    f_astNode.props.push({
        name: "property", 
        descr: "process AST-node-property property and append ittfNode to `ret`"
    })
    if (node.property) {
        if (!node.property.type) {
            throw 'Node property has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.property, options)
    }
    else {
        throw new Error('AST-node-property property undefined: ' + JSON.stringify(node, null, 2));
    }
    var got_text_2 = false;
    if (isChildrenCount(ret, 2)) {
        if ((ret.children[0].textified || ret.children[0].isText) && (ret.children[1].textified || ret.children[1].isText)) {
            var c1 = ret.children[0].textified || ret.children[0].name;
            var c2 = ret.children[1].textified || ret.children[1].name;
            ret.name = c1 + '.' + c2;
            ret.textified = ret.name;
            ret.children = [];
            got_text_2 = true;
            got_text_2 = true;
        }
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node ModuleDeclaration
var ModuleDeclaration_astNode = {
    name: "ModuleDeclaration", 
    ittfTag: "module", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(ModuleDeclaration_astNode)
format.ModuleDeclaration = function(parent, node, options) {
    var f_astNode = ModuleDeclaration_astNode;
    var __isText = false;
    // log 'node : ModuleDeclaration ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'module', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'ModuleDeclaration', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // A module `import` or `export` declaration.
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node ImportDeclaration
var ImportDeclaration_astNode = {
    name: "ImportDeclaration", 
    ittfTag: "import", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(ImportDeclaration_astNode)
format.ImportDeclaration = function(parent, node, options) {
    var f_astNode = ImportDeclaration_astNode;
    var __isText = false;
    // log 'node : ImportDeclaration ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'import', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'ImportDeclaration', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property-collection specifiers and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "specifiers", 
        throwIfUndefined: true, 
        descr: "process AST-node-property-collection specifiers and append ittfNode(s) to `ret`"
    })
    if (node.specifiers) {
        if (typeof node.specifiers.length === 'undefined') {
            throw new Error('Property node.specifiers must be an array');
        }
        var i, i_items=node.specifiers, i_len=node.specifiers.length, item;
        for (i=0; i<i_len; i++) {
            item = node.specifiers[i];
            item.__parent = {
                name: 'specifiers', 
                len: node.specifiers.length
            };
            format(ret, item, options)
        }
    }
    else {
        throw new Error('AST-node-property-collection specifiers undefined: ' + JSON.stringify(node, null, 2));
    }
    f_astNode.props.push({
        name: "source", 
        tag: "from", 
        descr: "fragment f_p_tag"
    })
    var p_source = {
        textified: null, 
        isText: false, 
        ASTProp: 'source', 
        children: [
            
        ]
    };
    if (node.source) {
        if (!node.source.type) {
            throw 'Node source has no type: ' + JSON.stringify(node, null, 2);
        }
        format(p_source, node.source, options)
        p_source.tag = 'from';
        ret.children.push(p_source)
        if (p_source.children.length == 1) {
            // log '*** f_p_tag source children[0].textified', p_source.children[0].textified
            // log '*** f_p_tag source children[0].isText', p_source.children[0].isText
            // log '*** f_p_tag source children[0].name', p_source.children[0].name
            if (p_source.children[0].textified) {
                p_source.textified = p_source.children[0].textified;
            }
            if (p_source.children[0].isText) {
                p_source.isText = true;
                p_source.name = p_source.children[0].name;
                p_source.children = [];
            }
        }
        /**
            TODO VIA
            else {
                throw new Error('AST-property source/from not managed by f_p_tag');
            }
        */
    }
    // An import declaration, e.g., `import foo from "mod"`.
    //
    var xdefault = getChildByTag(ret, 'default');
    if (xdefault) {
        ret.name = xdefault.name;
        removeChildByTag(ret, 'default');
    }
    if (ret.children.length == 1 && ret.children[0].tag === 'from') {
        if (ret.name && ret.name.length > 0) {
            ret.name += ' from';
        }
        ret.name += ' '	+ ret.children[0].name;
        removeChildByTag(ret, 'from');
    }
    if (node.importKind === 'type') {
        ret.tag = ':import-type';
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node ImportSpecifier
var ImportSpecifier_astNode = {
    name: "ImportSpecifier", 
    ittfTag: "@", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(ImportSpecifier_astNode)
format.ImportSpecifier = function(parent, node, options) {
    var f_astNode = ImportSpecifier_astNode;
    var __isText = false;
    // log 'node : ImportSpecifier ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: '@', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'ImportSpecifier', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property local and append ittfNode to `ret`
    f_astNode.props.push({
        name: "local", 
        descr: "process AST-node-property local and append ittfNode to `ret`"
    })
    if (node.local) {
        if (!node.local.type) {
            throw 'Node local has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.local, options)
    }
    else {
        throw new Error('AST-node-property local undefined: ' + JSON.stringify(node, null, 2));
    }
    // Process AST-node-property imported and
    // set the resulting node.name on : ret || parent (cmd: onparent)
    // used mainly for Identifier(s)
    f_astNode.props.push({
        name: "imported", 
        onParent: false, 
        iftext: false, 
        descr: "Process AST-node-property imported and set the resulting node.name on : ret || parent (cmd: onparent) used mainly for Identifier(s)"
    })
    if (node.imported) {
        if (!node.imported.type) {
            throw 'Node imported has no type: ' + JSON.stringify(node, null, 2);
        }
        var tempimported = {
            children: [
                
            ]
        };
        format(tempimported, node.imported, options)
        /**
            if (tempimported .children.length > 0) {
                throw 'node.imported must result zero node, returned: ' + tempimported.children.length + ' source: ' + options.input.substring(node.start, node.end);
            }
        */
        var appto = false ? parent : ret;
        if (tempimported.children.length > 0) {
            appto.name = tempimported.children[0].name;
        }
        else {
            appto.name = tempimported.name;
        }
    }
    // f_p( local, true, Identifier
    // An imported variable binding, e.g., `{foo}` in `import {foo} from "mod"` or `{foo as bar}` in `import {foo as bar} from "mod"`.
    // The `imported` field refers to the name of the export imported from the module.
    // The `local` field refers to the binding imported into the local module scope.
    // If it is a basic named import, such as in `import {foo} from "mod"`, both `imported` and `local` are equivalent `Identifier` nodes in this case an `Identifier` node representing `foo`.
    // If it is an aliased import, such as in `import {foo as bar} from "mod"`, the `imported` field is an `Identifier` node representing `foo`,
    // and the `local` field is an `Identifier` node representing `bar`.
    if (ret.children[0].name !== ret.name) {
        ret.children[0].tag = 'as';
    }
    else {
        ret.children = [];
    }
    if (node.importKind === 'type') {
        ret.tag = ':type';
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node ImportDefaultSpecifier
var ImportDefaultSpecifier_astNode = {
    name: "ImportDefaultSpecifier", 
    ittfTag: "default", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(ImportDefaultSpecifier_astNode)
format.ImportDefaultSpecifier = function(parent, node, options) {
    var f_astNode = ImportDefaultSpecifier_astNode;
    var __isText = false;
    // log 'node : ImportDefaultSpecifier ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'default', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'ImportDefaultSpecifier', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // Process AST-node-property local and
    // set the resulting node.name on : ret || parent (cmd: onparent)
    // used mainly for Identifier(s)
    f_astNode.props.push({
        name: "local", 
        onParent: false, 
        iftext: false, 
        descr: "Process AST-node-property local and set the resulting node.name on : ret || parent (cmd: onparent) used mainly for Identifier(s)"
    })
    if (node.local) {
        if (!node.local.type) {
            throw 'Node local has no type: ' + JSON.stringify(node, null, 2);
        }
        var templocal = {
            children: [
                
            ]
        };
        format(templocal, node.local, options)
        /**
            if (templocal .children.length > 0) {
                throw 'node.local must result zero node, returned: ' + templocal.children.length + ' source: ' + options.input.substring(node.start, node.end);
            }
        */
        var appto = false ? parent : ret;
        if (templocal.children.length > 0) {
            appto.name = templocal.children[0].name;
        }
        else {
            appto.name = templocal.name;
        }
    }
    // A default import specifier, e.g., `foo` in `import foo from "mod.js"`.
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node ImportNamespaceSpecifier
var ImportNamespaceSpecifier_astNode = {
    name: "ImportNamespaceSpecifier", 
    ittfTag: "as", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(ImportNamespaceSpecifier_astNode)
format.ImportNamespaceSpecifier = function(parent, node, options) {
    var f_astNode = ImportNamespaceSpecifier_astNode;
    var __isText = false;
    // log 'node : ImportNamespaceSpecifier ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'as', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'ImportNamespaceSpecifier', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property local and append ittfNode to `ret`
    f_astNode.props.push({
        name: "local", 
        descr: "process AST-node-property local and append ittfNode to `ret`"
    })
    if (node.local) {
        if (!node.local.type) {
            throw 'Node local has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.local, options)
    }
    else {
        throw new Error('AST-node-property local undefined: ' + JSON.stringify(node, null, 2));
    }
    // A namespace import specifier, e.g., `* as foo` in `import * as foo from "mod.js"`.
    // log 'get_text_from_1_children', isChildrenCount(ret, 1)
    var got_text_1 = false;
    if (isChildrenCount(ret, 1)) {
        if (ret.children[0].textified || ret.children[0].isText) {
            var c1 = ret.children[0].textified || ret.children[0].name;
            ret.name = c1;
            ret.textified = ret.name;
            ret.children = [];
            got_text_1 = true;
        }
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node ExportNamedDeclaration
var ExportNamedDeclaration_astNode = {
    name: "ExportNamedDeclaration", 
    ittfTag: "export", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(ExportNamedDeclaration_astNode)
format.ExportNamedDeclaration = function(parent, node, options) {
    var f_astNode = ExportNamedDeclaration_astNode;
    var __isText = false;
    // log 'node : ExportNamedDeclaration ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'export', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'ExportNamedDeclaration', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property declaration and append ittfNode to `ret`
    f_astNode.props.push({
        name: "declaration", 
        descr: "process AST-node-property declaration and append ittfNode to `ret`"
    })
    if (node.declaration) {
        if (!node.declaration.type) {
            throw 'Node declaration has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.declaration, options)
    }
    // process AST-node-property-collection specifiers and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "specifiers", 
        throwIfUndefined: true, 
        descr: "process AST-node-property-collection specifiers and append ittfNode(s) to `ret`"
    })
    if (node.specifiers) {
        if (typeof node.specifiers.length === 'undefined') {
            throw new Error('Property node.specifiers must be an array');
        }
        var i, i_items=node.specifiers, i_len=node.specifiers.length, item;
        for (i=0; i<i_len; i++) {
            item = node.specifiers[i];
            item.__parent = {
                name: 'specifiers', 
                len: node.specifiers.length
            };
            format(ret, item, options)
        }
    }
    else {
        throw new Error('AST-node-property-collection specifiers undefined: ' + JSON.stringify(node, null, 2));
    }
    f_astNode.props.push({
        name: "source", 
        tag: "from", 
        descr: "fragment f_p_tag"
    })
    var p_source = {
        textified: null, 
        isText: false, 
        ASTProp: 'source', 
        children: [
            
        ]
    };
    if (node.source) {
        if (!node.source.type) {
            throw 'Node source has no type: ' + JSON.stringify(node, null, 2);
        }
        format(p_source, node.source, options)
        p_source.tag = 'from';
        ret.children.push(p_source)
        if (p_source.children.length == 1) {
            // log '*** f_p_tag source children[0].textified', p_source.children[0].textified
            // log '*** f_p_tag source children[0].isText', p_source.children[0].isText
            // log '*** f_p_tag source children[0].name', p_source.children[0].name
            if (p_source.children[0].textified) {
                p_source.textified = p_source.children[0].textified;
            }
            if (p_source.children[0].isText) {
                p_source.isText = true;
                p_source.name = p_source.children[0].name;
                p_source.children = [];
            }
        }
        /**
            TODO VIA
            else {
                throw new Error('AST-property source/from not managed by f_p_tag');
            }
        */
    }
    var xdefault = getChildByTag(ret, 'default');
    if (xdefault) {
        ret.name = xdefault.name;
        removeChildByTag(ret, 'default');
    }
    // An export named declaration, e.g., `export {foo, bar}`, `export {foo} from "mod"`, `export var foo = 1` or `export * as foo from "bar"`.
    // _Note, Having `declaration` populated with non-empty `specifiers` or non-null `source` results in an invalid state._
    if (node.exportKind === 'type') {
        // VIA 18/03/21 set ret.tag = ':export-type'
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node ExportSpecifier
var ExportSpecifier_astNode = {
    name: "ExportSpecifier", 
    ittfTag: "@", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(ExportSpecifier_astNode)
format.ExportSpecifier = function(parent, node, options) {
    var f_astNode = ExportSpecifier_astNode;
    var __isText = false;
    // log 'node : ExportSpecifier ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: '@', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'ExportSpecifier', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property exported and append ittfNode to `ret`
    f_astNode.props.push({
        name: "exported", 
        descr: "process AST-node-property exported and append ittfNode to `ret`"
    })
    if (node.exported) {
        if (!node.exported.type) {
            throw 'Node exported has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.exported, options)
    }
    else {
        throw new Error('AST-node-property exported undefined: ' + JSON.stringify(node, null, 2));
    }
    // Process AST-node-property local and
    // set the resulting node.name on : ret || parent (cmd: onparent)
    // used mainly for Identifier(s)
    f_astNode.props.push({
        name: "local", 
        onParent: false, 
        iftext: false, 
        descr: "Process AST-node-property local and set the resulting node.name on : ret || parent (cmd: onparent) used mainly for Identifier(s)"
    })
    if (node.local) {
        if (!node.local.type) {
            throw 'Node local has no type: ' + JSON.stringify(node, null, 2);
        }
        var templocal = {
            children: [
                
            ]
        };
        format(templocal, node.local, options)
        /**
            if (templocal .children.length > 0) {
                throw 'node.local must result zero node, returned: ' + templocal.children.length + ' source: ' + options.input.substring(node.start, node.end);
            }
        */
        var appto = false ? parent : ret;
        if (templocal.children.length > 0) {
            appto.name = templocal.children[0].name;
        }
        else {
            appto.name = templocal.name;
        }
    }
    // An exported variable binding, e.g., `{foo}` in `export {foo}` or `{bar as foo}` in `export {bar as foo}`. The `exported` field refers to the name exported in the module.
    // The `local` field refers to the binding into the local module scope. If it is a basic named export, such as in `export {foo}`, both `exported` and `local` are equivalent `Identifier` nodes
    // in this case an `Identifier` node representing `foo`.
    // If it is an aliased export, such as in `export {bar as foo}`, the `exported` field is an `Identifier` node representing `foo`,
    // and the `local` field is an `Identifier` node representing `bar`.
    if (ret.children[0].name !== ret.name) {
        ret.children[0].tag = 'as';
    }
    else {
        ret.children = [];
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node ExportDefaultSpecifier
var ExportDefaultSpecifier_astNode = {
    name: "ExportDefaultSpecifier", 
    ittfTag: "default", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(ExportDefaultSpecifier_astNode)
format.ExportDefaultSpecifier = function(parent, node, options) {
    var f_astNode = ExportDefaultSpecifier_astNode;
    var __isText = false;
    // log 'node : ExportDefaultSpecifier ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'default', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'ExportDefaultSpecifier', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property exported and set it in a var
    var p_exported = null;
    if (typeof(node.exported) !== 'undefined' && node.exported != null) {
        p_exported = {
            textified: null, 
            isText: false, 
            ASTProp: 'exported', 
            children: [
                
            ]
        };
        if (node.exported == null) {
            p_exported.text = "null";
        }
        else {
            if (!node.exported.type) {
                throw 'Node exported has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp exported before format'
            format(p_exported, node.exported, options)
            // log 'f_p_temp exported after format', p_exported.children.length, p_exported
            var exported_comments = extractCommentsIf(p_exported, 1);
            if (p_exported.children.length == 1) {
                p_exported.tag = p_exported.children[0].tag;
                if (!(p_exported.children[0].isText || p_exported.children[0].textified)) {
                    p_exported.name = p_exported.children[0].name;
                    p_exported.source = p_exported.children[0].source;
                    p_exported.children = p_exported.children[0].children;
                }
                else {
                    if (p_exported.children[0].textified) {
                        p_exported.textified = p_exported.children[0].textified;
                    }
                    if (p_exported.children[0].isText) {
                        p_exported.isText = true;
                    }
                    p_exported.name = p_exported.children[0].name;
                    p_exported.source = p_exported.children[0].source;
                    p_exported.children = [];
                }
            }
            if (exported_comments.length > 0) {
                p_exported.children = p_exported.children.concat(exported_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property exported undefined: ' + JSON.stringify(node, null, 2));
    }
    if (isTextualNode(p_exported)) {
        ret.name = getNodeText(p_exported);
    }
    else {
        ret.children.push(p_exported)
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node ExportDefaultDeclaration
var ExportDefaultDeclaration_astNode = {
    name: "ExportDefaultDeclaration", 
    ittfTag: "export-default", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(ExportDefaultDeclaration_astNode)
format.ExportDefaultDeclaration = function(parent, node, options) {
    var f_astNode = ExportDefaultDeclaration_astNode;
    var __isText = false;
    // log 'node : ExportDefaultDeclaration ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'export-default', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'ExportDefaultDeclaration', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // An export default declaration, e.g., `export default function () {}` or `export default 1`.
    // process AST-node-property declaration and set it in a var
    var p_declaration = null;
    if (typeof(node.declaration) !== 'undefined' && node.declaration != null) {
        p_declaration = {
            textified: null, 
            isText: false, 
            ASTProp: 'declaration', 
            children: [
                
            ]
        };
        if (node.declaration == null) {
            p_declaration.text = "null";
        }
        else {
            if (!node.declaration.type) {
                throw 'Node declaration has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp declaration before format'
            format(p_declaration, node.declaration, options)
            // log 'f_p_temp declaration after format', p_declaration.children.length, p_declaration
            var declaration_comments = extractCommentsIf(p_declaration, 1);
            if (p_declaration.children.length == 1) {
                p_declaration.tag = p_declaration.children[0].tag;
                if (!(p_declaration.children[0].isText || p_declaration.children[0].textified)) {
                    p_declaration.name = p_declaration.children[0].name;
                    p_declaration.source = p_declaration.children[0].source;
                    p_declaration.children = p_declaration.children[0].children;
                }
                else {
                    if (p_declaration.children[0].textified) {
                        p_declaration.textified = p_declaration.children[0].textified;
                    }
                    if (p_declaration.children[0].isText) {
                        p_declaration.isText = true;
                    }
                    p_declaration.name = p_declaration.children[0].name;
                    p_declaration.source = p_declaration.children[0].source;
                    p_declaration.children = [];
                }
            }
            if (declaration_comments.length > 0) {
                p_declaration.children = p_declaration.children.concat(declaration_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property declaration undefined: ' + JSON.stringify(node, null, 2));
    }
    if (isTextualNode(p_declaration)) {
        ret.name = getNodeText(p_declaration);
    }
    else {
        ret.children.push(p_declaration)
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node ExportNamespaceSpecifier
var ExportNamespaceSpecifier_astNode = {
    name: "ExportNamespaceSpecifier", 
    ittfTag: "as", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(ExportNamespaceSpecifier_astNode)
format.ExportNamespaceSpecifier = function(parent, node, options) {
    var f_astNode = ExportNamespaceSpecifier_astNode;
    var __isText = false;
    // log 'node : ExportNamespaceSpecifier ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'as', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'ExportNamespaceSpecifier', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property exported and set it in a var
    var p_exported = null;
    if (typeof(node.exported) !== 'undefined' && node.exported != null) {
        p_exported = {
            textified: null, 
            isText: false, 
            ASTProp: 'exported', 
            children: [
                
            ]
        };
        if (node.exported == null) {
            p_exported.text = "null";
        }
        else {
            if (!node.exported.type) {
                throw 'Node exported has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp exported before format'
            format(p_exported, node.exported, options)
            // log 'f_p_temp exported after format', p_exported.children.length, p_exported
            var exported_comments = extractCommentsIf(p_exported, 1);
            if (p_exported.children.length == 1) {
                p_exported.tag = p_exported.children[0].tag;
                if (!(p_exported.children[0].isText || p_exported.children[0].textified)) {
                    p_exported.name = p_exported.children[0].name;
                    p_exported.source = p_exported.children[0].source;
                    p_exported.children = p_exported.children[0].children;
                }
                else {
                    if (p_exported.children[0].textified) {
                        p_exported.textified = p_exported.children[0].textified;
                    }
                    if (p_exported.children[0].isText) {
                        p_exported.isText = true;
                    }
                    p_exported.name = p_exported.children[0].name;
                    p_exported.source = p_exported.children[0].source;
                    p_exported.children = [];
                }
            }
            if (exported_comments.length > 0) {
                p_exported.children = p_exported.children.concat(exported_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property exported undefined: ' + JSON.stringify(node, null, 2));
    }
    if (isTextualNode(p_exported)) {
        ret.name = getNodeText(p_exported);
    }
    else {
        ret.children.push(p_exported)
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node ExportAllDeclaration
var ExportAllDeclaration_astNode = {
    name: "ExportAllDeclaration", 
    ittfTag: "export", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(ExportAllDeclaration_astNode)
format.ExportAllDeclaration = function(parent, node, options) {
    var f_astNode = ExportAllDeclaration_astNode;
    var __isText = false;
    // log 'node : ExportAllDeclaration ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'export', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'ExportAllDeclaration', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    ret.name = '*';
    f_astNode.props.push({
        name: "source", 
        tag: "from", 
        descr: "fragment f_p_tag"
    })
    var p_source = {
        textified: null, 
        isText: false, 
        ASTProp: 'source', 
        children: [
            
        ]
    };
    if (node.source) {
        if (!node.source.type) {
            throw 'Node source has no type: ' + JSON.stringify(node, null, 2);
        }
        format(p_source, node.source, options)
        p_source.tag = 'from';
        ret.children.push(p_source)
        if (p_source.children.length == 1) {
            // log '*** f_p_tag source children[0].textified', p_source.children[0].textified
            // log '*** f_p_tag source children[0].isText', p_source.children[0].isText
            // log '*** f_p_tag source children[0].name', p_source.children[0].name
            if (p_source.children[0].textified) {
                p_source.textified = p_source.children[0].textified;
            }
            if (p_source.children[0].isText) {
                p_source.isText = true;
                p_source.name = p_source.children[0].name;
                p_source.children = [];
            }
        }
        /**
            TODO VIA
            else {
                throw new Error('AST-property source/from not managed by f_p_tag');
            }
        */
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node CommentBlock
var CommentBlock_astNode = {
    name: "CommentBlock", 
    ittfTag: "#", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(CommentBlock_astNode)
format.CommentBlock = function(parent, node, options) {
    var f_astNode = CommentBlock_astNode;
    var __isText = false;
    // log 'node : CommentBlock ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: '#', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'CommentBlock', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    var values = verify.replaceAll(node.value, '\r\n', '\n').split('\n');
    // log 'options.replaceds', options.replaceds
    var i, i_items=values, i_len=values.length, value;
    for (i=0; i<i_len; i++) {
        value = values[i];
        // var v = codeReplacer.restore(value, options.replaceds)
        ret.children.push({
            tag: '#', 
            name: value, 
            children: [
                
            ]
        })
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node CommentLine
var CommentLine_astNode = {
    name: "CommentLine", 
    ittfTag: "#", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(CommentLine_astNode)
format.CommentLine = function(parent, node, options) {
    var f_astNode = CommentLine_astNode;
    var __isText = false;
    // log 'node : CommentLine ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: '#', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'CommentLine', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // log 'options.replaceds', options.replaceds
    // var v = codeReplacer.restore(node.value, options.replaceds)
    ret.name = node.value;
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node JSXAttribute
var JSXAttribute_astNode = {
    name: "JSXAttribute", 
    ittfTag: "@", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(JSXAttribute_astNode)
format.JSXAttribute = function(parent, node, options) {
    var f_astNode = JSXAttribute_astNode;
    var __isText = false;
    // log 'node : JSXAttribute ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: '@', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'JSXAttribute', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    options.stateAST.push('JSXAttribute')
    // process AST-node-property name and set it in a var
    var p_name = null;
    if (typeof(node.name) !== 'undefined' && node.name != null) {
        p_name = {
            textified: null, 
            isText: false, 
            ASTProp: 'name', 
            children: [
                
            ]
        };
        if (node.name == null) {
            p_name.text = "null";
        }
        else {
            if (!node.name.type) {
                throw 'Node name has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp name before format'
            format(p_name, node.name, options)
            // log 'f_p_temp name after format', p_name.children.length, p_name
            var name_comments = extractCommentsIf(p_name, 1);
            if (p_name.children.length == 1) {
                p_name.tag = p_name.children[0].tag;
                if (!(p_name.children[0].isText || p_name.children[0].textified)) {
                    p_name.name = p_name.children[0].name;
                    p_name.source = p_name.children[0].source;
                    p_name.children = p_name.children[0].children;
                }
                else {
                    if (p_name.children[0].textified) {
                        p_name.textified = p_name.children[0].textified;
                    }
                    if (p_name.children[0].isText) {
                        p_name.isText = true;
                    }
                    p_name.name = p_name.children[0].name;
                    p_name.source = p_name.children[0].source;
                    p_name.children = [];
                }
            }
            if (name_comments.length > 0) {
                p_name.children = p_name.children.concat(name_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property name undefined: ' + JSON.stringify(node, null, 2));
    }
    // process AST-node-property value and set it in a var
    var p_value = null;
    if (typeof(node.value) !== 'undefined' && node.value != null) {
        p_value = {
            textified: null, 
            isText: false, 
            ASTProp: 'value', 
            children: [
                
            ]
        };
        if (node.value == null) {
            p_value.text = "null";
        }
        else {
            if (!node.value.type) {
                throw 'Node value has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp value before format'
            format(p_value, node.value, options)
            // log 'f_p_temp value after format', p_value.children.length, p_value
            var value_comments = extractCommentsIf(p_value, 1);
            if (p_value.children.length == 1) {
                p_value.tag = p_value.children[0].tag;
                if (!(p_value.children[0].isText || p_value.children[0].textified)) {
                    p_value.name = p_value.children[0].name;
                    p_value.source = p_value.children[0].source;
                    p_value.children = p_value.children[0].children;
                }
                else {
                    if (p_value.children[0].textified) {
                        p_value.textified = p_value.children[0].textified;
                    }
                    if (p_value.children[0].isText) {
                        p_value.isText = true;
                    }
                    p_value.name = p_value.children[0].name;
                    p_value.source = p_value.children[0].source;
                    p_value.children = [];
                }
            }
            if (value_comments.length > 0) {
                p_value.children = p_value.children.concat(value_comments);
            }
        }
    }
    if (isTextualNode(p_name)) {
        ret.name = getNodeText(p_name);
    }
    else {
        throw new Error('JSXAttribute.name must be textual:' + JSON.stringify(node, null, 2));
    }
    // log 'JSXAttribute.p_value', p_value, isTextualNode(p_value)
    if (p_value) {
        if (isTextualNode(p_value)) {
            ret.name += ' ' + getNodeText(p_value);
        }
        else if (p_value != null && p_value.text !== 'null') {
            ret.children.push(p_value)
        }
    }
    options.stateAST.pop();
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node JSXClosingElement
var JSXClosingElement_astNode = {
    name: "JSXClosingElement", 
    ittfTag: "jsx-close", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(JSXClosingElement_astNode)
format.JSXClosingElement = function(parent, node, options) {
    var f_astNode = JSXClosingElement_astNode;
    var __isText = false;
    // log 'node : JSXClosingElement ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'jsx-close', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'JSXClosingElement', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // name JSXIdentifier | JSXMemberExpression
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node JSXElement
var JSXElement_astNode = {
    name: "JSXElement", 
    ittfTag: "jsx-element", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(JSXElement_astNode)
format.JSXElement = function(parent, node, options) {
    var f_astNode = JSXElement_astNode;
    var __isText = false;
    // log 'node : JSXElement ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'jsx-element', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'JSXElement', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property openingElement and set it in a var
    var p_openingElement = null;
    if (typeof(node.openingElement) !== 'undefined' && node.openingElement != null) {
        p_openingElement = {
            textified: null, 
            isText: false, 
            ASTProp: 'openingElement', 
            children: [
                
            ]
        };
        if (node.openingElement == null) {
            p_openingElement.text = "null";
        }
        else {
            if (!node.openingElement.type) {
                throw 'Node openingElement has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp openingElement before format'
            format(p_openingElement, node.openingElement, options)
            // log 'f_p_temp openingElement after format', p_openingElement.children.length, p_openingElement
            var openingElement_comments = extractCommentsIf(p_openingElement, 1);
            if (p_openingElement.children.length == 1) {
                p_openingElement.tag = p_openingElement.children[0].tag;
                if (!(p_openingElement.children[0].isText || p_openingElement.children[0].textified)) {
                    p_openingElement.name = p_openingElement.children[0].name;
                    p_openingElement.source = p_openingElement.children[0].source;
                    p_openingElement.children = p_openingElement.children[0].children;
                }
                else {
                    if (p_openingElement.children[0].textified) {
                        p_openingElement.textified = p_openingElement.children[0].textified;
                    }
                    if (p_openingElement.children[0].isText) {
                        p_openingElement.isText = true;
                    }
                    p_openingElement.name = p_openingElement.children[0].name;
                    p_openingElement.source = p_openingElement.children[0].source;
                    p_openingElement.children = [];
                }
            }
            if (openingElement_comments.length > 0) {
                p_openingElement.children = p_openingElement.children.concat(openingElement_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property openingElement undefined: ' + JSON.stringify(node, null, 2));
    }
    // f_p( closingElement, true, JSXClosingElement
    // process AST-node-property-collection children and
    // embed its array of nodes in a temp var
    if (node.children) {
        if (typeof node.children.length === 'undefined') {
            throw new Error('Property node.children must be an array');
        }
        var p_children = {
            tag: 'true', 
            children: [
                
            ]
        };
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            item.__parent = {
                name: 'children', 
                len: node.children.length
            };
            format(p_children, item, options)
        }
    }
    // log 'p_openingElement', p_openingElement
    // log 'p_children', p_children
    if (p_openingElement.name && p_openingElement.name.length > 0) {
        var char = p_openingElement.name[0];
        if (char == char.toUpperCase()) {
            ret.tag = '< ' + p_openingElement.name;
        }
        else {
            ret.tag = p_openingElement.name;
        }
        ret.children = p_openingElement.children;
    }
    else {
        ret.tag = '<';
        ret.children = p_openingElement.children;
    }
    // log 'JSXElement.ret', ret
    var isStyle = ret.tag === 'style';
    var i, i_items=p_children.children, i_len=p_children.children.length, item;
    for (i=0; i<i_len; i++) {
        item = p_children.children[i];
        // log 'JSXElement.children.item', item
        if (!(item.tag === '+' && item.name.trim().length == 0)) {
            if (isStyle) {
                // log 'isStyle', isStyle, item.children
                var j, j_items=item.children, j_len=item.children.length, c;
                for (j=0; j<j_len; j++) {
                    c = item.children[j];
                    if (c.tag === '`lit') {
                        ret.tag = "style-jsx";
                        options.wizziIncludes.push({
                            kind: 'css', 
                            node: ret, 
                            literal: getLiteral(c)
                        })
                        // log 'JSXElement.children.item.lit', c, getLiteral(c)
                    }
                }
                if (ret.tag !== "style-jsx") {
                    ret.children.push(item)
                }
            }
            else {
                ret.children.push(item)
            }
        }
    }
    if (ret.tag === "style-jsx") {
        var children = ret.children;
        ret.children = [];
        var i, i_items=children, i_len=children.length, item;
        for (i=0; i<i_len; i++) {
            item = children[i];
            if (item.tag === '{') {
            }
            else if (item.tag === '@' && item.name === 'jsx') {
            }
            else if (item.tag === '@' && item.name === 'global') {
                ret.children.push({
                    tag: 'global', 
                    children: [
                        
                    ]
                })
            }
            else {
                ret.children.push(item)
            }
        }
    }
    else if (["style","title"].indexOf(ret.tag) > -1) {
        ret.name = ret.tag;
        ret.tag = '<';
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node JSXEmptyExpression
var JSXEmptyExpression_astNode = {
    name: "JSXEmptyExpression", 
    ittfTag: "JSXEmptyExpression", 
    skip: true, 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(JSXEmptyExpression_astNode)
format.JSXEmptyExpression = function(parent, node, options) {
    var f_astNode = JSXEmptyExpression_astNode;
    var __isText = false;
    // log 'node : JSXEmptyExpression ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = parent;
    // process AST-node-property-collection innerComments and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "innerComments", 
        throwIfUndefined: true, 
        descr: "process AST-node-property-collection innerComments and append ittfNode(s) to `ret`"
    })
    if (node.innerComments) {
        if (typeof node.innerComments.length === 'undefined') {
            throw new Error('Property node.innerComments must be an array');
        }
        var i, i_items=node.innerComments, i_len=node.innerComments.length, item;
        for (i=0; i<i_len; i++) {
            item = node.innerComments[i];
            item.__parent = {
                name: 'innerComments', 
                len: node.innerComments.length
            };
            format(ret, item, options)
        }
    }
    else {
        throw new Error('AST-node-property-collection innerComments undefined: ' + JSON.stringify(node, null, 2));
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
    }
};
// process AST node JSXExpressionContainer
var JSXExpressionContainer_astNode = {
    name: "JSXExpressionContainer", 
    ittfTag: "none", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(JSXExpressionContainer_astNode)
format.JSXExpressionContainer = function(parent, node, options) {
    var f_astNode = JSXExpressionContainer_astNode;
    var __isText = false;
    // log 'node : JSXExpressionContainer ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'none', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'JSXExpressionContainer', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    /**
        options.stateAST.push('JSXExpressionContainer')*/
    // process AST-node-property expression and set it in a var
    var p_expression = null;
    if (typeof(node.expression) !== 'undefined' && node.expression != null) {
        p_expression = {
            textified: null, 
            isText: false, 
            ASTProp: 'expression', 
            children: [
                
            ]
        };
        if (node.expression == null) {
            p_expression.text = "null";
        }
        else {
            if (!node.expression.type) {
                throw 'Node expression has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp expression before format'
            format(p_expression, node.expression, options)
            // log 'f_p_temp expression after format', p_expression.children.length, p_expression
            var expression_comments = extractCommentsIf(p_expression, 1);
            if (p_expression.children.length == 1) {
                p_expression.tag = p_expression.children[0].tag;
                if (!(p_expression.children[0].isText || p_expression.children[0].textified)) {
                    p_expression.name = p_expression.children[0].name;
                    p_expression.source = p_expression.children[0].source;
                    p_expression.children = p_expression.children[0].children;
                }
                else {
                    if (p_expression.children[0].textified) {
                        p_expression.textified = p_expression.children[0].textified;
                    }
                    if (p_expression.children[0].isText) {
                        p_expression.isText = true;
                    }
                    p_expression.name = p_expression.children[0].name;
                    p_expression.source = p_expression.children[0].source;
                    p_expression.children = [];
                }
            }
            if (expression_comments.length > 0) {
                p_expression.children = p_expression.children.concat(expression_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property expression undefined: ' + JSON.stringify(node, null, 2));
    }
    // log 'JSXExpressionContainer.p_expression', p_expression, isTextualNode(p_expression)
    if (isTextualNode(p_expression)) {
        ret.tag = '+';
        ret.name = '{' + getNodeText(p_expression) + '}';
        ret.textified = ret.name;
    }
    else {
        // log 'JSXExpressionContainer.options.stateAST', options.stateAST
        // log 'JSXExpressionContainer.options.p_expression', p_expression
        // log 'options.stateAST[options.stateAST.length-1]', options.stateAST[options.stateAST.length-1]
        p_expression.textified = null;
        if (options.stateAST[options.stateAST.length-1] === 'JSXAttribute') {
            var __skip = true;
            parent.children.push(p_expression)
        }
        else {
            ret.tag = '{';
            ret.children.push(p_expression)
        }
    }
    /**
        options.stateAST.pop()*/
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node JSXSpreadChild
var JSXSpreadChild_astNode = {
    name: "JSXSpreadChild", 
    ittfTag: "none", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(JSXSpreadChild_astNode)
format.JSXSpreadChild = function(parent, node, options) {
    var f_astNode = JSXSpreadChild_astNode;
    var __isText = false;
    // log 'node : JSXSpreadChild ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'none', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'JSXSpreadChild', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property expression and set it in a var
    var p_expression = null;
    if (typeof(node.expression) !== 'undefined' && node.expression != null) {
        p_expression = {
            textified: null, 
            isText: false, 
            ASTProp: 'expression', 
            children: [
                
            ]
        };
        if (node.expression == null) {
            p_expression.text = "null";
        }
        else {
            if (!node.expression.type) {
                throw 'Node expression has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp expression before format'
            format(p_expression, node.expression, options)
            // log 'f_p_temp expression after format', p_expression.children.length, p_expression
            var expression_comments = extractCommentsIf(p_expression, 1);
            if (p_expression.children.length == 1) {
                p_expression.tag = p_expression.children[0].tag;
                if (!(p_expression.children[0].isText || p_expression.children[0].textified)) {
                    p_expression.name = p_expression.children[0].name;
                    p_expression.source = p_expression.children[0].source;
                    p_expression.children = p_expression.children[0].children;
                }
                else {
                    if (p_expression.children[0].textified) {
                        p_expression.textified = p_expression.children[0].textified;
                    }
                    if (p_expression.children[0].isText) {
                        p_expression.isText = true;
                    }
                    p_expression.name = p_expression.children[0].name;
                    p_expression.source = p_expression.children[0].source;
                    p_expression.children = [];
                }
            }
            if (expression_comments.length > 0) {
                p_expression.children = p_expression.children.concat(expression_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property expression undefined: ' + JSON.stringify(node, null, 2));
    }
    ret.tag = p_expression.tag;
    ret.name = '...' + p_expression.name;
    ret.children = p_expression.children;
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node JSXIdentifier
var JSXIdentifier_astNode = {
    name: "JSXIdentifier", 
    ittfTag: "jsx-ident", 
    isText: true, 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(JSXIdentifier_astNode)
format.JSXIdentifier = function(parent, node, options) {
    var f_astNode = JSXIdentifier_astNode;
    var __isText = true;
    // log 'node : JSXIdentifier ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'jsx-ident', 
        name: '', 
        isText: true, 
        textified: null, 
        AST: 'JSXIdentifier', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // log 't/name.node.name, value: ', node.name, '
    if (typeof node.name !== 'undefined') {
        ret.name = node.name.toString();
    }
    // log 't/name ittf.ret', ret
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node JSXMemberExpression
var JSXMemberExpression_astNode = {
    name: "JSXMemberExpression", 
    ittfTag: "none", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(JSXMemberExpression_astNode)
format.JSXMemberExpression = function(parent, node, options) {
    var f_astNode = JSXMemberExpression_astNode;
    var __isText = false;
    // log 'node : JSXMemberExpression ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'none', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'JSXMemberExpression', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property object and append ittfNode to `ret`
    f_astNode.props.push({
        name: "object", 
        descr: "process AST-node-property object and append ittfNode to `ret`"
    })
    if (node.object) {
        if (!node.object.type) {
            throw 'Node object has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.object, options)
    }
    else {
        throw new Error('AST-node-property object undefined: ' + JSON.stringify(node, null, 2));
    }
    // process AST-node-property property and append ittfNode to `ret`
    f_astNode.props.push({
        name: "property", 
        descr: "process AST-node-property property and append ittfNode to `ret`"
    })
    if (node.property) {
        if (!node.property.type) {
            throw 'Node property has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.property, options)
    }
    else {
        throw new Error('AST-node-property property undefined: ' + JSON.stringify(node, null, 2));
    }
    var got_text_2 = false;
    if (isChildrenCount(ret, 2)) {
        if ((ret.children[0].textified || ret.children[0].isText) && (ret.children[1].textified || ret.children[1].isText)) {
            var c1 = ret.children[0].textified || ret.children[0].name;
            var c2 = ret.children[1].textified || ret.children[1].name;
            ret.name = c1 + '.' + c2;
            ret.textified = ret.name;
            ret.children = [];
            got_text_2 = true;
            got_text_2 = true;
        }
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node JSXNamespacedName
var JSXNamespacedName_astNode = {
    name: "JSXNamespacedName", 
    ittfTag: "none", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(JSXNamespacedName_astNode)
format.JSXNamespacedName = function(parent, node, options) {
    var f_astNode = JSXNamespacedName_astNode;
    var __isText = false;
    // log 'node : JSXNamespacedName ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'none', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'JSXNamespacedName', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // namespace JSXIdentifier
    // name JSXIdentifier
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node JSXOpeningElement
var JSXOpeningElement_astNode = {
    name: "JSXOpeningElement", 
    ittfTag: "jsx-open", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(JSXOpeningElement_astNode)
format.JSXOpeningElement = function(parent, node, options) {
    var f_astNode = JSXOpeningElement_astNode;
    var __isText = false;
    // log 'node : JSXOpeningElement ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'jsx-open', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'JSXOpeningElement', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property name and set it in a var
    var p_name = null;
    if (typeof(node.name) !== 'undefined' && node.name != null) {
        p_name = {
            textified: null, 
            isText: false, 
            ASTProp: 'name', 
            children: [
                
            ]
        };
        if (node.name == null) {
            p_name.text = "null";
        }
        else {
            if (!node.name.type) {
                throw 'Node name has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp name before format'
            format(p_name, node.name, options)
            // log 'f_p_temp name after format', p_name.children.length, p_name
            var name_comments = extractCommentsIf(p_name, 1);
            if (p_name.children.length == 1) {
                p_name.tag = p_name.children[0].tag;
                if (!(p_name.children[0].isText || p_name.children[0].textified)) {
                    p_name.name = p_name.children[0].name;
                    p_name.source = p_name.children[0].source;
                    p_name.children = p_name.children[0].children;
                }
                else {
                    if (p_name.children[0].textified) {
                        p_name.textified = p_name.children[0].textified;
                    }
                    if (p_name.children[0].isText) {
                        p_name.isText = true;
                    }
                    p_name.name = p_name.children[0].name;
                    p_name.source = p_name.children[0].source;
                    p_name.children = [];
                }
            }
            if (name_comments.length > 0) {
                p_name.children = p_name.children.concat(name_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property name undefined: ' + JSON.stringify(node, null, 2));
    }
    // selfClosing boolean
    // log 'JSXOpeningElement p_name', p_name
    if (isTextualNode(p_name)) {
        ret.name = getNodeText(p_name);
    }
    else if (isTextualCommentedNode(p_name)) {
        ret.name = getNodeText(p_name);
        ret.children = p_name.children;
    }
    else {
        var i, i_items=p_name.children, i_len=p_name.children.length, item;
        for (i=0; i<i_len; i++) {
            item = p_name.children[i];
            if (item.tag === 'jsx-ident') {
                ret.name = item.name;
            }
            else {
                ret.children.push(item)
            }
        }
    }
    // TODO ??? ts here ???
    // process AST-node-property-collection parameters and
    // embed its array of nodes in a temp var
    if (node.parameters) {
        if (typeof node.parameters.length === 'undefined') {
            throw new Error('Property node.parameters must be an array');
        }
        var p_parameters = {
            tag: 'parameters', 
            children: [
                
            ]
        };
        var i, i_items=node.parameters, i_len=node.parameters.length, item;
        for (i=0; i<i_len; i++) {
            item = node.parameters[i];
            item.__parent = {
                name: 'parameters', 
                len: node.parameters.length
            };
            format(p_parameters, item, options)
        }
    }
    if (p_parameters) {
        var i, i_items=p_parameters.children, i_len=p_parameters.children.length, item;
        for (i=0; i<i_len; i++) {
            item = p_parameters.children[i];
            ret.children.push(item)
        }
    }
    // process AST-node-property-collection attributes and
    // embed its array of nodes in a temp var
    if (node.attributes) {
        if (typeof node.attributes.length === 'undefined') {
            throw new Error('Property node.attributes must be an array');
        }
        var p_attributes = {
            tag: 'attributes', 
            children: [
                
            ]
        };
        var i, i_items=node.attributes, i_len=node.attributes.length, item;
        for (i=0; i<i_len; i++) {
            item = node.attributes[i];
            item.__parent = {
                name: 'attributes', 
                len: node.attributes.length
            };
            format(p_attributes, item, options)
        }
    }
    if (p_attributes) {
        var i, i_items=p_attributes.children, i_len=p_attributes.children.length, item;
        for (i=0; i<i_len; i++) {
            item = p_attributes.children[i];
            ret.children.push(item)
        }
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node JSXSpreadAttribute
var JSXSpreadAttribute_astNode = {
    name: "JSXSpreadAttribute", 
    ittfTag: "@", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(JSXSpreadAttribute_astNode)
format.JSXSpreadAttribute = function(parent, node, options) {
    var f_astNode = JSXSpreadAttribute_astNode;
    var __isText = false;
    // log 'node : JSXSpreadAttribute ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: '@', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'JSXSpreadAttribute', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property argument and append ittfNode to `ret`
    f_astNode.props.push({
        name: "argument", 
        descr: "process AST-node-property argument and append ittfNode to `ret`"
    })
    if (node.argument) {
        if (!node.argument.type) {
            throw 'Node argument has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.argument, options)
    }
    else {
        throw new Error('AST-node-property argument undefined: ' + JSON.stringify(node, null, 2));
    }
    // log 'get_text_from_1_children', isChildrenCount(ret, 1)
    var got_text_1 = false;
    if (isChildrenCount(ret, 1)) {
        if (ret.children[0].textified || ret.children[0].isText) {
            var c1 = ret.children[0].textified || ret.children[0].name;
            ret.name = '{...' + c1 + "}";
            ret.textified = ret.name;
            ret.children = [];
            got_text_1 = true;
        }
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node JSXText
var JSXText_astNode = {
    name: "JSXText", 
    ittfTag: "+", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(JSXText_astNode)
format.JSXText = function(parent, node, options) {
    var f_astNode = JSXText_astNode;
    var __isText = false;
    // log 'node : JSXText ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: '+', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'JSXText', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // if node.value.trim().length == 0 || node.value === '\n' // 11/1/19
    var nametrimmed = node.value.trim();
    if (nametrimmed == 0) {
        ret = null;
    }
    else {
        ret.name = verify.replaceAll(nametrimmed, '\n', '&lf;');
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node JSXFragment
var JSXFragment_astNode = {
    name: "JSXFragment", 
    ittfTag: "<", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(JSXFragment_astNode)
format.JSXFragment = function(parent, node, options) {
    var f_astNode = JSXFragment_astNode;
    var __isText = false;
    // log 'node : JSXFragment ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: '<', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'JSXFragment', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // openingFragment JSXOpeningFragment
    // closingFragment JSXClosingFragment
    // children JSXText | JSXExpressionContainer | JSXSpreadChild | JSXElement | JSXFragment
    ret.name = 'React.Fragment';
    // process AST-node-property-collection children and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "children", 
        throwIfUndefined: true, 
        descr: "process AST-node-property-collection children and append ittfNode(s) to `ret`"
    })
    if (node.children) {
        if (typeof node.children.length === 'undefined') {
            throw new Error('Property node.children must be an array');
        }
        var i, i_items=node.children, i_len=node.children.length, item;
        for (i=0; i<i_len; i++) {
            item = node.children[i];
            item.__parent = {
                name: 'children', 
                len: node.children.length
            };
            format(ret, item, options)
        }
    }
    else {
        throw new Error('AST-node-property-collection children undefined: ' + JSON.stringify(node, null, 2));
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node JSXOpeningFragment
var JSXOpeningFragment_astNode = {
    name: "JSXOpeningFragment", 
    ittfTag: "fragment-open", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(JSXOpeningFragment_astNode)
format.JSXOpeningFragment = function(parent, node, options) {
    var f_astNode = JSXOpeningFragment_astNode;
    var __isText = false;
    // log 'node : JSXOpeningFragment ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'fragment-open', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'JSXOpeningFragment', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // aliases: ["JSX", "Immutable"],
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node JSXClosingFragment
var JSXClosingFragment_astNode = {
    name: "JSXClosingFragment", 
    ittfTag: "fragment-close", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(JSXClosingFragment_astNode)
format.JSXClosingFragment = function(parent, node, options) {
    var f_astNode = JSXClosingFragment_astNode;
    var __isText = false;
    // log 'node : JSXClosingFragment ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: 'fragment-close', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'JSXClosingFragment', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // aliases: ["JSX", "Immutable"]
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TypeAlias
var TypeAlias_astNode = {
    name: "TypeAlias", 
    ittfTag: ":type", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TypeAlias_astNode)
format.TypeAlias = function(parent, node, options) {
    var f_astNode = TypeAlias_astNode;
    var __isText = false;
    // log 'node : TypeAlias ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':type', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TypeAlias', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // extends Node, Statement
    // Process AST-node-property id and
    // set the resulting node.name on : ret || parent (cmd: onparent)
    // used mainly for Identifier(s)
    f_astNode.props.push({
        name: "id", 
        onParent: false, 
        iftext: false, 
        descr: "Process AST-node-property id and set the resulting node.name on : ret || parent (cmd: onparent) used mainly for Identifier(s)"
    })
    if (node.id) {
        if (!node.id.type) {
            throw 'Node id has no type: ' + JSON.stringify(node, null, 2);
        }
        var tempid = {
            children: [
                
            ]
        };
        format(tempid, node.id, options)
        /**
            if (tempid .children.length > 0) {
                throw 'node.id must result zero node, returned: ' + tempid.children.length + ' source: ' + options.input.substring(node.start, node.end);
            }
        */
        var appto = false ? parent : ret;
        if (tempid.children.length > 0) {
            appto.name = tempid.children[0].name;
        }
        else {
            appto.name = tempid.name;
        }
    }
    // process AST-node-property typeParameters and append ittfNode to `ret`
    f_astNode.props.push({
        name: "typeParameters", 
        descr: "process AST-node-property typeParameters and append ittfNode to `ret`"
    })
    if (node.typeParameters) {
        if (!node.typeParameters.type) {
            throw 'Node typeParameters has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.typeParameters, options)
    }
    // process AST-node-property right and append ittfNode to `ret`
    f_astNode.props.push({
        name: "right", 
        descr: "process AST-node-property right and append ittfNode to `ret`"
    })
    if (node.right) {
        if (!node.right.type) {
            throw 'Node right has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.right, options)
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node OpaqueType
var OpaqueType_astNode = {
    name: "OpaqueType", 
    ittfTag: ":opaque-type", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(OpaqueType_astNode)
format.OpaqueType = function(parent, node, options) {
    var f_astNode = OpaqueType_astNode;
    var __isText = false;
    // log 'node : OpaqueType ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':opaque-type', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'OpaqueType', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // Process AST-node-property id and
    // set the resulting node.name on : ret || parent (cmd: onparent)
    // used mainly for Identifier(s)
    f_astNode.props.push({
        name: "id", 
        onParent: false, 
        iftext: false, 
        descr: "Process AST-node-property id and set the resulting node.name on : ret || parent (cmd: onparent) used mainly for Identifier(s)"
    })
    if (node.id) {
        if (!node.id.type) {
            throw 'Node id has no type: ' + JSON.stringify(node, null, 2);
        }
        var tempid = {
            children: [
                
            ]
        };
        format(tempid, node.id, options)
        /**
            if (tempid .children.length > 0) {
                throw 'node.id must result zero node, returned: ' + tempid.children.length + ' source: ' + options.input.substring(node.start, node.end);
            }
        */
        var appto = false ? parent : ret;
        if (tempid.children.length > 0) {
            appto.name = tempid.children[0].name;
        }
        else {
            appto.name = tempid.name;
        }
    }
    // process AST-node-property typeParameters and append ittfNode to `ret`
    f_astNode.props.push({
        name: "typeParameters", 
        descr: "process AST-node-property typeParameters and append ittfNode to `ret`"
    })
    if (node.typeParameters) {
        if (!node.typeParameters.type) {
            throw 'Node typeParameters has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.typeParameters, options)
    }
    // process AST-node-property right and append ittfNode to `ret`
    f_astNode.props.push({
        name: "right", 
        descr: "process AST-node-property right and append ittfNode to `ret`"
    })
    if (node.right) {
        if (!node.right.type) {
            throw 'Node right has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.right, options)
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TypeParameterDeclaration
var TypeParameterDeclaration_astNode = {
    name: "TypeParameterDeclaration", 
    ittfTag: "TypeParameterDeclaration", 
    skip: true, 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TypeParameterDeclaration_astNode)
format.TypeParameterDeclaration = function(parent, node, options) {
    var f_astNode = TypeParameterDeclaration_astNode;
    var __isText = false;
    // log 'node : TypeParameterDeclaration ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = parent;
    // extends Node
    // process AST-node-property-collection params and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "params", 
        throwIfUndefined: true, 
        descr: "process AST-node-property-collection params and append ittfNode(s) to `ret`"
    })
    if (node.params) {
        if (typeof node.params.length === 'undefined') {
            throw new Error('Property node.params must be an array');
        }
        var i, i_items=node.params, i_len=node.params.length, item;
        for (i=0; i<i_len; i++) {
            item = node.params[i];
            item.__parent = {
                name: 'params', 
                len: node.params.length
            };
            format(ret, item, options)
        }
    }
    else {
        throw new Error('AST-node-property-collection params undefined: ' + JSON.stringify(node, null, 2));
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
    }
};
// process AST node TypeParameter
var TypeParameter_astNode = {
    name: "TypeParameter", 
    ittfTag: ":<", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TypeParameter_astNode)
format.TypeParameter = function(parent, node, options) {
    var f_astNode = TypeParameter_astNode;
    var __isText = false;
    // log 'node : TypeParameter ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':<', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TypeParameter', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    if (node.name) {
        ret.name = node.name;
    }
    f_astNode.props.push({
        name: "bound", 
        tag: "", 
        descr: "fragment f_p_tag"
    })
    var p_bound = {
        textified: null, 
        isText: false, 
        ASTProp: 'bound', 
        children: [
            
        ]
    };
    if (node.bound) {
        if (!node.bound.type) {
            throw 'Node bound has no type: ' + JSON.stringify(node, null, 2);
        }
        format(p_bound, node.bound, options)
        p_bound.tag = 'bound';
        ret.children.push(p_bound)
        if (p_bound.children.length == 1) {
            // log '*** f_p_tag bound children[0].textified', p_bound.children[0].textified
            // log '*** f_p_tag bound children[0].isText', p_bound.children[0].isText
            // log '*** f_p_tag bound children[0].name', p_bound.children[0].name
            if (p_bound.children[0].textified) {
                p_bound.textified = p_bound.children[0].textified;
            }
            if (p_bound.children[0].isText) {
                p_bound.isText = true;
                p_bound.name = p_bound.children[0].name;
                p_bound.children = [];
            }
        }
        /**
            TODO VIA
            else {
                throw new Error('AST-property bound/ not managed by f_p_tag');
            }
        */
    }
    f_astNode.props.push({
        name: "default", 
        tag: "", 
        descr: "fragment f_p_tag"
    })
    var p_default = {
        textified: null, 
        isText: false, 
        ASTProp: 'default', 
        children: [
            
        ]
    };
    if (node.default) {
        if (!node.default.type) {
            throw 'Node default has no type: ' + JSON.stringify(node, null, 2);
        }
        format(p_default, node.default, options)
        p_default.tag = 'default';
        ret.children.push(p_default)
        if (p_default.children.length == 1) {
            // log '*** f_p_tag default children[0].textified', p_default.children[0].textified
            // log '*** f_p_tag default children[0].isText', p_default.children[0].isText
            // log '*** f_p_tag default children[0].name', p_default.children[0].name
            if (p_default.children[0].textified) {
                p_default.textified = p_default.children[0].textified;
            }
            if (p_default.children[0].isText) {
                p_default.isText = true;
                p_default.name = p_default.children[0].name;
                p_default.children = [];
            }
        }
        /**
            TODO VIA
            else {
                throw new Error('AST-property default/ not managed by f_p_tag');
            }
        */
    }
    // process AST-node-property variance and append ittfNode to `ret`
    f_astNode.props.push({
        name: "variance", 
        descr: "process AST-node-property variance and append ittfNode to `ret`"
    })
    if (node.variance) {
        if (!node.variance.type) {
            throw 'Node variance has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.variance, options)
    }
    // process AST-node-property variance and set it in a var
    var p_variance = null;
    if (typeof(node.variance) !== 'undefined' && node.variance != null) {
        p_variance = {
            textified: null, 
            isText: false, 
            ASTProp: 'variance', 
            children: [
                
            ]
        };
        if (node.variance == null) {
            p_variance.text = "null";
        }
        else {
            if (!node.variance.type) {
                throw 'Node variance has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp variance before format'
            format(p_variance, node.variance, options)
            // log 'f_p_temp variance after format', p_variance.children.length, p_variance
            var variance_comments = extractCommentsIf(p_variance, 1);
            if (p_variance.children.length == 1) {
                p_variance.tag = p_variance.children[0].tag;
                if (!(p_variance.children[0].isText || p_variance.children[0].textified)) {
                    p_variance.name = p_variance.children[0].name;
                    p_variance.source = p_variance.children[0].source;
                    p_variance.children = p_variance.children[0].children;
                }
                else {
                    if (p_variance.children[0].textified) {
                        p_variance.textified = p_variance.children[0].textified;
                    }
                    if (p_variance.children[0].isText) {
                        p_variance.isText = true;
                    }
                    p_variance.name = p_variance.children[0].name;
                    p_variance.source = p_variance.children[0].source;
                    p_variance.children = [];
                }
            }
            if (variance_comments.length > 0) {
                p_variance.children = p_variance.children.concat(variance_comments);
            }
        }
    }
    // log 'p_variance', p_variance
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node Variance
var Variance_astNode = {
    name: "Variance", 
    ittfTag: ":variance", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(Variance_astNode)
format.Variance = function(parent, node, options) {
    var f_astNode = Variance_astNode;
    var __isText = false;
    // log 'node : Variance ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':variance', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'Variance', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    ret.name = node.kind;
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TypeParameterInstantiation
var TypeParameterInstantiation_astNode = {
    name: "TypeParameterInstantiation", 
    ittfTag: "TypeParameterInstantiation", 
    skip: true, 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TypeParameterInstantiation_astNode)
format.TypeParameterInstantiation = function(parent, node, options) {
    var f_astNode = TypeParameterInstantiation_astNode;
    var __isText = false;
    // log 'node : TypeParameterInstantiation ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = parent;
    // process AST-node-property-collection params and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "params", 
        throwIfUndefined: true, 
        descr: "process AST-node-property-collection params and append ittfNode(s) to `ret`"
    })
    if (node.params) {
        if (typeof node.params.length === 'undefined') {
            throw new Error('Property node.params must be an array');
        }
        var i, i_items=node.params, i_len=node.params.length, item;
        for (i=0; i<i_len; i++) {
            item = node.params[i];
            item.__parent = {
                name: 'params', 
                len: node.params.length
            };
            format(ret, item, options)
        }
    }
    else {
        throw new Error('AST-node-property-collection params undefined: ' + JSON.stringify(node, null, 2));
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
    }
};
// process AST node VoidTypeAnnotation
var VoidTypeAnnotation_astNode = {
    name: "VoidTypeAnnotation", 
    ittfTag: ":void", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(VoidTypeAnnotation_astNode)
format.VoidTypeAnnotation = function(parent, node, options) {
    var f_astNode = VoidTypeAnnotation_astNode;
    var __isText = false;
    // log 'node : VoidTypeAnnotation ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':void', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'VoidTypeAnnotation', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // extends Node, Type
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node UndefinedTypeAnnotation
var UndefinedTypeAnnotation_astNode = {
    name: "UndefinedTypeAnnotation", 
    ittfTag: ":undefined", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(UndefinedTypeAnnotation_astNode)
format.UndefinedTypeAnnotation = function(parent, node, options) {
    var f_astNode = UndefinedTypeAnnotation_astNode;
    var __isText = false;
    // log 'node : UndefinedTypeAnnotation ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':undefined', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'UndefinedTypeAnnotation', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // extends Node, Type
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node NullLiteralTypeAnnotation
var NullLiteralTypeAnnotation_astNode = {
    name: "NullLiteralTypeAnnotation", 
    ittfTag: ":null", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(NullLiteralTypeAnnotation_astNode)
format.NullLiteralTypeAnnotation = function(parent, node, options) {
    var f_astNode = NullLiteralTypeAnnotation_astNode;
    var __isText = false;
    // log 'node : NullLiteralTypeAnnotation ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':null', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'NullLiteralTypeAnnotation', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node GenericTypeAnnotation
var GenericTypeAnnotation_astNode = {
    name: "GenericTypeAnnotation", 
    ittfTag: ":<", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(GenericTypeAnnotation_astNode)
format.GenericTypeAnnotation = function(parent, node, options) {
    var f_astNode = GenericTypeAnnotation_astNode;
    var __isText = false;
    // log 'node : GenericTypeAnnotation ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':<', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'GenericTypeAnnotation', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // Process AST-node-property id and
    // set the resulting node.name on : ret || parent (cmd: onparent)
    // used mainly for Identifier(s)
    f_astNode.props.push({
        name: "id", 
        onParent: false, 
        iftext: false, 
        descr: "Process AST-node-property id and set the resulting node.name on : ret || parent (cmd: onparent) used mainly for Identifier(s)"
    })
    if (node.id) {
        if (!node.id.type) {
            throw 'Node id has no type: ' + JSON.stringify(node, null, 2);
        }
        var tempid = {
            children: [
                
            ]
        };
        format(tempid, node.id, options)
        /**
            if (tempid .children.length > 0) {
                throw 'node.id must result zero node, returned: ' + tempid.children.length + ' source: ' + options.input.substring(node.start, node.end);
            }
        */
        var appto = false ? parent : ret;
        if (tempid.children.length > 0) {
            appto.name = tempid.children[0].name;
        }
        else {
            appto.name = tempid.name;
        }
    }
    // process AST-node-property typeParameters and append ittfNode to `ret`
    f_astNode.props.push({
        name: "typeParameters", 
        descr: "process AST-node-property typeParameters and append ittfNode to `ret`"
    })
    if (node.typeParameters) {
        if (!node.typeParameters.type) {
            throw 'Node typeParameters has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.typeParameters, options)
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node StringTypeAnnotation
var StringTypeAnnotation_astNode = {
    name: "StringTypeAnnotation", 
    ittfTag: ":string", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(StringTypeAnnotation_astNode)
format.StringTypeAnnotation = function(parent, node, options) {
    var f_astNode = StringTypeAnnotation_astNode;
    var __isText = false;
    // log 'node : StringTypeAnnotation ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':string', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'StringTypeAnnotation', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node AnyTypeAnnotation
var AnyTypeAnnotation_astNode = {
    name: "AnyTypeAnnotation", 
    ittfTag: ":any", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(AnyTypeAnnotation_astNode)
format.AnyTypeAnnotation = function(parent, node, options) {
    var f_astNode = AnyTypeAnnotation_astNode;
    var __isText = false;
    // log 'node : AnyTypeAnnotation ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':any', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'AnyTypeAnnotation', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // extends Node, Type
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node ArrayTypeAnnotation
var ArrayTypeAnnotation_astNode = {
    name: "ArrayTypeAnnotation", 
    ittfTag: ":[", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(ArrayTypeAnnotation_astNode)
format.ArrayTypeAnnotation = function(parent, node, options) {
    var f_astNode = ArrayTypeAnnotation_astNode;
    var __isText = false;
    // log 'node : ArrayTypeAnnotation ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':[', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'ArrayTypeAnnotation', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // extends Node, Type
    // process AST-node-property elementType and append ittfNode to `ret`
    f_astNode.props.push({
        name: "elementType", 
        descr: "process AST-node-property elementType and append ittfNode to `ret`"
    })
    if (node.elementType) {
        if (!node.elementType.type) {
            throw 'Node elementType has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.elementType, options)
    }
    else {
        throw new Error('AST-node-property elementType undefined: ' + JSON.stringify(node, null, 2));
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node BooleanLiteralTypeAnnotation
var BooleanLiteralTypeAnnotation_astNode = {
    name: "BooleanLiteralTypeAnnotation", 
    ittfTag: ":boolean-lit", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(BooleanLiteralTypeAnnotation_astNode)
format.BooleanLiteralTypeAnnotation = function(parent, node, options) {
    var f_astNode = BooleanLiteralTypeAnnotation_astNode;
    var __isText = false;
    // log 'node : BooleanLiteralTypeAnnotation ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':boolean-lit', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'BooleanLiteralTypeAnnotation', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // extends Node, Type
    ret.name = node.extra.raw;
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node BooleanTypeAnnotation
var BooleanTypeAnnotation_astNode = {
    name: "BooleanTypeAnnotation", 
    ittfTag: ":boolean", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(BooleanTypeAnnotation_astNode)
format.BooleanTypeAnnotation = function(parent, node, options) {
    var f_astNode = BooleanTypeAnnotation_astNode;
    var __isText = false;
    // log 'node : BooleanTypeAnnotation ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':boolean', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'BooleanTypeAnnotation', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // extends Node, Type
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node ClassImplements
var ClassImplements_astNode = {
    name: "ClassImplements", 
    ittfTag: ":implements", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(ClassImplements_astNode)
format.ClassImplements = function(parent, node, options) {
    var f_astNode = ClassImplements_astNode;
    var __isText = false;
    // log 'node : ClassImplements ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':implements', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'ClassImplements', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // extends Node
    // Process AST-node-property id and
    // set the resulting node.name on : ret || parent (cmd: onparent)
    // used mainly for Identifier(s)
    f_astNode.props.push({
        name: "id", 
        onParent: false, 
        iftext: false, 
        descr: "Process AST-node-property id and set the resulting node.name on : ret || parent (cmd: onparent) used mainly for Identifier(s)"
    })
    if (node.id) {
        if (!node.id.type) {
            throw 'Node id has no type: ' + JSON.stringify(node, null, 2);
        }
        var tempid = {
            children: [
                
            ]
        };
        format(tempid, node.id, options)
        /**
            if (tempid .children.length > 0) {
                throw 'node.id must result zero node, returned: ' + tempid.children.length + ' source: ' + options.input.substring(node.start, node.end);
            }
        */
        var appto = false ? parent : ret;
        if (tempid.children.length > 0) {
            appto.name = tempid.children[0].name;
        }
        else {
            appto.name = tempid.name;
        }
    }
    // process AST-node-property typeParameters and append ittfNode to `ret`
    f_astNode.props.push({
        name: "typeParameters", 
        descr: "process AST-node-property typeParameters and append ittfNode to `ret`"
    })
    if (node.typeParameters) {
        if (!node.typeParameters.type) {
            throw 'Node typeParameters has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.typeParameters, options)
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node FunctionTypeAnnotation
var FunctionTypeAnnotation_astNode = {
    name: "FunctionTypeAnnotation", 
    ittfTag: ":func", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(FunctionTypeAnnotation_astNode)
format.FunctionTypeAnnotation = function(parent, node, options) {
    var f_astNode = FunctionTypeAnnotation_astNode;
    var __isText = false;
    // log 'node : FunctionTypeAnnotation ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':func', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'FunctionTypeAnnotation', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // extends Node, Type
    // process AST-node-property typeParameters and append ittfNode to `ret`
    f_astNode.props.push({
        name: "typeParameters", 
        descr: "process AST-node-property typeParameters and append ittfNode to `ret`"
    })
    if (node.typeParameters) {
        if (!node.typeParameters.type) {
            throw 'Node typeParameters has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.typeParameters, options)
    }
    // process AST-node-property-collection params and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "params", 
        throwIfUndefined: false, 
        descr: "process AST-node-property-collection params and append ittfNode(s) to `ret`"
    })
    if (node.params) {
        if (typeof node.params.length === 'undefined') {
            throw new Error('Property node.params must be an array');
        }
        var i, i_items=node.params, i_len=node.params.length, item;
        for (i=0; i<i_len; i++) {
            item = node.params[i];
            item.__parent = {
                name: 'params', 
                len: node.params.length
            };
            format(ret, item, options)
        }
    }
    // process AST-node-property rest and append ittfNode to `ret`
    f_astNode.props.push({
        name: "rest", 
        descr: "process AST-node-property rest and append ittfNode to `ret`"
    })
    if (node.rest) {
        if (!node.rest.type) {
            throw 'Node rest has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.rest, options)
    }
    // process AST-node-property returnType and set it in a var
    var p_returnType = null;
    if (typeof(node.returnType) !== 'undefined' && node.returnType != null) {
        p_returnType = {
            textified: null, 
            isText: false, 
            ASTProp: 'returnType', 
            children: [
                
            ]
        };
        if (node.returnType == null) {
            p_returnType.text = "null";
        }
        else {
            if (!node.returnType.type) {
                throw 'Node returnType has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp returnType before format'
            format(p_returnType, node.returnType, options)
            // log 'f_p_temp returnType after format', p_returnType.children.length, p_returnType
            var returnType_comments = extractCommentsIf(p_returnType, 1);
            if (p_returnType.children.length == 1) {
                p_returnType.tag = p_returnType.children[0].tag;
                if (!(p_returnType.children[0].isText || p_returnType.children[0].textified)) {
                    p_returnType.name = p_returnType.children[0].name;
                    p_returnType.source = p_returnType.children[0].source;
                    p_returnType.children = p_returnType.children[0].children;
                }
                else {
                    if (p_returnType.children[0].textified) {
                        p_returnType.textified = p_returnType.children[0].textified;
                    }
                    if (p_returnType.children[0].isText) {
                        p_returnType.isText = true;
                    }
                    p_returnType.name = p_returnType.children[0].name;
                    p_returnType.source = p_returnType.children[0].source;
                    p_returnType.children = [];
                }
            }
            if (returnType_comments.length > 0) {
                p_returnType.children = p_returnType.children.concat(returnType_comments);
            }
        }
    }
    if (p_returnType) {
        if (p_returnType.children.length == 1 && p_returnType.children[0].children.length == 0) {
            ret.children.push({
                tag: ':return', 
                name: p_returnType.children[0].tag
            })
        }
        else {
            ret.children.push({
                tag: ':return', 
                name: null, 
                children: [
                    p_returnType
                ]
            })
        }
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node FunctionTypeParam
var FunctionTypeParam_astNode = {
    name: "FunctionTypeParam", 
    ittfTag: ":param", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(FunctionTypeParam_astNode)
format.FunctionTypeParam = function(parent, node, options) {
    var f_astNode = FunctionTypeParam_astNode;
    var __isText = false;
    // log 'node : FunctionTypeParam ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':param', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'FunctionTypeParam', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // extends Node
    // Process AST-node-property name and
    // set the resulting node.name on : ret || parent (cmd: onparent)
    // used mainly for Identifier(s)
    f_astNode.props.push({
        name: "name", 
        onParent: false, 
        iftext: false, 
        descr: "Process AST-node-property name and set the resulting node.name on : ret || parent (cmd: onparent) used mainly for Identifier(s)"
    })
    if (node.name) {
        if (!node.name.type) {
            throw 'Node name has no type: ' + JSON.stringify(node, null, 2);
        }
        var tempname = {
            children: [
                
            ]
        };
        format(tempname, node.name, options)
        /**
            if (tempname .children.length > 0) {
                throw 'node.name must result zero node, returned: ' + tempname.children.length + ' source: ' + options.input.substring(node.start, node.end);
            }
        */
        var appto = false ? parent : ret;
        if (tempname.children.length > 0) {
            appto.name = tempname.children[0].name;
        }
        else {
            appto.name = tempname.name;
        }
    }
    if (node.optional) {
        ret.name = ret.name + '?';
    }
    // process AST-node-property typeAnnotation and set it in a var
    var p_typeAnnotation = null;
    if (typeof(node.typeAnnotation) !== 'undefined' && node.typeAnnotation != null) {
        p_typeAnnotation = {
            textified: null, 
            isText: false, 
            ASTProp: 'typeAnnotation', 
            children: [
                
            ]
        };
        if (node.typeAnnotation == null) {
            p_typeAnnotation.text = "null";
        }
        else {
            if (!node.typeAnnotation.type) {
                throw 'Node typeAnnotation has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp typeAnnotation before format'
            format(p_typeAnnotation, node.typeAnnotation, options)
            // log 'f_p_temp typeAnnotation after format', p_typeAnnotation.children.length, p_typeAnnotation
            var typeAnnotation_comments = extractCommentsIf(p_typeAnnotation, 1);
            if (p_typeAnnotation.children.length == 1) {
                p_typeAnnotation.tag = p_typeAnnotation.children[0].tag;
                if (!(p_typeAnnotation.children[0].isText || p_typeAnnotation.children[0].textified)) {
                    p_typeAnnotation.name = p_typeAnnotation.children[0].name;
                    p_typeAnnotation.source = p_typeAnnotation.children[0].source;
                    p_typeAnnotation.children = p_typeAnnotation.children[0].children;
                }
                else {
                    if (p_typeAnnotation.children[0].textified) {
                        p_typeAnnotation.textified = p_typeAnnotation.children[0].textified;
                    }
                    if (p_typeAnnotation.children[0].isText) {
                        p_typeAnnotation.isText = true;
                    }
                    p_typeAnnotation.name = p_typeAnnotation.children[0].name;
                    p_typeAnnotation.source = p_typeAnnotation.children[0].source;
                    p_typeAnnotation.children = [];
                }
            }
            if (typeAnnotation_comments.length > 0) {
                p_typeAnnotation.children = p_typeAnnotation.children.concat(typeAnnotation_comments);
            }
        }
    }
    if (p_typeAnnotation) {
        if (p_typeAnnotation.tag === '@-t') {
            var i, i_items=p_typeAnnotation.children, i_len=p_typeAnnotation.children.length, item;
            for (i=0; i<i_len; i++) {
                item = p_typeAnnotation.children[i];
                ret.children.push(item)
            }
        }
        else {
            ret.children.push(p_typeAnnotation)
        }
    }
    if (ret.children.length == 1 && isFlowPrimitiveTag(ret.children[0].tag)) {
        ret.tag = ret.children[0].tag;
        ret.children = ret.children[0].children;
    }
    if (ret.children.length == 1 && ( ret.children[0].tag === ':|' || ret.children[0].tag === ':&' )) {
        // union and intersect
        var temp_children = ret.children[0];
        ret.children = [];
        var i, i_items=temp_children.children, i_len=temp_children.children.length, ui;
        for (i=0; i<i_len; i++) {
            ui = temp_children.children[i];
            if (verify.isEmpty(ui.name)) {
                ui.name = ui.tag.substr(1);
            }
            ui.tag = temp_children.tag === ':|' ? '|' : '&';
            ret.children.push(ui)
        }
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node InterfaceExtends
var InterfaceExtends_astNode = {
    name: "InterfaceExtends", 
    ittfTag: ":extends-interface", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(InterfaceExtends_astNode)
format.InterfaceExtends = function(parent, node, options) {
    var f_astNode = InterfaceExtends_astNode;
    var __isText = false;
    // log 'node : InterfaceExtends ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':extends-interface', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'InterfaceExtends', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // extends Node
    // Process AST-node-property id and
    // set the resulting node.name on : ret || parent (cmd: onparent)
    // used mainly for Identifier(s)
    f_astNode.props.push({
        name: "id", 
        onParent: false, 
        iftext: false, 
        descr: "Process AST-node-property id and set the resulting node.name on : ret || parent (cmd: onparent) used mainly for Identifier(s)"
    })
    if (node.id) {
        if (!node.id.type) {
            throw 'Node id has no type: ' + JSON.stringify(node, null, 2);
        }
        var tempid = {
            children: [
                
            ]
        };
        format(tempid, node.id, options)
        /**
            if (tempid .children.length > 0) {
                throw 'node.id must result zero node, returned: ' + tempid.children.length + ' source: ' + options.input.substring(node.start, node.end);
            }
        */
        var appto = false ? parent : ret;
        if (tempid.children.length > 0) {
            appto.name = tempid.children[0].name;
        }
        else {
            appto.name = tempid.name;
        }
    }
    // process AST-node-property typeParameters and append ittfNode to `ret`
    f_astNode.props.push({
        name: "typeParameters", 
        descr: "process AST-node-property typeParameters and append ittfNode to `ret`"
    })
    if (node.typeParameters) {
        if (!node.typeParameters.type) {
            throw 'Node typeParameters has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.typeParameters, options)
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node InterfaceDeclaration
var InterfaceDeclaration_astNode = {
    name: "InterfaceDeclaration", 
    ittfTag: ":interface", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(InterfaceDeclaration_astNode)
format.InterfaceDeclaration = function(parent, node, options) {
    var f_astNode = InterfaceDeclaration_astNode;
    var __isText = false;
    // log 'node : InterfaceDeclaration ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':interface', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'InterfaceDeclaration', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // extends Node, Statement
    // Process AST-node-property id and
    // set the resulting node.name on : ret || parent (cmd: onparent)
    // used mainly for Identifier(s)
    f_astNode.props.push({
        name: "id", 
        onParent: false, 
        iftext: false, 
        descr: "Process AST-node-property id and set the resulting node.name on : ret || parent (cmd: onparent) used mainly for Identifier(s)"
    })
    if (node.id) {
        if (!node.id.type) {
            throw 'Node id has no type: ' + JSON.stringify(node, null, 2);
        }
        var tempid = {
            children: [
                
            ]
        };
        format(tempid, node.id, options)
        /**
            if (tempid .children.length > 0) {
                throw 'node.id must result zero node, returned: ' + tempid.children.length + ' source: ' + options.input.substring(node.start, node.end);
            }
        */
        var appto = false ? parent : ret;
        if (tempid.children.length > 0) {
            appto.name = tempid.children[0].name;
        }
        else {
            appto.name = tempid.name;
        }
    }
    // process AST-node-property-collection extends and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "extends", 
        throwIfUndefined: false, 
        descr: "process AST-node-property-collection extends and append ittfNode(s) to `ret`"
    })
    if (node.extends) {
        if (typeof node.extends.length === 'undefined') {
            throw new Error('Property node.extends must be an array');
        }
        var i, i_items=node.extends, i_len=node.extends.length, item;
        for (i=0; i<i_len; i++) {
            item = node.extends[i];
            item.__parent = {
                name: 'extends', 
                len: node.extends.length
            };
            format(ret, item, options)
        }
    }
    // process AST-node-property typeParameters and append ittfNode to `ret`
    f_astNode.props.push({
        name: "typeParameters", 
        descr: "process AST-node-property typeParameters and append ittfNode to `ret`"
    })
    if (node.typeParameters) {
        if (!node.typeParameters.type) {
            throw 'Node typeParameters has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.typeParameters, options)
    }
    // process AST-node-property body and append ittfNode to `ret`
    f_astNode.props.push({
        name: "body", 
        descr: "process AST-node-property body and append ittfNode to `ret`"
    })
    if (node.body) {
        if (!node.body.type) {
            throw 'Node body has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.body, options)
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node IntersectionTypeAnnotation
var IntersectionTypeAnnotation_astNode = {
    name: "IntersectionTypeAnnotation", 
    ittfTag: ":&", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(IntersectionTypeAnnotation_astNode)
format.IntersectionTypeAnnotation = function(parent, node, options) {
    var f_astNode = IntersectionTypeAnnotation_astNode;
    var __isText = false;
    // log 'node : IntersectionTypeAnnotation ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':&', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'IntersectionTypeAnnotation', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // extends Node, Type
    // process AST-node-property-collection types and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "types", 
        throwIfUndefined: true, 
        descr: "process AST-node-property-collection types and append ittfNode(s) to `ret`"
    })
    if (node.types) {
        if (typeof node.types.length === 'undefined') {
            throw new Error('Property node.types must be an array');
        }
        var i, i_items=node.types, i_len=node.types.length, item;
        for (i=0; i<i_len; i++) {
            item = node.types[i];
            item.__parent = {
                name: 'types', 
                len: node.types.length
            };
            format(ret, item, options)
        }
    }
    else {
        throw new Error('AST-node-property-collection types undefined: ' + JSON.stringify(node, null, 2));
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node MixedTypeAnnotation
var MixedTypeAnnotation_astNode = {
    name: "MixedTypeAnnotation", 
    ittfTag: ":mixed", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(MixedTypeAnnotation_astNode)
format.MixedTypeAnnotation = function(parent, node, options) {
    var f_astNode = MixedTypeAnnotation_astNode;
    var __isText = false;
    // log 'node : MixedTypeAnnotation ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':mixed', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'MixedTypeAnnotation', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // extends Node, Type
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node NullableTypeAnnotation
var NullableTypeAnnotation_astNode = {
    name: "NullableTypeAnnotation", 
    ittfTag: "NullableTypeAnnotation", 
    skip: true, 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(NullableTypeAnnotation_astNode)
format.NullableTypeAnnotation = function(parent, node, options) {
    var f_astNode = NullableTypeAnnotation_astNode;
    var __isText = false;
    // log 'node : NullableTypeAnnotation ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = parent;
    // extends Node, Type
    // process AST-node-property typeAnnotation and set it in a var
    var p_typeAnnotation = null;
    if (typeof(node.typeAnnotation) !== 'undefined' && node.typeAnnotation != null) {
        p_typeAnnotation = {
            textified: null, 
            isText: false, 
            ASTProp: 'typeAnnotation', 
            children: [
                
            ]
        };
        if (node.typeAnnotation == null) {
            p_typeAnnotation.text = "null";
        }
        else {
            if (!node.typeAnnotation.type) {
                throw 'Node typeAnnotation has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp typeAnnotation before format'
            format(p_typeAnnotation, node.typeAnnotation, options)
            // log 'f_p_temp typeAnnotation after format', p_typeAnnotation.children.length, p_typeAnnotation
            var typeAnnotation_comments = extractCommentsIf(p_typeAnnotation, 1);
            if (p_typeAnnotation.children.length == 1) {
                p_typeAnnotation.tag = p_typeAnnotation.children[0].tag;
                if (!(p_typeAnnotation.children[0].isText || p_typeAnnotation.children[0].textified)) {
                    p_typeAnnotation.name = p_typeAnnotation.children[0].name;
                    p_typeAnnotation.source = p_typeAnnotation.children[0].source;
                    p_typeAnnotation.children = p_typeAnnotation.children[0].children;
                }
                else {
                    if (p_typeAnnotation.children[0].textified) {
                        p_typeAnnotation.textified = p_typeAnnotation.children[0].textified;
                    }
                    if (p_typeAnnotation.children[0].isText) {
                        p_typeAnnotation.isText = true;
                    }
                    p_typeAnnotation.name = p_typeAnnotation.children[0].name;
                    p_typeAnnotation.source = p_typeAnnotation.children[0].source;
                    p_typeAnnotation.children = [];
                }
            }
            if (typeAnnotation_comments.length > 0) {
                p_typeAnnotation.children = p_typeAnnotation.children.concat(typeAnnotation_comments);
            }
        }
    }
    if (p_typeAnnotation) {
        if (p_typeAnnotation.tag === '@-t') {
            var i, i_items=p_typeAnnotation.children, i_len=p_typeAnnotation.children.length, item;
            for (i=0; i<i_len; i++) {
                item = p_typeAnnotation.children[i];
                ret.children.push(item)
            }
        }
        else {
            ret.children.push(p_typeAnnotation)
        }
    }
    ret.children[0].tag = ':?' + ret.children[0].tag.substr(1);
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
    }
};
// process AST node NumberLiteralTypeAnnotation
var NumberLiteralTypeAnnotation_astNode = {
    name: "NumberLiteralTypeAnnotation", 
    ittfTag: ":number-lit", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(NumberLiteralTypeAnnotation_astNode)
format.NumberLiteralTypeAnnotation = function(parent, node, options) {
    var f_astNode = NumberLiteralTypeAnnotation_astNode;
    var __isText = false;
    // log 'node : NumberLiteralTypeAnnotation ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':number-lit', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'NumberLiteralTypeAnnotation', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // extends Node, Type
    ret.name = node.extra.raw;
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node NumberTypeAnnotation
var NumberTypeAnnotation_astNode = {
    name: "NumberTypeAnnotation", 
    ittfTag: ":number", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(NumberTypeAnnotation_astNode)
format.NumberTypeAnnotation = function(parent, node, options) {
    var f_astNode = NumberTypeAnnotation_astNode;
    var __isText = false;
    // log 'node : NumberTypeAnnotation ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':number', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'NumberTypeAnnotation', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // extends Node, Type
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node StringLiteralTypeAnnotation
var StringLiteralTypeAnnotation_astNode = {
    name: "StringLiteralTypeAnnotation", 
    ittfTag: ":string-lit", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(StringLiteralTypeAnnotation_astNode)
format.StringLiteralTypeAnnotation = function(parent, node, options) {
    var f_astNode = StringLiteralTypeAnnotation_astNode;
    var __isText = false;
    // log 'node : StringLiteralTypeAnnotation ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':string-lit', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'StringLiteralTypeAnnotation', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // extends Node, Type
    ret.name = node.extra.raw;
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node StringTypeAnnotation
var StringTypeAnnotation_astNode = {
    name: "StringTypeAnnotation", 
    ittfTag: ":string", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(StringTypeAnnotation_astNode)
format.StringTypeAnnotation = function(parent, node, options) {
    var f_astNode = StringTypeAnnotation_astNode;
    var __isText = false;
    // log 'node : StringTypeAnnotation ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':string', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'StringTypeAnnotation', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // extends Node, Type
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TupleTypeAnnotation
var TupleTypeAnnotation_astNode = {
    name: "TupleTypeAnnotation", 
    ittfTag: ":tuple", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TupleTypeAnnotation_astNode)
format.TupleTypeAnnotation = function(parent, node, options) {
    var f_astNode = TupleTypeAnnotation_astNode;
    var __isText = false;
    // log 'node : TupleTypeAnnotation ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':tuple', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TupleTypeAnnotation', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // extends Node, Type
    // process AST-node-property-collection types and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "types", 
        throwIfUndefined: true, 
        descr: "process AST-node-property-collection types and append ittfNode(s) to `ret`"
    })
    if (node.types) {
        if (typeof node.types.length === 'undefined') {
            throw new Error('Property node.types must be an array');
        }
        var i, i_items=node.types, i_len=node.types.length, item;
        for (i=0; i<i_len; i++) {
            item = node.types[i];
            item.__parent = {
                name: 'types', 
                len: node.types.length
            };
            format(ret, item, options)
        }
    }
    else {
        throw new Error('AST-node-property-collection types undefined: ' + JSON.stringify(node, null, 2));
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TypeofTypeAnnotation
var TypeofTypeAnnotation_astNode = {
    name: "TypeofTypeAnnotation", 
    ittfTag: ":typeof", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TypeofTypeAnnotation_astNode)
format.TypeofTypeAnnotation = function(parent, node, options) {
    var f_astNode = TypeofTypeAnnotation_astNode;
    var __isText = false;
    // log 'node : TypeofTypeAnnotation ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':typeof', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TypeofTypeAnnotation', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // extends Node
    // process AST-node-property argument and append ittfNode to `ret`
    f_astNode.props.push({
        name: "argument", 
        descr: "process AST-node-property argument and append ittfNode to `ret`"
    })
    if (node.argument) {
        if (!node.argument.type) {
            throw 'Node argument has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.argument, options)
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TypeAnnotation
var TypeAnnotation_astNode = {
    name: "TypeAnnotation", 
    ittfTag: ":t", 
    skip: true, 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TypeAnnotation_astNode)
format.TypeAnnotation = function(parent, node, options) {
    var f_astNode = TypeAnnotation_astNode;
    var __isText = false;
    // log 'node : TypeAnnotation ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = parent;
    // extends Node
    // process AST-node-property typeAnnotation and set it in a var
    var p_typeAnnotation = null;
    if (typeof(node.typeAnnotation) !== 'undefined' && node.typeAnnotation != null) {
        p_typeAnnotation = {
            textified: null, 
            isText: false, 
            ASTProp: 'typeAnnotation', 
            children: [
                
            ]
        };
        if (node.typeAnnotation == null) {
            p_typeAnnotation.text = "null";
        }
        else {
            if (!node.typeAnnotation.type) {
                throw 'Node typeAnnotation has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp typeAnnotation before format'
            format(p_typeAnnotation, node.typeAnnotation, options)
            // log 'f_p_temp typeAnnotation after format', p_typeAnnotation.children.length, p_typeAnnotation
            var typeAnnotation_comments = extractCommentsIf(p_typeAnnotation, 1);
            if (p_typeAnnotation.children.length == 1) {
                p_typeAnnotation.tag = p_typeAnnotation.children[0].tag;
                if (!(p_typeAnnotation.children[0].isText || p_typeAnnotation.children[0].textified)) {
                    p_typeAnnotation.name = p_typeAnnotation.children[0].name;
                    p_typeAnnotation.source = p_typeAnnotation.children[0].source;
                    p_typeAnnotation.children = p_typeAnnotation.children[0].children;
                }
                else {
                    if (p_typeAnnotation.children[0].textified) {
                        p_typeAnnotation.textified = p_typeAnnotation.children[0].textified;
                    }
                    if (p_typeAnnotation.children[0].isText) {
                        p_typeAnnotation.isText = true;
                    }
                    p_typeAnnotation.name = p_typeAnnotation.children[0].name;
                    p_typeAnnotation.source = p_typeAnnotation.children[0].source;
                    p_typeAnnotation.children = [];
                }
            }
            if (typeAnnotation_comments.length > 0) {
                p_typeAnnotation.children = p_typeAnnotation.children.concat(typeAnnotation_comments);
            }
        }
    }
    if (p_typeAnnotation) {
        if (p_typeAnnotation.tag === '@-t') {
            var i, i_items=p_typeAnnotation.children, i_len=p_typeAnnotation.children.length, item;
            for (i=0; i<i_len; i++) {
                item = p_typeAnnotation.children[i];
                ret.children.push(item)
            }
        }
        else {
            ret.children.push(p_typeAnnotation)
        }
    }
    // process AST-node-property-collection types and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "types", 
        throwIfUndefined: false, 
        descr: "process AST-node-property-collection types and append ittfNode(s) to `ret`"
    })
    if (node.types) {
        if (typeof node.types.length === 'undefined') {
            throw new Error('Property node.types must be an array');
        }
        var i, i_items=node.types, i_len=node.types.length, item;
        for (i=0; i<i_len; i++) {
            item = node.types[i];
            item.__parent = {
                name: 'types', 
                len: node.types.length
            };
            format(ret, item, options)
        }
    }
    // process AST-node-property typeParameters and append ittfNode to `ret`
    f_astNode.props.push({
        name: "typeParameters", 
        descr: "process AST-node-property typeParameters and append ittfNode to `ret`"
    })
    if (node.typeParameters) {
        if (!node.typeParameters.type) {
            throw 'Node typeParameters has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.typeParameters, options)
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
    }
};
// process AST node TypeCastExpression
var TypeCastExpression_astNode = {
    name: "TypeCastExpression", 
    ittfTag: ":cast", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TypeCastExpression_astNode)
format.TypeCastExpression = function(parent, node, options) {
    var f_astNode = TypeCastExpression_astNode;
    var __isText = false;
    // log 'node : TypeCastExpression ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':cast', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TypeCastExpression', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // extends Node, Expression
    // process AST-node-property typeAnnotation and set it in a var
    var p_typeAnnotation = null;
    if (typeof(node.typeAnnotation) !== 'undefined' && node.typeAnnotation != null) {
        p_typeAnnotation = {
            textified: null, 
            isText: false, 
            ASTProp: 'typeAnnotation', 
            children: [
                
            ]
        };
        if (node.typeAnnotation == null) {
            p_typeAnnotation.text = "null";
        }
        else {
            if (!node.typeAnnotation.type) {
                throw 'Node typeAnnotation has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp typeAnnotation before format'
            format(p_typeAnnotation, node.typeAnnotation, options)
            // log 'f_p_temp typeAnnotation after format', p_typeAnnotation.children.length, p_typeAnnotation
            var typeAnnotation_comments = extractCommentsIf(p_typeAnnotation, 1);
            if (p_typeAnnotation.children.length == 1) {
                p_typeAnnotation.tag = p_typeAnnotation.children[0].tag;
                if (!(p_typeAnnotation.children[0].isText || p_typeAnnotation.children[0].textified)) {
                    p_typeAnnotation.name = p_typeAnnotation.children[0].name;
                    p_typeAnnotation.source = p_typeAnnotation.children[0].source;
                    p_typeAnnotation.children = p_typeAnnotation.children[0].children;
                }
                else {
                    if (p_typeAnnotation.children[0].textified) {
                        p_typeAnnotation.textified = p_typeAnnotation.children[0].textified;
                    }
                    if (p_typeAnnotation.children[0].isText) {
                        p_typeAnnotation.isText = true;
                    }
                    p_typeAnnotation.name = p_typeAnnotation.children[0].name;
                    p_typeAnnotation.source = p_typeAnnotation.children[0].source;
                    p_typeAnnotation.children = [];
                }
            }
            if (typeAnnotation_comments.length > 0) {
                p_typeAnnotation.children = p_typeAnnotation.children.concat(typeAnnotation_comments);
            }
        }
    }
    if (p_typeAnnotation) {
        if (p_typeAnnotation.tag === '@-t') {
            var i, i_items=p_typeAnnotation.children, i_len=p_typeAnnotation.children.length, item;
            for (i=0; i<i_len; i++) {
                item = p_typeAnnotation.children[i];
                ret.children.push(item)
            }
        }
        else {
            ret.children.push(p_typeAnnotation)
        }
    }
    // Process AST-node-property expression and
    // set the resulting node.name on : ret || parent (cmd: onparent)
    // used mainly for Identifier(s)
    f_astNode.props.push({
        name: "expression", 
        onParent: false, 
        iftext: true, 
        descr: "Process AST-node-property expression and set the resulting node.name on : ret || parent (cmd: onparent) used mainly for Identifier(s)"
    })
    if (node.expression) {
        if (!node.expression.type) {
            throw 'Node expression has no type: ' + JSON.stringify(node, null, 2);
        }
        var tempexpression = {
            children: [
                
            ]
        };
        format(tempexpression, node.expression, options)
        /**
            if (tempexpression .children.length > 0) {
                throw 'node.expression must result zero node, returned: ' + tempexpression.children.length + ' source: ' + options.input.substring(node.start, node.end);
            }
        */
        var appto = false ? parent : ret;
        if (tempexpression.children.length > 0) {
            if (isTextualNode(tempexpression.children[0])) {
                appto.name = getNodeText(tempexpression.children[0]);
            }
            else {
                appto.children.push(tempexpression.children[0])
            }
        }
        else {
            if (isTextualNode(tempexpression)) {
                appto.name = getNodeText(tempexpression);
            }
            else {
                appto.children.push(tempexpression)
            }
        }
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node ObjectTypeAnnotation
var ObjectTypeAnnotation_astNode = {
    name: "ObjectTypeAnnotation", 
    ittfTag: ":{", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(ObjectTypeAnnotation_astNode)
format.ObjectTypeAnnotation = function(parent, node, options) {
    var f_astNode = ObjectTypeAnnotation_astNode;
    var __isText = false;
    // log 'node : ObjectTypeAnnotation ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':{', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'ObjectTypeAnnotation', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // extends Node, Type
    // process AST-node-property-collection callProperties and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "callProperties", 
        throwIfUndefined: false, 
        descr: "process AST-node-property-collection callProperties and append ittfNode(s) to `ret`"
    })
    if (node.callProperties) {
        if (typeof node.callProperties.length === 'undefined') {
            throw new Error('Property node.callProperties must be an array');
        }
        var i, i_items=node.callProperties, i_len=node.callProperties.length, item;
        for (i=0; i<i_len; i++) {
            item = node.callProperties[i];
            item.__parent = {
                name: 'callProperties', 
                len: node.callProperties.length
            };
            format(ret, item, options)
        }
    }
    // process AST-node-property-collection indexers and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "indexers", 
        throwIfUndefined: false, 
        descr: "process AST-node-property-collection indexers and append ittfNode(s) to `ret`"
    })
    if (node.indexers) {
        if (typeof node.indexers.length === 'undefined') {
            throw new Error('Property node.indexers must be an array');
        }
        var i, i_items=node.indexers, i_len=node.indexers.length, item;
        for (i=0; i<i_len; i++) {
            item = node.indexers[i];
            item.__parent = {
                name: 'indexers', 
                len: node.indexers.length
            };
            format(ret, item, options)
        }
    }
    // process AST-node-property-collection properties and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "properties", 
        throwIfUndefined: true, 
        descr: "process AST-node-property-collection properties and append ittfNode(s) to `ret`"
    })
    if (node.properties) {
        if (typeof node.properties.length === 'undefined') {
            throw new Error('Property node.properties must be an array');
        }
        var i, i_items=node.properties, i_len=node.properties.length, item;
        for (i=0; i<i_len; i++) {
            item = node.properties[i];
            item.__parent = {
                name: 'properties', 
                len: node.properties.length
            };
            format(ret, item, options)
        }
    }
    else {
        throw new Error('AST-node-property-collection properties undefined: ' + JSON.stringify(node, null, 2));
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node ObjectTypeCallProperty
var ObjectTypeCallProperty_astNode = {
    name: "ObjectTypeCallProperty", 
    ittfTag: ":call-prop", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(ObjectTypeCallProperty_astNode)
format.ObjectTypeCallProperty = function(parent, node, options) {
    var f_astNode = ObjectTypeCallProperty_astNode;
    var __isText = false;
    // log 'node : ObjectTypeCallProperty ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':call-prop', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'ObjectTypeCallProperty', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // extends Node
    // log 'node.static', node.static
    if (!!node.static == true) {
        ret.children.push({
            tag: 'static', 
            children: [
                
            ]
        })
    }
    // process AST-node-property value and append ittfNode to `ret`
    f_astNode.props.push({
        name: "value", 
        descr: "process AST-node-property value and append ittfNode to `ret`"
    })
    if (node.value) {
        if (!node.value.type) {
            throw 'Node value has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.value, options)
    }
    else {
        throw new Error('AST-node-property value undefined: ' + JSON.stringify(node, null, 2));
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node ObjectTypeIndexer
var ObjectTypeIndexer_astNode = {
    name: "ObjectTypeIndexer", 
    ittfTag: ":[]", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(ObjectTypeIndexer_astNode)
format.ObjectTypeIndexer = function(parent, node, options) {
    var f_astNode = ObjectTypeIndexer_astNode;
    var __isText = false;
    // log 'node : ObjectTypeIndexer ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':[]', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'ObjectTypeIndexer', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // extends Node
    // Process AST-node-property id and
    // set the resulting node.name on : ret || parent (cmd: onparent)
    // used mainly for Identifier(s)
    f_astNode.props.push({
        name: "id", 
        onParent: false, 
        iftext: false, 
        descr: "Process AST-node-property id and set the resulting node.name on : ret || parent (cmd: onparent) used mainly for Identifier(s)"
    })
    if (node.id) {
        if (!node.id.type) {
            throw 'Node id has no type: ' + JSON.stringify(node, null, 2);
        }
        var tempid = {
            children: [
                
            ]
        };
        format(tempid, node.id, options)
        /**
            if (tempid .children.length > 0) {
                throw 'node.id must result zero node, returned: ' + tempid.children.length + ' source: ' + options.input.substring(node.start, node.end);
            }
        */
        var appto = false ? parent : ret;
        if (tempid.children.length > 0) {
            appto.name = tempid.children[0].name;
        }
        else {
            appto.name = tempid.name;
        }
    }
    // process AST-node-property key and append ittfNode to `ret`
    f_astNode.props.push({
        name: "key", 
        descr: "process AST-node-property key and append ittfNode to `ret`"
    })
    if (node.key) {
        if (!node.key.type) {
            throw 'Node key has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.key, options)
    }
    // process AST-node-property value and append ittfNode to `ret`
    f_astNode.props.push({
        name: "value", 
        descr: "process AST-node-property value and append ittfNode to `ret`"
    })
    if (node.value) {
        if (!node.value.type) {
            throw 'Node value has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.value, options)
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node ObjectTypeProperty
var ObjectTypeProperty_astNode = {
    name: "ObjectTypeProperty", 
    ittfTag: ":@", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(ObjectTypeProperty_astNode)
format.ObjectTypeProperty = function(parent, node, options) {
    var f_astNode = ObjectTypeProperty_astNode;
    var __isText = false;
    // log 'node : ObjectTypeProperty ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':@', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'ObjectTypeProperty', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // extends Node
    // Process AST-node-property key and
    // set the resulting node.name on : ret || parent (cmd: onparent)
    // used mainly for Identifier(s)
    f_astNode.props.push({
        name: "key", 
        onParent: false, 
        iftext: false, 
        descr: "Process AST-node-property key and set the resulting node.name on : ret || parent (cmd: onparent) used mainly for Identifier(s)"
    })
    if (node.key) {
        if (!node.key.type) {
            throw 'Node key has no type: ' + JSON.stringify(node, null, 2);
        }
        var tempkey = {
            children: [
                
            ]
        };
        format(tempkey, node.key, options)
        /**
            if (tempkey .children.length > 0) {
                throw 'node.key must result zero node, returned: ' + tempkey.children.length + ' source: ' + options.input.substring(node.start, node.end);
            }
        */
        var appto = false ? parent : ret;
        if (tempkey.children.length > 0) {
            appto.name = tempkey.children[0].name;
        }
        else {
            appto.name = tempkey.name;
        }
    }
    // process AST-node-property value and set it in a var
    var p_value = null;
    if (typeof(node.value) !== 'undefined' && node.value != null) {
        p_value = {
            textified: null, 
            isText: false, 
            ASTProp: 'value', 
            children: [
                
            ]
        };
        if (node.value == null) {
            p_value.text = "null";
        }
        else {
            if (!node.value.type) {
                throw 'Node value has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp value before format'
            format(p_value, node.value, options)
            // log 'f_p_temp value after format', p_value.children.length, p_value
            var value_comments = extractCommentsIf(p_value, 1);
            if (p_value.children.length == 1) {
                p_value.tag = p_value.children[0].tag;
                if (!(p_value.children[0].isText || p_value.children[0].textified)) {
                    p_value.name = p_value.children[0].name;
                    p_value.source = p_value.children[0].source;
                    p_value.children = p_value.children[0].children;
                }
                else {
                    if (p_value.children[0].textified) {
                        p_value.textified = p_value.children[0].textified;
                    }
                    if (p_value.children[0].isText) {
                        p_value.isText = true;
                    }
                    p_value.name = p_value.children[0].name;
                    p_value.source = p_value.children[0].source;
                    p_value.children = [];
                }
            }
            if (value_comments.length > 0) {
                p_value.children = p_value.children.concat(value_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property value undefined: ' + JSON.stringify(node, null, 2));
    }
    if (node.optional) {
        ret.name += '?';
    }
    if (p_value.tag === 'string' || p_value.tag === 'number' || p_value.tag === 'boolean') {
        ret.tag = p_value.tag;
    }
    else {
        ret.tag = '@';
        ret.children.push(p_value)
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node QualifiedTypeIdentifier
var QualifiedTypeIdentifier_astNode = {
    name: "QualifiedTypeIdentifier", 
    ittfTag: ":q-type", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(QualifiedTypeIdentifier_astNode)
format.QualifiedTypeIdentifier = function(parent, node, options) {
    var f_astNode = QualifiedTypeIdentifier_astNode;
    var __isText = false;
    // log 'node : QualifiedTypeIdentifier ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':q-type', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'QualifiedTypeIdentifier', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // extends Node
    // Process AST-node-property id and
    // set the resulting node.name on : ret || parent (cmd: onparent)
    // used mainly for Identifier(s)
    f_astNode.props.push({
        name: "id", 
        onParent: false, 
        iftext: false, 
        descr: "Process AST-node-property id and set the resulting node.name on : ret || parent (cmd: onparent) used mainly for Identifier(s)"
    })
    if (node.id) {
        if (!node.id.type) {
            throw 'Node id has no type: ' + JSON.stringify(node, null, 2);
        }
        var tempid = {
            children: [
                
            ]
        };
        format(tempid, node.id, options)
        /**
            if (tempid .children.length > 0) {
                throw 'node.id must result zero node, returned: ' + tempid.children.length + ' source: ' + options.input.substring(node.start, node.end);
            }
        */
        var appto = false ? parent : ret;
        if (tempid.children.length > 0) {
            appto.name = tempid.children[0].name;
        }
        else {
            appto.name = tempid.name;
        }
    }
    // process AST-node-property qualification and set it in a var
    var p_qualification = null;
    if (typeof(node.qualification) !== 'undefined' && node.qualification != null) {
        p_qualification = {
            textified: null, 
            isText: false, 
            ASTProp: 'qualification', 
            children: [
                
            ]
        };
        if (node.qualification == null) {
            p_qualification.text = "null";
        }
        else {
            if (!node.qualification.type) {
                throw 'Node qualification has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp qualification before format'
            format(p_qualification, node.qualification, options)
            // log 'f_p_temp qualification after format', p_qualification.children.length, p_qualification
            var qualification_comments = extractCommentsIf(p_qualification, 1);
            if (p_qualification.children.length == 1) {
                p_qualification.tag = p_qualification.children[0].tag;
                if (!(p_qualification.children[0].isText || p_qualification.children[0].textified)) {
                    p_qualification.name = p_qualification.children[0].name;
                    p_qualification.source = p_qualification.children[0].source;
                    p_qualification.children = p_qualification.children[0].children;
                }
                else {
                    if (p_qualification.children[0].textified) {
                        p_qualification.textified = p_qualification.children[0].textified;
                    }
                    if (p_qualification.children[0].isText) {
                        p_qualification.isText = true;
                    }
                    p_qualification.name = p_qualification.children[0].name;
                    p_qualification.source = p_qualification.children[0].source;
                    p_qualification.children = [];
                }
            }
            if (qualification_comments.length > 0) {
                p_qualification.children = p_qualification.children.concat(qualification_comments);
            }
        }
    }
    if (p_qualification) {
        ret.name = p_qualification.name + '.' + ret.name;
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node UnionTypeAnnotation
var UnionTypeAnnotation_astNode = {
    name: "UnionTypeAnnotation", 
    ittfTag: ":|", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(UnionTypeAnnotation_astNode)
format.UnionTypeAnnotation = function(parent, node, options) {
    var f_astNode = UnionTypeAnnotation_astNode;
    var __isText = false;
    // log 'node : UnionTypeAnnotation ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':|', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'UnionTypeAnnotation', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // extends Node, Type
    // process AST-node-property-collection types and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "types", 
        throwIfUndefined: true, 
        descr: "process AST-node-property-collection types and append ittfNode(s) to `ret`"
    })
    if (node.types) {
        if (typeof node.types.length === 'undefined') {
            throw new Error('Property node.types must be an array');
        }
        var i, i_items=node.types, i_len=node.types.length, item;
        for (i=0; i<i_len; i++) {
            item = node.types[i];
            item.__parent = {
                name: 'types', 
                len: node.types.length
            };
            format(ret, item, options)
        }
    }
    else {
        throw new Error('AST-node-property-collection types undefined: ' + JSON.stringify(node, null, 2));
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node ExistsTypeAnnotation
var ExistsTypeAnnotation_astNode = {
    name: "ExistsTypeAnnotation", 
    ittfTag: ":exists-type", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(ExistsTypeAnnotation_astNode)
format.ExistsTypeAnnotation = function(parent, node, options) {
    var f_astNode = ExistsTypeAnnotation_astNode;
    var __isText = false;
    // log 'node : ExistsTypeAnnotation ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':exists-type', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'ExistsTypeAnnotation', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node InferredPredicate
var InferredPredicate_astNode = {
    name: "InferredPredicate", 
    ittfTag: ":predicate", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(InferredPredicate_astNode)
format.InferredPredicate = function(parent, node, options) {
    var f_astNode = InferredPredicate_astNode;
    var __isText = false;
    // log 'node : InferredPredicate ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':predicate', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'InferredPredicate', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// Type annotations
// https://iov-one.github.io/iov-core-docs/latest/iov-core/interfaces/node.html
format.TSInterfaceDeclaration = format.InterfaceDeclaration;
format.TSStringKeyword = format.StringTypeAnnotation;
format.TSNumberKeyword = format.NumberTypeAnnotation;
format.TSBooleanKeyword = format.BooleanTypeAnnotation;
format.TSArrayType = format.ArrayTypeAnnotation;
format.TSAnyKeyword = format.AnyTypeAnnotation;
format.TSVoidKeyword = format.VoidTypeAnnotation;
format.TSNullKeyword = format.NullLiteralTypeAnnotation;
format.TSUndefinedKeyword = format.UndefinedTypeAnnotation;
// set format.TSTupleType = format.TupleTypeAnnotation
// process AST node TSObjectKeyword
var TSObjectKeyword_astNode = {
    name: "TSObjectKeyword", 
    ittfTag: ":object", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSObjectKeyword_astNode)
format.TSObjectKeyword = function(parent, node, options) {
    var f_astNode = TSObjectKeyword_astNode;
    var __isText = false;
    // log 'node : TSObjectKeyword ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':object', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TSObjectKeyword', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TSInterfaceDeclaration
var TSInterfaceDeclaration_astNode = {
    name: "TSInterfaceDeclaration", 
    ittfTag: ":interface", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSInterfaceDeclaration_astNode)
format.TSInterfaceDeclaration = function(parent, node, options) {
    var f_astNode = TSInterfaceDeclaration_astNode;
    var __isText = false;
    // log 'node : TSInterfaceDeclaration ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':interface', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TSInterfaceDeclaration', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // Process AST-node-property id and
    // set the resulting node.name on : ret || parent (cmd: onparent)
    // used mainly for Identifier(s)
    f_astNode.props.push({
        name: "id", 
        onParent: false, 
        iftext: false, 
        descr: "Process AST-node-property id and set the resulting node.name on : ret || parent (cmd: onparent) used mainly for Identifier(s)"
    })
    if (node.id) {
        if (!node.id.type) {
            throw 'Node id has no type: ' + JSON.stringify(node, null, 2);
        }
        var tempid = {
            children: [
                
            ]
        };
        format(tempid, node.id, options)
        /**
            if (tempid .children.length > 0) {
                throw 'node.id must result zero node, returned: ' + tempid.children.length + ' source: ' + options.input.substring(node.start, node.end);
            }
        */
        var appto = false ? parent : ret;
        if (tempid.children.length > 0) {
            appto.name = tempid.children[0].name;
        }
        else {
            appto.name = tempid.name;
        }
    }
    // process AST-node-property typeParameters and append ittfNode to `ret`
    f_astNode.props.push({
        name: "typeParameters", 
        descr: "process AST-node-property typeParameters and append ittfNode to `ret`"
    })
    if (node.typeParameters) {
        if (!node.typeParameters.type) {
            throw 'Node typeParameters has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.typeParameters, options)
    }
    // process AST-node-property-collection extends and
    // embed its array of nodes in a temp var
    if (node.extends) {
        if (typeof node.extends.length === 'undefined') {
            throw new Error('Property node.extends must be an array');
        }
        var p_extends = {
            tag: 'false', 
            children: [
                
            ]
        };
        var i, i_items=node.extends, i_len=node.extends.length, item;
        for (i=0; i<i_len; i++) {
            item = node.extends[i];
            item.__parent = {
                name: 'extends', 
                len: node.extends.length
            };
            format(p_extends, item, options)
        }
    }
    if (p_extends != null) {
        var i, i_items=p_extends.children, i_len=p_extends.children.length, item;
        for (i=0; i<i_len; i++) {
            item = p_extends.children[i];
            if (item.tag == ':exprwithtypeargs') {
                item.tag = ':extends';
            }
            ret.children.push(item);
        }
    }
    // process AST-node-property body and append ittfNode to `ret`
    f_astNode.props.push({
        name: "body", 
        descr: "process AST-node-property body and append ittfNode to `ret`"
    })
    if (node.body) {
        if (!node.body.type) {
            throw 'Node body has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.body, options)
    }
    if (node.declare) {
        ret = {
            tag: ':declare', 
            name: '', 
            children: [
                ret
            ]
        };
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TSInterfaceBody
var TSInterfaceBody_astNode = {
    name: "TSInterfaceBody", 
    ittfTag: "TSInterfaceBody", 
    skip: true, 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSInterfaceBody_astNode)
format.TSInterfaceBody = function(parent, node, options) {
    var f_astNode = TSInterfaceBody_astNode;
    var __isText = false;
    // log 'node : TSInterfaceBody ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = parent;
    // process AST-node-property-collection body and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "body", 
        throwIfUndefined: true, 
        descr: "process AST-node-property-collection body and append ittfNode(s) to `ret`"
    })
    if (node.body) {
        if (typeof node.body.length === 'undefined') {
            throw new Error('Property node.body must be an array');
        }
        var i, i_items=node.body, i_len=node.body.length, item;
        for (i=0; i<i_len; i++) {
            item = node.body[i];
            item.__parent = {
                name: 'body', 
                len: node.body.length
            };
            format(ret, item, options)
        }
    }
    else {
        throw new Error('AST-node-property-collection body undefined: ' + JSON.stringify(node, null, 2));
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
    }
};
// process AST node TSConstructorType
var TSConstructorType_astNode = {
    name: "TSConstructorType", 
    ittfTag: ":ctor", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSConstructorType_astNode)
format.TSConstructorType = function(parent, node, options) {
    var f_astNode = TSConstructorType_astNode;
    var __isText = false;
    // log 'node : TSConstructorType ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':ctor', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TSConstructorType', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property typeParameters and append ittfNode to `ret`
    f_astNode.props.push({
        name: "typeParameters", 
        descr: "process AST-node-property typeParameters and append ittfNode to `ret`"
    })
    if (node.typeParameters) {
        if (!node.typeParameters.type) {
            throw 'Node typeParameters has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.typeParameters, options)
    }
    // process AST-node-property typeAnnotation and append ittfNode to `ret`
    f_astNode.props.push({
        name: "typeAnnotation", 
        descr: "process AST-node-property typeAnnotation and append ittfNode to `ret`"
    })
    if (node.typeAnnotation) {
        if (!node.typeAnnotation.type) {
            throw 'Node typeAnnotation has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.typeAnnotation, options)
    }
    // process AST-node-property-collection parameters and
    // embed its array of nodes in a new tag
    f_astNode.props.push({
        name: "parameters", 
        tag: "params", 
        descr: "# process AST-node-property-collection parameters and embed its array of nodes in a new tag"
    })
    if (node.parameters) {
        if (typeof node.parameters.length === 'undefined') {
            throw new Error('Property node.parameters must be an array');
        }
        if (node.parameters.length > 0) {
            var tempparameters = {
                tag: 'params', 
                ASTProp: 'parameters', 
                children: [
                    
                ]
            };
            var i, i_items=node.parameters, i_len=node.parameters.length, item;
            for (i=0; i<i_len; i++) {
                item = node.parameters[i];
                item.__parent = {
                    name: 'parameters', 
                    len: node.parameters.length
                };
                format(tempparameters, item, options)
            }
            ret.children.push(tempparameters)
        }
    }
    processParams(ret);
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TSConstructSignatureDeclaration
var TSConstructSignatureDeclaration_astNode = {
    name: "TSConstructSignatureDeclaration", 
    ittfTag: ":new", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSConstructSignatureDeclaration_astNode)
format.TSConstructSignatureDeclaration = function(parent, node, options) {
    var f_astNode = TSConstructSignatureDeclaration_astNode;
    var __isText = false;
    // log 'node : TSConstructSignatureDeclaration ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':new', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TSConstructSignatureDeclaration', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property typeParameters and append ittfNode to `ret`
    f_astNode.props.push({
        name: "typeParameters", 
        descr: "process AST-node-property typeParameters and append ittfNode to `ret`"
    })
    if (node.typeParameters) {
        if (!node.typeParameters.type) {
            throw 'Node typeParameters has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.typeParameters, options)
    }
    // process AST-node-property typeAnnotation and append ittfNode to `ret`
    f_astNode.props.push({
        name: "typeAnnotation", 
        descr: "process AST-node-property typeAnnotation and append ittfNode to `ret`"
    })
    if (node.typeAnnotation) {
        if (!node.typeAnnotation.type) {
            throw 'Node typeAnnotation has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.typeAnnotation, options)
    }
    // process AST-node-property-collection parameters and
    // embed its array of nodes in a new tag
    f_astNode.props.push({
        name: "parameters", 
        tag: "params", 
        descr: "# process AST-node-property-collection parameters and embed its array of nodes in a new tag"
    })
    if (node.parameters) {
        if (typeof node.parameters.length === 'undefined') {
            throw new Error('Property node.parameters must be an array');
        }
        if (node.parameters.length > 0) {
            var tempparameters = {
                tag: 'params', 
                ASTProp: 'parameters', 
                children: [
                    
                ]
            };
            var i, i_items=node.parameters, i_len=node.parameters.length, item;
            for (i=0; i<i_len; i++) {
                item = node.parameters[i];
                item.__parent = {
                    name: 'parameters', 
                    len: node.parameters.length
                };
                format(tempparameters, item, options)
            }
            ret.children.push(tempparameters)
        }
    }
    processParams(ret);
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TSCallSignatureDeclaration
var TSCallSignatureDeclaration_astNode = {
    name: "TSCallSignatureDeclaration", 
    ittfTag: ":call", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSCallSignatureDeclaration_astNode)
format.TSCallSignatureDeclaration = function(parent, node, options) {
    var f_astNode = TSCallSignatureDeclaration_astNode;
    var __isText = false;
    // log 'node : TSCallSignatureDeclaration ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':call', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TSCallSignatureDeclaration', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property typeParameters and append ittfNode to `ret`
    f_astNode.props.push({
        name: "typeParameters", 
        descr: "process AST-node-property typeParameters and append ittfNode to `ret`"
    })
    if (node.typeParameters) {
        if (!node.typeParameters.type) {
            throw 'Node typeParameters has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.typeParameters, options)
    }
    // process AST-node-property typeAnnotation and append ittfNode to `ret`
    f_astNode.props.push({
        name: "typeAnnotation", 
        descr: "process AST-node-property typeAnnotation and append ittfNode to `ret`"
    })
    if (node.typeAnnotation) {
        if (!node.typeAnnotation.type) {
            throw 'Node typeAnnotation has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.typeAnnotation, options)
    }
    // process AST-node-property-collection parameters and
    // embed its array of nodes in a new tag
    f_astNode.props.push({
        name: "parameters", 
        tag: "params", 
        descr: "# process AST-node-property-collection parameters and embed its array of nodes in a new tag"
    })
    if (node.parameters) {
        if (typeof node.parameters.length === 'undefined') {
            throw new Error('Property node.parameters must be an array');
        }
        if (node.parameters.length > 0) {
            var tempparameters = {
                tag: 'params', 
                ASTProp: 'parameters', 
                children: [
                    
                ]
            };
            var i, i_items=node.parameters, i_len=node.parameters.length, item;
            for (i=0; i<i_len; i++) {
                item = node.parameters[i];
                item.__parent = {
                    name: 'parameters', 
                    len: node.parameters.length
                };
                format(tempparameters, item, options)
            }
            ret.children.push(tempparameters)
        }
    }
    processParams(ret);
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TSPropertySignature
var TSPropertySignature_astNode = {
    name: "TSPropertySignature", 
    ittfTag: ":p", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSPropertySignature_astNode)
format.TSPropertySignature = function(parent, node, options) {
    var f_astNode = TSPropertySignature_astNode;
    var __isText = false;
    // log 'node : TSPropertySignature ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':p', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TSPropertySignature', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // Process AST-node-property key and
    // set the resulting node.name on : ret || parent (cmd: onparent)
    // used mainly for Identifier(s)
    f_astNode.props.push({
        name: "key", 
        onParent: false, 
        iftext: false, 
        descr: "Process AST-node-property key and set the resulting node.name on : ret || parent (cmd: onparent) used mainly for Identifier(s)"
    })
    if (node.key) {
        if (!node.key.type) {
            throw 'Node key has no type: ' + JSON.stringify(node, null, 2);
        }
        var tempkey = {
            children: [
                
            ]
        };
        format(tempkey, node.key, options)
        /**
            if (tempkey .children.length > 0) {
                throw 'node.key must result zero node, returned: ' + tempkey.children.length + ' source: ' + options.input.substring(node.start, node.end);
            }
        */
        var appto = false ? parent : ret;
        if (tempkey.children.length > 0) {
            appto.name = tempkey.children[0].name;
        }
        else {
            appto.name = tempkey.name;
        }
    }
    if (node.optional) {
        ret.children.push({
            tag: ':optional', 
            name: '', 
            children: [
                
            ]
        })
    }
    // process AST-node-property typeAnnotation and set it in a var
    var p_typeAnnotation = null;
    if (typeof(node.typeAnnotation) !== 'undefined' && node.typeAnnotation != null) {
        p_typeAnnotation = {
            textified: null, 
            isText: false, 
            ASTProp: 'typeAnnotation', 
            children: [
                
            ]
        };
        if (node.typeAnnotation == null) {
            p_typeAnnotation.text = "null";
        }
        else {
            if (!node.typeAnnotation.type) {
                throw 'Node typeAnnotation has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp typeAnnotation before format'
            format(p_typeAnnotation, node.typeAnnotation, options)
            // log 'f_p_temp typeAnnotation after format', p_typeAnnotation.children.length, p_typeAnnotation
            var typeAnnotation_comments = extractCommentsIf(p_typeAnnotation, 1);
            if (p_typeAnnotation.children.length == 1) {
                p_typeAnnotation.tag = p_typeAnnotation.children[0].tag;
                if (!(p_typeAnnotation.children[0].isText || p_typeAnnotation.children[0].textified)) {
                    p_typeAnnotation.name = p_typeAnnotation.children[0].name;
                    p_typeAnnotation.source = p_typeAnnotation.children[0].source;
                    p_typeAnnotation.children = p_typeAnnotation.children[0].children;
                }
                else {
                    if (p_typeAnnotation.children[0].textified) {
                        p_typeAnnotation.textified = p_typeAnnotation.children[0].textified;
                    }
                    if (p_typeAnnotation.children[0].isText) {
                        p_typeAnnotation.isText = true;
                    }
                    p_typeAnnotation.name = p_typeAnnotation.children[0].name;
                    p_typeAnnotation.source = p_typeAnnotation.children[0].source;
                    p_typeAnnotation.children = [];
                }
            }
            if (typeAnnotation_comments.length > 0) {
                p_typeAnnotation.children = p_typeAnnotation.children.concat(typeAnnotation_comments);
            }
        }
    }
    if (p_typeAnnotation) {
        if (p_typeAnnotation.tag === '@-t') {
            var i, i_items=p_typeAnnotation.children, i_len=p_typeAnnotation.children.length, item;
            for (i=0; i<i_len; i++) {
                item = p_typeAnnotation.children[i];
                ret.children.push(item)
            }
        }
        else {
            ret.children.push(p_typeAnnotation)
        }
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TSIndexSignature
var TSIndexSignature_astNode = {
    name: "TSIndexSignature", 
    ittfTag: ":index", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSIndexSignature_astNode)
format.TSIndexSignature = function(parent, node, options) {
    var f_astNode = TSIndexSignature_astNode;
    var __isText = false;
    // log 'node : TSIndexSignature ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':index', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TSIndexSignature', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property typeAnnotation and append ittfNode to `ret`
    f_astNode.props.push({
        name: "typeAnnotation", 
        descr: "process AST-node-property typeAnnotation and append ittfNode to `ret`"
    })
    if (node.typeAnnotation) {
        if (!node.typeAnnotation.type) {
            throw 'Node typeAnnotation has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.typeAnnotation, options)
    }
    if (node.readonly) {
        ret.children.push({
            tag: ':readonly', 
            name: '', 
            children: [
                
            ]
        })
    }
    // process AST-node-property-collection parameters and
    // embed its array of nodes in a new tag
    f_astNode.props.push({
        name: "parameters", 
        tag: "params", 
        descr: "# process AST-node-property-collection parameters and embed its array of nodes in a new tag"
    })
    if (node.parameters) {
        if (typeof node.parameters.length === 'undefined') {
            throw new Error('Property node.parameters must be an array');
        }
        if (node.parameters.length > 0) {
            var tempparameters = {
                tag: 'params', 
                ASTProp: 'parameters', 
                children: [
                    
                ]
            };
            var i, i_items=node.parameters, i_len=node.parameters.length, item;
            for (i=0; i<i_len; i++) {
                item = node.parameters[i];
                item.__parent = {
                    name: 'parameters', 
                    len: node.parameters.length
                };
                format(tempparameters, item, options)
            }
            ret.children.push(tempparameters)
        }
    }
    processParams(ret);
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TSIndexedAccessType
var TSIndexedAccessType_astNode = {
    name: "TSIndexedAccessType", 
    ittfTag: ":[]", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSIndexedAccessType_astNode)
format.TSIndexedAccessType = function(parent, node, options) {
    var f_astNode = TSIndexedAccessType_astNode;
    var __isText = false;
    // log 'node : TSIndexedAccessType ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':[]', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TSIndexedAccessType', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property objectType and append ittfNode to `ret`
    f_astNode.props.push({
        name: "objectType", 
        descr: "process AST-node-property objectType and append ittfNode to `ret`"
    })
    if (node.objectType) {
        if (!node.objectType.type) {
            throw 'Node objectType has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.objectType, options)
    }
    else {
        throw new Error('AST-node-property objectType undefined: ' + JSON.stringify(node, null, 2));
    }
    // process AST-node-property indexType and append ittfNode to `ret`
    f_astNode.props.push({
        name: "indexType", 
        descr: "process AST-node-property indexType and append ittfNode to `ret`"
    })
    if (node.indexType) {
        if (!node.indexType.type) {
            throw 'Node indexType has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.indexType, options)
    }
    else {
        throw new Error('AST-node-property indexType undefined: ' + JSON.stringify(node, null, 2));
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TSModuleDeclaration
var TSModuleDeclaration_astNode = {
    name: "TSModuleDeclaration", 
    ittfTag: ":module", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSModuleDeclaration_astNode)
format.TSModuleDeclaration = function(parent, node, options) {
    var f_astNode = TSModuleDeclaration_astNode;
    var __isText = false;
    // log 'node : TSModuleDeclaration ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':module', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TSModuleDeclaration', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // Process AST-node-property id and
    // set the resulting node.name on : ret || parent (cmd: onparent)
    // used mainly for Identifier(s)
    f_astNode.props.push({
        name: "id", 
        onParent: false, 
        iftext: false, 
        descr: "Process AST-node-property id and set the resulting node.name on : ret || parent (cmd: onparent) used mainly for Identifier(s)"
    })
    if (node.id) {
        if (!node.id.type) {
            throw 'Node id has no type: ' + JSON.stringify(node, null, 2);
        }
        var tempid = {
            children: [
                
            ]
        };
        format(tempid, node.id, options)
        /**
            if (tempid .children.length > 0) {
                throw 'node.id must result zero node, returned: ' + tempid.children.length + ' source: ' + options.input.substring(node.start, node.end);
            }
        */
        var appto = false ? parent : ret;
        if (tempid.children.length > 0) {
            appto.name = tempid.children[0].name;
        }
        else {
            appto.name = tempid.name;
        }
    }
    // process AST-node-property body and append ittfNode to `ret`
    f_astNode.props.push({
        name: "body", 
        descr: "process AST-node-property body and append ittfNode to `ret`"
    })
    if (node.body) {
        if (!node.body.type) {
            throw 'Node body has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.body, options)
    }
    if (node.declare) {
        ret = {
            tag: ':declare', 
            name: '', 
            children: [
                ret
            ]
        };
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TSModuleBlock
var TSModuleBlock_astNode = {
    name: "TSModuleBlock", 
    ittfTag: "TSModuleBlock", 
    skip: true, 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSModuleBlock_astNode)
format.TSModuleBlock = function(parent, node, options) {
    var f_astNode = TSModuleBlock_astNode;
    var __isText = false;
    // log 'node : TSModuleBlock ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = parent;
    // process AST-node-property-collection body and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "body", 
        throwIfUndefined: true, 
        descr: "process AST-node-property-collection body and append ittfNode(s) to `ret`"
    })
    if (node.body) {
        if (typeof node.body.length === 'undefined') {
            throw new Error('Property node.body must be an array');
        }
        var i, i_items=node.body, i_len=node.body.length, item;
        for (i=0; i<i_len; i++) {
            item = node.body[i];
            item.__parent = {
                name: 'body', 
                len: node.body.length
            };
            format(ret, item, options)
        }
    }
    else {
        throw new Error('AST-node-property-collection body undefined: ' + JSON.stringify(node, null, 2));
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
    }
};
// process AST node TSDeclareFunction
var TSDeclareFunction_astNode = {
    name: "TSDeclareFunction", 
    ittfTag: ":function", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSDeclareFunction_astNode)
format.TSDeclareFunction = function(parent, node, options) {
    var f_astNode = TSDeclareFunction_astNode;
    var __isText = false;
    // log 'node : TSDeclareFunction ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':function', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TSDeclareFunction', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // Process AST-node-property id and
    // set the resulting node.name on : ret || parent (cmd: onparent)
    // used mainly for Identifier(s)
    f_astNode.props.push({
        name: "id", 
        onParent: false, 
        iftext: false, 
        descr: "Process AST-node-property id and set the resulting node.name on : ret || parent (cmd: onparent) used mainly for Identifier(s)"
    })
    if (node.id) {
        if (!node.id.type) {
            throw 'Node id has no type: ' + JSON.stringify(node, null, 2);
        }
        var tempid = {
            children: [
                
            ]
        };
        format(tempid, node.id, options)
        /**
            if (tempid .children.length > 0) {
                throw 'node.id must result zero node, returned: ' + tempid.children.length + ' source: ' + options.input.substring(node.start, node.end);
            }
        */
        var appto = false ? parent : ret;
        if (tempid.children.length > 0) {
            appto.name = tempid.children[0].name;
        }
        else {
            appto.name = tempid.name;
        }
    }
    // process AST-node-property typeParameters and append ittfNode to `ret`
    f_astNode.props.push({
        name: "typeParameters", 
        descr: "process AST-node-property typeParameters and append ittfNode to `ret`"
    })
    if (node.typeParameters) {
        if (!node.typeParameters.type) {
            throw 'Node typeParameters has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.typeParameters, options)
    }
    // process AST-node-property-collection params and
    // embed its array of nodes in a new tag
    f_astNode.props.push({
        name: "params", 
        tag: "params", 
        descr: "# process AST-node-property-collection params and embed its array of nodes in a new tag"
    })
    if (node.params) {
        if (typeof node.params.length === 'undefined') {
            throw new Error('Property node.params must be an array');
        }
        if (node.params.length > 0) {
            var tempparams = {
                tag: 'params', 
                ASTProp: 'params', 
                children: [
                    
                ]
            };
            var i, i_items=node.params, i_len=node.params.length, item;
            for (i=0; i<i_len; i++) {
                item = node.params[i];
                item.__parent = {
                    name: 'params', 
                    len: node.params.length
                };
                format(tempparams, item, options)
            }
            ret.children.push(tempparams)
        }
    }
    processParams(ret);
    // process AST-node-property returnType and set it in a var
    var p_returnType = null;
    if (typeof(node.returnType) !== 'undefined' && node.returnType != null) {
        p_returnType = {
            textified: null, 
            isText: false, 
            ASTProp: 'returnType', 
            children: [
                
            ]
        };
        if (node.returnType == null) {
            p_returnType.text = "null";
        }
        else {
            if (!node.returnType.type) {
                throw 'Node returnType has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp returnType before format'
            format(p_returnType, node.returnType, options)
            // log 'f_p_temp returnType after format', p_returnType.children.length, p_returnType
            var returnType_comments = extractCommentsIf(p_returnType, 1);
            if (p_returnType.children.length == 1) {
                p_returnType.tag = p_returnType.children[0].tag;
                if (!(p_returnType.children[0].isText || p_returnType.children[0].textified)) {
                    p_returnType.name = p_returnType.children[0].name;
                    p_returnType.source = p_returnType.children[0].source;
                    p_returnType.children = p_returnType.children[0].children;
                }
                else {
                    if (p_returnType.children[0].textified) {
                        p_returnType.textified = p_returnType.children[0].textified;
                    }
                    if (p_returnType.children[0].isText) {
                        p_returnType.isText = true;
                    }
                    p_returnType.name = p_returnType.children[0].name;
                    p_returnType.source = p_returnType.children[0].source;
                    p_returnType.children = [];
                }
            }
            if (returnType_comments.length > 0) {
                p_returnType.children = p_returnType.children.concat(returnType_comments);
            }
        }
    }
    if (p_returnType) {
        p_returnType = {
            tag: ':return', 
            children: [
                p_returnType
            ]
        };
        ret.children.push(p_returnType);
    }
    if (node.async) {
        ret.tag = 'async=>';
    }
    if (node.generator) {
        ret.tag += '*';
    }
    if (node.declare) {
        ret = {
            tag: ':declare', 
            name: '', 
            children: [
                ret
            ]
        };
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TSFunctionType
var TSFunctionType_astNode = {
    name: "TSFunctionType", 
    ittfTag: ":=>", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSFunctionType_astNode)
format.TSFunctionType = function(parent, node, options) {
    var f_astNode = TSFunctionType_astNode;
    var __isText = false;
    // log 'node : TSFunctionType ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':=>', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TSFunctionType', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property typeParameters and append ittfNode to `ret`
    f_astNode.props.push({
        name: "typeParameters", 
        descr: "process AST-node-property typeParameters and append ittfNode to `ret`"
    })
    if (node.typeParameters) {
        if (!node.typeParameters.type) {
            throw 'Node typeParameters has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.typeParameters, options)
    }
    // process AST-node-property typeAnnotation and append ittfNode to `ret`
    f_astNode.props.push({
        name: "typeAnnotation", 
        descr: "process AST-node-property typeAnnotation and append ittfNode to `ret`"
    })
    if (node.typeAnnotation) {
        if (!node.typeAnnotation.type) {
            throw 'Node typeAnnotation has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.typeAnnotation, options)
    }
    else {
        throw new Error('AST-node-property typeAnnotation undefined: ' + JSON.stringify(node, null, 2));
    }
    // process AST-node-property-collection parameters and
    // embed its array of nodes in a new tag
    f_astNode.props.push({
        name: "parameters", 
        tag: "params", 
        descr: "# process AST-node-property-collection parameters and embed its array of nodes in a new tag"
    })
    if (node.parameters) {
        if (typeof node.parameters.length === 'undefined') {
            throw new Error('Property node.parameters must be an array');
        }
        if (node.parameters.length > 0) {
            var tempparameters = {
                tag: 'params', 
                ASTProp: 'parameters', 
                children: [
                    
                ]
            };
            var i, i_items=node.parameters, i_len=node.parameters.length, item;
            for (i=0; i<i_len; i++) {
                item = node.parameters[i];
                item.__parent = {
                    name: 'parameters', 
                    len: node.parameters.length
                };
                format(tempparameters, item, options)
            }
            ret.children.push(tempparameters)
        }
    }
    processParams(ret);
    // process AST-node-property returnType and set it in a var
    var p_returnType = null;
    if (typeof(node.returnType) !== 'undefined' && node.returnType != null) {
        p_returnType = {
            textified: null, 
            isText: false, 
            ASTProp: 'returnType', 
            children: [
                
            ]
        };
        if (node.returnType == null) {
            p_returnType.text = "null";
        }
        else {
            if (!node.returnType.type) {
                throw 'Node returnType has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp returnType before format'
            format(p_returnType, node.returnType, options)
            // log 'f_p_temp returnType after format', p_returnType.children.length, p_returnType
            var returnType_comments = extractCommentsIf(p_returnType, 1);
            if (p_returnType.children.length == 1) {
                p_returnType.tag = p_returnType.children[0].tag;
                if (!(p_returnType.children[0].isText || p_returnType.children[0].textified)) {
                    p_returnType.name = p_returnType.children[0].name;
                    p_returnType.source = p_returnType.children[0].source;
                    p_returnType.children = p_returnType.children[0].children;
                }
                else {
                    if (p_returnType.children[0].textified) {
                        p_returnType.textified = p_returnType.children[0].textified;
                    }
                    if (p_returnType.children[0].isText) {
                        p_returnType.isText = true;
                    }
                    p_returnType.name = p_returnType.children[0].name;
                    p_returnType.source = p_returnType.children[0].source;
                    p_returnType.children = [];
                }
            }
            if (returnType_comments.length > 0) {
                p_returnType.children = p_returnType.children.concat(returnType_comments);
            }
        }
    }
    if (p_returnType) {
        p_returnType = {
            tag: ':return', 
            children: [
                p_returnType
            ]
        };
        ret.children.push(p_returnType);
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TSMethodSignature
var TSMethodSignature_astNode = {
    name: "TSMethodSignature", 
    ittfTag: ":m", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSMethodSignature_astNode)
format.TSMethodSignature = function(parent, node, options) {
    var f_astNode = TSMethodSignature_astNode;
    var __isText = false;
    // log 'node : TSMethodSignature ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':m', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TSMethodSignature', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // Process AST-node-property key and
    // set the resulting node.name on : ret || parent (cmd: onparent)
    // used mainly for Identifier(s)
    f_astNode.props.push({
        name: "key", 
        onParent: false, 
        iftext: false, 
        descr: "Process AST-node-property key and set the resulting node.name on : ret || parent (cmd: onparent) used mainly for Identifier(s)"
    })
    if (node.key) {
        if (!node.key.type) {
            throw 'Node key has no type: ' + JSON.stringify(node, null, 2);
        }
        var tempkey = {
            children: [
                
            ]
        };
        format(tempkey, node.key, options)
        /**
            if (tempkey .children.length > 0) {
                throw 'node.key must result zero node, returned: ' + tempkey.children.length + ' source: ' + options.input.substring(node.start, node.end);
            }
        */
        var appto = false ? parent : ret;
        if (tempkey.children.length > 0) {
            appto.name = tempkey.children[0].name;
        }
        else {
            appto.name = tempkey.name;
        }
    }
    // process AST-node-property typeParameters and append ittfNode to `ret`
    f_astNode.props.push({
        name: "typeParameters", 
        descr: "process AST-node-property typeParameters and append ittfNode to `ret`"
    })
    if (node.typeParameters) {
        if (!node.typeParameters.type) {
            throw 'Node typeParameters has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.typeParameters, options)
    }
    // process AST-node-property typeAnnotation and append ittfNode to `ret`
    f_astNode.props.push({
        name: "typeAnnotation", 
        descr: "process AST-node-property typeAnnotation and append ittfNode to `ret`"
    })
    if (node.typeAnnotation) {
        if (!node.typeAnnotation.type) {
            throw 'Node typeAnnotation has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.typeAnnotation, options)
    }
    // process AST-node-property-collection parameters and
    // embed its array of nodes in a new tag
    f_astNode.props.push({
        name: "parameters", 
        tag: "params", 
        descr: "# process AST-node-property-collection parameters and embed its array of nodes in a new tag"
    })
    if (node.parameters) {
        if (typeof node.parameters.length === 'undefined') {
            throw new Error('Property node.parameters must be an array');
        }
        if (node.parameters.length > 0) {
            var tempparameters = {
                tag: 'params', 
                ASTProp: 'parameters', 
                children: [
                    
                ]
            };
            var i, i_items=node.parameters, i_len=node.parameters.length, item;
            for (i=0; i<i_len; i++) {
                item = node.parameters[i];
                item.__parent = {
                    name: 'parameters', 
                    len: node.parameters.length
                };
                format(tempparameters, item, options)
            }
            ret.children.push(tempparameters)
        }
    }
    processParams(ret);
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TSTypeAnnotation
var TSTypeAnnotation_astNode = {
    name: "TSTypeAnnotation", 
    ittfTag: "TSTypeAnnotation", 
    skip: true, 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSTypeAnnotation_astNode)
format.TSTypeAnnotation = function(parent, node, options) {
    var f_astNode = TSTypeAnnotation_astNode;
    var __isText = false;
    // log 'node : TSTypeAnnotation ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = parent;
    // process AST-node-property typeAnnotation and append ittfNode to `ret`
    f_astNode.props.push({
        name: "typeAnnotation", 
        descr: "process AST-node-property typeAnnotation and append ittfNode to `ret`"
    })
    if (node.typeAnnotation) {
        if (!node.typeAnnotation.type) {
            throw 'Node typeAnnotation has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.typeAnnotation, options)
    }
    else {
        throw new Error('AST-node-property typeAnnotation undefined: ' + JSON.stringify(node, null, 2));
    }
    // process AST-node-property typeParameters and append ittfNode to `ret`
    f_astNode.props.push({
        name: "typeParameters", 
        descr: "process AST-node-property typeParameters and append ittfNode to `ret`"
    })
    if (node.typeParameters) {
        if (!node.typeParameters.type) {
            throw 'Node typeParameters has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.typeParameters, options)
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
    }
};
// process AST node TSTypeParameterInstantiation
var TSTypeParameterInstantiation_astNode = {
    name: "TSTypeParameterInstantiation", 
    ittfTag: "TSTypeParameterInstantiation", 
    skip: true, 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSTypeParameterInstantiation_astNode)
format.TSTypeParameterInstantiation = function(parent, node, options) {
    var f_astNode = TSTypeParameterInstantiation_astNode;
    var __isText = false;
    // log 'node : TSTypeParameterInstantiation ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = parent;
    // process AST-node-property-collection params and
    // embed its array of nodes in a temp var
    if (node.params) {
        if (typeof node.params.length === 'undefined') {
            throw new Error('Property node.params must be an array');
        }
        var p_params = {
            tag: 'notUsed', 
            children: [
                
            ]
        };
        var i, i_items=node.params, i_len=node.params.length, item;
        for (i=0; i<i_len; i++) {
            item = node.params[i];
            item.__parent = {
                name: 'params', 
                len: node.params.length
            };
            format(p_params, item, options)
        }
    }
    // log 'TSTypeParameterInstantiation.p_params', p_params
    var i, i_items=p_params.children, i_len=p_params.children.length, p;
    for (i=0; i<i_len; i++) {
        p = p_params.children[i];
        // log 'TSTypeParameterInstantiation.p before', p
        if (p.children.length == 0 && p.name.length == 0) {
            if (p.tag === ':{') {
                p.name = '{}';
            }
            else if (p.tag === ':[') {
                p.name = '[]';
            }
            else {
                p.name = p.tag.substr(1);
            }
            p.tag = ':param';
        }
        else if (p.tag !== ':param') {
            p = {
                tag: ':param', 
                name: '', 
                children: [
                    p
                ]
            };
        }
        // log 'TSTypeParameterInstantiation.p after', p
        ret.children.push(p)
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
    }
};
// process AST node TSTypeParameterDeclaration
var TSTypeParameterDeclaration_astNode = {
    name: "TSTypeParameterDeclaration", 
    ittfTag: "TSTypeParameterDeclaration", 
    skip: true, 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSTypeParameterDeclaration_astNode)
format.TSTypeParameterDeclaration = function(parent, node, options) {
    var f_astNode = TSTypeParameterDeclaration_astNode;
    var __isText = false;
    // log 'node : TSTypeParameterDeclaration ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = parent;
    // process AST-node-property-collection params and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "params", 
        throwIfUndefined: true, 
        descr: "process AST-node-property-collection params and append ittfNode(s) to `ret`"
    })
    if (node.params) {
        if (typeof node.params.length === 'undefined') {
            throw new Error('Property node.params must be an array');
        }
        var i, i_items=node.params, i_len=node.params.length, item;
        for (i=0; i<i_len; i++) {
            item = node.params[i];
            item.__parent = {
                name: 'params', 
                len: node.params.length
            };
            format(ret, item, options)
        }
    }
    else {
        throw new Error('AST-node-property-collection params undefined: ' + JSON.stringify(node, null, 2));
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
    }
};
// process AST node TSTypeParameter
var TSTypeParameter_astNode = {
    name: "TSTypeParameter", 
    ittfTag: ":<", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSTypeParameter_astNode)
format.TSTypeParameter = function(parent, node, options) {
    var f_astNode = TSTypeParameter_astNode;
    var __isText = false;
    // log 'node : TSTypeParameter ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':<', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TSTypeParameter', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    ret.name = node.name;
    // process AST-node-property constraint and append ittfNode to `ret`
    f_astNode.props.push({
        name: "constraint", 
        descr: "process AST-node-property constraint and append ittfNode to `ret`"
    })
    if (node.constraint) {
        if (!node.constraint.type) {
            throw 'Node constraint has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.constraint, options)
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TSParameterProperty
var TSParameterProperty_astNode = {
    name: "TSParameterProperty", 
    ittfTag: ":ts-param-prop", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSParameterProperty_astNode)
format.TSParameterProperty = function(parent, node, options) {
    var f_astNode = TSParameterProperty_astNode;
    var __isText = false;
    // log 'node : TSParameterProperty ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':ts-param-prop', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TSParameterProperty', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    if (node.readonly) {
        ret.children.push({
            tag: ':readonly', 
            name: '', 
            children: [
                
            ]
        })
    }
    if (node.accessibility) {
        ret.children.push({
            tag: ':' + node.accessibility, 
            name: '', 
            children: [
                
            ]
        })
    }
    // process AST-node-property parameter and set it in a var
    var p_parameter = null;
    if (typeof(node.parameter) !== 'undefined' && node.parameter != null) {
        p_parameter = {
            textified: null, 
            isText: false, 
            ASTProp: 'parameter', 
            children: [
                
            ]
        };
        if (node.parameter == null) {
            p_parameter.text = "null";
        }
        else {
            if (!node.parameter.type) {
                throw 'Node parameter has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp parameter before format'
            format(p_parameter, node.parameter, options)
            // log 'f_p_temp parameter after format', p_parameter.children.length, p_parameter
            var parameter_comments = extractCommentsIf(p_parameter, 1);
            if (p_parameter.children.length == 1) {
                p_parameter.tag = p_parameter.children[0].tag;
                if (!(p_parameter.children[0].isText || p_parameter.children[0].textified)) {
                    p_parameter.name = p_parameter.children[0].name;
                    p_parameter.source = p_parameter.children[0].source;
                    p_parameter.children = p_parameter.children[0].children;
                }
                else {
                    if (p_parameter.children[0].textified) {
                        p_parameter.textified = p_parameter.children[0].textified;
                    }
                    if (p_parameter.children[0].isText) {
                        p_parameter.isText = true;
                    }
                    p_parameter.name = p_parameter.children[0].name;
                    p_parameter.source = p_parameter.children[0].source;
                    p_parameter.children = [];
                }
            }
            if (parameter_comments.length > 0) {
                p_parameter.children = p_parameter.children.concat(parameter_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property parameter undefined: ' + JSON.stringify(node, null, 2));
    }
    // log 'p_parameter', p_parameter
    ret.name = p_parameter.name;
    var i, i_items=p_parameter.children, i_len=p_parameter.children.length, item;
    for (i=0; i<i_len; i++) {
        item = p_parameter.children[i];
        ret.children.push(item)
    }
    p_parameter.children = [];
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TSTypeReference
var TSTypeReference_astNode = {
    name: "TSTypeReference", 
    ittfTag: ":ref", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSTypeReference_astNode)
format.TSTypeReference = function(parent, node, options) {
    var f_astNode = TSTypeReference_astNode;
    var __isText = false;
    // log 'node : TSTypeReference ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':ref', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TSTypeReference', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property typeName and set it in a var
    var p_typeName = null;
    if (typeof(node.typeName) !== 'undefined' && node.typeName != null) {
        p_typeName = {
            textified: null, 
            isText: false, 
            ASTProp: 'typeName', 
            children: [
                
            ]
        };
        if (node.typeName == null) {
            p_typeName.text = "null";
        }
        else {
            if (!node.typeName.type) {
                throw 'Node typeName has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp typeName before format'
            format(p_typeName, node.typeName, options)
            // log 'f_p_temp typeName after format', p_typeName.children.length, p_typeName
            var typeName_comments = extractCommentsIf(p_typeName, 1);
            if (p_typeName.children.length == 1) {
                p_typeName.tag = p_typeName.children[0].tag;
                if (!(p_typeName.children[0].isText || p_typeName.children[0].textified)) {
                    p_typeName.name = p_typeName.children[0].name;
                    p_typeName.source = p_typeName.children[0].source;
                    p_typeName.children = p_typeName.children[0].children;
                }
                else {
                    if (p_typeName.children[0].textified) {
                        p_typeName.textified = p_typeName.children[0].textified;
                    }
                    if (p_typeName.children[0].isText) {
                        p_typeName.isText = true;
                    }
                    p_typeName.name = p_typeName.children[0].name;
                    p_typeName.source = p_typeName.children[0].source;
                    p_typeName.children = [];
                }
            }
            if (typeName_comments.length > 0) {
                p_typeName.children = p_typeName.children.concat(typeName_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property typeName undefined: ' + JSON.stringify(node, null, 2));
    }
    if (p_typeName.tag === '@id') {
        ret.name = p_typeName.name;
    }
    else {
        if (p_typeName.tag === ':qname') {
            ret.name = p_typeName.name;
        }
        else {
            ret.children.push(p_typeName)
        }
    }
    // process AST-node-property typeParameters and append ittfNode to `ret`
    f_astNode.props.push({
        name: "typeParameters", 
        descr: "process AST-node-property typeParameters and append ittfNode to `ret`"
    })
    if (node.typeParameters) {
        if (!node.typeParameters.type) {
            throw 'Node typeParameters has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.typeParameters, options)
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TSExpressionWithTypeArguments
var TSExpressionWithTypeArguments_astNode = {
    name: "TSExpressionWithTypeArguments", 
    ittfTag: ":exprwithtypeargs", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSExpressionWithTypeArguments_astNode)
format.TSExpressionWithTypeArguments = function(parent, node, options) {
    var f_astNode = TSExpressionWithTypeArguments_astNode;
    var __isText = false;
    // log 'node : TSExpressionWithTypeArguments ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':exprwithtypeargs', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TSExpressionWithTypeArguments', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property typeParameters and append ittfNode to `ret`
    f_astNode.props.push({
        name: "typeParameters", 
        descr: "process AST-node-property typeParameters and append ittfNode to `ret`"
    })
    if (node.typeParameters) {
        if (!node.typeParameters.type) {
            throw 'Node typeParameters has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.typeParameters, options)
    }
    // process AST-node-property expression and set it in a var
    var p_expression = null;
    if (typeof(node.expression) !== 'undefined' && node.expression != null) {
        p_expression = {
            textified: null, 
            isText: false, 
            ASTProp: 'expression', 
            children: [
                
            ]
        };
        if (node.expression == null) {
            p_expression.text = "null";
        }
        else {
            if (!node.expression.type) {
                throw 'Node expression has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp expression before format'
            format(p_expression, node.expression, options)
            // log 'f_p_temp expression after format', p_expression.children.length, p_expression
            var expression_comments = extractCommentsIf(p_expression, 1);
            if (p_expression.children.length == 1) {
                p_expression.tag = p_expression.children[0].tag;
                if (!(p_expression.children[0].isText || p_expression.children[0].textified)) {
                    p_expression.name = p_expression.children[0].name;
                    p_expression.source = p_expression.children[0].source;
                    p_expression.children = p_expression.children[0].children;
                }
                else {
                    if (p_expression.children[0].textified) {
                        p_expression.textified = p_expression.children[0].textified;
                    }
                    if (p_expression.children[0].isText) {
                        p_expression.isText = true;
                    }
                    p_expression.name = p_expression.children[0].name;
                    p_expression.source = p_expression.children[0].source;
                    p_expression.children = [];
                }
            }
            if (expression_comments.length > 0) {
                p_expression.children = p_expression.children.concat(expression_comments);
            }
        }
    }
    if (p_expression) {
        if (isTextualNode(p_expression)) {
            ret.name = getNodeText(p_expression);
        }
        else {
            ret.children.push(p_expression)
        }
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TSAsExpression
var TSAsExpression_astNode = {
    name: "TSAsExpression", 
    ittfTag: ":as", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSAsExpression_astNode)
format.TSAsExpression = function(parent, node, options) {
    var f_astNode = TSAsExpression_astNode;
    var __isText = false;
    // log 'node : TSAsExpression ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':as', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TSAsExpression', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property expression and set it in a var
    var p_expression = null;
    if (typeof(node.expression) !== 'undefined' && node.expression != null) {
        p_expression = {
            textified: null, 
            isText: false, 
            ASTProp: 'expression', 
            children: [
                
            ]
        };
        if (node.expression == null) {
            p_expression.text = "null";
        }
        else {
            if (!node.expression.type) {
                throw 'Node expression has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp expression before format'
            format(p_expression, node.expression, options)
            // log 'f_p_temp expression after format', p_expression.children.length, p_expression
            var expression_comments = extractCommentsIf(p_expression, 1);
            if (p_expression.children.length == 1) {
                p_expression.tag = p_expression.children[0].tag;
                if (!(p_expression.children[0].isText || p_expression.children[0].textified)) {
                    p_expression.name = p_expression.children[0].name;
                    p_expression.source = p_expression.children[0].source;
                    p_expression.children = p_expression.children[0].children;
                }
                else {
                    if (p_expression.children[0].textified) {
                        p_expression.textified = p_expression.children[0].textified;
                    }
                    if (p_expression.children[0].isText) {
                        p_expression.isText = true;
                    }
                    p_expression.name = p_expression.children[0].name;
                    p_expression.source = p_expression.children[0].source;
                    p_expression.children = [];
                }
            }
            if (expression_comments.length > 0) {
                p_expression.children = p_expression.children.concat(expression_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property expression undefined: ' + JSON.stringify(node, null, 2));
    }
    // process AST-node-property typeAnnotation and set it in a var
    var p_typeAnnotation = null;
    if (typeof(node.typeAnnotation) !== 'undefined' && node.typeAnnotation != null) {
        p_typeAnnotation = {
            textified: null, 
            isText: false, 
            ASTProp: 'typeAnnotation', 
            children: [
                
            ]
        };
        if (node.typeAnnotation == null) {
            p_typeAnnotation.text = "null";
        }
        else {
            if (!node.typeAnnotation.type) {
                throw 'Node typeAnnotation has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp typeAnnotation before format'
            format(p_typeAnnotation, node.typeAnnotation, options)
            // log 'f_p_temp typeAnnotation after format', p_typeAnnotation.children.length, p_typeAnnotation
            var typeAnnotation_comments = extractCommentsIf(p_typeAnnotation, 1);
            if (p_typeAnnotation.children.length == 1) {
                p_typeAnnotation.tag = p_typeAnnotation.children[0].tag;
                if (!(p_typeAnnotation.children[0].isText || p_typeAnnotation.children[0].textified)) {
                    p_typeAnnotation.name = p_typeAnnotation.children[0].name;
                    p_typeAnnotation.source = p_typeAnnotation.children[0].source;
                    p_typeAnnotation.children = p_typeAnnotation.children[0].children;
                }
                else {
                    if (p_typeAnnotation.children[0].textified) {
                        p_typeAnnotation.textified = p_typeAnnotation.children[0].textified;
                    }
                    if (p_typeAnnotation.children[0].isText) {
                        p_typeAnnotation.isText = true;
                    }
                    p_typeAnnotation.name = p_typeAnnotation.children[0].name;
                    p_typeAnnotation.source = p_typeAnnotation.children[0].source;
                    p_typeAnnotation.children = [];
                }
            }
            if (typeAnnotation_comments.length > 0) {
                p_typeAnnotation.children = p_typeAnnotation.children.concat(typeAnnotation_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property typeAnnotation undefined: ' + JSON.stringify(node, null, 2));
    }
    // log 'p_expression', p_expression
    // log 'p_typeAnnotation', p_typeAnnotation
    if (p_expression.isText || p_expression.textified) {
        p_expression.name = p_expression.textified;
        p_expression.textified = null;
        p_expression.isText = false;
    }
    ret.children.push(p_typeAnnotation)
    if (p_expression.children.length == 0) {
        p_expression.children.push(ret)
        ret = p_expression;
    }
    else {
        ret = {
            tag: '@expr', 
            children: [p_expression, ret]
        };
    }
    if (['@id', 'literal'].indexOf(ret.tag) > -1) {
        ret.tag = '+';
    }
    // log 'TSAsExpression.ret', ret
    if (node.extra && node.extra.parenthesized) {
        ret = {
            tag: '(', 
            name: '', 
            children: [
                ret
            ]
        };
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TSTupleType
var TSTupleType_astNode = {
    name: "TSTupleType", 
    ittfTag: ":tuple", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSTupleType_astNode)
format.TSTupleType = function(parent, node, options) {
    var f_astNode = TSTupleType_astNode;
    var __isText = false;
    // log 'node : TSTupleType ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':tuple', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TSTupleType', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property-collection elementTypes and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "elementTypes", 
        throwIfUndefined: true, 
        descr: "process AST-node-property-collection elementTypes and append ittfNode(s) to `ret`"
    })
    if (node.elementTypes) {
        if (typeof node.elementTypes.length === 'undefined') {
            throw new Error('Property node.elementTypes must be an array');
        }
        var i, i_items=node.elementTypes, i_len=node.elementTypes.length, item;
        for (i=0; i<i_len; i++) {
            item = node.elementTypes[i];
            item.__parent = {
                name: 'elementTypes', 
                len: node.elementTypes.length
            };
            format(ret, item, options)
        }
    }
    else {
        throw new Error('AST-node-property-collection elementTypes undefined: ' + JSON.stringify(node, null, 2));
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TSUnionType
var TSUnionType_astNode = {
    name: "TSUnionType", 
    ittfTag: ":union", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSUnionType_astNode)
format.TSUnionType = function(parent, node, options) {
    var f_astNode = TSUnionType_astNode;
    var __isText = false;
    // log 'node : TSUnionType ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':union', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TSUnionType', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property-collection types and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "types", 
        throwIfUndefined: false, 
        descr: "process AST-node-property-collection types and append ittfNode(s) to `ret`"
    })
    if (node.types) {
        if (typeof node.types.length === 'undefined') {
            throw new Error('Property node.types must be an array');
        }
        var i, i_items=node.types, i_len=node.types.length, item;
        for (i=0; i<i_len; i++) {
            item = node.types[i];
            item.__parent = {
                name: 'types', 
                len: node.types.length
            };
            format(ret, item, options)
        }
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TSIntersectionType
var TSIntersectionType_astNode = {
    name: "TSIntersectionType", 
    ittfTag: ":intersect", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSIntersectionType_astNode)
format.TSIntersectionType = function(parent, node, options) {
    var f_astNode = TSIntersectionType_astNode;
    var __isText = false;
    // log 'node : TSIntersectionType ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':intersect', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TSIntersectionType', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property-collection types and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "types", 
        throwIfUndefined: false, 
        descr: "process AST-node-property-collection types and append ittfNode(s) to `ret`"
    })
    if (node.types) {
        if (typeof node.types.length === 'undefined') {
            throw new Error('Property node.types must be an array');
        }
        var i, i_items=node.types, i_len=node.types.length, item;
        for (i=0; i<i_len; i++) {
            item = node.types[i];
            item.__parent = {
                name: 'types', 
                len: node.types.length
            };
            format(ret, item, options)
        }
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TSEnumDeclaration
var TSEnumDeclaration_astNode = {
    name: "TSEnumDeclaration", 
    ittfTag: ":enum", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSEnumDeclaration_astNode)
format.TSEnumDeclaration = function(parent, node, options) {
    var f_astNode = TSEnumDeclaration_astNode;
    var __isText = false;
    // log 'node : TSEnumDeclaration ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':enum', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TSEnumDeclaration', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // Process AST-node-property id and
    // set the resulting node.name on : ret || parent (cmd: onparent)
    // used mainly for Identifier(s)
    f_astNode.props.push({
        name: "id", 
        onParent: false, 
        iftext: false, 
        descr: "Process AST-node-property id and set the resulting node.name on : ret || parent (cmd: onparent) used mainly for Identifier(s)"
    })
    if (node.id) {
        if (!node.id.type) {
            throw 'Node id has no type: ' + JSON.stringify(node, null, 2);
        }
        var tempid = {
            children: [
                
            ]
        };
        format(tempid, node.id, options)
        /**
            if (tempid .children.length > 0) {
                throw 'node.id must result zero node, returned: ' + tempid.children.length + ' source: ' + options.input.substring(node.start, node.end);
            }
        */
        var appto = false ? parent : ret;
        if (tempid.children.length > 0) {
            appto.name = tempid.children[0].name;
        }
        else {
            appto.name = tempid.name;
        }
    }
    // process AST-node-property-collection members and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "members", 
        throwIfUndefined: true, 
        descr: "process AST-node-property-collection members and append ittfNode(s) to `ret`"
    })
    if (node.members) {
        if (typeof node.members.length === 'undefined') {
            throw new Error('Property node.members must be an array');
        }
        var i, i_items=node.members, i_len=node.members.length, item;
        for (i=0; i<i_len; i++) {
            item = node.members[i];
            item.__parent = {
                name: 'members', 
                len: node.members.length
            };
            format(ret, item, options)
        }
    }
    else {
        throw new Error('AST-node-property-collection members undefined: ' + JSON.stringify(node, null, 2));
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TSEnumMember
var TSEnumMember_astNode = {
    name: "TSEnumMember", 
    ittfTag: "@", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSEnumMember_astNode)
format.TSEnumMember = function(parent, node, options) {
    var f_astNode = TSEnumMember_astNode;
    var __isText = false;
    // log 'node : TSEnumMember ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: '@', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TSEnumMember', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // Process AST-node-property id and
    // set the resulting node.name on : ret || parent (cmd: onparent)
    // used mainly for Identifier(s)
    f_astNode.props.push({
        name: "id", 
        onParent: false, 
        iftext: false, 
        descr: "Process AST-node-property id and set the resulting node.name on : ret || parent (cmd: onparent) used mainly for Identifier(s)"
    })
    if (node.id) {
        if (!node.id.type) {
            throw 'Node id has no type: ' + JSON.stringify(node, null, 2);
        }
        var tempid = {
            children: [
                
            ]
        };
        format(tempid, node.id, options)
        /**
            if (tempid .children.length > 0) {
                throw 'node.id must result zero node, returned: ' + tempid.children.length + ' source: ' + options.input.substring(node.start, node.end);
            }
        */
        var appto = false ? parent : ret;
        if (tempid.children.length > 0) {
            appto.name = tempid.children[0].name;
        }
        else {
            appto.name = tempid.name;
        }
    }
    // process AST-node-property initializer and set it in a var
    var p_initializer = null;
    if (typeof(node.initializer) !== 'undefined' && node.initializer != null) {
        p_initializer = {
            textified: null, 
            isText: false, 
            ASTProp: 'initializer', 
            children: [
                
            ]
        };
        if (node.initializer == null) {
            p_initializer.text = "null";
        }
        else {
            if (!node.initializer.type) {
                throw 'Node initializer has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp initializer before format'
            format(p_initializer, node.initializer, options)
            // log 'f_p_temp initializer after format', p_initializer.children.length, p_initializer
            var initializer_comments = extractCommentsIf(p_initializer, 1);
            if (p_initializer.children.length == 1) {
                p_initializer.tag = p_initializer.children[0].tag;
                if (!(p_initializer.children[0].isText || p_initializer.children[0].textified)) {
                    p_initializer.name = p_initializer.children[0].name;
                    p_initializer.source = p_initializer.children[0].source;
                    p_initializer.children = p_initializer.children[0].children;
                }
                else {
                    if (p_initializer.children[0].textified) {
                        p_initializer.textified = p_initializer.children[0].textified;
                    }
                    if (p_initializer.children[0].isText) {
                        p_initializer.isText = true;
                    }
                    p_initializer.name = p_initializer.children[0].name;
                    p_initializer.source = p_initializer.children[0].source;
                    p_initializer.children = [];
                }
            }
            if (initializer_comments.length > 0) {
                p_initializer.children = p_initializer.children.concat(initializer_comments);
            }
        }
    }
    if (p_initializer) {
        if (['@expr', '@id', 'literal'].indexOf(p_initializer.tag) > -1) {
            ret.name += ' ' + getNodeText(p_initializer);
        }
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TSNeverKeyword
var TSNeverKeyword_astNode = {
    name: "TSNeverKeyword", 
    ittfTag: ":never", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSNeverKeyword_astNode)
format.TSNeverKeyword = function(parent, node, options) {
    var f_astNode = TSNeverKeyword_astNode;
    var __isText = false;
    // log 'node : TSNeverKeyword ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':never', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TSNeverKeyword', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TSTypePredicate
var TSTypePredicate_astNode = {
    name: "TSTypePredicate", 
    ittfTag: ":predicate", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSTypePredicate_astNode)
format.TSTypePredicate = function(parent, node, options) {
    var f_astNode = TSTypePredicate_astNode;
    var __isText = false;
    // log 'node : TSTypePredicate ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':predicate', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TSTypePredicate', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // Process AST-node-property parameterName and
    // set the resulting node.name on : ret || parent (cmd: onparent)
    // used mainly for Identifier(s)
    f_astNode.props.push({
        name: "parameterName", 
        onParent: false, 
        iftext: false, 
        descr: "Process AST-node-property parameterName and set the resulting node.name on : ret || parent (cmd: onparent) used mainly for Identifier(s)"
    })
    if (node.parameterName) {
        if (!node.parameterName.type) {
            throw 'Node parameterName has no type: ' + JSON.stringify(node, null, 2);
        }
        var tempparameterName = {
            children: [
                
            ]
        };
        format(tempparameterName, node.parameterName, options)
        /**
            if (tempparameterName .children.length > 0) {
                throw 'node.parameterName must result zero node, returned: ' + tempparameterName.children.length + ' source: ' + options.input.substring(node.start, node.end);
            }
        */
        var appto = false ? parent : ret;
        if (tempparameterName.children.length > 0) {
            appto.name = tempparameterName.children[0].name;
        }
        else {
            appto.name = tempparameterName.name;
        }
    }
    // process AST-node-property typeAnnotation and append ittfNode to `ret`
    f_astNode.props.push({
        name: "typeAnnotation", 
        descr: "process AST-node-property typeAnnotation and append ittfNode to `ret`"
    })
    if (node.typeAnnotation) {
        if (!node.typeAnnotation.type) {
            throw 'Node typeAnnotation has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.typeAnnotation, options)
    }
    else {
        throw new Error('AST-node-property typeAnnotation undefined: ' + JSON.stringify(node, null, 2));
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TSTypeLiteral
var TSTypeLiteral_astNode = {
    name: "TSTypeLiteral", 
    ittfTag: ":{", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSTypeLiteral_astNode)
format.TSTypeLiteral = function(parent, node, options) {
    var f_astNode = TSTypeLiteral_astNode;
    var __isText = false;
    // log 'node : TSTypeLiteral ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':{', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TSTypeLiteral', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property-collection members and append ittfNode(s) to `ret`
    f_astNode.props.push({
        name: "members", 
        throwIfUndefined: false, 
        descr: "process AST-node-property-collection members and append ittfNode(s) to `ret`"
    })
    if (node.members) {
        if (typeof node.members.length === 'undefined') {
            throw new Error('Property node.members must be an array');
        }
        var i, i_items=node.members, i_len=node.members.length, item;
        for (i=0; i<i_len; i++) {
            item = node.members[i];
            item.__parent = {
                name: 'members', 
                len: node.members.length
            };
            format(ret, item, options)
        }
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TSTypeOperator
var TSTypeOperator_astNode = {
    name: "TSTypeOperator", 
    ittfTag: ":type-operator", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSTypeOperator_astNode)
format.TSTypeOperator = function(parent, node, options) {
    var f_astNode = TSTypeOperator_astNode;
    var __isText = false;
    // log 'node : TSTypeOperator ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':type-operator', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TSTypeOperator', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property typeAnnotation and append ittfNode to `ret`
    f_astNode.props.push({
        name: "typeAnnotation", 
        descr: "process AST-node-property typeAnnotation and append ittfNode to `ret`"
    })
    if (node.typeAnnotation) {
        if (!node.typeAnnotation.type) {
            throw 'Node typeAnnotation has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.typeAnnotation, options)
    }
    else {
        throw new Error('AST-node-property typeAnnotation undefined: ' + JSON.stringify(node, null, 2));
    }
    if (node.operator) {
        ret.tag = ':' + node.operator;
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TSNonNullExpression
var TSNonNullExpression_astNode = {
    name: "TSNonNullExpression", 
    ittfTag: ":!", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSNonNullExpression_astNode)
format.TSNonNullExpression = function(parent, node, options) {
    var f_astNode = TSNonNullExpression_astNode;
    var __isText = false;
    // log 'node : TSNonNullExpression ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':!', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TSNonNullExpression', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property expression and set it in a var
    var p_expression = null;
    if (typeof(node.expression) !== 'undefined' && node.expression != null) {
        p_expression = {
            textified: null, 
            isText: false, 
            ASTProp: 'expression', 
            children: [
                
            ]
        };
        if (node.expression == null) {
            p_expression.text = "null";
        }
        else {
            if (!node.expression.type) {
                throw 'Node expression has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp expression before format'
            format(p_expression, node.expression, options)
            // log 'f_p_temp expression after format', p_expression.children.length, p_expression
            var expression_comments = extractCommentsIf(p_expression, 1);
            if (p_expression.children.length == 1) {
                p_expression.tag = p_expression.children[0].tag;
                if (!(p_expression.children[0].isText || p_expression.children[0].textified)) {
                    p_expression.name = p_expression.children[0].name;
                    p_expression.source = p_expression.children[0].source;
                    p_expression.children = p_expression.children[0].children;
                }
                else {
                    if (p_expression.children[0].textified) {
                        p_expression.textified = p_expression.children[0].textified;
                    }
                    if (p_expression.children[0].isText) {
                        p_expression.isText = true;
                    }
                    p_expression.name = p_expression.children[0].name;
                    p_expression.source = p_expression.children[0].source;
                    p_expression.children = [];
                }
            }
            if (expression_comments.length > 0) {
                p_expression.children = p_expression.children.concat(expression_comments);
            }
        }
    }
    if (['@expr', '@id', 'literal'].indexOf(p_expression.tag) > -1) {
        ret.name = getNodeText(p_expression);
    }
    else {
        ret.children.push(p_expression)
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TSTypeAliasDeclaration
var TSTypeAliasDeclaration_astNode = {
    name: "TSTypeAliasDeclaration", 
    ittfTag: ":type", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSTypeAliasDeclaration_astNode)
format.TSTypeAliasDeclaration = function(parent, node, options) {
    var f_astNode = TSTypeAliasDeclaration_astNode;
    var __isText = false;
    // log 'node : TSTypeAliasDeclaration ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':type', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TSTypeAliasDeclaration', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // Process AST-node-property id and
    // set the resulting node.name on : ret || parent (cmd: onparent)
    // used mainly for Identifier(s)
    f_astNode.props.push({
        name: "id", 
        onParent: false, 
        iftext: false, 
        descr: "Process AST-node-property id and set the resulting node.name on : ret || parent (cmd: onparent) used mainly for Identifier(s)"
    })
    if (node.id) {
        if (!node.id.type) {
            throw 'Node id has no type: ' + JSON.stringify(node, null, 2);
        }
        var tempid = {
            children: [
                
            ]
        };
        format(tempid, node.id, options)
        /**
            if (tempid .children.length > 0) {
                throw 'node.id must result zero node, returned: ' + tempid.children.length + ' source: ' + options.input.substring(node.start, node.end);
            }
        */
        var appto = false ? parent : ret;
        if (tempid.children.length > 0) {
            appto.name = tempid.children[0].name;
        }
        else {
            appto.name = tempid.name;
        }
    }
    // process AST-node-property typeParameters and append ittfNode to `ret`
    f_astNode.props.push({
        name: "typeParameters", 
        descr: "process AST-node-property typeParameters and append ittfNode to `ret`"
    })
    if (node.typeParameters) {
        if (!node.typeParameters.type) {
            throw 'Node typeParameters has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.typeParameters, options)
    }
    // process AST-node-property typeAnnotation and append ittfNode to `ret`
    f_astNode.props.push({
        name: "typeAnnotation", 
        descr: "process AST-node-property typeAnnotation and append ittfNode to `ret`"
    })
    if (node.typeAnnotation) {
        if (!node.typeAnnotation.type) {
            throw 'Node typeAnnotation has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.typeAnnotation, options)
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TSLiteralType
var TSLiteralType_astNode = {
    name: "TSLiteralType", 
    ittfTag: ":literal", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSLiteralType_astNode)
format.TSLiteralType = function(parent, node, options) {
    var f_astNode = TSLiteralType_astNode;
    var __isText = false;
    // log 'node : TSLiteralType ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':literal', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TSLiteralType', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property literal and set it in a var
    var p_literal = null;
    if (typeof(node.literal) !== 'undefined' && node.literal != null) {
        p_literal = {
            textified: null, 
            isText: false, 
            ASTProp: 'literal', 
            children: [
                
            ]
        };
        if (node.literal == null) {
            p_literal.text = "null";
        }
        else {
            if (!node.literal.type) {
                throw 'Node literal has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp literal before format'
            format(p_literal, node.literal, options)
            // log 'f_p_temp literal after format', p_literal.children.length, p_literal
            var literal_comments = extractCommentsIf(p_literal, 1);
            if (p_literal.children.length == 1) {
                p_literal.tag = p_literal.children[0].tag;
                if (!(p_literal.children[0].isText || p_literal.children[0].textified)) {
                    p_literal.name = p_literal.children[0].name;
                    p_literal.source = p_literal.children[0].source;
                    p_literal.children = p_literal.children[0].children;
                }
                else {
                    if (p_literal.children[0].textified) {
                        p_literal.textified = p_literal.children[0].textified;
                    }
                    if (p_literal.children[0].isText) {
                        p_literal.isText = true;
                    }
                    p_literal.name = p_literal.children[0].name;
                    p_literal.source = p_literal.children[0].source;
                    p_literal.children = [];
                }
            }
            if (literal_comments.length > 0) {
                p_literal.children = p_literal.children.concat(literal_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property literal undefined: ' + JSON.stringify(node, null, 2));
    }
    ret.name = p_literal.name;
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TSConditionalType
var TSConditionalType_astNode = {
    name: "TSConditionalType", 
    ittfTag: ":iif", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSConditionalType_astNode)
format.TSConditionalType = function(parent, node, options) {
    var f_astNode = TSConditionalType_astNode;
    var __isText = false;
    // log 'node : TSConditionalType ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':iif', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TSConditionalType', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property checkType and set it in a var
    var p_checkType = null;
    if (typeof(node.checkType) !== 'undefined' && node.checkType != null) {
        p_checkType = {
            textified: null, 
            isText: false, 
            ASTProp: 'checkType', 
            children: [
                
            ]
        };
        if (node.checkType == null) {
            p_checkType.text = "null";
        }
        else {
            if (!node.checkType.type) {
                throw 'Node checkType has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp checkType before format'
            format(p_checkType, node.checkType, options)
            // log 'f_p_temp checkType after format', p_checkType.children.length, p_checkType
            var checkType_comments = extractCommentsIf(p_checkType, 1);
            if (p_checkType.children.length == 1) {
                p_checkType.tag = p_checkType.children[0].tag;
                if (!(p_checkType.children[0].isText || p_checkType.children[0].textified)) {
                    p_checkType.name = p_checkType.children[0].name;
                    p_checkType.source = p_checkType.children[0].source;
                    p_checkType.children = p_checkType.children[0].children;
                }
                else {
                    if (p_checkType.children[0].textified) {
                        p_checkType.textified = p_checkType.children[0].textified;
                    }
                    if (p_checkType.children[0].isText) {
                        p_checkType.isText = true;
                    }
                    p_checkType.name = p_checkType.children[0].name;
                    p_checkType.source = p_checkType.children[0].source;
                    p_checkType.children = [];
                }
            }
            if (checkType_comments.length > 0) {
                p_checkType.children = p_checkType.children.concat(checkType_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property checkType undefined: ' + JSON.stringify(node, null, 2));
    }
    // process AST-node-property extendsType and set it in a var
    var p_extendsType = null;
    if (typeof(node.extendsType) !== 'undefined' && node.extendsType != null) {
        p_extendsType = {
            textified: null, 
            isText: false, 
            ASTProp: 'extendsType', 
            children: [
                
            ]
        };
        if (node.extendsType == null) {
            p_extendsType.text = "null";
        }
        else {
            if (!node.extendsType.type) {
                throw 'Node extendsType has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp extendsType before format'
            format(p_extendsType, node.extendsType, options)
            // log 'f_p_temp extendsType after format', p_extendsType.children.length, p_extendsType
            var extendsType_comments = extractCommentsIf(p_extendsType, 1);
            if (p_extendsType.children.length == 1) {
                p_extendsType.tag = p_extendsType.children[0].tag;
                if (!(p_extendsType.children[0].isText || p_extendsType.children[0].textified)) {
                    p_extendsType.name = p_extendsType.children[0].name;
                    p_extendsType.source = p_extendsType.children[0].source;
                    p_extendsType.children = p_extendsType.children[0].children;
                }
                else {
                    if (p_extendsType.children[0].textified) {
                        p_extendsType.textified = p_extendsType.children[0].textified;
                    }
                    if (p_extendsType.children[0].isText) {
                        p_extendsType.isText = true;
                    }
                    p_extendsType.name = p_extendsType.children[0].name;
                    p_extendsType.source = p_extendsType.children[0].source;
                    p_extendsType.children = [];
                }
            }
            if (extendsType_comments.length > 0) {
                p_extendsType.children = p_extendsType.children.concat(extendsType_comments);
            }
        }
    }
    // process AST-node-property trueType and set it in a var
    var p_trueType = null;
    if (typeof(node.trueType) !== 'undefined' && node.trueType != null) {
        p_trueType = {
            textified: null, 
            isText: false, 
            ASTProp: 'trueType', 
            children: [
                
            ]
        };
        if (node.trueType == null) {
            p_trueType.text = "null";
        }
        else {
            if (!node.trueType.type) {
                throw 'Node trueType has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp trueType before format'
            format(p_trueType, node.trueType, options)
            // log 'f_p_temp trueType after format', p_trueType.children.length, p_trueType
            var trueType_comments = extractCommentsIf(p_trueType, 1);
            if (p_trueType.children.length == 1) {
                p_trueType.tag = p_trueType.children[0].tag;
                if (!(p_trueType.children[0].isText || p_trueType.children[0].textified)) {
                    p_trueType.name = p_trueType.children[0].name;
                    p_trueType.source = p_trueType.children[0].source;
                    p_trueType.children = p_trueType.children[0].children;
                }
                else {
                    if (p_trueType.children[0].textified) {
                        p_trueType.textified = p_trueType.children[0].textified;
                    }
                    if (p_trueType.children[0].isText) {
                        p_trueType.isText = true;
                    }
                    p_trueType.name = p_trueType.children[0].name;
                    p_trueType.source = p_trueType.children[0].source;
                    p_trueType.children = [];
                }
            }
            if (trueType_comments.length > 0) {
                p_trueType.children = p_trueType.children.concat(trueType_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property trueType undefined: ' + JSON.stringify(node, null, 2));
    }
    // process AST-node-property falseType and set it in a var
    var p_falseType = null;
    if (typeof(node.falseType) !== 'undefined' && node.falseType != null) {
        p_falseType = {
            textified: null, 
            isText: false, 
            ASTProp: 'falseType', 
            children: [
                
            ]
        };
        if (node.falseType == null) {
            p_falseType.text = "null";
        }
        else {
            if (!node.falseType.type) {
                throw 'Node falseType has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp falseType before format'
            format(p_falseType, node.falseType, options)
            // log 'f_p_temp falseType after format', p_falseType.children.length, p_falseType
            var falseType_comments = extractCommentsIf(p_falseType, 1);
            if (p_falseType.children.length == 1) {
                p_falseType.tag = p_falseType.children[0].tag;
                if (!(p_falseType.children[0].isText || p_falseType.children[0].textified)) {
                    p_falseType.name = p_falseType.children[0].name;
                    p_falseType.source = p_falseType.children[0].source;
                    p_falseType.children = p_falseType.children[0].children;
                }
                else {
                    if (p_falseType.children[0].textified) {
                        p_falseType.textified = p_falseType.children[0].textified;
                    }
                    if (p_falseType.children[0].isText) {
                        p_falseType.isText = true;
                    }
                    p_falseType.name = p_falseType.children[0].name;
                    p_falseType.source = p_falseType.children[0].source;
                    p_falseType.children = [];
                }
            }
            if (falseType_comments.length > 0) {
                p_falseType.children = p_falseType.children.concat(falseType_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property falseType undefined: ' + JSON.stringify(node, null, 2));
    }
    ret.children.push({
        tag: ':check', 
        name: '', 
        children: [
            p_checkType
        ]
    })
    ret.children.push({
        tag: ':extends', 
        name: '', 
        children: [
            p_extendsType
        ]
    })
    ret.children.push({
        tag: ':then', 
        name: '', 
        children: [
            p_trueType
        ]
    })
    ret.children.push({
        tag: ':else', 
        name: '', 
        children: [
            p_falseType
        ]
    })
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TSMappedType
var TSMappedType_astNode = {
    name: "TSMappedType", 
    ittfTag: ":mapped", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSMappedType_astNode)
format.TSMappedType = function(parent, node, options) {
    var f_astNode = TSMappedType_astNode;
    var __isText = false;
    // log 'node : TSMappedType ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':mapped', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TSMappedType', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    if (node.optional) {
        ret.children.push({
            tag: ':optional', 
            name: '', 
            children: [
                
            ]
        })
    }
    // process AST-node-property typeParameter and append ittfNode to `ret`
    f_astNode.props.push({
        name: "typeParameter", 
        descr: "process AST-node-property typeParameter and append ittfNode to `ret`"
    })
    if (node.typeParameter) {
        if (!node.typeParameter.type) {
            throw 'Node typeParameter has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.typeParameter, options)
    }
    // process AST-node-property typeAnnotation and append ittfNode to `ret`
    f_astNode.props.push({
        name: "typeAnnotation", 
        descr: "process AST-node-property typeAnnotation and append ittfNode to `ret`"
    })
    if (node.typeAnnotation) {
        if (!node.typeAnnotation.type) {
            throw 'Node typeAnnotation has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.typeAnnotation, options)
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TSTypeQuery
var TSTypeQuery_astNode = {
    name: "TSTypeQuery", 
    ittfTag: ":typeof", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSTypeQuery_astNode)
format.TSTypeQuery = function(parent, node, options) {
    var f_astNode = TSTypeQuery_astNode;
    var __isText = false;
    // log 'node : TSTypeQuery ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':typeof', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TSTypeQuery', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property exprName and set it in a var
    var p_exprName = null;
    if (typeof(node.exprName) !== 'undefined' && node.exprName != null) {
        p_exprName = {
            textified: null, 
            isText: false, 
            ASTProp: 'exprName', 
            children: [
                
            ]
        };
        if (node.exprName == null) {
            p_exprName.text = "null";
        }
        else {
            if (!node.exprName.type) {
                throw 'Node exprName has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp exprName before format'
            format(p_exprName, node.exprName, options)
            // log 'f_p_temp exprName after format', p_exprName.children.length, p_exprName
            var exprName_comments = extractCommentsIf(p_exprName, 1);
            if (p_exprName.children.length == 1) {
                p_exprName.tag = p_exprName.children[0].tag;
                if (!(p_exprName.children[0].isText || p_exprName.children[0].textified)) {
                    p_exprName.name = p_exprName.children[0].name;
                    p_exprName.source = p_exprName.children[0].source;
                    p_exprName.children = p_exprName.children[0].children;
                }
                else {
                    if (p_exprName.children[0].textified) {
                        p_exprName.textified = p_exprName.children[0].textified;
                    }
                    if (p_exprName.children[0].isText) {
                        p_exprName.isText = true;
                    }
                    p_exprName.name = p_exprName.children[0].name;
                    p_exprName.source = p_exprName.children[0].source;
                    p_exprName.children = [];
                }
            }
            if (exprName_comments.length > 0) {
                p_exprName.children = p_exprName.children.concat(exprName_comments);
            }
        }
    }
    if (p_exprName.tag === '@id') {
        ret.name = p_exprName.name;
    }
    else if (isTextualNode(p_exprName)) {
        ret.name = getNodeText(p_exprName);
    }
    else {
        ret.children.push(p_exprName)
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TSInferType
var TSInferType_astNode = {
    name: "TSInferType", 
    ittfTag: ":infer", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSInferType_astNode)
format.TSInferType = function(parent, node, options) {
    var f_astNode = TSInferType_astNode;
    var __isText = false;
    // log 'node : TSInferType ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':infer', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TSInferType', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property typeParameter and append ittfNode to `ret`
    f_astNode.props.push({
        name: "typeParameter", 
        descr: "process AST-node-property typeParameter and append ittfNode to `ret`"
    })
    if (node.typeParameter) {
        if (!node.typeParameter.type) {
            throw 'Node typeParameter has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.typeParameter, options)
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TSParenthesizedType
var TSParenthesizedType_astNode = {
    name: "TSParenthesizedType", 
    ittfTag: ":paren", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSParenthesizedType_astNode)
format.TSParenthesizedType = function(parent, node, options) {
    var f_astNode = TSParenthesizedType_astNode;
    var __isText = false;
    // log 'node : TSParenthesizedType ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':paren', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TSParenthesizedType', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property typeAnnotation and append ittfNode to `ret`
    f_astNode.props.push({
        name: "typeAnnotation", 
        descr: "process AST-node-property typeAnnotation and append ittfNode to `ret`"
    })
    if (node.typeAnnotation) {
        if (!node.typeAnnotation.type) {
            throw 'Node typeAnnotation has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.typeAnnotation, options)
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TSDeclareMethod
var TSDeclareMethod_astNode = {
    name: "TSDeclareMethod", 
    ittfTag: ":m", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSDeclareMethod_astNode)
format.TSDeclareMethod = function(parent, node, options) {
    var f_astNode = TSDeclareMethod_astNode;
    var __isText = false;
    // log 'node : TSDeclareMethod ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':m', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TSDeclareMethod', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // Process AST-node-property key and
    // set the resulting node.name on : ret || parent (cmd: onparent)
    // used mainly for Identifier(s)
    f_astNode.props.push({
        name: "key", 
        onParent: false, 
        iftext: false, 
        descr: "Process AST-node-property key and set the resulting node.name on : ret || parent (cmd: onparent) used mainly for Identifier(s)"
    })
    if (node.key) {
        if (!node.key.type) {
            throw 'Node key has no type: ' + JSON.stringify(node, null, 2);
        }
        var tempkey = {
            children: [
                
            ]
        };
        format(tempkey, node.key, options)
        /**
            if (tempkey .children.length > 0) {
                throw 'node.key must result zero node, returned: ' + tempkey.children.length + ' source: ' + options.input.substring(node.start, node.end);
            }
        */
        var appto = false ? parent : ret;
        if (tempkey.children.length > 0) {
            appto.name = tempkey.children[0].name;
        }
        else {
            appto.name = tempkey.name;
        }
    }
    // TODO
    // s(kind
    // log 'node.abstract', node.abstract
    if (!!node.abstract == true) {
        ret.children.push({
            tag: ':abstract', 
            children: [
                
            ]
        })
    }
    // log 'node.static', node.static
    if (!!node.static == true) {
        ret.children.push({
            tag: 'static', 
            children: [
                
            ]
        })
    }
    // TODO
    // b( computed
    // process AST-node-property typeParameters and append ittfNode to `ret`
    f_astNode.props.push({
        name: "typeParameters", 
        descr: "process AST-node-property typeParameters and append ittfNode to `ret`"
    })
    if (node.typeParameters) {
        if (!node.typeParameters.type) {
            throw 'Node typeParameters has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.typeParameters, options)
    }
    // process AST-node-property-collection params and
    // embed its array of nodes in a new tag
    f_astNode.props.push({
        name: "params", 
        tag: "params", 
        descr: "# process AST-node-property-collection params and embed its array of nodes in a new tag"
    })
    if (node.params) {
        if (typeof node.params.length === 'undefined') {
            throw new Error('Property node.params must be an array');
        }
        if (node.params.length > 0) {
            var tempparams = {
                tag: 'params', 
                ASTProp: 'params', 
                children: [
                    
                ]
            };
            var i, i_items=node.params, i_len=node.params.length, item;
            for (i=0; i<i_len; i++) {
                item = node.params[i];
                item.__parent = {
                    name: 'params', 
                    len: node.params.length
                };
                format(tempparams, item, options)
            }
            ret.children.push(tempparams)
        }
    }
    processParams(ret);
    // process AST-node-property returnType and set it in a var
    var p_returnType = null;
    if (typeof(node.returnType) !== 'undefined' && node.returnType != null) {
        p_returnType = {
            textified: null, 
            isText: false, 
            ASTProp: 'returnType', 
            children: [
                
            ]
        };
        if (node.returnType == null) {
            p_returnType.text = "null";
        }
        else {
            if (!node.returnType.type) {
                throw 'Node returnType has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp returnType before format'
            format(p_returnType, node.returnType, options)
            // log 'f_p_temp returnType after format', p_returnType.children.length, p_returnType
            var returnType_comments = extractCommentsIf(p_returnType, 1);
            if (p_returnType.children.length == 1) {
                p_returnType.tag = p_returnType.children[0].tag;
                if (!(p_returnType.children[0].isText || p_returnType.children[0].textified)) {
                    p_returnType.name = p_returnType.children[0].name;
                    p_returnType.source = p_returnType.children[0].source;
                    p_returnType.children = p_returnType.children[0].children;
                }
                else {
                    if (p_returnType.children[0].textified) {
                        p_returnType.textified = p_returnType.children[0].textified;
                    }
                    if (p_returnType.children[0].isText) {
                        p_returnType.isText = true;
                    }
                    p_returnType.name = p_returnType.children[0].name;
                    p_returnType.source = p_returnType.children[0].source;
                    p_returnType.children = [];
                }
            }
            if (returnType_comments.length > 0) {
                p_returnType.children = p_returnType.children.concat(returnType_comments);
            }
        }
    }
    if (p_returnType) {
        p_returnType = {
            tag: ':return', 
            children: [
                p_returnType
            ]
        };
        ret.children.push(p_returnType);
    }
    if (node.async) {
        ret.children.push({
            tag: 'async', 
            name: '', 
            children: [
                
            ]
        })
    }
    if (node.generator) {
        ret.children.push({
            tag: 'generator', 
            name: '', 
            children: [
                
            ]
        })
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TSQualifiedName
var TSQualifiedName_astNode = {
    name: "TSQualifiedName", 
    ittfTag: ":qname", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSQualifiedName_astNode)
format.TSQualifiedName = function(parent, node, options) {
    var f_astNode = TSQualifiedName_astNode;
    var __isText = false;
    // log 'node : TSQualifiedName ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':qname', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TSQualifiedName', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property left and set it in a var
    var p_left = null;
    if (typeof(node.left) !== 'undefined' && node.left != null) {
        p_left = {
            textified: null, 
            isText: false, 
            ASTProp: 'left', 
            children: [
                
            ]
        };
        if (node.left == null) {
            p_left.text = "null";
        }
        else {
            if (!node.left.type) {
                throw 'Node left has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp left before format'
            format(p_left, node.left, options)
            // log 'f_p_temp left after format', p_left.children.length, p_left
            var left_comments = extractCommentsIf(p_left, 1);
            if (p_left.children.length == 1) {
                p_left.tag = p_left.children[0].tag;
                if (!(p_left.children[0].isText || p_left.children[0].textified)) {
                    p_left.name = p_left.children[0].name;
                    p_left.source = p_left.children[0].source;
                    p_left.children = p_left.children[0].children;
                }
                else {
                    if (p_left.children[0].textified) {
                        p_left.textified = p_left.children[0].textified;
                    }
                    if (p_left.children[0].isText) {
                        p_left.isText = true;
                    }
                    p_left.name = p_left.children[0].name;
                    p_left.source = p_left.children[0].source;
                    p_left.children = [];
                }
            }
            if (left_comments.length > 0) {
                p_left.children = p_left.children.concat(left_comments);
            }
        }
    }
    // process AST-node-property right and set it in a var
    var p_right = null;
    if (typeof(node.right) !== 'undefined' && node.right != null) {
        p_right = {
            textified: null, 
            isText: false, 
            ASTProp: 'right', 
            children: [
                
            ]
        };
        if (node.right == null) {
            p_right.text = "null";
        }
        else {
            if (!node.right.type) {
                throw 'Node right has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp right before format'
            format(p_right, node.right, options)
            // log 'f_p_temp right after format', p_right.children.length, p_right
            var right_comments = extractCommentsIf(p_right, 1);
            if (p_right.children.length == 1) {
                p_right.tag = p_right.children[0].tag;
                if (!(p_right.children[0].isText || p_right.children[0].textified)) {
                    p_right.name = p_right.children[0].name;
                    p_right.source = p_right.children[0].source;
                    p_right.children = p_right.children[0].children;
                }
                else {
                    if (p_right.children[0].textified) {
                        p_right.textified = p_right.children[0].textified;
                    }
                    if (p_right.children[0].isText) {
                        p_right.isText = true;
                    }
                    p_right.name = p_right.children[0].name;
                    p_right.source = p_right.children[0].source;
                    p_right.children = [];
                }
            }
            if (right_comments.length > 0) {
                p_right.children = p_right.children.concat(right_comments);
            }
        }
    }
    if (isTextualNode(p_left)) {
        ret.name = getNodeText(p_left);
        if (isTextualNode(p_right)) {
            ret.name += '.' + getNodeText(p_right);
            ret.textified = ret.name;
            ret.isText = true;
        }
        else {
            ret.children.push(p_right)
        }
    }
    else {
        ret.children.push(p_left)
        ret.children.push(p_right)
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TSExportAssignment
var TSExportAssignment_astNode = {
    name: "TSExportAssignment", 
    ittfTag: ":export", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSExportAssignment_astNode)
format.TSExportAssignment = function(parent, node, options) {
    var f_astNode = TSExportAssignment_astNode;
    var __isText = false;
    // log 'node : TSExportAssignment ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':export', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TSExportAssignment', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property expression and set it in a var
    var p_expression = null;
    if (typeof(node.expression) !== 'undefined' && node.expression != null) {
        p_expression = {
            textified: null, 
            isText: false, 
            ASTProp: 'expression', 
            children: [
                
            ]
        };
        if (node.expression == null) {
            p_expression.text = "null";
        }
        else {
            if (!node.expression.type) {
                throw 'Node expression has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp expression before format'
            format(p_expression, node.expression, options)
            // log 'f_p_temp expression after format', p_expression.children.length, p_expression
            var expression_comments = extractCommentsIf(p_expression, 1);
            if (p_expression.children.length == 1) {
                p_expression.tag = p_expression.children[0].tag;
                if (!(p_expression.children[0].isText || p_expression.children[0].textified)) {
                    p_expression.name = p_expression.children[0].name;
                    p_expression.source = p_expression.children[0].source;
                    p_expression.children = p_expression.children[0].children;
                }
                else {
                    if (p_expression.children[0].textified) {
                        p_expression.textified = p_expression.children[0].textified;
                    }
                    if (p_expression.children[0].isText) {
                        p_expression.isText = true;
                    }
                    p_expression.name = p_expression.children[0].name;
                    p_expression.source = p_expression.children[0].source;
                    p_expression.children = [];
                }
            }
            if (expression_comments.length > 0) {
                p_expression.children = p_expression.children.concat(expression_comments);
            }
        }
    }
    if (['@expr', '@id', 'literal'].indexOf(p_expression.tag) > -1) {
        ret.name = getNodeText(p_expression);
    }
    else {
        ret.children.push(p_expression)
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TSImportType
var TSImportType_astNode = {
    name: "TSImportType", 
    ittfTag: ":import-type", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSImportType_astNode)
format.TSImportType = function(parent, node, options) {
    var f_astNode = TSImportType_astNode;
    var __isText = false;
    // log 'node : TSImportType ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':import-type', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TSImportType', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property argument and set it in a var
    var p_argument = null;
    if (typeof(node.argument) !== 'undefined' && node.argument != null) {
        p_argument = {
            textified: null, 
            isText: false, 
            ASTProp: 'argument', 
            children: [
                
            ]
        };
        if (node.argument == null) {
            p_argument.text = "null";
        }
        else {
            if (!node.argument.type) {
                throw 'Node argument has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp argument before format'
            format(p_argument, node.argument, options)
            // log 'f_p_temp argument after format', p_argument.children.length, p_argument
            var argument_comments = extractCommentsIf(p_argument, 1);
            if (p_argument.children.length == 1) {
                p_argument.tag = p_argument.children[0].tag;
                if (!(p_argument.children[0].isText || p_argument.children[0].textified)) {
                    p_argument.name = p_argument.children[0].name;
                    p_argument.source = p_argument.children[0].source;
                    p_argument.children = p_argument.children[0].children;
                }
                else {
                    if (p_argument.children[0].textified) {
                        p_argument.textified = p_argument.children[0].textified;
                    }
                    if (p_argument.children[0].isText) {
                        p_argument.isText = true;
                    }
                    p_argument.name = p_argument.children[0].name;
                    p_argument.source = p_argument.children[0].source;
                    p_argument.children = [];
                }
            }
            if (argument_comments.length > 0) {
                p_argument.children = p_argument.children.concat(argument_comments);
            }
        }
    }
    else {
        throw new Error('AST-node-property argument undefined: ' + JSON.stringify(node, null, 2));
    }
    if (isTextualNode(p_argument)) {
        ret.textified = 'import(' + getNodeText(p_argument) + ')';
        ret.isText = true;
    }
    else {
        ret.children.push(p_argument)
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TSImportEqualsDeclaration
var TSImportEqualsDeclaration_astNode = {
    name: "TSImportEqualsDeclaration", 
    ittfTag: ":import", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSImportEqualsDeclaration_astNode)
format.TSImportEqualsDeclaration = function(parent, node, options) {
    var f_astNode = TSImportEqualsDeclaration_astNode;
    var __isText = false;
    // log 'node : TSImportEqualsDeclaration ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':import', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TSImportEqualsDeclaration', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // Process AST-node-property id and
    // set the resulting node.name on : ret || parent (cmd: onparent)
    // used mainly for Identifier(s)
    f_astNode.props.push({
        name: "id", 
        onParent: false, 
        iftext: false, 
        descr: "Process AST-node-property id and set the resulting node.name on : ret || parent (cmd: onparent) used mainly for Identifier(s)"
    })
    if (node.id) {
        if (!node.id.type) {
            throw 'Node id has no type: ' + JSON.stringify(node, null, 2);
        }
        var tempid = {
            children: [
                
            ]
        };
        format(tempid, node.id, options)
        /**
            if (tempid .children.length > 0) {
                throw 'node.id must result zero node, returned: ' + tempid.children.length + ' source: ' + options.input.substring(node.start, node.end);
            }
        */
        var appto = false ? parent : ret;
        if (tempid.children.length > 0) {
            appto.name = tempid.children[0].name;
        }
        else {
            appto.name = tempid.name;
        }
    }
    // log 'node.isExport', node.isExport
    if (!!node.isExport == true) {
        ret.children.push({
            tag: 'isExport', 
            children: [
                
            ]
        })
    }
    // process AST-node-property moduleReference and append ittfNode to `ret`
    f_astNode.props.push({
        name: "moduleReference", 
        descr: "process AST-node-property moduleReference and append ittfNode to `ret`"
    })
    if (node.moduleReference) {
        if (!node.moduleReference.type) {
            throw 'Node moduleReference has no type: ' + JSON.stringify(node, null, 2);
        }
        format(ret, node.moduleReference, options)
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TSNamespaceExportDeclaration
var TSNamespaceExportDeclaration_astNode = {
    name: "TSNamespaceExportDeclaration", 
    ittfTag: ":export-ns", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSNamespaceExportDeclaration_astNode)
format.TSNamespaceExportDeclaration = function(parent, node, options) {
    var f_astNode = TSNamespaceExportDeclaration_astNode;
    var __isText = false;
    // log 'node : TSNamespaceExportDeclaration ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':export-ns', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TSNamespaceExportDeclaration', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // Process AST-node-property id and
    // set the resulting node.name on : ret || parent (cmd: onparent)
    // used mainly for Identifier(s)
    f_astNode.props.push({
        name: "id", 
        onParent: false, 
        iftext: false, 
        descr: "Process AST-node-property id and set the resulting node.name on : ret || parent (cmd: onparent) used mainly for Identifier(s)"
    })
    if (node.id) {
        if (!node.id.type) {
            throw 'Node id has no type: ' + JSON.stringify(node, null, 2);
        }
        var tempid = {
            children: [
                
            ]
        };
        format(tempid, node.id, options)
        /**
            if (tempid .children.length > 0) {
                throw 'node.id must result zero node, returned: ' + tempid.children.length + ' source: ' + options.input.substring(node.start, node.end);
            }
        */
        var appto = false ? parent : ret;
        if (tempid.children.length > 0) {
            appto.name = tempid.children[0].name;
        }
        else {
            appto.name = tempid.name;
        }
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
// process AST node TSExternalModuleReference
var TSExternalModuleReference_astNode = {
    name: "TSExternalModuleReference", 
    ittfTag: ":require", 
    props: [
        
    ]
};
wzDocs.AstgNodes.push(TSExternalModuleReference_astNode)
format.TSExternalModuleReference = function(parent, node, options) {
    var f_astNode = TSExternalModuleReference_astNode;
    var __isText = false;
    // log 'node : TSExternalModuleReference ----------------------------------------- parent ittf tag : ', parent.tag
    var i, i_items=Object.keys(node), i_len=Object.keys(node).length, item;
    for (i=0; i<i_len; i++) {
        item = Object.keys(node)[i];
        if (['type', 'start', 'end', 'loc'].indexOf(item) < 0) {
            if (verify.isNotEmpty(node[item])) {
                // log 'property', item, node[item]
            }
            else {
                // log 'property', item
            }
        }
    }
    var ret = {
        tag: ':require', 
        name: '', 
        isText: false, 
        textified: null, 
        AST: 'TSExternalModuleReference', 
        source: options.input.substring(node.start, node.end), 
        children: [
            
        ]
    };
    // process AST-node-property expression and set it in a var
    var p_expression = null;
    if (typeof(node.expression) !== 'undefined' && node.expression != null) {
        p_expression = {
            textified: null, 
            isText: false, 
            ASTProp: 'expression', 
            children: [
                
            ]
        };
        if (node.expression == null) {
            p_expression.text = "null";
        }
        else {
            if (!node.expression.type) {
                throw 'Node expression has no type: ' + JSON.stringify(node, null, 2);
            }
            // log 'f_p_temp expression before format'
            format(p_expression, node.expression, options)
            // log 'f_p_temp expression after format', p_expression.children.length, p_expression
            var expression_comments = extractCommentsIf(p_expression, 1);
            if (p_expression.children.length == 1) {
                p_expression.tag = p_expression.children[0].tag;
                if (!(p_expression.children[0].isText || p_expression.children[0].textified)) {
                    p_expression.name = p_expression.children[0].name;
                    p_expression.source = p_expression.children[0].source;
                    p_expression.children = p_expression.children[0].children;
                }
                else {
                    if (p_expression.children[0].textified) {
                        p_expression.textified = p_expression.children[0].textified;
                    }
                    if (p_expression.children[0].isText) {
                        p_expression.isText = true;
                    }
                    p_expression.name = p_expression.children[0].name;
                    p_expression.source = p_expression.children[0].source;
                    p_expression.children = [];
                }
            }
            if (expression_comments.length > 0) {
                p_expression.children = p_expression.children.concat(expression_comments);
            }
        }
    }
    if (['@expr', '@id', 'literal'].indexOf(p_expression.tag) > -1) {
        ret.name = getNodeText(p_expression);
    }
    else {
        ret.children.push(p_expression)
    }
    if (ret != null) {
        if (__isText) {
            ret.textified = ret.name;
        }
        if (typeof __skip === 'undefined' || __skip == false) {
            // log '### add ', ret.tag , 'to', parent.tag
            processLeadingComments(node, parent, options);
            parent.children.push(ret);
            processTrailingComments(node, parent, options);
        }
    }
};
var md = module.exports = {};
function splitComments(ret) {
    var a = [];
    var b = [];
    var i, i_items=ret.children, i_len=ret.children.length, item;
    for (i=0; i<i_len; i++) {
        item = ret.children[i];
        if (item.tag == '#') {
            b.push(item);
        }
        else {
            a.push(item);
        }
    }
    return [a,b];
}
function extractCommentsIf(ret, len) {
    var a = [];
    var b = [];
    var i, i_items=ret.children, i_len=ret.children.length, item;
    for (i=0; i<i_len; i++) {
        item = ret.children[i];
        if (item.tag == '#') {
            b.push(item);
        }
        else {
            a.push(item);
        }
    }
    if (a.length == len) {
        ret.children = a;
        return b;
    }
    else {
        return [];
    }
}
function processLeadingComments(node, ittfNode, options) {
    processComments(node.leadingComments, node, ittfNode, options, true)
}
function processTrailingComments(node, ittfNode, options) {
    processComments(node.trailingComments, node, ittfNode, options, false)
}
function processComments(comments, node, ittfNode, options, leading) {
    if (verify.isArray(comments) && comments.length > 0) {
        var hb;
        var i, i_items=comments, i_len=comments.length, item;
        for (i=0; i<i_len; i++) {
            item = comments[i];
            // log 'processComments', item
            if (item.type === 'CommentLine') {
                if (false) {
                    if (options.commentManager.checkWritten(item) == true) {
                        options.commentManager.removeWritten(item);
                    }
                    console.log('processComments. calling, codeReplacer.restoreInside', item.value);
                    var value = codeReplacer.restoreInside('""' + item.value, options.replaceds);
                    hb = {
                        tag: '#', 
                        name: value, 
                        children: [
                            
                        ]
                    };
                    ittfNode.children.push(hb)
                }
                else {
                    if (options.commentManager.checkWritten(item) == true) {
                        options.commentManager.removeWritten(item);
                    }
                    hb = {
                        tag: '#', 
                        name: item.value, 
                        children: [
                            
                        ]
                    };
                    ittfNode.children.push(hb)
                }
                options.commentManager.addWritten(item, ittfNode.children, hb);
            }
            else if (item.type === 'CommentBlock') {
                if (false) {
                    // log 'codeReplacer.isKey', true
                    if (options.commentManager.checkWritten(item) == true) {
                        options.commentManager.removeWritten(item);
                    }
                    hb = {
                        tag: '{{', 
                        name: codeReplacer.restore('""'+item.value, options.replaceds), 
                        children: [
                            
                        ]
                    };
                    ittfNode.children.push(hb)
                }
                else {
                    // log 'codeReplacer.isKey', false
                    if (options.commentManager.checkWritten(item) == true) {
                        options.commentManager.removeWritten(item);
                    }
                    var ss = item.value.split(/\r\n|\r|\n/);
                    hb = {
                        tag: '#', 
                        children: [
                            
                        ]
                    };
                    var j, j_items=ss, j_len=ss.length, s;
                    for (j=0; j<j_len; j++) {
                        s = ss[j];
                        hb.children.push({
                            tag: '#', 
                            name: s, 
                            children: [
                                
                            ]
                        })
                    }
                    ittfNode.children.push(hb);
                }
                options.commentManager.addWritten(item, ittfNode.children, hb);
            }
        }
    }
}
function processParams(ittfNode) {
    var pos = getChildPosByTag(ittfNode, 'params');
    var temp = [];
    var i, i_items=ittfNode.children, i_len=ittfNode.children.length, item;
    for (i=0; i<i_len; i++) {
        item = ittfNode.children[i];
        if (pos == i) {
            var j, j_items=item.children, j_len=item.children.length, p;
            for (j=0; j<j_len; j++) {
                p = item.children[j];
                var plen = childrenLengthNoProps(p);
                // log 'processParams. p.tag', p.tag, 'plen', plen, JSON.stringify(p, null, 2)
                if (p.tag !== '{' && p.tag !== '[') {
                    if (isTextualNode(p)) {
                        p.tag = 'param';
                        p.name = getNodeText(p);
                    }
                    else if (verify.isNotEmpty(p.name)) {
                        p.tag = 'param';
                    }
                    else {
                        p.tag = 'param';
                    }
                    /**
                        else {
                            throw new Error('processParams.error. Param must be a textual or an ObjectPattern. Node:' + JSON.stringify(ittfNode));
                        }
                    */
                }
                if (plen == 1 && ( p.children[0].tag === ':|' || p.children[0].tag === ':&' )) {
                    // union and intersect
                    var temp_children = p.children[0];
                    p.children = [];
                    var k, k_items=temp_children.children, k_len=temp_children.children.length, ui;
                    for (k=0; k<k_len; k++) {
                        ui = temp_children.children[k];
                        ui.tag = temp_children.tag === ':|' ? '|' : '&';
                        p.children.push(ui)
                    }
                }
                if (plen == 2) {
                    console.log('processParams', 'plen', plen, 'p.children[0].tag', p.children[0].tag, 'p.children[1].tag', p.children[1].tag);
                    if (['@id', '@expr', 'literal'].indexOf(p.children[1].tag) > -1) {
                        console.log(111);
                        // has simple default value (is AssignmentPattern)
                        p.name = p.children[0].name;
                        if (p.children[0].children.length > 0) {
                            p.children[0].tag = p.children[0].children[0].tag;
                            p.children[0].name = '';
                            p.children[0].children = [];
                        }
                        p.children[1].tag = '=';
                    }
                    else {
                        console.log(112);
                        if (p.AST === 'AssignmentPattern') {
                            // has complex default value (is AssignmentPattern)
                            if (['@id', '@expr', 'literal'].indexOf(p.children[0].tag) > -1) {
                                p.name = p.children[0].name;
                                p.children = [p.children[0].children[0], p.children[1]];
                            }
                            p.children[1] = {
                                tag: '=', 
                                name: '', 
                                children: [
                                    p.children[1]
                                ]
                            };
                        }
                    }
                }
                temp.push(p);
            }
        }
        else {
            temp.push(item);
        }
    }
    // log 'wizzifiers.js.processParams.result', JSON.stringify(temp, null, 2)
    ittfNode.children = temp;
}
function getNodeText(ittfNode) {
    return ittfNode.textified || ittfNode.name;
}
function isTextualNode(ittfNode) {
    return ittfNode && (ittfNode.isText || ittfNode.textified) && ittfNode.children.length == 0;
}
function isTextualCommentedNode(ittfNode) {
    var i, i_items=ittfNode.children, i_len=ittfNode.children.length, item;
    for (i=0; i<i_len; i++) {
        item = ittfNode.children[i];
        if (item.tag != '#') {
            return false;
        }
    }
    return ittfNode && (ittfNode.isText || ittfNode.textified);
}
function setOrInlineIfTextualNode(ret, ittfNode, ittfTag) {
    if (isTextualNode(ittfNode)) {
        ret.children.push({
            tag: ittfTag, 
            name: getNodeText(ittfNode), 
            children: [
                
            ]
        })
    }
    else if (isTextualCommentedNode(ittfNode)) {
        ret.children.push({
            tag: ittfTag, 
            name: getNodeText(ittfNode), 
            children: ittfNode.children
        })
    }
    else {
        ret.children.push({
            tag: ittfTag, 
            children: [
                ittfNode
            ]
        })
    }
}
function isTextualChildByTag(ittfNode, tag) {
    var item = getChildByTag(ittfNode, tag);
    return item && (item.isText || item.textified);
}
function replaceChildTag(ittfNode, oldTag, newTag) {
    var item = getChildByTag(ittfNode, oldTag);
    item.tag = newTag;
}
function removeChildByTag(ittfNode, tag) {
    var temp = [];
    var i, i_items=ittfNode.children, i_len=ittfNode.children.length, item;
    for (i=0; i<i_len; i++) {
        item = ittfNode.children[i];
        if (item.tag !== tag) {
            temp.push(item);
        }
    }
    ittfNode.children = temp;
}
function getChildByTag(ittfNode, tag) {
    var i, i_items=ittfNode.children, i_len=ittfNode.children.length, item;
    for (i=0; i<i_len; i++) {
        item = ittfNode.children[i];
        if (item.tag === tag) {
            return item;
        }
    }
    return null;
}
function getChildPosByTag(ittfNode, tag) {
    var i, i_items=ittfNode.children, i_len=ittfNode.children.length, item;
    for (i=0; i<i_len; i++) {
        item = ittfNode.children[i];
        if (item.tag === tag) {
            return i;
        }
    }
    return -1;
}
function replaceChildrenOfChildWhenText(ittfNode, childPos, textTag) {
    if (childPos < 0) {
        return ;
    }
    ittfNode.children = replaceItemInColl(ittfNode.children, childPos, textifyChildren(ittfNode.children[childPos], textTag));
}
function replaceItemInColl(coll, pos, replacers) {
    var ret = [];
    var i, i_items=coll, i_len=coll.length, item;
    for (i=0; i<i_len; i++) {
        item = coll[i];
        if (pos == i) {
            var j, j_items=replacers, j_len=replacers.length, repl;
            for (j=0; j<j_len; j++) {
                repl = replacers[j];
                ret.push(repl);
            }
        }
        else {
            ret.push(item);
        }
    }
    return ret;
}
function textifyChildren(ittfNode, tag) {
    var ret = [];
    var i, i_items=ittfNode.children, i_len=ittfNode.children.length, item;
    for (i=0; i<i_len; i++) {
        item = ittfNode.children[i];
        if (item.isText || item.textified) {
            // log '@@@@@@@ item.tag.isText', item.tag, item.isText
            ret.push({
                tag: tag, 
                name: item.isText ? item.name : item.textified, 
                textified: item.isText ? item.name : item.textified, 
                children: [
                    
                ]
            })
        }
        else {
            ret.push(item);
        }
    }
    // log '@@@@@@@@@@@@@@@ textifyChildren', ret
    return ret;
}
function setTextList(ittfNode, sep) {
    var sb = [];
    var i, i_items=ittfNode.children, i_len=ittfNode.children.length, item;
    for (i=0; i<i_len; i++) {
        item = ittfNode.children[i];
        // log 'setTextList', item.tag, item.isText, item.textified
        if (item.isText) {
            sb.push(item.name);
        }
        else if (item.textified) {
            sb.push(item.textified);
        }
        else {
            return false;
        }
    }
    ittfNode.textified = sb.join(sep);
    ittfNode.children = [];
    return true;
}
function getTextList(ittfNode, sep) {
    var sb = [];
    var i, i_items=ittfNode.children, i_len=ittfNode.children.length, item;
    for (i=0; i<i_len; i++) {
        item = ittfNode.children[i];
        // log 'getTextList', item
        if (item.isText && item.children.length == 0) {
            sb.push(item.name);
        }
        else if (item.textified && item.children.length == 0) {
            sb.push(item.textified);
        }
        else {
            // log 'getTextList failed ***************', item
            return null;
        }
    }
    return sb.join(sep);
}
function setNameFromChildByTag(ittfNode, tag, forceText) {
    var i, i_items=ittfNode.children, i_len=ittfNode.children.length, item;
    for (i=0; i<i_len; i++) {
        item = ittfNode.children[i];
        if (item.tag === tag) {
            if (forceText) {
                // log '...................setNameFromChildByTag', item
            }
            if (item.isText) {
                ittfNode.name = item.name;
                ittfNode.children.splice(i, 1);
                return ;
            }
            if (forceText && item.textified) {
                ittfNode.name = item.textified;
                ittfNode.children.splice(i, 1);
                return ;
            }
        }
    }
}
function objectDeclareKey(key) {
    return key.indexOf(' ') > 0 ? '["' + key + '"]' : key;
}
function replaceWithSingleChild(ittfNode, childTag, limit) {
    if (isChildrenCount(ittfNode, 1)) {
        var childTag = ittfNode.children[0].tag;
        var testTag = limit ? childTag.substr(0, limit) : childTag;
        if (testTag === childTag) {
            ittfNode.tag = ittfNode.children[0].tag;
            ittfNode.name = ittfNode.children[0].name;
            ittfNode.textified = ittfNode.children[0].textified;
            ittfNode.children = ittfNode.children[0].children;
            return true;
        }
    }
    return false;
}
function isChildrenCount(ittfNode, count) {
    return ittfNode.children && ittfNode.children.length == count;
}
function isChildrenCountGreaterEqualThen(ittfNode, count) {
    return ittfNode.children && ittfNode.children.length >= count;
}
function childrenLengthNoProps(ittfNode) {
    var ret = 0;
    var i, i_items=ittfNode.children, i_len=ittfNode.children.length, item;
    for (i=0; i<i_len; i++) {
        item = ittfNode.children[i];
        if ([':public', ':protected', ':private', ':readonly', ':optional', ':abstract', 'static'].indexOf(item.tag) < 0) {
            ret++;
        }
    }
    return ret;
}
function getLiteral(ittfNode) {
    var sb = [], temp;
    var i, i_items=ittfNode.children, i_len=ittfNode.children.length, item;
    for (i=0; i<i_len; i++) {
        item = ittfNode.children[i];
        // log 'getLiteral.item', item
        if (item.tag === '+') {
            temp = verify.replaceAll(verify.replaceAll(item.name, '\\n', '\n'), '\\b', ' ');
            sb.push(temp);
        }
        if (item.tag === '@') {
            sb.push('${' + item.name + '}');
        }
    }
    return sb.join('');
}
function isFlowPrimitiveTag(s) {
    return [':string', ':number', ':boolean', ':{', ':[', ':func', ':?string', ':?number', ':?boolean', ':?{', ':?[', ':?func', ':void', ':null'].indexOf(s) > -1;
}
function isTypeReference(s) {
    return [':ref', ':string', ':number', ':boolean', ':{', ':[', ':func', ':void', ':null', ':never'].indexOf(s) > -1;
}
function parenthesize(text, parenthesized) {
    return (parenthesized ? '(' : '') + text + (parenthesized ? ')' : '');
}
var commonPlugins = [
    'jsx', 
    "objectRestSpread", 
    "classProperties", 
    "doExpressions", 
    ['decorators', { decoratorsBeforeExport: true }], 
    "classProperties", 
    "classPrivateProperties", 
    "classPrivateMethods", 
    "exportDefaultFrom", 
    "exportNamespaceFrom", 
    "asyncGenerators", 
    "functionBind", 
    "functionSent", 
    "dynamicImport", 
    "numericSeparator", 
    "optionalChaining", 
    "importMeta", 
    "bigInt", 
    "optionalCatchBinding", 
    "throwExpressions", 
    "nullishCoalescingOperator"
];
md.parse = function(input, babelOptions) {
    babelOptions = babelOptions || {};
    var plugins;
    if (babelOptions.ts_or_flow === 'typescript') {
        plugins = [
            'typescript'
        ].concat(commonPlugins);
    }
    else {
        plugins = [
            'flow'
        ].concat(commonPlugins);
    }
    // log 'jswizzifier.container.babelOptions', babelOptions
    return parser.parse(input, {
            sourceType: 'module', 
            plugins: plugins
        });
};
md.getCodeAST = function(input, options, callback) {
    options = options || {};
    options.input = input;
    options.stack = [];
    options.formatTextNodes = [];
    options.wizziIncludes = [];
    options.stateAST = [];
    var babelOptions = options.babel || {};
    var syntax;
    var cr;
    try {
        syntax = md.parse(input, babelOptions);
    } 
    catch (ex) {
        return callback(ex);
    } 
    cleanBabel.cleanAst(syntax);
    callback(null, syntax)
};
md.getWizziTree = function(input, options, callback) {
    // log 'options', options
    options = options || {};
    options.input = input;
    options.stack = [];
    options.formatTextNodes = [];
    options.wizziIncludes = [];
    options.stateAST = [];
    var startTime = Date.now();
    var babelOptions = options.babel || {};
    // log 'Parsed in ' + (Date.now() - startTime) + ' ms'
    var syntax;
    var cr;
    try {
        syntax = md.parse(input, babelOptions);
    } 
    catch (ex) {
        // var lines = cr.codeCleaned.split('\n')
        var lines = input.split('\n');
        for (var i=0; i<lines.length-1; i++) {
            console.log(i+1, lines[i]);
        }
        return callback(ex);
    } 
    if (options.syntaxOutFile) {
        file.write(options.syntaxOutFile, JSON.stringify(cleanBabel.cleanAst(syntax, cr), null, 2))
    }
    options.starter = true;
    options.commentManager = new CommentManager();
    // log 'cr.codeCleaned', cr.codeCleaned
    // log 'cr.replaceds', cr.replaceds
    var root = {
        tag: 'module', 
        children: [
            
        ]
    };
    if (babelOptions.ts_or_flow !== 'typescript') {
        root.children.push({
            tag: 'kind', 
            name: 'react', 
            children: [
                
            ]
        })
    }
    try {
        format(root, syntax, options);
    } 
    catch (ex) {
        return callback(ex);
    } 
    // log "wizziTree", JSON.stringify(root, null, 2)
    // log 'options.wizziIncludes', options.wizziIncludes
    async.map(options.wizziIncludes, function(item, callback) {
        if (item.kind === 'css') {
            if (!csswizzifier) {
                csswizzifier = require('../../cssparser/css/wizzifier');
            }
            csswizzifier.getWizziTree(item.literal, {}, function(err, ittf) {
                // log 'getWizzifierIncludes.item.ittf', ittf
                item.node.children.push(ittf)
                return callback(null);
            })
        }
        else {
            if (!htmlwizzifier) {
                htmlwizzifier = require('../../htmlparser/wizzi/wizzifier');
            }
            htmlwizzifier.getWizziTree(item.literal, {}, function(err, ittf) {
                // log 'getWizzifierIncludes.item.ittf', ittf
                item.node.children.push(ittf)
                return callback(null);
            })
        }
    }, function(err, notUsed) {
        if (err) {
            return callback(err);
        }
        return callback(null, root);
    })
};
md.getWizziIttf = function(input, options, callback) {
    // log '++++++++++ jswizzify.options', options
    md.getWizziTree(input, options, function(err, root) {
        if (err) {
            return callback(err);
        }
        var ittf = ittfwriter.stringify(root, { lang: 'js' });
        // log "md.getWizziIttf\n" + ittf
        callback(null, ittf);
    })
};
file.write(path.join(__dirname, "..", "..", "..", "..", "..", "..", "autodocs", "js-ts.wizzify.json"), JSON.stringify(wzDocs, null, '\t'))
