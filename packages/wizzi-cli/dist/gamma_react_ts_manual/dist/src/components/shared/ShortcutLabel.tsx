/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\shared\ShortcutLabel.tsx.ittf
    utc time: Sun, 21 Mar 2021 14:14:13 GMT
*/
import findKey from 'lodash/findKey';
import {KeyMap} from './KeybindingsManager';
type Props = { 
    combo: number[];
};
type KeyName =  keyof typeof KeyMap;
const isMac = 'navigator' in global && /Mac/i.test(navigator.platform);
const KeyLabels: Partial<{[key in KeyName] : string}> = {
    Cmd: '⌘', 
    Delete: '⌫', 
    Enter: '↩', 
    Shift: '⇧', 
    Ctrl: isMac ? '⌃' : 'Ctrl', 
    Alt: isMac ? '⌥' : 'Alt', 
    Backslash: '\\', 
    Tilde: '`'
};
export default function ShortcutLabel({
        combo
    }: Props):  any {
        return combo.map((code) => {
                const name = findKey(KeyMap, c => c === code);
                // @ts-ignore
                if (name && KeyLabels[name]) {
                    // @ts-ignore
                    return KeyLabels[name];
                }
                else {
                    return name;
                }
            }
            ).join(isMac ? '' : '+')
        ;
    }
