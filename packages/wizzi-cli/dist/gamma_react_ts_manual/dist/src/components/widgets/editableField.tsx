/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\widgets\editableField.tsx.ittf
    utc time: Wed, 24 Mar 2021 05:09:46 GMT
*/
import React, {Component} from 'react';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes} from 'styled-components';

const RETURN_KEYCODE = 13;
const ESCAPE_KEYCODE = 27;
type EditableFieldProps = { 
    value: string;
    onSubmitText?: (value: string) => Promise<void>;
    dark: boolean;
    className?: string;
};
type EditableFieldState = { 
    value: string;
    focused: boolean;
};

interface InputProps {
    dark: boolean;
}
const Container = styled.div`
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    max-width: 100%;
    position: relative;
    
`
const Phantom = styled.div`
    display: inline-block;
    max-width: 100%;
    pointer-events: none;
    white-space: pre;
    overflow: hidden;
    opacity: 0;
    display: inline-block;
    margin: 0;
    padding: 1px 6px;
    
`
const Input = styled.input<InputProps>`
    position: absolute;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: none;
    outline: 0;
    border: 0;
    left: 0;
    width: '100%';
    -webkit-border-radius: 0;
    -khtml-border-radius: 0;
    -moz-border-radius: 0;
    -o-border-radius: 0;
    border-radius: 0;
    display: inline-block;
    margin: 0;
    padding: 1px 6px;
    &:focus {
        -webkit-box-shadow: ${props => 'inset 0 0 0 1px ' + props.theme.palette.primary};
        -moz-box-shadow: ${props => 'inset 0 0 0 1px ' + props.theme.palette.primary};
        -o-box-shadow: ${props => 'inset 0 0 0 1px ' + props.theme.palette.primary};
        box-shadow: ${props => 'inset 0 0 0 1px ' + props.theme.palette.primary};
    }
    &:hover:focus {
        -webkit-box-shadow: ${props => 'inset 0 0 0 1px ' + props.theme.palette.primary};
        -moz-box-shadow: ${props => 'inset 0 0 0 1px ' + props.theme.palette.primary};
        -o-box-shadow: ${props => 'inset 0 0 0 1px ' + props.theme.palette.primary};
        box-shadow: ${props => 'inset 0 0 0 1px ' + props.theme.palette.primary};
    }
    &:hover:focus {
        -webkit-box-shadow: ${props => props.dark ? 'inset 0 0 0 1px rgba(255, 255, 255, .16)' : 'inset 0 0 0 1px rgba(0, 0, 0, .16)'};
        -moz-box-shadow: ${props => props.dark ? 'inset 0 0 0 1px rgba(255, 255, 255, .16)' : 'inset 0 0 0 1px rgba(0, 0, 0, .16)'};
        -o-box-shadow: ${props => props.dark ? 'inset 0 0 0 1px rgba(255, 255, 255, .16)' : 'inset 0 0 0 1px rgba(0, 0, 0, .16)'};
        box-shadow: ${props => props.dark ? 'inset 0 0 0 1px rgba(255, 255, 255, .16)' : 'inset 0 0 0 1px rgba(0, 0, 0, .16)'};
    }
`

export class EditableField extends Component<EditableFieldProps, EditableFieldState> {
    static getDerivedStateFromProps(props: EditableFieldProps, state: EditableFieldState) {
        if (state.value !== props.value && !state.focused) {
            return {
                    value: props.value || ''
                };
        }
        return null;
    }
    state = {
        value: this.props.value || '', 
        focused: false
    }
    ;
    _handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => 
        this.setState({
            value: e.target.value
        });
    _handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        e.target.select();
        this.setState({
            focused: true
        })
    };
    _handleBlur = async () => this.setState({
            focused: false
        })
    ;
    _handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === RETURN_KEYCODE || e.keyCode === ESCAPE_KEYCODE) {
        }
    };
    render() {
        return  (
            <Container>
                <Phantom className={this.props.className}>
                    {this.state.value.replace(/\n/g, '')}</Phantom>
                <Input onFocus={this._handleFocus}
                    onBlur={this._handleBlur}
                    onKeyDown={this._handleKeyDown}
                    value={this.state.value}
                    onChange={this._handleChangeText}
                    className={this.props.className}
                    dark={this.props.dark}
                 />
            </Container>
            )
        ;
    }
}
