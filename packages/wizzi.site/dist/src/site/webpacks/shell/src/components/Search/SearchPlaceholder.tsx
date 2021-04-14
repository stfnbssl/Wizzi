/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\src\site\webpacks\shell\src\components\Search\SearchPlaceholder.tsx.ittf
    utc time: Wed, 14 Apr 2021 15:53:09 GMT
*/
import {StyleSheet, css} from 'aphrodite';
import * as React from 'react';
import {withThemeName, ThemeName} from '../../features/preferences/index';
function Placeholder(props: { 
    theme: ThemeName;
    label: string;
}) {

    return  (
        <div
         className={css(styles.placeholder)}>
            <img
             className={css(styles.image)} src={props.theme === 'dark' ? require('../../assets/snack-icon-dark.svg') : require('../../assets/snack-icon.svg')} />
            {props.label}
        </div>
        )
    ;
}
export default withThemeName(Placeholder);
const styles = StyleSheet.create({
    placeholder: {
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        flex: 1, 
        margin: 24, 
        fontSize: 16, 
        opacity: 0.5
     }, 
    image: {
        height: 72, 
        width: 72, 
        margin: 16, 
        opacity: 0.7
     }
 });
