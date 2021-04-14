/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\src\site\webpacks\shell\src\components\shell\FooterShell.tsx.ittf
    utc time: Wed, 14 Apr 2021 15:53:09 GMT
*/
import React, {FunctionComponent} from 'react';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes} from 'styled-components';

import {c, ThemeName} from '../ThemeProvider';
type FooterShellProps = { 
    theme: ThemeName;
    type: 'loading' | 'error' | null;
    children: React.ReactNode;
};

interface RootStyleProps {
    theme: ThemeName;
}
const StyledRoot = styled.div<RootStyleProps>`
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    position: relative;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 .25em;
    border-top: ${props => "1px solid " + c('border', props.theme)};
    background-color: ${props => props.type === 'error' ? c('error', props.theme) : props.type === 'loading' ? c('primary', props.theme) : c('content', props.theme)};
    color: ${props => props.type === 'error' ? c('error-text', props.theme) : props.type === 'loading' ? c('primary-text', props.theme) : c('soft', props.theme)};
    height: 30px;
    zIndex: 10;
`
export const FooterShell: FunctionComponent<FooterShellProps> = ({
    theme, 
    type, 
    children
 }) => 

     (
    <StyledRoot
    >
        {children}
    </StyledRoot>
    )

;
