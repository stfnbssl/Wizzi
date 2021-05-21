/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\client\src\index.tsx.ittf
    utc time: Fri, 21 May 2021 20:28:10 GMT
*/
import cookies from 'js-cookie';
import * as React from 'react';
import ReactDOM from 'react-dom';
import {HelmetProvider} from 'react-helmet-async';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import store, {history} from './store';
import {BrowserRouter} from 'react-router-dom';
import {RouterData, QueryParams} from './features/app';
import Router from './components/Router';

const __INITIAL_DATA__ = {
    data: {
        type: 'success', 
        account: {
            code: 'say("Hello")'
         }
    } as RouterData, 
    queryParams: {
        name: 'simple'
    } as QueryParams
 };

function AccountApp() {

    return  (
        <React.Fragment
        >
            <HelmetProvider
            >
                <Provider
                 store={store}>
                    <BrowserRouter
                    >
                        <Router
                         data={__INITIAL_DATA__.data} queryParams={__INITIAL_DATA__.queryParams} />
                    </BrowserRouter>
                </Provider>
            </HelmetProvider>
        </React.Fragment>
        )
    ;
}
ReactDOM.render(
<AccountApp
 />
, document.getElementById('root'))
