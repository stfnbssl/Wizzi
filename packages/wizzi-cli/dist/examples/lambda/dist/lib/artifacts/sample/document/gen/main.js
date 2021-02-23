/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\examples\lambda\.wizzi\ittf\lib\artifacts\sample\document\gen\main.js.ittf
    utc time: Tue, 23 Feb 2021 21:47:52 GMT
*/
'use strict';
var util = require('util');
var path = require('path');
var async = require('async');
var verify = require('wizzi-utils').verify;
var errors = require('../../../../../errors');

var myname = '.artifacts.sample.document.gen.main';

var md = module.exports = {};


md.gen = function(model, ctx, callback) {
    if (typeof(callback) !== 'function') {
        throw new Error(error('InvalidArgument', 'gen', 'The callback parameter must be a function. Received: ' + callback, model));
    }
    if (verify.isObject(model) == false) {
        return callback(error('InvalidArgument', 'gen', 'The model parameter must be an object. Received: ' + model, model));
    }
    if (model.wzElement !== 'sample') {
        callback(error('InvalidArgument', 'gen', 'Invalid model schema. Expected root element "sample". Received: ' + model.wzElement, model))
    }
    try {
        md.sample(model, ctx, function(err, notUsed) {
            if (err) {
                return callback(err);
            }
            if (ctx.artifactGenerationErrors.length > 0) {
                return callback(ctx.artifactGenerationErrors);
            }
            else {
                // generation OK
                return callback(null, ctx);
            }
        })
    } 
    catch (ex) {
        return callback(error('Exception', 'gen', 'An exception encountered during generation', model, ex));
    } 
};

md.genItems = function(items, ctx, options, callback) {
    if (typeof callback == 'undefined') {
        callback = options;
        options = {};
    }
    var opt = options || {},
        from = opt.from || 0,
        indent = typeof opt.indent === 'undefined' ? true : opt.indent;
    if (indent) {
        ctx.indent();
    }
    var goitems = [];
    for (var i = from; i < items.length; i++) {
        goitems.push(items[i]);
    }
    async.mapSeries(goitems, md.mapItem(ctx), (err, notUsed) => {
        if (err) {
            return callback(err);
        }
        if (indent) {
            ctx.deindent();
        }
        process.nextTick(callback)
    })
};
md.mapItem = function(ctx) {
    return function(model, callback) {
            return md.genItem(model, ctx, callback);
        };
};
md.genItem = function(model, ctx, callback) {
    var method = md[model.wzElement];
    if (method) {
        return method(model, ctx, callback);
    }
    else {
        return callback(error('ArtifactGenerationError', 'genItem', myname + '. Unknown tag/element: ' + model.wzTag + '/' + model.wzElement, model, null));
    }
};

const noindent = {
    indent: false
};

md.sample = function(model, ctx, callback) {
    console.log("ctx.keys", Object.keys(ctx));
    console.log("ctx.values property", ctx.values);
    console.log('tag sample, nodes', model.nodes.length);
    ctx.values.docxStack = [];
    ctx.values.docxCounter = 0;
    var docxNode = "docx_doc_" + (++ctx.values.docxCounter);
    ctx.values.docxStack.push(docxNode);
    ctx.w('import * as fs from "fs";');
    ctx.w('import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, ShadingType, Table, TableCell, TableRow, TableLayoutType, WidthType } from "docx";');
    ctx.w('');
    ctx.w('const ' + docxNode + ' = new Document();');
    md.genItems(model.nodes, ctx, noindent, (err, notUsed) => {
        if (err) {
            return callback(err);
        }
        ctx.w('');
        ctx.w('Packer.toBuffer(' + docxNode + ').then((buffer) => {');
        ctx.w('    fs.writeFileSync("My Document.docx", buffer);');
        ctx.w('    console.log("DONE written")');
        ctx.w('});');
        return callback(null);
    })
};

