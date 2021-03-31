/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\ics_react_ts_manual\.wizzi\src\components\Shell\EditorShell.tsx.ittf
    utc time: Fri, 26 Mar 2021 07:40:26 GMT
*/
import * as React from 'react';
import {StyleSheet, css} from 'aphrodite';
import AnimatedLogo from '../shared/AnimatedLogo';
export default function EditorShell() {
        return  (
            <div className={css(styles.container)}>
                <div className={css(styles.logo)}>
                    <AnimatedLogo />
                </div>
            </div>
            )
        ;
    }
const styles = StyleSheet.create({
    container: {
        display: 'flex', 
        height: '100%', 
        width: '100%', 
        alignItems: 'center', 
        justifyContent: 'center'
     }, 
    logo: {
        transform: 'scale(0.4)', 
        opacity: 0.2
     }
 });
