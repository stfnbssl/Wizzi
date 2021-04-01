/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\eta_express_ts\.wizzi\src\site\index.ts.ittf
    utc time: Thu, 01 Apr 2021 15:10:45 GMT
*/
import {ControllerType} from '../features/app';
import {HomeController} from './controllers/home';
import {WizziController} from './controllers/wizzi';
const siteControllers: ControllerType[] = [
    new HomeController(), 
    new WizziController()
];
export {siteControllers};
