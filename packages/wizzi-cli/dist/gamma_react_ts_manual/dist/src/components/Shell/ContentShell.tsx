/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\Shell\ContentShell.tsx.ittf
    utc time: Wed, 24 Mar 2021 16:19:16 GMT
*/
import * as React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {prefTypes, withThemeName} from '../../features/preferences';
import colors from '../../configs/colors';
type Props = { 
    children: React.ReactNode;
    theme: prefTypes.ThemeName;
};
function ContentShell({
    children, 
    theme
}: Props) {
    return  (
        <div className={css(styles.container, theme === 'dark' ? styles.backgroundDark : styles.backgroundLight)}>
            {children}
        </div>
        )
    ;
}
export default withThemeName(ContentShell);
const styles = StyleSheet.create({
    container: {
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%', 
        width: '100%', 
        overflow: 'hidden'
    }, 
    backgroundLight: {
        backgroundColor: colors.background.light, 
        color: colors.text.light
    }, 
    backgroundDark: {
        backgroundColor: colors.background.dark, 
        color: colors.text.dark
    }
});
