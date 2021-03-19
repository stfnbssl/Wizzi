/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\App.tsx.ittf
    utc time: Fri, 19 Mar 2021 20:08:21 GMT
*/
import React, {FunctionComponent} from 'react';

import logo from './logo.svg';
import './App.css';
import {WidgetsDemo} from './widgets/demo';
type AppProps = { 
} 
;

export const App: FunctionComponent<AppProps> = () => {
    return  (
            <div className="App">
                <header className="App-header">
                    <img src={logo.toString()} className="App-logo" alt="logo">
                    </img>
                
                    <p>
                    \n          Edit<code>
                        src/App.tsx</code>
                    
                    and save to reload.\n</p>
                
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    \n          Learn React\n</a>
                
                </header>
            
                <section>
                    <WidgetsDemo title="Some example widgets">
                    </WidgetsDemo>
                
                </section>
            
            </div>
        )
    ;
}
;
export default App;
