/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\src\components\Publish\ModalPublishing.tsx.ittf
    utc time: Tue, 11 May 2021 04:47:43 GMT
*/
import {StyleSheet, css} from 'aphrodite';
import * as React from 'react';
import {ModalDialog} from '../widgets/ModalDialog';
import Spinner from '../widgets/Spinner';
type Props = { 
    visible: boolean;
    onDismiss: () => void;
};
export default function ModalPublishing(props: Props) {
    
        return  (
            <ModalDialog
             visible={props.visible} onDismiss={props.onDismiss} title="Saving Snack…">
                <div
                 className={css(styles.content)}>
                    <Spinner
                     />
                </div>
            </ModalDialog>
            )
        ;
    }
const styles = StyleSheet.create({
    content: {
        margin: '16px 8px 12px'
     }
 });
