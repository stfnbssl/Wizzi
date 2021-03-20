/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\features\packi\localManager.tsx.ittf
    utc time: Sat, 20 Mar 2021 13:20:50 GMT
*/
import {LocalPackiData} from './types';
export function savePackiData(packiId: string, packiData: LocalPackiData) {
    window.localStorage.setItem('packi_' + packiId, JSON.stringify(packiData));
}
export function getPackiData(packiId: string):  LocalPackiData | null {
    const packiData = window.localStorage.getItem('packi_' + packiId);
    return packiData ? JSON.parse(packiData) : null;
}
export function deletePackiData(packiId: string) {
    window.localStorage.removeItem('packi_' + packiId);
}
export function packiCreatedFromTemplate(packiId: string):  LocalPackiData {
    const packiData: LocalPackiData = {
        origin: 'template', 
        id: packiId, 
        owner: undefined, 
        repoName: undefined, 
        branch: undefined, 
        localCreatedAt: Date.now(), 
        githubCreatedAt: -1, 
        lastCommitAt: -1
    };
    savePackiData(packiId, packiData);
    return packiData;
}
export function packiCreatedFromGithubClone(owner: string, repoName: string):  LocalPackiData {
    const packiId = `${owner}_${repoName}`;
    const packiData: LocalPackiData = {
        origin: 'github', 
        id: packiId, 
        owner, 
        repoName, 
        branch: 'master', 
        localCreatedAt: Date.now(), 
        githubCreatedAt: -1, 
        lastCommitAt: -1
    };
    savePackiData(packiId, packiData);
    return packiData;
}
export function packiCommited(packiId: string) {
    const packiData: LocalPackiData | null = getPackiData(packiId);
    if (packiData) {
        packiData.lastCommitAt = Date.now();
        savePackiData(packiId, packiData);
    }
}
export function setSelectedPacki(packiId: string) {
    window.localStorage.setItem('selectedPacki', packiId);
}
export function getSelectedPacki():  string | null {
    return window.localStorage.getItem('selectedPacki');
}
