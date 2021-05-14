/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\storybook\src\EditorFooter.stories.tsx.ittf
    utc time: Tue, 11 May 2021 04:47:46 GMT
*/
import React from 'react';
import {Story, Meta} from '@storybook/react';
import {EditorFooter, EditorFooterProps} from '../../src/components/EditorView/EditorFooter';
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
            title: 'EditorFooter', 
            component: EditorFooter, 
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
const Template: Story<EditorFooterProps> = (args) => 

     (
    <EditorFooter
     {...args} />
    )

;

export const Show_every = Template.bind({});

Show_every.args = {
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
    fileTreeShown: true, 
    previewShown: true, 
    panelsShown: true, 
    sendCodeOnChangeEnabled: false, 
    onToggleTheme: () => {
    
        console.log('onToggleTheme');
    }
    , 
    onTogglePanels: (panelType: PanelType) => {
    
        console.log('onTogglePanels', panelType);
    }
    , 
    onToggleFileTree: () => {
    
        console.log('onToggleFileTree');
    }
    , 
    onTogglePreview: () => {
    
        console.log('onTogglePreview');
    }
    , 
    onToggleSendCode: () => {
    
        console.log('onToggleSendCode');
    }
    , 
    onShowShortcuts: () => {
    
        console.log('onShowShortcuts');
    }
    , 
    onSendCode: () => {
    
        console.log('onSendCode');
    }
    , 
    theme: 'light'
 };
