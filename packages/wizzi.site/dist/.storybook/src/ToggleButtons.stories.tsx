/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\storybook\src\ToggleButtons.stories.tsx.ittf
    utc time: Fri, 07 May 2021 18:42:15 GMT
*/
import React from 'react';
import {Story, Meta} from '@storybook/react';
import {ToggleButtons, ToggleButtonsProps} from '../../src/components/widgets/ToggleButtons';
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
            title: 'ToggleButtons', 
            component: ToggleButtons, 
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
const Template: Story<ToggleButtonsProps<string>> = (args) => 

     (
    <ToggleButtons
     {...args}>
        <span
        >
        ToggleButtons
        </span>
    </ToggleButtons>
    )

;

export const On = Template.bind({});

On.args = {
    value: '1', 
    options: [
        {
            label: 'on', 
            value: '1'
         }, 
        {
            label: 'off', 
            value: '0'
         }
    ]
 };

export const Off = Template.bind({});

Off.args = {
    value: '0', 
    options: [
        {
            label: 'on', 
            value: '1'
         }, 
        {
            label: 'off', 
            value: '0'
         }
    ]
 };

export const Option_3 = Template.bind({});

Option_3.args = {
    value: '2', 
    options: [
        {
            label: 'Option 1', 
            value: '0'
         }, 
        {
            label: 'Option 2', 
            value: '1'
         }, 
        {
            label: 'Option 3', 
            value: '2'
         }
    ]
 };

export const Disabled = Template.bind({});

Disabled.args = {
    disabled: true, 
    value: '0', 
    options: [
        {
            label: 'on', 
            value: '1'
         }, 
        {
            label: 'off', 
            value: '0'
         }
    ]
 };
