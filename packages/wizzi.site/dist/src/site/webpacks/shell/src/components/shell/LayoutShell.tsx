/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\src\site\webpacks\shell\src\components\shell\LayoutShell.tsx.ittf
    utc time: Wed, 14 Apr 2021 15:53:09 GMT
*/
import React, {FunctionComponent} from 'react';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes} from 'styled-components';

type LayoutShellProps = { 
    theme: ThemeName;
    children: React.ReactNode;
};

interface LayoutStyleProps {
    theme: ThemeName;
}
const StyledLayout = styled.div<LayoutStyleProps>`
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -ms-flex: 1;
    flex: 1;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: space-between;
    -ms-flex-pack: space-between;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    position: relative;
    height: 100%;
    min-height: 0;
    min-width: 0;
    
`
export const LayoutShell: FunctionComponent<LayoutShellProps> = ({
    theme, 
    children
 }) => 

     (
    <StyledLayout
     theme={theme}>
        {children}
    </StyledLayout>
    )

;
