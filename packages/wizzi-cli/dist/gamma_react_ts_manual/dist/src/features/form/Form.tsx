/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\features\form\Form.tsx.ittf
    utc time: Sat, 20 Mar 2021 13:20:50 GMT
*/
import * as React from 'react';
import {Register, Unregister, Update, FormValidation} from './types';
type Props = { 
    onSubmit: () => void;
    children: React.ReactNode;
} 
;
type State = { 
    isValid: boolean;
} 
;
export const FormValidationContext = React.createContext<FormValidation | undefined>(undefined);
export default class Form extends React.Component<Props, State> {
        state = {
            isValid: false
        };
        componentDidMount() {
            this._update();
        }
        _key = 0;
        _inputs: Array<{ 
            key: number;
            validate: () => Error | null;
            focus: () => void;
        } 
        > = [];
        _register = ({
            validate, 
            focus
        }) => {
            Registerconst key = this._key++;
            this._inputs.push({
                key, 
                validate, 
                focus
            })
            return key;
        }
        _unregister = (key: number) => {
            Unregisterthis._inputs = this._inputs.filter(it => it.key !== key);
        }
        _update = () => {
            Updatethis.setState({
                isValid: this._inputs.every(it => !it.validate())
            })
        }
        _handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            for (const input of this._inputs) {
                if (input.validate) {
                    input.focus();
                    return ;
                }
            }
            this.props.onSubmit();
        }
        render() {
            return  (
                    <FormValidationContext.Provider value={{
                        register: this._register, 
                        unregister: this._unregister, 
                        update: this._update, 
                        valid: this.state.isValid
                    }} form={onSubmit {this._handleSubmit}{this.props.children}} />
                )
            ;
        }
    }
