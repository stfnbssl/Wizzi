/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\widgets\pulsar.tsx.ittf
    utc time: Wed, 10 Mar 2021 13:28:34 GMT
*/
import styled, {keyframes} from 'styled-components';

const breathAnimation = keyframes`
    0% {
        height: 100px;
        width: 100px;
    }
    30% {
        height: 400px;
        width: 400px;
        opacity: 1;
    }
    40% {
        height: 405px;
        width: 405px;
        opacity: 0.3;
    }
    100% {
        height: 100px;
        width: 100px;
        opacity: 0.6;
    }
    
`
interface PulsarProps {
    diameter?: number;
}
export const Pulsar = styled.div<PulsarProps>`
    height: 100px;
    width: 100px;
    border-style: solid;
    border-width: 5px;
    -webkit-border-radius: 50%;
    -khtml-border-radius: 50%;
    -moz-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
    border-color: black;
    animation-name: ${breathAnimation};
    animation-duration: 8s;
    animation-iteration-count: infinite;
`
