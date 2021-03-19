/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\widgets\card.tsx.ittf
    utc time: Fri, 19 Mar 2021 20:08:21 GMT
*/
import React, {FunctionComponent} from 'react';

type CardProps = { 
    title: string;
    paragraph: string;
} 
;

export const Card: FunctionComponent<CardProps> = ({
    title, 
    paragraph
}) =>  (
        <aside>
            <h2>
            {title}</h2>
        
            <p>
            {paragraph}</p>
        
        </aside>
    )
;
