/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\Auth\ModalAuthentication.tsx.ittf
    utc time: Thu, 25 Mar 2021 16:39:06 GMT
*/
import * as React from 'react';
import {authTypes} from '../../features/auth';
import {appTypes} from '../../features/app';
import ModalDialog from '../shared/MuiModalDialog';
import SocialLogin from './SocialLogin';
type Props = authTypes.AuthProps & { 
    visible: boolean;
    onDismiss: () => void;
    onComplete: () => void;
};
type State = { 
    error: boolean;
};
class ModalAuthentication extends React.Component<Props, State> {
    componentDidUpdate(prevProps: Props) {
        if (this.props.visible && this.props.loggedUser !== prevProps.loggedUser) {
            this.props.onComplete();
        }
    }
    render() {
        return  (
            <ModalDialog visible={this.props.visible} onDismiss={this.props.onDismiss} title={this.props.loggedUser ? 'Your profile' : "Log in to Packi"}>
                <SocialLogin loggedUser={this.props.loggedUser} onLoggedOn={this.props.onLoggedOn} onLoggedOff={this.props.onLoggedOff} />
            </ModalDialog>
            )
        ;
    }
}
export default ModalAuthentication;
