/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.frontend\.wizzi\src\components\widgets\Card.tsx.ittf
    utc time: Sat, 01 May 2021 05:18:20 GMT
*/
import styled from 'styled-components';
import {borderRadius, BorderRadiusProps} from 'styled-system';
import {Box} from './Box';
import {applyVariations, getPaletteColor} from '../styles/utils';

const boxBorder = ({
    borderWidth, 
    borderColor, 
    ...props
 }: any) => 

    ({
        border: borderWidth === 0 ? '0' : `${borderWidth}px solid ${getPaletteColor(borderColor, 'base')(props)}`
     })
;

interface StyledCardProps {
    borderColor: string;
    borderRadius: number;
    borderWidth: number;
}
const Card = styled(Box)<StyledCardProps>`
    ${applyVariations('Card')}
    ${boxBorder}
    ${borderRadius}
`

Card.defaultProps = {
    borderColor: 'border', 
    borderRadius: 1, 
    borderWidth: 1
 };

Card.displayName = 'Card';

export default Card;
