/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\server\src\features\github\utils.ts.ittf
    utc time: Sat, 29 May 2021 11:12:38 GMT
*/
import {commonTypes} from '../../common';
import {GithubApiRepository} from './types';

export function apiRepositoryToMeta(apirepo: GithubApiRepository):  commonTypes.GitRepositoryMeta {

    
    // TODO implement branches
    return {
            owner: apirepo.owner.login, 
            name: apirepo.name, 
            description: apirepo.description, 
            branches: [
                'master'
            ]
         };
}
