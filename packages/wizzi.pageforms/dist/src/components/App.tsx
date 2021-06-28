/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.pageforms\.wizzi\src\components\App.tsx.ittf
    utc time: Mon, 28 Jun 2021 20:17:07 GMT
*/
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes, css} from 'styled-components';
import {c} from '../ThemeProvider';
import CreatePacki from './pageforms/CreatePacki';
import CreateTFolder from './pageforms/CreateTFolder';
import ThemeDemo from './pageforms/widgets/ThemeDemo';

interface RootStyleProps {
}
const StyledRoot = styled.div<RootStyleProps>`
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    
`

export class App extends Component<{}, {}> {
    render() {
        console.log('App.render', 'props', this.props, 'state', this.state);
        let Comp;
        if (this.props.formName == 'CreatePacki') {
            Comp = CreatePacki;
        }
        else if (this.props.formName == 'DeletePacki') {
            Comp = DeletePacki;
        }
        else if (this.props.formName == 'CreateTFolder') {
            Comp = CreateTFolder;
        }
        else if (this.props.formName == 'DeleteTFolder') {
            Comp = DeleteTFolder;
        }
        else if (this.props.formName == 'ThemeDemo') {
            Comp = () => {
            
                return  (
                    <ThemeDemo
                     />
                    )
                ;
            }
            ;
        }
        else {
            Comp = () => {
            
                return  (
                    <h1
                    >
                        Unknown page form: {this.props.formName}
                    </h1>
                    )
                ;
            }
            ;
        }
        return  (
            <StyledRoot
            >
                <Comp
                 data={this.props.formData} />
            </StyledRoot>
            )
        ;
    }
}
export default App;
