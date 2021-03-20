/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\shared\ContextMenu.tsx.ittf
    utc time: Sat, 20 Mar 2021 13:20:50 GMT
*/
import * as React from 'react';
import classnames from 'classnames';
import {StyleSheet, css} from 'aphrodite';
import ShortcutLabel from './ShortcutLabel';
import {prefTypes, withThemeName, prefColors} from '../../features/preferences';
export type Action = { 
    label: string;
    handler: () => void;
    disabled?: boolean;
    combo?: number[];
} 
;
type Props = { 
    innerRef?: React.Ref<HTMLUListElement>;
    visible: boolean;
    actions: Array<Action | undefined>;
    position?: { 
        pageX: number;
        pageY: number;
    } 
     | null;
    onHide: () => void;
    className?: string;
    theme: prefTypes.ThemeName;
} 
;
const BOTTOM_OFFSET = 35;
const MENU_ITEM_HEIGHT = 28;
class ContextMenu extends React.PureComponent<Props> {
    render() {
        const {
            visible, 
            position, 
            actions, 
            theme, 
            onHide, 
            className, 
            // @ts-ignore
            innerRef
        } = this.props;
        if (!visible) {
            return null;
        }
        const shownActions = actions.filter(action => action) as Action[]
        ;
        return  (
                <ul ref={innerRef} className={classnames(css(styles.menu, theme === 'dark' ? styles.menuDark : styles.menuLight), className)} style={position ? {
                        position: 'fixed', 
                        top: Math.min(position.pageY, window.innerHeight - BOTTOM_OFFSET - shownActions.length * MENU_ITEM_HEIGHT), 
                        left: position.pageX, 
                        marginTop: -8
                    } : {}} />
            )
        ;
    }
}
export default withThemeName(React.forwardRef((props: Props, ref: React.Ref<HTMLUListElement>) =>  (
            <ContextMenu {...props} innerRef={ref} />
        )
    ))
const c = prefColors.c;
const fadeIn = {
    from: {
        opacity: 0
    }, 
    to: {
        opacity: 1
    }
};
const styles = StyleSheet.create({
    menu: {
        zIndex: 10, 
        listStyle: 'none', 
        padding: 4, 
        borderRadius: 3, 
        borderStyle: 'solid', 
        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.16)', 
        minWidth: 160, 
        animationName: fadeIn, 
        animationDuration: '0.083s', 
        animationTimingfunction: 'linear', 
        backgroundColor: c('content'), 
        borderColor: c('editor-border'), 
        color: c('text')
    }, 
    menuLight: {
        borderWidth: 0
    }, 
    menuDark: {
        borderWidth: 1, 
        borderStyle: 'solid'
    }, 
    item: {
        lineHeight: 1, 
        display: 'flex', 
        justifyContent: 'space-between', 
        appearance: 'none', 
        background: 'none', 
        border: 0, 
        outline: 0, 
        width: '100%', 
        padding: '8px 12px', 
        textAlign: 'left', 
        userSelect: 'none', 
        borderRadius: 2, 
        ':hover': {
            background: c('primary'), 
            color: 'white'
        }
    }, 
    disabled: {
        pointerEvents: 'none', 
        opacity: 0.5
    }, 
    hint: {
        color: 'inherit', 
        fontFamily: 'inherit', 
        fontSize: 'inherit', 
        backgroundColor: 'transparent', 
        boxShadow: 'none', 
        marginLeft: 24, 
        opacity: 0.3
    }
});
