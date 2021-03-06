/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\sigma_express_auth\.wizzi\src\App.js.ittf
    utc time: Sat, 06 Mar 2021 13:38:40 GMT
*/
'use strict';
import express from 'express';
import fs from 'fs';
import https from 'https';

const ssl_key = fs.readFileSync('server.key');
const ssl_cert = fs.readFileSync('server.cert');

class App {
    constructor(initValues) {
        
        this.config = initValues.config;
        this.port = this.config.port;
        this.app = express();
        this.server = https.createServer({
            key: ssl_key, 
            cert: ssl_cert
        }, this.app);
        
        initValues.middlewaresPre.forEach((middleware) =>
            middleware(this.app))
        
        initValues.controllers.forEach((controller) => {
            console.log('installing router on path: ', controller.path);
            controller.initialize(initValues);
            this.app.use(controller.path, controller.router);
        })
        
        initValues.middlewaresPost.forEach((middleware) =>
            middleware(this.app))
    }
    listen(port) {
        var usedPort = port || this.port;
        this.server.listen(usedPort, () =>
            console.log(`App listening at http://localhost:${usedPort}`))
    }
}
export default App;
