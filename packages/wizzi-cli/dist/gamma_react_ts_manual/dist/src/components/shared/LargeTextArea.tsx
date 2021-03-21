/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\shared\LargeTextArea.tsx.ittf
    utc time: Sun, 21 Mar 2021 14:14:13 GMT
*/
import * as React from 'react';
import {StyleSheet, css} from 'aphrodite';
import Textarea from 'react-textarea-autosize';
import {prefTypes, withThemeName} from '../../features/preferences';
import colors from '../../configs/colors';
type Props = { 
    autoFocus?: boolean;
    value: string | undefined;
    name?: string;
    theme: prefTypes.ThemeName;
    minRows?: number;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};
function LargeTextArea({
    theme, 
    ...rest
}: Props) {
    return  (
            <Textarea className={css(styles.input, theme === 'light' ? styles.inputLight : styles.inputDark)} {...rest} />
        )
    ;
}
export default withThemeName(LargeTextArea);
const styles = StyleSheet.create({
    input: {
        outline: 0, 
        fontSize: 16, 
        borderRadius: 3, 
        padding: '12px 14px 12px 14px', 
        lineHeight: '22px', 
        border: `1px solid rgba(36, 44, 58, 0.1)`, 
        width: '100%', 
        ':focus': {
            borderColor: colors.primary
        }
    }, 
    inputLight: {
        backgroundColor: '#FFFFFF'
    }, 
    inputDark: {
        backgroundColor: 'rgba(0, 0, 0, .16)'
    }
});
