/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\client\src\components\Router.tsx.ittf
    utc time: Fri, 21 May 2021 20:28:10 GMT
*/
import * as React from 'react';
import {Switch, Route} from 'react-router-dom';
import type {RouterData, QueryParams} from '../features/app';
import App from './App';
import NonExistent from './NonExistent';
import DashboardLayoutRoute from './layouts/DashboardLayoutRoute';
import {PostApiDataEntry} from '../features/post';

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
                    <PostApiDataEntry
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
                    <DashboardLayoutRoute
                     exact path="/blog/edit" component={PostApiDataEntry} />
                    <Route
                     component={NonExistent} />
                </Switch>
                )
            ;
        }
    }
