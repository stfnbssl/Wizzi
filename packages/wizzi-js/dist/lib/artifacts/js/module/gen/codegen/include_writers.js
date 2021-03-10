/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\.wizzi\ittf\lib\artifacts\js\module\gen\codegen\include_writers.js.ittf
*/
'use strict';

var myname = 'wizzi.js.artifacts.module.gen.codegen.include_writers';

var verify = require('wizzi-utils').verify;

var md = module.exports = {};
md.writeIncludeCss = function(ctx, model, callback) {
    model.get_css(function(err, cssModel) {
        if (err) {
            return callback(err);
        }
        // log myname, 'cssModel.rules', cssModel.rules, Object.keys(cssModel)
        // log myname, 2
        md.generateCssArtifact(ctx, cssModel, function(err, artifactText) {
            if (err) {
                return callback(err);
            }
            ctx.indent();
            ctx.writeAligned(artifactText);
            ctx.deindent();
            callback();
        })
    })
};
md.generateCssArtifact = function(ctx, cssModel, callback) {
    // log myname, 3
    // log myname, 'cssModel', cssModel, 'cssModel.rules', cssModel.rules
    ctx.wizziFactory.generateArtifact(cssModel, 'generated from js model', 'css/document', {
        forHtmlStyle: true, 
        noGeneratorComments: true
    }, function(err, artifactText) {
        if (err) {
            return callback(err);
        }
        // log myname, 'css artifactText', artifactText
        return callback(null, artifactText);
    })
};
