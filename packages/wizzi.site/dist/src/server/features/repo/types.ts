/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\server\src\features\repo\types.ts.ittf
    utc time: Sat, 29 May 2021 11:12:38 GMT
*/

export type FileDiffKind = '+' | '-' | '<>';

export type FileDiffItem = { 
    path: string;
    content: string;
};

export type FileDiff = { 
    kind: FileDiffKind;
    a?: FileDiffItem;
    b?: FileDiffItem;
};
