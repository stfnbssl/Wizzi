/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\shared\ToggleSwitch.tsx.ittf
    utc time: Fri, 19 Mar 2021 20:08:21 GMT
*/
import * as React from 'react';
import classnames from 'classnames';
import {StyleSheet, css} from 'aphrodite';
import colors from '../../configs/colors';
import usePreferences from '../../features/preferences/usePreferences';
type Props = { 
    checked: boolean;
    label: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
} 
;
export default function ToggleSwitch(props: Props) {
        const [prefs] = usePreferences();
        return  (
                <label className={classnames(css(styles.container), props.className)}>
                    <span className={css(styles.label)}>
                    {props.label}</span>
                
                    <span className={css(styles.switch, props.checked ? styles.active : styles.inactive, prefs.theme === 'dark' ? styles.dark : styles.light, prefs.theme === 'dark' ? props.checked ? styles.darkActive : styles.darkInactive : props.checked ? styles.lightActive : styles.lightInactive)}>
                    </span>
                
                    <input type="checkbox" checked={props.checked} onChange={props.onChange} className={css(styles.check)}>
                    </input>
                
                </label>
            )
        ;
    }
const styles = StyleSheet.create({
    container: {
        display: 'flex', 
        alignItems: 'center', 
        margin: 8, 
        cursor: 'pointer', 
        whiteSpace: 'nowrap'
    }, 
    switch: {
        display: 'inline-block', 
        verticalAlign: -4, 
        width: 36, 
        height: 20, 
        borderRadius: 12, 
        ':before': {
            content: '""', 
            display: 'inline-block', 
            height: 14, 
            width: 14, 
            borderRadius: 7, 
            margin: 2, 
            transition: '.2s', 
            transform: 'translateX(0)'
        }
    }, 
    inactive: {
        ':before': {
            transform: 'translateX(0)'
        }
    }, 
    active: {
        ':before': {
            transform: 'translateX(16px)'
        }
    }, 
    light: {
        border: `1px solid ${colors.border}`
    }, 
    lightInactive: {
        ':before': {
            backgroundColor: 'rgba(0, 0, 0, .5)'
        }
    }, 
    lightActive: {
        ':before': {
            backgroundColor: colors.primary
        }
    }, 
    dark: {
        border: '1px solid rgba(255, 255, 255, .2)'
    }, 
    darkInactive: {
        ':before': {
            backgroundColor: 'rgba(255, 255, 255, .5)'
        }
    }, 
    darkActive: {
        ':before': {
            backgroundColor: colors.content.light
        }
    }, 
    check: {
        display: 'none'
    }, 
    label: {
        flex: 1, 
        padding: '0 .5em', 
        fontWeight: 'normal'
    }
});
