/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\ics_react_ts_manual\.wizzi\src\components\Shell\ToolbarTitleShell.tsx.ittf
    utc time: Fri, 26 Mar 2021 07:40:26 GMT
*/
import * as React from 'react';
import {StyleSheet, css} from 'aphrodite';
type Props = { 
    children: React.ReactNode;
};
export default function ToolbarTitleShell({
        children
     }: Props) {
        return  (
            <div className={css(styles.left)}>
                {children}
            </div>
            )
        ;
    }
const styles = StyleSheet.create({
    left: {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        minWidth: 0, 
        flex: 1
     }
 });
