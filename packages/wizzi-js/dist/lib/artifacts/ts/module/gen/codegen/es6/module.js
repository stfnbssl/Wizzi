/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\.wizzi\ittf\lib\artifacts\ts\module\gen\codegen\es6\module.js.ittf
*/
'use strict';
var md = module.exports = {};
var myname = 'wizzi.js.artifacts.module.gen.codegen.es6.module';
md.gen = function(model, ctx, callback) {
    if (typeof callback === 'undefined') {
        throw new Error('Missing callback parameter in ' + myname + '.gen');
    }
    if (typeof callback !== 'function') {
        throw new Error('The callback parameter must be a function. In ' + myname + '.gen. Got: ' + callback);
    }
    var hasClasses = model.wzModelState.hasClasses,
        ecma = model.ecma;
    // log '==== wizzi-codegen.js.v4.es6.module', model.wzName, model.ecma, model.wzModelState.hasClasses
    if (ecma === 'es5' && hasClasses) {
        ctx.w('// generated by ' + myname);
        ctx.w("function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }");
        ctx.w("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }");
        ctx.w("var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };");
        ctx.w();
    }
    return callback(null, null);
};
