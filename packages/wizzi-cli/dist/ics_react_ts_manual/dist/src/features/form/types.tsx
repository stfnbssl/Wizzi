/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\ics_react_ts_manual\.wizzi\src\features\form\types.tsx.ittf
    utc time: Fri, 26 Mar 2021 07:40:26 GMT
*/
export type Register = (options: { 
    validate: () => Error | null;
    focus: () => void;
}) => number;
export type Unregister = (key: number) => void;
export type Update = () => void;
export type FormValidation = { 
    register: Register;
    unregister: Unregister;
    update: Update;
    valid: boolean;
};
