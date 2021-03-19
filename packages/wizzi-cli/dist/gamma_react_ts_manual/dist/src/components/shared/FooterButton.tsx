/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\shared\FooterButton.tsx.ittf
    utc time: Fri, 19 Mar 2021 20:08:21 GMT
*/
import * as React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {usePreferences} from '../../features/preferences';
type Props = { 
    active?: boolean;
    icon: string;
    children: React.ReactNode;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
} 
;
export default function FooterButton({
        active, 
        icon, 
        children, 
        onClick
    }: Props) {
        const [prefs] = usePreferences();
        return  (
                <button onClick={onClick} style={icon ? {
                        backgroundImage: `url(${icon})`
                    } : undefined} className={css(styles.button, active ? styles.buttonActive : styles.buttonInactive, prefs.theme === 'dark' ? styles.buttonDark : styles.buttonLight)}>
                {children}</button>
            )
        ;
    }
const styles = StyleSheet.create({
    button: {
        position: 'relative', 
        border: 0, 
        outline: 0, 
        margin: 0, 
        height: 30, 
        padding: '0 16px', 
        appearance: 'none', 
        backgroundSize: 16, 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center right 8px', 
        '@media (min-width: 720px)': {
            padding: '5px 32px 5px 8px'
        }
    }, 
    buttonLabel: {
        display: 'none', 
        '@media (min-width: 720px)': {
            display: 'inline'
        }
    }, 
    buttonActive: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
    }, 
    buttonInactive: {
        backgroundColor: 'transparent'
    }, 
    buttonLight: {
        ':active': {
            opacity: 0.5
        }
    }, 
    buttonDark: {
        ':active': {
            opacity: 0.3
        }
    }
});
