/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\src\site\webpacks\shell\src\components\_saved_App.tsx.ittf
    utc time: Wed, 14 Apr 2021 15:53:09 GMT
*/
import {StyleSheet, css} from 'aphrodite';
import debounce from 'lodash/debounce';
import nullthrows from 'nullthrows';
import * as React from 'react';
import {connect} from 'react-redux';
import {Packi, PackiListenerSubscription} from '../features/packi/index';
import {withAuth, AuthProps} from '../features/auth/index';
import {DEFAULT_DESCRIPTION, DEFAULT_CODE} from '../configs/defaults';
import {SavedPacki, QueryParams, SaveStatus, SaveHistory, SaveOptions, PackiState, PackiFile, PackiFiles, PackiDefaults} from '../features/packi/index';
import {Annotation} from '../features/annotations/index';
import {isMobile} from '../utils/detectPlatform';
import {getFilesFromQuery} from '../features/file/index';
import AppDetails from './AppDetails';
import {EditorViewProps} from './EditorView/EditorViewProps';
import {withPreferences, PreferencesContextType} from '../features/preferences/index';
import AppShell from './shell/AppShell';
import {AnimatedLogo} from './widgets/AnimatedLogo';
import LazyLoad from './widgets/LazyLoad';
const DEVICE_ID_KEY = '__SNACK_DEVICE_ID';
const BROADCAST_CHANNEL_NAME = 'SNACK_BROADCAST_CHANNEL';
type Params = { 
    id?: string;
    username?: string;
    projectName?: string;
};
type Props = AuthProps & PreferencesContextType & { 
    packi?: SavedPacki;
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
type State = { 
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
};
class Main extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        let name = props.defaults.name;
        let description = DEFAULT_DESCRIPTION;
        let code: PackiFiles | string = props.files;
        if (props.packi) {
            code = props.packi.code ?? code;
            if (props.packi.manifest) {
                const {
                    manifest
                 } = props.packi;
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
        const isPreview = !!(isMobile(props.userAgent) && (props.match.params.id || props.match.params.projectName) && !props.isEmbedded);
        const id = !props.match.params.id && props.match.params.username && props.match.params.projectName ? `@${props.match.params.username}/${props.match.params.projectName}` : props.match.params.id ? props.match.params.id : undefined;
        const verbose = props.query.verbose === 'true';
        const sendCodeOnChangeEnabled = true;
        const sessionSecret = props.getSessionSecret();
        const snackagerURL = nullthrows(process.env.IMPORT_SERVER_URL);
        const isLocalWebPreview = false;
        this._packi = new Packi({
            disabled: true, 
            name, 
            description, 
            files, 
            verbose, 
            codeChangesDelay: sendCodeOnChangeEnabled ? 1000 : -1, 
            reloadTimeout: 10000, 
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
            webPlayerURL: typeof window !== 'undefined' && isLocalWebPreview ? `${window.location.origin}/web-player/%%SDK_VERSION%%` : nullthrows(process.env.SNACK_WEBPLAYER_URL) + '/v2/%%SDK_VERSION%%'// Serve local web-player through `/web-player` end-point to prevent CORS issues
            
         });
        ;
        const devicePreviewShown = props.query.preview ? props.query.preview !== 'false' : props.isEmbedded ? false : props.preferences.devicePreviewShown;
        const selectedFile = files['App.js'] ? 'App.js' : files['App.tsx'] ? 'App.tsx' : files['app.js'] ? 'app.js' : Object.keys(files).length ? Object.keys(files)[0] : '';
        this.state = {
            session: this._packi.getState(), 
            selectedFile, 
            sendCodeOnChangeEnabled, 
            autosaveEnabled: !props.isEmbedded// We don't have any UI for autosave in embed
            // In addition, enabling autosave in embed will disable autosave in editor when embed dialog is open
            , 
            isSavedOnce: false, 
            saveHistory: props.packi?.history ?? [], 
            saveStatus: props.packi?.isDraft ? 'saved-draft' : id ? 'published' : 'unsaved', 
            isPreview, 
            isLocalWebPreview, 
            isDownloading: false, 
            devicePreviewShown, 
            verbose, 
            annotations: [], 
            snackagerURL, 
            webPreviewURL: ''
         };
    }
    _previewRef = React.createRef<Window>();
    private edited: boolean = false;
    static getDerivedStateFromProps(_props: Props, state: State) {
        if (typeof window !== 'undefined') {
            
            // Starting from SDK 40, the web-player URL is served from a static domain.
            
            // For lower SDK versions we fallback to the legacy URL which is served by
            
            // the Packi `/web-player/..` end-point.
            
            // TODO: Remove this one SDK 39 has been deprecated
            let webPreviewURL = state.session.webPreviewURL;
            if (state.isLocalWebPreview) {
                webPreviewURL = `${window.location.origin}/web-player/localhost/index.html?initialUrl=${encodeURIComponent(state.session.url)}&origin=${encodeURIComponent(window.location.origin)}&verbose=true`;
            }
            else {
            }
            if (state.webPreviewURL !== webPreviewURL) {
                // Dirty hack to update the origin that the transport uses to communicate
                // with the web-player. The transport origin is initialized from the initial
                // `webPreviewURL` value, but is re-written here to use the origin from the
                // actual in use `webPreviewURL`.
                // TODO: Remove this one SDK 39 has been deprecated
                // @ts-ignore See above
                state.session.transports['webplayer']?.updateOrigin?.(new URL(webPreviewURL).origin);
                return {
                        webPreviewURL
                     };
            }
        }
        return null;
    }
    componentDidMount() {
        if (this.state.verbose) {
            console.info(`%c INFO `, `background: #2196f3; color: #fff`, 'Verbose logging is enabled, open the web-preview in a popup to view runtime logs')
        }
        this._packiStateListener = this._packi.addStateListener(this._handleSessionStateChange);
        this._packi.setDisabled(false);
        this._isFocused = document.hasFocus();
        this._focusTimer = window.setInterval(this._handleFocusChangeInterval, 500);
        if (this.props.query.saveToAccount === 'true') {
            if (this._packi.getState().user) {
                this._saveAsync();
            }
        }
    }
    componentWillUnmount() {
        this._packiStateListener?.();
        this._packi.setDisabled(true);
        this._packi.setOnline(false);
        clearInterval(this._focusTimer);
        this._focusTimer = undefined;
    }
    componentDidUpdate(prevProps: Props, prevState: State) {
        if (this.props.viewer !== prevProps.viewer) {
            const sessionSecret = this.props.getSessionSecret();
            if (this.state.session.user?.sessionSecret !== sessionSecret) {
                this._packi.setUser(sessionSecret ? {
                        sessionSecret
                     } : undefined)
            }
        }
    }
    _packi: Packi;
    _packiStateListener?: PackiListenerSubscription;
    _isFocused: boolean = false;
    _focusTimer: number | undefined;
    _handleFocusChangeInterval = () => {
        const isFocused = document.hasFocus();
        if (this._isFocused !== isFocused) {
            this._isFocused = isFocused;
            if (isFocused) {
                this._packi.setFocus();
            }
        }
    };
    _handleToggleSendCode = () => 
        this.setState(({
            sendCodeOnChangeEnabled
         }) => {
        
            this._packi.setCodeChangesDelay(sendCodeOnChangeEnabled ? -1 : 1000)
            return {
                    sendCodeOnChangeEnabled: !sendCodeOnChangeEnabled
                 };
        }
        );
    _handleSendCode = () => 
        this._packi.sendCodeChanges();
    _handleSessionStateChange = (state: PackiState, prevState: PackiState) => 
        // console.log('Session state change: ', diff(prevState, state), state); // deep-object-diff
        this.setState((st) => {
        
            let annotations: Annotation[] | undefined;
            
            // Set save-status to changed if needed
            const saveStatus: SaveStatus = state.unsaved && (st.saveStatus === 'saved-draft' || st.saveStatus === 'published' || st.saveStatus === 'unsaved') ? this.edited ? 'edited' : 'unsaved' : st.saveStatus;
            
            // Update session state
            return {
                    session: state, 
                    saveStatus, 
                    annotations: annotations ?? st.annotations
                 };
        }
        , () => 
        
            this._saveDraftIfNeeded(true)
        );
    _handleSubmitMetadata = (details: { 
        name: string;
        description: string;
    }) => {
        this.edited = true;
        this._packi.setName(details.name);
        this._packi.setDescription(details.description);
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
        if (this.state.session.user && this.state.session.unsaved && this.state.autosaveEnabled && this.state.saveStatus === 'edited') {
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
            const saveResult = await this._packi.saveAsync({
                    isDraft, 
                    ignoreUser
                 });
            if (!excludeFromHistory) {
                this.props.history.push({
                    pathname: `/${saveResult.id}`, 
                    search: this.props.location.search
                 })
            }
            this.setState((state) => 
            
                ({
                    isSavedOnce: true, 
                    saveHistory: excludeFromHistory ? state.saveHistory : [
                            {
                                hashId: saveResult.hashId ?? '', 
                                savedAt: new Date().toISOString(), 
                                isDraft
                             }, 
                            ...state.saveHistory
                        ], 
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
        return this._packi.uploadAssetAsync(asset);
    };
    _handleTogglePreview = () => {
        if (!this.props.isEmbedded) {
            this.props.setPreferences({
                devicePreviewShown: !this.state.devicePreviewShown
             })
        }
        this.setState((state) => 
        
            ({
                devicePreviewShown: !state.devicePreviewShown
             })
        , this._enablePubNubIfNeeded)
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
        const state = this._packi.getState();
        const filesUpdate = updateFn(state.files);
        if (Object.keys(filesUpdate).length) {
            this.edited = true;
            this._packi.updateFiles(filesUpdate);
        }
    };
    render() {
        const {
            isEmbedded
         } = this.props;
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
        let isResolving = false;
        return  (
            <LazyLoad<React.ComponentType<EditorViewProps>>
             load={() => 
                
                    (import('./EditorView'))
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
                                createdAt={this.props.packi ? this.props.packi.created : undefined}
                                description={this.state.session.description}
                                experienceURL={experienceURL}
                                experienceName={this.state.session.onlineName ?? this.state.session.name}
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
}
const MainContainer = withPreferences(connect((state: any) => 

    ({
        viewer: state.viewer
     })
)(withAuth(Main))
);
// 
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
            
            // Upon load, show the whole packi
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
