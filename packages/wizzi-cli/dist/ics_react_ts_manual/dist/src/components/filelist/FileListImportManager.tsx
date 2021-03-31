/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\ics_react_ts_manual\.wizzi\src\components\filelist\FileListImportManager.tsx.ittf
    utc time: Fri, 26 Mar 2021 07:40:26 GMT
*/
import * as React from 'react';
import {StyleSheet, css} from 'aphrodite';
import Button from '../shared/Button';
import Modal from '../shared/Modal';
import ModalDialog from '../shared/ModalDialog';
// import convertDataTransferItemsToFiles from '../../utils/convertDataTransferItemsToFiles';
import colors from '../../configs/colors';
import {c} from '../../features/preferences/ColorsProvider';
import {prefTypes, withThemeName} from '../../features/preferences';
// import { getUniquePath, isESLintConfig } from '../../features/filelist/fileUtilities';
// import { WebkitFileEntry, WebkitDirectoryEntry } from '../../utils/convertDataTransferItemsToFiles';
import dragEventIncludes from '../utils/dragEventIncludes';
import {FileSystemEntry} from '../../features/filelist/types';
type Props = // onImportFile: (e: TextFileEntry | AssetFileEntry) => void;
{ 
    entries: FileSystemEntry[];
    uploadFileAsync: (file: File) => Promise<string>;
    render: (options: { 
        onImportStart: () => void;
    }) => React.ReactNode;
    className?: string;
    theme: prefTypes.ThemeName;
};
// 
type FileItem = File;
type State = { 
    isImportModalShown: boolean;
    isDragging: boolean;
    isImporting: boolean;
    itemsToImport: FileItem[];
    itemsErrored: Array<{ 
        item: FileItem;
        error: Error;
    }>;
    importTotal: number;
    importProgress: number;
};
class FileListImportManager extends React.PureComponent<Props, State> {
    state: State = {
        isImportModalShown: false, 
        isDragging: false, 
        isImporting: false, 
        itemsToImport: [], 
        itemsErrored: [], 
        importProgress: 0, 
        importTotal: 0
    }
    ;
    componentDidMount() {
        document.addEventListener('dragover', this._handleDragOver);
        document.addEventListener('drop', this._handleDrop);
    }
    // @ts-ignore
    _handleDragOver = (e: DragEvent) => {
        if (dragEventIncludes(e, 'Files')) {
            e.preventDefault();
            if (this.state.isImportModalShown) {
                return true;
            }
            if (!this.state.isDragging) {
                this.setState({
                    isDragging: true
                 })
            }
            clearTimeout(this._dragTimer);
            this._dragTimer = setTimeout(this._handleDragEnd, 300);
        }
    };
    _handleDragEnd = () => {
        if (this.state.isDragging) {
            this.setState({
                isDragging: false
             })
        }
    };
    _handleDrop = (e: DragEvent) => {
        if (dragEventIncludes(e, 'Files') && e.dataTransfer && (e.dataTransfer.items || e.dataTransfer.files)) {
            const dataTransfer = e.dataTransfer;
            e.preventDefault();
            const entries: FileItem[] = dataTransfer.items ? Array.from(dataTransfer.items).map(it => 
                    it.webkitGetAsEntry()
                ) : Array.from(dataTransfer.files);
            this._handleSelectFilesForImport(entries);
        }
    };
    _dragTimer: any;
    _showImportModal = () => 
        this.setState({
            isImportModalShown: true
         });
    _hideImportModal = () => 
        this.setState({
            isImportModalShown: false, 
            itemsToImport: []
         });
    _handleSelectFilesForImport = (items: FileItem[]) => 
        this.setState((state) => 
            ({
                isImportModalShown: true, 
                itemsToImport: [
                    ...state.itemsToImport, 
                    ...items
                ], 
                itemsErrored: []
             })
        );
    //
    _handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        this._handleSelectFilesForImport(e.target.files);
    };
    _handleRemoveFileImport = (file: FileItem) => 
        this.setState((state) => 
            ({
                itemsToImport: state.itemsToImport.filter(f => 
                    f !== file
                )
             })
        );
    _handleProgressDismiss = () => 
        this.setState({
            itemsToImport: [], 
            itemsErrored: [], 
            importProgress: 0, 
            isImporting: false
         });
    render() {
        const {
            isImporting, 
            importProgress, 
            itemsToImport, 
            itemsErrored, 
            isDragging, 
            isImportModalShown, 
            importTotal
         } = this.state;
        const {
            theme
         } = this.props;
        const importedFiles = importProgress - itemsErrored.length;
        return  (
            <div className={this.props.className}>
                {
                    this.props.render({
                        onImportStart: this._showImportModal
                     })
                }
                {
                    isImporting ?  (
                        <div className={css(styles.importProgress)}>
                            <div className={css(styles.importProgressHeader)}>
                                <h4 className={css(styles.importProgressLabel)}>
                                    {
                                        importTotal === 0 ? 'Reading files…' : importProgress === importTotal ? `${importedFiles} file${
                                                importedFiles === 1
                                                 ? ''
                                                 : 's'}
                                                 imported${
                                                itemsErrored.length
                                                 ? `, ${itemsErrored.length} failed to import`
                                                 : ` successfully`}
                                                ` : `Importing files (${importProgress + 1}/${importTotal})`
                                    }
                                </h4>
                                <button onClick={this._handleProgressDismiss} className={css(styles.importProgressButton)}>
                                    {
                                        importProgress === importTotal ? 'Dismiss' : 'Cancel'
                                    }
                                </button>
                            </div>
                            {
                                importTotal ?  (
                                    <progress className={css(styles.importProgressBar)} value={(importProgress / importTotal) * 100} max={100} />
                                    )
                                 : null
                            }
                        </div>
                        )
                     : null
                }
                <Modal visible={isDragging}>
                    <div className={css(styles.dropzoneLarge)}>
                        <h2>
                            Drop anywhere to import
                        </h2>
                        <p>
                            You'll be able to adjust your selection before importing them into your project
                        </p>
                    </div>
                </Modal>
                <ModalDialog visible={isImportModalShown} onDismiss={this._hideImportModal} title="Import files">
                    <p className={css(styles.paragraph)}>
                        Import JavaScript files from your computer or a GitHub repository to use in your expo
            project.
                    </p>
                    <div className={css(styles.dropzoneSmall, theme === 'dark' ? styles.dropzoneSmallDark : styles.dropzoneSmallLight)}>
                        {
                            itemsToImport.length ?  (
                                <ul className={css(styles.fileList)}>
                                    {
                                        itemsToImport.map((f, i) => 
                                             (
                                            <li className={css(styles.fileEntry)} key={i}>
                                                <span className={css(styles.fileEntryName)}>
                                                    {
                                                        (((f as any) (
                                                            <div className="isDirectory" />
                                                            )
                                                        ) ? `${f.name}/` : f.name)
                                                    }
                                                </span>
                                                <span className={css(styles.fileEntrySize)}>
                                                    {
                                                        (((typeof((f as any) (
                                                                <div className="size" />
                                                                )
                                                        )) === 'number'
                                                        ) ? `${(f as any) (
                                                                <div className="size" />
                                                                )
                                                            , 1024
                                                            .toFixed(2)
                                                            }kb` : '')
                                                    }
                                                </span>
                                                <button onClick={() => 
                                                    this._handleRemoveFileImport(f)
                                                } className={css(styles.fileEntryClose)}>
                                                    ×
                                                </button>
                                            </li>
                                            )
                                        
                                        )
                                    }
                                </ul>
                                )
                             :  (
                                <div className={css(styles.dropzonePlaceholder)}>
                                    Drop your files or
                                    <label className={css(styles.fileInputLabel)}>
                                        browse
                                        <input multiple
                                            type="file"
                                            accept=".js"
                                            onChange={this._handleFilesChange}
                                            className={css(styles.fileInput)}
                                         />
                                    </label>
                                </div>
                                )
                            
                        }
                    </div>
                    <Button large
                        variant="secondary"
                        disabled={!itemsToImport.length}
                    // onClick={this._handleImportClick}
                    >
                        Import
                    </Button>
                </ModalDialog>
            </div>
            )
        ;
    }
}
export default withThemeName(FileListImportManager);
const styles = StyleSheet.create({
    dropzoneLarge: {
        textAlign: 'center', 
        padding: 48, 
        border: `2px dashed ${colors.text.dark}`, 
        borderRadius: 4
     }, 
    dropzoneSmall: {
        border: `1px dashed rgba(0, 0, 0, .32)`, 
        borderRadius: 3, 
        height: '12em', 
        marginBottom: 8
     }, 
    dropzoneSmallLight: {
        backgroundColor: 'rgba(255, 255, 255, .5)'
     }, 
    dropzoneSmallDark: {
        backgroundColor: 'rgba(0, 0, 0, .2)'
     }, 
    dropzonePlaceholder: {
        width: '100%', 
        height: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center'
     }, 
    paragraph: {
        margin: '8px 0 16px'
     }, 
    fileInputLabel: {
        margin: 0, 
        paddingLeft: 4, 
        color: colors.primary, 
        fontWeight: 'normal', 
        cursor: 'pointer', 
        ':hover': {
            textDecoration: 'underline'
         }
     }, 
    fileInput: {
        display: 'none'
     }, 
    fileList: {
        listStyle: 'none', 
        textAlign: 'left', 
        padding: 0, 
        height: '100%', 
        width: '100%', 
        overflow: 'auto'
     }, 
    fileEntry: {
        display: 'flex', 
        borderBottom: '1px solid rgba(0, 0, 0, .06)', 
        alignItems: 'center'
     }, 
    fileEntrySize: {
        flex: 1, 
        opacity: 0.5, 
        margin: 8
     }, 
    fileEntryName: {
        margin: 8, 
        maxWidth: '15em', 
        whiteSpace: 'nowrap', 
        textOverflow: 'ellipsis', 
        overflow: 'hidden'
     }, 
    fileEntryClose: {
        padding: '4px 12px', 
        margin: '0 4px', 
        fontSize: 18, 
        background: 'none', 
        border: 'none', 
        appearance: 'none'
     }, 
    importProgress: {
        position: 'fixed', 
        zIndex: 10, 
        left: '1em', 
        bottom: '4em', 
        width: '24em', 
        padding: '8px 16px', 
        borderRadius: 3, 
        backgroundColor: c('editor-background'), 
        border: `1px solid ${c('editor-border')}`, 
        boxShadow: '0 2px 8px rgba(36, 44, 58, 0.3)'
     }, 
    importProgressHeader: {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        margin: '4px 0'
     }, 
    importProgressLabel: {
        flex: 1, 
        fontSize: '1em', 
        fontWeight: 500, 
        margin: 0
     }, 
    importProgressButton: {
        appearance: 'none', 
        background: 'none', 
        border: 0, 
        color: colors.primary
     }, 
    importProgressBar: {
        appearance: 'none', 
        width: '100%', 
        margin: '8px 0', 
        height: 6, 
        borderRadius: 3, 
        overflow: 'hidden', 
        '::-webkit-progress-bar': {
            backgroundColor: 'rgba(0, 0, 0, .08)'
         }, 
        '::-webkit-progress-value': {
            backgroundColor: colors.primary
         }, 
        '::-moz-progress-bar': {
            backgroundColor: 'rgba(0, 0, 0, .16)'
         }, 
        '::-moz-progress-value': {
            backgroundColor: colors.primary
         }
     }
 });
