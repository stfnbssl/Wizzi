/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\widgets\inputref.tsx.ittf
    utc time: Thu, 11 Mar 2021 20:36:35 GMT
*/
import React, {Component} from 'react';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes} from 'styled-components';

const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: palevioletred;
    background: papayawhip;
    border: none;
    -webkit-border-radius: 3px;
    -khtml-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    border-radius: 3px;
    
`


export class InputRef extends Component<{}, {}> {
    constructor(props: any) {
        super(props);
        this.inputRef = React.createRef();
    }
    inputRef: any;
    render() {
        return  (
                <Input ref={this.inputRef} placeholder="Hover to focus!" onMouseEnter={() =>
                    this.inputRef.current.focus()}>
                </Input>
            )
        ;
    }
}
