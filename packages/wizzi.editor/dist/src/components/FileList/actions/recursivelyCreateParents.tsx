/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.editor\.wizzi\src\components\FileList\actions\recursivelyCreateParents.tsx.ittf
    utc time: Sun, 27 Jun 2021 11:22:09 GMT
*/
import {FileSystemEntry, getParentPath} from '../../../features/file';
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
