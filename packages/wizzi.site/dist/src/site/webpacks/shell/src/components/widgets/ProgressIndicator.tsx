/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\src\site\webpacks\shell\src\components\widgets\ProgressIndicator.tsx.ittf
    utc time: Wed, 14 Apr 2021 15:53:09 GMT
*/
import React, {FunctionComponent} from 'react';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes} from 'styled-components';

import {c, ThemeName} from '../ThemeProvider';
type ProgressIndicatorProps = { 
    theme: ThemeName;
    delay: number;
    duration: number;
    className: string;
};

interface RootStyleProps {
    theme: ThemeName;
    delay: number;
    duration: number;
}
const progressKeyframes = keyframes`
    0% {
        -webkit-transform: scale3d(0, 1, 1);
        -ms-transition: scale3d(0, 1, 1);
        transform: scale3d(0, 1, 1);
        opacity: 1;
    }
    75% {
        -webkit-transform: scale3d(1, 1, 1);
        -ms-transition: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
        opacity: 1;
    }
    100% {
        -webkit-transform: scale3d(1, 1, 1);
        -ms-transition: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
        opacity: 0;
    }
    
`
const StyledRoot = styled.div<RootStyleProps>`
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    z-index: 1;
    background-color: ${props => c('primary', props.theme)};
    -webkit-transform: scale3d(0, 1, 1);
    -ms-transition: scale3d(0, 1, 1);
    transform: scale3d(0, 1, 1);
    transform-origin: top left;
    animation-name: progressKeyframes;
    animation-iteration-count: infinite;
    animation-delay: ${props => props.delay + 'ms'};
    animation-duration: ${props => props.duration + 'ms'};
`
export const ProgressIndicator: FunctionComponent<ProgressIndicatorProps> = ({
    theme, 
    delay, 
    duration, 
    className
 }) => 

     (
    <StyledRoot 
        theme={theme}
        delay={delay}
        duration={duration}
        className={className}
     />
    )

;
ProgressIndicator.defaultProps = {
    delay: 0, 
    duration: 2000
 };
