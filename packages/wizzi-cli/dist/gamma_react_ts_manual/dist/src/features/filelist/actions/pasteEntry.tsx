/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\features\filelist\actions\pasteEntry.tsx.ittf
    utc time: Sat, 20 Mar 2021 13:20:50 GMT
*/
import createEntryAtPath from './createEntryAtPath';
import updateEntry from './updateEntry';
import {isInsideFolder, changeParentPath} from '../fileUtilities';
import {FileSystemEntry} from '../types';
export default function handleEntryPaste(entries: FileSystemEntry[], path: string | undefined, e: FileSystemEntry) {
        const entry = createEntryAtPath(entries, path, e, '- Copy');
        if (e.item.type === 'folder') {
            const children = entries.filter((it) => {
                // Get children of the old folder
                isInsideFolder(it.item.path, e.item.path);
            }
            ).map((it) => {
                // Update the parent folder name to the new one
                updateEntry(it, {
                    item: {
                        path: changeParentPath(it.item.path, e.item.path, entry.item.path)
                    }
                })
            }
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
