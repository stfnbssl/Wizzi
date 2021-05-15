/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.ui\.wizzi\src\components\data\types.tsx.ittf
    utc time: Sat, 15 May 2021 12:57:34 GMT
*/
export interface ColumnDef {
    id: string;
    label?: string;
    type?: string;
}
export interface ListDef {
    id: string;
    title: string;
    columns: ColumnDef[];
}
export interface ControlDef {
    id: string;
    label?: string;
    type: string;
    required?: boolean;
}
export interface FormDef {
    id: string;
    title: string;
    controls: ControlDef[];
}
export interface DataEntryDef {
    list: ListDef;
    form: FormDef;
    items: { 
    }[];
}
