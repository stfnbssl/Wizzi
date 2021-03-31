/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\Auth\SocialLogin.tsx.ittf
    utc time: Thu, 25 Mar 2021 16:39:06 GMT
*/
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
import {withStyles, createStyles, Theme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import OAuthLogin from './OAuthLogin';
import PageLoader from '../shared/Spinner';
import {config} from '../../features/config';
import {appTypes} from '../../features/app';
import {authTypes} from '../../features/auth';
const socket = io(config.SERVER_URL);
const providers = [
    'github'
];
type Props = authTypes.AuthProps & { 
    classes: any;
};
type State = { 
    loading: boolean;
};
class SocialLogin extends React.Component<Props, State> {
    state = {
        loading: true
    }
    ;
    componentDidMount() {
        fetch(`${config.SERVER_URL}/wake-up`).then((res) => {
            if (res.ok) {
                this.setState({
                    loading: false
                 })
            }
        }
        )
    }
    render() {
        const {
            classes, 
            loggedUser, 
            onLoggedOn, 
            onLoggedOff
         } = this.props;
        const buttons = (providers: string[], socket: any) => 
            providers.map((provider) => 
                 (
                <OAuthLogin provider={provider}
                    key={provider}
                    socket={socket}
                    loggedUser={loggedUser}
                    onLoggedOn={onLoggedOn}
                    onLoggedOff={onLoggedOff}
                 />
                )
            
            )
        ;
        return  (
            <div className={classes.wrapper}>
                <div className={classes.container}>
                    {
                        this.state.loading ?  (
                            <PageLoader />
                            )
                         :  (
                            <React.Fragment>
                                <div className={classes.display}>
                                    {buttons(providers, socket)}
                                    {
                                        loggedUser ? null :  (
                                            <React.Fragment>
                                                <Typography variant="display1">
                                                    Login using your GitHub account.
                                                </Typography>
                                                <Typography variant="body1">
                                                    Tokens are not stored. You have to log in at every reload.
                                                </Typography>
                                            </React.Fragment>
                                            )
                                        
                                    }
                                </div>
                            </React.Fragment>
                            )
                        
                    }
                </div>
            </div>
            )
        ;
    }
}
const muiStyles = (theme: Theme) => 
    createStyles({
        wrapper: {
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center'
         }, 
        container: {
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-around', 
            height: '50vh', 
            width: '50vw'
         }, 
        display: {
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center'
         }
     })
;
export default withStyles(muiStyles)(SocialLogin);
