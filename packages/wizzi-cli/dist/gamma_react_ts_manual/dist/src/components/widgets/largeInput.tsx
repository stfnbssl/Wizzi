/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\widgets\largeInput.tsx.ittf
    utc time: Sat, 20 Mar 2021 13:20:50 GMT
*/
import React, {Component} from 'react';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes} from 'styled-components';

type LargeInputProps = { 
    value: string | undefined;
    disabled?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    name?: string;
    type?: string;
    autoFocus?: boolean;
    error?: Error | null;
    dark: boolean;
} 
;
type LargeInputState = { 
    focused: boolean;
} 
;

interface InputProps {
    dark: boolean;
    error: boolean;
}
const Container = styled.div`
    position: relative;
    
`
const Input = styled.input<InputProps>`
    outline: 0;
    fontSize: 16px;
    -webkit-border-radius: 3px;
    -khtml-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    border-radius: 3px;
    padding: 12px 14px 12px 14px;
    line-height: 22px;
    width: 100%;
    border-width: 1px;
    border-style: solid;
    border-color: ${props => props.error ? props.theme.palette.error : 'rgba(36, 44, 58, 0.1)'};
    border-color: ${props => props.error ? props.theme.palette.error : props.theme.palette.primary};
    background-color: ${props => props.dark ? 'rgba(0, 0, 0, .16)' : '#FFFFFF'};
`
const Validation = styled.div`
    position: absolute;
    color: white;
    padding: 6px 12px;
    -webkit-border-radius: 3px;
    -khtml-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    border-radius: 3px;
    margin-top: 8px;
    text-align: left;
    z-index: 1;
    &':before' {
        content: "";
        display: block;
        position: absolute;
        bottom: 100%;
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
    }
    
`

export class LargeInput extends Component<LargeInputProps, LargeInputState> {
    state = {
        focused: true
    };
    focus() {
        this._input.current && this._input.current.focus()}
    _handleFocus = () => {
        this.setState({
            focused: true
        })}
    _handleBlur = () => {
        this.setState({
            focused: false
        })}
    _input = React.createRef<HTMLInputElement>();;
    render() {
        return  (
                <Container>
                    <Input ref={this._input} autoFocus={this.props.autoFocus} value={this.props.value} name={this.props.name} type={this.props.type} disabled={this.props.disabled} onChange={this.props.onChange} placeholder={this.props.placeholder} onFocus={this._handleFocus} onBlur={this._handleBlur} dark={this.props.dark} error={!!this.props.error} />
                {
                    this.state.focused && this.props.error ?  (
                            <Validation />
                        )
                     : null
                }</Container>
            )
        ;
    }
}
