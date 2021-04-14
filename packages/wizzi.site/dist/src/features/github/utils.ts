/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\src\features\github\utils.ts.ittf
    utc time: Wed, 14 Apr 2021 15:53:06 GMT
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
