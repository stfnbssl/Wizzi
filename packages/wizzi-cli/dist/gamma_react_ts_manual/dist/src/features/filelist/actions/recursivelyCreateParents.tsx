/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\features\filelist\actions\recursivelyCreateParents.tsx.ittf
    utc time: Sat, 20 Mar 2021 13:20:50 GMT
*/
import {getParentPath} from '../fileUtilities';
import {FileSystemEntry} from '../types';
export default function recursivelyCreateParents(entries: FileSystemEntry[], path: string, expand?: boolean):  FileSystemEntry[] {
        const next: FileSystemEntry[] = [];
        let parent = getParentPath(path);
        while (parent) {
            const parentEntry = entries.find(e => e.item.path === parent);
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
