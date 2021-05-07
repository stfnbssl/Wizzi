/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\src\features\form\withStatus.tsx.ittf
    utc time: Fri, 07 May 2021 18:42:12 GMT
*/
import * as React from 'react';
import {FormValidationContext} from './Form';
import {$Subtract} from '../../types';

// The property ( 'disabled' ) is injected in the component
// enhanced by withStatus ( should be 'withEnabled' ).
// The 'disabled' status is inferred from the FormValidationContext.Consumer.
type InjectedProps = { 
    disabled: boolean | undefined;
};

export default function withStatus<P extends InjectedProps>(Comp: React.ComponentType<P>):  React.ComponentType<$Subtract<P, InjectedProps>> {
    
        function withStatus(props: any) {
        
            return  (
                <FormValidationContext.Consumer
                >
                    {
                        (value: { 
                            valid: boolean;
                        } | undefined = {
                            valid: true
                         }) => 
                        
                             (
                            <Comp
                             disabled={!value.valid} {...props} />
                            )
                        
                        
                    }
                </FormValidationContext.Consumer>
                )
            ;
        }
        withStatus.displayName = `withValidation(${Comp.displayName || Comp.name})`;
        return withStatus;
    }
