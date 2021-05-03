/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.frontend\.wizzi\storybook\src\LargeInput.stories.tsx.ittf
    utc time: Sat, 01 May 2021 05:18:23 GMT
*/
import React from 'react';
import {Story, Meta} from '@storybook/react';
import {LargeInput, LargeInputProps} from '../../src/components/widgets/LargeInput';
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
            title: 'LargeInput', 
            component: LargeInput, 
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
const Template: Story<LargeInputProps> = (args) => 

     (
    <LargeInput
     {...args} />
    )

;

export const Name_input = Template.bind({});

Name_input.args = {
    value: undefined, 
    disabled: false, 
    placeholder: "Name", 
    name: "name", 
    type: "input", 
    autoFocus: true, 
    error: undefined
 };

export const Name_input_disabled = Template.bind({});

Name_input_disabled.args = {
    value: undefined, 
    disabled: true, 
    placeholder: "Name", 
    name: "name", 
    type: "input", 
    autoFocus: true, 
    error: undefined
 };

export const Name_input_with_error = Template.bind({});

Name_input_with_error.args = {
    value: undefined, 
    disabled: true, 
    placeholder: "Name", 
    name: "name", 
    type: "input", 
    autoFocus: true, 
    error: {
        message: "Invalid value"
     }
 };
