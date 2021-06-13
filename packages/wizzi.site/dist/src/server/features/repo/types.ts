/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\server\src\features\repo\types.ts.ittf
    utc time: Wed, 09 Jun 2021 05:04:16 GMT
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
