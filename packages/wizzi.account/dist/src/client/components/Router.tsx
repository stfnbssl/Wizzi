/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\client\src\components\Router.tsx.ittf
    utc time: Fri, 14 May 2021 03:50:01 GMT
*/
import * as React from 'react';
import {Switch, Route} from 'react-router-dom';
import type {RouterData, QueryParams} from '../features/app';
import App from './App';
import NonExistent from './NonExistent';

type RouterProps = { 
    data: RouterData;
    queryParams: QueryParams;
};

export default class Router extends React.Component<RouterProps> {
        _renderRoute = (props: any) => {
            console.log('Router', 'props', props, 'this.props', this.props);
            const {
                data, 
                ...rest
             } = this.props;
            if (data && data.type === 'success') {
                const appProps = {
                    ...props, 
                    ...rest, 
                    query: this.props.queryParams, 
                    account: data.account
                 };
                console.log('Router', 'appProps', appProps);
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
        };
        render() {
            return  (
                <Switch
                >
                    <Route
                     exact path="/@:username/:projectName+" render={this._renderRoute} />
                    <Route
                     exact path="/:id" render={this._renderRoute} />
                    <Route
                     exact path="/" render={this._renderRoute} />
                    <Route
                     component={NonExistent} />
                </Switch>
                )
            ;
        }
    }
