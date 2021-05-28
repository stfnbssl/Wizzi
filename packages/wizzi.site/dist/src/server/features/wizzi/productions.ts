/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\server\src\features\wizzi\productions.ts.ittf
    utc time: Fri, 28 May 2021 20:54:57 GMT
*/
import path from 'path';
import fs from 'fs';
import wizzi from 'wizzi';
import wizziTools from 'wizzi-tools';
import {ittfDocumentScanner, folderBrowse, IttfMTreeState, FolderBrowseResult} from 'wizzi-utils';
import {packiTypes} from '../packi';
import {config} from '../config';
import {createFsJsonAndFactory, ensurePackiFilePrefix, createFilesystemFactory} from './factory';
import {GeneratedArtifact} from './types';
import {FsJson} from 'wizzi-repo';

export async function mTreeDebugInfo(filePath: string, files: packiTypes.PackiFiles, context: any):  Promise<string> {

    return new Promise(async (resolve, reject) => {
        
            const ittfDocumentUri = ensurePackiFilePrefix(filePath) as string
            ;
            let jsonwf: any = {};
            jsonwf = await createFsJsonAndFactory(files);
            ;
            jsonwf.wf.loadMTreeDebugInfo(ittfDocumentUri, context, (err: any, buildUpScript: string) => {
            
                if (err) {
                    return reject(err);
                }
                resolve(buildUpScript)
            }
            )
        }
        );
}

export async function generateArtifact(filePath: string, files: packiTypes.PackiFiles):  Promise<GeneratedArtifact> {

    return new Promise(async (resolve, reject) => {
        
            const generator = generatorFor(filePath);
            console.log('wizzi.productions.using artifact generator', generator);
            if (generator) {
                let jsonwf: any = {};
                let context: any = {};
                const ittfDocumentUri = ensurePackiFilePrefix(filePath) as string
                ;
                const siteDocumentUri = Object.keys(files).find(k => 
                
                    k.endsWith('site.json.ittf')
                );
                try {
                    jsonwf = await createFsJsonAndFactory(files);
                    ;
                    context = {
                        site: siteDocumentUri ? await loadModelJson(jsonwf.wf, ensurePackiFilePrefix(siteDocumentUri), {}) : null, 
                        ...(await inferAndLoadContextJson(jsonwf.wf, files, ittfDocumentUri, 'twin'))
                        
                     };
                    console.log('wizzi.productions.generateArtifact.context', Object.keys(context));
                    jsonwf.wf.loadModelAndGenerateArtifact(ittfDocumentUri, {
                        modelRequestContext: {
                            mTreeBuildUpContext: context
                         }
                     }, generator, (err: any, result: string) => {
                    
                        if (err) {
                            return reject(err);
                        }
                        // console.log('Generated artifact', result);
                        resolve({
                            artifactContent: result, 
                            sourcePath: filePath, 
                            artifactGenerator: generator
                         })
                    }
                    )
                } 
                catch (ex) {
                    return reject(ex);
                } 
            }
            else {
                reject('No artifact generator available for document ' + filePath);
            }
        }
        );
}

export async function generateArtifactFs(filePath: string, context?: any):  Promise<GeneratedArtifact> {

    return new Promise(async (resolve, reject) => {
        
            const generator = generatorFor(filePath);
            if (generator) {
                console.log('wizzi.productions.using artifact generator', generator);
                const wf = await createFilesystemFactory();
                const generationContext = {
                    modelRequestContext: context || {}
                 };
                wf.loadModelAndGenerateArtifact(filePath, generationContext, generator, (err, result) => {
                
                    if (err) {
                        return reject(err);
                    }
                    // console.log('Generated artifact', result);
                    resolve({
                        artifactContent: result, 
                        sourcePath: filePath, 
                        artifactGenerator: generator
                     })
                }
                )
            }
            else {
                reject('No artifact generator available for document ' + filePath);
            }
        }
        );
}

