/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\examples\tau\.wizzi\src\index.js.ittf
    utc time: Mon, 15 Feb 2021 21:56:44 GMT
*/
'use strict';
async function start() {
    let middlewares = [
        ...appMiddlewares
    ];
    let controllers = [];
    const appInitializer = {
        config, 
        controllers, 
        middlewares
    };
    const app = new App(appInitializer);
    app.listen();
}
try {
    start();
} 
catch (ex) {
    console.log(ex);
} 
