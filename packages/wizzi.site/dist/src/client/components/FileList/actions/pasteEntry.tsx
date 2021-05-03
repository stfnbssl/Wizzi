/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\src\components\FileList\actions\pasteEntry.tsx.ittf
    utc time: Mon, 03 May 2021 09:48:27 GMT
*/
import {isInsideFolder, changeParentPath} from '../../../features/file/index';
import {FileSystemEntry} from '../types';
import createEntryAtPath from './createEntryAtPath';
import updateEntry from './updateEntry';
export default function handleEntryPaste(entries: FileSystemEntry[], path: string | undefined, e: FileSystemEntry) {
    
        const entry = createEntryAtPath(entries, path, e, '- Copy');
        if (e.item.type === 'folder') {
            const children = entries.filter(it => 
            
                // Get children of the old folder
                isInsideFolder(it.item.path, e.item.path)
            ).map(it => 
            
                // Update the parent folder name to the new one
                updateEntry(it, {
                    item: {
                        path: changeParentPath(it.item.path, e.item.path, entry.item.path)
                     }
                 })
            )
            ;
            return [
                    ...entries, 
                    ...children, 
                    entry
                ];
        }
        else {
            return [
                    ...entries, 
                    entry
                ];
        }
    }
