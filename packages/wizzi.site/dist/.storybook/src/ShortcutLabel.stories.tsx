/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\storybook\src\ShortcutLabel.stories.tsx.ittf
    utc time: Mon, 03 May 2021 09:48:30 GMT
*/
import React from 'react';
import {Story, Meta} from '@storybook/react';
import {ShortcutLabel, ShortcutLabelProps} from '../../src/components/widgets/ShortcutLabel';
import cookies from 'js-cookie';
import {Provider} from 'react-redux';
import {PreferencesProvider} from '../../src/features/preferences/index';
import {ThemeProvider} from '../../src/components/ThemeProvider';
import createStore from '../../src/store/createRedux';
const store = createStore({
    splitTestSettings: {
        
     }
 });
import {KeyMap} from '../../src/components/widgets/KeybindingsManager';

export default {
            title: 'ShortcutLabel', 
            component: ShortcutLabel, 
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
const Template: Story<ShortcutLabelProps> = (args) => 

     (
    <ShortcutLabel
     {...args} />
    )

;
const Shortcuts = {
    save: {
        description: 'Save changes', 
        combo: [
            KeyMap.Meta, 
            KeyMap.S
        ]
     }, 
    tree: {
        description: 'Toggle sidebar', 
        combo: [
            KeyMap.Meta, 
            KeyMap.Backslash
        ]
     }, 
    format: {
        description: 'Format code with prettier', 
        combo: [
            KeyMap.Ctrl, 
            KeyMap.Alt, 
            KeyMap.F
        ]
     }
 };

export const Save = Template.bind({});

Save.args = {
    combo: Shortcuts.save.combo
 };

export const Tree = Template.bind({});

Tree.args = {
    combo: Shortcuts.tree.combo
 };

export const Format = Template.bind({});

Format.args = {
    combo: Shortcuts.format.combo
 };
