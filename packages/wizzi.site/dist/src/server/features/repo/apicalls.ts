/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\server\src\features\repo\apicalls.ts.ittf
    utc time: Sat, 29 May 2021 11:12:38 GMT
*/
import fetch from 'node-fetch';

export async function getRepositories(accessToken: string):  Promise<any> {

    return fetch(`https://api.github.com/user/repos`, getOptions(accessToken)).then(response => 
        
            response.json()
        ).then((responseData) => {
        
            console.log('getRepositories.responseData', responseData);
            return responseData;
        }
        )
    ;
}

function getOptions(accessToken: string) {

    return {
            method: 'GET', 
            headers: headers(accessToken)
         };
}

function postOptions(accessToken: string) {

    return {
            method: 'POST', 
            headers: headers(accessToken)
         };
}

function headers(accessToken: string) {

    return {
            'Accept': 'application/vnd.github.v3+json', 
            'Content-Type': 'application/json', 
            'Authorization': 'token ' + accessToken
         };
}
