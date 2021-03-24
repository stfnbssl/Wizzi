/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\features\preferences\withThemeName.tsx.ittf
    utc time: Wed, 24 Mar 2021 16:19:16 GMT
*/
import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import {PreferencesContext} from './PreferencesProvider';
import {prefTypes} from '../preferences';
import {$Subtract} from '../../types';
type InjectedProps = { 
    theme: prefTypes.ThemeName;
};
// react-redux doesn't work with forwardRef: https://github.com/reduxjs/react-redux/issues/914
// so this HOC always needs wrap a connect call, and a connect call cannot wrap this
export default function withThemeName<P extends InjectedProps>(Comp: React.ComponentType<P>):  React.ComponentType<$Subtract<P, InjectedProps>> {
        class ThemedComponent extends React.Component<$Subtract<P, InjectedProps>> {
            static displayName = `withTheme(${Comp.displayName || Comp.name})`;
            render() {
                // @ts-ignore
                const {
                    __forwardedRef, 
                    ...rest
                } = this.props;
                return  (
                    <PreferencesContext.Consumer>
                        {
                            // @ts-ignore
                            (props) => {
                                return  (
                                    <Comp ref={__forwardedRef} theme={props.preferences.theme} {...rest} />
                                    )
                                ;
                            }
                            
                        }
                    </PreferencesContext.Consumer>
                    )
                ;
            }
        }
        const Result = React.forwardRef(// @ts-ignore
        (props, ref) => 
             (
            <ThemedComponent {...props} __forwardedRef={ref} />
            )
        
        );
        hoistNonReactStatics(Result, Comp);
        return Result as any;
    }
