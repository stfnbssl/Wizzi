/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.pageforms\.wizzi\src\components\pageforms\CreateTFolder.tsx.ittf
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

export interface CreateTFolderProps {
    data: any;
}

type CreateTFolderState = { 
    tfolder_name: string;
    tfolder_description: string;
    tfolder_schema: string;
    tfolder_type: string;
    tfolder_add_context: boolean;
    tfolder_contexts: any[];
    tfolder_add_tfolder: boolean;
    tfolder_dependencies: any[];
    tfolder_upload_files: any[];
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
            tfolder_contexts: [], 
            tfolder_add_tfolder: false, 
            tfolder_dependencies: [], 
            tfolder_upload_files: []
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
                tfolder_contexts: [context, ...state.tfolder_contexts]
             })
        );
    handleContextDelete = delcontext => 
        this.setState((state) => {
        
            const contexts = [];
            var i, i_items=this.state.tfolder_contexts, i_len=this.state.tfolder_contexts.length, context;
            for (i=0; i<i_len; i++) {
                context = this.state.tfolder_contexts[i];
                if (context.name !== delcontext.name) {
                    contexts.push(context)
                }
            }
            return {
                    tfolder_contexts: contexts
                 };
        }
        );
    handleTFolderAdd = tfolder => 
        this.setState((state) => 
        
            ({
                tfolder_dependencies: [tfolder, ...state.tfolder_dependencies]
             })
        );
    handleTFolderDelete = deltfolder => 
        this.setState((state) => {
        
            const tfolders = [];
            var i, i_items=this.state.tfolder_dependencies, i_len=this.state.tfolder_dependencies.length, tfolder;
            for (i=0; i<i_len; i++) {
                tfolder = this.state.tfolder_dependencies[i];
                if (tfolder.name !== deltfolder.name) {
                    tfolders.push(tfolder)
                }
            }
            return {
                    tfolder_dependencies: tfolders
                 };
        }
        );
    handleTFolderUploadChange = files => {
        console.log('CreateTFolder.handleTFolderUploadChange', files);
        const uploadfiles = [];
        var i, i_items=files, i_len=files.length, file;
        for (i=0; i<i_len; i++) {
            file = files[i];
            if (file.webkitRelativePath.endsWith('.ittf')) {
                uploadfiles.push({
                    relPath: file.webkitRelativePath, 
                    file: file
                 })
            }
        }
        this.setState({
            tfolder_upload_files: uploadfiles
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
                {
                    this.state.tfolder_type == 'single_artifact'
                     &&  (
                        <React.Fragment
                        >
                            <HR
                             />
                            <FormGroup 
                                label='Wizzi schema'
                                name='tfolder_schema'
                                id='tfolder_schema'
                                required={true}
                                value={this.state.tfolder_schema}
                                onChange={this.handleInputChange}
                             />
                        </React.Fragment>
                        )
                    
                }
                <HR
                 />
                <FormCheckBox 
                    label='Add a context packi'
                    name='tfolder_add_context'
                    id='tfolder_add_context'
                    value={this.state.tfolder_add_context}
                    onChange={this.handleInputChange}
                 />
                {
                    this.state.tfolder_add_context
                     &&  (
                        <div
                        >
                            {
                                this.state.tfolder_contexts.map((context, ndx) => {
                                
                                    console.log('Createtfolder.context', context);
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
                    name='tfolder_add_tfolder'
                    id='tfolder_add_tfolder'
                    value={this.state.tfolder_add_tfolder}
                    onChange={this.handleInputChange}
                 />
                {
                    this.state.tfolder_add_tfolder
                     &&  (
                        <div
                        >
                            {
                                this.state.tfolder_dependencies.map((tfolder, ndx) => {
                                
                                    console.log('Createtfolder.tfolder', tfolder);
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
                <FormFile 
                    label='Upload fragments'
                    name='tfolder_upload'
                    id='tfolder_upload'
                    value={this.state.tfolder_upload_files}
                    onChange={this.handleTFolderUploadChange}
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
