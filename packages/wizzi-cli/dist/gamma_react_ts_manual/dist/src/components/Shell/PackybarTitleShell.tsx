/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\Shell\PackybarTitleShell.tsx.ittf
    utc time: Thu, 25 Mar 2021 16:39:06 GMT
*/
import * as React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {prefTypes, withThemeName} from '../../features/preferences';
import colors from '../../configs/colors';
type Props = { 
    children: React.ReactNode;
    theme: prefTypes.ThemeName;
};
function PackibarTitleShell({
    children, 
    theme
 }: Props) {
    return  (
        <div className={css(styles.toolbar, theme === 'dark' ? styles.toolbarDark : styles.toolbarLight)}>
            {children}
        </div>
        )
    ;
}
export default withThemeName(PackibarTitleShell);
const styles = StyleSheet.create({
    toolbar: {
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        height: 40
     }, 
    toolbarLight: {
        backgroundColor: colors.content.light
     }, 
    toolbarDark: {
        backgroundColor: colors.content.dark
     }
 });
