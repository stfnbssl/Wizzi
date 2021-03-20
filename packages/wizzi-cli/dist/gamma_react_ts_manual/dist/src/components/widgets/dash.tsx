/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\widgets\dash.tsx.ittf
    utc time: Sat, 20 Mar 2021 13:20:50 GMT
*/
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes} from 'styled-components';

const getCircumference = (radius: number) => radius * 2 * 3.14159;
const dashAnimation = (props: any) => {
    return keyframes`
            0% {
                stroke-dasharray: ${getCircumference(props.radius)};
                stroke-dashoffset: ${getCircumference(props.radius) * 0.97};
                -webkit-transform: rotate(-230deg);
                -ms-transition: rotate(-230deg);
                transform: rotate(-230deg);
            }
            100% {
                stroke-dasharray: ${getCircumference(props.radius)};
                stroke-dashoffset: ${getCircumference(props.radius) * 0.5};
                -webkit-transform: rotate(-110deg);
                -ms-transition: rotate(-110deg);
                transform: rotate(-110deg);
            }
        `
    ;
}
;
interface DashProps {
    radius: number;
    color: string;
    trackColor: string;
    width: number;
    duration: string;
}

export const Dash = styled.div<DashProps>`
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
    animation-name: ${dashAnimation};
    animation-duration: 8s;
    animation-iteration-count: infinite;
`
