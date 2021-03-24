/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\Editor\NoFileSelected.tsx.ittf
    utc time: Wed, 24 Mar 2021 16:19:16 GMT
*/
import * as React from 'react';
import {StyleSheet, css} from 'aphrodite';
export default class NoFileSelected extends React.PureComponent {
        render() {
            return  (
                <div className={css(styles.container)}>
                    <h4 className={css(styles.text)}>
                        Select a file to view and edit
                    </h4>
                </div>
                )
            ;
        }
    }
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center'
    }, 
    text: {
        fontSize: '1.5em', 
        fontWeight: 500, 
        opacity: 0.5
    }
});
