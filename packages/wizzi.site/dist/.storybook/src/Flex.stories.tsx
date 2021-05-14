/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\storybook\src\Flex.stories.tsx.ittf
    utc time: Tue, 11 May 2021 04:47:46 GMT
*/
import React from 'react';
import {Story, Meta} from '@storybook/react';
import {Flex, FlexProps} from '../../src/components/widgets/Flex';
import {theme} from '../../src/components/SCTheme';
import {ThemeProvider} from 'styled-components';
import {Box} from '../../src/components/widgets/Box';

export default {
            title: 'Flex', 
            component: Flex, 
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
                    
                 }
             }
         } as Meta
const Template: Story<FlexProps> = (args) => 

     (
    <Flex
     {...args}>
        Hello flex
    </Flex>
    )

;
export const Basic = () => 

     (
    <Flex
     alignItems='center'>
        <Box 
            width={1 / 2}
            p={3}
            color='white'
            bg='blue'
        >
            Flex
        </Box>
        <Box 
            width={1 / 2}
            p={1}
            color='white'
            bg='green'
        >
            Box
        </Box>
    </Flex>
    )

;
export const Wrap = () => 

     (
    <Flex
     flexWrap='wrap'>
        <Box 
            width={[
                    1, 
                    1 / 2
                ]}
            p={3}
            color='white'
            bg='blue'
        >
            Flex
        </Box>
        <Box 
            width={[
                    1, 
                    1 / 2
                ]}
            p={1}
            color='white'
            bg='green'
        >
            Wrap
        </Box>
    </Flex>
    )

;
export const Justify = () => 

     (
    <Flex
     justifyContent='space-around'>
        <Box 
            width={1 / 3}
            p={2}
            color='white'
            bg='blue'
        >
            Flex
        </Box>
        <Box 
            width={1 / 3}
            p={2}
            color='white'
            bg='green'
        >
            Justify
        </Box>
    </Flex>
    )

;
export const DeprecatedAlignShim = () => 

     (
    <Flex
     align='center'>
        <Box 
            width={1 / 2}
            p={3}
            color='white'
            bg='blue'
        >
            Flex
        </Box>
        <Box 
            width={1 / 2}
            p={1}
            color='white'
            bg='green'
        >
            Box
        </Box>
    </Flex>
    )

;
DeprecatedAlignShim.story = {
    name: 'deprecated align shim'
 };
export const DeprecatedBgShim = () => 

     (
    <Flex
     bg='blue'>
        <Box 
            width={1 / 2}
            p={3}
            color='white'
            bg='blue'
        >
            Flex
        </Box>
        <Box 
            width={1 / 2}
            p={1}
            color='white'
            bg='green'
        >
            Box
        </Box>
    </Flex>
    )

;
DeprecatedBgShim.story = {
    name: 'deprecated bg shim'
 };
