/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\ics_react_ts_manual\.wizzi\src\docs\DocsFrame.tsx.ittf
    utc time: Fri, 26 Mar 2021 07:40:26 GMT
*/
import React from 'react';
import {withStyles, createStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AppSidebar from '../components/Common/AppSidebar';
import GithubIcon from '../styles/svgIcons/Github';
import find from 'lodash/find';
import {Layout} from '../components/Common/Constants';
import DocsDrawer from './DocsDrawer';
import pages from './pages';
// We need to drill down
function findActivePage(currentPages, location) {
    const activePage = find(currentPages, // Should be an exact match if no children
    (page) => {
        if (page.children) {
            return (location.pathname.indexOf(`${page.pathname}/`)) === 0;
        }
        return location.pathname === page.pathname;
    }
    );
    if (!activePage) {
        return null;
    }
    if (activePage.pathname !== location.pathname) {
        return findActivePage(activePage.children, location);
    }
    return activePage;
}
type Props = { 
    classes: any;
    location: any;
    title: string;
    children: React.ReactNode;
};
// Add support for leading / in development mode.
function DocsFrame(props: Props) {
    const {
        location
     } = props;
    let pathname = location.pathname;
    if (pathname !== '/') {
        // The leading / is only added to support static hosting (resolve /index.html).
        // We remove it to normalize the pathname.
        pathname = pathname.replace(/\/$/, '');
    }
    const activePage = findActivePage(pages, {
        ...location, 
        pathname
     });
    console.log('DocsFrame.activePage', activePage);
    return  (
        <div>
            <AppBar className={props.classes.appBar} position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit" className={props.classes.grow}>
                        {props.title}
                    </Typography>
                    <Tooltip title={'View on github'} enterDelay={300}>
                        <IconButton component="a"
                            color="inherit"
                            href="https://github.com/stfnbssl/packi"
                            aria-label={'View on github'}
                            data-ga-event-category="AppBar"
                            data-ga-event-action="github"
                        // edge="end"
                        // edge="end"
                        >
                            <GithubIcon />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
            <DocsDrawer pages={pages} activePage={activePage} />
            <div className={props.classes.content}>
                {props.children}
            </div>
        </div>
        )
    ;
}
const muiStyles = (theme: Theme) => 
    createStyles({
        appBar: {
            zIndex: theme.zIndex.drawer + 1, 
            marginLeft: `${Layout.DocsDrawerWidth}px`, 
            width: `calc(100% - ${Layout.DocsDrawerWidth}px)`
         }, 
        content: {
            zIndex: theme.zIndex.drawer + 1, 
            marginLeft: `${Layout.DocsDrawerWidth}px`, 
            width: `calc(100% - ${Layout.DocsDrawerWidth}px)`, 
            padding: '16px'
         }, 
        grow: {
            flexGrow: 1
         }
     })
;
export default withStyles(muiStyles)(DocsFrame);
