/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\Editor\convertErrorToAnnotation.tsx.ittf
    utc time: Thu, 25 Mar 2021 16:39:06 GMT
*/
export type Error = { 
    loc?: [number , number];
    line?: number;
    column?: number;
    message: string;
};
export type Annotation = { 
    startLineNumber: number;
    endLineNumber: number;
    startColumn: number;
    endColumn: number;
    message: string;
    severity: number;
    source: string;
};
export default function convertErrorToAnnotation(error: Error):  Annotation {
        let loc = error.loc || [
            0, 
            0
        ];
        if (typeof error.line === 'number' && typeof error.column === 'number' && Number.isFinite(error.line) && Number.isFinite(error.column)) {
            loc = [
                error.line || 0, 
                error.column || 0
            ];
        }
        return {
                startLineNumber: loc[0], 
                endLineNumber: loc[0], 
                startColumn: loc[1], 
                endColumn: loc[1], 
                message: error.message, 
                severity: 4, 
                source: 'Device'
             };
    }
