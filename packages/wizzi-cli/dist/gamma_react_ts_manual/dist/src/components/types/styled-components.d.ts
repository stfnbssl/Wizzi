/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\types\styled-components.d.ts.ittf
    utc time: Wed, 10 Mar 2021 05:27:17 GMT
*/
import 'styled-components';
import * as styledComponents from "styled-components";
interface IPalette {
    main: string;
    contrastText: string;
}
declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string;
        palette: { 
            common: { 
                black: string;
                white: string;
            } 
            ;
            primary: IPalette;
            secondary: IPalette;
        } 
        ;
    }
}
