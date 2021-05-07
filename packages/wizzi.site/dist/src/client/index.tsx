/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\src\index.tsx.ittf
    utc time: Fri, 07 May 2021 18:42:12 GMT
*/
import cookies from 'js-cookie';
import * as React from 'react';
import ReactDOM from 'react-dom';
import {HelmetProvider} from 'react-helmet-async';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {PreferencesProvider} from './features/preferences';
import Router from './components/Router';
import ThemeProvider from './components/ThemeProvider';
import createStore from './store/createStore';
import type {RouterData, QueryParams} from './features/packi';
const __INITIAL_DATA__ = {
    data: {
        type: 'success', 
        defaults: {
            name: 'MyPackiName', 
            channel: 'MyPackiChannel'
         }
    } as RouterData, 
    queryParams: {
        
     }, 
    splitTestSettings: {
        "defaultConnectionMethod": "account", 
        "authFlow": "save2", 
        "snackFirstSeen": "2021-04-28"
     }
 };

const store = createStore({
    app: {
        loggedUser: {
            id: 'Stefi', 
            uid: '0001', 
            username: 'stefi un', 
            displayName: 'stefi dn', 
            picture: 'https://avatars.githubusercontent.com/u/728956?s=400&v=4'
         }
     }, 
    packi: {
        loading: false
     }, 
    wizzi: {
        loading: false, 
        jobError: undefined, 
        generatedArtifact: undefined, 
        jobGeneratedArtifacts: {
            
         }, 
        timedServices: {
            
         }
     }, 
    splitTestSettings: __INITIAL_DATA__.splitTestSettings, 
    viewer: null
 });

function PackiApp() {

    return  (
        <React.Fragment
        >
            <HelmetProvider
            >
                <Provider
                 store={store}>
                    <PreferencesProvider
                     cookies={cookies} queryParams={__INITIAL_DATA__.queryParams}>
                        <ThemeProvider
                        >
                            <BrowserRouter
                            >
                                <Router
                                 data={__INITIAL_DATA__.data} queryParams={__INITIAL_DATA__.queryParams} userAgent={navigator.userAgent} />
                            </BrowserRouter>
                        </ThemeProvider>
                    </PreferencesProvider>
                </Provider>
            </HelmetProvider>
        </React.Fragment>
        )
    ;
}
ReactDOM.render(
<PackiApp
 />
, document.getElementById('root'))
