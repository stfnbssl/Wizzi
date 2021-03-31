/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\features\wizzi\types.tsx.ittf
    utc time: Thu, 25 Mar 2021 16:39:06 GMT
*/
export type GeneratedArtifact = { 
    artifactContent?: string;
    sourcePath: string;
    artifactGenerator: string;
    errorMessage?: string;
    errorLines?: string[];
    errorStack?: string;
    errorName?: string;
    errorInfo?: { 
        [k: string]: any;
    };
    isError?: boolean;
};
export interface WizziError {
    errorName?: string;
    errorMessage?: string;
    errorStack?: string;
}
export interface ArtifactError extends WizziError {
    errorLines?: string[];
}
export interface JobError extends WizziError {
    errorInfo?: { 
        [k: string]: any;
    };
}
