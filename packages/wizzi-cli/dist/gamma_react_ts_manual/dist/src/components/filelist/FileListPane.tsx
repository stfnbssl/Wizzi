/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\filelist\FileListPane.tsx.ittf
    utc time: Wed, 24 Mar 2021 16:19:16 GMT
*/
import * as React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {prefTypes} from '../../features/preferences';
type Props = { 
    title: string;
    expanded: boolean;
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
    buttons?: React.ReactNode[];
    children?: React.ReactNode;
    className?: string;
    theme: prefTypes.ThemeName;
};
export default function FileListPane({
        theme, 
        title, 
        expanded, 
        buttons, 
        children, 
        onClick, 
        className
    }: Props) {
        return  (
            <div className={`${className || ''} ${css(styles.container)}`}>
                <div className={css(styles.header, theme === 'dark' ? styles.foreDark : styles.foreLight, theme === 'dark' ? styles.backDark : styles.backLight)}>
                    <div className={css(styles.left)} onClick={onClick} data-test-id={`file-list-pane-${title.toLowerCase().replace(/[^a-z]/g, '-')}`}>
                        <svg className={css(styles.collapse, expanded ? styles.collapseExpanded : styles.collapseCollapsed)}
                            width="12px"
                            height="12px"
                            viewBox="0 0 12 12"
                        >
                            <g stroke="none"
                                strokeWidth="2"
                                fill="none"
                                fillRule="evenodd"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline stroke="currentColor" transform="translate(6.000000, 6.000000) scale(-1, 1) rotate(180.000000) translate(-6.000000, -6.000000) " points="2 4 6 8 10 4" />
                            </g>
                        </svg>
                        <h4 className={css(styles.label)}>
                            {title}
                        </h4>
                    </div>
                    <div className={css(styles.right)}>
                        {buttons}
                    </div>
                </div>
                {
                    expanded ? children : null
                }
            </div>
            )
        ;
    }
const styles = StyleSheet.create({
    container: {
        display: 'flex', 
        flexDirection: 'column', 
        margin: '8px 0'
    }, 
    backLight: {
        backgroundColor: 'rgba(0, 0, 0, .08)', 
        borderBottom: '2px solid rgba(0, 0, 0, .09)'
    }, 
    backDark: {
        backgroundColor: 'rgba(255, 255, 255, .08)', 
        borderBottom: '2px solid rgba(255, 255, 255, .09)'
    }, 
    foreLight: {
        backgroundColor: 'rgba(255, 255, 255, .08)'
    }, 
    foreDark: {
        backgroundColor: 'rgba(0, 0, 0, .08)'
    }, 
    header: {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        padding: '0 4px'
    }, 
    label: {
        fontSize: '1em', 
        fontWeight: 500, 
        lineHeight: 1, 
        margin: 0
    }, 
    collapse: {
        margin: '1px 6px 1px 2px', 
        opacity: 0.7
    }, 
    collapseCollapsed: {
        transform: 'rotate(180deg)'
    }, 
    collapseExpanded: {
        transform: 'rotate(0deg)'
    }, 
    left: {
        flex: 1, 
        display: 'flex', 
        flexDirection: 'row', 
        padding: '8px 4px', 
        cursor: 'pointer'
    }, 
    right: {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center'
    }
});
