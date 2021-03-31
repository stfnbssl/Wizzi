/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\ics_react_ts_manual\.wizzi\src\components\Shell\ToolbarShell.tsx.ittf
    utc time: Fri, 26 Mar 2021 07:40:26 GMT
*/
import * as React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {prefTypes, withThemeName} from '../../features/preferences';
import colors from '../../configs/colors';
type Props = { 
    children: React.ReactNode;
    theme: prefTypes.ThemeName;
};
function ToolbarShell({
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
export default withThemeName(ToolbarShell);
const styles = StyleSheet.create({
    toolbar: {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        borderBottom: `1px solid ${colors.border}`, 
        height: 60
     }, 
    toolbarLight: {
        backgroundColor: colors.content.light
     }, 
    toolbarDark: {
        backgroundColor: colors.content.dark
     }
 });
