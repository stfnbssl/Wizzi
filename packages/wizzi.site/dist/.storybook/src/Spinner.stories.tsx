/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\storybook\src\Spinner.stories.tsx.ittf
    utc time: Tue, 11 May 2021 04:47:46 GMT
*/
import React from 'react';
import {Story, Meta} from '@storybook/react';
import {Spinner, SpinnerProps} from '../../src/components/widgets/Spinner';
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
            title: 'Spinner', 
            component: Spinner, 
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
const Template: Story<SpinnerProps> = (args) => 

     (
    <Spinner
     {...args} />
    )

;

export const Small = Template.bind({});

Small.args = {
    rgba: {
        red: 0, 
        green: 0, 
        blue: 255, 
        alpha: 1
     }, 
    segments: 8, 
    segmentWidth: 1, 
    segmentLength: 3, 
    spacing: 4, 
    fadeTo: 31 / 98, 
    fadeSteps: 6
 };

export const Medium = Template.bind({});

Medium.args = {
    rgba: {
        red: 255, 
        green: 0, 
        blue: 0, 
        alpha: 1
     }, 
    segments: 12, 
    segmentWidth: 2, 
    segmentLength: 6, 
    spacing: 4, 
    fadeTo: 31 / 98, 
    fadeSteps: 6
 };

export const Large = Template.bind({});

Large.args = {
    rgba: {
        red: 0, 
        green: 255, 
        blue: 0, 
        alpha: 1
     }, 
    segments: 16, 
    segmentWidth: 3, 
    segmentLength: 9, 
    spacing: 6, 
    fadeTo: 31 / 98, 
    fadeSteps: 6
 };
