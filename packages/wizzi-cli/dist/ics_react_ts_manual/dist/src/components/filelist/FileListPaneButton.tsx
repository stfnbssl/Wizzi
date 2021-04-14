/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\ics_react_ts_manual\.wizzi\src\components\filelist\FileListPaneButton.tsx.ittf
    utc time: Fri, 26 Mar 2021 07:40:26 GMT
*/
import * as React from 'react';
import {StyleSheet, css} from 'aphrodite';
type Props = { 
    innerRef?: React.Ref<HTMLButtonElement>;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
};
class FileListPaneButton extends React.PureComponent<Props> {
    render() {
        const {
            innerRef, 
            ...rest
         } = this.props;
        return  (
            <button {...rest} className={css(styles.button)} ref={innerRef}>
                <svg className={css(styles.icon)} viewBox="0 0 16 16">
                    {this.props.children}
                </svg>
            </button>
            )
        ;
    }
}
export default React.forwardRef((props: Props, ref: React.Ref<HTMLButtonElement>) => 
         (
        <FileListPaneButton {...props} innerRef={ref} />
        )
    
    )
const styles = StyleSheet.create({
    button: {
        appearance: 'none', 
        background: 'transparent', 
        border: 0, 
        margin: 0, 
        outline: 0
     }, 
    icon: {
        fill: 'currentColor', 
        height: 16, 
        width: 16, 
        verticalAlign: -3
     }
 });