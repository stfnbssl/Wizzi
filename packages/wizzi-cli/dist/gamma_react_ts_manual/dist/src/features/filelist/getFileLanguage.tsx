/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\features\filelist\getFileLanguage.tsx.ittf
    utc time: Sun, 21 Mar 2021 14:14:13 GMT
*/
type Language = 'javascript' | 'typescript' | 'json' | 'css' | 'html' | 'markdown';
export default function(path: string):  Language | undefined {
        if (path.includes('.')) {
            switch (path.split('.').pop()) {
            }
        }
        return undefined;
    }
