/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\Auth\AuthenticationForm.tsx.ittf
    utc time: Thu, 25 Mar 2021 16:39:06 GMT
*/
import * as React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {authTypes} from '../../features/auth';
import Button from '../shared/Button';
import Banner from '../shared/Banner';
import LargeInput from '../shared/LargeInput';
import colors from '../../configs/colors';
type Props = authTypes.AuthProps & { 
    onSuccess?: () => Promise<void>;
    onError?: () => void;
};
type State = { 
    username: string;
    password: string;
    error: boolean;
    loading: boolean;
};
class AuthenticationForm extends React.Component<Props, State> {
    state = {
        username: '', 
        password: '', 
        error: false, 
        loading: false
    }
    ;
    _handleChange = (e: React.ChangeEvent<HTMLInputElement>) => 
        this.setState({
            [e.target.name]: e.target.value, 
            error: false
         }  as any);
    _handleUserAuth = // 
    async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.setState({
            loading: true, 
            error: false
         })
    }
    ;
    render() {
        return  (
            <div>
                <form onSubmit={this._handleUserAuth}>
                    <h4 className={css(styles.subtitle)}>
                        Username
                    </h4>
                    <LargeInput value={this.state.username}
                        name="username"
                        autoFocus
                        onChange={this._handleChange}
                     />
                    <h4 className={css(styles.subtitle)}>
                        Password
                    </h4>
                    <LargeInput value={this.state.password}
                        name="password"
                        type="password"
                        onChange={this._handleChange}
                     />
                    <div className={css(styles.buttons)}>
                        <Button large
                            variant="secondary"
                            type="submit"
                            loading={this.state.loading}
                        >
                            Log in
                        </Button>
                    </div>
                    <p className={css(styles.caption)}>
                        <a className={css(styles.link)} href="https://packi.org/signup" target="blank">
                            Sign up for Packi
                        </a>
                    </p>
                </form>
                <Banner type="error" visible={this.state.error}>
                    An error occurred while logging in to your account!
                </Banner>
            </div>
            )
        ;
    }
}
export default AuthenticationForm//
const styles = StyleSheet.create({
    subtitle: {
        fontSize: 16, 
        fontWeight: 500, 
        padding: 0, 
        lineHeight: '22px', 
        margin: '16px 0 6px 0'
     }, 
    buttons: {
        margin: '20px 0 0 0'
     }, 
    caption: {
        marginTop: 24, 
        fontSize: '16px', 
        lineHeight: '22px', 
        textAlign: 'center'
     }, 
    link: {
        cursor: 'pointer', 
        color: colors.primary, 
        textDecoration: 'underline'
     }
 });