/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\tau_express\.wizzi\src\site\webpacks\common\apiFetch.js.ittf
    utc time: Thu, 04 Mar 2021 19:31:00 GMT
*/
'use strict';

export function getData(url) {
    return executeFetch(url);
}

export function postData(url = '', data = {}) {
    return executeFetch(url, data, {
            method: 'POST'
        });
}

export function putData(url = '', data = {}) {
    return executeFetch(url, data, {
            method: 'PUT'
        });
}

export function deleteData(url = '', data = {}) {
    return executeFetch(url, data, {
            method: 'DELETE'
        });
}

function executeFetch(url, data, options, callback) {
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
