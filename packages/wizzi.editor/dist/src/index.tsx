/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.editor\.wizzi\src\index.tsx.ittf
    utc time: Sun, 27 Jun 2021 11:22:09 GMT
*/
import cookies from 'js-cookie';
import * as React from 'react';
import ReactDOM from 'react-dom';
import {HelmetProvider} from 'react-helmet-async';
import {Provider} from 'react-redux';
import App from './components/App';
import NonExistent from './components/NonExistent';
import {PreferencesProvider} from './features/preferences';
import ThemeProvider from './components/ThemeProvider';
import createStore from './store/createStore';
import type {RouterData, QueryParams} from './features/packi';
declare const __INITIAL_DATA__: { 
    data: any;
    queryParams: any;
};

const store = createStore({
    app: {
        loggedUser: {
            id: 'stfnbssl', 
            uid: 'stfnbssl', 
            username: 'stfnbssl', 
            displayName: 'Stefano Bassoli', 
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
    viewer: null
 });

function AppContainer(props: any) {

    const {
        data, 
        ...rest
     } = props;
    if (data && data.type === 'success') {
        const appProps = {
            ...props, 
            ...rest, 
            query: props.queryParams, 
            packi: data.packi, 
            defaults: data.defaults
         };
        return  (
            <App
             {...appProps} />
            )
        ;
    }
    else {
        return  (
            <NonExistent
             />
            )
        ;
    }
}
function PackiApp() {

    return  (
        <React.Fragment
        >
            <HelmetProvider
            >
                <Provider
                 store={store}>
                    <PreferencesProvider
                     cookies={cookies}>
                        <ThemeProvider
                        >
                            <AppContainer
                             data={__INITIAL_DATA__.data} queryParams={__INITIAL_DATA__.queryParams} />
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
