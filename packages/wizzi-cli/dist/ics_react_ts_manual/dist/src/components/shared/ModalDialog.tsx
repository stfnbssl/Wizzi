/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\ics_react_ts_manual\.wizzi\src\components\shared\ModalDialog.tsx.ittf
    utc time: Fri, 26 Mar 2021 07:40:26 GMT
*/
import * as React from 'react';
import {StyleSheet, css} from 'aphrodite';
import classnames from 'classnames';
import ModalSheet, {ModalSheetProps} from './ModalSheet';
type Props = ModalSheetProps & { 
    title?: string;
    autoSize?: boolean;
};
export default function ModalDialog(props: Props) {
        const {
            title, 
            children, 
            ...rest
         } = props;
        return  (
            <ModalSheet {...rest} className={classnames(css(props.autoSize !== false && styles.small), props.className)}>
                {
                    title ?  (
                        <div className={css(styles.title)}>
                            {title}
                        </div>
                        )
                     : null
                }
                <div className={css(title ? styles.bottom : styles.content)}>
                    {children}
                </div>
            </ModalSheet>
            )
        ;
    }
const styles = StyleSheet.create({
    small: {
        minWidth: 360, 
        minHeight: 0, 
        maxWidth: 420, 
        maxHeight: 'calc(100% - 100px)'
     }, 
    title: {
        height: 72, 
        fontSize: 24, 
        width: '100%', 
        lineHeight: '24px', 
        display: 'flex', 
        flexShrink: 0, 
        alignItems: 'center', 
        justifyContent: 'center', 
        boxShadow: '0 1px 0 rgba(36, 44, 58, 0.1)'
     }, 
    bottom: {
        padding: '16px 24px 24px 24px', 
        overflow: 'auto'
     }, 
    content: {
        padding: 24, 
        overflow: 'auto'
     }
 });