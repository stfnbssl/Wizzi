/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\features\filelist\actions\pasteEntry.tsx.ittf
    utc time: Wed, 24 Mar 2021 16:19:16 GMT
*/
import createEntryAtPath from './createEntryAtPath';
import updateEntry from './updateEntry';
import {isInsideFolder, changeParentPath} from '../fileUtilities';
import {FileSystemEntry} from '../types';
export default function handleEntryPaste(entries: FileSystemEntry[], path: string | undefined, e: FileSystemEntry) {
        const entry = createEntryAtPath(entries, path, e, '- Copy');
        if (e.item.type === 'folder') {
            const children = entries.filter(// Get children of the old folder
            it => 
                isInsideFolder(it.item.path, e.item.path)
            ).map(// Update the parent folder name to the new one
            it => 
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
