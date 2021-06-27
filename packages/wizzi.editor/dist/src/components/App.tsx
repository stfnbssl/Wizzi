/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.editor\.wizzi\src\components\App.tsx.ittf
    utc time: Sun, 27 Jun 2021 11:22:09 GMT
*/
import * as React from 'react';
// Redux
import {connect, ConnectedProps} from 'react-redux';
// Styles
import {StyleSheet, css} from 'aphrodite';
// Features
import {getFilesFromQuery, fileConversions} from '../features/file';
import {withAuth, AuthProps} from '../features/auth';
import {withPreferences, PreferencesContextType} from '../features/preferences';
import {Annotation} from '../features/annotations';
import {SavedPacki, QueryParams, SaveStatus, SaveHistory, SaveOptions, SDKVersion, PackiState, PackiFile, PackiFiles, PackiDependencies, PackiDependency, PackiDefaults} from '../features/packi';
import {PackiSession, PackiListenerSubscription} from '../features/packi';
// Utils
import nullthrows from 'nullthrows';
import debounce from 'lodash/debounce';
import {isMobile} from '../utils/detectPlatform';
// Widgets
import {AnimatedLogo} from './widgets/AnimatedLogo';
import {CollapsibleObject} from './widgets/CollapsibleObject';
// Components
import AppShell from './shell/AppShell';
import AppDetails from './AppDetails';
import {EditorViewProps} from './EditorView/EditorViewProps';
import LazyLoad from './widgets/LazyLoad';
import {Dispatch} from 'redux';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {LoggedUser, appActions} from '../features/app';
import {Packi, packiActions} from '../features/packi';
import {GitRepositoryMeta} from '../features/github';
import {GeneratedArtifact, JobError, wizziActions} from '../features/wizzi';
import {PreferencesType} from '../features/preferences';
import {StoreState} from '../store';
import {getEventServiceInstance} from '../services';
import {packiToEntryArray, entryArrayToPacki, mixPreviousAndGeneratedPackiFilesToEntryArray, entryArrayDiff} from '../features/file/convertFileStructure';
import {FileSystemEntry, TextFileEntry, AssetFileEntry} from '../features/file';
import updateEntry from './FileList/actions/updateEntry';
// Defaults
import {config} from '../features/config';
const {
    DEFAULT_PACKI_NAME, 
    DEFAULT_PACKI_DESCRIPTION, 
    DEFAULT_PACKI_CODE, 
    DEFAULT_DEPENDENCIES, 
    versions, 
    DEFAULT_SDK_VERSION
 } = config;


interface PackiStateProps {
    loggedUser?: LoggedUser;
    packiNames?: string[];
    currentPacki?: Packi;
    packiTemplateNames?: string[];
    ownedGitRepositories?: GitRepositoryMeta[];
    generatedArtifact?: GeneratedArtifact;
    jobGeneratedArtifacts?: PackiFiles;
    jobError?: JobError;
}

interface PackiDispatchProps {
    dispatchLoggedOn: (user: LoggedUser) => void;
    dispatchLoggedOff: () => void;
    dispatchInitPacki: (preferences: PreferencesType) => void;
    dispatchSelectPacki: (packiId: string) => void;
    dispatchSavePacki: (packiId: string, filesToSave: PackiFiles, packiEntryFiles: PackiFiles) => void;
    dispatchCreatePacki: (packiId: string, packiKind: string) => void;
    dispatchDeletePacki: (packiId: string) => void;
    dispatchGenerateArtifact: (fileName: string, files: PackiFiles) => void;
    dispatchExecuteJob: (files: PackiFiles) => void;
    dispatchSetTimedService: (name: string, onOff: boolean, payload?: any, frequence?: number) => void;
}

const packiMapStateToProps = (state: StoreState):  PackiStateProps => 

    ({
        loggedUser: state.app.loggedUser, 
        currentPacki: state.packi.currentPacki, 
        packiNames: state.packi.packiNames, 
        packiTemplateNames: state.packi.packiTemplateNames, 
        ownedGitRepositories: state.packi.ownedGitRepositories, 
        generatedArtifact: state.wizzi.generatedArtifact, 
        jobGeneratedArtifacts: state.wizzi.jobGeneratedArtifacts, 
        jobError: state.wizzi.jobError
     })
