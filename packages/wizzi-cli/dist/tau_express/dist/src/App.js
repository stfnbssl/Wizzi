/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\tau_express\.wizzi\src\App.js.ittf
    utc time: Thu, 04 Mar 2021 19:31:00 GMT
*/
'use strict';
import express from 'express';
class App {
    constructor(initValues) {
        this.config = initValues.config;
        this.port = this.config.port;
        this.app = express();
        initValues.middlewares.forEach((middleware) =>
            middleware(this.app))
        initValues.controllers.forEach((controller) => {
            console.log('installing router on path: ', controller.path);
            controller.initialize(initValues);
            this.app.use(controller.path, controller.router);
        })
    }
    listen(port) {
        var usedPort = port || this.port;
        this.app.listen(usedPort, () =>
            console.log(`App listening at http://localhost:${usedPort}`))
    }
}
export default App;
