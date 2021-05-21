/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\client\src\components\data\ListHead.tsx.ittf
    utc time: Fri, 21 May 2021 20:28:10 GMT
*/
import React, {FunctionComponent} from 'react';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes, css} from 'styled-components';

import {ColumnDef} from './types';

export interface ListHeadProps {
    columns: ColumnDef[];
}

const StyledRoot = styled.thead`
    
`
const StyledHeadCell = styled.th`
    padding: 4px;
    
`
export const ListHead: FunctionComponent<ListHeadProps> = ({
    columns
 }) => 

     (
    <StyledRoot
    >
        <tr
        >
            <StyledHeadCell
             key={-1}>
                _id
            </StyledHeadCell>
            {
                columns.map((column, ndx) => 
                
                     (
                    <StyledHeadCell
                     key={ndx}>
                        { column.label || column.id }
                    </StyledHeadCell>
                    )
                
                )
            }
        </tr>
    </StyledRoot>
    )

;
export default ListHead;
