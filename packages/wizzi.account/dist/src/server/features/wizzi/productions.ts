/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\server\src\features\wizzi\productions.ts.ittf
    utc time: Fri, 21 May 2021 16:01:34 GMT
*/
import path from 'path';
import fs from 'fs';
import wizzi from 'wizzi';
import {ittfDocumentScanner, folderBrowse, IttfMTreeState, FolderBrowseResult} from 'wizzi-utils';
import {config} from '../config';
import {createFilesystemFactory} from './factory';
import {GeneratedArtifact} from './types';
import {FsJson} from 'wizzi-repo';

export async function generateArtifactFs(filePath: string, context?: any):  Promise<GeneratedArtifact> {

    return new Promise(async (resolve, reject) => {
        
            const generator = generatorFor(filePath);
            if (generator) {
                console.log('wizzi.productions.using artifact generator', generator);
                const wf = await createFilesystemFactory();
                const generationContext = {
                    modelRequestContext: context || {}
                 };
                try {
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
