/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\snack\website\.wizzi\src\client\components\DevicePreview\WebFrame.tsx.ittf
    utc time: Tue, 30 Mar 2021 09:10:38 GMT
*/
import {StyleSheet, css} from 'aphrodite';
import * as React from 'react';
import {c} from '../ThemeProvider';
type Props = { 
    previewRef: React.MutableRefObject<Window | null>;
    previewURL: string;
    onPopupUrl: (url: string) => void;
};
export default function WebFrame({
        previewRef, 
        previewURL, 
        onPopupUrl
     }: Props) {
        React.useEffect(() => 
            onPopupUrl(previewURL)
        , [
            previewURL
        ])
        return  (
            <div className={css(styles.container)}>
                <iframe ref={c => 
                            previewRef.current = c?.contentWindow ?? null
                    }
                    src={previewURL}
                    allow="geolocation; camera; microphone"
                    className={css(styles.frame)}
                 />
            </div>
            )
        ;
    }
const styles = StyleSheet.create({
    container: {
        position: 'relative', 
        display: 'flex', 
        flex: 1, 
        width: '100%', 
        height: '100%'
     }, 
    frame: {
        position: 'relative', 
        width: '100%', 
        height: '100%', 
        border: 0, 
        zIndex: 1, 
        backgroundColor: c('content', 'light')
     }
 });
