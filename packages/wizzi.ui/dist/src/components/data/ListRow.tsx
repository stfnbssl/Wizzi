/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.ui\.wizzi\src\components\data\ListRow.tsx.ittf
    utc time: Tue, 18 May 2021 13:32:19 GMT
*/
import React, {FunctionComponent} from 'react';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes, css} from 'styled-components';

import Box from '../widgets/Box';
import {ColumnDef} from './types';
export interface ListRowProps {
    columns: ColumnDef[];
    item: { 
    };
    onRemove: () => void;
    onEdit: () => void;
    onSelect: () => void;
}

const StyledRoot = styled.tr`
    margin-top: 5px;
    border-top: 1px solid #bebebe;
    
`
const StyledCell = styled.td`
    padding: 4px;
    
`
const StyledButton = styled.td`
    padding: 4px;
    
`
export const ListRow: FunctionComponent<ListRowProps> = ({
    columns, 
    item, 
    onRemove, 
    onEdit, 
    onSelect
 }) => 

     (
    <StyledRoot
    >
        <StyledCell
         key={-1} onClick={onSelect}>
            { item['_id'] }
        </StyledCell>
        {
            columns.map((column, ndx) => 
            
                 (
                <StyledCell
                 key={ndx} onClick={onSelect}>
                    { item[column.id] }
                </StyledCell>
                )
            
            )
        }
        <StyledButton
        >
            <button
             onClick={onEdit}>
            Edit
            </button>
        </StyledButton>
        <StyledButton
        >
            <button
             onClick={onRemove}>
            Remove
            </button>
        </StyledButton>
    </StyledRoot>
    )

;
export default ListRow;
