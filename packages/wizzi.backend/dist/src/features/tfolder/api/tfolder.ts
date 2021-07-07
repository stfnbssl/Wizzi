/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.backend\.wizzi\src\features\tfolder\api\tfolder.ts.ittf
    utc time: Wed, 07 Jul 2021 15:52:36 GMT
*/
import {GetTFolderModel} from '../mongo/tfolder';
import {ITFolderModel} from '../types';
import {ValidateResult, CRUDResult} from '../../types';

const myname = 'features.tfolder.api.tfolder';

export async function validateTFolder(owner: string, name: string) {

    const TFolder = GetTFolderModel();
    return new Promise((resolve, reject) => {
        
            let query = { owner: owner, name: name };
            TFolder.find(query, (err, result) => {
            
                console.log(myname, 'validateTFolder', 'TFolder.find', 'error', err);
                if (err) {
                    return reject(err);
                }
                if (result.length == 1) {
                    return resolve({
                            isValid: false, 
                            message: 'tFolder already exists'
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

export async function getListTFolder(options?: any):  Promise<CRUDResult> {

    options = options || {};
    
    console.log(myname, 'getListTFolder', 'options', options)
    
    const TFolder = GetTFolderModel();
    
    return new Promise((resolve, reject) => {
        
            
            const query = TFolder.find(options.query);
            if (options.limit) {
                query.limit(options.limit);
            }
            if (options.sort) {
                query.sort(options.sort);
            }
            query.find((err, result) => {
            
                if (err) {
                    console.log(myname, 'getListTFolder', 'TFolder.find', 'error', err);
                    return reject(err);
                }
                console.log(myname, 'getListTFolder', 'TFolder.find', 'result', result);
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

export async function getTFolder(owner: string, name: string):  Promise<CRUDResult> {

    
    console.log(myname, 'getTFolder', owner, name)
    
    const TFolder = GetTFolderModel();
    
    return new Promise((resolve, reject) => {
        
            
            let query = {
                owner: owner, 
                name: name
             };
            
            TFolder.find(query, (err, result) => {
            
                if (err) {
                    console.log(myname, 'getTFolder', 'TFolder.find', 'error', err);
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
                    message: 'tFolder not found'
                 })
            }
            )
        }
        );
}

export async function createTFolder(owner: string, name: string, description: string, packiFiles: string):  Promise<CRUDResult> {

    
    console.log(myname, 'createTFolder', owner, name, description, packiFiles)
    
    const TFolder = GetTFolderModel();
    
    return new Promise((resolve, reject) => {
        
            
            let query = {
                owner: owner, 
                name: name
             };
            
            TFolder.find(query, (err, result) => {
            
                if (err) {
                    console.log(myname, 'getTFolder', 'TFolder.find', 'error', err);
                    return reject(err);
                }
                console.log(myname, 'getTFolder', 'TFolder.find', 'result', result);
                if (result.length > 0) {
                    return resolve({
                            oper: 'create', 
                            ok: false, 
                            message: 'tFolder already exists'
                         });
                }
                const newTFolder = new TFolder({
                    owner: owner, 
                    name: name, 
                    description: description, 
                    packiFiles: packiFiles, 
                    created_at: new Date(), 
                    updated_at: new Date()
                 });
                newTFolder.save(function(err, doc) {
                
                    if (err) {
                        console.log(myname, 'createTFolder', 'newTFolder.save', 'error', err);
                        return reject(err);
                    }
                    return resolve({
                            oper: 'create', 
                            ok: true, 
                            item: doc._doc, 
                            message: 'tFolder created'
                         });
                })
            }
            )
        }
        );
}

export async function updateTFolder(owner: string, name: string, description: string, packiFiles: string):  Promise<CRUDResult> {

    
    console.log(myname, 'updateTFolder', owner, name, description, packiFiles)
    
    const TFolder = GetTFolderModel();
    
    return new Promise((resolve, reject) => {
        
            
            let query = {
                owner: owner, 
                name: name
             };
            let update = {
                owner: owner, 
                name: name, 
                description: description, 
                packiFiles: packiFiles, 
                updated_at: new Date()
             };
            
            TFolder.findOneAndUpdate(query, update, {}, (err, result) => {
            
                if (err) {
                    console.log(myname, 'updateTFolder', 'TFolder.findOneAndUpdate', 'error', err);
                    return reject(err);
                }
                
                console.log(myname, 'updateTFolder', 'TFolder.findOneAndUpdate', 'result', result);
                return resolve({
                        oper: 'update', 
                        ok: true, 
                        message: 'tFolder updated'
                     });
            }
            )
        }
        );
}
