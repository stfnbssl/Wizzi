/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\ics_react_ts_manual\.wizzi\src\features\filelist\actions\renameEntry.tsx.ittf
    utc time: Fri, 26 Mar 2021 07:40:26 GMT
*/
import updateEntry from './updateEntry';
import recursivelyCreateParents from './recursivelyCreateParents';
import {changeParentPath, isInsideFolder} from '../fileUtilities';
import {FileSystemEntry} from '../types';
export default // @ts-ignore
    function renameEntry(entries: FileSystemEntry[], oldPath: string, newPath: string) {
        const entry = entries.find(e => 
            e.item.path === oldPath
        );
        if (!entry) {
            return entries;
        }
        const renamed = updateEntry(entry, {
            item: {
                path: newPath
             }
         });
        delete renamed.state.isCreating
        const next: FileSystemEntry[] = entries.map((e) => {
            if (e.item.path === entry.item.path) {
                return renamed;
            }
            if (renamed.item.type === 'folder' && isInsideFolder(e.item.path, entry.item.path)) {
                return updateEntry(e, {
                        item: {
                            path: changeParentPath(e.item.path, entry.item.path, renamed.item.path)
                         }
                     });
            }
            return e;
        }
        );
        const parents = recursivelyCreateParents(next, renamed.item.path, true);
        return [
                ...next, 
                ...parents
            ];
    }
