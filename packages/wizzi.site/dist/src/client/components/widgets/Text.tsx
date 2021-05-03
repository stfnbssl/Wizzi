/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\src\components\widgets\Text.tsx.ittf
    utc time: Mon, 03 May 2021 09:48:27 GMT
*/
import styled, {css} from 'styled-components';
import {system, display, DisplayProps, fontSize, FontSizeProps, fontWeight, FontWeightProps, height, HeightProps, lineHeight, LineHeightProps, maxHeight, MaxHeightProps, maxWidth, MaxWidthProps, minHeight, MinHeightProps, minWidth, MinWidthProps, overflow, OverflowProps, space, SpaceProps, textAlign, TextAlignProps, textStyle, TextStyleProps, width, WidthProps, zIndex, ZIndexProps} from 'styled-system';
import {themeGet} from '@styled-system/theme-get';
import {applyVariations, getPaletteColor} from '../styles/utils';

export type TextProps = DisplayProps | FontSizeProps | FontWeightProps | HeightProps | LineHeightProps | MaxHeightProps | MaxWidthProps | MinHeightProps | MinWidthProps | OverflowProps | SpaceProps | TextAlignProps | TextStyleProps | WidthProps | ZIndexProps | // eslint-disable-next-line @typescript-eslint/no-explicit-any
{ 
    as?:  keyof JSX.IntrinsicElements | React.ComponentType<any>;
};

export const caps = () => 

    ((props: any) => 
    
        props.caps ? css`
                text-transform: uppercase;
                -webkit-letter-spacing: ${themeGet('letterSpacings.caps')(props)};
                -moz-letter-spacing: ${themeGet('letterSpacings.caps')(props)};
                -ms-letter-spacing: ${themeGet('letterSpacings.caps')(props)};
                letter-spacing: ${themeGet('letterSpacings.caps')(props)};
            `
         : null
    )
;

export const regular = () => 

    ((props: any) => 
    
        props.regular ? css`
                font-weight: ${props.theme.regular};
            `
         : null
    )
;

export const bold = () => 

    ((props: any) => 
    
        props.bold ? css`
                font-weight: ${props.theme.regular};
            `
         : null
    )
;
export const textShadow = () => 

    ((props: any) => {
    
        const textShadowSize = props.textShadowSize || 'md';
        return props.enableTextShadow ? css`
                    font-weight: ${props.theme.regular};
                `
             : null;
    }
    )
;

console.log('display', display);
console.log('fontSize', fontSize);
console.log('fontWeight', fontWeight);
console.log('height', height);
console.log('lineHeight', lineHeight);
console.log('maxHeight', maxHeight);
console.log('maxWidth', maxWidth);
console.log('minHeight', minHeight);
console.log('minWidth', minWidth);
console.log('overflow', overflow);
console.log('space', space);
console.log('textAlign', textAlign);
console.log('textStyle', textStyle);
console.log('width', width);
console.log('zIndex', zIndex);

const textProps = css`
    ${applyVariations('Text')}
    color: ${getPaletteColor('base')};
    ${caps}
    ${regular}
    ${bold}
    ${textShadow}
    ${display}
    ${fontSize}
    ${fontWeight}
    ${height}
    ${lineHeight}
    ${maxHeight}
    ${maxWidth}
    ${minHeight}
    ${minWidth}
    ${overflow}
    ${space}
    ${textAlign}
    ${textStyle}
    ${width}
    ${zIndex}
`
;

export const Text = styled.div`
    ${textProps}
`

export const Span = styled.span`
    ${textProps}
`

export const Paragraph = styled.p`
    ${textProps}
`

export const Strike = styled.s`
    ${textProps}
`

Text.displayName = 'Text';

Span.displayName = 'Text.span';
(Text as any).span = Span;

Paragraph.displayName = 'Text.p';
(Text as any).p = Paragraph;

Strike.displayName = 'Text.s';
(Text as any).s = Strike;

export default Text;
