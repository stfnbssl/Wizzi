/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.frontend\.wizzi\storybook\src\MonacoEditor.stories.tsx.ittf
    utc time: Sat, 01 May 2021 05:18:23 GMT
*/
import React from 'react';
import {Story, Meta} from '@storybook/react';
import {MonacoEditor, MonacoEditorProps} from '../../src/components/Editor/MonacoEditor';
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
            title: 'MonacoEditor', 
            component: MonacoEditor, 
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
const Template: Story<MonacoEditorProps> = (args) => 

     (
    <MonacoEditor
     {...args} />
    )

;

export const Saved_draft = Template.bind({});

Saved_draft.args = {
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
    updateFiles: () => {
    
    }
    , 
    selectedFile: 'file1.js', 
    onSelectFile: (path) => {
    
        console.log('onSelectFile', path);
    }
    , 
    annotations: [
        
    ], 
    lineNumbers: 'on', 
    wordWrap: 'off', 
    scrollBeyondLastLine: true, 
    minimap: {
        enabled: false, 
        maxColumn: 20, 
        renderCharacters: true, 
        showSlider: 'mouseover', 
        side: 'right'
     }, 
    autoFocus: true, 
    fontFamily: 'mono', 
    fontLigatures: true
 };
