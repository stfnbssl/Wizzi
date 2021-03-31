/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\index.tsx.ittf
    utc time: Thu, 25 Mar 2021 16:39:06 GMT
*/
import * as React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import cookies from 'js-cookie';
import {PreferencesProvider, ColorsProvider} from './features/preferences';
// import ServiceWorkerManager from './components/ServiceWorkerManager';
import Router from './containers/Router';
import createStore from './store/createStore';
// import { HelmetProvider } from 'react-helmet-async';
const store = createStore({
    app: {
        
     }, 
    packi: {
        loading: false
     }, 
    wizzi: {
        loading: false, 
        errors: undefined, 
        generatedArtifact: undefined, 
        jobGeneratedArtifacts: {
            
         }, 
        timedServices: {
            
         }
     }
 });
class Index extends React.Component {
    render() {
        return  (
            <React.Fragment>
                {
                    //
                    
                }
                <Provider store={store}>
                    <PreferencesProvider cookies={cookies} search={window.location.search}>
                        <ColorsProvider>
                            <BrowserRouter>
                                <Router userAgent={navigator.userAgent} />
                            </BrowserRouter>
                        </ColorsProvider>
                    </PreferencesProvider>
                </Provider>
                {
                    //
                    
                }
            </React.Fragment>
            )
        ;
    }
}
ReactDOM.render(
<Index />
, document.getElementById('root'))
