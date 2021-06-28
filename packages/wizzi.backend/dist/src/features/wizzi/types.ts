/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.backend\.wizzi\src\features\wizzi\types.ts.ittf
    utc time: Mon, 28 Jun 2021 20:09:52 GMT
*/
import * as wizzi from 'wizzi';
import {FsJson} from 'wizzi-repo';
import {packiTypes} from '../packi';

export type FilesystemWizziFactory = { 
    wf: wizzi.WizziFactory;
};
export type JsonWizziFactory = { 
    wf: wizzi.WizziFactory;
    fsJson: FsJson;
};
export type GeneratedArtifact = { 
    artifactContent: string;
    sourcePath: string;
    artifactGenerator: string;
};
export type TransformedModel = { 
    transformResult: any;
    sourcePath: string;
    modelTransformer: string;
};

export type MetaIttfDocument = { 
    sourceType: string;
    sourcePath?: string;
    sourceFiles?: packiTypes.PackiFiles;
};

export type MetaContext = { 
    name: string;
    type: string;
    sourcePath?: string;
    sourceFiles?: packiTypes.PackiFiles;
    value?: object;
};

export type ArtifactRequest = { 
    mainIttf: MetaIttfDocument;
    contextItems: MetaContext[];
};
