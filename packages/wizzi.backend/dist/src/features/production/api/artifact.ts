/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.backend\.wizzi\src\features\production\api\artifact.ts.ittf
    utc time: Wed, 07 Jul 2021 15:52:36 GMT
*/
import path from 'path';
import NodeCache from 'node-cache';
import {GetArtifactProductionModel} from '../mongo/artifact';
import {IArtifactProductionModel} from '../types';
import {ValidateResult, CRUDResult} from '../../types';
import {packiTypes} from '../../packi';
import {tFolderApi, tFolderTypes} from '../../tfolder';
import {wizziProds} from '../../wizzi';

const myname = 'features.production.api.artifact';

const artifactCache = new NodeCache({
    stdTTL: 120, 
    checkperiod: 60
 });

export async function validateArtifactProduction(owner: string, name: string) {

    const ArtifactProduction = GetArtifactProductionModel();
    return new Promise((resolve, reject) => {
        
            let query = { owner: owner, name: name };
            ArtifactProduction.find(query, (err, result) => {
            
                console.log(myname, 'validateArtifactProduction', 'ArtifactProduction.find', 'error', err);
                if (err) {
                    return reject(err);
                }
                if (result.length == 1) {
                    return resolve({
                            isValid: false, 
                            message: 'artifact production already exists'
                         });
                }
                resolve({
                    isValid: true
                 })
            }
            )
        }
        );
}

export async function getListArtifactProduction(options?: any):  Promise<CRUDResult> {

    options = options || {};
    
    console.log(myname, 'getListArtifactProduction', 'options', options)
    
    const ArtifactProduction = GetArtifactProductionModel();
    
    return new Promise((resolve, reject) => {
        
            
            const query = ArtifactProduction.find(options.query);
            if (options.limit) {
                query.limit(options.limit);
            }
            if (options.sort) {
                query.sort(options.sort);
            }
            query.find((err, result) => {
            
                if (err) {
                    console.log(myname, 'getListArtifactProduction', 'ArtifactProduction.find', 'error', err);
                    return reject(err);
                }
                console.log(myname, 'getListArtifactProduction', 'ArtifactProduction.find', 'result', result);
                resolve({
                    oper: 'getList', 
                    ok: true, 
                    item: result
                 })
            }
            )
        }
        );
}

export async function getArtifactProduction(owner: string, name: string):  Promise<CRUDResult> {

    
    console.log(myname, 'getArtifactProduction', owner, name)
    
    const ArtifactProduction = GetArtifactProductionModel();
    
    return new Promise((resolve, reject) => {
        
            
            let query = {
                owner: owner, 
                name: name
             };
            
            ArtifactProduction.find(query, (err, result) => {
            
                if (err) {
                    console.log(myname, 'getArtifactProduction', 'ArtifactProduction.find', 'error', err);
                    return reject(err);
                }
                if (result.length == 1) {
                    return resolve({
                            oper: 'get', 
                            ok: true, 
                            item: result[0]
                         });
                }
                resolve({
                    oper: 'get', 
                    ok: false, 
                    message: 'artifact production not found'
                 })
            }
            )
        }
        );
}

export async function createArtifactProduction(owner: string, name: string, description: string, mainIttf: string, wizziSchema: string, packiFiles: string):  Promise<CRUDResult> {

    
    console.log(myname, 'createArtifactProduction', owner, name, description, mainIttf, wizziSchema, packiFiles)
    
    const ArtifactProduction = GetArtifactProductionModel();
    
    return new Promise((resolve, reject) => {
        
            
            let query = {
                owner: owner, 
                name: name
             };
            
            ArtifactProduction.find(query, (err, result) => {
            
                if (err) {
                    console.log(myname, 'getArtifactProduction', 'ArtifactProduction.find', 'error', err);
                    return reject(err);
                }
                console.log(myname, 'getArtifactProduction', 'ArtifactProduction.find', 'result', result);
                if (result.length > 0) {
                    return resolve({
                            oper: 'create', 
                            ok: false, 
                            message: 'artifact production already exists'
                         });
                }
                const newArtifactProduction = new ArtifactProduction({
                    owner: owner, 
                    name: name, 
                    description: description, 
                    mainIttf: mainIttf, 
                    wizziSchema: wizziSchema, 
                    packiFiles: packiFiles, 
                    created_at: new Date(), 
                    updated_at: new Date()
                 });
                newArtifactProduction.save(function(err, doc) {
                
                    if (err) {
                        console.log(myname, 'createArtifactProduction', 'newArtifactProduction.save', 'error', err);
                        return reject(err);
                    }
                    return resolve({
                            oper: 'create', 
                            ok: true, 
                            item: doc._doc, 
                            message: 'artifact production created'
                         });
                })
            }
            )
        }
        );
}