export async function executeJob(filePath: string, files: packiTypes.PackiFiles):  Promise<FsJson> {

    return new Promise(async (resolve, reject) => {
        
            const ittfDocumentUri = ensurePackiFilePrefix(filePath);
            const jsonwf = await createFsJsonAndFactory(files);
            jsonwf.wf.executeJob({
                name: '', 
                path: ittfDocumentUri, 
                productionOptions: {
                    
                 }
             }, (err, result) => {
            
                if (err) {
                    return reject(err);
                }
                console.log('Job executed. result', result);
                resolve(jsonwf.fsJson);
            }
            )
        }
        );
}

export async function executeJobs(files: packiTypes.PackiFiles):  Promise<FsJson> {

    return new Promise(async (resolve, reject) => {
        
            const jobDocumentUris = Object.keys(files).filter(k => 
            
                k.endsWith('.wfjob.ittf')
            );
            console.log('Executing jobs', jobDocumentUris, 'files', Object.keys(files));
            const jsonwf = await createFsJsonAndFactory(files);
            const execJob = (index: number):  void => {
            
                if (index == jobDocumentUris.length) {
                    console.log('Jobs executed.');
                    return resolve(jsonwf.fsJson);
                }
                const ittfDocumentUri = ensurePackiFilePrefix(jobDocumentUris[index]);
                console.log('Executing job', ittfDocumentUri);
                jsonwf.wf.executeJob({
                    name: '', 
                    path: ittfDocumentUri, 
                    productionOptions: {
                        
                     }
                 }, (err, result) => {
                
                    if (err) {
                        return reject(err);
                    }
                    console.log('Job executed. result', result);
                    execJob(index + 1);
                }
                )
            }
            ;
            execJob(0);
        }
        );
}

export async function wizzify(files: packiTypes.PackiFiles):  Promise<packiTypes.PackiFiles> {

    return new Promise(async (resolve, reject) => {
        
            var result: packiTypes.PackiFiles = {};
            for (const k of Object.keys(files)) {
                var extension = path.extname(k);
                console.log('productions.wizzify', k, extension);
                const ittfResult = await handleWizzify(extension, files[k].contents);
                result[k + '.ittf'] = {
                    type: 'CODE', 
                    contents: ittfResult
                 };
            }
            return resolve(result);
        }
        );
}

const extSchemaMap: { 
    [k: string]: string;
} = {
    '.js': 'js', 
    '.jsx': 'js', 
    '.ts': 'ts', 
    '.tsx': 'ts', 
    '.html': 'html', 
    '.css': 'css', 
    '.svg': 'svg', 
    '.md': 'md', 
    '.xml': 'xml', 
    '.json': 'json', 
    '.graphql': 'graphql'
 };

function handleWizzify(extension: string, codeSnippet: string):  Promise<string> {

    return new Promise(async (resolve, reject) => {
        
            var schema = extSchemaMap[extension];
            if (schema) {
                wizziTools.wizzify(schema, codeSnippet, {}, function(err: any, ittfResult: string) {
                
                    if (err) {
                        reject(err)
                    }
                    resolve(ittfResult)
                })
            }
            else {
                reject(new Error('Extension "' + extension + '" has no wizzifier'))
            }
        }
        );
}

export async function loadModelJson(wf: wizzi.WizziFactory, filePath: string, context: any):  Promise<wizzi.WizziModel> {

    return new Promise(async (resolve, reject) => {
        
            const schemaName = schemaFromFilePath(filePath);
            if (!schemaName) {
                return reject('File is not a known ittf document: ' + filePath);
            }
            wf.loadModel(schemaName, filePath, {
                mTreeBuildUpContext: context
             }, (err, result) => {
            
                if (err) {
                    return reject(err);
                }
                // console.log('Generated artifact', result);
                resolve(result);
            }
            )
        }
        );
}

export async function loadModelFs(filePath: string, context: any):  Promise<wizzi.WizziModel> {

    return new Promise(async (resolve, reject) => {
        
            const schemaName = schemaFromFilePath(filePath);
            if (!schemaName) {
                return reject('File is not a known ittf document: ' + filePath);
            }
            const wf = await createFilesystemFactory();
            wf.loadModel(schemaName, filePath, {
                mTreeBuildUpContext: context
             }, (err, result) => {
            
                if (err) {
                    return reject(err);
                }
                // console.log('Generated artifact', result);
                resolve(result);
            }
            )
        }
        );
}

