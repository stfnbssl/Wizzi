/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.editor\.wizzi\src\store\types.tsx.ittf
    utc time: Sun, 27 Jun 2021 11:22:09 GMT
*/
import {AppState} from '../features/app/reducer';
import {PackiState} from '../features/packi/reducer';
import {WizziState} from '../features/wizzi/reducer';
//
export type StoreState = { 
    app: AppState;
    packi: PackiState;
    wizzi: WizziState;
    viewer: any;
};
//
export interface ResponsePayload {
    message?: string;
    error?: { 
        [k: string]: any;
    };
}