export async function updateArtifactProduction(owner: string, name: string, description: string, mainIttf: string, wizziSchema: string, packiFiles: string):  Promise<CRUDResult> {

    
    console.log(myname, 'updateArtifactProduction', owner, name, description, mainIttf, wizziSchema, packiFiles)
    
    const ArtifactProduction = GetArtifactProductionModel();
    
    return new Promise((resolve, reject) => {
        
            
            let query = {
                owner: owner, 
                name: name
             };
            let update = {
                owner: owner, 
                name: name, 
                description: description, 
                mainIttf: mainIttf, 
                wizziSchema: wizziSchema, 
                packiFiles: packiFiles, 
                updated_at: new Date()
             };
            
            ArtifactProduction.findOneAndUpdate(query, update, {}, (err, result) => {
            
                if (err) {
                    console.log(myname, 'updateArtifactProduction', 'ArtifactProduction.findOneAndUpdate', 'error', err);
                    return reject(err);
                }
                
                console.log(myname, 'updateArtifactProduction', 'ArtifactProduction.findOneAndUpdate', 'result', result);
                return resolve({
                        oper: 'update', 
                        ok: true, 
                        message: 'artifact production updated'
                     });
            }
            )
        }
        );
}
function mergePackiFiles(a: any, b: any) {

    var ret: any = {};
    for (var k in a) {
        ret[k] = a[k];
    }
    for (var k in b) {
        ret[k] = b[k];
    }
    return ret;
}

export async function getArtifactProduction_withCache(owner: string, name: string) {

    var cacheKey = owner + '|' + name;
    console.log('getArtifactProduction_withCache.cacheKey', cacheKey);
    return new Promise((resolve, reject) => {
        
            let apValue = artifactCache.get(cacheKey);
            if (apValue) {
                return resolve(apValue);
            }
            getArtifactProduction(owner, name).then((result) => {
            
                if (!result.ok) {
                    return reject(result);
                }
                const ap: IArtifactProductionModel = result.item;
                const ap_packiFiles_object: packiTypes.PackiFiles = JSON.parse(ap.packiFiles);
                if (ap.wizziSchema && ap.wizziSchema.length > 0) {
                    console.log('getArtifactProduction_withCache.getTFolder', owner, ap.wizziSchema);
                    tFolderApi.getTFolder(owner, ap.wizziSchema).then((result) => {
                    
                        if (!result.ok) {
                            apValue = {
                                mainIttf: ap.mainIttf, 
                                packiFiles: ap_packiFiles_object
                             };
                            artifactCache.set(cacheKey, apValue);
                            return resolve(apValue);
                        }
                        const tf: tFolderTypes.ITFolderModel = result.item;
                        const tf_packiFiles_object: packiTypes.PackiFiles = JSON.parse(tf.packiFiles);
                        apValue = {
                            mainIttf: ap.mainIttf, 
                            packiFiles: mergePackiFiles(ap_packiFiles_object, tf_packiFiles_object)
                         };
                        artifactCache.set(cacheKey, apValue);
                        return resolve(apValue);
                    }
                    ).catch((err: any) => {
                    
                        console.log('getArtifactProduction_withCache.getTFolder.error', err);
                        return reject(err);
                    }
                    )
                }
                else {
                    apValue = {
                        mainIttf: ap.mainIttf, 
                        packiFiles: ap_packiFiles_object
                     };
                    artifactCache.set(cacheKey, apValue);
                    return resolve(apValue);
                }
            }
            ).catch((err: any) => {
            
                console.log('getArtifactProduction_withCache.getArtifactProduction.error', err);
                return reject(err);
            }
            )
        }
        );
}

export async function getDefaultContext_withCache(owner: string, sysContext?: any) {

    sysContext = sysContext || {};
    return new Promise((resolve, reject) => 
        
            getArtifactContextItem(owner, 'wzCtx;wzctx', {}).then((resultItemContext: any) => {
            
                const defaultContext = Object.assign({}, sysContext, resultItemContext);
                console.log('getDefaultContext_withCache', 'got context item wzCtx;wzctx');
                resolve(defaultContext);
            }
            ).catch((err: any) => {
            
                console.log('getDefaultContext_withCache.getArtifactContextItem.error', err);
                return reject(err);
            }
            )
        
        );
}

