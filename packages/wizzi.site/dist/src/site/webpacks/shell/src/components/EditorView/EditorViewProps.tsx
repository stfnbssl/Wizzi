/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\src\site\webpacks\shell\src\components\EditorView\EditorViewProps.tsx.ittf
    utc time: Wed, 14 Apr 2021 15:53:09 GMT
*/
import {SaveStatus, SaveHistory, SaveOptions, PackiFiles, PackiFile} from '../../features/packi/index';
import {Annotation} from '../../features/annotations/index';
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
};
