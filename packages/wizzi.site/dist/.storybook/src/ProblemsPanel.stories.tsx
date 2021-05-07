/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\storybook\src\ProblemsPanel.stories.tsx.ittf
    utc time: Fri, 07 May 2021 18:42:15 GMT
*/
import React from 'react';
import {Story, Meta} from '@storybook/react';
import {ProblemsPanel, ProblemsPanelProps} from '../../src/components/EditorView/ProblemsPanel';
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
            title: 'ProblemsPanel', 
            component: ProblemsPanel, 
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
const Template: Story<ProblemsPanelProps> = (args) => 

     (
    <ProblemsPanel
     {...args} />
    )

;

export const Warning = Template.bind({});

Warning.args = {
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
         }
    ], 
    onSelectFile: (path: string) => {
    
        console.log('onSelectFile', path);
    }
    
 };

export const Error = Template.bind({});

Error.args = {
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
    onSelectFile: (path: string) => {
    
        console.log('onSelectFile', path);
    }
    
 };
