/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.backend\.wizzi\src\common\types.ts.ittf
    utc time: Wed, 07 Jul 2021 15:52:36 GMT
*/

type RequiredPackiFileAttributes = { 
    contents: string;
    type: 'ASSET' | 'CODE';
    generated?: boolean;
    bothRealAndGenerated?: boolean;
};

export type PackiFiles = { 
    [x: string]: RequiredPackiFileAttributes;
};

export type GitRepositoryMeta = { 
    owner: string;
    name: string;
    description: string;
    branches: string[];
};

export type ClonedGitRepository = { 
    owner: string;
    name: string;
    description: string;
    branch: string;
    commitHistory: any;
    files: PackiFiles;
};
