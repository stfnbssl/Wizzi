/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\server\src\App.ts.ittf
    utc time: Wed, 09 Jun 2021 05:04:16 GMT
*/
import express from 'express';
import {AppInitializerType} from './features/app';
import {ConfigType} from './features/config';

class App {
    constructor(initValues: AppInitializerType) {
        
        this.config = initValues.config;
        this.port = this.config.port;
        this.app = express();
        ;
        
        initValues.middlewaresPre.forEach(middleware => 
        
            middleware(this.app)
        )
        
        initValues.controllers.forEach((controller) => {
        
            console.log('installing router on path: ', controller.path);
            controller.initialize(initValues);
            this.app.use(controller.path, controller.router);
        }
        )
        
        initValues.middlewaresPost.forEach(middleware => 
        
            middleware(this.app)
        )
    }
    public app: express.Application;
    public config: ConfigType;
    public port: number;
    public server: any;
    public listen(port?: number) {
        var usedPort = port || this.port;
        this.app.listen(usedPort, () => 
        
            console.log(`App listening at http://localhost:${usedPort}`)
        )
    }
}
export default App;
