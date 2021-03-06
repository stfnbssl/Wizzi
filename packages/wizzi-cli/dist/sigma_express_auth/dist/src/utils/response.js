/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\sigma_express_auth\.wizzi\src\utils\response.js.ittf
    utc time: Sat, 06 Mar 2021 13:38:40 GMT
*/
'use strict';
export const sendHtml = (res, content) =>
    sendContent(res, 'text/html', content);
function sendContent(res, contentType, content) {
    res.writeHead(200, {
        'Content-Type': contentType, 
        'Content-Length': content ? content.length : 0
    })
    res.end(content);
}
export const sendFailure = (res, error, status) => {
    res.status(error && error.status ? error.status : (status || 500))
    res.type('application/json');
    res.send(error);
};
export const sendSuccess = (res, message) => {
    res.status(200);
    res.type('application/json');
    res.send(message);
};
export function sendPromiseResult(res, message) {
    message.then((result) => {
        // log 'sendPromiseResult.ok', result
        sendSuccess(res, result);
    }).catch((err) => {
        // log 'sendPromiseResult.err', err
        sendFailure(res, err, 500);
    })
}
export function sendPromiseLikeResult(res, message) {
    message.then((result) => {
        // log 'sendPromiseLikeResult.ok', result
        sendSuccess(res, result);
    })
}
