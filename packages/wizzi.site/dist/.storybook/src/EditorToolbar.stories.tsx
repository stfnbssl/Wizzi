/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\storybook\src\EditorToolbar.stories.tsx.ittf
    utc time: Fri, 07 May 2021 18:42:15 GMT
*/
import React from 'react';
import {Story, Meta} from '@storybook/react';
import {EditorToolbar, EditorToolbarProps} from '../../src/components/EditorView/EditorToolbar';
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
            title: 'EditorToolbar', 
            component: EditorToolbar, 
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
const Template: Story<EditorToolbarProps> = (args) => 

     (
    <EditorToolbar
     {...args} />
    )

;

export const Saved_draft = Template.bind({});

Saved_draft.args = {
    name: 'My name', 
    description: 'My description', 
    createdAt: '10/8/88', 
    saveStatus: 'saved-draft', 
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
    isDownloading: false, 
    isEditModalVisible: true, 
    onDownloadCode: () => {
    
        console.log('onDownloadCode');
    }
    , 
    onPublishAsync: (options) => {
    
        console.log('onPublishAsync', options);
    }
    
 };
