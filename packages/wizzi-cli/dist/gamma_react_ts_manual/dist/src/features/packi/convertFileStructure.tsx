/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\features\packi\convertFileStructure.tsx.ittf
    utc time: Sun, 21 Mar 2021 14:14:13 GMT
*/
import {isEntryPoint} from '../filelist/fileUtilities';
import {FileSystemEntry, FileSystemEntryDiff} from '../filelist/types';
import {PackiFiles} from './types';
const getFolders = (path: string) => {
    // TODO: change this to slice and join
    const pathSegments = path.split('/');
    if (pathSegments.length === 0) {
        return [];
    }
    const result = [];
    for (let pathIdx = 0; pathIdx < pathSegments.length - 1;) {
        result.push(pathSegments.slice(0, pathIdx + 1).join('/'));
    }
    return result;
}
;
export const packiToEntryArray = (files: PackiFiles) => {
    const fileSystem: FileSystemEntry[] = [];
    const foldersInFileSystem = new Set();
    for (const filename of Object.keys(files).sort()) {
        for (const folder of getFolders(filename)) {
            if (!foldersInFileSystem.has(folder)) {
                fileSystem.push({
                    item: {
                        path: folder, 
                        type: 'folder'
                    }, 
                    state: {}
                })
                foldersInFileSystem.add(folder);
            }
        }
        const isEntry = isEntryPoint(filename);
        fileSystem.push(files[filename].type === 'ASSET' ? {
                item: {
                    path: filename, 
                    type: 'file', 
                    uri: files[filename].contents, 
                    asset: true
                }, 
                state: {}
            } : {
                item: {
                    path: filename, 
                    type: 'file', 
                    content: files[filename].contents, 
                    generated: files[filename].generated
                }, 
                state: {
                    isOpen: isEntry, 
                    isSelected: isEntry, 
                    isFocused: isEntry
                }
            })
    }
    return fileSystem;
}
;
export const packiFilterIttf = (files: PackiFiles) => {
    const ittfFiles: PackiFiles = {};
    Object.keys(files).forEach((k) => {
        if (k.endsWith('.ittf')) {
            ittfFiles[k] = files[k];
        }
    }
    )
    return ittfFiles;
}
;
export const mixPreviousAndGeneratedPackiFilesToEntryArray = (previous: PackiFiles, generated: PackiFiles) => {
    return packiToEntryArray(mixPreviousAndGeneratedPackiFiles(previous, generated));
}
;
export const mixPreviousAndGeneratedPackiFiles = (previous: PackiFiles, generated: PackiFiles) => {
    const packiFiles = Object.assign({}, previous);
    Object.keys(generated).forEach((k) => {
        if (previous[k]) {
            generated[k].bothRealAndGenerated = true;
        }
        packiFiles[k] = generated[k];
    }
    )
    return packiFiles;
}
;
export const entryArrayToPacki = (entryArray: FileSystemEntry[]) => {
    const sourceResult: PackiFiles = {};
    for (const  of entryArray) {
        if (item.type === 'file') {
            if (item.asset) {
                sourceResult[item.path] = {
                    contents: item.uri, 
                    type: 'ASSET', 
                    // TODO: support for different types
                    
                };
            }
            else {
                sourceResult[item.path] = {
                    contents: (item as any).content, 
                    type: 'CODE', 
                    // TODO: support for different types
                    
                };
            }
        }
    }
    return sourceResult;
}
;
export const entryArrayToObject = (entryArray: FileSystemEntry[]) => {
    const entriesObject: { 
        [key: string]} = entryArray.reduce((acc: { 
        [key: string]}, {
        item
    }) => {
        acc[item.path] = item;
        return acc;
    }
    , {});
    return entriesObject;
}
;
export const entryArrayDiff = (a: FileSystemEntry[], b: FileSystemEntry[]) => {
    const diff: { 
        [k: string]: FileSystemEntryDiff;
    } = {};
    a.forEach((entry) => {
        // console.log('-', entry.item.path)
        diff[entry.item.path] = {
            kind: '-', 
            a: entry.item
        };
    }
    )
    b.forEach((entry) => {
        if (diff[entry.item.path]) {
            if (diff[entry.item.path].a === entry.item) {
                // console.log('delete', entry.item.path)
                delete diff[entry.item.path]
            }
            else {
                // console.log('<>', entry.item.path)
                diff[entry.item.path].kind === '<>';
                diff[entry.item.path].b === entry.item;
            }
        }
        else {
            // console.log('+', entry.item.path)
            diff[entry.item.path] = {
                kind: '+', 
                b: entry.item
            };
        }
    }
    )
    return diff;
}
;