/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\storybook\src\Text.stories.tsx.ittf
    utc time: Tue, 11 May 2021 04:47:46 GMT
*/
import React from 'react';
import {Story, Meta} from '@storybook/react';
import {Text, TextProps} from '../../src/components/widgets/Text';
import {theme} from '../../src/components/SCTheme';
import {ThemeProvider} from 'styled-components';

export default {
            title: 'Text', 
            component: Text, 
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
const Template: Story<TextProps> = (args) => 

     (
    <Text
     {...args}>
        Hello text
    </Text>
    )

;
export const TypographyComponent = () => 

     (
    <Text
     m={3}>
        Hello
    </Text>
    )

;
export const FontSize = () => 

     (
    <div
    >
        <Text
         fontSize={6}>
            Hello 6
        </Text>
        <Text
         fontSize={5}>
            Hello 5
        </Text>
        <Text
         fontSize={4}>
            Hello 4
        </Text>
        <Text
         fontSize={3}>
            Hello 3
        </Text>
        <Text
         fontSize={2}>
            Hello 2
        </Text>
        <Text
         fontSize={1}>
            Hello 1
        </Text>
        <Text
         fontSize={0}>
            Hello 0
        </Text>
    </div>
    )

;
FontSize.story = {
    name: 'fontSize'
 };
export const TextAlign = () => 

     (
    <div
    >
        <Text
         textAlign='left'>
            Hello Left
        </Text>
        <Text
         textAlign='center'>
            Hello Center
        </Text>
        <Text
         textAlign='right'>
            Hello Right
        </Text>
    </div>
    )

;
TextAlign.story = {
    name: 'textAlign'
 };
export const Regular = () => 

     (
    <Text
     regular>
        Hello Regular
    </Text>
    )

;
Regular.story = {
    name: 'regular'
 };
export const Bold = () => 

     (
    <Text
     bold>
        Hello Bold
    </Text>
    )

;
Bold.story = {
    name: 'bold'
 };
export const Caps = () => 

     (
    <Text
     caps>
        Hello Caps
    </Text>
    )

;
Caps.story = {
    name: 'caps'
 };
export const Italic = () => 

     (
    <Text
     italic>
        Hello italic
    </Text>
    )

;
Italic.story = {
    name: 'italic'
 };
export const Strikethrough = () => 

     (
    <Text.s
    >
        Hello Strikethrough
    </Text.s>
    )

;
Strikethrough.story = {
    name: 'strikethrough'
 };
export const Margin = () => 

     (
    <Text
     mt={4} mb={2}>
        Hello Margin
    </Text>
    )

;
Margin.story = {
    name: 'margin'
 };
export const Color = () => 

     (
    <div
    >
        <Text
         color='blue'>
            Hello Blue
        </Text>
        <Text
         color='green'>
            Hello Green
        </Text>
    </div>
    )

;
Color.story = {
    name: 'color'
 };
export const MinMaxHeight = () => 

     (
    <div
    >
        <Text 
            color='blue'
            minHeight={200}
            minWidth={300}
            width={1}
        >
            Hello Blue
        </Text>
        <Text
         color='green' maxHeight={200} maxWidth={300}>
            Hello Green
        </Text>
    </div>
    )

;
MinMaxHeight.story = {
    name: 'min/maxHeight'
 };
export const HideOnLgBreakpoints = () => 

     (
    <div
    >
        <Text 
            color='primary'
            display={[
                    null, 
                    null, 
                    null, 
                    'none'
                ]}
            fontSize={4}
            width={1}
        >
            Hidden text on larger screens
        </Text>
        <Text
         color='secondary' fontSize={4} width={1}>
            I am always show. But the text above, hides on larger screens.
        </Text>
    </div>
    )

;
export const Span = () => 

     (
    <Text
    >
        Just some text
        <Text.span
         bold>
            Some span text
        </Text.span>
        Just some more
    text
    </Text>
    )

;
export const Paragraph = () => 

     (
    <Text.p
    >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Text.p>
    )

;
HideOnLgBreakpoints.story = {
    name: 'Hide on > lg breakpoints'
 };
