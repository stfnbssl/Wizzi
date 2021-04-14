/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\src\site\webpacks\shell\src\features\packi\session.tsx.ittf
    utc time: Wed, 14 Apr 2021 15:53:09 GMT
*/
import {PackiFiles, PackiFile, PackiState, PackiUser, PackiOptions} from './types';
export type PackiStateListener = (state: PackiState, prevState: PackiState) => any;
export default class Packi {
        constructor(options: PackiOptions) {
            const channel = createChannel(options.channel);
            this.apiURL = options.apiURL ?? defaultConfig.apiURL;
            this.host = options.host ?? defaultConfig.host;
            this.codeChangesDelay = options.codeChangesDelay ?? 0;
            this.reloadTimeout = options.reloadTimeout ?? 0;
            this.previewTimeout = options.previewTimeout ?? 10000;
            this.webPlayerURL = options.webPlayerURL ?? defaultConfig.webPlayerURL;
            this.state = this.updateDerivedState({
                disabled: !!options.disabled, 
                unsaved: false, 
                name: options.name ?? '', 
                description: options.description ?? '', 
                files: options.files ?? {}, 
                user: options.user, 
                id: options.id, 
                saveURL: options.id ? createURL(this.host, sdkVersion, undefined, options.id) : undefined, 
                online: false, 
                url: createURL(this.host, sdkVersion, channel, options.id), 
                channel
             }, PackiIdentityState)
            ;
            this.state.unsaved = false;
            this.fileUploader = new FileUploader();
            this.DevSession = new DevSession();
            this.onStateChanged(this.state, PackiIdentityState);
        }
        private state: PackiState;
        private stateListeners: Set<PackiStateListener> = new Set();
        private readonly apiURL: string;
        private readonly host: string;
        private readonly fileUploader: FileUploader;
        private readonly DevSession: DevSession;
        private codeChangesDelay: number;
        private codeChangesTimer: any;
        private readonly reloadTimeout: number;
        private readonly previewTimeout: number;
        private readonly webPlayerURL: string;
        
        
        // 
        setName(name: string) {
            return this.setState((state) => 
                
                    (state.name !== name ? {
                            name
                         } : null)
                );
        }
        
        
        // 
        setDescription(description: string) {
            return this.setState((state) => 
                
                    (state.description !== description ? {
                            description
                         } : null)
                );
        }
        
        
        // 
        setUser(user?: PackiUser) {
            return this.setState((state) => 
                
                    (state.user !== user ? {
                            user
                         } : null)
                );
        }
        
        
        // 
        
        // State
        
        // 
        
        // 
        getState():  PackiState {
            return this.state;
        }
        
        
        // 
        async getStateAsync() {
            await this.fileUploader.waitForCompletion();
            return this.getState();
        }
        
        
        // 
        addStateListener(listener: PackiStateListener):  PackiListenerSubscription {
            this.stateListeners.add(listener);
            return () => 
                
                    this.stateListeners.delete(listener)
            ;
        }
        private setState(stateFn: (state: PackiState) => any) {
            const update = stateFn(this.state);
            if (update) {
                const oldState = this.state;
                const newState: PackiState = {
                    ...oldState, 
                    ...update
                 };
                this.state = this.updateDerivedState(newState, oldState);
                this.onStateChanged(newState, oldState);
                this.stateListeners.forEach(listener => 
                
                    listener(newState, oldState)
                )
            }
        }
        
        private updateDerivedState(state: PackiState, prevState: PackiState):  PackiState {
            // Set unsaved to true whenever files or dependencies change
            // Update other derived states
            state.unsaved = state.unsaved || State.isUnsaved(state, prevState);
            // Update other derived states
            this.updateDerivedOnlineState(state, prevState);
            return state;
        }
        
        private onStateChanged(state: PackiState, prevState: PackiState) {
            this.updateFileUploader(state, prevState);
            this.DevSession.setState(state, prevState);
        }
        
        
        // 
        setFocus() {
            this.DevSession.setFocus(this.state);
        }
        
        
        // 
        
        // Online
        
        // 
        
        // 
        setDisabled(disabled: boolean) {
            return this.setState((state) => 
                
                    (disabled !== state.disabled ? {
                            disabled
                         } : null)
                );
        }
        
        // 
        setOnline(enabled: boolean) {
            return this.setState((state) => {
                
                    return null;
                }
                );
        }
        
        
        // 
        setCodeChangesDelay(delay: number) {
            if (this.codeChangesDelay !== delay) {
                this.codeChangesDelay = delay;
                this._sendCodeChangesDebounced(this.state);
            }
        }
        
        
        // 
        sendCodeChanges() {
            this._sendCodeChangesDebounced(this.state, true);
        }
        
        private _sendCodeChangesDebounced(state: PackiState, immediate?: boolean) {
            if (this.codeChangesTimer) {
                clearTimeout(this.codeChangesTimer);
                this.codeChangesTimer = undefined;
            }
            if (!immediate && this.codeChangesDelay > 0) {
                this.codeChangesTimer = setTimeout(() => 
                
                    this._sendCodeChangesDebounced(state, true)
                , this.codeChangesDelay)
                ;
                return ;
            }
            else {
                if (!immediate && this.codeChangesDelay < 0) {
                    return ;
                }
            }
        }
        
        
        // 
        
