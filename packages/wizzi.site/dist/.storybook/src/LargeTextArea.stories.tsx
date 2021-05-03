/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\storybook\src\LargeTextArea.stories.tsx.ittf
    utc time: Mon, 03 May 2021 09:48:30 GMT
*/
import React from 'react';
import {Story, Meta} from '@storybook/react';
import {LargeTextArea, LargeTextAreaProps} from '../../src/components/widgets/LargeTextArea';
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
            title: 'LargeTextArea', 
            component: LargeTextArea, 
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
const Template: Story<LargeTextAreaProps> = (args) => 

     (
    <LargeTextArea
     {...args} />
    )

;

export const With_4_rows_min = Template.bind({});

With_4_rows_min.args = {
    minRows: 4, 
    value: undefined, 
    placeholder: "Name", 
    name: "name", 
    autoFocus: true
 };

export const With_8_rows_min = Template.bind({});

With_8_rows_min.args = {
    minRows: 8, 
    value: undefined, 
    placeholder: "Name", 
    name: "name", 
    autoFocus: true
 };
