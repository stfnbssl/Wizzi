/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\src\site\webpacks\shell\src\components\widgets\ButtonLink.tsx.ittf
    utc time: Wed, 14 Apr 2021 15:53:09 GMT
*/
import classnames from 'classnames';
import * as React from 'react';
import {getClassNames, ButtonCommonProps} from './Button';
type Props = ButtonCommonProps & { 
    href?: string;
    target?: string;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    children: React.ReactNode;
    className?: string;
};
export default function ButtonLink({
        variant, 
        icon, 
        large, 
        disabled, 
        loading, 
        className, 
        ...rest, 
        const onClick = () => {
        
        }
        ;
        
     }: Props) {
    
        return  (
            <a 
                className={classnames(getClassNames({
                        variant, 
                        icon, 
                        large, 
                        disabled, 
                        loading
                     }), className)}
                onClick={onClick}
                style={icon ? {
                            backgroundImage: `url(${icon})`
                         } : {}}
                {...rest}
             />
            )
        ;
    }
