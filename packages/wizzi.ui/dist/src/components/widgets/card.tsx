/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.ui\.wizzi\src\components\widgets\card.tsx.ittf
    utc time: Sat, 15 May 2021 12:57:34 GMT
*/
import React, {FunctionComponent} from 'react';

export interface CardProps {
    title: string;
    paragraph: string;
}

export const Card: FunctionComponent<CardProps> = ({
    title, 
    paragraph
 }) => 

     (
    <aside
    >
        <h2
        >
            {title}
        </h2>
        <p
        >
            {paragraph}
        </p>
    </aside>
    )

;
export default Card;
