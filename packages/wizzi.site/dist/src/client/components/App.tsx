/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\src\components\App.tsx.ittf
    utc time: Tue, 11 May 2021 04:47:43 GMT
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
import {SavedPacki, QueryParams, SaveStatus, SaveHistory, SaveOptions, PackiState, PackiFile, PackiFiles, PackiDefaults} from '../features/packi';
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
    DEFAULT_DESCRIPTION, 
    DEFAULT_CODE
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
type Props = AuthProps & PreferencesContextType & PropsFromRedux & { 
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
    snackagerURL: string;
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
class Main extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        let name = props.defaults.name;
        let description = DEFAULT_DESCRIPTION;
        let code: PackiFiles | string = props.files;
        if (props.Packi) {
            code = props.Packi.code ?? code;
            if (props.Packi.manifest) {
                const {
                    manifest
                 } = props.Packi;
                name = manifest.name;
                description = manifest.description;
            }
        }
        if (props.query) {
            name = props.query.name ?? name;
            description = props.query.description ?? description;
        }
        let files: PackiFiles = typeof code === 'string' ? {
                'App.js': {
                    contents: code, 
                    type: 'CODE'
                 }
             } : (code as any);
        const isPreview = !!(isMobile(props.userAgent) && (props.match.params.id || props.match.params.projectName) && true);
        const id = !props.match.params.id && props.match.params.username && props.match.params.projectName ? `@${props.match.params.username}/${props.match.params.projectName}` : props.match.params.id ? props.match.params.id : undefined;
        const verbose = props.query.verbose === 'true';
        const sendCodeOnChangeEnabled = true;
        const sessionSecret = null;
        const snackagerURL = nullthrows(process.env.IMPORT_SERVER_URL);
        const isLocalWebPreview = false;
        this._PackiSession = new PackiSession({
            disabled: true, 
            name, 
            description, 
            files, 
            verbose, 
            codeChangesDelay: sendCodeOnChangeEnabled ? 1000 : -1, 
            id: id, 
            user: sessionSecret ? {
                    sessionSecret
                 } : undefined, 
            apiURL: nullthrows(process.env.API_SERVER_URL), 
            snackagerURL, 
            host: // Use staging server in development, otherwise Expo Go and appetize
            // can't access the runtime. Replace with ngrok url to test locally.
            process.env.NODE_ENV === 'development' ? 'staging.snack.expo.io' : new URL(nullthrows(process.env.SERVER_URL)).host, 
            webPreviewRef: typeof window !== 'undefined' ? this._previewRef : undefined, 
            
            // Serve local web-player through `/web-player` end-point to prevent CORS issues
            webPlayerURL: typeof window !== 'undefined' && isLocalWebPreview ? `${window.location.origin}/web-player/%%SDK_VERSION%%` : nullthrows(process.env.SNACK_WEBPLAYER_URL) + '/v2/%%SDK_VERSION%%'
         });
        ;
        const devicePreviewShown = props.query.preview ? props.query.preview !== 'false' : props.preferences.devicePreviewShown;
        const selectedFile = files['App.js'] ? 'App.js' : files['App.tsx'] ? 'App.tsx' : files['app.js'] ? 'app.js' : Object.keys(files).length ? Object.keys(files)[0] : '';
        const params: Params = {
            ...((!props.match.params.id && props.match.params.username && props.match.params.repoName ? {
                        id: `@${props.match.params.username}/${props.match.params.repoName}`
                     } : null))
            
         };
        this.state = {
            session: this._PackiSession.getState(), 
            selectedFile, 
            sendCodeOnChangeEnabled, 
            autosaveEnabled: true, 
            isSavedOnce: false, 
            saveHistory: props.Packi?.history ?? [], 
            saveStatus: props.Packi?.isDraft ? 'saved-draft' : id ? 'published' : 'unsaved', 
            isPreview, 
            isLocalWebPreview, 
            isDownloading: false, 
            devicePreviewShown, 
            verbose, 
            annotations: [], 
            snackagerURL, 
            webPreviewURL: '', 
            packiStoreId: undefined, 
            packiSessionReady: false, 
            fileEntries: [], 
            generatedArtifact: undefined, 
            jobGeneratedArtifacts: undefined, 
            jobError: undefined, 
            isWizziJobWaiting: false, 
            lastJobfileEntries: [], 
            params
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
    _handleFocusChangeInterval = () => {
        const isFocused = document.hasFocus();
        if (this._isFocused !== isFocused) {
            this._isFocused = isFocused;
            if (isFocused) {
                this._PackiSession.setFocus();
            }
        }
    };
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
                const url = `${process.env.API_SERVER_URL}/--/api/v2/snack/download/${id}`;
                
                // Simulate link click to download file
                const element = document.createElement('a');
                if (element && document.body) {
                    document.body.appendChild(element);
                    element.setAttribute('href', url);
                    element.setAttribute('download', 'snack.zip');
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
        this.setState((state) => 
        
            (state.selectedFile !== path ? {
                    selectedFile: path
                 } : null)
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
    _handleEntrySelected = (entry: FileSystemEntry) => {
    
        console.log('App._handleEntrySelected', this.props.preferences.autoGenSingleDoc, entry.item.path);
        if (this.props.preferences.autoGenSingleDoc) {
            if (entry.item.path.endsWith('.ittf') && entry.item.path.indexOf('/t/') < 0) {
                this.props.dispatchGenerateArtifact(entry.item.path, entryArrayToPacki(this.state.fileEntries.filter(e => 
                
                    e.item.path.endsWith('.ittf')
                )))
            }
        }
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
                                    selectedFile={this.state.selectedFile}
                                    sendCodeOnChangeEnabled={this.state.sendCodeOnChangeEnabled}
                                    snackagerURL={this.state.snackagerURL}
                                    updateFiles={this._updateFiles}
                                    uploadFileAsync={this._uploadAssetAsync}
                                    userAgent={this.props.userAgent}
                                    verbose={this.state.verbose}
                                    params={this.state.params}
                                    currentPacki={this.props.currentPacki}
                                    generatedArtifact={this.props.generatedArtifact}
                                    fileEntries={this.state.fileEntries}
                                    entry={this._findFocusedEntry(this.state.fileEntries)}
                                    isWizziJobWaiting={this.state.isWizziJobWaiting}
                                    jobError={this.state.jobError}
                                    //onLoggedOn={this._handleLoggedOn}
                                    //onLoggedOff={this._handleLoggedOff}
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
const MainContainer = withPreferences(withAuth(connector(Main)));
type AsyncState = { 
    isReady: boolean;
    files: PackiFiles;
    error?: Error;
};
export default class AsyncApp extends React.Component<Props, AsyncState> {
        constructor(props: Props) {
            super(props);
            try {
                const files = getFilesFromQuery(props.query, DEFAULT_CODE);
                const isReady = !Object.values(files).find((file: any) => 
                
                    file.url
                );
                this.state = {
                    files, 
                    isReady
                 };
            } 
            catch (e) {
                this.state = {
                    error: e, 
                    files: DEFAULT_CODE, 
                    isReady: true
                 };
            } 
        }
        componentDidMount() {
            if (!this.state.isReady) {
                this.loadFilesAsync(this.state.files);
            }
            else {
                if (this.state.error) {
                    alert(this.state.error.message);
                }
            }
        }
        private async loadFilesAsync(files: any) {
            
            // Minimum amount of time to show the loading indicator for, so it doesn't
            
            // just flicker in and out
            const MIN_LOADING_MS = 1500;
            const startTime = Date.now();
            
            // Load all files with external urls
            const paths = Object.keys(files);
            try {
                const contents = await Promise.all(Object.values(files).map(async (file: any, index: number) => {
                    
                        const path = paths[index];
                        if (file.url) {
                            try {
                                const response = await fetch(file.url);
                                if (!response.ok) {
                                    throw new Error(`${response.status} - ${response.statusText}`);
                                }
                                const code = await response.text();
                                return code;
                            } 
                            catch (e) {
                                throw new Error(`We were unable to load code for file "${path}" (${e.message})`);
                            } 
                        }
                        else {
                            if (file.contents) {
                                return file.contents;
                            }
                            else {
                                throw new Error(`No code specified for file "${path}"`);
                            }
                        }
                    }
                    ));
                files = {
                    ...files
                 };
                paths.forEach((path, index) => 
                
                    files[path] = {
                        type: files[path].type, 
                        contents: contents[index]
                     }
                )
            } 
            catch (e) {
                alert(e.message);
                files = {
                    ...files
                 };
                paths.forEach(path => 
                
                    files[path] = {
                        type: files[path].type, 
                        contents: ''
                     }
                )
                this.setState({
                    isReady: true, 
                    files
                 })
                return ;
            } 
            
            // Upon load, show the whole Packi
            const duration = Date.now() - startTime;
            setTimeout(() => 
            
                this.setState({
                    isReady: true, 
                    files
                 })
            , duration < MIN_LOADING_MS ? MIN_LOADING_MS - duration : 0)
        }
        render() {
            if (this.state.isReady) {
                return  (
                    <MainContainer
                     {...this.props} files={this.state.files} />
                    )
                ;
            }
            else {
                return  (
                    <div
                     className={css(styles.container)}>
                        <div
                         className={css(styles.logo)}>
                            <AnimatedLogo
                             />
                        </div>
                        <p
                         className={css(styles.loadingText)}>
                            Loading code from external source...
                        </p>
                    </div>
                    )
                ;
            }
        }
    }
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
