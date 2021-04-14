/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\src\site\webpacks\shell\src\components\widgets\LargeTextArea.tsx.ittf
    utc time: Wed, 14 Apr 2021 15:53:09 GMT
*/
import {StyleSheet, css} from 'aphrodite';
import * as React from 'react';
import Textarea from 'react-textarea-autosize';
import {c} from '../ThemeProvider';

type Props = { 
    autoFocus?: boolean;
    value: string | undefined;
    name?: string;
    minRows?: number;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function LargeTextArea({
        ...rest
     }: Props) {
    
        return  (
            <Textarea
             className={css(styles.input)} {...rest} />
            )
        ;
    }

const styles = StyleSheet.create({
    input: {
        outline: 0, 
        fontSize: 16, 
        borderRadius: 3, 
        padding: '12px 14px 12px 14px', 
        lineHeight: '22px', 
        border: `1px solid ${c('border')}`, 
        backgroundColor: c('content'), 
        width: '100%', 
        ':focus': {
            borderColor: c('selected')
         }
     }
 });
