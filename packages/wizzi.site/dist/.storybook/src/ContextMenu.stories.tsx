/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\storybook\src\ContextMenu.stories.tsx.ittf
    utc time: Fri, 07 May 2021 18:42:15 GMT
*/
import React from 'react';
import {Story, Meta} from '@storybook/react';
import {ContextMenu, ContextMenuProps} from '../../src/components/widgets/ContextMenu';
import cookies from 'js-cookie';
import {Provider} from 'react-redux';
import {PreferencesProvider} from '../../src/features/preferences/index';
import {ThemeProvider} from '../../src/components/ThemeProvider';
import createStore from '../../src/store/createRedux';
const store = createStore({
    splitTestSettings: {
        
     }
 });
const _menu = React.createRef<HTMLUListElement>();

export default {
            title: 'ContextMenu', 
            component: ContextMenu, 
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
const Template: Story<ContextMenuProps> = (args) => 

     (
    <ContextMenu
     {...args} />
    )

;

export const Menu_1 = Template.bind({});

Menu_1.args = {
    ref: _menu, 
    visible: true, 
    actions: [
        {
            label: 'Dago', 
            handler: () => 
            
                window.open(`https://www.dagospia.com`)
            
         }, 
        {
            label: 'Account Settings', 
            handler: () => {
            
            }
            
         }, 
        {
            label: 'Help', 
            handler: () => {
            
            }
            
         }
    ]
 };
