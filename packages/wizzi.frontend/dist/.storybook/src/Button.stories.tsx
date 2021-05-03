/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.frontend\.wizzi\storybook\src\Button.stories.tsx.ittf
    utc time: Sat, 01 May 2021 05:18:23 GMT
*/
import React from 'react';
import {Story, Meta} from '@storybook/react';
import {Button, ButtonProps} from '../../src/components/widgets/Button';

export default {
            title: 'Button', 
            component: Button, 
            decorators: [
                (Story) => 
                
                     (
                    <Story
                     />
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
const Template: Story<ButtonProps> = (args) => 

     (
    <Button
     {...args}>
        <span
        >
        Button
        </span>
    </Button>
    )

;

export const Primary = Template.bind({});

Primary.args = {
    variant: 'primary'
 };

export const Secondary = Template.bind({});

Secondary.args = {
    variant: 'secondary'
 };

export const Large = Template.bind({});

Large.args = {
    large: true
 };

export const Loading = Template.bind({});

Loading.args = {
    loading: true, 
    variant: 'primary'
 };
