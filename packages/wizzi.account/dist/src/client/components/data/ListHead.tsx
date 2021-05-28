/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\client\src\components\data\ListHead.tsx.ittf
    utc time: Tue, 25 May 2021 15:10:47 GMT
*/
import React, {FunctionComponent} from 'react';
import {StyleSheet, css} from 'aphrodite';
import classnames from 'classnames';

import {ColumnDef} from './types';

export interface ListHeadProps {
    columns: ColumnDef[];
}

const styles = StyleSheet.create({
    cell: {
        padding: "4px"
     }
 });
export const ListHead: FunctionComponent<ListHeadProps> = ({
    columns
 }) => 

     (
    <thead
    >
        <tr
        >
            {
                columns.map((column, ndx) => {
                
                    if (!!column.isKey == false) {
                        return  (
                            <th
                             className={css(styles.cell)} key={ndx}>
                                { column.label || column.id }
                            </th>
                            )
                        ;
                    }
                }
                )
            }
        </tr>
    </thead>
    )

;
export default ListHead;
