/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.editor\.wizzi\src\components\Packi\PackiManagerContainer.tsx.ittf
    utc time: Sun, 27 Jun 2021 11:22:09 GMT
*/
import * as React from 'react';
import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {StoreState} from '../../store';
import {LoggedUser} from '../../features/app';
import {fileConversions} from '../../features/file';
import {Packi, PackiFiles, packiActions} from '../../features/packi';
import {PreferencesContextType, withPreferences} from '../../features/preferences';
import {GitRepositoryMeta} from '../../features/github';
import PackiManager from './PackiManager';
import Spinner from '../widgets/Spinner';
interface StateProps {
    loggedUser?: LoggedUser;
    packiNames?: string[];
    currentPacki?: Packi;
    packiTemplateNames?: string[];
    ownedGitRepositories?: GitRepositoryMeta[];
}
interface DispatchProps {
    dispatchFetchPackiList: () => void;
    dispatchSelectPacki: (packiId: string) => void;
    dispatchCreatePacki: (packiId: string, packiKind: string) => void;
    dispatchDeletePacki: (packiId: string) => void;
    dispatchFetchPackiTemplateList: () => void;
    dispatchUploadPackiTemplate: (uid: string, templateId: string, files: PackiFiles) => void;
}
const mapStateToProps = (state: StoreState):  StateProps => 

    ({
        loggedUser: state.app.loggedUser, 
        packiNames: state.packi.packiNames, 
        currentPacki: state.packi.currentPacki, 
        packiTemplateNames: state.packi.packiTemplateNames, 
        ownedGitRepositories: state.packi.ownedGitRepositories
     })
;
const mapDispatchToProps = (dispatch: Dispatch):  DispatchProps => 

    ({
        dispatchFetchPackiList: () => 
        
            dispatch(packiActions.fetchPackiListRequest())
        , 
        dispatchSelectPacki: (packiId: string) => 
        
            dispatch(packiActions.selectPackiRequest({
                id: packiId
             }))
        , 
        dispatchCreatePacki: (packiId: string, packiKind: string) => 
        
            dispatch(packiActions.createPackiRequest({
                id: packiId, 
                options: {
                    data: packiKind
                 }
             }))
        , 
        dispatchDeletePacki: (packiId: string) => 
        
            dispatch(packiActions.deletePackiRequest({
                id: packiId
             }))
        , 
        dispatchFetchPackiTemplateList: () => 
        
            dispatch(packiActions.fetchPackiTemplateListRequest())
        , 
        dispatchUploadPackiTemplate: (uid: string, templateId: string, files: PackiFiles) => 
        
            dispatch(packiActions.uploadPackiTemplateRequest({
                uid, 
                templateId, 
                files
             }))
        
     })
;
type PackiManagerContainerProps = PreferencesContextType & PropsFromRedux & { 
    onClose: () => void;
};
type State = StateProps & { 
};
class PackiManagerContainerComp extends React.Component<PackiManagerContainerProps, State> {
    componentDidMount() {
    }
    _handleSelectPacki = async (packiId: string) => {
    
        this.props.dispatchSelectPacki(packiId);
        this.props.onClose();
    }
    ;
    _handleCreatePacki = async (packiId: string, packiKind: string) => {
    
        this.props.dispatchCreatePacki(packiId, packiKind);
        this.props.onClose();
    }
    ;
    _handleDeletePacki = async (packiId: string) => 
    
        this.props.dispatchDeletePacki(packiId);
    
    ;
    _handleUploadPackiTemplate = async (templateId: string, virtualFiles: boolean) => {
    
        if (this.props.loggedUser && this.props.currentPacki) {
            const files: PackiFiles = virtualFiles ? this.props.currentPacki.files : fileConversions.packiFilterIttf(this.props.currentPacki.files);
            console.log('PackiManager._handleCommitGitRepository.virtualFiles', Object.keys(this.props.currentPacki.files), virtualFiles, Object.keys(files));
            this.props.dispatchUploadPackiTemplate(this.props.loggedUser.uid, templateId, files);
            this.props.onClose();
        }
    }
    ;
    render() {
        const {
            currentPacki, 
            packiNames, 
            packiTemplateNames, 
            ownedGitRepositories
         } = this.props;
        console.log('PackiManagerContainer.render.props', this.props);
        if (packiNames && packiTemplateNames) {
            return  (
                <PackiManager 
                    currentPacki={currentPacki}
                    packiNames={packiNames || []}
                    packiTemplateNames={packiTemplateNames || []}
                    onSelectPacki={this._handleSelectPacki}
                    onCreatePacki={this._handleCreatePacki}
                    onDeletePacki={this._handleDeletePacki}
                    onUploadPackiTemplate={this._handleUploadPackiTemplate}
                 />
                )
            ;
        }
        else {
            return  (
                <Spinner
                 />
                )
            ;
        }
    }
}
const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
const PackiManagerContainer = withPreferences(connector(PackiManagerContainerComp));
export default PackiManagerContainer;
