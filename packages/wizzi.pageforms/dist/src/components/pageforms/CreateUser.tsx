/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.pageforms\.wizzi\src\components\pageforms\CreateUser.tsx.ittf
    utc time: Wed, 30 Jun 2021 15:29:13 GMT
*/
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes, css} from 'styled-components';
import HR from './widgets/HR';
import FormContainer from './widgets/FormContainer';
import FormTitle from './widgets/FormTitle';
import FormGroup from './widgets/FormGroup';
import FormCheckBox from './widgets/FormCheckBox';
import FormRadioBox from './widgets/FormRadioBox';
import FormRow from './widgets/FormRow';
import FormFile from './widgets/FormFile';
import FormButton from './widgets/FormButton';
import FormAvatar from './widgets/FormAvatar';
import FormStatic from './widgets/FormStatic';

export interface CreateUserProps {
    data: any;
}

type CreateUserState = { 
    u_username: string;
};

interface RootStyleProps {
}
const StyledRoot = styled.div<RootStyleProps>`
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    
`

export class CreateUser extends Component<CreateUserProps, CreateUserState> {
    constructor(props: CreateUserProps) {
        super(props);
        this.state = {
            u_username: ""
         };
    }
    
    componentDidMount() {
    }
    handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handleInputChange', ev.target.type, ev.target.checked, ev.target.value);
        this.setState({
            [ev.target.name]: (ev.target.type == 'checkbox' ? ev.target.checked : ev.target.value)
         })
    };
    
    render() {
        console.log('CreateUser.render', 'state', this.state);
        return  (
            <FormContainer
            >
                <FormTitle
                 title='Create a new user' subtitle={'Hello ' + this.props.data.name + '.'} subtitle2={'It seems that you are not a registered user yet. Choose your unique Wizzi user name to sign up.'} />
                <HR
                 />
                <FormAvatar
                 avatar_url={this.props.data.avatar_url} />
                <HR
                 />
                <FormStatic 
                    label='Email'
                    name='u_email'
                    id='u_email'
                    value={this.props.data.email}
                 />
                <HR
                 />
                <FormGroup 
                    label='User name'
                    name='u_username'
                    id='u_username'
                    required={true}
                    value={this.state.u_username}
                    onChange={this.handleInputChange}
                 />
                <HR
                 />
                <FormButton
                 label='Sign up' id='btn_create_u' />
            </FormContainer>
            )
        ;
    }
}
export default CreateUser;
