/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.pageforms\.wizzi\src\components\pageforms\UpdateUser.tsx.ittf
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

export interface UpdateUserProps {
    data: any;
}

type UpdateUserState = { 
    u_web_url: string;
};

interface RootStyleProps {
}
const StyledRoot = styled.div<RootStyleProps>`
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    
`

export class UpdateUser extends Component<UpdateUserProps, UpdateUserState> {
    constructor(props: UpdateUserProps) {
        super(props);
        this.state = {
            u_web_url: ""
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
        console.log('UpdateUser.render', 'state', this.state);
        return  (
            <FormContainer
            >
                <FormTitle
                 title='Update user profile' subtitle='' />
                <HR
                 />
                <FormGroup 
                    label='User name'
                    name='u_userid'
                    id='u_userid'
                    disabled={true}
                 />
                <HR
                 />
                <FormButton
                 label='Update user profile' id='btn_update_u' />
            </FormContainer>
            )
        ;
    }
}
export default UpdateUser;
