/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\src\site\webpacks\shell\src\components\shell\SidebarShell.tsx.ittf
    utc time: Wed, 14 Apr 2021 15:53:09 GMT
*/
import React, {FunctionComponent} from 'react';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes} from 'styled-components';

import {c, ThemeName} from '../ThemeProvider';
type SidebarShellProps = { 
    theme: ThemeName;
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
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 100%;
    min-width: 240px;
    border-right: ${props => "1px solid " + c('border', props.theme)};
    background-color: ${props => c('content', props.theme)};
`
export const SidebarShell: FunctionComponent<SidebarShellProps> = ({
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
