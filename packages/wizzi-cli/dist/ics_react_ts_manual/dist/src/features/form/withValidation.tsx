/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\ics_react_ts_manual\.wizzi\src\features\form\withValidation.tsx.ittf
    utc time: Fri, 26 Mar 2021 07:40:26 GMT
*/
import * as React from 'react';
import {FormValidationContext} from './Form';
import {FormValidation} from './types';
import {$Subtract} from '../../types';
type Props = { 
    value: any;
    validate: (value: any) => Error | null;
    validation: FormValidation;
    helperText: string;
};
type State = { 
    initial: boolean;
    error: Error | null;
    value: any;
};
type InjectedProps = { 
    error: boolean;
    helperText: any;
};
export default function withValidation<P extends InjectedProps>(Comp: React.ComponentType<P>):  React.ComponentType<$Subtract<P, InjectedProps>> {
        class EnhancedComponent extends React.Component<Props, State> {
            static displayName = `withValidation(${Comp.displayName || Comp.name})`;
            static getDerivedStateFromProps(nextProps: Props, prevState: State) {
                const initial = prevState.value !== nextProps.value ? false : prevState.initial;
                return {
                        initial, 
                        error: initial ? null : nextProps.validate ? nextProps.validate(nextProps.value) : null, 
                        value: nextProps.value
                     };
            }
            state = {
                initial: true, 
                error: null, 
                value: this.props.value
            }
            ;
            _key: number = 0;
            _root = React.createRef<any>();
            componentDidMount() {
                this._key = this.props.validation.register({
                    validate: this._validate, 
                    focus: this._focus
                 });
            }
            componentDidUpdate(prevProps: Props) {
                if (prevProps.value !== this.props.value) {
                    this.props.validation.update();
                }
            }
            componentWillUnmount() {
                this.props.validation.unregister(this._key);
            }
            _validate = () => 
                this.props.validate(this.props.value);
            _focus = () => {
                this._root.current.focus && this._root.current.focus();
                if (this.state.initial) {
                    this.setState({
                        initial: false, 
                        error: this.props.validate(this.props.value)
                     })
                }
            };
            render() {
                // @ts-ignore
                const {
                    helperText, 
                    validate, 
                    ...other
                 } = this.props;
                const {
                    error
                 } = this.state;
                return  (
                    <Comp ref={this._root}
                        error={error ? true : false}
                        helperText={(error && error.message) || helperText}
                        {...other}
                     />
                    )
                ;
            }
        }
        return (props) => 
                 (
                <FormValidationContext.Consumer>
                    {
                        // @ts-ignore
                        (value: any) => {
                            return  (
                                <EnhancedComponent validation={value} {...props} />
                                )
                            ;
                        }
                        
                    }
                </FormValidationContext.Consumer>
                )
            
        ;
    }
