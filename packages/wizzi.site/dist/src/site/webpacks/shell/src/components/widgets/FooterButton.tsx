/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\src\site\webpacks\shell\src\components\widgets\FooterButton.tsx.ittf
    utc time: Wed, 14 Apr 2021 15:53:09 GMT
*/
import {StyleSheet, css} from 'aphrodite';
import * as React from 'react';
import {c} from '../ThemeProvider';

type Props = { 
    active?: boolean;
    icon?: string;
    children?: React.ReactNode;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export default function FooterButton({
        active, 
        icon, 
        children, 
        onClick
     }: Props) {
    
        return  (
            <button
             onClick={onClick} style={icon ? {
                        backgroundImage: `url(${icon})`
                     } : undefined} className={css(styles.button, children ? styles.buttonLabel : undefined, active && styles.active)}>
                {children}
            </button>
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
        backgroundColor: 'transparent', 
        backgroundSize: 16, 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center right 8px', 
        ':active': {
            backgroundColor: c('hover'), 
            color: c('soft')
         }, 
        ':hover': {
            backgroundColor: c('hover'), 
            color: c('soft')
         }
     }, 
    buttonLabel: {
        '@media (min-width: 720px)': {
            padding: '5px 32px 5px 8px'
         }
     }, 
    active: {
        backgroundColor: c('hover'), 
        color: c('soft')
     }
 });
