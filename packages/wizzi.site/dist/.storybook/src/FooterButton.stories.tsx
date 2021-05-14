/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\storybook\src\FooterButton.stories.tsx.ittf
    utc time: Tue, 11 May 2021 04:47:46 GMT
*/
import React from 'react';
import {Story, Meta} from '@storybook/react';
import {FooterButton, FooterButtonProps} from '../../src/components/widgets/FooterButton';
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
            title: 'FooterButton', 
            component: FooterButton, 
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
const Template: Story<FooterButtonProps> = (args) => 

     (
    <FooterButton
     {...args} />
    )

;

export const Active = Template.bind({});

Active.args = {
    active: true, 
    icon: require('../../src/assets/prettify-icon.png'), 
    children:  (
    <div
    >
        Active footer button
    </div>
    )
    
 };

export const Inactive = Template.bind({});

Inactive.args = {
    active: false, 
    icon: require('../../src/assets/prettify-icon.png'), 
    children:  (
    <div
    >
        Inctive footer button
    </div>
    )
    
 };
