/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\src\components\widgets\Flex.tsx.ittf
    utc time: Mon, 03 May 2021 09:48:27 GMT
*/
import styled from 'styled-components';
import {space, SpaceProps, width, WidthProps, alignItems, AlignItemsProps, justifyContent, JustifyContentProps, flexWrap, FlexWrapProps, flexDirection, FlexDirectionProps} from 'styled-system';
import {applyVariations} from '../styles/utils';
import Box from './Box';
export type FlexProps = SpaceProps | WidthProps | AlignItemsProps | JustifyContentProps | FlexWrapProps | FlexDirectionProps | // eslint-disable-next-line @typescript-eslint/no-explicit-any
{ 
    as?:  keyof JSX.IntrinsicElements | React.ComponentType<any>;
};
console.log('space', space);
console.log('width', width);
console.log('alignItems', alignItems);
console.log('justifyContent', justifyContent);
console.log('flexWrap', flexWrap);
console.log('flexDirection', flexDirection);
interface StyledFlexProps {
    wrap: boolean;
    align: string;
    justify: string;
}
export const Flex = styled(Box).attrs<StyledFlexProps>(
    ({
        wrap, 
        align, 
        justify, 
        ...props
     }) => 
    
        ({
            flexWrap: wrap ? 'wrap' : undefined, 
            alignItems: align, 
            justifyContent: justify, 
            ...props
         })
)`
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    ${applyVariations('Flex')}
    ${space}
    ${width}
    ${alignItems}
    ${justifyContent}
    ${flexWrap}
    ${flexDirection}
`
export default Flex;
