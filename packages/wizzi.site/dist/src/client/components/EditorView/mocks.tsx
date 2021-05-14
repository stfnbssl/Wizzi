/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\src\components\EditorView\mocks.tsx.ittf
    utc time: Tue, 11 May 2021 04:47:43 GMT
*/

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

export type Viewer = { 
    username: string;
    nickname: string;
    picture?: string;
    user_metadata?: { 
        appetize_code: string;
    };
};

export type AuthProps = { 
    getSessionSecret: () => string;
    setMetadata: (metadata: { 
        appetizeCode: string;
    }) => Promise<void>;
    viewer?: Viewer | undefined;
    dispatch: (action: { 
        type: 'UPDATE_VIEWER';
        viewer: Viewer | null | undefined;
    }) => void;
};

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
    

