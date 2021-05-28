/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\client\src\components\layouts\DashboardLayout.tsx.ittf
    utc time: Tue, 25 May 2021 15:10:47 GMT
*/
import React, {FunctionComponent} from 'react';


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
