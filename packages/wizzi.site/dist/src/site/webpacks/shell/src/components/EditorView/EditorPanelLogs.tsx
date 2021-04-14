/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\src\site\webpacks\shell\src\components\EditorView\EditorPanelLogs.tsx.ittf
    utc time: Wed, 14 Apr 2021 15:53:09 GMT
*/
import {StyleSheet, css} from 'aphrodite';
import * as React from 'react';
import {DeviceLog} from '../../types';
import {c} from '../ThemeProvider';
import CollapsibleObject from '../widgets/CollapsibleObject';
type GroupedLog = { 
    items: DeviceLog[];
    device: string;
    method: 'log' | 'error' | 'warn';
    times: 1;
};
type Props = { 
    deviceLogs: DeviceLog[];
};
export default function EditorPanelLogs({
        deviceLogs
     }: Props) {
    
        const logs = deviceLogs.reduce((acc: GroupedLog[], log) => {
        
            const last = acc[acc.length - 1];
            
            // If the last log and current are the same, increment the count
            const items = log.payload.map((text) => {
            
                try {
                    
                    // @ts-ignore text might not be a string
                    return JSON.parse(text); 
                } 
                catch (e) {
                    return text;
                } 
            }
            );
            if (last && last.items.length === 1 && last.items[0] === items[0] && last.device === log.device.name && last.method === log.method) {
                last.times++;
            }
            else {
                acc.push({
                    items, 
                    device: log.device.name, 
                    method: log.method, 
                    times: 1
                 })
            }
            return acc;
        }
        , []);
        return  (
            <div
            >
                {
                    logs.map(({
                        items, 
                        device, 
                        method, 
                        times
                     }: GroupedLog, i) => {
                    
                        return  (
                            <div
                             className={css(styles.container)} key={i}>
                                <div
                                 className={css(styles.device)}>
                                    {device}
                                    :
                                </div>
                                <div
                                 className={css(styles.line)} key={i}>
                                    {
                                        items.map((item, i) => 
                                        
                                            typeof item === 'object' && item !== null ?  (
                                                <CollapsibleObject
                                                 key={i} object={item} />
                                                )
                                             :  (
                                                <div
                                                 key={i} className={css(styles.item, method === 'error' && styles.error, method === 'warn' && styles.warning)}>
                                                    {String(item)}
                                                </div>
                                                )
                                        
                                        )
                                    }
                                    {
                                        times > 1 ?  (
                                            <div
                                             className={css(styles.counter)}>
                                                {times}
                                            </div>
                                            )
                                         : null
                                    }
                                </div>
                            </div>
                            )
                        ;
                    }
                    )
                }
            </div>
            )
        ;
    }
const styles = StyleSheet.create({
    container: {
        display: 'flex', 
        flexDirection: 'row', 
        flexWrap: 'nowrap', 
        fontFamily: 'var(--font-monospace)', 
        fontSize: 13, 
        minHeight: 16, 
        margin: '4px 1.5em'
     }, 
    line: {
        display: 'flex', 
        flexDirection: 'row', 
        flexWrap: 'wrap'
     }, 
    item: {
        marginRight: 8
     }, 
    error: {
        color: c('error')
     }, 
    warning: {
        color: c('warning')
     }, 
    device: {
        opacity: 0.5, 
        marginRight: 8
     }, 
    counter: {
        position: 'relative', 
        bottom: -1, 
        height: 16, 
        width: 16, 
        lineHeight: '16px', 
        fontSize: 11, 
        textAlign: 'center', 
        borderRadius: '50%', 
        backgroundColor: c('soft'), 
        color: c('soft-text')
     }
 });
