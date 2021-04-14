/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\src\site\webpacks\shell\src\features\packi\types.tsx.ittf
    utc time: Wed, 14 Apr 2021 15:53:09 GMT
*/
import {ThemeName} from '../preferences/index';

export type PackiCodeFile = { 
    type: 'CODE';
    contents: string;
    error?: Error;
};
    //
    

export type PackiAssetFile = { 
    type: 'ASSET';
    // string = url
    contents: string | File | Blob | FormData;
    // string = url
    error?: Error;
};
    //
    

export type PackiFile = PackiCodeFile | PackiAssetFile;
    //
    

export type PackiFiles = { 
    [path: string]: PackiFile;
};
    //
    

export interface PackiError extends Error {
    fileName?: string;
    lineNumber?: number;
    columnNumber?: number;
}
    //
    

export type PackiUser = { 
    sessionSecret?: string;
    accessToken?: string;
};
    //
    

export type PackiState = { 
    // 
    files: PackiFiles;
    // 
    name: string;
    // 
    description: string;
    // 
    url: string;
    user?: PackiUser;
    // 
    unsaved: boolean;
    // 
    id?: string;
    // 
    saveURL?: string;
    // 
    webPreviewURL?: string;
};

export type SaveStatus = 'unsaved' | 'edited' | 'saving-draft' | 'saved-draft' | 'publishing' | 'published';

export type SaveHistory = { 
    hashId: string;
    savedAt: string;
    isDraft?: boolean;
}[];

export type SaveOptions = { 
    isDraft?: boolean;
    ignoreUser?: boolean;
    excludeFromHistory?: boolean;
};

export type QueryInitParams = { 
    code?: string;
    sourceUrl?: string;
    name?: string;
    description?: string;
    files?: string;
    iframeId?: string;
    waitForData?: 'boolean';
    saveToAccount?: 'true' | 'false';
};

export type QueryStateParams = { 
    preview?: 'true' | 'false';
    theme?: ThemeName;
    verbose?: 'true' | 'false';
    hideQueryParams?: 'true' | 'false';
};

export type QueryParams = QueryInitParams & QueryStateParams;

export type PackiListenerSubscription = () => any;

export type SavedPacki = { 
    id: string;
    created: string;
    code?: string | PackiFiles;
    manifest: PackiManifest;
    history?: SaveHistory;
    isDraft?: boolean;
};

export type PackiDefaults = { 
    name: string;
    channel: string;
};

export type PackiWindowRef = { 
    current: Window | null;
};

export type PackiOptions = { 
    name?: string;
    description?: string;
    files?: PackiFiles;
    apiURL?: string;
    host?: string;
    snackagerURL?: string;
    verbose?: boolean;
    disabled?: boolean;
    online?: boolean;
    channel?: string;
    codeChangesDelay?: number;
    user?: PackiUser;
    id?: string;
    webPlayerURL?: string;
    webPreviewRef?: PackiWindowRef;
};

export type PackiSaveOptions = { 
    isDraft?: boolean;
    ignoreUser?: boolean;
};
