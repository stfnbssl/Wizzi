/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\src\features\wizzi\reducer.tsx.ittf
    utc time: Fri, 07 May 2021 18:42:12 GMT
*/
import {Reducer} from 'redux';
import {ActionType, getType} from 'typesafe-actions';
import {TimedServiceState, getEventServiceInstance} from '../../services';
import {PackiFiles} from '../packi';
import {GeneratedArtifact, JobError} from './types';
import * as wizziActions from './actions';

export interface WizziState {
    loading: boolean;
    generatedArtifact?: GeneratedArtifact;
    jobGeneratedArtifacts?: PackiFiles;
    jobError?: JobError;
    timedServices: { 
        [k: string]: TimedServiceState;
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
            if (action.payload.error) {
                return {
                        ...state, 
                        loading: false, 
                        generatedArtifact: {
                            isError: true, 
                            errorLines: action.payload.error['lines'], 
                            errorInfo: action.payload.error['info'], 
                            errorMessage: action.payload.message, 
                            errorName: action.payload.error['name'], 
                            errorStack: action.payload.error['stack']
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
            if (action.payload.error) {
                return {
                        ...state, 
                        loading: false, 
                        jobGeneratedArtifacts: undefined, 
                        jobError: {
                            errorLines: action.payload.error['lines'], 
                            errorInfo: action.payload.error['info'], 
                            errorMessage: action.payload.message, 
                            errorName: action.payload.error['name'], 
                            errorStack: action.payload.error['stack']
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
