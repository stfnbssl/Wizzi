/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\storybook\src\Banner.stories.tsx.ittf
    utc time: Mon, 03 May 2021 09:48:30 GMT
*/
import React from 'react';
import {Story, Meta} from '@storybook/react';
import {Banner, BannerProps} from '../../src/components/widgets/Banner';
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
            title: 'Banner', 
            component: Banner, 
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
const Template: Story<BannerProps> = (args) => 

     (
    <Banner
     {...args} />
    )

;

export const Success = Template.bind({});

Success.args = {
    visible: true, 
    type: "success", 
    children:  (
    <h3
    >
    Congratulations!
    </h3>
    )
    
 };

export const Error = Template.bind({});

Error.args = {
    visible: true, 
    type: "error", 
    children:  (
    <h3
    >
    Sorry! S.t. went wrong!
    </h3>
    )
    
 };

export const Info = Template.bind({});

Info.args = {
    visible: true, 
    type: "info", 
    children:  (
    <h3
    >
    Your component is building
    </h3>
    )
    
 };
