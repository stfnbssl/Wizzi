/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\shared\MenuButton.tsx.ittf
    utc time: Thu, 25 Mar 2021 16:39:06 GMT
*/
import * as React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {prefColors} from '../../features/preferences';
import FooterButton from './FooterButton';
type Props = { 
    icon: string;
    label: React.ReactNode;
    content: React.ReactNode;
};
export default function MenuButton({
        icon, 
        label, 
        content
     }: Props) {
        const [active, setActive] = React.useState<boolean>(false);
        const root = React.useRef<HTMLDivElement>(null);
        React.useEffect(() => {
            const onClick = (e: Event):  void => {
                if (e.target === root.current || (root.current && root.current.contains(e.target  as Node))) {
                    return ;
                }
                setActive(false);
            }
            ;
            document.addEventListener('click', onClick);
            return () => 
                    document.removeEventListener('click', onClick)
            ;
        }
        , [])
        return  (
            <div ref={root} className={css(styles.panelContainer)}>
                <FooterButton icon={icon} active={active} onClick={() => 
                    setActive(value => 
                        !value
                    
                    )
                }>
                    {label}
                </FooterButton>
                {
                    active ?  (
                        <div className={css(styles.pane)}>
                            {content}
                        </div>
                        )
                     : null
                }
            </div>
            )
        ;
    }
const c = prefColors.c;
const styles = StyleSheet.create({
    panelContainer: {
        position: 'relative', 
        display: 'flex', 
        alignItems: 'center'
     }, 
    pane: {
        display: 'flex', 
        alignItems: 'stretch', 
        justifyContent: 'flex-end', 
        flexDirection: 'column', 
        position: 'absolute', 
        right: 0, 
        bottom: 32, 
        minWidth: 160, 
        padding: '8px 0', 
        borderWidth: 1, 
        borderRadius: 3, 
        borderStyle: 'solid', 
        backgroundColor: c('content'), 
        borderColor: c('editor-border'), 
        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.16)', 
        color: c('text'), 
        zIndex: -1
     }
 });
