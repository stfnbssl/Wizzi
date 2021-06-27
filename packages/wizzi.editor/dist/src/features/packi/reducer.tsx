/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.editor\.wizzi\src\features\packi\reducer.tsx.ittf
    utc time: Sun, 27 Jun 2021 11:22:09 GMT
*/
import {Reducer} from 'redux';
import {ActionType, getType} from 'typesafe-actions';
import {GitRepositoryMeta} from '../github';
import {Packi} from './types';
import * as packiActions from './actions';
import {mixPreviousAndGeneratedPackiFiles} from '../file/convertFileStructure';
export interface PackiState {
    loading: boolean;
    errors?: string;
    packiNames?: string[];
    currentPacki?: Packi;
    packiTemplateNames?: string[];
    ownedGitRepositories?: GitRepositoryMeta[];
    generatedArtifactContent?: string;
}
const initialState: PackiState = {
    loading: false, 
    errors: undefined, 
    packiNames: undefined, 
    currentPacki: undefined, 
    packiTemplateNames: undefined, 
    ownedGitRepositories: undefined, 
    generatedArtifactContent: undefined
 };
export type PackiAction = ActionType<typeof packiActions>;
const reducer: Reducer<PackiState, PackiAction> = (state = initialState, action) => {

    switch (action.type) {
        case getType(packiActions.fetchPackiListRequest): {
            console.log("packiActions.fetchPackiListRequest");
            return {
                    ...state, 
                    loading: true
                 };
        }
        case getType(packiActions.fetchPackiListSuccess): {
            console.log("packiActions.fetchPackiListSuccess", action);
            return {
                    ...state, 
                    loading: false, 
                    packiNames: action.payload.packiNames
                 };
        }
        case getType(packiActions.fetchPackiListError): {
            console.log("packiActions.fetchPackiListError", action);
            return {
                    ...state, 
                    loading: false, 
                    errors: action.payload
                 };
        }
        case getType(packiActions.initPackiRequest): {
            console.log("packiActions.initPackiRequest");
            return {
                    ...state, 
                    loading: true
                 };
        }
        case getType(packiActions.initPackiSuccess): {
            console.log("packiActions.initPackiSuccess");
            return {
                    ...state, 
                    loading: false
                 };
        }
        case getType(packiActions.initPackiError): {
            console.log("packiActions.initPackiRequest");
            return {
                    ...state, 
                    loading: false
                 };
        }
        case getType(packiActions.selectPackiRequest): {
            console.log("packiActions.selectPackiRequest");
            return {
                    ...state, 
                    loading: true
                 };
        }
        case getType(packiActions.selectPackiSuccess): {
            console.log("packiActions.selectPackiSuccess", action);
            return {
                    ...state, 
                    loading: false, 
                    currentPacki: {
                        id: action.payload.id, 
                        files: action.payload.files
                     }
                 };
        }
        case getType(packiActions.selectPackiError): {
            console.log("packiActions.selectPackiError", action);
            return {
                    ...state, 
                    loading: false, 
                    errors: action.payload
                 };
        }
        case getType(packiActions.createPackiRequest): {
            console.log("packiActions.createPackiRequest", action);
            return {
                    ...state, 
                    loading: true, 
                    tobeCreatedPackiName: action.payload.id
                 };
        }
        case getType(packiActions.createPackiSuccess): {
            console.log("packiActions.createPackiSuccess", action);
            return {
                    ...state, 
                    loading: false, 
                    currentPacki: {
                        id: action.payload.id, 
                        files: action.payload.files
                     }, 
                    packiNames: [
                        ...state.packiNames || [], 
                        action.payload.id
                    ]
                 };
        }
        case getType(packiActions.createPackiError): {
            console.log("packiActions.createPackiError", action);
            return {
                    ...state, 
                    loading: false, 
                    errors: action.payload
                 };
        }
        case getType(packiActions.savePackiSuccess): {
            console.log("packiActions.savePackiSuccess", action);
            return {
                    ...state, 
                    currentPacki: {
                        id: action.payload.id, 
                        files: action.payload.packiEntryFiles
                     }
                 };
        }
        case getType(packiActions.deletePackiRequest): {
            console.log("packiActions.deletePackiRequest", action);
            return {
                    ...state, 
                    loading: true, 
                    tobeDeletedPackiId: action.payload.id
                 };
        }
        case getType(packiActions.deletePackiSuccess): {
            console.log("packiActions.deletePackiSuccess", action);
            return {
                    ...state, 
                    loading: false, 
                    packiNames: state.packiNames && state.packiNames.filter(item => 
                    
                        item !== action.payload.id
                    )
                 };
        }
        case getType(packiActions.deletePackiError): {
            console.log("packiActions.deletePackiError", action);
            return {
                    ...state, 
                    loading: false, 
                    errors: action.payload
                 };
        }
        case getType(packiActions.fetchPackiTemplateListRequest): {
            console.log("packiActions.fetchPackiTemplateListRequest");
            return {
                    ...state, 
                    loading: true
                 };
        }
        case getType(packiActions.fetchPackiTemplateListSuccess): {
            console.log("packiActions.fetchPackiTemplateListSuccess", action);
            return {
                    ...state, 
                    loading: false, 
                    packiTemplateNames: action.payload.packiNames
                 };
        }
        case getType(packiActions.fetchPackiTemplateListError): {
            console.log("packiActions.fetchPackiTemplateListError", action);
            return {
                    ...state, 
                    loading: false, 
                    errors: action.payload
                 };
        }
        case getType(packiActions.fetchOwnedGitRepositoriesRequest): {
            console.log("packiActions.fetchOwnedGitRepositoriesRequest");
            return {
                    ...state, 
                    loading: true
                 };
        }
        case getType(packiActions.fetchOwnedGitRepositoriesSuccess): {
            console.log("packiActions.fetchOwnedGitRepositoriesSuccess", action);
            return {
                    ...state, 
                    loading: false, 
                    ownedGitRepositories: action.payload.repositories
                 };
        }
        case getType(packiActions.fetchOwnedGitRepositoriesError): {
            console.log("packiActions.fetchOwnedGitRepositoriesError", action);
            return {
                    ...state, 
                    loading: false, 
                    errors: action.payload
                 };
        }
        case getType(packiActions.cloneGitRepositoryRequest): {
            console.log("packiActions.cloneGitRepositoryRequest");
            return {
                    ...state, 
                    loading: true
                 };
        }
        case getType(packiActions.cloneGitRepositorySuccess): {
            console.log("packiActions.cloneGitRepositorySuccess", action);
            return {
                    ...state, 
                    loading: false, 
                    currentPacki: {
                        id: `${action.payload.repository.owner}_${action.payload.repository.name}`, 
                        files: action.payload.repository.files
                     }, 
                    currentPackiTemplate: undefined
                 };
        }
        case getType(packiActions.cloneGitRepositoryError): {
            console.log("packiActions.cloneGitRepositoryError", action);
            return {
                    ...state, 
                    loading: false, 
                    errors: action.payload
                 };
        }
        case getType(packiActions.executeJobSuccess): {
            console.log("packiActions.executeJobSuccess", action);
            const newPacki = {
                ...state.currentPacki, 
                files: mixPreviousAndGeneratedPackiFiles(action.payload.previousArtifacts, action.payload.generatedArtifacts)
             };
            console.log("packiActions.executeJobSuccess.newPacki", newPacki);
            if (!action.payload.error) {
                return {
                        ...state, 
                        currentPacki: {
                            ...state.currentPacki, 
                            files: mixPreviousAndGeneratedPackiFiles(action.payload.previousArtifacts, action.payload.generatedArtifacts)
                        } as Packi
                     };
            }
            else {
                return state;
            }
        }
        default: {
            return state;
        }
    }
}
;
export default reducer;
