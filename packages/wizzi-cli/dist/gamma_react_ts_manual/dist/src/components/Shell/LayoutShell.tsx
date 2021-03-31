/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\Shell\LayoutShell.tsx.ittf
    utc time: Thu, 25 Mar 2021 16:39:06 GMT
*/
import * as React from 'react';
import {StyleSheet, css} from 'aphrodite';
type Props = { 
    children: React.ReactNode;
};
export default function LayoutShell({
        children
     }: Props) {
        return  (
            <div className={css(styles.layout)}>
                {children}
            </div>
            )
        ;
    }
const styles = StyleSheet.create({
    layout: {
        display: 'flex', 
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        position: 'relative', 
        height: '100%', 
        // Without this firefox doesn't shrink content
        minHeight: 0, 
        minWidth: 0
     }
 });
