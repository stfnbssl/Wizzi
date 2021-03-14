/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\widgets\rotate.tsx.ittf
    utc time: Thu, 11 Mar 2021 20:36:35 GMT
*/
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes} from 'styled-components';

const rotateAnimation = keyframes`
    from  {
        -webkit-transform: rotate(0deg);
        -ms-transition: rotate(0deg);
        transform: rotate(0deg);
    }
    to  {
        -webkit-transform: rotate(360deg);
        -ms-transition: rotate(360deg);
        transform: rotate(360deg);
    }
    
`
interface RotateProps {
    speed?: number;
}

export const Rotate = styled.div<RotateProps>`
    display: inline-block;
    -webkit-animation: ${rotateAnimation} 2s linear infinite;
    animation: ${rotateAnimation} 2s linear infinite;
    padding: 2rem 1rem;
    font-size: 1.2rem;
    animation-duration: 8s;
    animation-iteration-count: infinite;
`
