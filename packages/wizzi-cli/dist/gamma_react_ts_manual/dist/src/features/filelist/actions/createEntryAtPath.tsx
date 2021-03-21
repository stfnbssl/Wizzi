/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\features\filelist\actions\createEntryAtPath.tsx.ittf
    utc time: Sun, 21 Mar 2021 14:14:13 GMT
*/
import {getUniquePath, getParentPath} from '../fileUtilities';
import updateEntry from './updateEntry';
import {FileSystemEntry} from '../types';
export default function createEntryAtPath(entries: FileSystemEntry[], path: string | undefined, e: FileSystemEntry, suffix?: string):  FileSystemEntry {
        // Check if an entry exists for the path we want to create the entry at
        const entry = path ? entries.find(e => e.item.path === path) : null;
        // If the entry is a folder, we create the new entry inside
        // Otherwise we create it inside the parent
        const parent = entry ? entry.item.type === 'folder' ? entry.item.path : getParentPath(entry.item.path) : null;
        // @ts-ignore
        const name: string = e.item.path.split('/').pop();
        const item = updateEntry(e, {
            item: {
                path: getUniquePath(entries.map(e => e.item.path), parent ? `${parent}/${name}` : name, suffix)
            }
        });
        // @ts-ignore
        item.state = {
            isCreating: true
        };
        return item;
    }