md.section = function(model, ctx, callback) {
    console.log('tag section, value', model.wzName);
    var docxParent = ctx.values.docxStack[ctx.values.docxStack.length-1];
    var docxNode = "docx_sect_" + (++ctx.values.docxCounter);
    ctx.values.docxStack.push(docxNode);
    ctx.w('const ' + docxNode + ' = { properties: {}, children: [] };');
    md.genItems(model.nodes, ctx, noindent, (err, notUsed) => {
        if (err) {
            return callback(err);
        }
        ctx.w(docxParent + '.addSection(' + docxNode + ');');
        ctx.values.docxStack.pop();
        return callback(null);
    })
};

md.p = function(model, ctx, callback) {
    var docxParent = ctx.values.docxStack[ctx.values.docxStack.length-1];
    var docxNode = "docx_par_" + (++ctx.values.docxCounter);
    ctx.values.docxStack.push(docxNode);
    ctx.w('const ' + docxNode + ' = { children: [] };');
    md.genItems(model.nodes, ctx, noindent, (err, notUsed) => {
        if (err) {
            return callback(err);
        }
        ctx.w('const ' + docxNode + 'Obj = new Paragraph(' + docxNode + ');');
        ctx.w(docxParent + '.children.push(' + docxNode + 'Obj);');
        ctx.values.docxStack.pop();
        return callback(null);
    })
};

md.text = function(model, ctx, callback) {
    console.log('tag text, value', model.wzName);
    var docxParent = ctx.values.docxStack[ctx.values.docxStack.length-1];
    var docxNode = "docx_txt_" + (++ctx.values.docxCounter);
    ctx.values.docxStack.push(docxNode);
    ctx.w('const ' + docxNode + ' = {};');
    ctx.w(docxNode + '.text = "' + model.wzName + '";');
    md.genItems(model.nodes, ctx, noindent, (err, notUsed) => {
        if (err) {
            return callback(err);
        }
        ctx.w('const ' + docxNode + 'Obj = new TextRun(' + docxNode + ');');
        ctx.w(docxParent + '.children.push(' + docxNode + 'Obj);');
        ctx.values.docxStack.pop();
        return callback(null);
    })
};

md.h1 = function(model, ctx, callback) {
    var docxParent = ctx.values.docxStack[ctx.values.docxStack.length-1];
    var docxNode = "docx_txt_" + (++ctx.values.docxCounter);
    ctx.values.docxStack.push(docxNode);
    ctx.w('const ' + docxNode + ' = {};');
    ctx.w(docxNode + '.text = "' + model.wzName + '";');
    ctx.w(docxNode + '.heading = HeadingLevel.HEADING_1;');
    md.genItems(model.nodes, ctx, noindent, (err, notUsed) => {
        if (err) {
            return callback(err);
        }
        ctx.w('const ' + docxNode + 'Obj = new TextRun(' + docxNode + ');');
        ctx.w(docxParent + '.children.push(' + docxNode + 'Obj);');
        ctx.values.docxStack.pop();
        return callback(null);
    })
};

