/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\store\types.tsx.ittf
    utc time: Wed, 24 Mar 2021 16:19:16 GMT
*/
import {AppState} from '../features/app/reducer';
import {PackiState} from '../features/packi/reducer';
import {WizziState} from '../features/wizzi/reducer';
export type StoreState = { 
    app: AppState;
    packi: PackiState;
    wizzi: WizziState;
};
export interface ResponsePayload {
    error?: boolean;
    code?: string;
    message?: string;
}
