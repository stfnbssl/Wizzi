/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\Shell\SidebarShell.tsx.ittf
    utc time: Wed, 24 Mar 2021 16:19:16 GMT
*/
import * as React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {prefTypes, withThemeName} from '../../features/preferences';
import colors from '../../configs/colors';
type Props = { 
    children?: React.ReactNode;
    theme: prefTypes.ThemeName;
};
function SidebarShell({
    children, 
    theme
}: Props) {
    return  (
        <div className={css(styles.sidebar, theme === 'dark' ? styles.sidebarDark : styles.sidebarLight)}>
            {children}
        </div>
        )
    ;
}
export default withThemeName(SidebarShell);
const styles = StyleSheet.create({
    sidebar: {
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        minWidth: 240, 
        borderRight: `1px solid ${colors.border}`
    }, 
    sidebarLight: {
        backgroundColor: colors.content.light
    }, 
    sidebarDark: {
        backgroundColor: colors.content.dark
    }
});
