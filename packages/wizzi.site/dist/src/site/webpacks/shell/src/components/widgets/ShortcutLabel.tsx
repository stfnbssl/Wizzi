/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\src\site\webpacks\shell\src\components\widgets\ShortcutLabel.tsx.ittf
    utc time: Wed, 14 Apr 2021 15:53:09 GMT
*/
import {css, StyleSheet} from 'aphrodite';
import classnames from 'classnames';
import findKey from 'lodash/findKey';
import * as React from 'react';
import {c} from '../ThemeProvider';
import {KeyMap} from './KeybindingsManager';

type Props = { 
    combo: number[];
    className?: string;
    boxed?: boolean;
};

type KeyName =  keyof typeof KeyMap;

const isMac = 'navigator' in global && /Mac/i.test(navigator.platform);

const KeyLabels: Partial<{[key in KeyName] : string}> = {
    Cmd: '⌘', 
    Delete: '⌫', 
    Enter: '↩', 
    Shift: '⇧', 
    Ctrl: isMac ? '⌃' : 'Ctrl', 
    Alt: isMac ? '⌥' : 'Alt', 
    Backslash: '\\', 
    Tilde: '`'
 };

export default function ShortcutLabel({
        combo, 
        className, 
        boxed=false
     }: Props):  any {
    
        return  (
            <kbd
             className={classnames(css(styles.shortcutLabel), boxed && css(styles.boxedShortcut), className)}>
                {
                    combo.map((code) => {
                    
                        
                        // @ts-ignore
                        const name = findKey(KeyMap, c =>  
                            c === code
                        );
                        
                        if (name && KeyLabels[name]) {
                            return KeyLabels[name];
                        }
                        else {
                            return name;
                        }
                    }
                    ).join(isMac ? '' : '+')
                    
                }
            </kbd>
            )
        ;
    }

const styles = StyleSheet.create({
    shortcutLabel: {
        color: 'inherit', 
        fontFamily: 'var(--font-monospace)', 
        fontSize: '90%', 
        opacity: 0.5, 
        boxShadow: `none`, 
        display: 'inline-block', 
        lineHeight: 'initial'
     }, 
    boxedShortcut: {
        padding: '0.2rem 0.4rem', 
        border: `1px solid ${c(`border`)}`, 
        borderBottomWidth: 2, 
        borderRadius: 3, 
        opacity: 0.66
     }
 });
