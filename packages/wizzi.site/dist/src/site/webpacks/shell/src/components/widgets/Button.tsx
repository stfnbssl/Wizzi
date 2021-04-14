/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\src\site\webpacks\shell\src\components\widgets\Button.tsx.ittf
    utc time: Wed, 14 Apr 2021 15:53:09 GMT
*/
import React, {FunctionComponent} from 'react';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes} from 'styled-components';

import {c, s, ThemeName} from '../ThemeProvider';
type ButtonProps = { 
    theme: ThemeName;
    variant?: 'primary' | 'secondary';
    large?: boolean;
    icon?: string;
    disabled?: boolean;
    loading?: boolean;
    type?: 'primary' | 'secondary';
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    children: React.ReactNode;
};

interface RootStyleProps {
    theme: ThemeName;
    icon: string;
    disabled: boolean;
    primary: boolean;
    secondary: boolean;
    large: boolean;
}
const buttonKeyframes = keyframes`
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
const StyledRoot = styled.div<RootStyleProps>`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    color: ${props => props.primary ? c('primary-text', props.theme) : props.secondary ? c('secondary-text', props.theme) : c('text', props.theme)};
    background-color: ${props => props.primary ? c('primary', props.theme) : props.secondary ? c('secondary', props.theme) : c('content', props.theme)};
    outline: 0;
    border: ${props => props.primary ? "1px solid transparent" : props.secondary ? "1px solid transparent" : "1px solid " + c('border', props.theme)};
    -webkit-border-radius: 3px;
    -khtml-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    border-radius: 3px;
    white-space: nowrap;
    text-align: center;
    -webkit-text-decoration: none;
    text-decoration: none;
    fontSize: ${props => props.large ? "16px" : 'inherit'};
    width: ${props => props.large ? "100%" : 'inherit'};
    padding: ${props => props.icon ? ".5em 1em .5em 36px" : props.large ? "1em 1.5em" : props.normal ? ".5em 1em" : "0"};
    margin: ${props => props.icon ? ".5em" : props.large ? ".5em 0" : props.normal ? ".5em" : "0"};
    pointer-events: ${props => props.disabled ? "none" : "inherit"};
    opacity: ${props => props.disabled ? "0.3" : "inherit"};
    background-size: ${props => props.icon ? "16px" : "none"};
    background-repeat: ${props => props.icon ? "no-repeat" : "none"};
    background-position: ${props => props.icon ? "12px center" : "none"};
    transition-duration: 170ms;
    transition-property: box-shadow;
    transition-timing-function: linear;
    background-image: ${props => props.icon ? "url(" + icon + ")" : "none"};
    &:hover {
        -webkit-box-shadow: ${props => s('small', props.theme)};
        -moz-box-shadow: ${props => s('small', props.theme)};
        -o-box-shadow: ${props => s('small', props.theme)};
        box-shadow: ${props => s('small', props.theme)};
    }
    &:before {
        display: inline-block;
        content: "";
        border-width: 2px;
        border-style: solid;
        border-top-color: ${props => "rgba(255, 255, 255, 0.2)"};
        border-right-color: ${props => "rgba(255, 255, 255, 0.2)"};
        border-bottom-color: ${props => "rgba(255, 255, 255, 0.2)"};
        border-left-color: ${props => c('primary-text', props.theme)};
        height: 16px;
        width: 16px;
        -webkit-border-radius: 50%;
        -khtml-border-radius: 50%;
        -moz-border-radius: 50%;
        -o-border-radius: 50%;
        border-radius: 50%;
        margin-right: .75em;
        vertical-align: -3;
        animation-name: buttonKeyframes;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
`
export const Button: FunctionComponent<ButtonProps> = ({
    theme, 
    variant, 
    large, 
    icon, 
    disabled, 
    loading, 
    type, 
    className, 
    onClick, 
    children
 }) => 

     (
    <StyledRoot 
        type="button"
        className={className}
        disabled={disabled}
        onClick={onClick}
        theme={theme}
        primary={variant === 'primary'}
        secondary={variant === 'secondary'}
        icon={icon}
        large={large}
        loading={loading}
     />
    )

;
