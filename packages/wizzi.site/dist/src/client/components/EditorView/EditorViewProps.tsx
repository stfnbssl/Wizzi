/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\src\components\EditorView\EditorViewProps.tsx.ittf
    utc time: Tue, 11 May 2021 04:47:43 GMT
*/
import {SaveStatus, SaveHistory, SaveOptions, PackiFiles, PackiFile} from '../../features/packi';
import {GeneratedArtifact, JobError} from '../../features/wizzi';
import {Packi} from '../../features/packi';
import {FileSystemEntry, TextFileEntry, AssetFileEntry} from '../../features/file';
import {Annotation} from '../../features/annotations';
export type EditorViewProps = { 
    createdAt: string | undefined;
    saveHistory: SaveHistory;
    saveStatus: SaveStatus;
    selectedFile: string;
    files: PackiFiles;
    name: string;
    description: string;
    id?: string;
    isDownloading: boolean;
    annotations: Annotation[];
    experienceURL: string;
    sendCodeOnChangeEnabled: boolean;
    onSendCode: () => void;
    onToggleSendCode: () => void;
    onTogglePreview: () => void;
    onSubmitMetadata: (details: { 
        name: string;
        description: string;
    }) => void;
    onPublishAsync: (options?: SaveOptions) => Promise<void>;
    onDownloadAsync: () => Promise<void>;
    onSelectFile: (path: string) => void;
    updateFiles: (updateFn: (files: PackiFiles) => { 
        [path: string]: PackiFile | null;
    }) => void;
    uploadFileAsync: (file: File) => Promise<string>;
    autosaveEnabled: boolean;
    userAgent: string;
    previewRef: React.MutableRefObject<Window | null>;
    previewShown: boolean;
    previewURL: string;
    verbose: boolean;
    snackagerURL: string;
    creatorUsername?: string;
    currentPacki?: Packi;
    fileEntries: FileSystemEntry[];
    entry: TextFileEntry | AssetFileEntry | undefined;
    params: { 
        id?: string;
    };
    generatedArtifact?: GeneratedArtifact;
    // loadingMessage: string | undefined;
    jobError?: JobError;
    isWizziJobWaiting: boolean;
    onSelectPacki: (packiId: string) => void;
    onCreatePacki: (packiId: string, packiKind: string) => void;
    onDeletePacki: (packiId: string) => void;
    onFileEntriesChange: (entries: FileSystemEntry[]) => Promise<void>;
    onChangeCode: (code: string) => void;
    onEntrySelected: (entry: FileSystemEntry) => void;
    onExecuteWizziJob: () => void;
    onSaveCode: () => void;
};
