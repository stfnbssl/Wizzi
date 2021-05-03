/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\src\components\EditorView\EditorToolbar.tsx.ittf
    utc time: Mon, 03 May 2021 09:48:27 GMT
*/
import {StyleSheet, css} from 'aphrodite';
import * as React from 'react';
import {SaveStatus, SaveHistory, SaveOptions, Viewer} from './mocks';
import EditorTitle from './EditorTitle';
import {usePreferences} from '../../features/preferences/index';
import SearchButton from '../Search/SearchButton';
import {ToolbarShell} from '../shell/ToolbarShell';
import {ToolbarTitleShell} from '../shell/ToolbarTitleShell';
import UserMenu from './UserMenu';
import {Button} from '../widgets/Button';
import IconButton from '../widgets/IconButton';
import packiIconDark from '../../assets/snack-icon-dark.svg';
import packiIconLight from '../../assets/snack-icon.svg';
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
        onPublishAsync
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
