/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\shared\ProgressIndicator.tsx.ittf
    utc time: Wed, 24 Mar 2021 16:19:16 GMT
*/
import * as React from 'react';
import {StyleSheet, css} from 'aphrodite';
import classnames from 'classnames';
import colors from '../../configs/colors';
type Props = { 
    delay?: number;
    duration?: number;
    className?: string;
};
export default function ProgressIndicator({
        delay, 
        duration, 
        className
    }: Props) {
        return  (
            <div className={classnames(css(styles.progress), className)} style={{
                animationDelay: `${delay}ms`, 
                animationDuration: `${duration}ms`
            }} />
            )
        ;
    }
ProgressIndicator.defaultProps = {
    delay: 0, 
    duration: 2000
};
const progressKeyframes = {
    '0%': {
        transform: 'scale3d(0, 1, 1)', 
        opacity: 1
    }, 
    '75%': {
        transform: 'scale3d(1, 1, 1)', 
        opacity: 1
    }, 
    '100%': {
        transform: 'scale3d(1, 1, 1)', 
        opacity: 0
    }
};
const styles = StyleSheet.create({
    progress: {
        position: 'absolute', 
        left: 0, 
        right: 0, 
        height: 2, 
        zIndex: 1, 
        backgroundColor: colors.primary, 
        transform: 'scale3d(0, 1, 1)', 
        transformOrigin: 'top left', 
        animationName: [
            progressKeyframes
        ], 
        animationIterationCount: 'infinite'
    }
});
