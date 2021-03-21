/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\features\filelist\actions\closeEntry.ts.ittf
    utc time: Sun, 21 Mar 2021 10:33:05 GMT
*/
import updateEntry from './updateEntry';
import {FileSystemEntry} from '../types';
export default function closeEntry(entry: FileSystemEntry) {
        if (entry.item.type === 'file') {
            if (entry.state.isSelected || entry.state.isFocused || entry.state.isOpen) {
                // Unselect and unfocus the file
                return updateEntry(entry, {
                        state: {
                            isOpen: false, 
                            isSelected: false, 
                            isFocused: false
                        }
                    });
            }
        }
        else {
            if (entry.state.isSelected) {
                // Unselect the folder
                return updateEntry(entry, {
                        state: {
                            isSelected: false
                        }
                    });
            }
        }
        return entry;
    }
