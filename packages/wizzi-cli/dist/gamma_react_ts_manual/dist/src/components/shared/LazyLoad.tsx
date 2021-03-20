/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\shared\LazyLoad.tsx.ittf
    utc time: Sat, 20 Mar 2021 13:20:50 GMT
*/
import * as React from 'react';
type Props<T> = { 
    load: () => Promise<{ 
        default: T;
    } 
    >;
    children: (props: { 
        loaded: false;
        data: null;
    } 
     | { 
        loaded: true;
        data: T;
    } 
    ) => any;
} 
;
type State<T> = { 
    data: T | null;
} 
;
export default class LazyLoad<T> extends React.Component<Props<T>, State<T>> {
        state: State<T> = {
            data: null
        };
        componentDidMount() {
            this._load();
        }
        _load = async () => {
            let data: any = await this.props.load();
            if (data.__esModule) {
                data = data.default;
            }
            this.setState({
                data
            })
        }
        ;
        render() {
            return this.props.children(this.state.data ? {
                        loaded: true, 
                        data: this.state.data
                    } : {
                        loaded: false, 
                        data: null
                    });
        }
    }
