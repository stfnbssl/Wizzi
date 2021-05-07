/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\storybook\src\FileList.stories.tsx.ittf
    utc time: Fri, 07 May 2021 18:42:15 GMT
*/
import React from 'react';
import {Story, Meta} from '@storybook/react';
import {FileList, FileListProps} from '../../src/components/FileList/FileList';
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
            title: 'FileList', 
            component: FileList, 
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
const Template: Story<FileListProps> = (args) => 

     (
    <FileList
     {...args} />
    )

;

export const Files = Template.bind({});

Files.args = {
    visible: true, 
    files: {
        'file1.js': {
            type: 'CODE', 
            contents: 'function Hello() {\n\tconsole.log("Hello file 1");\n}'
         }, 
        'file2.js': {
            type: 'CODE', 
            contents: 'function Hello() {\n\tconsole.log("Hello file 2");\n}'
         }
     }, 
    annotations: [
        {
            message: 'annotation 1', 
            severity: 2, 
            source: 'Web', 
            location: {
                fileName: 'file1.txt', 
                startLineNumber: 2, 
                endLineNumber: 2, 
                startColumn: 10, 
                endColumn: 18
             }
         }, 
        {
            message: 'annotation 2', 
            severity: 3, 
            source: 'Web', 
            location: {
                fileName: 'file2.txt', 
                startLineNumber: 3, 
                endLineNumber: 3, 
                startColumn: 10, 
                endColumn: 18
             }
         }
    ], 
    selectedFile: 'file1.js', 
    updateFiles: (updateFn: any) => {
    
    }
    , 
    onSelectFile: (path: string) => {
    
        console.log('onSelectFile', path);
    }
    , 
    onRemoveFile: (path: string) => {
    
        console.log('onRemoveFile', path);
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
    onRenameFile: (oldPath: string, newPath: string) => {
    
        console.log('onRenameFile', oldPath, newPath);
    }
    , 
    uploadFileAsync: () => {
    
    }
    , 
    onDownloadCode: () => {
    
    }
    , 
    onImportRepo: () => {
    
    }
    , 
    onImportProduction: () => {
    
    }
    , 
    hasSnackId: true, 
    saveStatus: 'saved-draft', 
    theme: 'light'
 };
