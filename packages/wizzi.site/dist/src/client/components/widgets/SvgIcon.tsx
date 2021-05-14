/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\src\components\widgets\SvgIcon.tsx.ittf
    utc time: Tue, 11 May 2021 04:47:43 GMT
*/
import React, {FunctionComponent} from 'react';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes, css} from 'styled-components';

export interface SvgIconProps {
    width?: number;
    height?: number;
    children: React.ReactNode;
}

const StyledRoot = styled.svg.attrs<SvgIconProps>(
    (props) => {
    
        return {
                version: '1.1', 
                xmlns: 'http://www.w3.org/2000/svg', 
                xmlnsXlink: 'http://www.w3.org/1999/xlink'
             };
    }
)`
    width: ${props => props.width ? props.width + 'px' : '24px'};
    height: ${props => props.height ? props.height + 'px' : props.width ? props.width + 'px' : '24px'};
`
export const SvgIcon: FunctionComponent<SvgIconProps> = ({
    width, 
    height, 
    children
 }) => 

     (
    <StyledRoot
     width={width} height={height}>
        {children}
    </StyledRoot>
    )

;
export default SvgIcon;
