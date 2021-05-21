/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\client\src\features\api\fetch.tsx.ittf
    utc time: Fri, 21 May 2021 20:28:10 GMT
*/

export function getData(url: string) {

    return executeFetch(url);
}

export function postData(url: string, data: { 
}) {

    return executeFetch(url, data, {
            method: 'POST'
         });
}

export function putData(url: string, data: { 
}) {

    return executeFetch(url, data, {
            method: 'PUT'
         });
}

export function deleteData(url: string) {

    return executeFetch(url, {}, {
            method: 'DELETE'
         });
}

function executeFetch(url: string, data?: { 
}, options: { 
} | Function, callback?: Function) {

    if (typeof options == 'undefined') {
        callback = data;
        options = {
            method: 'GET'
         };
    }
    else if (typeof callback == 'undefined') {
        callback = options;
    }
    let fetchOptions = {
        method: options.method || "GET"
     };
    if (fetchOptions.method == 'GET' || fetchOptions.method == 'HEAD') {
    }
    else {
        if (typeof data == 'object' && data != null) {
            fetchOptions.body = JSON.stringify(data);
            fetchOptions.headers = {
                'Content-Type': 'application/json'
             };
        }
    }
    console.log('executeFetch', 'url', url, 'fetchOptions', fetchOptions);
    fetchOptions.mode = 'cors';
    fetchOptions.cache = 'no-cache';
    fetchOptions.credentials = 'same-origin';
    fetchOptions.redirect = 'follow';
    fetchOptions.referrerPolicy = 'no-referrer';
    return fetch(url, fetchOptions);
}
