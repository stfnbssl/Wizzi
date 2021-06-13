/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\server\src\features\wizzi\index.ts.ittf
    utc time: Wed, 09 Jun 2021 05:04:16 GMT
*/
import {ControllerType} from '../app/types';
import * as wizziTypes from './types';
import * as WizziFactory from './factory';
import * as wizziProds from './productions';
import {ProductionsController} from './controllers/productions';

const wizziControllers: ControllerType[] = [
    new ProductionsController()
];
export {wizziTypes, wizziProds, WizziFactory, wizziControllers};
