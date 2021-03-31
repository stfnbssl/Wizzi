/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\Editor\KeyboardShortcuts.tsx.ittf
    utc time: Thu, 25 Mar 2021 16:39:06 GMT
*/
import * as React from 'react';
import {StyleSheet, css} from 'aphrodite';
import ShortcutLabel from '../shared/ShortcutLabel';
import {KeyMap} from '../shared/KeybindingsManager';
import {prefTypes, withThemeName} from '../../features/preferences';
type Props = { 
    theme: prefTypes.ThemeName;
};
export const Shortcuts = {
    save: {
        description: 'Save changes', 
        combo: [
            KeyMap.Meta, 
            KeyMap.S
        ]
     }, 
    update: {
        type: 'update', 
        description: 'Update code on device', 
        combo: [
            KeyMap.Meta, 
            KeyMap.U
        ]
     }, 
    tree: {
        description: 'Toggle sidebar', 
        combo: [
            KeyMap.Meta, 
            KeyMap.Backslash
        ]
     }, 
    panels: {
        description: 'Toggle error and log panels', 
        combo: [
            KeyMap.Ctrl, 
            KeyMap.Tilde
        ]
     }, 
    format: {
        description: 'Format code with prettier', 
        combo: [
            KeyMap.Ctrl, 
            KeyMap.Alt, 
            KeyMap.F
        ]
     }, 
    shortcuts: {
        description: 'Show keyboard shortcuts', 
        combo: [
            KeyMap.Meta, 
            KeyMap.Alt, 
            KeyMap.Shift
        ]
     }
 };
class KeyboardShortcuts extends React.PureComponent<Props> {
    render() {
        return  (
            <table className={css(styles.shortcutList)}>
                <tbody>
                    {
                        Object.entries(Shortcuts).map(([type, binding]) => 
                             (
                            <tr key={type}>
                                <td className={css(styles.shortcutCell, styles.shortcutLabelCell)}>
                                    <kbd className={css(styles.shortcutLabel)}>
                                        <ShortcutLabel combo={binding.combo} />
                                    </kbd>
                                </td>
                                <td className={css(styles.shortcutCell, styles.shortcutDescriptionCell)}>
                                    {binding.description}
                                </td>
                            </tr>
                            )
                        
                        )
                    }
                </tbody>
            </table>
            )
        ;
    }
}
export default withThemeName(KeyboardShortcuts);
const styles = StyleSheet.create({
    shortcutList: {
        fontSize: '1.2em', 
        tableLayout: 'fixed'
     }, 
    shortcutCell: {
        padding: '6px 8px'
     }, 
    shortcutLabelCell: {
        textAlign: 'right'
     }, 
    shortcutDescriptionCell: {
        textAlign: 'left'
     }, 
    shortcutLabel: {
        color: 'inherit', 
        fontFamily: 'inherit', 
        fontSize: 'inherit', 
        backgroundColor: 'transparent', 
        boxShadow: 'none', 
        padding: 0, 
        display: 'inline-block'
     }
 });
