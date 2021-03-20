/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\features\preferences\withPreferences.tsx.ittf
    utc time: Sat, 20 Mar 2021 13:20:50 GMT
*/
import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import {PreferencesContext} from './PreferencesProvider';
import {PreferencesContextType} from './types';
import {$Subtract} from '../../types';
// react-redux doesn't work with forwardRef: https://github.com/reduxjs/react-redux/issues/914
// so this HOC always needs wrap a connect call, and a connect call cannot wrap this
export default function withPreferences<P extends PreferencesContextType>(Comp: React.ComponentType<P>):  React.ComponentType<$Subtract<P, PreferencesContextType>> {
        class PreferenceConsumerComponent extends React.Component<$Subtract<P, PreferencesContextType>> {
            static displayName = `withPreferences(${Comp.displayName || Comp.name})`;
            render() {
                // @ts-ignore
                const {
                    forwardedRef, 
                    ...rest
                } = this.props;
                return  (
                        <PreferencesContext.Consumer />
                    )
                ;
            }
        }
        //
        const Result = React.forwardRef((props, ref) => {
            // @ts-ignore
             (
                <PreferenceConsumerComponent {...props} forwardedRef={ref} />
            )
        }
        );
        hoistNonReactStatics(Result, Comp);
        return Result;
    }
