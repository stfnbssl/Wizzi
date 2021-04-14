/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\src\site\webpacks\shell\src\components\EditorView\EditorFooter.tsx.ittf
    utc time: Wed, 14 Apr 2021 15:53:09 GMT
*/
import {StyleSheet, css} from 'aphrodite';
import * as React from 'react';
import constants from '../../configs/constants';
import {Annotation} from '../../features/annotations/index';
import {Shortcuts} from './KeyboardShortcuts';
import type {PanelType} from '../../features/preferences/index';
import {FooterShell} from '../shell/FooterShell';
import {c} from '../ThemeProvider';
import FooterButton from '../widgets/FooterButton';
import IconButton from '../widgets/IconButton';
import LoadingText from '../widgets/LoadingText';
import MenuButton from '../widgets/MenuButton';
import ShortcutLabel from '../widgets/ShortcutLabel';
import ToggleSwitch from '../widgets/ToggleSwitch';
type Props = { 
    annotations: Annotation[];
    fileTreeShown: boolean;
    previewShown: boolean;
    panelsShown: boolean;
    sendCodeOnChangeEnabled: boolean;
    onToggleTheme: () => void;
    onTogglePanels: (panelType?: PanelType) => void;
    onToggleFileTree: () => void;
    onTogglePreview: () => void;
    onToggleSendCode: () => void;
    onShowShortcuts: () => void;
    onSendCode: () => void;
    theme: string;
};
export default function EditorFooter(props: Props) {
    
        const {
            annotations, 
            fileTreeShown, 
            previewShown, 
            panelsShown, 
            sendCodeOnChangeEnabled, 
            onSendCode, 
            onToggleTheme, 
            onTogglePanels, 
            onToggleFileTree, 
            onTogglePreview, 
            onToggleSendCode, 
            onToggleVimMode, 
            onShowShortcuts, 
            theme
         } = props;
        const isLoading = false;
        const isErrorFatal = false;
        return  (
            <FooterShell
             type={isLoading ? 'loading' : isErrorFatal ? 'error' : null}>
                <div
                 className={css(styles.left)}>
                    {
                        isLoading ?  (
                            <LoadingText
                             className={css(styles.loadingText)} onClick={() => 
                                
                                    onTogglePanels('errors')
                            }>
                                {text}
                            </LoadingText>
                            )
                         :  (
                            <button
                             onClick={() => 
                                
                                    onTogglePanels(text ? 'errors' : undefined)
                            } className={css(styles.statusText, text ? (isErrorFatal ? styles.errorTextFatal : styles.errorText) : styles.successText)}>
                                {
                                    text
                                     ?? (`No errors${
                                    warningCount
                                     ? `, ${warningCount} warning${
                                        warningCount > 1
                                         ? 's'
                                         : ''}
                                        `
                                     : ''}
                                    `)
                                }
                            </button>
                            )
                        
                    }
                </div>
                <MenuButton
                 icon={require('../../assets/settings-icon.png')} label={ (
                    <span
                     className={css(styles.buttonLabel)}>
                        Editor
                    </span>
                    )
                } content={ (
                    <React.Fragment
                    >
                        <div
                         className={css(styles.buttonItem, styles.buttonItemEditorPane)} onClick={onShowShortcuts}>
                            <IconButton
                             small title="Show keyboard shortcuts" label="Shortcuts" />
                            <ShortcutLabel
                             combo={Shortcuts.shortcuts.combo} className={css(styles.buttonItemShortcut)} />
                        </div>
                        <div
                         className={css(styles.menuSeparator)} />
                        <ToggleSwitch
                         checked={fileTreeShown} onChange={onToggleFileTree} label="Files" />
                        <ToggleSwitch
                         checked={panelsShown} onChange={() => 
                            
                                onTogglePanels()
                        } label="Panel" />
                        <ToggleSwitch
                         checked={theme !== 'light'} onChange={onToggleTheme} label="Dark theme" />
                    </React.Fragment>
                    )
                } />
                <div
                 className={css(styles.devicePreviewSwitch)}>
                    <ToggleSwitch
                     checked={previewShown} onChange={onTogglePreview} label="Preview" />
                </div>
            </FooterShell>
            )
        ;
    }
const styles = StyleSheet.create({
    left: {
        display: 'flex', 
        alignItems: 'stretch', 
        flex: 1, 
        minWidth: 0, 
        overflow: 'hidden'
     }, 
    loadingText: {
        textOverflow: 'ellipsis', 
        whiteSpace: 'nowrap', 
        padding: '.5em', 
        width: '100%', 
        cursor: 'pointer'
     }, 
    statusText: {
        border: 0, 
        outline: 0, 
        margin: 0, 
        appearance: 'none', 
        backgroundColor: 'transparent', 
        backgroundSize: 16, 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: '1em center', 
        display: 'inline-block', 
        textOverflow: 'ellipsis', 
        whiteSpace: 'nowrap', 
        padding: '.25em .5em .25em 3em', 
        minWidth: 200, 
        width: '100%', 
        textAlign: 'left'
     }, 
    successText: {
        backgroundImage: `url(${require('../../assets/checkmark.png')})`
     }, 
    errorText: {
        backgroundImage: `url(${require('../../assets/cross-red.png')})`, 
        color: c('error')
     }, 
    errorTextFatal: {
        backgroundImage: `url(${require('../../assets/cross-light.png')})`
     }, 
    errorBorder: {
        borderColor: c('error-text')
     }, 
    devicesCount: {
        position: 'absolute', 
        top: 4, 
        right: 6, 
        height: 20, 
        minWidth: 20, 
        borderRadius: '50%', 
        backgroundColor: c('text'), 
        color: c('background'), 
        opacity: 0.5
     }, 
    devicePane: {
        padding: '0 16px'
     }, 
    devicePaneItem: {
        margin: '0 -16px'
     }, 
    deviceLabel: {
        display: 'flex', 
        alignItems: 'center', 
        whiteSpace: 'nowrap', 
        padding: '8px 0'
     }, 
    deviceIcon: {
        height: 16, 
        width: 16, 
        marginRight: 8, 
        fill: 'currentColor'
     }, 
    noDevicesMessage: {
        whiteSpace: 'nowrap', 
        margin: 8
     }, 
    buttonLabel: {
        display: 'none', 
        [`@media (min-width: ${constants.preview.minWidth + 20}px)`]: {
                display: 'inline'
             }
     }, 
    buttonItem: {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between'
     }, 
    buttonItemShortcut: {
        userSelect: 'none', 
        cursor: 'pointer', 
        marginLeft: 12
     }, 
    buttonItemEditorPane: {
        margin: '0 12px'
     }, 
    title: {
        margin: '16px 0 8px'
     }, 
    action: {
        textDecoration: 'underline', 
        cursor: 'pointer', 
        fontWeight: 'bold'
     }, 
    devicePreviewSwitch: {
        display: 'none', 
        [`@media (min-width: ${constants.preview.minWidth}px)`]: {
                display: 'block'
             }
     }, 
    menuSeparator: {
        margin: '6px 0', 
        borderBottom: `1px solid ${c('border')}`
     }
 });
