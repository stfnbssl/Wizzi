/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.ui\.wizzi\storybook\src\Box.stories.tsx.ittf
    utc time: Sat, 15 May 2021 12:57:36 GMT
*/
import React from 'react';
import {Story, Meta} from '@storybook/react';
import {Box, BoxProps} from '../../src/components/widgets/Box';
import {Text} from '../../src/components/widgets/Box';
import {theme} from '../../src/components/SCTheme';
import {ThemeProvider} from 'styled-components';

export default {
            title: 'Box', 
            component: Box, 
            decorators: [
                (Story) => 
                
                     (
                    <ThemeProvider
                     theme={theme}>
                        <Story
                         />
                    </ThemeProvider>
                    )
                
                
            ], 
            argTypes: {
                
             }, 
            args: {
                
             }, 
            parameters: {
                docs: {
                    description: {
                        component: `A low-level layout component for setting color, display, height, margin, maxHeight, maxWidth, minHeight, minWidth, padding, size, textAlign, and width.`
                     }
                 }
             }
         } as Meta
const Template: Story<BoxProps> = (args) => 

     (
    <Box
     {...args}>
        Hello box
    </Box>
    )

;

export const Display_And_Size = Template.bind({});

Display_And_Size.args = {
    color: 'alert.base', 
    display: [
        'none', 
        null, 
        'block'
    ], 
    size: 250
 };

export const Padding = Template.bind({});

Padding.args = {
    p: 4, 
    color: 'background.base'
 };

export const Height = Template.bind({});

Height.args = {
    color: 'warning.base', 
    height: [
        250, 
        350, 
        450, 
        550
    ], 
    width: [
        150, 
        250, 
        350, 
        450
    ]
 };

export const Max_And_Min_Values = Template.bind({});

Max_And_Min_Values.args = {
    color: 'priceSecondary.base', 
    maxHeight: [300, null, 400, null, 500], 
    maxWidth: [300, null, 400, null, 500], 
    minHeight: [100, null, 200, null, 300], 
    minWidth: [300, null, 200, null, 100]
 };

export const Margin = Template.bind({});

Margin.args = {
    m: 3, 
    color: 'background.base'
 };

export const Color = Template.bind({});

Color.args = {
    color: 'primary.base'
 };

export const BoxShadow = Template.bind({});

BoxShadow.args = {
    boxShadowSize: 'sm', 
    p: 2, 
    mb: '42px', 
    color: 'primary.base'
 };

export const Size = Template.bind({});

Size.args = {
    color: 'primary.base', 
    size: 200
 };
const DimsChildren = () => <Text color='text.lightest'>Box Dimensions</Text>;

export const Width = Template.bind({});

Width.args = {
    color: 'primary.base', 
    width: 1 / 2, 
    children: <DimsChildren />
 };

export const PixelWidth = Template.bind({});

PixelWidth.args = {
    color: 'primary.base', 
    width: 256, 
    children: <DimsChildren />
 };

export const VwWidth = Template.bind({});

VwWidth.args = {
    color: 'primary.base', 
    width: '75vw', 
    children: <DimsChildren />
 };
