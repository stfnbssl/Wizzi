/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\storybook\src\EditorView.stories.tsx.ittf
    utc time: Fri, 07 May 2021 18:42:15 GMT
*/
import React from 'react';
import {Story, Meta} from '@storybook/react';
import {EditorView, EditorViewProps} from '../../src/components/EditorView/EditorView';
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
            title: 'EditorView', 
            component: EditorView, 
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
const Template: Story<EditorViewProps> = (args) => 

     (
    <EditorView
     {...args} />
    )

;

export const Saved_draft = Template.bind({});

Saved_draft.args = {
    name: 'My name', 
    description: 'My description', 
    createdAt: '10/8/88', 
    saveStatus: 'saved-draft', 
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
    updateFiles: () => {
    
        console.log('updateFiles');
    }
    , 
    selectedFile: 'file1.js', 
    saveHistory: [
        {
            hashId: 'xyz', 
            savedAt: 'boh', 
            isDraft: true
         }
    ], 
    viewer: {
        username: 'stefi', 
        nickname: 'yanez'
     }, 
    isEditModalVisible: true, 
    previewShown: false, 
    isDownloading: false, 
    sendCodeOnChangeEnabled: false, 
    onShowEditModal: () => {
    
        console.log('onShowEditModal');
    }
    , 
    onDismissEditModal: () => {
    
        console.log('onDismissEditModal');
    }
    , 
    onSubmitMetadata: (details) => {
    
        console.log('onSubmitMetadata', details);
    }
    , 
    onSendCode: () => {
    
        console.log('onSendCode');
    }
    , 
    id: 'MyId', 
    experienceURL: null, 
    onToggleSendCode: () => {
    
    }
    , 
    onTogglePreview: () => {
    
    }
    , 
    onSubmitMetadata: () => {
    
    }
    , 
    onPublishAsync: () => {
    
    }
    , 
    onDownloadAsync: () => {
    
    }
    , 
    onSelectFile: (path: string) => {
    
        console.log('onSelectFile', path);
    }
    , 
    updateFiles: () => {
    
    }
    , 
    uploadFileAsync: () => {
    
    }
    , 
    autosaveEnabled: false, 
    userAgent: null, 
    previewRef, 
    previewURL: null, 
    verbose: true, 
    snackagerURL: null
 };