;
const packiMapDispatchToProps = (dispatch: Dispatch):  PackiDispatchProps => 

    ({
        dispatchLoggedOn: (user: LoggedUser) => 
        
            dispatch(appActions.updateLoggedUser(user))
        , 
        dispatchLoggedOff: () => 
        
            dispatch(appActions.updateLoggedUser(undefined))
        , 
        dispatchInitPacki: (preferences: PreferencesType) => 
        
            dispatch(packiActions.initPackiRequest({
                preferences
             }))
        , 
        dispatchSelectPacki: (packiId: string) => 
        
            dispatch(packiActions.selectPackiRequest({
                id: packiId
             }))
        , 
        dispatchSavePacki: (packiId: string, filesToSave: PackiFiles, packiEntryFiles: PackiFiles) => 
        
            dispatch(packiActions.savePackiRequest({
                id: packiId, 
                filesToSave, 
                packiEntryFiles
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
        dispatchGenerateArtifact: (filePath: string, files: PackiFiles) => {
        
            if (filePath.endsWith('.ittf') && !filePath.endsWith('wfjob.ittf')) {
                dispatch(wizziActions.generateArtifactRequest({
                    filePath, 
                    files
                 }))
            }
        }
        , 
        dispatchExecuteJob: (files: PackiFiles) => 
        
            dispatch(wizziActions.executeJobRequest({
                files
             }))
        , 
        dispatchSetTimedService: (name: string, onOff: boolean, payload?: any, frequence?: number) => 
        
            dispatch(wizziActions.setTimedService({
                serviceName: name, 
                onOff, 
                payload, 
                frequence
             }))
        
     })
;
type Params = { 
    id?: string;
    username?: string;
    projectName?: string;
    repoName?: string;
};
type AppProps = AuthProps & PreferencesContextType & PropsFromRedux & { 
    Packi?: SavedPacki;
    history: { 
        push: (props: { 
            pathname: string;
            search: string;
        }) => void;
    };
    match: { 
        params: Params;
    };
    location: { 
        search: string;
    };
    query: QueryParams;
    userAgent: string;
    files: PackiFiles;
    defaults: PackiDefaults;
};
type State = PackiStateProps & { 
    session: PackiState;
    selectedFile: string;
    sendCodeOnChangeEnabled: boolean;
    autosaveEnabled: boolean;
    isSavedOnce: boolean;
    saveHistory: SaveHistory;
    saveStatus: SaveStatus;
    isPreview: boolean;
    isDownloading: boolean;
    devicePreviewShown: boolean;
    webPreviewURL: string;
    isLocalWebPreview: boolean;
    verbose: boolean;
    annotations: Annotation[];
    packierURL: string;
    packiStoreId?: string;
    packiSessionReady: boolean;
    loggedUser?: LoggedUser;
    packiNames?: string[];
    currentPacki?: Packi;
    packiTemplateNames?: string[];
    ownedGitRepositories?: GitRepositoryMeta[];
    generatedArtifact?: GeneratedArtifact;
    jobGeneratedArtifacts?: PackiFiles;
    jobError?: JobError;
    params: Params;
    fileEntries: FileSystemEntry[];
    isWizziJobWaiting: boolean;
    lastJobfileEntries: FileSystemEntry[];
};
class AppMain extends React.Component<AppProps, State> {
    constructor(props: Props) {
        super(props);
        let name = DEFAULT_PACKI_NAME;
        let description = DEFAULT_PACKI_DESCRIPTION;
        let sdkVersion: SDKVersion = DEFAULT_SDK_VERSION;
        let files = props.files;
        let dependencies = props.files === DEFAULT_PACKI_CODE && !props.packi?.packiFiles ? DEFAULT_DEPENDENCIES : {};
        let id = undefined;
        if (props.packi) {
            id = props.packi._id ?? id;
            files = props.packi.packiFiles ?? code;
            dependencies = props.packi.dependencies ?? dependencies;
            if (props.packi.manifest) {
                const {
                    manifest
                 } = props.packi;
                name = manifest.name;
                description = manifest.description;
                sdkVersion = manifest.sdkVersion ?? sdkVersion;
            }
            else {
                name = props.packi.name;
            }
        }
        const initialSdkVersion = sdkVersion;
        let wasUpgraded = false;
        if (!versions.hasOwnProperty(sdkVersion)) {
            sdkVersion = DEFAULT_SDK_VERSION;
            wasUpgraded = true;
        }
        const verbose = props.preferences.verbose;
        const sendCodeOnChangeEnabled = true;
        const sessionSecret = null;
        const packierURL = nullthrows(process.env.IMPORT_SERVER_URL);
        const isLocalWebPreview = false;
        this._PackiSession = new PackiSession({
            disabled: true, 
            name, 
            description, 
            files, 
            dependencies, 
            sdkVersion, 
            verbose, 
            codeChangesDelay: sendCodeOnChangeEnabled ? 1000 : -1, 
            id, 
            user: sessionSecret ? {
                    sessionSecret
                 } : undefined, 
            apiURL: nullthrows(process.env.API_SERVER_URL), 
            packierURL, 
            host: // Use staging server in development, otherwise Wizzi Go and appetize
            // can't access the runtime. Replace with ngrok url to test locally.
            process.env.NODE_ENV === 'development' ? 'staging.packi.expo.io' : new URL(nullthrows(process.env.SERVER_URL)).host, 
            webPreviewRef: typeof window !== 'undefined' ? this._previewRef : undefined, 
            
            // Serve local web-player through `/web-player` end-point to prevent CORS issues
            webPlayerURL: typeof window !== 'undefined' && isLocalWebPreview ? `${window.location.origin}/web-player/%%SDK_VERSION%%` : nullthrows(process.env.PACKI_WEBPLAYER_URL) + '/v2/%%SDK_VERSION%%'
         });
        ;
        const devicePreviewShown = props.preferences.devicePreviewShown;
        // TODO preserve selected from history
        const selectedFile = Object.keys(files).length ? Object.keys(files)[0] : '';
        this.state = {
            session: this._PackiSession.getState(), 
            selectedFile, 
            sendCodeOnChangeEnabled, 
            autosaveEnabled: true, 
            isSavedOnce: false, 
            saveHistory: props.packi?.history ?? [], 
            saveStatus: props.packi?.isDraft ? 'saved-draft' : id ? 'published' : 'unsaved', 
            isLocalWebPreview, 
            wasUpgraded, 
            initialSdkVersion, 
            isDownloading: false, 
            devicePreviewShown, 
            verbose, 
            annotations: [], 
            packierURL, 
            webPreviewURL: '', 
            packiStoreId: undefined, 
            packiSessionReady: false, 
            fileEntries: [], 
            generatedArtifact: undefined, 
            jobGeneratedArtifacts: undefined, 
            jobError: undefined, 
            isWizziJobWaiting: false, 
            lastJobfileEntries: []
         };
    }
    _previewRef = React.createRef<Window>();
    private edited: boolean = false;
    _PackiSession: PackiSession;
    _PackiStateListener?: PackiListenerSubscription;
    _isFocused: boolean = false;
    _focusTimer: number | undefined;
    
    _initializePackiSession() {
        async () => 
        
            // lots of inits
            this.setState({
                packiSessionReady: true
             })
        
    }
    
    _generateArtifactNotDebounced = (files: { 
        [path: string]: PackiFile | null;
    }) => {
    
        console.log('_generateArtifactNotDebounced', 'state.selectedFile', this.state.selectedFile);
        console.log('_generateArtifactNotDebounced', 'Object.keys(files)', Object.keys(files));
        console.log('_generateArtifactNotDebounced', 'state.session.files', this.state.session.files);
        if (Object.keys(files).length) {
            const filePath = Object.keys(files)[0];
            if (filePath.endsWith('.ittf')) {
                console.log('_generateArtifactNotDebounced', 'filePath', filePath);
                // TODO send only fileEntries of the same schema of focusedEntry + json schema
                this.props.dispatchGenerateArtifact(filePath, fileConversions.packiFilterIttf(this.state.session.files))
            }
        }
    }
    ;
    _generateArtifact = debounce(this._generateArtifactNotDebounced, 1000);
    
    _executeJobNotDebounced = () => {
    
        const jobEntries = this.state.fileEntries.filter(e => 
        
            e.item.path.endsWith('.wfjob.ittf')
        );
        if (jobEntries.length > 0) {
            this.setState({
                lastJobfileEntries: this.state.fileEntries, 
                isWizziJobWaiting: false
             })
            this.props.dispatchExecuteJob(// 20/4 entryArrayToPacki(this.state.fileEntries.filter(e => e.item.path.endsWith('.ittf')))
            entryArrayToPacki(this.state.fileEntries))
        }
    }
    ;
    _executeJob = debounce(this._executeJobNotDebounced, 5000);
    
    _saveCodeNotDebounced = () => 
    
        this.props.dispatchSavePacki(this.state.packiStoreId as string, entryArrayToPacki(this.state.fileEntries.filter(e => 
        
            !e.item.virtual && !e.item.generated
        )), entryArrayToPacki(this.state.fileEntries))
    ;
    _saveCode = debounce(this._saveCodeNotDebounced, 1000);
    static getDerivedStateFromProps(_props: Props, state: State) {
        return null;
    }
    
    componentDidMount() {
        this._PackiStateListener = this._PackiSession.addStateListener(this._handleSessionStateChange);
        this._PackiSession.setDisabled(false);
        this._isFocused = document.hasFocus();
        this._focusTimer = window.setInterval(this._handleFocusChangeInterval, 500);
        this.generateSelectedFile();
    }
    
    componentWillUnmount() {
        this._PackiStateListener?.();
        this._PackiSession.setDisabled(true);
        this._PackiSession.setOnline(false);
        clearInterval(this._focusTimer);
        this._focusTimer = undefined;
    }
    
    componentDidUpdate(prevProps: Props, prevState: State) {
        if (this.props.viewer !== prevProps.viewer) {
            const sessionSecret = this.props.getSessionSecret();
            if (this.state.session.user?.sessionSecret !== sessionSecret) {
                this._PackiSession.setUser(sessionSecret ? {
                        sessionSecret
                     } : undefined)
            }
        }
    }
    generateSelectedFile() {
        const path = this.state.selectedFile;
        if (path && path.length > 0) {
            if (this.props.preferences.autoGenSingleDoc) {
                
                // TODO filter *.ittf of type == 'CODE'
                if (path.endsWith('.ittf') && ('/'+path).indexOf('/t/') < 0) {
                    this.props.dispatchGenerateArtifact(path, this.state.session.files)
                }
            }
        }
    }
    _handleFocusChangeInterval = () => {
        const isFocused = document.hasFocus();
        if (this._isFocused !== isFocused) {
            this._isFocused = isFocused;
            if (isFocused) {
                this._PackiSession.setFocus();
            }
        }
    };
    _handleUnload = async () => {
    
        if (navigator.sendBeacon && this.state.session.sendBeaconCloseRequest) {
            const {
                url, 
                data
             } = this.state.session.sendBeaconCloseRequest;
            navigator.sendBeacon(url, data);
        }
    }
    ;
    _handleToggleSendCode = () => 
        this.setState(({
            sendCodeOnChangeEnabled
         }) => {
        
            this._PackiSession.setCodeChangesDelay(sendCodeOnChangeEnabled ? -1 : 1000)
            return {
                    sendCodeOnChangeEnabled: !sendCodeOnChangeEnabled
                 };
        }
        );
    _handleSendCode = () => 
        this._PackiSession.sendCodeChanges();
    _handleSessionStateChange = (state: PackiState, prevState: PackiState) => 
        // console.log('Session state change: ', diff(prevState, state), state); // deep-object-diff
        this.setState((st) => {
        
            let annotations: Annotation[] | undefined;
            
            // Set save-status to changed if needed
            const saveStatus: SaveStatus = state.unsaved && (st.saveStatus === 'saved-draft' || st.saveStatus === 'published' || st.saveStatus === 'unsaved') ? this.edited ? 'edited' : 'unsaved' : st.saveStatus;
            console.log('App._handleSessionStateChange', 'saveStatus', saveStatus);
            
            // Update session state
            return {
                    session: state, 
                    saveStatus, 
                    annotations: annotations ?? st.annotations
                 };
        }
        , () => {
        
            console.log('App._handleSessionStateChange', 'calling _saveDraftIfNeeded');
            this._saveDraftIfNeeded(true);
        }
        );
    
    _handleSubmitMetadata = (details: { 
        name: string;
        description: string;
    }) => {
        this.edited = true;
        this._PackiSession.setName(details.name);
        this._PackiSession.setDescription(details.description);
    };
    
    _handleChangeSDKVersion = (sdkVersion: SDKVersion, isLocalWebPreview?: boolean) => {
        this.edited = true;
        this._packi.setSDKVersion(sdkVersion);
        if (this.state.isLocalWebPreview !== !!isLocalWebPreview) {
            this.setState({
                isLocalWebPreview: !!isLocalWebPreview
             })
        }
    };
    
    _handleDownloadAsync = async () => {
    
        this.setState({
            isDownloading: true
         })
        
        // Make sure file is saved before downloading
        const {
            saveStatus
         } = this.state;
        if (saveStatus !== 'published') {
            await this._saveAsync({
                    ignoreUser: true, 
                    excludeFromHistory: true
                 });
        }
        let once = true;
        this.setState((state) => {
        
            const {
                id
             } = state.session;
            if (!id) {
                
                // this shouldn't happen
                return {
                        saveStatus, 
                        isDownloading: false
                     };
            }
            if (once) {
                once = false;
                const url = `${process.env.API_SERVER_URL}/--/api/v2/packi/download/${id}`;
                
                // Simulate link click to download file
                const element = document.createElement('a');
                if (element && document.body) {
                    document.body.appendChild(element);
                    element.setAttribute('href', url);
                    element.setAttribute('download', 'packi.zip');
                    element.style.display = '';
                    element.click();
                    document.body.removeChild(element);
                }
            }
            return {
                    saveStatus, 
                    isDownloading: false
                 };
        }
        )
    }
    ;
    
    _saveDraftIfNeeded = (debounced?: boolean) => {
        console.log('App._saveDraftIfNeeded', 'this.state.session.user', this.state.session.user, 'this.state.autosaveEnabled', this.state.autosaveEnabled, 'this.state.saveStatus', this.state.saveStatus);
        if (true) {
            if (debounced) {
                this._saveDraftIfNeededDebounced();
            }
            else {
                this._saveAsync({
                    isDraft: true
                 })
            }
        }
    };
    _saveDraftIfNeededDebounced = debounce(this._saveDraftIfNeeded, 3000);
    
    _saveAsync = async (options: SaveOptions = {}) => {
    
        const {
            isDraft, 
            ignoreUser, 
            excludeFromHistory
         } = options;
        this.setState({
            saveStatus: isDraft || excludeFromHistory ? 'saving-draft' : 'publishing'
         })
        if (!isDraft) {
            let cntCodeFile = 0;
            let cntAssetFile = 0;
            let codeSize = 0;
            for (const path in this.state.session.files) {
                const file = this.state.session.files[path];
                if (file.type === 'CODE') {
                    cntCodeFile++;
                    codeSize += file.contents.length;
                }
                else {
                    cntAssetFile++;
                }
            }
        }
        try {
            this.edited = false;
            const saveResult = await this._PackiSession.saveAsync({
                    isDraft, 
                    ignoreUser
                 });
            this.setState((state) => 
            
                ({
                    isSavedOnce: true, 
                    saveStatus: state.session.unsaved ? this.edited ? 'edited' : 'unsaved' : isDraft ? 'saved-draft' : 'published'
                 })
            )
        } 
        catch (e) {
            this.edited = true;
            this.setState({
                saveStatus: 'edited'
             })
            throw e;
        } 
    }
    ;
    _handleOpenEditor = () => 
        this.setState({
            isPreview: false
         });
    _uploadAssetAsync = (asset: File) => {
        return this._PackiSession.uploadAssetAsync(asset);
    };
    _handleTogglePreview = () => {
        this.props.setPreferences({
            devicePreviewShown: !this.state.devicePreviewShown
         })
        this.setState((state) => 
        
            ({
                devicePreviewShown: !state.devicePreviewShown
             })
        )
    };
    _handleSelectFile = (path: string) => 
        this.setState((state) => {
        
            if (state.selectedFile !== path) {
                console.log('App._handleSelectFile', this.props.preferences.autoGenSingleDoc, path);
                if (this.props.preferences.autoGenSingleDoc) {
                    
                    // TODO filter *.ittf of type == 'CODE'
                    if (path.endsWith('.ittf') && ('/'+path).indexOf('/t/') < 0) {
                        this.props.dispatchGenerateArtifact(path, this.state.session.files)
                    }
                }
                return {
                        selectedFile: path
                     };
            }
            else {
                return null;
            }
        }
        );
    
    _updateFiles = (updateFn: (files: PackiFiles) => { 
        [path: string]: PackiFile | null;
    }) => {
        const state = this._PackiSession.getState();
        const filesUpdate = updateFn(state.files);
        console.log('App._updateFiles', filesUpdate);
        if (Object.keys(filesUpdate).length) {
            this.edited = true;
            this._PackiSession.updateFiles(filesUpdate);
            this._generateArtifact(filesUpdate);
        }
    };
    
    _updateDependencies = (updateFn: (dependencies: PackiDependencies) => { 
        [path: string]: PackiDependency | null;
    }) => {
        const state = this._packi.getState();
        const dependenciesUpdate = updateFn(state.dependencies);
        if (Object.keys(dependenciesUpdate).length) {
            this.edited = true;
            this._packi.updateDependencies(dependenciesUpdate);
        }
        return this._packi.getState().dependencies;
    };
    _handleLoggedOn = async (user: LoggedUser) => {
    
        this.props.dispatchLoggedOn(user);
        this.props.setPreferences({
            loggedUid: user.uid
         })
    }
    ;
    _handleLoggedOff = async () => {
    
        this.props.dispatchLoggedOff();
        this.props.setPreferences({
            loggedUid: undefined
         })
    }
    ;
    _handleSelectPacki = async (packiId: string) => 
    
        this.props.dispatchSelectPacki(packiId);
    
    ;
    _handleCreatePacki = async (packiId: string, packiKind: string) => 
    
        this.props.dispatchCreatePacki(packiId, packiKind);
    
    ;
    _handleDeletePacki = async (packiId: string) => 
    
        this.props.dispatchDeletePacki(packiId);
    
    ;
    _findFocusedEntry = (entries: FileSystemEntry[]):  TextFileEntry | AssetFileEntry | undefined => 
    
        // @ts-ignore
        entries.find(({
            item, 
            state
         }) => 
        
            item.type === 'file' && state.isFocused === true
        )
    ;
    _handleChangeCode = (content: string) => {
    
    }
    ;
    _handleFileEntriesChange = (nextFileEntries: FileSystemEntry[]):  Promise<void> => {
    
        return new Promise(resolve => 
            
                this.setState((state) => {
                
                    let fileEntries = nextFileEntries;
                    return {
                            fileEntries
                         };
                }
                , resolve)
            );
    }
    ;
    render() {
        if (this.props && this.state) {
            const experienceURL = this.state.session.url;
            if (this.state.isPreview) {
                return  (
                    <AppDetails 
                        name={this.state.session.name}
                        description={this.state.session.description}
                        experienceURL={experienceURL}
                        onOpenEditor={this._handleOpenEditor}
                        userAgent={this.props.userAgent}
                     />
                    )
                ;
            }
            return  (
                <LazyLoad<React.ComponentType<EditorViewProps>>
                 load={() => 
                    
                        (import('./EditorView/EditorView'))
                }>
                    {
                        ({
                            loaded, 
                            data: Comp
                         }) => 
                        
                            loaded && Comp ?  (
                                <Comp 
                                    annotations={this.state.annotations}
                                    autosaveEnabled={this.state.autosaveEnabled}
                                    createdAt={this.props.Packi ? this.props.Packi.created : undefined}
                                    dependencies={this.state.session.dependencies}
                                    missingDependencies={this.state.session.missingDependencies}
                                    description={this.state.session.description}
                                    experienceURL={experienceURL}
                                    files={this.state.session.files}
                                    isDownloading={this.state.isDownloading}
                                    name={this.state.session.name}
                                    id={this.state.session.id}
                                    onDownloadAsync={this._handleDownloadAsync}
                                    onPublishAsync={this._saveAsync}
                                    onSendCode={this._handleSendCode}
                                    onSubmitMetadata={this._handleSubmitMetadata}
                                    onToggleSendCode={this._handleToggleSendCode}
                                    onTogglePreview={this._handleTogglePreview}
                                    onSelectFile={this._handleSelectFile}
                                    previewRef={this._previewRef}
                                    previewShown={this.state.devicePreviewShown}
                                    previewURL={this.state.webPreviewURL}
                                    saveHistory={this.state.saveHistory}
                                    saveStatus={this.state.saveStatus}
                                    sdkVersion={this.state.session.sdkVersion}
                                    selectedFile={this.state.selectedFile}
                                    sendCodeOnChangeEnabled={this.state.sendCodeOnChangeEnabled}
                                    packierURL={this.state.packierURL}
                                    updateDependencies={this._updateDependencies}
                                    updateFiles={this._updateFiles}
                                    uploadFileAsync={this._uploadAssetAsync}
                                    userAgent={this.props.userAgent}
                                    verbose={this.state.verbose}
                                    currentPacki={this.props.currentPacki}
                                    generatedArtifact={this.props.generatedArtifact}
                                    fileEntries={this.state.fileEntries}
                                    entry={this._findFocusedEntry(this.state.fileEntries)}
                                    isWizziJobWaiting={this.state.isWizziJobWaiting}
                                    jobError={this.state.jobError}
                                    onChangeCode={this._handleChangeCode}
                                    onFileEntriesChange={this._handleFileEntriesChange}
                                    onEntrySelected={this._handleEntrySelected}
                                    onSelectPacki={this._handleSelectPacki}
                                    onCreatePacki={this._handleCreatePacki}
                                    onDeletePacki={this._handleDeletePacki}
                                    onExecuteWizziJob={this._executeJobNotDebounced}
                                    onSaveCode={this._saveCode}
                                 />
                                )
                             :  (
                                <AppShell
                                 title={this.state.session.name} previewShown={this.state.devicePreviewShown} />
                                )
                        
                        
                    }
                </LazyLoad>
                )
            ;
        }
        else {
            return  (
                <div
                >
                    Not ready
                </div>
                )
            ;
        }
    }
}
const connector = connect(packiMapStateToProps, packiMapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
const AppMainContainer = withPreferences(withAuth(connector(AppMain)));
export default AppMainContainer;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column', 
        display: 'flex', 
        height: '100%', 
        width: '100%', 
        alignItems: 'center', 
        justifyContent: 'center'
     }, 
    logo: {
        transform: 'scale(0.5)', 
        opacity: 0.9
     }, 
    loadingText: {
        marginTop: 0, 
        opacity: 0.7, 
        fontSize: 18
     }
 });
