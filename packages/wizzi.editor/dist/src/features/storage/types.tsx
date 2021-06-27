/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.editor\.wizzi\src\features\storage\types.tsx.ittf
    utc time: Sun, 27 Jun 2021 11:22:09 GMT
*/

export interface IStorageBackend {
    getItem(key: string): string | null | undefined;
    removeItem(key: string): void;
    setItem(key: string, value: string, options?: object): void;
}
