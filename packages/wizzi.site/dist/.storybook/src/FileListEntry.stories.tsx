/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\storybook\src\FileListEntry.stories.tsx.ittf
    utc time: Tue, 11 May 2021 04:47:46 GMT
*/
import React from 'react';
import {Story, Meta} from '@storybook/react';
import {FileListEntry, FileListEntryProps} from '../../src/components/FileList/FileListEntry';
import cookies from 'js-cookie';
import {Provider} from 'react-redux';
import {PreferencesProvider} from '../../src/features/preferences/index';
import {ThemeProvider} from '../../src/components/ThemeProvider';
import createStore from '../../src/store/createRedux';
const store = createStore({
    splitTestSettings: {
        
     }
 });

export default {
            title: 'FileListEntry', 
            component: FileListEntry, 
            decorators: [
                (Story) => 
                
                     (
                    <Provider
                     store={store}>
                        <PreferencesProvider
                         cookies={cookies} queryParams={{ theme: 'light' }}>
                            <ThemeProvider
                            >
                                <Story
                                 />
                            </ThemeProvider>
                        </PreferencesProvider>
                    </Provider>
                    )
                
                
            ], 
            argTypes: {
                
             }, 
            args: {
                
             }, 
            parameters: {
                docs: {
                    
                 }
             }
         } as Meta
const Template: Story<FileListEntryProps> = (args) => 

     (
    <FileListEntry
     {...args} />
    )

;

export const FileEntry = Template.bind({});

FileEntry.args = {
    entry: {
        item: {
            path: "/mydir/myfile.txt", 
            type: 'file', 
            content: 'file entry content'
         }, 
        state: {
            isExpanded: true
         }
     }, 
    rest: [
        {
            item: {
                path: "/mydir/myfile2.txt", 
                type: 'file', 
                content: 'file2 entry content'
             }, 
            state: {
                isExpanded: true
             }
         }, 
        {
            item: {
                path: "/mydir/myfile3.txt", 
                type: 'file', 
                content: 'file3 entry content'
             }, 
            state: {
                isExpanded: true
             }
         }
    ], 
    clipboard: [
        
    ], 
    onOpen: (path: string) => {
    
        console.log('onOpen clicked', path);
    }
    , 
    onFocus: (path: string) => {
    
        console.log('onFocus', path);
    }
    , 
    onSelect: (path: string) => {
    
        console.log('onSelect', path);
    }
    , 
    onDelete: (path: string) => {
    
        console.log('onDelete', path);
    }
    , 
    onCopy: (path: string) => {
    
        console.log('onCopy', path);
    }
    , 
    onExpand: (path: string, expand: boolean) => {
    
        console.log('onExpand', path, expand);
    }
    , 
    onRename: (oldPath: string, newPath: string) => {
    
        console.log('onRename', oldPath, newPath);
    }
    , 
    onCreateFile: (path: string) => {
    
        console.log('onCreateFile', path);
    }
    , 
    onCreateFolder: (path: string) => {
    
        console.log('onCreateFolder', path);
    }
    , 
    onPaste: (path: string) => {
    
        console.log('onPaste', path);
    }
    , 
    onPaste: (path: string | undefined, entry: FileSystemEntry) => {
    
    }
    , 
    onClearClipboard: () => {
    
    }
    , 
    getAdjacentEntries: () => {
    
        return [];
    }
    , 
    theme: 'dark'
 };
