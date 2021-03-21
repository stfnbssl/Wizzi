/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\features\form\withStatus.tsx.ittf
    utc time: Sun, 21 Mar 2021 14:14:13 GMT
*/
import * as React from 'react';
import {FormValidationContext} from './Form';
import {$Subtract} from '../../types';
type InjectedProps = { 
    disabled: boolean | undefined;
};
export default function withStatus<P extends InjectedProps>(Comp: React.ComponentType<P>):  React.ComponentType<$Subtract<P, InjectedProps>> {
        function withStatus(props: any) {
            return  (
                    <FormValidationContext.Consumer />
                )
            ;
        }
        withStatus.displayName = `withValidation(${Comp.displayName || Comp.name})`;
        return withStatus;
    }
