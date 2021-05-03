/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.frontend\.wizzi\src\components\Publish\ModalPublishOverwriteError.tsx.ittf
    utc time: Sat, 01 May 2021 05:18:20 GMT
*/
import {StyleSheet, css} from 'aphrodite';
import * as React from 'react';
import {Button} from '../widgets/Button';
import {ModalDialog} from '../widgets/ModalDialog';
type Props = { 
    username: string | undefined;
    slug: string;
    visible: boolean;
    onEditName: () => void;
    onDismiss: () => void;
};
export default class ModalPublishOverwriteError extends React.Component<Props> {
        render() {
            return  (
                <ModalDialog
                 visible={this.props.visible} onDismiss={this.props.onDismiss} title="Experience already exists!">
                    <p
                     className={css(styles.text)}>
                        You already have an experience published under "
                        {
                            this.props.username ? `@${this.props.username}/${this.props.slug}` : this.props.slug
                        }
                        " in
          your profile. Please choose another name for the Snack and save again.
                    </p>
                    <Button
                     large variant="secondary" onClick={this.props.onEditName}>
                        Choose another name
                    </Button>
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
