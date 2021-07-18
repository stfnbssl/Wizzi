/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.backend\.wizzi\src\features\production\api\package.ts.ittf
    utc time: Sun, 18 Jul 2021 15:08:53 GMT
*/
import {GetPackageProductionModel} from '../mongo/package';
import {IPackageProductionModel} from '../types';
import {ValidateResult, CRUDResult} from '../../types';

const myname = 'features.production.api.package';

export async function validatePackageProduction(owner: string, name: string) {

    const PackageProduction = GetPackageProductionModel();
    return new Promise((resolve, reject) => {
        
            let query = { owner: owner, name: name };
            PackageProduction.find(query, (err, result) => {
            
                console.log(myname, 'validatePackageProduction', 'PackageProduction.find', 'error', err);
                if (err) {
                    return reject(err);
                }
                if (result.length == 1) {
                    return resolve({
                            isValid: false, 
                            message: 'package production already exists'
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

export async function getListPackageProduction(options?: any):  Promise<CRUDResult> {

    options = options || {};
    
    console.log(myname, 'getListPackageProduction', 'options', options)
    
    const PackageProduction = GetPackageProductionModel();
    
    return new Promise((resolve, reject) => {
        
            
            const query = PackageProduction.find(options.query);
            if (options.limit) {
                query.limit(options.limit);
            }
            if (options.sort) {
                query.sort(options.sort);
            }
            query.find((err, result) => {
            
                if (err) {
                    console.log(myname, 'getListPackageProduction', 'PackageProduction.find', 'error', err);
                    return reject(err);
                }
                console.log(myname, 'getListPackageProduction', 'PackageProduction.find', 'Object.keys(result)', Object.keys(result));
                const resultItem = [];
                var i, i_items=result, i_len=result.length, item;
                for (i=0; i<i_len; i++) {
                    item = result[i];
                    const item_obj = {
                        owner: item.owner, 
                        name: item.name, 
                        description: item.description, 
                        packiFiles: item.packiFiles
                     };
                    resultItem.push(item_obj)
                }
                resolve({
                    oper: 'getList', 
                    ok: true, 
                    item: resultItem
                 })
            }
            )
        }
        );
}

export async function getPackageProduction(owner: string, name: string):  Promise<CRUDResult> {

    
    console.log(myname, 'getPackageProduction', owner, name)
    
    const PackageProduction = GetPackageProductionModel();
    
    return new Promise((resolve, reject) => {
        
            
            let query = {
                owner: owner, 
                name: name
             };
            
            PackageProduction.find(query, (err, result) => {
            
                if (err) {
                    console.log(myname, 'getPackageProduction', 'PackageProduction.find', 'error', err);
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
                    message: 'package production not found'
                 })
            }
            )
        }
        );
}

export async function createPackageProduction(owner: string, name: string, description: string, packiFiles: string):  Promise<CRUDResult> {

    
    console.log(myname, 'createPackageProduction', owner, name, description, packiFiles)
    
    const PackageProduction = GetPackageProductionModel();
    
    return new Promise((resolve, reject) => {
        
            
            let query = {
                owner: owner, 
                name: name
             };
            
            PackageProduction.find(query, (err, result) => {
            
                if (err) {
                    console.log(myname, 'getPackageProduction', 'PackageProduction.find', 'error', err);
                    return reject(err);
                }
                console.log(myname, 'getPackageProduction', 'PackageProduction.find', 'result', result);
                if (result.length > 0) {
                    return resolve({
                            oper: 'create', 
                            ok: false, 
                            message: 'package production already exists'
                         });
                }
                const newPackageProduction = new PackageProduction({
                    owner: owner, 
                    name: name, 
                    description: description, 
                    packiFiles: packiFiles, 
                    created_at: new Date(), 
                    updated_at: new Date()
                 });
                newPackageProduction.save(function(err, doc) {
                
                    if (err) {
                        console.log(myname, 'createPackageProduction', 'newPackageProduction.save', 'error', err);
                        return reject(err);
                    }
                    return resolve({
                            oper: 'create', 
                            ok: true, 
                            item: doc._doc, 
                            message: 'package production created'
                         });
                })
            }
            )
        }
        );
}

export async function updatePackageProduction(owner: string, name: string, description: string, packiFiles: string):  Promise<CRUDResult> {

    
    console.log(myname, 'updatePackageProduction', owner, name, description, packiFiles)
    
    const PackageProduction = GetPackageProductionModel();
    
    return new Promise((resolve, reject) => {
        
            
            const query = {
                owner: owner, 
                name: name
             };
            const update: any = {};
            if (typeof owner !== 'undefined') {
                update['owner'] = owner;
            }
            if (typeof name !== 'undefined') {
                update['name'] = name;
            }
            if (typeof description !== 'undefined') {
                update['description'] = description;
            }
            if (typeof packiFiles !== 'undefined') {
                update['packiFiles'] = packiFiles;
            }
            update['updated_at'] = new Date();
            
            PackageProduction.findOneAndUpdate(query, update, {}, (err, result) => {
            
                if (err) {
                    console.log(myname, 'updatePackageProduction', 'PackageProduction.findOneAndUpdate', 'error', err);
                    return reject(err);
                }
                
                console.log(myname, 'updatePackageProduction', 'PackageProduction.findOneAndUpdate', 'result', result);
                return resolve({
                        oper: 'update', 
                        ok: true, 
                        message: 'package production updated'
                     });
            }
            )
        }
        );
}
