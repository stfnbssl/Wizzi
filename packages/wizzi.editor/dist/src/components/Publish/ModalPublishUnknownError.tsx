/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.editor\.wizzi\src\components\Publish\ModalPublishUnknownError.tsx.ittf
    utc time: Sun, 27 Jun 2021 11:22:09 GMT
*/
import {StyleSheet, css} from 'aphrodite';
import * as React from 'react';
import {ModalDialog} from '../widgets/ModalDialog';
type Props = { 
    visible: boolean;
    onDismiss: () => void;
};
export default class ModalPublishUnknownError extends React.PureComponent<Props> {
        render() {
            return  (
                <ModalDialog
                 visible={this.props.visible} onDismiss={this.props.onDismiss} title="Couldn't save the Packi!">
                    <p
                     className={css(styles.text)}>
                        An unknown error occurred when saving your Packi. Please try again later.
                    </p>
                </ModalDialog>
                )
            ;
        }
    }
const styles = StyleSheet.create({
    text: {
        marginTop: 12, 
        fontSize: 16, 
        textAlign: 'center'
     }
 });
