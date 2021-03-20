/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\shared\CollapsibleObject.tsx.ittf
    utc time: Sat, 20 Mar 2021 13:20:50 GMT
*/
import * as React from 'react';
import {StyleSheet, css} from 'aphrodite';
type Props = { 
    object: any;
    label?: string;
} 
;
type State = { 
    isExpanded: boolean;
} 
;
export default class CollapsibleObject extends React.Component<Props, State> {
        state = {
            isExpanded: false
        };
        _handleClick = () => {
            this.setState((state) => ({
                    isExpanded: !state.isExpanded
                }))}
        _renderValue = (value: any) => {
             (
                <span className={css(typeof value === 'object' && value !== null ? null : typeof value === 'string' ? styles.string : styles.value)} />
            )
        }
        render() {
            const keys = Object.keys(this.props.object);
            return  (
                    <div className={css(styles.container)}>
                        <div onClick={this._handleClick}>
                            <span className={css(styles.triangle)} />
                        {
                            this.props.label ?  (
                                    <span className={css(styles.label)} />
                                )
                             : null
                        }{
                            Array.isArray(this.props.object) ?  (
                                    <span className={css(styles.preview)} />
                                )
                             :  (
                                    <span className={css(styles.preview)} />
                                )
                            
                        }</div>
                        <div className={css(styles.expanded)} />
                    </div>
                )
            ;
        }
    }
const styles = StyleSheet.create({
    container: {
        cursor: 'default'
    }, 
    pair: {
        margin: '0 4px', 
        verticalAlign: 'middle'
    }, 
    preview: {
        margin: '0 4px', 
        verticalAlign: 1
    }, 
    triangle: {
        display: 'inline-block', 
        verticalAlign: 'middle', 
        width: 8, 
        fontSize: 9, 
        opacity: 0.7
    }, 
    label: {
        marginLeft: 6, 
        opacity: 0.7
    }, 
    key: {
        marginRight: 4, 
        opacity: 0.7
    }, 
    value: {
        color: '#a27cca'
    }, 
    string: {
        color: '#87b121'
    }, 
    expanded: {
        marginLeft: 14
    }, 
    item: {
        marginLeft: 8
    }
});
