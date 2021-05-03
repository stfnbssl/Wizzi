/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\storybook\src\Popover.stories.tsx.ittf
    utc time: Mon, 03 May 2021 09:48:30 GMT
*/
import React from 'react';
import {Story, Meta} from '@storybook/react';
import {Popover, PopoverProps} from '../../src/components/widgets/Popover';
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
            title: 'Popover', 
            component: Popover, 
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
const Template: Story<PopoverProps> = (args) => 

     (
    <Popover
     {...args} />
    )

;

export const Dialog_1 = Template.bind({});

Dialog_1.args = {
    content:  (
    <React.Fragment
    >
        <p
        >
        Description
        </p>
        <button
        >
            Edit details
        </button>
    </React.Fragment>
    )
    , 
    children:  (
    <button
    >
        popover
    </button>
    )
    
 };
