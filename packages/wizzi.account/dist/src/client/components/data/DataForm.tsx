/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\client\src\components\data\DataForm.tsx.ittf
    utc time: Tue, 25 May 2021 15:10:47 GMT
*/
import React, {FunctionComponent} from 'react';
import {StyleSheet, css} from 'aphrodite';
import classnames from 'classnames';

import {FormDef} from './types';
import FormControl from './FormControl';

export interface DataFormProps {
    formDef: FormDef;
    values: any;
    onChangeValue: (name: string, value: any) => void;
    onConfirm: () => void;
    onCancel: () => void;
}

const styles = StyleSheet.create({
    root: {
        overflow: "hidden", 
        borderRadius: "3px", 
        background: "#fff", 
        width: "600px", 
        padding: "30px"
     }, 
    title: {
        fontWeight: 700
     }, 
    controls: {
        
     }, 
    buttons: {
        display: "flex", 
        flexDirection: "row", 
        justifyContent: "space-between"
     }, 
    confirm: {
        color: "green"
     }, 
    cancel: {
        color: "gray"
     }
 });
export const DataForm: FunctionComponent<DataFormProps> = ({
    formDef, 
    values, 
    onChangeValue, 
    onConfirm, 
    onCancel
 }) => 

     (
    <div
     className={css(styles.root)}>
        <div
         className={css(styles.title)}>
            { formDef.title }
        </div>
        <div
         className={css(styles.controls)} id={ formDef.id }>
            {
                formDef.controls.map((control, ndx) => 
                
                     (
                    <FormControl 
                        key={ndx}
                        control={control}
                        value={values[control.id]}
                        onChange={(value: any) => 
                            
                                onChangeValue(control.id, value)
                        }
                     />
                    )
                
                )
            }
        </div>
        <div
         className={css(styles.buttons)}>
            <button
             className={css(styles.confirm)} onClick={onConfirm}>
                Confirm
            </button>
            <button
             className={css(styles.cancel)} onClick={onCancel}>
                Cancel
            </button>
        </div>
    </div>
    )

;
export default DataForm;
