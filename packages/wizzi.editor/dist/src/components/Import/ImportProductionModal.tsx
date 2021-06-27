/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.editor\.wizzi\src\components\Import\ImportProductionModal.tsx.ittf
    utc time: Sun, 27 Jun 2021 11:22:09 GMT
*/
import {StyleSheet, css} from 'aphrodite';
import * as React from 'react';
import type {SavedPacki, SDKVersion, PackiFiles, PackiFile, PackiDependencies, PackiDependency} from '../../features/packi';
import {c} from '../ThemeProvider';
import Button from '../widgets/Button';
import LargeInput from '../widgets/LargeInput';
import ModalDialog from '../widgets/ModalDialog';
import ProgressIndicator from '../widgets/ProgressIndicator';
import ToggleSwitch from '../widgets/ToggleSwitch';
type Props = { 
    visible: boolean;
    onHide: () => void;
    onSubmitMetadata: (details: { 
        name: string;
        description: string;
    }) => void;
    updateFiles: (updateFn: (files: PackiFiles) => { 
        [path: string]: PackiFile | null;
    }) => void;
};
type State = { 
    isLoading: boolean;
    error: string;
    url: string;
    resetDependencies: boolean;
};
export default class ImportProductionModal extends React.PureComponent<Props, State> {
        state: State = {
            isLoading: false, 
            error: '', 
            url: '', 
            resetDependencies: false
        }
        ;
        _hideImportModal = () => {
            this.setState({
                isLoading: false, 
                error: '', 
                url: '', 
                resetDependencies: false
             })
            this.props.onHide();
        };
        _handleImportClick = async (e: React.FormEvent<HTMLFormElement>) => {
        
            e.preventDefault();
            this.setState({
                isLoading: true, 
                error: ''
             })
            try {
                const match = this.state.url.match(/^https:\/\/packi\.expo\.io\/(.*)/);
                if (!match) {
                    throw new Error('Invalid url');
                }
                const id = match[1];
                const response = await fetch(`https://exp.host/--/api/v2/packi/${id}`, {
                        headers: {
                            'Packi-Api-Version': '3.0.0'
                         }
                     });
                const text = await response.text();
                const json = JSON.parse(text);
                if (json.errors?.length) {
                    throw new Error(JSON.stringify(json.errors));
                }
                const packi: SavedPacki = {
                    ...json
                 };
                this.props.onSubmitMetadata({
                    name: packi.manifest.name, 
                    description: packi.manifest.description
                 })
                this.props.updateFiles((files) => {
                
                    const newFiles: any = {};
                    for (const key in files) {
                        newFiles[key] = null;
                    }
                    const packiFiles = typeof packi.code === 'string' ? {
                            'App.js': {
                                contents: packi.code, 
                                type: 'CODE'
                             }
                         } : (packi.code as any);
                    for (const key in packiFiles) {
                        newFiles[key] = packiFiles[key];
                    }
                    return newFiles;
                }
                )
                this.setState({
                    isLoading: false
                 })
                this.props.onHide();
            } 
            catch (e) {
                this.setState({
                    isLoading: false, 
                    error: e.message
                 })
            } 
        }
        ;
        _handleChange = (e: React.ChangeEvent<HTMLInputElement>) => 
            this.setState({
                url: e.target.value
             });
        render() {
            const {
                visible
             } = this.props;
            const {
                isLoading, 
                error, 
                url
             } = this.state;
            return  (
                <ModalDialog
                 visible={visible} onDismiss={this._hideImportModal} title="Import from production">
                    {
                        isLoading ?  (
                            <ProgressIndicator
                             duration={45000} className={css(styles.progress)} />
                            )
                         : null
                    }
                    <form
                     onSubmit={this._handleImportClick}>
                        <p
                         className={!error ? css(styles.paragraph) : css(styles.errorParagraph)}>
                            {
                                !error ? 'Import a saved Packi from production. This will overwrite all your current files and dependencies with the contents of the saved Packi.' : `An error occurred during import. ${error}`
                            }
                        </p>
                        <LargeInput 
                            name="url"
                            value={url}
                            onChange={this._handleChange}
                            placeholder="https://packi.expo.io/82kWr6arT"
                            autoFocus
                         />
                        <div
                         className={css(styles.buttons)}>
                            <Button 
                                large
                                disabled={!url}
                                loading={isLoading}
                                type="submit"
                                variant="primary"
                            >
                                {
                                    isLoading ? 'Importing Packi...' : 'Import Packi'
                                }
                            </Button>
                        </div>
                    </form>
                </ModalDialog>
                )
            ;
        }
    }
const styles = StyleSheet.create({
    paragraph: {
        margin: '8px 0 16px'
     }, 
    errorParagraph: {
        margin: '8px 0 16px', 
        color: c('error')
     }, 
    progress: {
        marginTop: -16
     }, 
    switch: {
        display: 'flex', 
        flexDirection: 'row'
     }, 
    buttons: {
        margin: '16px 0 0 0'
     }
 });
