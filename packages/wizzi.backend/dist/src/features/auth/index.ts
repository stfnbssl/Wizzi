/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.backend\.wizzi\src\features\auth\index.ts.ittf
    utc time: Mon, 28 Jun 2021 20:09:52 GMT
*/
import {ModelBuilderType, ControllerType} from '../app/types';
import * as authTypes from './types';
import {UserModelBuilder, GetUserModel} from './mongo/user';
import {TokenModelBuilder, GetTokenModel} from './mongo/token';
import {AccountModelBuilder, GetAccountModel} from './mongo/account';
import {AuthenticationController} from './controllers/authentication';
import {ensureAuthenticated} from './ensureAuthenticated';
import * as authManager from './manager';

const authModelGetters = {
    GetUserModel, 
    GetTokenModel, 
    GetAccountModel
 };

const authenticationModelBuilders: ModelBuilderType[] = [
    UserModelBuilder, 
    TokenModelBuilder, 
    AccountModelBuilder
];

const authorizationModelBuilders: ModelBuilderType[] = [];

const authenticationControllers: ControllerType[] = [
    new AuthenticationController()
];

const authorizationControllers: ControllerType[] = [];

export {authTypes, authModelGetters, authenticationModelBuilders, authorizationModelBuilders, authenticationControllers, authorizationControllers, ensureAuthenticated, authManager};
