/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\features\filelist\actions\createNewEntry.ts.ittf
    utc time: Fri, 19 Mar 2021 20:08:19 GMT
*/
import updateEntry from './updateEntry';
import createEntryAtPath from './createEntryAtPath';
import {isInsideFolder} from '../fileUtilities';
import {FileSystemEntry} from '../types';
export default function createNewEntry(entries: FileSystemEntry[], type: 'file' | 'folder', at?: string | undefined) {
        const e: FileSystemEntry = type === 'file' ? {
                item: {
                    path: 'Untitled file.js', 
                    type: 'file', 
                    content: ''
                }, 
                state: {
                    isCreating: true
                }
            } : {
                item: {
                    path: 'Untitled folder', 
                    type: 'folder'
                }, 
                state: {
                    isCreating: true
                }
            };
        let path = at;
        if (typeof path !== 'string') {
            // Get the current folder if no path is specified
            const entry = entries.find(e => e.state.isSelected === true);
            path = entry ? entry.item.path : undefined;
        }
        const entry = createEntryAtPath(entries, path, e);
        const next = entries.map((e) => {
            // Expand the parent folder
            if (e.item.type === 'folder' && isInsideFolder(entry.item.path, e.item.path) && !e.state.isExpanded) {
                return updateEntry(e, {
                        state: {
                            isExpanded: true
                        }
                    });
            }
            return e;
        }
        );
        return [
                ...next, 
                entry
            ];
    }
