/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\server\src\features\auth\index.ts.ittf
    utc time: Sat, 29 May 2021 11:12:38 GMT
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
