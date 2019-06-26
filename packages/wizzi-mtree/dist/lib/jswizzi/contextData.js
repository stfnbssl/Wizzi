/*
    artifact generator: C:\my\wizzi\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\my\wizzi\wizzi\packages\wizzi-mtree\.wizzi\ittf\lib\jswizzi\contextData.js.ittf
*/
'use strict';
// generated by v6-wizzi-js.artifacts.js.module.main
function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var util = require('util');
var errors = require('./errors');
var f_verify = require('./functions/verify');
var ContextData = (function () {
    function ContextData(kind, brickKey) {
        _classCallCheck(this, ContextData);
        this.kind = kind;
        this.brickKey = brickKey;
        this.clear();
    }
    ContextData.prototype.clear = function() {
        this.$freezed = false;
        this.functions = {};
        this.values = {};
        this.declares = {};
        this.functionsStack = [];
        this.valuesStack = [];
        this.declaresStack = [];
        this.builtInFunctions = {};
        this.builtInObjects = {};
    }
    ContextData.prototype.$freeze = function() {
        this.$freezed = true;
    }
    ContextData.prototype.declare = function(name, init) {
        if (name == '$' && this.$freezed) {
            throw new errors.InvalidVariableNameError('The variable "$" cannot be declared on the global context after it has been freezed.');
        }
        this.declares[name] = true;
        this.values[name] = init;
        // TODO debug only
        if (f_verify.isObject(init) == false) {
            // log 'ContextData declare', name, init, 'kind', this.kind, this.brickKey
        }
    }
    ContextData.prototype.undeclare = function(name) {
        if (this.declares[name] == true) {
            delete this.declares[name]
        }
        if (this.values[name] == true) {
            delete this.values[name]
        }
    }
    ContextData.prototype.isDeclared = function(name) {
        // log 'wizzi-mtree.contextData.isDeclared', name, this.declares[name]
        if (this.declares[name] == true) {
            return true;
        }
        else if (this.declaresStack.length > 0) {
            var i, i_len=this.declaresStack.length, item;
            for (i= (i_len-1); i>-1; i--) {
                item = this.declaresStack[i];
                // log 'wizzi-mtree.contextData.isDeclared for', name, this.declaresStack.length, item[name]
                if (item[name] == true) {
                    return true;
                }
            }
            return false;
        }
        else {
            return false;
        }
    }
    ContextData.prototype.setValue = function(name, value) {
        if (name == '$' && this.$freezed) {
            throw new errors.InvalidVariableNameError('The variable "$" cannot be set on the global context after it has been freezed.');
        }
        this.declare(name, value);
        // TODO debug only
        if (f_verify.isObject(value) == false) {
            // log 'ContextData setValue', name, value, 'kind', this.kind, this.brickKey
        }
    }
    ContextData.prototype.setValues = function(values) {
        values = (values || {});
        for (var k in values) {
            this.declare(k, values[k]);
        }
    }
    // Set value only if name is declared
    ContextData.prototype.put = function(name, value) {
        if (this.declares[name] === true) {
            this.values[name] = value;
            return true;
        }
        else {
            return false;
        }
    }
    ContextData.prototype.getValue = function(name) {
        if (this.declares[name] == true) {
            // log 'wizzi-mtree.contextData.getValue found for', name, this.values[name], this.declaresStack.length
            return this.values[name];
        }
        else if (this.declaresStack.length > 0) {
            var i, i_len=this.declaresStack.length, item;
            for (i= (i_len-1); i>-1; i--) {
                item = this.declaresStack[i];
                if (item[name] == true) {
                    // log 'wizzi-mtree.contextData.getValue found for', name, this.declaresStack.length
                    return this.valuesStack[i][name];
                }
            }
        }
        else {
            // log 'wizzi-mtree.contextData.getValue not found for', name, this.kind, this.brickKey
            return undefined;
        }
    }
    ContextData.prototype.getValues = function() {
        // TODO what if the stack has items ???
        return this.values;
    }
    ContextData.prototype.getSettableValues = function() {
        // TODO what if the stack has items ???
        var ret = {};
        for (var k in this.values) {
            if (k != '$') {
                ret[k] = this.values[k];
            }
        }
        return ret;
    }
    ContextData.prototype.declareFunction = function(name, fn) {
        this.functions[name] = fn;
    }
    ContextData.prototype.getFunction = function(name) {
        if (this.functions[name]) {
            return this.functions[name];
        }
        else if (this.functionsStack.length > 0) {
            var i, i_len=this.functionsStack.length, item;
            for (i= (i_len-1); i>-1; i--) {
                item = this.functionsStack[i];
                if (item[name]) {
                    return item[name];
                }
            }
        }
        else {
            // undefined
            return this.functions[name];
        }
    }
    ContextData.prototype.setBuiltInFunction = function(name, value) {
        this.builtInFunctions[name] = value;
    }
    ContextData.prototype.getBuiltInFunction = function(name) {
        return this.builtInFunctions[name];
    }
    ContextData.prototype.push = function() {
        this.functionsStack.push(this.functions);
        this.valuesStack.push(this.values);
        this.declaresStack.push(this.declares);
        this.functions = {};
        this.values = {};
        this.declares = {};
    }
    ContextData.prototype.pop = function() {
        if (this.functionsStack.length > 0) {
            this.functions = this.functionsStack.pop();
            this.values = this.valuesStack.pop();
            this.declares = this.declaresStack.pop();
        }
    }
    ContextData.prototype.dumpValues = function() {
        console.log('Dump context value for debug', this.kind);
        for (var k in this.declares) {
            if (f_verify.isObject(this.values[k]) == false) {
                console.log(k, this.values[k]);
            }
        }
    }
    ContextData.prototype.getDeclareddumpValues = function() {
        console.log('Dump context value for debug', this.kind);
        for (var k in this.declares) {
            if (f_verify.isObject(this.values[k]) == false) {
                console.log(k, this.values[k]);
            }
        }
    }
    ContextData.prototype.getDeclaredInfo = function() {
        var ret = [];
        for (var k in this.declares) {
            if (f_verify.isObject(this.values[k]) == false) {
                ret.push(k + '=' + this.values[k]);
            }
            else {
                ret.push(k + '= [object]');
            }
        }
        return ret.join(', ');
    }
    return ContextData;
})();

module.exports = ContextData;
