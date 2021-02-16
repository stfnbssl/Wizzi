/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\examples\tau\.wizzi\src\features\netlify\router.js.ittf
    utc time: Tue, 16 Feb 2021 20:56:05 GMT
*/
'use strict';
const path = require('path');
const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    res.write('<h1>Hello from Express.js!</h1><div><a href="/.netlify/functions/server/another">Another</a></div>');
    res.end();
})
router.get('/another', (req, res) =>
    res.json({
        route: req.originalUrl
    }))
export {router as NetlifyRouter};
