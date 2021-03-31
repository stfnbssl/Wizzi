/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\ics_react_ts_manual\.wizzi\src\components\widgets\button.tsx.ittf
    utc time: Fri, 26 Mar 2021 07:40:26 GMT
*/
import React, {FunctionComponent} from 'react';

type ButtonProps = { 
    active?: boolean;
    icon: string;
    theme: string;
    children: React.ReactNode;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

interface ButtonStyleProps {
    active?: boolean;
    dark?: boolean;
}
export const Button: FunctionComponent<ButtonProps> = ({
    active, 
    icon, 
    theme, 
    children, 
    onClick
 }) => 
     (
    <div onClick={onClick} dark={ theme == 'dark' } style={icon ? {
            backgroundImage: `url(${icon})`
         } : undefined}>
        {children}
    </div>
    )

;
