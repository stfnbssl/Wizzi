/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\src\features\annotations\types.tsx.ittf
    utc time: Mon, 03 May 2021 09:48:27 GMT
*/

export enum AnnotationSeverity {
    LOADING = -1 , 
    IGNORE = 0 , 
    INFO = 1 , 
    WARNING = 2 , 
    ERROR = 3 , 
    FATAL = 4
}

export type AnnotationAction = { 
    title: string;
    icon?: React.ComponentType<any>;
    run: () => void;
};

export type AnnotationLocation = { 
    fileName: string;
    startLineNumber: number;
    endLineNumber: number;
    startColumn: number;
    endColumn: number;
};

export type Annotation = { 
    message: string;
    severity: AnnotationSeverity;
    source: 'Device' | 'Web' | 'JSON' | 'ESLint' | 'Dependencies';
    location?: AnnotationLocation;
    action?: AnnotationAction;
};
