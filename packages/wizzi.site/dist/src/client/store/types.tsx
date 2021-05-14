/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\src\store\types.tsx.ittf
    utc time: Tue, 11 May 2021 04:47:43 GMT
*/
import {AppState} from '../features/app/reducer';
import {PackiState} from '../features/packi/reducer';
import {WizziState} from '../features/wizzi/reducer';
//
export type StoreState = { 
    app: AppState;
    packi: PackiState;
    wizzi: WizziState;
    splitTestSettings: any;
    viewer: any;
};
//
export interface ResponsePayload {
    message?: string;
    error?: { 
        [k: string]: any;
    };
}
