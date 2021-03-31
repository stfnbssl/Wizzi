/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\Common\AppSidebar.tsx.ittf
    utc time: Thu, 25 Mar 2021 16:39:06 GMT
*/
import React from 'react';
import {withStyles, createStyles, Theme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';
import {Link} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ViewListIcon from '@material-ui/icons/ViewList';
import HelpIcon from '@material-ui/icons/Help';
import InfoIcon from '@material-ui/icons/Info';
import {Layout} from './Constants';
const FilesLink = (props: any) => 
     (
    <Link to="/" {...props} />
    )

;
const DocLink = (props: any) => 
     (
    <Link to="/getting-started/usage" {...props} />
    )

;
const TestEditorFormLink = (props: any) => 
     (
    <Link to="/test/editorform" {...props} />
    )

;
type Props = { 
    classes: any;
};
function AppSidebar(props: Props) {
    return  (
        <Drawer variant="permanent" classes={{
            paper: props.classes.drawerPaper
         }}>
            <List>
                {
                    //
                    
                }
            </List>
        </Drawer>
        )
    ;
}
const muiStyles = (theme: Theme) => 
    createStyles({
        drawerPaper: {
            top: 0, 
            // 'auto'
            width: `${Layout.MainDrawerWidth}px`
         }, 
        iconButton: {
            padding: '10px'
         }
     })
;
export default withStyles(muiStyles)(AppSidebar);
