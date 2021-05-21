/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\client\src\components\layouts\DashboardLayout.tsx.ittf
    utc time: Fri, 21 May 2021 20:28:10 GMT
*/
import React, {FunctionComponent} from 'react';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes, css} from 'styled-components';


export interface DashboardLayoutProps {
    children: React.ReactNode;
}

export const DashboardLayout: FunctionComponent<DashboardLayoutProps> = ({
    children
 }) => 

     (
    <React.Fragment
    >
        <div
        >
            Header
        </div>
        <div
        >
            {children}
        </div>
        <div
        >
            Footer
        </div>
    </React.Fragment>
    )

;
export default DashboardLayout;
