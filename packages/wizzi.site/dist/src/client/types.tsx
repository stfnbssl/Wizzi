/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\src\types.tsx.ittf
    utc time: Tue, 11 May 2021 04:47:43 GMT
*/

export type $SetComplement<A, A1 extends A> = A extends A1 ? never : A;

export type $Subtract<T extends T1, T1 extends object> = Pick<T, $SetComplement< keyof T,  keyof T1>>;
