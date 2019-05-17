/*
    artifact generator: C:\My\wizzi\v5\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: c:\my\wizzi\v5\plugins\wizzi-lab\src\ittf\lib\artifacts\raml\html_docs\gen\main.js.ittf
    utc time: Sat, 22 Sep 2018 10:57:57 GMT
*/
'use strict';
var util = require('util');
var path = require('path');
var site = require('wizzi');
var md = module.exports = {};
var myname = 'raml.html.docs.main';
md.gen = function(model, ctx, callback) {
    wizzi.fsnoaclFactory({
        plugins: {
            items: [
                'wizzi-core', 
                'wizzi-web'
            ]
        }
    }, function(err, wf) {
        if (err) {
            return callback(err);
        }
        wf.loadModelAndGenerateArtifact(path.join(__dirname, 'ittf', 'raml-docs.html.ittf'), {
            modelRequestContext: {
                mTreeBuildUpContext: {
                    raml: model
                }
            }, 
            artifactRequestContext: {}
        }, 'html/document', function(err, artifactText) {
            if (err) {
                return callback(err);
            }
            console.log('raml.html_docs.artifactText', artifactText);
            ctx.w(artifactText);
            return callback(null, ctx);
        });
    });
};
