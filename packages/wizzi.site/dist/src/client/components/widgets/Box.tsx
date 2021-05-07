/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\src\components\widgets\Box.tsx.ittf
    utc time: Fri, 07 May 2021 18:42:12 GMT
*/
import styled from 'styled-components';
import {display, DisplayProps, height, HeightProps, maxHeight, MaxHeightProps, maxWidth, MaxWidthProps, minHeight, MinHeightProps, minWidth, MinWidthProps, size, SizeProps, space, SpaceProps, textAlign, TextAlignProps, width, WidthProps, ColorProps} from 'styled-system';
import {applyVariations, color, boxShadow} from '../styles/utils';

export type BoxProps = DisplayProps | HeightProps | MaxHeightProps | MaxWidthProps | MinHeightProps | MinWidthProps | SizeProps | SpaceProps | TextAlignProps | WidthProps | ColorProps | // eslint-disable-next-line @typescript-eslint/no-explicit-any
{ 
    as?:  keyof JSX.IntrinsicElements | React.ComponentType<any>;
};

console.log('display', display);
console.log('height', height);
console.log('maxHeight', maxHeight);
console.log('maxWidth', maxWidth);
console.log('minHeight', minHeight);
console.log('minWidth', minWidth);
console.log('size', size);
console.log('space', space);
console.log('textAlign', textAlign);
console.log('width', width);

export const Box = styled.div<BoxProps>`
    ${applyVariations('Box')}
    ${display}
    ${height}
    ${maxHeight}
    ${maxWidth}
    ${minHeight}
    ${minWidth}
    ${size}
    ${space}
    ${textAlign}
    ${width}
    ${color}
    ${boxShadow}
`

Box.displayName = 'Box';

export default Box;
