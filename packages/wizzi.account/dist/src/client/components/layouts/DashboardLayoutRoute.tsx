/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\client\src\components\layouts\DashboardLayoutRoute.tsx.ittf
    utc time: Fri, 21 May 2021 20:28:10 GMT
*/
import React, {Component, ComponentType} from 'react';
import {Route, RouteProps} from 'react-router-dom';
import DashboardLayout from './DashboardLayout';

export interface DashboardLayoutRouteProps extends RouteProps {
    component: ComponentType<any>;
}
export const DashboardLayoutRoute = ({
    component: Comp, 
    ...rest
 }: DashboardLayoutRouteProps) => {

    return  (
        <Route
         {...rest} render={(matchProps) => 
            
                 (
                <DashboardLayout
                >
                    <h1
                    >
                    Hello
                    </h1>
                </DashboardLayout>
                )
            
        } />
        )
    ;
}
;
export default DashboardLayoutRoute;
