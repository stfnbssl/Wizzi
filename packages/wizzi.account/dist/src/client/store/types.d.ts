/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\client\src\store\types.d.ts.ittf
    utc time: Tue, 25 May 2021 15:10:46 GMT
*/
import {StateType, ActionType} from 'typesafe-actions';
declare module 'ReduxAppTypes' {
    export type Store = StateType<typeof import('./index').default>;
    export type RootAction = ActionType<typeof import('./root-action').default>;
    export type RootState = StateType<ReturnType<typeof import('./root-reducer').default>>;
}
declare module 'typesafe-actions' {
    interface Types {
        RootAction: ActionType<typeof import('./root-action').default>;
    }
}
