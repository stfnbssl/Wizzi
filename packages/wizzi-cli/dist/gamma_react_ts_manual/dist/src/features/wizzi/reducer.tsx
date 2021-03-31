/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\features\wizzi\reducer.tsx.ittf
    utc time: Thu, 25 Mar 2021 16:39:06 GMT
*/
import {Reducer} from 'redux';
import {ActionType, getType} from 'typesafe-actions';
import {serviceTypes, getEventServiceInstance} from '../../services';
import {packiTypes} from '../packi';
import {GeneratedArtifact, JobError} from './types';
import * as wizziActions from './actions';
export interface WizziState {
    loading: boolean;
    generatedArtifact?: GeneratedArtifact;
    jobGeneratedArtifacts?: packiTypes.PackiFiles;
    jobError?: JobError;
    timedServices: { 
        [k: string]: serviceTypes.TimedServiceState;
    };
}
const initialState: WizziState = {
    loading: false, 
    generatedArtifact: undefined, 
    jobGeneratedArtifacts: {
        
     }, 
    timedServices: {
        
     }
 };
export type WizziAction = ActionType<typeof wizziActions>;
const reducer: Reducer<WizziState, WizziAction> = (state = initialState, action) => {
    switch (action.type) {
        case getType(wizziActions.generateArtifactRequest): {
            console.log("wizziActions.generateArtifactRequest");
            return {
                    ...state, 
                    loading: true
                 };
        }
        case getType(wizziActions.generateArtifactSuccess): {
            console.log("wizziActions.generateArtifactSuccess", action);
            if (action.payload.errorLines || action.payload.stack) {
                return {
                        ...state, 
                        loading: false, 
                        generatedArtifact: {
                            isError: true, 
                            errorLines: action.payload.errorLines, 
                            errorInfo: action.payload.info, 
                            errorMessage: action.payload.message, 
                            errorName: action.payload.name, 
                            errorStack: action.payload.stack
                         }
                     };
            }
            else {
                return {
                        ...state, 
                        loading: false, 
                        generatedArtifact: {
                            isError: false, 
                            ...action.payload.generatedArtifact
                         }
                     };
            }
        }
        case getType(wizziActions.generateArtifactError): {
            console.log("wizziActions.generateArtifactError", action);
            return {
                    ...state, 
                    loading: false, 
                    errors: action.payload
                 };
        }
        case getType(wizziActions.executeJobRequest): {
            console.log("wizziActions.executeJobRequest");
            return {
                    ...state, 
                    loading: true
                 };
        }
        case getType(wizziActions.executeJobSuccess): {
            console.log("wizziActions.executeJobSuccess", action);
            if (action.payload.__is_error) {
                return {
                        ...state, 
                        loading: false, 
                        jobGeneratedArtifacts: undefined, 
                        jobError: {
                            errorInfo: action.payload.info, 
                            errorMessage: action.payload.message, 
                            errorName: action.payload.name, 
                            errorStack: action.payload.stack
                         }
                     };
            }
            else {
                return {
                        ...state, 
                        loading: false, 
                        jobGeneratedArtifacts: action.payload.generatedArtifacts, 
                        jobError: undefined
                     };
            }
        }
        case getType(wizziActions.executeJobError): {
            console.log("wizziActions.executeJobError", action);
            return {
                    ...state, 
                    loading: false, 
                    errors: action.payload
                 };
        }
        case getType(wizziActions.setTimedService): {
            console.log("wizziActions.setTimedService", action);
            getEventServiceInstance().setTimed(action.payload.serviceName, action.payload.onOff, action.payload.payload, action.payload.frequence);
            return {
                    ...state, 
                    timedServices: {
                        ...state.timedServices, 
                        [action.payload.serviceName]: {
                            name: action.payload.serviceName, 
                            onOff: action.payload.onOff, 
                            payload: action.payload.payload, 
                            frequence: action.payload.frequence
                         }
                     }
                 };
        }
        default: {
            return state;
        }
    }
}
;
export default reducer;
