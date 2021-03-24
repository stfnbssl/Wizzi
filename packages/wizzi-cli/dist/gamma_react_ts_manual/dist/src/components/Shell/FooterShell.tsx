/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\Shell\FooterShell.tsx.ittf
    utc time: Wed, 24 Mar 2021 16:19:16 GMT
*/
import * as React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {prefTypes, withThemeName} from '../../features/preferences';
import colors from '../../configs/colors';
type Props = { 
    type?: 'loading' | 'error' | null;
    children?: React.ReactNode;
    theme: prefTypes.ThemeName;
};
function FooterShell({
    type, 
    children, 
    theme
}: Props) {
    return  (
        <div className={css(styles.footer, type === 'error' ? styles.footerErrorFatal : type === 'loading' ? styles.footerLoading : theme === 'dark' ? styles.footerDark : styles.footerLight)}>
            {children}
        </div>
        )
    ;
}
export default withThemeName(FooterShell);
const styles = StyleSheet.create({
    footer: {
        position: 'relative', 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        padding: '0 .25em', 
        borderTop: `1px solid ${colors.border}`, 
        height: 30, 
        zIndex: 10
    }, 
    footerLight: {
        backgroundColor: colors.content.light, 
        color: '#999'
    }, 
    footerDark: {
        backgroundColor: colors.content.dark, 
        color: 'rgba(255, 255, 255, .5)'
    }, 
    footerErrorFatal: {
        backgroundColor: colors.error, 
        color: 'rgba(255, 255, 255, .7)'
    }, 
    footerLoading: {
        backgroundColor: colors.primary, 
        color: 'rgba(255, 255, 255, .7)'
    }
});
