/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\ics_react_ts_manual\.wizzi\src\reportWebVitals.ts.ittf
    utc time: Fri, 26 Mar 2021 07:40:24 GMT
*/

import {ReportHandler} from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        import('web-vitals').then(({
            getCLS, 
            getFID, 
            getFCP, 
            getLCP, 
            getTTFB
         }) => {
            getCLS(onPerfEntry);
            getFID(onPerfEntry);
            getFCP(onPerfEntry);
            getLCP(onPerfEntry);
            getTTFB(onPerfEntry);
        }
        )
    }
}
;
export default reportWebVitals;