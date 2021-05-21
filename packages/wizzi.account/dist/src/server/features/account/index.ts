/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\server\src\features\account\index.ts.ittf
    utc time: Fri, 21 May 2021 16:01:34 GMT
*/
import {ModelBuilderType, ControllerType} from '../app/types';
import {ProfileController} from './controllers/profile';
const accountModelGetters = {};
const accountModelBuilders: ModelBuilderType[] = [];
const accountControllers: ControllerType[] = [
    new ProfileController()
];
export {accountModelGetters, accountModelBuilders, accountControllers};
