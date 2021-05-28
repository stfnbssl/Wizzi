/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\client\src\components\AphroditeTheme.tsx.ittf
    utc time: Tue, 25 May 2021 15:10:47 GMT
*/
//
// Aphrodite theme
// taken from https://github.com/expo/snack/blob/main/website/src/client/components/ThemeProvider.tsx
// modified
import React, {FunctionComponent} from 'react';
import {StyleSheet, css} from 'aphrodite';
import classnames from 'classnames';

import {colors} from './styles/colors';
import {shadows} from './styles/shadows';
import mapKeys from 'lodash/mapKeys';

type Colors = typeof lightColors;

type ColorName =  keyof typeof lightColors;

type Shadows = typeof lightShadows;

type ShadowName =  keyof typeof lightShadows;

const lightColors = {
    primary: colors.primary[500], 
    secondary: colors.black, 
    error: colors.semantic.error, 
    warning: colors.semantic.warning, 
    success: colors.semantic.success, 
    'primary-text': colors.white, 
    'secondary-text': colors.white, 
    'error-text': colors.white, 
    'warning-text': colors.white, 
    'success-text': colors.white, 
    text: colors.gray[900], 
    soft: colors.gray[500], 
    'soft-text': colors.white, 
    
    // semantic.background offered too little contrast with content
    
    // background: colors.semantic.background,
    background: '#F9F9F9', 
    content: colors.white, 
    hover: colors.gray[100], 
    disabled: colors.gray[300], 
    selected: colors.primary[500], 
    'selected-text': colors.white, 
    border: colors.semantic.border
 };


// Use custom colors for dark theme which are not

// so saturated and blue-ish

// const darkGray = colors.gray;
const lightShadows = {
    popover: shadows.popover, 
    small: shadows.small
 };

export function c(color: ColorName) {

    return `var(--color-${color})`;
}

export function s(shadow: ShadowName) {

    return `var(--shadow-${shadow})`;
}

export interface ThemeProviderProps {
    style?: any;
    className?: string;
    children: React.ReactNode;
}

const styles = StyleSheet.create({
    container: {
        height: '100%', 
        width: '100%'
     }, 
    light: {
        ...mapKeys(lightColors, (_, key) => `--color-${key}`
        ), 
        ...mapKeys(lightShadows, (_, key) => `--shadow-${key}`
        )
     }
 });
export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({
    style, 
    className, 
    children
 }) => {

    return  (
        <div
         className={classnames(css(style || styles.container, styles.light), className)}>
            {children}
        </div>
        )
    ;
}
;
export default ThemeProvider;
