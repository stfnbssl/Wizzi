/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\features\filelist\actions\selectEntry.ts.ittf
    utc time: Fri, 19 Mar 2021 20:08:19 GMT
*/
import updateEntry from './updateEntry';
import {FileSystemEntry} from '../types';
export default function selectEntry(entries: FileSystemEntry[], path: string):  FileSystemEntry[] {
        return entries.map(e => e.item.path === path ? updateEntry(e, {
                        state: {
                            isSelected: !e.state.isSelected
                        }
                    }) : e);
    }
