/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\server\src\features\wizzi\factory.ts.ittf
    utc time: Thu, 13 May 2021 19:47:49 GMT
*/
import path from 'path';
import wizzi from 'wizzi';
import {JsonComponents, JsonDocumentDto, FsJson} from 'wizzi-repo';
import {config as appConfig} from '../config';
import {JsonWizziFactory, FilesystemWizziFactory} from './types';

export async function createFilesystemFactory(globalContext?: { 
    [k: string]: any;
}):  Promise<wizzi.WizziFactory> {

    const gc: { 
        [k: string]: any;
    } = {};
    if (appConfig.isWizziDev) {
        gc['isWizziStudio'] = true;
    }
    return new Promise((resolve, reject) => 
        
            wizzi.fsFactory({
                plugins: {
                    items: [
                        './wizzi-core/dist/index.js', 
                        './wizzi-js/dist/index.js', 
                        './wizzi-web/dist/index.js', 
                        './wizzi-meta/dist/index.js'
                    ], 
                    pluginsBaseFolder: 'C:/My/wizzi/stfnbssl/wizzi/packages'
                 }, 
                globalContext: Object.assign({}, gc, globalContext || {})
             }, function(err, wf) {
            
                if (err) {
                    return reject(err);
                }
                resolve(wf);
            })
        );
}

const schemaPluginMap: { 
    [k: string]: string[];
} = {
    json: [
        'wizzi-core'
    ], 
    text: [
        'wizzi-core'
    ], 
    xml: [
        'wizzi-core'
    ], 
    ittf: [
        'wizzi-core'
    ], 
    wfjob: [
        'wizzi-core'
    ], 
    wfschema: [
        'wizzi-core'
    ], 
    js: [
        'wizzi-js'
    ], 
    ts: [
        'wizzi-js'
    ], 
    html: [
        'wizzi-web', 
        'wizzi-js', 
        'wizzi-core'
    ], 
    css: [
        'wizzi-web'
    ], 
    scss: [
        'wizzi-web'
    ], 
    graphql: [
        'wizzi-web'
    ], 
    vml: [
        'wizzi-web'
    ], 
    vue: [
        'wizzi-web'
    ]
 };

function pluginsFor(file: string):  string[] {

    const nameParts = path.basename(file).split('.');
    if (nameParts[nameParts.length - 1] === 'ittf') {
        return schemaPluginMap[nameParts[nameParts.length - 2]] || [];
    }
    return [];
}
