/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\src\site\webpacks\shell\src\components\EditorView\EditorTitle.tsx.ittf
    utc time: Wed, 14 Apr 2021 15:53:09 GMT
*/
import {StyleSheet, css} from 'aphrodite';
import formatDistance from 'date-fns/formatDistance';
import * as React from 'react';
import {getLoginHref} from '../../features/auth/index';
import {c} from '../ThemeProvider';
import {SaveStatus, SaveHistory} from '../../features/packi/index';
import {Viewer} from '../../features/account/index';
import EditorTitleName from './EditorTitleName';
import ModalEditTitleAndDescription from './ModalEditTitleAndDescription';
type Props = { 
    name: string;
    description: string | undefined;
    createdAt: string | undefined;
    saveHistory: SaveHistory;
    saveStatus: SaveStatus;
    viewer: Viewer | undefined;
    isEditModalVisible: boolean;
    onShowEditModal: () => void;
    onDismissEditModal: () => void;
    onSubmitMetadata: (details: { 
        name: string;
        description: string;
    }) => void;
};
export default function EditorTitle(props: Props) {
    
        const [date, setDate] = React.useState(new Date());
        React.useEffect(() => {
        
            const timer = setInterval(() => 
            
                setDate(new Date())
            , 10000);
            return () => 
                
                    clearInterval(timer)
            ;
        }
        , [])
        const {
            description, 
            name, 
            createdAt, 
            saveHistory, 
            saveStatus, 
            viewer, 
            isEditModalVisible, 
            onShowPreviousSaves, 
            onShowEditModal, 
            onSubmitMetadata, 
            onDismissEditModal
         } = props;
        const lastSave = saveHistory.length ? saveHistory[0] : null;
        const savedAt = lastSave ? lastSave.savedAt : createdAt;
        const hasPermanentHistory = saveHistory ? saveHistory.some(item => 
            
                !item.isDraft
            ) : false;
        let statusText;
        if (viewer) {
            if (saveStatus === 'saving-draft' || saveStatus === 'publishing') {
                statusText = 'Saving changes…';
            }
            else {
                if (savedAt) {
                    const dtSavedAt = new Date(savedAt);
                    const timestamp = date > dtSavedAt ? `${formatDistance(date, dtSavedAt, {
                            includeSeconds: true, 
                            addSuffix: true
                         })}` : '';
                    if (saveStatus === 'unsaved' || saveStatus === 'edited') {
                        statusText = `Last saved ${timestamp}`;
                    }
                    else {
                        statusText = `All changes saved ${timestamp}`;
                    }
                }
                else {
                    statusText = 'Not saved yet';
                }
            }
            statusText =  (
            <React.Fragment
            >
                <span
                 className={css(styles.statusText)}>
                    {statusText}
                    .
                </span>
                {' '}
                {
                    hasPermanentHistory ?  (
                        <button
                         onClick={onShowPreviousSaves} className={css(styles.textButton)}>
                            See previous saves.
                        </button>
                        )
                     : null
                }
            </React.Fragment>
            )
            ;
        }
        else {
            // User is a guest
            statusText =  (
            <React.Fragment
            >
                <a
                 href={getLoginHref()} className={css(styles.textButton)}>
                    Log in
                </a>
                {' '}
                <span
                 className={css(styles.statusText)}>
                    to save your changes as you work
                </span>
            </React.Fragment>
            )
            ;
        }
        return  (
            <div
             className={css(styles.container)}>
                <div
                 className={css(styles.header)}>
                    <EditorTitleName 
                        name={name}
                        description={description}
                        onSubmitMetadata={onSubmitMetadata}
                        onShowEditModal={onShowEditModal}
                     />
                    <div
                     className={css(styles.metadata)}>
                        <p
                         className={css(styles.status)}>
                            {statusText}
                        </p>
                        {
                            viewer && saveStatus === 'saving-draft' ?  (
                                <div
                                 className={css(styles.spinner)} />
                                )
                             : null
                        }
                        {
                            (viewer && saveStatus === 'saved-draft') || saveStatus === 'published' ?  (
                                <svg 
                                    className={css(styles.check)}
                                    width="11px"
                                    height="8px"
                                    viewBox="0 0 11 8"
                                >
                                    <polygon
                                     fill={c('success')} points="3.34328358 6.32835821 0.835820896 3.82089552 0 4.65671642 3.34328358 8 10.5074627 0.835820896 9.67164179 0" />
                                </svg>
                                )
                             : null
                        }
                    </div>
                </div>
                <ModalEditTitleAndDescription 
                    title="Edit Snack Details"
                    action="Done"
                    visible={isEditModalVisible}
                    onDismiss={onDismissEditModal}
                    onSubmit={(details) => {
                        
                            onSubmitMetadata(details);
                            onDismissEditModal();
                        }
                    }
                    description={description}
                    name={name}
                 />
            </div>
            )
        ;
    }
const spin = {
    from: {
        transform: 'rotate(0deg)'
     }, 
    to: {
        transform: 'rotate(360deg)'
     }
 };
const styles = StyleSheet.create({
    container: {
        display: 'flex', 
        alignItems: 'center', 
        minWidth: 0, 
        height: '100%'
     }, 
    header: {
        minWidth: 0, 
        marginRight: 16
     }, 
    metadata: {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center'
     }, 
    status: {
        fontSize: 14, 
        margin: '-2px 4px 0 6px', 
        textOverflow: 'ellipsis', 
        overflow: 'hidden'
     }, 
    textButton: {
        appearance: 'none', 
        background: 'none', 
        border: 0, 
        color: c('text'), 
        margin: 0, 
        padding: 0, 
        textDecoration: 'underline'
     }, 
    statusText: {
        opacity: 0.5
     }, 
    spinner: {
        borderStyle: 'solid', 
        borderTopColor: c('selected'), 
        borderLeftColor: c('selected'), 
        borderBottomColor: c('selected'), 
        borderRightColor: 'rgba(0, 0, 0, .16)', 
        borderWidth: 1, 
        height: 12, 
        width: 12, 
        borderRadius: '50%', 
        margin: '0 4px', 
        animationDuration: '1s', 
        animationName: [
            spin
        ], 
        animationIterationCount: 'infinite', 
        animationTimingFunction: 'linear'
     }, 
    check: {
        marginBottom: -4
     }
 });
