/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\features\wizzi\actions.tsx.ittf
    utc time: Thu, 25 Mar 2021 16:39:06 GMT
*/
import {createStandardAction} from 'typesafe-actions';
import {storeTypes} from '../../store';
import {packiTypes} from '../packi';
import {GeneratedArtifact} from './types';
const GENERATE_ARTIFACT_REQUEST = '@@wizzi/GENERATE_ARTIFACT_REQUEST';
const GENERATE_ARTIFACT_SUCCESS = '@@wizzi/GENERATE_ARTIFACT_SUCCESS';
const GENERATE_ARTIFACT_ERROR = '@@wizzi/GENERATE_ARTIFACT_ERROR';
const EXECUTE_JOB_REQUEST = '@@wizzi/EXECUTE_JOB_REQUEST';
const EXECUTE_JOB_SUCCESS = '@@wizzi/EXECUTE_JOB_SUCCESS';
const EXECUTE_JOB_ERROR = '@@wizzi/EXECUTE_JOB_ERROR';
const SET_TIMED_SERVICE = '@@wizzi/SET_TIMED_SERVICE';
export interface ArtifactRequestPayload {
    filePath: string;
    files: packiTypes.PackiFiles;
}
export interface ArtifactResponsePayload extends storeTypes.ResponsePayload {
    generatedArtifact: GeneratedArtifact;
}
export interface JobRequestPayload {
    files: packiTypes.PackiFiles;
}
export interface JobResponsePayload extends storeTypes.ResponsePayload {
    generatedArtifacts: packiTypes.PackiFiles;
}
export interface SetTimedServicePayload {
    serviceName: string;
    onOff: boolean;
    payload?: any;
    frequence?: number;
}
export const generateArtifactRequest = createStandardAction(GENERATE_ARTIFACT_REQUEST)<ArtifactRequestPayload>();
export const generateArtifactSuccess = createStandardAction(GENERATE_ARTIFACT_SUCCESS)<ArtifactResponsePayload>();
export const generateArtifactError = createStandardAction(GENERATE_ARTIFACT_ERROR)<string>();
export const executeJobRequest = createStandardAction(EXECUTE_JOB_REQUEST)<JobRequestPayload>();
export const executeJobSuccess = createStandardAction(EXECUTE_JOB_SUCCESS)<JobResponsePayload>();
export const executeJobError = createStandardAction(EXECUTE_JOB_ERROR)<string>();
export const setTimedService = createStandardAction(SET_TIMED_SERVICE)<SetTimedServicePayload>();
