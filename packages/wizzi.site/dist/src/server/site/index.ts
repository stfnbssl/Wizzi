/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\server\src\site\index.ts.ittf
    utc time: Mon, 10 May 2021 17:56:08 GMT
*/
import {ControllerType} from '../features/app';
import {HomeController} from './controllers/home';
import {WizziController} from './controllers/wizzi';
import {PackiController} from './controllers/packi';
const siteControllers: ControllerType[] = [
    new HomeController(), 
    new WizziController(), 
    new PackiController()
];
export {siteControllers};
