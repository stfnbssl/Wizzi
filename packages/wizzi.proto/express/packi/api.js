const path = require('path')
const mongoose = require('mongoose');
const wizziProds = require('../../wizzi/productions');
const pDependency = require('../../mongoose/packi/packiDependency');
const pItem = require('../../mongoose/packi/packiItem');

let PackiDependency;
let PackiItem;
let DefaultContext;

function merge(a, b) {
    var ret = {};
    for (var k in a) { ret[k] = a[k]; }
    for (var k in b) { ret[k] = b[k]; }
    return ret;
}

let md;
module.exports = md = {
    start: function(defaultOwner, defaultContext, callback) {
        mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});
        mongoose.set('useFindAndModify', false);
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function() {
            PackiDependency = pDependency.getPackiDependency();
            PackiItem = pItem.getPackiItem();
            md.getPackiContextItem(defaultOwner, 'wzCtx;wzctx', {}).then(resultItemContext=>{
                DefaultContext = Object.assign({}, defaultContext, resultItemContext);
                callback(null);
            });
        });
    },
    getDefaultContext: function() {
        return DefaultContext;
    },
    getPacki: function(owner, name) {
        var query = { owner: owner, name: name};
        console.log('getPacki', query);
        return new Promise((resolve, reject) => {        
            PackiItem.find(query, function(err, result) {
                if (err) return reject(err);
                console.log('getPacki.result.length', result.length);
                if (result.length == 1) {
                    const item = result[0];
                    // console.log('getPacki.item', item);
                    if (item.wizziSchema && item.wizziSchema.length > 0) {
                        var querydep = { owner: owner, name: item.wizziSchema };
                        console.log('getPackiDependency', querydep);
                        PackiDependency.find(querydep, function(err, result) {
                            if (err) return reject(err);
                            console.log('PackiDependency.result.length', result.length);
                            let dep = {};
                            if (result.length == 1) {
                                dep = result[0];
                                // console.log('PackiDependency.dep', dep);
                                return resolve({
                                    mainIttf: item.mainIttf,
                                    packiFiles:  merge(dep.get('packiFiles', {}), item.get('packiFiles', {}))
                                })
                            } else {
                                return resolve({
                                    mainIttf: item.mainIttf,
                                    packiFiles: item.packiFiles
                                })
                            }
                        });
                    } else {
                        return resolve({
                            mainIttf: item.mainIttf,
                            packiFiles: item.packiFiles
                        })
                    }
                }
            });
        });
    },
    getPackiContext: function(owner, queryContext, defaultContext) {
        return new Promise((resolve, reject) => { 
            if (queryContext && queryContext.length > 0) {
                const contextItems = queryContext.split('|');
                var j = 0;
                let resultContext = defaultContext;
                (function next() {
                    var contextItem = contextItems[j++];
                    if (!contextItem) {
                        console.log('done getPackiContext', Object.keys(resultContext));
                        return resolve(resultContext);
                    }
                    md.getPackiContextItem(owner, contextItem, defaultContext).then(resultItemContext=>{
                        resultContext = Object.assign({}, resultContext, resultItemContext);
                        next();
                    }).catch(err=> reject(err));
                })();
            } else {
                resolve(defaultContext);
            }
        });
    },
    getPackiContextItem: function(owner, queryContext, defaultContext) {
        return new Promise((resolve, reject) => { 
            if (queryContext && queryContext.length > 0) {
                const parts = queryContext.split(';');
                const contextName = parts[0];
                const contextPackiName = parts[1];
                const contextTransformation = parts.length > 2 ? parts[2] : null;
                console.log('getPackiContextItem: contextName', contextName, 'contextPackiName', contextPackiName, 'contextTransformation', contextTransformation);
                if (contextTransformation) {
                    md.getPackiTransformation(owner, contextPackiName, contextTransformation, defaultContext).then(result => {
                        console.log('getPackiContextItem: typeof result', typeof result.transformResult);
                        // const contextObject = JSON.parse(result.transformResult);
                        resolve(Object.assign(
                            {}, 
                            defaultContext, 
                            {
                                [contextName]: result.transformResult
                            })
                        );
                    })
                } else {
                    md.getPackiGeneration(owner, contextPackiName, defaultContext).then(result => {
                        console.log('getPackiContextItem', result.content.length);
                        const contextObject = JSON.parse(result.content);
                        resolve(Object.assign(
                            {}, 
                            defaultContext, 
                            {
                                [contextName]: contextObject
                            })
                        );
                    })
                }
            } else {
                resolve(defaultContext);
            }
        });
    },
    getPackiGeneration: function(owner, name, context) {
        return new Promise((resolve, reject) => {        
            md.getPacki(owner, name)
                .then(packiItem => {
                    wizziProds.generateArtifact(packiItem.mainIttf, packiItem.packiFiles, context)
                        .then(result => {
                            console.log('getPackiGeneration', name, result.artifactContent.length);
                            console.log('getPackiGeneration', name, result.artifactContent.substring(0, 500) + '...');
                            const response = {
                                content: result.artifactContent,
                                contentLength: result.artifactContent.length,
                                contentType: contentTypeFor(packiItem.mainIttf)
                            };
                            return resolve(response);
                        }).catch(err => {
                            return reject(err);
                        });
                    })
                })/*.catch(err => {
                    console.log('err', err);
                    reject(err)
                })*/;
    },
    getPackiTransformation: function(owner, name, transformerName, context) {
        return new Promise((resolve, reject) => {
            md.getPacki(owner, name)
                .then(packiItem => {
                    wizziProds.transformModel(packiItem.mainIttf, packiItem.packiFiles, context, {transformer: transformerName})
                        .then(result => {
                            console.log('getPackiTransformation', Object.keys(result));
                            return resolve(result);
                        }).catch(err => {
                            return reject(err);
                        });
                })
            }).catch(err => {
                console.log('err', err);
                reject(err)
            });
    }
}

const extContentTypeMap = {
    '.css': 'text/css', 
    '.gif': 'image/gif', 
    '.html': 'text/html', 
    '.ittf': 'text/plain', 
    '.jpeg': 'image/jpeg', 
    '.jpg': 'image/jpg', 
    '.js': 'text/javascript', 
    '.json': 'application/json', 
    '.png': 'image/png', 
    '.scss': 'text/scss', 
    '.svg': 'image/svg+xml', 
    '.ttf': 'application/x-font-ttf', 
    '.txt': 'text/plain', 
    '.vtt': 'text/vtt', 
    '.woff': 'application/x-font-woff', 
    '.yaml': 'text/yanl', 
    '.yml': 'text/yanl', 
    '.xml': 'text/xml'
 };

 function ittfSchemaOf(file) {
    const nameParts = path.basename(file).split('.');
    if (nameParts[nameParts.length - 1] === 'ittf') {
        return nameParts[nameParts.length - 2];
    }
    return undefined;
}

function contentTypeFor(file) {
    const ittfSchema = ittfSchemaOf(file);
    console.log('contentTypeFor', file, ittfSchema);
    if (ittfSchema) {
        return extContentTypeMap['.' + ittfSchema];
    }
    return undefined;
}
