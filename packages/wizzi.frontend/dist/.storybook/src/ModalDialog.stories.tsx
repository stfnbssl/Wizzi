/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.frontend\.wizzi\storybook\src\ModalDialog.stories.tsx.ittf
    utc time: Sat, 01 May 2021 05:18:23 GMT
*/
import React from 'react';
import {Story, Meta} from '@storybook/react';
import {ModalDialog, ModalDialogProps} from '../../src/components/widgets/ModalDialog';
import cookies from 'js-cookie';
import {Provider} from 'react-redux';
import {PreferencesProvider} from '../../src/features/preferences/index';
import {ThemeProvider} from '../../src/components/ThemeProvider';
import createStore from '../../src/store/createRedux';
const store = createStore({
    splitTestSettings: {
        
     }
 });
import Button from '../../src/components/widgets/Button';

export default {
            title: 'ModalDialog', 
            component: ModalDialog, 
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
const Template: Story<ModalDialogProps> = (args) => 

     (
    <ModalDialog
     {...args} />
    )

;

export const Dialog_1 = Template.bind({});

Dialog_1.args = {
    visible: true, 
    title: "Experience already exists!", 
    children:  (
    <div
    >
        <p
        >
        You already have an experience published in your profile. Please choose another name.
        </p>
        <Button
         large={true} variant="secondary">
            Choose another name
        </Button>
    </div>
    )
    
 };
