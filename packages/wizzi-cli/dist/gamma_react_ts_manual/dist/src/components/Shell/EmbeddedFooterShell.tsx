/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\Shell\EmbeddedFooterShell.tsx.ittf
    utc time: Thu, 25 Mar 2021 16:39:06 GMT
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
function EmbeddedFooterShell({
    type, 
    children
 }: Props) {
    return  (
        <div className={css(styles.footer, type === 'loading' ? styles.footerLoading : null)}>
            {children}
        </div>
        )
    ;
}
export default withThemeName(EmbeddedFooterShell);
const styles = StyleSheet.create({
    footer: {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        color: '#999', 
        borderTop: `1px solid ${colors.border}`, 
        transition: 'background .2s', 
        padding: '0 4px', 
        fontSize: 12, 
        height: 26
     }, 
    footerLoading: {
        backgroundColor: colors.primary, 
        color: 'rgba(255, 255, 255, .7)'
     }
 });
