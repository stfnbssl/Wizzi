/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.frontend\.wizzi\src\components\FileList\actions\selectEntry.tsx.ittf
    utc time: Sat, 01 May 2021 05:18:20 GMT
*/
import {FileSystemEntry} from '../types';
import updateEntry from './updateEntry';
export default function selectEntry(entries: FileSystemEntry[], path: string):  FileSystemEntry[] {
    
        return entries.map(e => 
            
                e.item.path === path ? updateEntry(e, {
                        state: {
                            isSelected: !e.state.isSelected
                         }
                     }) : e
            );
    }
