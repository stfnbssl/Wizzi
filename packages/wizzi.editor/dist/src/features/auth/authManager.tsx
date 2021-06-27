/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.editor\.wizzi\src\features\auth\authManager.tsx.ittf
    utc time: Sun, 27 Jun 2021 11:22:09 GMT
*/
import ExtendableError from 'es6-error';
import {getAuthStorageKey} from './config';
import {StorageHandler} from '../storage';
import {Auth0UserData, Auth0TokenData} from './types';

export default class AuthenticationManager {
        constructor() {
            this.topLevelDomainCookie = new StorageHandler();
        }
        private topLevelDomainCookie: StorageHandler;
        private profilePromise?: Promise<Auth0UserData | null | undefined>;
        private getCookie(name: string):  string | null | undefined {
            return this.topLevelDomainCookie.getItem(name);
        }
        async getProfile() {
            if (this.profilePromise) {
                return this.profilePromise;
            }
            this.profilePromise = this._getUserProfile();
            try {
                const profile = await this.profilePromise;
                this.profilePromise = undefined;
                return profile;
            } 
            catch (err) {
                this.profilePromise = undefined;
                throw err;
            } 
        }
        get sessionSecret():  string | null {
            const rawSessionData = this.getCookie('sessionSecret');
            if (!rawSessionData) {
                return null;
            }
            try {
                const sessionSecret = JSON.parse(rawSessionData);
                if (Date.now() >= sessionSecret.expires_at) {
                    throw new Error();
                }
                return JSON.stringify(sessionSecret);
            } 
            catch (e) {
                return null;
            } 
        }
        get accessToken():  string | null {
            const tokenData = this.getTokenData();
            if (tokenData) {
                if (this.isTokenValid(tokenData)) {
                    return tokenData.access_token;
                }
                return null;
            }
            return null;
        }
        get idToken():  string | null {
            const tokenData = this.getTokenData();
            if (tokenData) {
                if (this.isTokenValid(tokenData)) {
                    return tokenData.id_token;
                }
                return null;
            }
            return null;
        }
        private isTokenValid(tokenData: Auth0TokenData):  boolean {
            return Date.now() < tokenData.expires_at;
        }
        private getTokenData():  Auth0TokenData | undefined | null {
            const rawTokenData = this.getCookie('tokenData');
            if (rawTokenData) {
                try {
                    return JSON.parse(rawTokenData);
                } 
                catch (e) {
                    return null;
                } 
            }
            return null;
        }
        _getUserProfile = _handleApiErrors(async () => {
        
            
            // if auth0 token set and session secret is missing, return null
            const {
                idToken, 
                sessionSecret
             } = this;
            if (!idToken && !sessionSecret) {
                return null;
            }
            const result: { 
                data?: Auth0UserData;
            } = await _performApiRequest(`userInfo`, null, {
                    method: 'GET', 
                    headers: {
                        ...((sessionSecret ? {
                                    'Expo-Session': sessionSecret
                                 } : {}))
                        , 
                        ...((idToken ? {
                                    Authorization: `Bearer ${idToken}`
                                 } : {}))
                        
                     }
                 });
            return result.data;
        }
        );
    }

function _handleApiErrors<F extends Function>(fn: F):  F {

    
    // @ts-ignore
    return async (args) => { 
            const ourFault = 'Something on our end broke! We are so sorry about this. Try again later';
            try {
                const response: any = await fn(...args);
                if (!response) {
                    throw new GenericError();
                }
                if (!!response.errors && response.errors.length) {
                    const error = response.errors[0];
                    const errorMessage = error.details ? error.details.message : error.message;
                    throw new ApiError();
                }
                return response;
            } 
            catch (e) {
                if (e instanceof ApiError || e instanceof GenericError) {
                    throw e// eslint-disable-next-line @typescript-eslint/no-throw-literal
                    ;
                }
                throw new GenericError();
            } 
        }
    ;
    
}

/**
    // 
    // Generic helper method to perform a request to the Wizzi API
    // 
*/
async function _performApiRequest<T>(route: string, body: object | null, options?: { 
    method: 'GET' | 'POST';
    headers?: { 
        [key: string]: string;
    };
}):  Promise<T> {

    const customHeaders = options?.headers ?? {};
    if (options) {
        delete options.headers
    }
    
    const response = await fetch(`${process.env.API_SERVER_URL}/--/api/v2/auth/${route}`, {
            method: 'POST', 
            headers: {
                Accept: 'application/json', 
                'Content-Type': 'application/json', 
                ...customHeaders
             }, 
            body: body && JSON.stringify({
                ...body
             }), 
            ...((options ?? {}))
            
         });
    return response.json();
}

class GenericError extends ExtendableError {
}

class ApiError extends ExtendableError {
}
