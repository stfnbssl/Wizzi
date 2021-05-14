/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\client\src\index.tsx.ittf
    utc time: Fri, 14 May 2021 03:50:01 GMT
*/
import cookies from 'js-cookie';
import * as React from 'react';
import ReactDOM from 'react-dom';
import {HelmetProvider} from 'react-helmet-async';
import {BrowserRouter} from 'react-router-dom';
import {RouterData, QueryParams} from './features/app';
import Router from './components/Router';

const __INITIAL_DATA__ = {
    data: {
        RouterData, 
        type: 'success', 
        account: {
            code: 'say("Hello")'
         }
     }, 
    queryParams: {
        QueryParams, 
        name: 'simple'
     }
 };

function AccountApp() {

    return  (
        <React.Fragment
        >
            <HelmetProvider
            >
                <BrowserRouter
                >
                    <Router
                     data={__INITIAL_DATA__.data} queryParams={__INITIAL_DATA__.queryParams} />
                </BrowserRouter>
            </HelmetProvider>
        </React.Fragment>
        )
    ;
}
ReactDOM.render(
<AccountApp
 />
, document.getElementById('root'))
