/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\server\src\site\index.ts.ittf
    utc time: Tue, 25 May 2021 12:34:40 GMT
*/
import {ControllerType} from '../features/app';
import {HomeController} from './controllers/home';
import {WizziController} from './controllers/wizzi';
import {AccountController} from './controllers/account';
import {BlogController} from './controllers/blog';
const siteControllers: ControllerType[] = [
    new HomeController(), 
    new WizziController(), 
    new AccountController(), 
    new BlogController()
];
export {siteControllers};
