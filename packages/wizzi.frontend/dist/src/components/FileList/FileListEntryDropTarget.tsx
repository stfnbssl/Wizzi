/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.frontend\.wizzi\src\components\FileList\FileListEntryDropTarget.tsx.ittf
    utc time: Sat, 01 May 2021 05:18:20 GMT
*/
import * as React from 'react';
import {getUniquePath, dragEventIncludes} from '../../features/file/index';
import {withThemeName, ThemeName} from '../../features/preferences/index';
import {lastDraggedEntry} from './FileListEntryBase';
import {FileSystemEntry} from './types';
type Props = { 
    entry?: FileSystemEntry;
    rest: FileSystemEntry[];
    onExpand?: (path: string, expand?: boolean) => void;
    onRename: (oldPath: string, newPath: string) => void;
    className?: string;
    theme: ThemeName;
    children?: any;
};

class FileListEntryDropTarget extends React.PureComponent<Props> {
    componentDidMount() {
        const container = this._container.current;
        if (container) {
            // We don't use react's event system since we need to stop the events from bubbling up
            container.addEventListener('dragover', this._handleDragOver);
            container.addEventListener('dragleave', this._handleDragLeave);
            container.addEventListener('dragend', this._handleDragLeave);
            container.addEventListener('drop', this._handleDrop);
        }
    }
    componentWillUnmount() {
        const container = this._container.current;
        if (container) {
            container.removeEventListener('dragover', this._handleDragOver);
            container.removeEventListener('dragleave', this._handleDragLeave);
            container.removeEventListener('dragend', this._handleDragLeave);
            container.removeEventListener('drop', this._handleDrop);
        }
    }
    _getParentPath = (path: string) => 
        (path.includes('/') ? path.replace(/\/[^/]+$/, '') : null);
    _isDirectChild = (path: string) => {
        if (this.props.entry && this.props.entry.item.path === path) {
            return true;
        }
        const parent = this._getParentPath(path);
        if (this.props.entry && parent) {
            return this.props.entry.item.path === parent;
        }
        return this.props.entry == null && parent == null;
    };
    _handleDragLeave = (e: any) => {
        e.currentTarget.style.backgroundColor = null;
        clearTimeout(this._dragTimer);
        this._dragTimer = null;
    };
    _handleDragOver = (e: any) => {
        const entry = lastDraggedEntry;
        if (!dragEventIncludes(e, 'application/json') || (this.props.entry && this.props.entry.item.type !== 'folder') || !entry) {
            return ;
        }
        if (entry.item.type !== 'file' && entry.item.type !== 'folder') {
            return ;
        }
        e.stopPropagation();
        if (this._isDirectChild(entry.item.path)) {
            return ;
        }
        e.preventDefault();
        e.currentTarget.style.backgroundColor = this.props.theme === 'dark' ? 'rgba(255, 255, 255, .1)' : 'rgba(0, 0, 0, .1)';
        if (this._dragTimer) {
            return ;
        }
        this._dragTimer = setTimeout(() => {
        
            if (this.props.entry && !this.props.entry.state.isExpanded && this.props.onExpand) {
                this.props.onExpand(this.props.entry.item.path);
            }
        }
        , 500)
        ;
    };
    _dragTimer: any;
    _handleDrop = (e: any) => {
        e.currentTarget.style.backgroundColor = null;
        if (!dragEventIncludes(e, 'application/json') || (this.props.entry && this.props.entry.item.type !== 'folder')) {
            return ;
        }
        e.preventDefault();
        e.stopPropagation();
        try {
            const data = e.dataTransfer.getData('application/json');
            const entry = JSON.parse(data);
            if ((entry.item.type !== 'file' && entry.item.type !== 'folder') || this._isDirectChild(entry.item.path)) {
                return ;
            }
            const name = entry.item.path.split('/').pop();
            this.props.onRename(entry.item.path, getUniquePath(this.props.rest.map(e => 
            
                e.item.path
            ), this.props.entry ? this.props.entry.item.path + '/' + name : name))
        } 
        catch (e) {
        } 
    };
    _container = React.createRef<HTMLDivElement>();
    render() {
        
        // eslint-disable-next-line no-unused-vars
        const {
            entry, 
            rest, 
            onExpand, 
            onRename, 
            theme, 
            ...restProps
         } = this.props;
        return  (
            <div
             {...restProps} ref={this._container} />
            )
        ;
    }
}
export default withThemeName(FileListEntryDropTarget);
