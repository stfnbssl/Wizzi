/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\src\site\webpacks\shell\src\components\shell\PreviewShell.tsx.ittf
    utc time: Wed, 14 Apr 2021 15:53:09 GMT
*/
import React, {FunctionComponent} from 'react';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes} from 'styled-components';

import {c, ThemeName} from '../ThemeProvider';
import constants from '../../configs/constants';
type PreviewShellProps = { 
    theme: ThemeName;
    children: React.ReactNode;
};

interface RootStyleProps {
    theme: ThemeName;
}
const StyledRoot = styled.div<RootStyleProps>`
    height: 100%;
    display: none;
    min-width: 334;
    background-color: ${props => c('content', props.theme)};
    border-left: ${props => "1px solid " + c('border', props.theme)};
    @media (min-width: 780px) {
        display: 'flex';
    }
`
export const PreviewShell: FunctionComponent<PreviewShellProps> = ({
    theme, 
    children
 }) => 

     (
    <StyledRoot
     theme={theme}>
        {children}
    </StyledRoot>
    )

;
