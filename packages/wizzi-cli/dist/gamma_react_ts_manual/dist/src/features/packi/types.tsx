/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\features\packi\types.tsx.ittf
    utc time: Sun, 21 Mar 2021 14:14:13 GMT
*/
// import { persist } from 'web-worker-proxy';
import {commonTypes} from '../../../common';
export type PackiFiles = commonTypes.PackiFiles;
export type GitRepositoryMeta = commonTypes.GitRepositoryMeta;
export type ClonedGitRepository = commonTypes.ClonedGitRepository;
export type Packi = { 
    id: string;
    files?: PackiFiles;
    dependencies?: { 
        [key: string]: string;
    };
    history?: SaveHistory;
    isDraft?: boolean;
    localPackiData: LocalPackiData;
};
export type PackiTemplate = { 
    id: string;
    files: PackiFiles;
    dependencies?: { 
        [key: string]: string;
    };
};
export type PackiFilesOrKind = PackiFiles | string;
export type CreatePackiOptions = { 
    data: PackiFilesOrKind;
};
export type SaveStatus = 'changed' | 'saving-draft' | 'saved-draft' | 'publishing' | 'published';
export type SaveHistory = Array<{ 
    id: string;
    savedAt: string;
    isDraft?: boolean;
}>;
//
type Listener = ReturnType<typeof Object, //
>;
// TODO should be an external type?
export type PackiSessionOptions = { 
    files: { 
        [x: string]: { 
            contents: string;
            type: 'ASSET' | 'CODE';
        };
    };
    // sdkVersion?: SDKVersion;
    verbose?: boolean;
    sessionId?: string;
    host?: string;
    sessionSecret?: string;
    packiId?: string;
    name?: string;
    description?: string;
    dependencies?: { 
        [key: string]: { 
            version: string;
        };
    };
    authorizationToken?: string;
    disableDevSession?: boolean;
    user: { 
        idToken?: string | null;
        sessionSecret?: string | null;
    };
    // deviceId?: string | null;
};
//
export type LocalPackiData = { 
    origin: string;
    id: string;
    owner?: string;
    repoName?: string;
    branch?: string;
    description?: string;
    localCreatedAt: number;
    githubCreatedAt: number;
    lastCommitAt: number;
};