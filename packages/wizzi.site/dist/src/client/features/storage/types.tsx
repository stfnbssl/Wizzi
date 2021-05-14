/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\src\features\storage\types.tsx.ittf
    utc time: Tue, 11 May 2021 04:47:43 GMT
*/

export interface IStorageBackend {
    getItem(key: string): string | null | undefined;
    removeItem(key: string): void;
    setItem(key: string, value: string, options?: object): void;
}
