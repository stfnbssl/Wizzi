/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\tau_express\.wizzi\src\features\wizzi\factory.js.ittf
    utc time: Wed, 03 Mar 2021 15:56:02 GMT
*/
'use strict';
import path from 'path';
import wizzi from 'wizzi';
export async function createFilesystemFactory(globalContext) {
    const gc = {};
    return new Promise((resolve, reject) =>
            wizzi.fsFactory({
                plugins: {
                    items: [
                        'wizzi-core', 
                        'wizzi-js', 
                        'wizzi-web'
                    ]
                }, 
                globalContext: Object.assign({}, gc, globalContext || {})
            }, function(err, wf) {
                if (err) {
                    return reject(err);
                }
                resolve(wf)}));
}
