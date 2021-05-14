/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\src\components\FileList\actions\updateEntry.tsx.ittf
    utc time: Tue, 11 May 2021 04:47:43 GMT
*/
import {FileSystemEntry} from '../../../features/file';
export default function updateEntry<T extends FileSystemEntry>(entry: T, updates: { 
        item?: Partial<T['item']>;
        state?: Partial<T['state']>;
    }):  T {
    
        return {
                ...((entry as any))
                , 
                item: updates.item ? {
                        ...entry.item, 
                        ...((updates as any).item)
                        
                     } : entry.item, 
                state: updates.state ? {
                        ...entry.state, 
                        ...((updates as any).state)
                        
                     } : entry.state
             };
    }
