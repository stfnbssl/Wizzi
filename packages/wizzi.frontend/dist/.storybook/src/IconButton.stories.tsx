/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.frontend\.wizzi\storybook\src\IconButton.stories.tsx.ittf
    utc time: Sat, 01 May 2021 05:18:23 GMT
*/
import React from 'react';
import {Story, Meta} from '@storybook/react';
import {IconButton, IconButtonProps} from '../../src/components/widgets/IconButton';
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
            title: 'IconButton', 
            component: IconButton, 
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
const Template: Story<IconButtonProps> = (args) => 

     (
    <IconButton
     {...args}>
        <svg 
            width="20px"
            height="18px"
            viewBox="0 0 20 18"
            fill="none"
        >
            <path 
                d="M13.333 15l5-5-5-5M6.667 5l-5 5 5 5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
             />
        </svg>
    </IconButton>
    )

;

export const Titled = Template.bind({});

Titled.args = {
    title: 'Icon button title'
 };

export const Labeled = Template.bind({});

Labeled.args = {
    label: 'Icon button label'
 };

export const Titled_labeled = Template.bind({});

Titled_labeled.args = {
    title: 'Icon button title', 
    label: 'Icon button label'
 };

export const Disabled = Template.bind({});

Disabled.args = {
    title: 'Icon button title', 
    label: 'Icon button label', 
    disabled: true
 };

export const Responsive = Template.bind({});

Responsive.args = {
    title: 'Icon button title', 
    label: 'Icon button label', 
    responsive: true
 };

export const Small = Template.bind({});

Small.args = {
    title: 'Icon button title', 
    label: 'Icon button label', 
    small: true
 };

export const Submit = Template.bind({});

Submit.args = {
    title: 'Icon button title', 
    label: 'Icon button label', 
    type: 'submit'
 };