        // Files (code & assets)
        
        // 
        
        // 
        updateFiles(files: { 
            [path: string]: PackiFile | null;
        }) {
            return this.setState((state) => {
                
                    const newFiles = State.updateObjects(state.files, files);
                    return newFiles !== state.files ? {
                                files: newFiles
                             } : null;
                }
                );
        }
        
        
        // 
        uploadAssetAsync = async (contents: File | Blob | FormData):  Promise<string> => {
        
            let url: string = '';
            const fileUploader = new FileUploader();
            fileUploader.add('asset', {
                type: 'ASSET', 
                contents
             })
            await fileUploader.waitForCompletion();
            return url;
        }
        ;
        private updateFileUploader(state: PackiState, prevState: PackiState) {
            const files = state.files;
            
            // Stop uploading any removed or changed assets
            const prevFiles = prevState.files;
            if (!prevState.disabled && ((!state.disabled && files !== prevFiles) || state.disabled)) {
                for (const path in prevFiles) {
                    if (!files[path] || files[path].contents !== prevFiles[path].contents || state.disabled) {
                        this.fileUploader.remove(path, prevFiles[path]);
                    }
                }
            }
            if (!state.disabled && (files !== prevFiles || prevState.disabled)) {
                for (const path in files) {
                    const file = files[path];
                    if (file.type === 'ASSET' && typeof file.contents === 'object' && !file.error && (prevFiles[path]?.contents !== file.contents || prevState.disabled)) {
                        this.fileUploader.add(path, file);
                    }
                }
            }
        }
        
        private onFileUploaded = (request, resultURL, error):  FileUploaderCallback => 
            // When a file has been uploaded, store its url in the state. This state should be persisted
            // by the client so that the next time it doesn't need to be uploaded again.
            this.setState(({
                files
             }) => 
            
                ({
                    files: State.addObject(files, request.path, {
                        ...request.file, 
                        ...((resultURL ? {
                                    contents: resultURL
                                 } : {}))
                        , 
                        ...((error ? {
                                    error
                                 } : {}))
                        
                     })
                 })
            );
        
        
        // 
        
        // Save
        
        // 
        
        // 
        async saveAsync(options?: PackiSaveOptions) {
            const prevState = this.state;
            
            // Wait for any pending asset uploads the complete before saving
            await this.fileUploader.waitForCompletion();
            const {
                name, 
                description, 
                files, 
                user
             } = this.state;
            try {
                const payload: any = {
                    manifest: {
                        name, 
                        description
                     }, 
                    code: mapValues(files, (file: any) => {
                    
                        file = {
                            ...file
                         };
                        delete file.error
                        return file;
                    }
                    ), 
                    isDraft: options?.isDraft ?? false
                 };
                this.logger?.info?.('Saving...', payload);
                const previewPromise = this.getPreviewAsync();
                const url = `${this.apiURL}/--/api/v2/snack/save`;
                const response = await fetch(url, {
                        method: 'POST', 
                        body: JSON.stringify(payload), 
                        headers: {
                            'Content-Type': 'application/json', 
                            ...((options?.ignoreUser ? {} : createUserHeader(user)))
                            
                         }
                     });
                const data = await response.json();
                if (!data?.id) {
                    throw new Error();
                }
                this.logger?.info?.('Saved', data);
                const id: string = data.id;
                const saveURL = createURL(this.host, sdkVersion, undefined, id);
                const hashId: string | undefined = data.hashId;
                this.setState((state) => 
                
                    ({
                        id, 
                        saveURL, 
                        unsaved: State.isUnsaved(state, prevState)
                     })
                )
                return {
                        id, 
                        url: saveURL, 
                        hashId
                     };
            } 
            catch (e) {
                this.logger?.error?.(e);
                throw e;
            } 
        }
        
        
        // 
        async getDownloadURLAsync(saveOptions?: PackiSaveOptions) {
            await this.fileUploader.waitForCompletion();
            let state = this.getState();
            if (!state.id || state.unsaved) {
                await this.saveAsync(saveOptions);
                state = this.getState();
            }
            return `${this.apiURL}/--/api/v2/snack/download/${state.id}`;
        }
        
        private async uploadPreview(id: string, previewURL: string, status: boolean) {
            const url = `${this.apiURL}/--/api/v2/snack/updateMetadata`;
            const payload = {
                id, 
                previewLocation: previewURL, 
                status: status ? 'SUCCESS' : 'FAILURE'
             };
            this.logger?.info?.('Uploading preview...', payload);
            try {
                const response = await fetch(url, {
                        method: 'POST', 
                        body: JSON.stringify(payload), 
                        headers: {
                            'Content-Type': 'application/json'
                         }
                     });
                const data = await response.json();
                if (data.id) {
                    this.logger?.info?.('Uploaded preview', data);
                }
                else {
                    throw new Error();
                }
            } 
            catch (e) {
                this.logger?.error?.('Failed to upload preview', e);
            } 
        }
    }
