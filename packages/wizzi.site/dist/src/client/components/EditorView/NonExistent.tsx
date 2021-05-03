/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\src\components\EditorView\NonExistent.tsx.ittf
    utc time: Mon, 03 May 2021 09:48:27 GMT
*/
import {StyleSheet, css} from 'aphrodite';
import * as React from 'react';
import {Link} from 'react-router-dom';
export default function NonExistent() {
    
        return  (
            <div
             className={css(styles.container)}>
                <div
                 className={css(styles.content)}>
                    <h1
                     className={css(styles.heading)}>
                        Oops!
                    </h1>
                    <p
                     className={css(styles.message)}>
                        We couldn't find the Snack you're looking for. Go to
                        <Link
                         to="/">
                            the homepage
                        </Link>
                        .
                    </p>
                </div>
            </div>
            )
        ;
    }
const styles = StyleSheet.create({
    container: {
        height: '100%', 
        width: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: 24
     }, 
    logo: {
        height: 56, 
        width: 56, 
        marginRight: 24
     }, 
    code: {
        paddingRight: 24, 
        fontSize: '2em'
     }, 
    content: {
        paddingLeft: 24, 
        borderLeft: '1px solid #eee'
     }, 
    heading: {
        margin: 0
     }, 
    message: {
        marginBottom: 0
     }
 });
