/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.editor\.wizzi\src\features\packi\sdks\types.ts.ittf
    utc time: Sun, 27 Jun 2021 11:22:04 GMT
*/

export type SDKVersion = '1.0.0';

export type SDKSpec = { 
    // Version-spec for the published "wizzi" package.
    version: string;
    // TFolders that are pre-loaded by the Wizzi runtime, and which
    // the user does not need to add to `wizzi.config.json`.
    coreTFolders: { 
        [name: string]: string;
    };
};

export type SDKFeature = 'MULTIPLE_FILES' | 'TFOLDER_DEPENDENCIES' | 'WIZZI_JOBS' | 'META_PRODUCTIONS';
    //
    
