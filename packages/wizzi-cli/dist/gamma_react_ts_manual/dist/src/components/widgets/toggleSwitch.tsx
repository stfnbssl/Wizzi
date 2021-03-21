/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\widgets\toggleSwitch.tsx.ittf
    utc time: Sun, 21 Mar 2021 14:14:13 GMT
*/
import React, {FunctionComponent} from 'react';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes} from 'styled-components';

type ToggleSwitchProps = { 
    checked: boolean;
    label: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    dark: boolean;
};

interface SwitchProps {
    dark: boolean;
    checked: boolean;
}
const Container = styled.label`
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 8px;
    white-space: nowrap;
    
`
const Label = styled.span`
    -ms-flex: 1;
    flex: 1;
    padding: 0 .5em;
    font-weight: normal;
    
`
const Switch = styled.span<SwitchProps>`
    display: inline-block;
    vertical-align: -4px;
    width: 36px;
    height: 20px;
    -webkit-border-radius: 12;
    -khtml-border-radius: 12;
    -moz-border-radius: 12;
    -o-border-radius: 12;
    border-radius: 12;
    border: ${props => props.dark ? '1px solid rgba(255, 255, 255, .2)' : '1px solid' + ' red'};
    &:before {
        content: "";
        display: inline-block;
        height: 14px;
        width: 14px;
        -webkit-border-radius: 7px;
        -khtml-border-radius: 7px;
        -moz-border-radius: 7px;
        -o-border-radius: 7px;
        border-radius: 7px;
        margin: 2px;
        -webkit-transition: .2s;
        -moz-transition: .2s;
        -o-transition: .2s;
        transition: .2s;
        background-color: ${props => props.checked ? (props.dark ? props.theme.palette.content.light : props.theme.palette.primary) : (props.dark ? 'rgba(255, 255, 255, .5)' : 'rgba(0, 0, 0, .5)')};
        -webkit-transform: ${props => props.checked ? 'translateX(16px)' : 'translateX(0)'};
        -ms-transition: ${props => props.checked ? 'translateX(16px)' : 'translateX(0)'};
        transform: ${props => props.checked ? 'translateX(16px)' : 'translateX(0)'};
    }
`
const Check = styled.input`
    display: none;
    
`
export const ToggleSwitch: FunctionComponent<ToggleSwitchProps> = ({
    checked, 
    label, 
    onChange, 
    className, 
    dark
}) => {
    // import classnames from 'classnames'
    // import colors from '../../configs/colors'
    // import usePreferences from '../../features/preferences/usePreferences'
    return  (
            <Container>
                <Label />
                <Switch checked={checked} dark={dark} />
                <Check type="checkbox" checked={checked} onChange={onChange} />
            </Container>
        )
    ;
}
;
