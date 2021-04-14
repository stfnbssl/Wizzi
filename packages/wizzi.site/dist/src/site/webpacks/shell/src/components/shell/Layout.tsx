/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\src\site\webpacks\shell\src\components\shell\Layout.tsx.ittf
    utc time: Wed, 14 Apr 2021 15:53:09 GMT
*/
import React, {FunctionComponent} from 'react';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes} from 'styled-components';

type LayoutProps = { 
    dark: boolean;
    children: React.ReactNode;
};

interface LayoutStyleProps {
    dark?: boolean;
}
const StyledLayout = styled.div<LayoutStyleProps>`
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -ms-flex: 1;
    flex: 1;
    flexDirection: row;
    justifyContent: space-between;
    position: relative;
    height: 100%;
    minHeight: 0;
    minWidth: 0;
    background-color: ${props => props.dark ? '#323232' : '#DEDEDE'};
    color: ${props => props.dark ? '#DEDEDE' : '#323232'};
`
export const Layout: FunctionComponent<LayoutProps> = ({
    dark, 
    children
 }) => 

     (
    <StyledLayout
     dark={dark}>
        {children}
    </StyledLayout>
    )

;
