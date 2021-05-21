/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.ui\.wizzi\src\components\data\types.tsx.ittf
    utc time: Tue, 18 May 2021 13:32:19 GMT
*/
export interface ColumnDef {
    id: string;
    label?: string;
    type?: string;
    isKey?: boolean;
}
export interface ListDef {
    id: string;
    title: string;
    hasSearch?: boolean;
    columns: ColumnDef[];
}
export interface ControlDef {
    id: string;
    label?: string;
    type: string;
    options?: SelectOption[];
    isKey?: boolean;
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
export interface SelectOption {
    label: string;
    value: any;
}
