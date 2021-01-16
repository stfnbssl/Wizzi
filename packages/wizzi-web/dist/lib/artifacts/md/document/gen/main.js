/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-web\.wizzi\ittf\lib\artifacts\md\document\gen\main.js.ittf
*/
'use strict';
// generated by v6-wizzi-js.artifacts.js.module.main
function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var util = require('util');
var verify = require('wizzi-utils').verify;
var myname = 'md.document.main';
module.exports = {
    gen: function(model, ctx, callback) {
        // log 'model', util.inspect(model, { depth: 1 })
        new Gen(model, ctx, callback);
    }
};
var Gen = (function () {
    function Gen(model, ctx, callback) {
        _classCallCheck(this, Gen);
        this.genItem(model, ctx);
        callback(null, ctx);
    }
    Gen.prototype.genItems = function(items, ctx, options) {
        var opt = options || {},
            from = opt.from || 0;
        for (var i = from; i < items.length; i++) {
            var item = items[i];
            this.genItem(item, ctx);
        }
    }
    Gen.prototype.genItem = function(model, ctx) {
        if (this[model.wzElement]) {
            // known element
            if (this[model.wzElement](model, ctx)) {
                // ok, processed
                return ;
            }
        }
        else {
            console.log(myname + '. Unknown statement tag/element: ' + model.wzTag + '/' + model.wzElement, model);
            throw ctx.error(myname + '. Unknown statement tag/element: ' + model.wzTag + '/' + model.wzElement, model);
        }
    }
    Gen.prototype.md = function(model, ctx) {
        this.genItems(model.elements, ctx);
        return true;
    }
    Gen.prototype.frontmatter = function(model, ctx) {
        ctx.w("---");
        var i, i_items=model.attributes, i_len=model.attributes.length, a;
        for (i=0; i<i_len; i++) {
            a = model.attributes[i];
            var nv = verify.parseNameValue(a.wzName, a);
            ctx.w(nv.name() + ": " + nv.value());
        }
        this.genItems(model.elements, ctx);
        ctx.w("---");
        return true;
    }
    Gen.prototype.propertyOrValue = function(model, ctx) {
        var p = verify.parseNameValue(model.wzName, model);
        ctx.w(p.name() + ": " + p.value());
    }
    Gen.prototype.element = function(model, ctx) {
        this.writeHtml(model.wzName, model, ctx);
    }
    Gen.prototype.div = function(model, ctx) {
        this.writeHtml('div', model, ctx);
    }
    Gen.prototype.h1 = function(model, ctx) {
        if (ctx.isHtml || (!ctx.isCode && model.elements.length > 0)) {
            this.writeHtml('h1', model, ctx);
        }
        else {
            ctx.w("# " + model.wzName);
        }
        return true;
    }
    Gen.prototype.h2 = function(model, ctx) {
        if (ctx.isHtml || (!ctx.isCode && model.elements.length > 0)) {
            this.writeHtml('h2', model, ctx);
        }
        else {
            ctx.w("## " + model.wzName);
        }
        return true;
    }
    Gen.prototype.h3 = function(model, ctx) {
        if (ctx.isHtml || (!ctx.isCode && model.elements.length > 0)) {
            this.writeHtml('h3', model, ctx);
        }
        else {
            ctx.w("### " + model.wzName);
        }
        return true;
    }
    Gen.prototype.h4 = function(model, ctx) {
        if (ctx.isHtml || (!ctx.isCode && model.elements.length > 0)) {
            this.writeHtml('h4', model, ctx);
        }
        else {
            ctx.w("#### " + model.wzName);
        }
        return true;
    }
    Gen.prototype.h5 = function(model, ctx) {
        if (ctx.isHtml || (!ctx.isCode && model.elements.length > 0)) {
            this.writeHtml('h5', model, ctx);
        }
        else {
            ctx.w("##### " + model.wzName);
        }
        return true;
    }
    Gen.prototype.h6 = function(model, ctx) {
        if (ctx.isHtml || (!ctx.isCode && model.elements.length > 0)) {
            this.writeHtml('h6', model, ctx);
        }
        else {
            ctx.w("##### " + model.wzName);
        }
        return true;
    }
    Gen.prototype.a = function(model, ctx) {
        if (ctx.isHtml || (!ctx.isCode && model.elements.length > 0)) {
            this.writeHtml('a', model, ctx);
        }
        else {
            ctx.write('[' + model.wzName + ']');
            ctx.write('(' + model.href);
            if (verify.isString(model.title)) {
                ctx.write(' "' + model.title + '"');
            }
            ctx.w(')');
        }
    }
    Gen.prototype.ul = function(model, ctx) {
        this.genItems(model.elements, ctx);
    }
    Gen.prototype.li = function(model, ctx) {
        ctx.write('* ');
        if (model.wzName && model.wzName.length > 0) {
            ctx.write(model.wzName + ' ' );
        }
        this.genItems(model.elements, ctx);
        ctx.w('');
    }
    Gen.prototype.ol = function(model, ctx) {
        this.genItems(model.elements, ctx);
    }
    Gen.prototype.img = function(model, ctx) {
        if (ctx.isHtml || (!ctx.isCode && model.elements.length > 0)) {
            this.writeHtml('img', model, ctx);
        }
        else {
            ctx.write('![' + model.wzName + ']');
            ctx.write('(' + model.src);
            if (verify.isString(model.title)) {
                ctx.write(' "' + model.title + '"');
            }
            ctx.w(')');
        }
    }
    Gen.prototype.video = function(model, ctx) {
    }
    Gen.prototype.table = function(model, ctx) {
        ctx.w();
        ctx.w('<table>');
        this.genItems(model.elements, ctx);
        ctx.w('</table>');
        ctx.w();
    }
    Gen.prototype.tr = function(model, ctx) {
        ctx.w('<tr>');
        this.genItems(model.elements, ctx);
        ctx.w('</tr>');
    }
    Gen.prototype.tbody = function(model, ctx) {
        ctx.w('<tbody>');
        this.genItems(model.elements, ctx);
        ctx.w('</tbody>');
    }
    Gen.prototype.td = function(model, ctx) {
        ctx.write('<td>');
        if (model.wzName) {
            ctx.write(model.wzName);
        }
        if (model.elements && model.elements.length > 0) {
            ctx.w();
            this.genItems(model.elements, ctx);
        }
        else {
            ctx.w('</td>');
        }
    }
    Gen.prototype.th = function(model, ctx) {
        ctx.write('<th>');
        if (model.wzName) {
            ctx.write(model.wzName);
        }
        if (model.elements && model.elements.length > 0) {
            ctx.w();
            this.genItems(model.elements, ctx);
        }
        else {
            ctx.w('</th>');
        }
    }
    Gen.prototype.quote = function(model, ctx) {
    }
    Gen.prototype.hr = function(model, ctx) {
        ctx.w('* * *');
    }
    Gen.prototype.p = function(model, ctx) {
        if (ctx.isHtml || (!ctx.isCode && model.elements.length > 0)) {
            this.writeHtml('p', model, ctx);
        }
        else {
            ctx.w(model.wzName);
            if (ctx.isCode) {
                ctx.indent();
            }
            this.genItems(model.elements, ctx);
            if (ctx.isCode) {
                ctx.deindent();
            }
            return true;
        }
    }
    Gen.prototype.span = function(model, ctx) {
        ctx.write(verify.replaceAll(model.wzName, '&nbsp;', ' '));
        this.genItems(model.elements, ctx);
        return true;
    }
    Gen.prototype.br = function(model, ctx) {
        ctx.w();
        return true;
    }
    Gen.prototype.i = function(model, ctx) {
        ctx.write('*' + model.wzName);
        this.genItems(model.elements, ctx);
        ctx.write('*');
        return true;
    }
    Gen.prototype.b = function(model, ctx) {
        ctx.write('**' + model.wzName);
        this.genItems(model.elements, ctx);
        ctx.write('**');
        return true;
    }
    Gen.prototype.blank = function(model, ctx) {
        ctx.write(' ' + model.wzName);
        this.genItems(model.elements, ctx);
        return true;
    }
    Gen.prototype.plus = function(model, ctx) {
        if (ctx.isCode) {
            ctx.w(model.wzName);
        }
        else {
            ctx.w("`" + model.wzName + "`");
        }
        ctx.indent();
        this.genItems(model.elements, ctx);
        ctx.deindent();
        return true;
    }
    Gen.prototype.js = function(model, ctx) {
        ctx.w("```javascript");
        ctx.isCode = true;
        this.genItems(model.elements, ctx);
        ctx.isCode = false;
        ctx.w("```");
        return true;
    }
    Gen.prototype.html = function(model, ctx) {
        ctx.w("```html");
        ctx.isCode = true;
        this.genItems(model.elements, ctx);
        ctx.isCode = false;
        ctx.w("```");
        return true;
    }
    Gen.prototype.css = function(model, ctx) {
        ctx.w("```css");
        ctx.isCode = true;
        this.genItems(model.elements, ctx);
        ctx.isCode = false;
        ctx.w("```");
        return true;
    }
    Gen.prototype.bash = function(model, ctx) {
        ctx.w("```bash");
        ctx.isCode = true;
        this.genItems(model.elements, ctx);
        ctx.isCode = false;
        ctx.w("```");
        return true;
    }
    Gen.prototype.sh = function(model, ctx) {
        ctx.w("```sh");
        ctx.isCode = true;
        this.genItems(model.elements, ctx);
        ctx.isCode = false;
        ctx.w("```");
        return true;
    }
    Gen.prototype.code = function(model, ctx) {
        ctx.w("```" + model.wzName);
        ctx.isCode = true;
        this.genItems(model.elements, ctx);
        ctx.isCode = false;
        ctx.w("```");
        return true;
    }
    Gen.prototype.imgRef = function(model, ctx) {
        ctx.write('![' + model.alt + ']');
        ctx.w('[' + model.wzName + ']');
    }
    Gen.prototype.ref = function(model, ctx) {
        ctx.write('[' + model.wzName + ']');
        ctx.write(' ' + model.href);
        ctx.w(' "' + model.title + '"');
    }
    Gen.prototype.writeHtml = function(tag, model, ctx) {
        var saveIsHtml = ctx.isHtml;
        ctx.isHtml = true;
        if (!saveIsHtml) {
            ctx.w();
        }
        ctx.write('<' + tag);
        var i, i_items=getAttributes(model), i_len=getAttributes(model).length, a;
        for (i=0; i<i_len; i++) {
            a = getAttributes(model)[i];
            var nv = verify.parseNameValue(a.wzName, a);
            ctx.write(' ' + nv.name() + '="' + nv.value() + '"');
        }
        if (model.wzName.length > 0) {
            ctx.write('>' + model.wzName);
        }
        else {
            ctx.write('>');
        }
        this.genItems(model.elements, ctx);
        ctx.write('</' + tag + '>');
        if (!saveIsHtml) {
            ctx.w();
            ctx.w();
        }
        ctx.isHtml = saveIsHtml;
    }
    return Gen;
})();

function isLineTag(model) {
    return ['p', 'br'].indexOf(model.wzElement) > -1;
}
var knownAttributes = [
    'href', 
    'src', 
    'title', 
    'id', 
    'alt'
];
function getAttributes(model) {
    var ret = [];
    var i, i_items=model.attributes, i_len=model.attributes.length, a;
    for (i=0; i<i_len; i++) {
        a = model.attributes[i];
        ret.push(a);
    }
    var i, i_items=knownAttributes, i_len=knownAttributes.length, name;
    for (i=0; i<i_len; i++) {
        name = knownAttributes[i];
        if (typeof model[name] !== 'undefined') {
            ret.push({
                wzName: name + ' ' + model[name]
            });
        }
    }
    return ret;
}
