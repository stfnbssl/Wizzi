/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\src\components\FileList\actions\recursivelyCreateParents.tsx.ittf
    utc time: Mon, 03 May 2021 09:48:27 GMT
*/
import {getParentPath} from '../../../features/file/index';
import {FileSystemEntry} from '../types';
export default function recursivelyCreateParents(entries: FileSystemEntry[], path: string, expand?: boolean):  FileSystemEntry[] {
    
        const next: FileSystemEntry[] = [];
        let parent = getParentPath(path);
        while (parent) {
            const parentEntry = entries.find(e => 
            
                e.item.path === parent
            );
            if (parentEntry) {
                if (parentEntry.item.type !== 'folder') {
                    throw new Error('File path must be inside a folder');
                }
                break;
            }
            else {
                next.push({
                    item: {
                        type: 'folder', 
                        path: parent
                     }, 
                    state: {
                        isExpanded: !!expand
                     }
                 })
                parent = getParentPath(parent);
            }
        }
        return next;
    }
