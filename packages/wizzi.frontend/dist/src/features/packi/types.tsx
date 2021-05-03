/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.frontend\.wizzi\src\features\packi\types.tsx.ittf
    utc time: Sat, 01 May 2021 05:18:20 GMT
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
    /**
        // 
        // Files that make up the content (code & assets) of the Packi. There should
        // always be a file called "App.js" or "App.tsx" as the main entry point.
        // 
    */
    files: PackiFiles;
    /**
        // 
        // Optional name. The name is used when saving or downloading the Packi; and is used
        // for the onlineName property.
        // 
    */
    name: string;
    /**
        // 
        // Additional description of the Packi. The description is used when saving the Packi
        // and may also be used for searching purposes.
        // 
    */
    description: string;
    /**
        // 
        // Unique experience url which can be used to open the Expo client and connect
        // to the Packi (e.g. "exp://expo.io/@snack/sdk.38.0.0-78173941").
        // 
    */
    url: string;
    user?: PackiUser;
    /**
        // 
        // Unsaved status of the Packi. Becomes `true` when the Packi code is changed and
        // `false` whenever the Packi is saved.
        // 
    */
    unsaved: boolean;
    /**
        // 
        // Id of the saved Packi.
        // 
    */
    id?: string;
    /**
        // 
        // URL of the saved Packi.
        // The URL is empty when no save "id" is available.
        // 
    */
    saveURL?: string;
    /**
        // 
        // URL to use to when loading the web-preview in an iframe.
        // 
        // Web-preview is supported from SDK 40 and higher.
        // To enable it, set the `webPreviewRef` to the contentWindow
        // of the iframe.
        // 
    */
    webPreviewURL?: string;
    /**
        // 
        // Disabled state. When the Packi is disabled it will not resolve any dependencies
        // or upload any asset files. It also disables the ability to go online.
        // 
    */
    disabled: boolean;
    /**
        // 
        // When online is true, Expo clients can connect to the Packi and receive live updates
        // when code or dependencies are changed. It also makes the Packi visible in the
        // "Recently in Development" section of the Expo client.
        // 
    */
    online: boolean;
    /**
        // 
        // Communication channel ("pubnub") through which live updates are transferred.
        // The communication channel is only used when the Packi is "online".
        // 
    */
    channel: string;
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

export type PackiListenerSubscription = () => any;

export type SavedPacki = { 
    id: string;
    created: string;
    code?: string | PackiFiles;
    manifest: PackiManifest;
    history?: SaveHistory;
    isDraft?: boolean;
};

export type PackiManifest = { 
    name: string;
    description: string;
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

export type PackiStateListener = (state: PackiState, prevState: PackiState) => any;

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

export type RouterData = { 
    type: "success";
    packi?: SavedPacki;
    defaults: PackiDefaults;
} | { 
    type: "error";
    error: { 
        message: string;
    };
    defaults: PackiDefaults;
};
