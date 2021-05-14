/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\src\components\EditorView\EditorToolbar.tsx.ittf
    utc time: Tue, 11 May 2021 04:47:43 GMT
*/
import {StyleSheet, css} from 'aphrodite';
import * as React from 'react';
import {SaveStatus, SaveHistory, SaveOptions} from '../../features/packi';
import {Viewer} from '../../features/account';
import EditorTitle from './EditorTitle';
import {usePreferences} from '../../features/preferences';
import SearchButton from '../Search/SearchButton';
import {ToolbarShell} from '../shell/ToolbarShell';
import {ToolbarTitleShell} from '../shell/ToolbarTitleShell';
import UserMenu from './UserMenu';
import {Button} from '../widgets/Button';
import IconButton from '../widgets/IconButton';
import packiIconDark from '../../assets/snack-icon-dark.svg';
import packiIconLight from '../../assets/snack-icon.svg';
import {LoggedUser} from '../../features/app';
import {Packi} from '../../features/packi';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
export type EditorToolbarProps = { 
    name: string;
    description: string;
    createdAt: string | undefined;
    saveStatus: SaveStatus;
    saveHistory: SaveHistory;
    viewer: Viewer | undefined;
    isDownloading: boolean;
    isEditModalVisible: boolean;
    onSubmitMetadata: (details: { 
        name: string;
        description: string;
    }) => void;
    onShowEditModal: () => void;
    onDismissEditModal: () => void;
    onDownloadCode: () => Promise<void>;
    onPublishAsync: (options?: SaveOptions) => Promise<void>;
    currentPacki?: Packi;
    loggedUser: LoggedUser | undefined;
    splitViewKind: string;
    // isResolving: boolean;
    isAuthModalVisible: boolean;
    isWizziJobWaiting: boolean;
    onLoggedOn: (user: LoggedUser) => void;
    onLoggedOff: () => void;
    onChangeSplitViewKind: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onExecuteWizziJob: () => void;
    onShowPackiManager: () => void;
    onSaveCode: () => void;
    creatorUsername?: string;
};
export function EditorToolbar(props: EditorToolbarProps) {

    const [preferences] = usePreferences();
    const {
        name, 
        description, 
        createdAt, 
        saveHistory, 
        saveStatus, 
        viewer, 
        isDownloading, 
        isEditModalVisible, 
        onSubmitMetadata, 
        onShowEditModal, 
        onDismissEditModal, 
        onDownloadCode, 
        onPublishAsync, 
        splitViewKind, 
        onChangeSplitViewKind, 
        onLoggedOn, 
        onLoggedOff, 
        loggedUser, 
        isAuthModalVisible, 
        isWizziJobWaiting, 
        onExecuteWizziJob, 
        onShowPackiManager
     } = props;
    const {
        theme
     } = preferences;
    const isPublishing = saveStatus === 'publishing';
    const isPublished = saveStatus === 'published';
    return  (
        <ToolbarShell
        >
            <ToolbarTitleShell
            >
                <img
                 src={theme === 'dark' ? packiIconDark : packiIconLight} alt="Snack" className={css(styles.logo)} />
                <EditorTitle 
                    name={name}
                    description={description}
                    createdAt={createdAt}
                    saveHistory={saveHistory}
                    saveStatus={saveStatus}
                    viewer={viewer}
                    isEditModalVisible={isEditModalVisible}
                    onSubmitMetadata={onSubmitMetadata}
                    onShowEditModal={onShowEditModal}
                    onDismissEditModal={onDismissEditModal}
                 />
            </ToolbarTitleShell>
            <div
             className={css(styles.buttons)}>
                <Button 
                    variant="secondary"
                    onClick={() => 
                        
                            onPublishAsync()
                    }
                    disabled={isPublishing || isPublished}
                    loading={isPublishing}
                    className={css(styles.saveButton)}
                >
                    {
                        isPublishing ? 'Saving…' : isPublished ? 'Saved' : 'Save'
                    }
                </Button>
                <Select
                 value={splitViewKind} onChange={onChangeSplitViewKind}>
                    <MenuItem
                     value={'left'}>
                        Left
                    </MenuItem>
                    <MenuItem
                     value={'right'}>
                        Right
                    </MenuItem>
                    <MenuItem
                     value={'both'}>
                        Both
                    </MenuItem>
                </Select>
                <IconButton 
                    responsive
                    title="Download as zip"
                    onClick={onDownloadCode}
                    disabled={isDownloading || isPublishing}
                >
                    <svg
                     width="20" height="20">
                        <path
                         d="M14.167 10H5.833L10 16.667 14.167 10z" />
                        <path
                         d="M2.5 18.333h15M10 10V1.667" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </IconButton>
                <SearchButton
                 responsive />
                <UserMenu
                 />
            </div>
        </ToolbarShell>
        )
    ;
}
export default EditorToolbar;
const styles = StyleSheet.create({
    logo: {
        width: 24, 
        height: 24, 
        marginLeft: 16, 
        marginRight: 16
     }, 
    buttons: {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        position: 'relative', 
        zIndex: 5
     }, 
    saveButton: {
        height: 40, 
        fontWeight: 600, 
        minWidth: 80, 
        fontSize: '16px', 
        marginRight: 16
     }
 });
