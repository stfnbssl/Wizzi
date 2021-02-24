/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.plugin.docx\.wizzi\ittf\examples\index.js.ittf
    utc time: Wed, 24 Feb 2021 15:18:29 GMT
*/
'use strict';
var path = require('path');
var fs = require('fs');
var async = require('async');
var wizzi = null;
var wizziUtils = require('wizzi-utils');
var verify = wizziUtils.verify;
var file = wizziUtils.file;
var mocks = wizziUtils.mocks;
var mtree = require('wizzi-mtree');
var errors = wizziUtils.exampleErrors;
var stringify = require('json-stringify-safe');
var wizziTools = require('wizzi-tools');
function executeExample() {
    executeGenerateModules([
        'first'
    ], function(err, result) {
        if (err) {
            console.log('sample.examples.executeGenerateModules.err', err);
            console.log('sample.examples.executeGenerateModules.err.toString()', err.toString());
            if (err.inner) {
                console.log('sample.examples.executeGenerateModules.err.inner.toString()', err.inner.toString());
            }
        }
        else {
            console.log('sample.examples.executeGenerateModules.result', result);
        }
    })
    function executeGenerateModules(modules, callback) {
        async.mapSeries(modules, (module, callback) => {
            var context = file.readJSON(path.join(__dirname, 'ittf', module + '.sample.json'));
            context.items.sort(sortItems);
            // log 'context', context
            transformContext(context, function(err, context) {
                if (err) {
                    return callback(err);
                }
                // log 'context', context
                var ittfDocumentUri = path.join(__dirname, 'ittf', module + '.sample.ittf');
                var outputPath = path.join(__dirname, 'dist', module + '.sample.js');
                var outputPathJson = path.join(__dirname, 'dist', module + '.sample.json');
                var outputPathDebugTxt = path.join(__dirname, 'dist', module + '.sample.debug.txt');
                loadMTreeDebugInfo(ittfDocumentUri, {
                    beba: context
                }, function(err, debugInfo) {
                    if (err) {
                        return callback(err);
                    }
                    console.log('debugInfo', debugInfo);
                    file.write(outputPathDebugTxt, debugInfo.mTreeBuildUpScript)
                    loadModelAndGenerateArtifact(ittfDocumentUri, {
                        beba: context
                    }, 'sample/document', function(err, artifactText) {
                        if (err) {
                            return callback(err);
                        }
                        file.write(outputPath, artifactText)
                        file.write(outputPathJson, stringify(context, null, 4))
                        return callback(null, artifactText);
                    })
                })
            })
        }, callback)
    }
    function transformContext(beba, callback) {
        async.mapSeries(beba.items, (item, callback) =>
            wizziTools.htmlwizzifier.getWizziIttf(item.Testo, {}, function(err, ittf) {
                if (err) {
                    console.log('err', err);
                    if (err.toString()) {
                        console.log('err.toString()', err.toString());
                    }
                    if (err.inner) {
                        console.log('err.inner', err.inner);
                        if (err.inner.toString) {
                            console.log('err.inner.toString()', err.inner.toString());
                        }
                    }
                    throw new Error(err.message);
                }
                // log 'transformBeba', ittf
                loadModelAndGenerateArtifactFromText(ittf, {}, 'ittf/tojson', (err, artifactText) => {
                    if (err) {
                        return callback(err);
                    }
                    // log 'transformBeba to json', artifactText
                    console.log('transformBeba.item.NWS_FK_TNW_ID', item.NWS_FK_TNW_ID);
                    item.TestoJson = JSON.parse(artifactText);
                    return callback(null, artifactText);
                })}), function(err, notUsed) {
            if (err) {
                return callback(err);
            }
            return callback(null, beba);
        })
    }
    function sortItems(a, b) {
        var num_a = a.NWS_FK_TNW_ID;
        var num_b = b.NWS_FK_TNW_ID;
        console.log("sortItems", num_a, num_b);
        if (num_a > num_b) {
            return -1;
        }
        else if (num_b > num_a) {
            return 1;
        }
        else {
            return 0;
        }
    }
}
function createWizziFactory(globalContext, callback) {
    if (wizzi == null) {
        var wizzi = require('../../../wizzi/dist/index');
    }
    console.log('"wizzi" package version', wizzi.version);
    wizzi.fsnoaclFactory({
        plugins: {
            items: [
                './wizzi.plugin.docx/dist/index.js', 
                './wizzi-core/dist/index.js'
            ], 
            pluginsBaseFolder: path.resolve(__dirname, '..', '..', '..')
        }, 
        globalContext: globalContext || {}
    }, callback)
}
function loadMTree(ittfDocumentUri, context, callback) {
    createWizziFactory({}, function(err, wf) {
        if (err) {
            return callback(err);
        }
        wf.loadMTree(ittfDocumentUri, context, callback)
    })
}
function loadMTreeDebugInfo(ittfDocumentUri, context, callback) {
    createWizziFactory({}, function(err, wf) {
        if (err) {
            return callback(err);
        }
        wf.loadMTreeDebugInfo(ittfDocumentUri, context, callback)
    })
}
function loadWizziModel(ittfDocumentUri, context, callback) {
    var fi = fileInfoByPath(ittfDocumentUri);
    createWizziFactory({}, function(err, wf) {
        if (err) {
            return callback(err);
        }
        wf.loadModel(fi.schema, ittfDocumentUri, {
            mTreeBuildUpContext: context, 
            globalContext: {}
        }, callback)
    })
}
function loadWizziModelAndSaveToJson(ittfDocumentUri, context, outputFolder, callback) {
    var fi = fileInfoByPath(ittfDocumentUri);
    loadWizziModel(ittfDocumentUri, context, function(err, model) {
        if (err) {
            return callback(err);
        }
        file.write(path.join(outputFolder, fi.basename + '.json'), stringify(model.toJson(), null, 4))
        return callback(null);
    })
}
function loadModelAndGenerateArtifact(ittfDocumentUri, context, artifactName, callback) {
    var fi = fileInfoByPath(ittfDocumentUri);
    createWizziFactory({}, function(err, wf) {
        if (err) {
            return callback(err);
        }
        wf.loadModelAndGenerateArtifact(ittfDocumentUri, {
            modelRequestContext: context, 
            artifactRequestContext: {}
        }, artifactName, callback)
    })
}
function loadModelAndGenerateArtifactFromText(ittfContent, context, artifactName, callback) {
    createWizziFactory({}, function(err, wf) {
        if (err) {
            return callback(err);
        }
        wf.loadModelAndGenerateArtifactFromText(ittfContent, {
            modelRequestContext: context, 
            artifactRequestContext: {}
        }, artifactName, callback)
    })
}
function loadModelAndTransform(ittfDocumentUri, context, transformName, callback) {
    var fi = fileInfoByPath(ittfDocumentUri);
    createWizziFactory({}, function(err, wf) {
        if (err) {
            return callback(err);
        }
        loadWizziModel(ittfDocumentUri, context, function(err, model) {
            if (err) {
                return callback(err);
            }
            wf.transformModel(model, transformName, context, callback)
        })
    })
}
function executeWizziJob(ittfDocumentUri, context, callback) {
    createWizziFactory({}, function(err, wf) {
        if (err) {
            return callback(err);
        }
        wf.executeJob({
            name: path.basename(ittfDocumentUri), 
            path: ittfDocumentUri, 
            productionOptions: wizzi.productionOptions({
                indentSpaces: 4, 
                basedir: __dirname, 
                verbose: 2
            }), 
            modelContext: context || {}, 
            jobContext: {}
        }, callback)
    })
}
function executeWizziJob_2(wfjobDocumentUri, options) {
    options = options || {};
    options.plugins = options.plugins || [];
    options.globalContext = options.globalContext || {};
    var jobPlugins = [
        'wizzi-core', 
        'wizzi-meta', 
        'wizzi-js', 
        'wizzi-web'
    ];
    var i, i_items=options.plugins, i_len=options.plugins.length, item;
    for (i=0; i<i_len; i++) {
        item = options.plugins[i];
        jobPlugins.push(item);
    }
    if (wizzi == null) {
        wizzi = require('wizzi');
    }
    wizzi.executeWizziJob({
        user: 'stefi', 
        role: 'admin', 
        storeKind: 'filesystem', 
        config: {
            wfBaseFolder: 'c:/my/wizzi/v5', 
            plugins: jobPlugins
        }, 
        job: {
            name: 'example ' + wfjobDocumentUri, 
            ittfDocumentUri: wfjobDocumentUri, 
            productionOptions: wizzi.productionOptions({
                indentSpaces: 4, 
                basedir: __dirname, 
                verbose: 2
            }), 
            globalContext: options.globalContext
        }
    }, function(err) {
        if (err) {
            wizzi.printWizziJobError('sample', err);
        }
    })
}
function executeGenerateModelTypes(wfschemaIttfDocumentUri, outputPackagePath, wfschemaName, mTreeBuildUpContext, callback) {
    createWizziFactory({}, function(err, wf) {
        if (err) {
            return callback(err);
        }
        wf.generateModelTypes(wfschemaIttfDocumentUri, outputPackagePath, wfschemaName, mTreeBuildUpContext, callback)
    })
}
function getIttfFilesBySchema(srcpath, schema) {
    return fs.readdirSync(srcpath).filter((file) => {
            return fs.lstatSync(path.join(srcpath, file)).isFile() && verify.endsWith(file, (schema === 'ittf' ? '.ittf' : '.' + schema + '.ittf'));
        })
    ;
}
function fileInfoByPath(filePath, baseFolder) {
    if (typeof baseFolder === 'undefined') {
        baseFolder = path.dirname(filePath);
    }
    filePath = normalize(filePath);
    var basename = path.basename(filePath);
    var dirname = path.dirname(filePath);
    var relFolder = path.dirname(filePath).length > baseFolder.length ? path.dirname(filePath).substr(baseFolder.length + 1) : '';
    var fileUri = filePath.substr();
    var ss = basename.split('.');
    if (ss[ss.length-1] === 'ittf') {
        var name = ss.slice(0, ss.length-2).join('.');
        var schema = ss[ss.length-2];
        var mime = DEFAULT_MIME[schema] || schema;
        return {
                name: name, 
                basename: basename, 
                isIttfDocument: true, 
                isFragment: filePath.indexOf('/t/') > -1, 
                schema: schema, 
                mime: mime, 
                relFolder: relFolder, 
                fullPath: filePath, 
                destBasename: name + '.' + mime, 
                destRelPath: relFolder.length > 0 ? relFolder + '/' + name + '.' + mime : name + '.' + mime
            };
    }
    else {
        return {
                name: ss.slice(0, ss.length-1).join('.'), 
                basename: basename, 
                isIttfDocument: false, 
                schema: null, 
                mime: ss[ss.length-1], 
                relFolder: relFolder, 
                fullPath: filePath, 
                destBasename: basename, 
                destRelPath: relFolder.length > 0 ? relFolder + '/' + basename : basename
            };
    }
}
var DEFAULT_MIME = {
    css: 'css', 
    graphql: 'graphql', 
    html: 'html', 
    ittf: 'ittf', 
    js: 'js', 
    json: 'json', 
    md: 'md', 
    scss: 'scss', 
    text: 'text', 
    ts: 'ts', 
    vtt: 'vtt', 
    vue: 'vue', 
    xml: 'xml', 
    yaml: 'yaml'
};
function normalize(filepath) {
    return verify.replaceAll(filepath, '\\', '/');
}
module.exports = executeExample;
if (require.main === module) {
    executeExample();
}
