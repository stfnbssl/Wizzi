/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\storybook\src\MenuButton.stories.tsx.ittf
    utc time: Tue, 11 May 2021 04:47:46 GMT
*/
import React from 'react';
import {Story, Meta} from '@storybook/react';
import {MenuButton, MenuButtonProps} from '../../src/components/widgets/MenuButton';
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
            title: 'MenuButton', 
            component: MenuButton, 
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
const Template: Story<MenuButtonProps> = (args) => 

     (
    <MenuButton
     {...args} />
    )

;

export const Sample_1 = Template.bind({});

Sample_1.args = {
    label:  (
    <div
    >
        Label
    </div>
    )
    , 
    content:  (
    <div
    >
        <h1
        >
        Content title
        </h1>
        <p
        >
        Content paragraph
        </p>
    </div>
    )
    
 };
