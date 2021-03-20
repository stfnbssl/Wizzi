/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\features\filelist\prettierCode.ts.ittf
    utc time: Sat, 20 Mar 2021 13:20:47 GMT
*/
import getFileLanguage from './getFileLanguage';
export default async function prettierCode(path: string, code: string):  Promise<string> {
        const language = getFileLanguage(path);
        let parser;
        let plugins;
        switch (language) {
            case 'javascript': {
                parser = 'babel';
                plugins = [
                    await import('prettier/parser-babylon')
                ];
                break;
            }
            case 'typescript': {
                parser = 'typescript';
                plugins = [
                    await import('prettier/parser-typescript')
                ];
                break;
            }
            case 'markdown': {
                parser = 'markdown';
                plugins = await Promise.all([
                        import('prettier/parser-babylon'), 
                        import('prettier/parser-typescript'), 
                        import('prettier/parser-markdown')
                    ]);
                break;
            }
        }
        if (parser && plugins) {
            const prettier = await import('prettier/standalone');
            const {
                default: config
            } = await import('../../configs/prettier.json') as any;
            return prettier.format(code, {
                    parser, 
                    plugins, 
                    ...config
                });
        }
        return code;
    }
