/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\src\site\webpacks\shell\src\features\file\getFileLanguage.tsx.ittf
    utc time: Wed, 14 Apr 2021 15:53:09 GMT
*/
type Language = 'javascript' | 'typescript' | 'json' | 'css' | 'html' | 'markdown';

export default function(path: string):  Language | undefined {
    
        if (path.includes('.')) {
            switch (path.split('.').pop()) {
                case 'js': {
                    return 'javascript';
                }
                case 'ts':
                case 'tsx': {
                    return 'typescript';
                }
                case 'json': {
                    return 'json';
                }
                case 'css': {
                    return 'css';
                }
                case 'html': {
                    return 'html';
                }
                case 'md': {
                    return 'markdown';
                }
                default: {
                    return undefined;
                }
            }
        }
        return undefined;
    }
