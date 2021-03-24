/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\filelist\FileListChildren.tsx.ittf
    utc time: Wed, 24 Mar 2021 16:19:16 GMT
*/
import * as React from 'react';
import {StyleSheet, css} from 'aphrodite';
import escapeRegexp from 'escape-string-regexp';
import FileListEntry from './FileListEntry';
import {isInsideFolder} from '../../features/filelist/fileUtilities';
import {FileSystemEntry} from '../../features/filelist/types';
import {prefTypes} from '../../features/preferences';
// import { SDKVersion } from '../../configs/sdk';
type Props = // sdkVersion: SDKVersion;
{ 
    parent: string;
    entries: FileSystemEntry[];
    clipboard: FileSystemEntry[];
    onOpen: (path: string) => void;
    onFocus: (path: string) => void;
    onSelect: (path: string) => void;
    onCopy: (path: string) => void;
    onDelete: (path: string) => void;
    onExpand: (path: string, expand?: boolean) => void;
    onCreateFile: (path: string | undefined) => void;
    onCreateFolder: (path: string | undefined) => void;
    onRename: (oldPath: string, newPath: string) => void;
    onPaste: (path: string | undefined, entry: FileSystemEntry) => void;
    onClearClipboard: () => void;
    theme: prefTypes.ThemeName;
    className?: string;
};
export default class FileListChildren extends React.PureComponent<Props> {
        _getImmediateChildren = () => 
            this.props.entries.filter(// Filter-out non-immediate children
            e => 
                !e.item.path.replace(new RegExp(`^${escapeRegexp(this.props.parent)}/`), '').includes('/')
            
            );
        render() {
            const {
                entries, 
                clipboard, 
                onCreateFile, 
                onCreateFolder, 
                onFocus, 
                onOpen, 
                onSelect, 
                onPaste, 
                onRename, 
                onExpand, 
                onDelete, 
                onCopy, 
                onClearClipboard, 
                className, 
                theme
            } = this.props;
            return  (
                <div className={`${css(styles.container)} ${className || ''}`}>
                    {
                        this._getImmediateChildren().sort((a, b) => {
                            if (a.item.type === b.item.type) {
                                if (a.item.path.startsWith('.') && !b.item.path.startsWith('.')) {
                                    return 1;
                                }
                                if (b.item.path.startsWith('.') && !a.item.path.startsWith('.')) {
                                    return -1;
                                }
                                return a.item.path.localeCompare(b.item.path);
                            }
                            else {
                                if (a.item.type === 'folder') {
                                    return -1;
                                }
                                else {
                                    return 1;
                                }
                            }
                        }
                        ).map((e) => 
                             (
                            <FileListEntry key={e.item.path}
                                entry={e}
                                rest={entries.filter(en => 
                                    isInsideFolder(en.item.path, e.item.path)
                                )}
                                clipboard={clipboard}
                                onCreateFile={onCreateFile}
                                onCreateFolder={onCreateFolder}
                                onOpen={onOpen}
                                onSelect={onSelect}
                                onFocus={onFocus}
                                onCopy={onCopy}
                                onPaste={onPaste}
                                onDelete={onDelete}
                                onRename={onRename}
                                onExpand={onExpand}
                                onClearClipboard={onClearClipboard}
                                getAdjacentEntries={this._getImmediateChildren}
                                theme={theme}
                            // sdkVersion={this.props.sdkVersion}
                             />
                            )
                        
                        )
                        
                    }
                </div>
                )
            ;
        }
    }
const styles = StyleSheet.create({
    container: {
        display: 'inline-block', 
        width: '100%'
    }
});
