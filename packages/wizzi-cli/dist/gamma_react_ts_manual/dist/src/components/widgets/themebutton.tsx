/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\widgets\themebutton.tsx.ittf
    utc time: Sat, 20 Mar 2021 13:20:50 GMT
*/
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes} from 'styled-components';

export enum VARIANT {
    PRIMARY , 
    SECONDARY , 
    TERTHIARY
}
interface ThemeButtonProps {
    variant?: VARIANT;
}

export const ThemeButton = styled.button<ThemeButtonProps>`
    margin: 8px;
    -webkit-border-radius: ${props => props.theme.borderRadius};
    -khtml-border-radius: ${props => props.theme.borderRadius};
    -moz-border-radius: ${props => props.theme.borderRadius};
    -o-border-radius: ${props => props.theme.borderRadius};
    border-radius: ${props => props.theme.borderRadius};
    ${props => {
        switch (props.variant) {
            case VARIANT.SECONDARY: {
                return `
                    color: ${props.theme.palette.secondary2.contrastText};
                    background-color: ${props.theme.palette.secondary2.main};
                `
            }
            case VARIANT.PRIMARY:
            default: {
                return `
                    color: ${props.theme.palette.primary2.contrastText};
                    background-color: ${props.theme.palette.primary2.main};
                `
            }
        }
        
    }}
`
