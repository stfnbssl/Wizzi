/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.editor\.wizzi\src\components\Publish\ModalPublishToProfile.tsx.ittf
    utc time: Sun, 27 Jun 2021 11:22:09 GMT
*/
import {StyleSheet, css} from 'aphrodite';
import * as React from 'react';
import {connect} from 'react-redux';
import {c} from '../ThemeProvider';
import {Button} from '../widgets/Button';
import {ModalDialog} from '../widgets/ModalDialog';
type Props = { 
    visible: boolean;
    packiUrl?: string;
    zipUrl?: string;
    isPublishing: boolean;
    onDismiss: () => void;
    onPublish: () => void;
};
class ModalPublishToProfile extends React.Component<Props> {
    componentDidMount() {
        document.addEventListener('keydown', this._handleKeyDown);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this._handleKeyDown);
    }
    _handleKeyDown = (e: KeyboardEvent) => {
        if (this.props.visible && e.keyCode === 13) {
            e.preventDefault();
            this.props.onPublish();
        }
    };
    render() {
        const copy = 'Want a stable and easy to remember URL?';
        const cta = 'Save to your Wizzi Profile';
        return  (
            <ModalDialog
             visible={this.props.visible} title="Save your packi" onDismiss={this.props.onDismiss}>
                <p
                 className={css(styles.text)} style={{
                        marginTop: 16
                     }}>
                    The shareable link to your Packi
                    {' '}
                    <a
                     href={this.props.packiUrl} target="blank">
                        {this.props.packiUrl}
                    </a>
                </p>
                <p
                 className={css(styles.text)}>
                    Every time you save, your will get a new link to share.
                    {copy}
                    Log in or sign up and save
          to your profile!
                </p>
                <Button 
                    large
                    variant="primary"
                    onClick={this.props.onPublish}
                    loading={this.props.isPublishing}
                >
                    {cta}
                </Button>
                {
                    this.props.zipUrl ?  (
                        <p
                         className={css(styles.caption)}>
                            <a
                             className={css(styles.link)} href={this.props.zipUrl} target="blank">
                                Download .zip file
                            </a>
                        </p>
                        )
                     : null
                }
            </ModalDialog>
            )
        ;
    }
}
export default ModalPublishToProfile;
const styles = StyleSheet.create({
    text: {
        marginBottom: 24, 
        fontSize: '16px', 
        padding: '0 24px 0 24px', 
        lineHeight: '22px', 
        textAlign: 'center'
     }, 
    caption: {
        marginTop: 24, 
        fontSize: '16px', 
        lineHeight: '22px', 
        textAlign: 'center'
     }, 
    link: {
        color: c('primary'), 
        cursor: 'pointer', 
        textDecoration: 'underline'
     }
 });
