/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\features\filelist\actions\updateEntry.tsx.ittf
    utc time: Sun, 21 Mar 2021 14:14:13 GMT
*/
import {FileSystemEntry} from '../types';
export default function updateEntry<T extends FileSystemEntry>(entry: T, updates: { 
        item?: Partial<T['item']>;
        state?: Partial<T['state']>;
    }):  T {
        return {
                ...(entry as any), 
                item: updates.item ? {
                        ...entry.item, 
                        ...(updates as any).item
                    } : entry.item, 
                state: updates.state ? {
                        ...entry.state, 
                        ...(updates as any).state
                    } : entry.state
            };
    }
