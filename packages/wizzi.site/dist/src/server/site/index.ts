/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\server\src\site\index.ts.ittf
    utc time: Sat, 05 Jun 2021 04:08:41 GMT
*/
import {ControllerType} from '../features/app';
import {HomeController} from './controllers/home';
import {PackiController} from './controllers/packi';
const siteControllers: ControllerType[] = [
    new HomeController(), 
    new PackiController()
];
export {siteControllers};