export async function getArtifactContext(owner: string, queryContextString: string, sysContext?: any) {

    sysContext = sysContext || {};
    return new Promise((resolve, reject) => {
        
            if (queryContextString && queryContextString.length > 0) {
                const contextItems = queryContextString.split('|');
                var j = 0;
                let resultContext = sysContext;
                (function next() {
                
                    var contextItem = contextItems[j++];
                    if (!contextItem) {
                        console.log('getArtifactContext.done.keys', Object.keys(resultContext));
                        return resolve(resultContext);
                    }
                    getArtifactContextItem(owner, contextItem, sysContext).then((resultItemContext: any) => {
                    
                        resultContext = Object.assign({}, resultContext, resultItemContext)
                        ;
                        next();
                    }
                    ).catch((err: any) => {
                    
                        console.log('getArtifactContext.getArtifactContextItem.error', err);
                        return reject(err);
                    }
                    )
                })();
            }
            else {
                resolve(sysContext);
            }
        }
        );
}

export async function getArtifactContextItem(owner: string, queryContextString: string, sysContext?: any) {

    sysContext = sysContext || {};
    return new Promise((resolve, reject) => {
        
            if (queryContextString && queryContextString.length > 0) {
                const parts = queryContextString.split(';');
                const contextName = parts[0];
                const contextArtifactName = parts[1];
                const contextTransformation = parts.length > 2 ? parts[2] : null;
                console.log('getArtifactContextItem: contextName', contextName, 'contextArtifactName', contextArtifactName, 'contextTransformation', contextTransformation);
                if (contextTransformation) {
                    getArtifactTransformation(owner, contextArtifactName, sysContext, contextTransformation).then((result: any) => {
                    
                        console.log('getArtifactContextItem: typeof result.transformResult', typeof result.transformResult);
                        resolve(Object.assign({}, sysContext, {
                            [contextName]: result.transformResult
                         }))
                    }
                    ).catch((err: any) => {
                    
                        console.log('getArtifactContextItem.getArtifactTransformation.error', err);
                        return reject(err);
                    }
                    )
                }
                else {
                    getArtifactGeneration(owner, contextArtifactName, sysContext).then((result: any) => {
                    
                        console.log('getArtifactContextItem.getArtifactGeneration.result.content.length', result.content.length);
                        const contextObject = JSON.parse(result.content);
                        resolve(Object.assign({}, sysContext, {
                            [contextName]: contextObject
                         }))
                    }
                    ).catch((err: any) => {
                    
                        console.log('getArtifactContextItem.getArtifactGeneration.error', err);
                        return reject(err);
                    }
                    )
                }
            }
            else {
                resolve(sysContext);
            }
        }
        );
}

export async function getArtifactTransformation(owner: string, name: string, context: any, transformerName: string) {

    return new Promise((resolve, reject) => 
        
            getArtifactProduction(owner, name).then((ap: any) => 
            
                wizziProds.transformModel(ap.mainIttf, ap.packiFiles, context, {
                    transformer: transformerName
                 }).then((result: any) => {
                
                    console.log('getArtifactTransformation.transformModel.keys', Object.keys(result));
                    return resolve(result);
                }
                ).catch((err: any) => {
                
                    console.log('getArtifactTransformation.transformModel.error', err);
                    return reject(err);
                }
                )
            
            ).catch((err: any) => {
            
                console.log('getArtifactTransformation.getArtifactProduction.error', err);
                return reject(err);
            }
            )
        
        );
}

export async function getArtifactGeneration(owner: string, name: string, context: any) {

    return new Promise((resolve, reject) => 
        
            getArtifactProduction_withCache(owner, name).then((ap: any) => 
            
                wizziProds.generateArtifact(ap.mainIttf, ap.packiFiles, context).then((result: any) => {
                
                    console.log('getArtifactGeneration', name, result.artifactContent.length);
                    console.log('getArtifactGeneration', name, result.artifactContent.substring(0, 500) + '...');
                    const response = {
                        content: result.artifactContent, 
                        contentLength: result.artifactContent.length, 
                        contentType: contentTypeFor(ap.mainIttf)
                     };
                    return resolve(response);
                }
                ).catch((err: any) => {
                
                    console.log('getArtifactGeneration.generateArtifact.error', err);
                    return reject(err);
                }
                )
            
            ).catch((err: any) => {
            
                console.log('getArtifactGeneration.getArtifactProduction.error', err);
                return reject(err);
            }
            )
        
        );
}

const extContentTypeMap: { 
    [k: string]: string;
} = {
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

function ittfSchemaOf(file: string) {

    const nameParts = path.basename(file).split('.');
    if (nameParts[nameParts.length - 1] === 'ittf') {
        return nameParts[nameParts.length - 2];
    }
    return undefined;
}

function contentTypeFor(file: string) {

    const ittfSchema = ittfSchemaOf(file);
    console.log('contentTypeFor', file, ittfSchema);
    if (ittfSchema) {
        return extContentTypeMap['.' + ittfSchema];
    }
    return undefined;
}
