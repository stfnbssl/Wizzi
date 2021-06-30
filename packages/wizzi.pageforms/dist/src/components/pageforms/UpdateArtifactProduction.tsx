/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.pageforms\.wizzi\src\components\pageforms\UpdateArtifactProduction.tsx.ittf
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

export interface UpdateArtifactProductionProps {
    data: any;
}

type UpdateArtifactProductionState = { 
    ap_name: string;
    ap_description: string;
    ap_schema: string;
    ap_main_ittf: string;
    ap_add_context: boolean;
    ap_contexts: any[];
    ap_add_tfolder: boolean;
    ap_dependencies: any[];
};

interface RootStyleProps {
}
const StyledRoot = styled.div<RootStyleProps>`
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    
`

export class UpdateArtifactProduction extends Component<UpdateArtifactProductionProps, UpdateArtifactProductionState> {
    constructor(props: UpdateArtifactProductionProps) {
        super(props);
        this.state = {
            ap_name: "", 
            ap_description: "", 
            ap_schema: "", 
            ap_main_ittf: "", 
            ap_add_context: false, 
            ap_contexts: [], 
            ap_add_tfolder: false, 
            ap_dependencies: []
         };
    }
    
    handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handleInputChange', ev.target.type, ev.target.checked, ev.target.value);
        this.setState({
            [ev.target.name]: (ev.target.type == 'checkbox' ? ev.target.checked : ev.target.value)
         })
    };
    
    componentDidMount() {
        console.log('UpdateArtifactProduction.componentDidMount.props', this.props);
        const {
            name, 
            description, 
            wizziSchema, 
            mainIttf, 
            contexts, 
            dependencies
         } = this.props.data;
        const ap_contexts = contexts || [];
        const ap_dependencies = dependencies || [];
        this.setState({
            ap_name: name, 
            ap_description: description, 
            ap_wizziSchema: wizziSchema, 
            ap_mainIttf: mainIttf, 
            ap_add_context: ap_contexts.length > 0, 
            ap_contexts, 
            ap_add_tfolder: ap_dependencies.length > 0, 
            ap_dependencies
         })
    }
    
    render() {
        console.log('UpdatePacki.render', 'state', this.state);
        return  (
            <FormContainer
            >
                <FormTitle
                 title='Update artifact production' subtitle='An artifact production contains the ittf documents for a single software artifact.' />
                <HR
                 />
                <FormGroup 
                    label='Artifact name'
                    name='ap_name'
                    id='ap_name'
                    required={true}
                    value={this.state.ap_name}
                    onChange={this.handleInputChange}
                 />
                <HR
                 />
                <FormGroup 
                    label='Description'
                    name='ap_description'
                    id='ap_description'
                    required={true}
                    value={this.state.ap_description}
                    onChange={this.handleInputChange}
                 />
                <HR
                 />
                <FormGroup 
                    label='Wizzi schema'
                    name='ap_schema'
                    id='ap_schema'
                    required={true}
                    value={this.state.ap_schema}
                    onChange={this.handleInputChange}
                 />
                <HR
                 />
                <FormGroup 
                    label='Main ittf'
                    name='ap_main_ittf'
                    id='ap_main_ittf'
                    required={true}
                    value={this.state.ap_main_ittf}
                    onChange={this.handleInputChange}
                 />
                <HR
                 />
                <FormButton
                 label='Update artifact production' id='btn_update_ap' />
            </FormContainer>
            )
        ;
    }
}
export default UpdateArtifactProduction;
