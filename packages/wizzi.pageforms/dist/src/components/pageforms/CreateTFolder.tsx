/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.pageforms\.wizzi\src\components\pageforms\CreateTFolder.tsx.ittf
    utc time: Mon, 28 Jun 2021 20:17:07 GMT
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
import FormButton from './widgets/FormButton';

export interface CreateTFolderProps {
    data: any;
}

type CreateTFolderState = { 
    tfolder_name: string;
    tfolder_description: string;
    tfolder_schema: string;
    tfolder_type: string;
    tfolder_add_context: boolean;
    tfolder_add_tfolder: boolean;
};

interface RootStyleProps {
}
const StyledRoot = styled.div<RootStyleProps>`
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    
`

export class CreateTFolder extends Component<CreateTFolderProps, CreateTFolderState> {
    constructor(props: CreateTFolderProps) {
        super(props);
        this.state = {
            tfolder_name: "", 
            tfolder_description: "", 
            tfolder_schema: "", 
            tfolder_type: "", 
            tfolder_add_context: false, 
            tfolder_add_tfolder: false
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
        console.log('CreatePacki.render', 'state', this.state);
        return  (
            <FormContainer
            >
                <FormTitle
                 title='Create a new tfolder' subtitle='A tfolder contains ittf fragments of a single wizzi schema or of many wizzi schemas.' />
                <HR
                 />
                <FormGroup 
                    label='TFolder name'
                    name='tfolder_name'
                    id='tfolder_name'
                    required={true}
                    value={this.state.tfolder_name}
                    onChange={this.handleInputChange}
                 />
                <HR
                 />
                <FormGroup 
                    label='Description'
                    name='tfolder_description'
                    id='tfolder_description'
                    required={true}
                    value={this.state.tfolder_description}
                    onChange={this.handleInputChange}
                 />
                <HR
                 />
                <FormRadioBox 
                    label='Single wizzi schema'
                    name='tfolder_type'
                    id='tfolder_type_single_artifact'
                    checked={this.state.tfolder_type == 'single_artifact'}
                    value='single_artifact'
                    onChange={this.handleInputChange}
                 />
                <FormRadioBox 
                    label='Many wizzi schemas'
                    name='tfolder_type'
                    id='tfolder_type_project_artifacts'
                    checked={this.state.tfolder_type == 'project_artifacts'}
                    value='project_artifacts'
                    onChange={this.handleInputChange}
                 />
                <HR
                 />
                {
                    this.state.tfolder_type == 'single_artifact'
                     &&  (
                        <React.Fragment
                        >
                            <FormGroup 
                                label='Wizzi schema'
                                name='tfolder_schema'
                                id='tfolder_schema'
                                required={true}
                                value={this.state.tfolder_schema}
                                onChange={this.handleInputChange}
                             />
                            <HR
                             />
                        </React.Fragment>
                        )
                    
                }
                <FormCheckBox 
                    label='Add a context packi'
                    name='tfolder_add_context'
                    id='tfolder_add_context'
                    value={this.state.tfolder_add_context}
                    onChange={this.handleInputChange}
                 />
                <HR
                 />
                <FormCheckBox 
                    label='Add a tfolder dependency'
                    name='tfolder_add_tfolder'
                    id='tfolder_add_tfolder'
                    value={this.state.tfolder_add_tfolder}
                    onChange={this.handleInputChange}
                 />
                <HR
                 />
                <FormButton
                 label='Create tfolder' id='btn_create_tfolder' />
            </FormContainer>
            )
        ;
    }
}
export default CreateTFolder;