md.h2 = function(model, ctx, callback) {
    var docxParent = ctx.values.docxStack[ctx.values.docxStack.length-1];
    var docxNode = "docx_txt_" + (++ctx.values.docxCounter);
    ctx.values.docxStack.push(docxNode);
    ctx.w('const ' + docxNode + ' = {};');
    ctx.w(docxNode + '.text = "' + model.wzName + '";');
    ctx.w(docxNode + '.heading = HeadingLevel.HEADING_2;');
    md.genItems(model.nodes, ctx, noindent, (err, notUsed) => {
        if (err) {
            return callback(err);
        }
        ctx.w('const ' + docxNode + 'Obj = new TextRun(' + docxNode + ');');
        ctx.w(docxParent + '.children.push(' + docxNode + 'Obj);');
        ctx.values.docxStack.pop();
        return callback(null);
    })
};
md.bold = function(model, ctx, callback) {
    var docxParent = ctx.values.docxStack[ctx.values.docxStack.length-1];
    var docxNode = "docx_txt_" + (++ctx.values.docxCounter);
    ctx.values.docxStack.push(docxNode);
    ctx.w('const ' + docxNode + ' = {};');
    ctx.w(docxNode + '.text = "' + model.wzName + '";');
    ctx.w(docxParent + '.bold = true;');
    md.genItems(model.nodes, ctx, noindent, (err, notUsed) => {
        if (err) {
            return callback(err);
        }
        ctx.w('const ' + docxNode + 'Obj = new TextRun(' + docxNode + ');');
        ctx.w(docxParent + '.children.push(' + docxNode + 'Obj);');
        ctx.values.docxStack.pop();
        return callback(null);
    })
};
md.italic = function(model, ctx, callback) {
    var docxParent = ctx.values.docxStack[ctx.values.docxStack.length-1];
    var docxNode = "docx_txt_" + (++ctx.values.docxCounter);
    ctx.values.docxStack.push(docxNode);
    ctx.w('const ' + docxNode + ' = {};');
    ctx.w(docxNode + '.text = "' + model.wzName + '";');
    ctx.w(docxParent + '.italic = true;');
    md.genItems(model.nodes, ctx, noindent, (err, notUsed) => {
        if (err) {
            return callback(err);
        }
        ctx.w('const ' + docxNode + 'Obj = new TextRun(' + docxNode + ');');
        ctx.w(docxParent + '.children.push(' + docxNode + 'Obj);');
        ctx.values.docxStack.pop();
        return callback(null);
    })
};
md.xbreak = function(model, ctx, callback) {
    var docxParent = ctx.values.docxStack[ctx.values.docxStack.length-1];
    ctx.w(docxParent + '.break = ' + true + ';');
    return callback(null);
};
md.size = function(model, ctx, callback) {
    var docxParent = ctx.values.docxStack[ctx.values.docxStack.length-1];
    ctx.w(docxParent + '.size = ' + model.wzName + ';');
    return callback(null);
};
md.color = function(model, ctx, callback) {
    var docxParent = ctx.values.docxStack[ctx.values.docxStack.length-1];
    ctx.w(docxParent + '.color = "' + model.wzName + '";');
    return callback(null);
};
md.fill = function(model, ctx, callback) {
    var docxParent = ctx.values.docxStack[ctx.values.docxStack.length-1];
    ctx.w(docxParent + '.fill = "' + model.wzName + '";');
    return callback(null);
};
md.xname = function(model, ctx, callback) {
    var docxParent = ctx.values.docxStack[ctx.values.docxStack.length-1];
    ctx.w(docxParent + '.name = "' + model.wzName + '";');
    return callback(null);
};
md.highlight = function(model, ctx, callback) {
    var docxParent = ctx.values.docxStack[ctx.values.docxStack.length-1];
    ctx.w(docxParent + '.highlight = "' + model.wzName + '";');
    return callback(null);
};
md.xtype = function(model, ctx, callback) {
    var docxParent = ctx.values.docxStack[ctx.values.docxStack.length-1];
    if (model.wzParent.wzElement == 'shading') {
        ctx.w(docxParent + '.type = ShadingType.' + model.wzName + ';');
    }
    else if (model.wzParent.wzElement == 'width') {
        ctx.w(docxParent + '.type = WidthType.' + model.wzName + ';');
    }
    else {
        ctx.w(docxParent + '.type = "' + model.wzName + '";');
    }
    return callback(null);
};

md.font = function(model, ctx, callback) {
    var docxParent = ctx.values.docxStack[ctx.values.docxStack.length-1];
    var docxNode = "docx_fnt_" + (++ctx.values.docxCounter);
    ctx.values.docxStack.push(docxNode);
    ctx.w('const ' + docxNode + ' = {};');
    md.genItems(model.nodes, ctx, noindent, (err, notUsed) => {
        if (err) {
            return callback(err);
        }
        ctx.w(docxParent + '.font = ' + docxNode + ';');
        ctx.values.docxStack.pop();
        return callback(null);
    })
};

