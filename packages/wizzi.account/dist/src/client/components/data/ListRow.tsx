/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\client\src\components\data\ListRow.tsx.ittf
    utc time: Tue, 25 May 2021 15:10:47 GMT
*/
import React, {FunctionComponent} from 'react';
import {StyleSheet, css} from 'aphrodite';
import classnames from 'classnames';

import {ColumnDef} from './types';

export interface ListRowProps {
    columns: ColumnDef[];
    item: { 
    };
    onRemove: () => void;
    onEdit: () => void;
    onSelect: () => void;
}

const styles = StyleSheet.create({
    root: {
        marginTop: "5px", 
        borderTop: "1px solid #bebebe"
     }, 
    cell: {
        padding: "4px"
     }, 
    button: {
        padding: "4px"
     }
 });
export const ListRow: FunctionComponent<ListRowProps> = ({
    columns, 
    item, 
    onRemove, 
    onEdit, 
    onSelect
 }) => 

     (
    <tr
     className={css(styles.root)}>
        {
            columns.map((column, ndx) => {
            
                if (!!column.isKey == false) {
                    return  (
                        <td
                         className={css(styles.cell)} key={ndx} onClick={onSelect}>
                            { item[column.id] }
                        </td>
                        )
                    ;
                }
            }
            )
        }
        <td
         className={css(styles.button)}>
            <button
             onClick={onEdit}>
            Edit
            </button>
        </td>
        <td
         className={css(styles.button)}>
            <button
             onClick={onRemove}>
            Remove
            </button>
        </td>
    </tr>
    )

;
export default ListRow;
