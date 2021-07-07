/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.pageforms\.wizzi\src\components\App.tsx.ittf
    utc time: Mon, 05 Jul 2021 16:18:01 GMT
*/
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes, css} from 'styled-components';
import {c, s} from './ThemeProvider';
import CreateUser from './pageforms/CreateUser';
import UpdateUser from './pageforms/UpdateUser';
import DeleteUser from './pageforms/DeleteUser';
import CreateArtifactProduction from './pageforms/CreateArtifactProduction';
import UpdateArtifactProduction from './pageforms/UpdateArtifactProduction';
import DeleteArtifactProduction from './pageforms/DeleteArtifactProduction';
import CreateTFolder from './pageforms/CreateTFolder';
import UpdateTFolder from './pageforms/UpdateTFolder';
import DeleteTFolder from './pageforms/DeleteTFolder';
import ThemeDemo from './pageforms/widgets/ThemeDemo';

export interface AppProps {
    formName: string;
    formData: any;
}

interface RootStyleProps {
}
const StyledRoot = styled.div<RootStyleProps>`
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    
`

export class App extends Component<AppProps, {}> {
    render() {
        console.log('App.render', 'props', this.props, 'state', this.state);
        let Comp;
        if (this.props.formName == '***') {
            throw new Error("Don't make me laugh!");
        }
        else if (this.props.formName == 'CreateUser') {
            Comp = CreateUser;
        }
        else if (this.props.formName == 'DeleteUser') {
            Comp = DeleteUser;
        }
        else if (this.props.formName == 'UpdateUser') {
            Comp = UpdateUser;
        }
        else if (this.props.formName == 'CreateArtifactProduction') {
            Comp = CreateArtifactProduction;
        }
        else if (this.props.formName == 'DeleteArtifactProduction') {
            Comp = DeleteArtifactProduction;
        }
        else if (this.props.formName == 'UpdateArtifactProduction') {
            Comp = UpdateArtifactProduction;
        }
        else if (this.props.formName == 'CreateTFolder') {
            Comp = CreateTFolder;
        }
        else if (this.props.formName == 'DeleteTFolder') {
            Comp = DeleteTFolder;
        }
        else if (this.props.formName == 'UpdateTFolder') {
            Comp = UpdateTFolder;
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