export async function scanIttfDocument(filePath: string, rootFolder: string):  Promise<IttfMTreeState> {

    return new Promise((resolve, reject) => 
        
            ittfDocumentScanner.scan(filePath, {
                rootFolder
             }, (err, result) => {
            
                if (err) {
                    return reject(err);
                }
                resolve(result);
            }
            )
        );
}

export async function scanIttfFolder(filePath: string, rootFolder: string):  Promise<FolderBrowseResult> {

    return new Promise((resolve, reject) => 
        
            folderBrowse.scan(filePath, {
                rootFolder
             }, (err, result) => {
            
                if (err) {
                    return reject(err);
                }
                resolve(result);
            }
            )
        );
}

export async function inferAndLoadContextJson(wf: wizzi.WizziFactory, files: packiTypes.PackiFiles, filePath: string, exportName: string):  Promise<any> {

    return new Promise((resolve, reject) => {
        
            const pf = parseFilePath(filePath);
            if (pf.isIttfDocument && pf.schema !== 'json') {
                var twinJsonBaseName = pf.seedname + '.json.ittf';
                console.log('features.wizzi.productions.inferAndLoadContextJson.twinJsonBaseName', twinJsonBaseName);
                const twinDocumentUri = Object.keys(files).find(k => 
                
                    k.endsWith('/' + twinJsonBaseName)
                );
                console.log('features.wizzi.productions.inferAndLoadContextJson.twinDocumentUri', twinDocumentUri, Object.keys(files));
                if (twinDocumentUri) {
                    loadModelJson(wf, ensurePackiFilePrefix(twinDocumentUri), {}).then(model => 
                    
                        resolve({
                            [exportName]: model
                         })
                    ).catch(err => 
                    
                        reject(err)
                    )
                }
                else {
                    resolve({})
                }
            }
            else {
                resolve({})
            }
        }
        );
}

export async function inferAndLoadContextFs(filePath: string, exportName: string):  Promise<any> {

    return new Promise((resolve, reject) => {
        
            const pf = parseFilePath(filePath);
            if (pf.isIttfDocument && pf.schema !== 'json') {
                var twinJsonPath = path.join(path.dirname(filePath), pf.seedname + '.json.ittf');
                if (fs.existsSync(twinJsonPath)) {
                    loadModelFs(twinJsonPath, {}).then(model => 
                    
                        resolve({
                            [exportName]: model
                         })
                    ).catch(err => 
                    
                        reject(err)
                    )
                }
                else {
                    resolve({})
                }
            }
            else {
                resolve({})
            }
        }
        );
}

const schemaModuleMap: { 
    [k: string]: string;
} = {
    css: 'css/document', 
    graphql: 'graphql/document', 
    ittf: 'ittf/document', 
    js: 'js/module', 
    json: 'json/document', 
    html: 'html/document', 
    md: 'md/document', 
    scss: 'scss/document', 
    svg: 'svg/document', 
    text: 'text/document', 
    ts: 'ts/module', 
    vml: 'vml/document', 
    vue: 'vue/document', 
    xml: 'xml/document'
 };

function generatorFor(filePath: string):  string | undefined {

    const pf = parseFilePath(filePath);
    if (pf.isIttfDocument) {
        return schemaModuleMap[pf.schema];
    }
    return undefined;
}

function schemaFromFilePath(filePath: string):  string | undefined {

    const pf = parseFilePath(filePath);
    if (pf.isIttfDocument) {
        return pf.schema;
    }
    return undefined;
}

type parsedFilePath = { 
    seedname: string;
    schema: string;
    isIttfDocument: boolean;
};

export function parseFilePath(filePath: string):  parsedFilePath {

    const nameParts = path.basename(filePath).split('.');
    if (nameParts[nameParts.length - 1] === 'ittf') {
        return {
                isIttfDocument: true, 
                schema: nameParts[nameParts.length - 2], 
                seedname: nameParts.slice(0, -2).join('.')
             };
    }
    else {
        return {
                isIttfDocument: false, 
                schema: nameParts[nameParts.length - 1], 
                seedname: nameParts.slice(0, -1).join('.')
             };
    }
}
