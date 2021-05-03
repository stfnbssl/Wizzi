/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.frontend\.wizzi\src\components\FileList\actions\__tests__\expandEntry.test.tsx.ittf
    utc time: Sat, 01 May 2021 05:18:20 GMT
*/
import {FileSystemEntry} from '../../types';
import expandEntry from '../expandEntry';
it('expands entry', () => {

    const entries: FileSystemEntry[] = [
        {
            item: {
                path: 'app/test', 
                type: 'folder'
             }, 
            state: {
                isExpanded: false
             }
         }
    ];
    expect(expandEntry(entries, 'app/test')).toEqual([
        {
            item: {
                path: 'app/test', 
                type: 'folder'
             }, 
            state: {
                isExpanded: true
             }
         }
    ])
    expect(expandEntry(entries, 'app/test', true)).toEqual([
        {
            item: {
                path: 'app/test', 
                type: 'folder'
             }, 
            state: {
                isExpanded: true
             }
         }
    ])
    expect(expandEntry(entries, 'app/test', false)).toEqual([
        {
            item: {
                path: 'app/test', 
                type: 'folder'
             }, 
            state: {
                isExpanded: false
             }
         }
    ])
}
)
