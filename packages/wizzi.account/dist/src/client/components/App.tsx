/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\client\src\components\App.tsx.ittf
    utc time: Fri, 21 May 2021 20:28:10 GMT
*/
import * as React from 'react';
// Styles
import {StyleSheet, css} from 'aphrodite';
// Features
import {QueryParams} from '../features/app';
import {Account} from '../features/account';
type Params = { 
    id?: string;
    username?: string;
    projectName?: string;
};
type AppProps = { 
    account?: Account;
    history: { 
        push: (props: { 
            pathname: string;
            search: string;
        }) => void;
    };
    match: { 
        params: Params;
    };
    location: { 
        search: string;
    };
    query: QueryParams;
};
type State = { 
    selected: string;
};
class AppComp extends React.Component<AppProps, State> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            selected: 'first'
         };
    }
    render() {
        if (this.props && this.state) {
            return  (
                <div
                >
                    <pre
                    >
                        <code
                        >
                            {JSON.stringify(this.props, null, 2)}
                        </code>
                    </pre>
                    <pre
                    >
                        <code
                        >
                            {JSON.stringify(this.state, null, 2)}
                        </code>
                    </pre>
                </div>
                )
            ;
        }
        else {
            return  (
                <div
                >
                    Not ready
                </div>
                )
            ;
        }
    }
}
export default AppComp;
