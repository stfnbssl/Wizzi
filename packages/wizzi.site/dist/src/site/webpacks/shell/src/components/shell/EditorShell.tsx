/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\src\site\webpacks\shell\src\components\shell\EditorShell.tsx.ittf
    utc time: Wed, 14 Apr 2021 15:53:09 GMT
*/
import React, {FunctionComponent} from 'react';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes} from 'styled-components';

import {c, ThemeName} from '../ThemeProvider';
import {AnimatedLogo} from '../widgets/AnimatedLogo';
type EditorShellProps = { 
    theme: ThemeName;
};

interface RootStyleProps {
}
interface LogoStyleProps {
}
const StyledRoot = styled.div<RootStyleProps>`
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    height: 100%;
    width: 100%;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    
`
const StyledLogo = styled.div<LogoStyleProps>`
    -webkit-transform: scale(0.4);
    -ms-transition: scale(0.4);
    transform: scale(0.4);
    opacity: 0.2;
    
`
export const EditorShell: FunctionComponent<EditorShellProps> = ({
    theme
 }) => 

     (
    <StyledRoot
    >
        <StyledLogo
        >
            <AnimatedLogo
             />
        </StyledLogo>
    </StyledRoot>
    )

;