md.shading = function(model, ctx, callback) {
    var docxParent = ctx.values.docxStack[ctx.values.docxStack.length-1];
    var docxNode = "docx_shd_" + (++ctx.values.docxCounter);
    ctx.values.docxStack.push(docxNode);
    ctx.w('const ' + docxNode + ' = {};');
    md.genItems(model.nodes, ctx, noindent, (err, notUsed) => {
        if (err) {
            return callback(err);
        }
        ctx.w(docxParent + '.shading = ' + docxNode + ';');
        ctx.values.docxStack.pop();
        return callback(null);
    })
};
md.table = function(model, ctx, callback) {
    var docxParent = ctx.values.docxStack[ctx.values.docxStack.length-1];
    var docxNode = "docx_table_" + (++ctx.values.docxCounter);
    ctx.values.docxStack.push(docxNode);
    ctx.w('const ' + docxNode + ' = {};');
    ctx.w(docxNode + '.rows = [];');
    md.genItems(model.nodes, ctx, noindent, (err, notUsed) => {
        if (err) {
            return callback(err);
        }
        ctx.w('const ' + docxNode + 'Obj = new Table(' + docxNode + ');');
        ctx.w(docxParent + '.children.push(' + docxNode + 'Obj);');
        ctx.values.docxStack.pop();
        return callback(null);
    })
};
md.tr = function(model, ctx, callback) {
    var docxParent = ctx.values.docxStack[ctx.values.docxStack.length-1];
    var docxNode = "docx_tr_" + (++ctx.values.docxCounter);
    ctx.values.docxStack.push(docxNode);
    ctx.w('const ' + docxNode + ' = {};');
    ctx.w(docxNode + '.children = [];');
    ctx.w(docxNode + '.layout = TableLayoutType.FIXED;');
    md.genItems(model.nodes, ctx, noindent, (err, notUsed) => {
        if (err) {
            return callback(err);
        }
        ctx.w('const ' + docxNode + 'Obj = new TableRow(' + docxNode + ');');
        ctx.w(docxParent + '.rows.push(' + docxNode + 'Obj);');
        ctx.values.docxStack.pop();
        return callback(null);
    })
};
md.td = function(model, ctx, callback) {
    var docxParent = ctx.values.docxStack[ctx.values.docxStack.length-1];
    var docxNode = "docx_td_" + (++ctx.values.docxCounter);
    ctx.values.docxStack.push(docxNode);
    ctx.w('const ' + docxNode + ' = {};');
    ctx.w(docxNode + '.children = [];');
    md.genItems(model.nodes, ctx, noindent, (err, notUsed) => {
        if (err) {
            return callback(err);
        }
        ctx.w('const ' + docxNode + 'Obj = new TableCell(' + docxNode + ');');
        ctx.w(docxParent + '.children.push(' + docxNode + 'Obj);');
        ctx.values.docxStack.pop();
        return callback(null);
    })
};
md.width = function(model, ctx, callback) {
    var docxParent = ctx.values.docxStack[ctx.values.docxStack.length-1];
    var docxNode = "docx_width_" + (++ctx.values.docxCounter);
    ctx.values.docxStack.push(docxNode);
    ctx.w('const ' + docxNode + ' = {};');
    md.genItems(model.nodes, ctx, noindent, (err, notUsed) => {
        if (err) {
            return callback(err);
        }
        ctx.w(docxParent + '.width = ' + docxNode + ';');
        ctx.values.docxStack.pop();
        return callback(null);
    })
};

//
function error(errorName, method, message, model, innerError) {
    return new errors.WizziPluginError(message, model, {
            errorName: errorName, 
            method: '/lib/artifacts/sample/document/gen/main.' + method, 
            sourcePath: __filename, 
            inner: innerError
        });
}
