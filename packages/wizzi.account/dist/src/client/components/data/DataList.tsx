/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\client\src\components\data\DataList.tsx.ittf
    utc time: Tue, 25 May 2021 15:10:47 GMT
*/
import React, {FunctionComponent} from 'react';
import {StyleSheet, css} from 'aphrodite';
import classnames from 'classnames';

import {ListDef} from './types';
import ListHead from './ListHead';
import ListRow from './ListRow';

export interface DataListProps {
    listDef: ListDef;
    items: object[];
    onEdit: (item: object) => void;
    onRemove: (item: object) => void;
}

const styles = StyleSheet.create({
    root: {
        overflow: "hidden", 
        borderRadius: "3px", 
        background: "#fff", 
        width: '600px', 
        padding: "30px"
     }, 
    title: {
        fontWeight: 700
     }, 
    table: {
        
     }
 });
export const DataList: FunctionComponent<DataListProps> = ({
    listDef, 
    items, 
    onEdit, 
    onRemove
 }) => 

     (
    <div
     className={css(styles.root)}>
        <div
         className={css(styles.title)}>
            { listDef.title }
        </div>
        <table
         className={css(styles.table)} id={ listDef.id }>
            <ListHead
             columns={listDef.columns} />
            <tbody
            >
                {
                    items.map((item, ndx) => 
                    
                         (
                        <ListRow 
                            key={ndx}
                            columns={listDef.columns}
                            item={item}
                            onEdit={() => 
                                
                                    onEdit(item)
                            }
                            onRemove={() => 
                                
                                    onRemove(item)
                            }
                            onSelect={
                                // _ alert('Select: ' + JSON.stringify(item))
                                () => {
                                
                                }
                            }
                         />
                        )
                    
                    )
                }
            </tbody>
        </table>
    </div>
    )

;
export default DataList;
