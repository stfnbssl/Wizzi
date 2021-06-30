/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.pageforms\.wizzi\src\components\pageforms\CreateArtifactProduction.tsx.ittf
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

export interface CreateArtifactProductionProps {
    data: any;
}

type CreateArtifactProductionState = { 
    ap_name: string;
    ap_description: string;
    ap_schema: string;
    ap_main_ittf: string;
    ap_type: string;
    ap_add_context: boolean;
    ap_contexts: any[];
    ap_add_tfolder: boolean;
    ap_dependencies: any[];
    ap_upload_files: any[];
};

interface RootStyleProps {
}
const StyledRoot = styled.div<RootStyleProps>`
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    
`

export class CreateArtifactProduction extends Component<CreateArtifactProductionProps, CreateArtifactProductionState> {
    constructor(props: CreateArtifactProductionProps) {
        super(props);
        this.state = {
            ap_name: "", 
            ap_description: "", 
            ap_schema: "", 
            ap_main_ittf: "", 
            ap_type: "", 
            ap_add_context: false, 
            ap_contexts: [], 
            ap_add_tfolder: false, 
            ap_dependencies: [], 
            ap_upload_files: []
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
    handleContextAdd = context => 
        this.setState((state) => 
        
            ({
                ap_contexts: [context, ...state.ap_contexts]
             })
        );
    handleContextDelete = delcontext => 
        this.setState((state) => {
        
            const contexts = [];
            var i, i_items=this.state.ap_contexts, i_len=this.state.ap_contexts.length, context;
            for (i=0; i<i_len; i++) {
                context = this.state.ap_contexts[i];
                if (context.name !== delcontext.name) {
                    contexts.push(context)
                }
            }
            return {
                    ap_contexts: contexts
                 };
        }
        );
    handleTFolderAdd = tfolder => 
        this.setState((state) => 
        
            ({
                ap_dependencies: [tfolder, ...state.ap_dependencies]
             })
        );
    handleTFolderDelete = deltfolder => 
        this.setState((state) => {
        
            const tfolders = [];
            var i, i_items=this.state.ap_dependencies, i_len=this.state.ap_dependencies.length, tfolder;
            for (i=0; i<i_len; i++) {
                tfolder = this.state.ap_dependencies[i];
                if (tfolder.name !== deltfolder.name) {
                    tfolders.push(tfolder)
                }
            }
            return {
                    ap_dependencies: tfolders
                 };
        }
        );
    
    render() {
        console.log('CreateArtifactProduction.render', 'state', this.state);
        return  (
            <FormContainer
            >
                <FormTitle
                 title='Create a new artifact production' subtitle='An artifact production contains the ittf documents for a single software artifact.' />
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
                <HR
                 />
                <FormCheckBox 
                    label='Add a context packi'
                    name='ap_add_context'
                    id='ap_add_context'
                    value={this.state.ap_add_context}
                    onChange={this.handleInputChange}
                 />
                {
                    this.state.ap_add_context
                     &&  (
                        <div
                        >
                            {
                                this.state.ap_contexts.map((context, ndx) => {
                                
                                    console.log('Createap.context', context);
                                    return  (
                                        <div
                                         key={ndx}>
                                            <FormRow
                                             type='delete' value={context} onDelete={this.handleContextDelete} />
                                        </div>
                                        )
                                    ;
                                }
                                )
                            }
                            <FormRow
                             type='add' onAdd={this.handleContextAdd} />
                        </div>
                        )
                    
                }
                <HR
                 />
                <FormCheckBox 
                    label='Add a tfolder dependency'
                    name='ap_add_tfolder'
                    id='ap_add_tfolder'
                    value={this.state.ap_add_tfolder}
                    onChange={this.handleInputChange}
                 />
                {
                    this.state.ap_add_tfolder
                     &&  (
                        <div
                        >
                            {
                                this.state.ap_dependencies.map((tfolder, ndx) => {
                                
                                    console.log('Createap.tfolder', tfolder);
                                    return  (
                                        <div
                                         key={ndx}>
                                            <FormRow
                                             type='delete' value={tfolder} onDelete={this.handleTFolderDelete} />
                                        </div>
                                        )
                                    ;
                                }
                                )
                            }
                            <FormRow
                             type='add' onAdd={this.handleTFolderAdd} />
                        </div>
                        )
                    
                }
                <HR
                 />
                <FormButton
                 label='Create artifact production' id='btn_create_ap' />
            </FormContainer>
            )
        ;
    }
}
export default CreateArtifactProduction;
