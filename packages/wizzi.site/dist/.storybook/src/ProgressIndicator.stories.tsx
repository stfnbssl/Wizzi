/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\storybook\src\ProgressIndicator.stories.tsx.ittf
    utc time: Fri, 07 May 2021 18:42:15 GMT
*/
import React from 'react';
import {Story, Meta} from '@storybook/react';
import {ProgressIndicator, ProgressIndicatorProps} from '../../src/components/widgets/ProgressIndicator';

export default {
            title: 'ProgressIndicator', 
            component: ProgressIndicator, 
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
const Template: Story<ProgressIndicatorProps> = (args) => 

     (
    <ProgressIndicator
     {...args} />
    )

;

export const Quick = Template.bind({});

Quick.args = {
    delay: 0, 
    duration: 500
 };

export const Slow = Template.bind({});

Slow.args = {
    delay: 0, 
    duration: 4500
 };

export const With_delay = Template.bind({});

With_delay.args = {
    delay: 1000, 
    duration: 2000
 };
