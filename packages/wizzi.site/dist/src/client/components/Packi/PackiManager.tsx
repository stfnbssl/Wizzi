/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\src\components\Packi\PackiManager.tsx.ittf
    utc time: Tue, 11 May 2021 04:47:43 GMT
*/
import * as React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {withStyles, createStyles, Theme} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import {ThemeName, withThemeName} from '../../features/preferences';
import {c} from '../ThemeProvider';
import {Packi, packiValidations} from '../../features/packi';
import Button from '../widgets/Button';
import EditorForm from '../../features/form/EditorForm';
type PackiManagerProps = { 
    classes: any;
    currentPacki?: Packi;
    packiNames: string[];
    packiTemplateNames: string[];
    onSelectPacki: (id: string) => void;
    onDeletePacki: (id: string) => void;
    onCreatePacki: (id: string, kind: string) => void;
    onUploadPackiTemplate: (templateId: string, virtualFiles: boolean) => void;
};
type Props = PackiManagerProps & { 
    theme: ThemeName;
};
type modalKind = 'create' | 'clone' | 'commit' | 'saveTemplate' | 'none';
type State = { 
    modalVisible: modalKind;
};
class PackiManager extends React.PureComponent<Props, State> {
    state = {
        modalVisible: 'none' as modalKind
    }
    ;
    _handleDismissModal = () => {
    
        console.log('_handleDismissModal');
        this.setState({
            modalVisible: 'none'
         })
    }
    ;
    _handleShowModal = (kind: modalKind) => 
    
        this.setState({
            modalVisible: kind
         })
    ;
    _handleCreatePacki = (name: string, kind: string) => {
    
        // alert('Create packi ' + name + ' of kind ' + kind);
        this._handleDismissModal();
        // alert('Create packi ' + name + ' of kind ' + kind);
        this.props.onCreatePacki(name, kind);
    }
    ;
    _handleUploadPackiTemplate = (templateId: string, virtualFiles: boolean) => {
    
        this._handleDismissModal();
        alert('Save packi template ' + templateId);
        this.props.onUploadPackiTemplate(templateId, virtualFiles);
    }
    ;
    render() {
        const {
            classes, 
            currentPacki, 
            packiNames, 
            packiTemplateNames, 
            onSelectPacki, 
            onDeletePacki
         } = this.props;
        const {
            modalVisible
         } = this.state;
        const gitBranchesTODO = [
            'master'
        ];
        return  (
            <div
            >
                {
                    modalVisible !== 'none' ? null :  (
                        <div
                        >
                            <div
                             className={css(styles.buttons)}>
                                <Fab
                                 variant="extended" onClick={() => 
                                    
                                        this._handleShowModal('create')
                                } className={classes.fabButton}>
                                    Create new
                                </Fab>
                                <Fab
                                 variant="extended" onClick={() => 
                                    
                                        this._handleShowModal('clone')
                                } className={classes.fabButton}>
                                    Git clone
                                </Fab>
                                <Fab
                                 variant="extended" onClick={() => 
                                    
                                        this._handleShowModal('commit')
                                } className={classes.fabButton}>
                                    Git commit/push
                                </Fab>
                                <Fab
                                 variant="extended" onClick={() => 
                                    
                                        this._handleShowModal('saveTemplate')
                                } className={classes.fabButton}>
                                    Upload template
                                </Fab>
                            </div>
                            <div
                             className={css(styles.title)}>
                                Your Packies
                            </div>
                            <List
                             dense={true}>
                                {
                                    packiNames.map((name, i) => 
                                    
                                         (
                                        <ListItem
                                         key={i} button>
                                            <ListItemText
                                             primary={name} onClick={() => 
                                                
                                                    onSelectPacki(name)
                                            } />
                                            <ListItemSecondaryAction
                                            >
                                                <IconButton
                                                 aria-label="Delete" onClick={() => 
                                                    
                                                        onDeletePacki(name)
                                                }>
                                                    <DeleteIcon
                                                     />
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                        )
                                    
                                    )
                                }
                            </List>
                        </div>
                        )
                    
                }
                <EditorForm 
                    title="Create New Packi"
                    action="Confirm"
                    visible={modalVisible === 'create'}
                    onDismiss={this._handleDismissModal}
                    onSubmit={values => 
                        
                            // alert(JSON.stringify(values));
                            this._handleCreatePacki(values['name'], values['kind'])
                    }
                    fields={{
                            name: {
                                type: 'text', 
                                label: 'Name', 
                                onValidate: packiValidations.validatePackiName
                             }, 
                            kind: {
                                type: 'select', 
                                label: 'Kind', 
                                options: packiTemplateNames.map((name) => {
                                
                                    return {
                                            label: name, 
                                            value: name
                                         };
                                }
                                )
                             }
                         }}
                 />
                {
                    currentPacki
                     &&  (
                        <EditorForm 
                            title="Save packi template"
                            action="Confirm"
                            visible={modalVisible === 'saveTemplate'}
                            onDismiss={this._handleDismissModal}
                            onSubmit={(values: { 
                                    [k: string]: any;
                                }) => 
                                
                                    // alert(JSON.stringify(values));
                                    this._handleUploadPackiTemplate(values['templateId'], values['virtualFiles'])
                            }
                            fields={{
                                    templateId: {
                                        type: 'text', 
                                        label: 'Template id', 
                                        default: '', 
                                        onValidate: packiValidations.validatePackiName
                                     }, 
                                    virtualFiles: {
                                        type: 'checkbox', 
                                        label: 'Virtual files', 
                                        default: true
                                     }
                                 }}
                         />
                        )
                    
                }
            </div>
            )
        ;
    }
}
const styles = StyleSheet.create({
    container: {
        display: 'flex', 
        flexDirection: 'row', 
        flexWrap: 'nowrap', 
        fontFamily: 'var(--font-monospace)', 
        fontSize: 13, 
        minHeight: 16, 
        margin: '4px 0'
     }, 
    title: {
        height: 72, 
        fontSize: 24, 
        width: '100%', 
        lineHeight: '24px', 
        display: 'flex', 
        flexShrink: 0, 
        alignItems: 'center', 
        justifyContent: 'center', 
        boxShadow: '0 1px 0 rgba(36, 44, 58, 0.1)'
     }, 
    buttons: {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        position: 'relative', 
        zIndex: 5, 
        marginTop: '6px', 
        borderTop: '1px black solid'
     }, 
    shortcutList: {
        fontSize: '1.2em', 
        tableLayout: 'fixed'
     }, 
    shortcutCell: {
        padding: '6px 8px', 
        color: c('primary'), 
        background: 'white', 
        ':hover': {
            background: c('primary'), 
            color: 'white'
         }
     }, 
    shortcutLabelCell: {
        textAlign: 'right'
     }, 
    shortcutDescriptionCell: {
        textAlign: 'left'
     }, 
    shortcutLabel: {
        color: 'inherit', 
        fontFamily: 'inherit', 
        fontSize: 'inherit', 
        backgroundColor: 'transparent', 
        boxShadow: 'none', 
        padding: 0, 
        display: 'inline-block'
     }, 
    saveButton: {
        minWidth: 100
     }
 });
const muiStyles = (theme: Theme) => 

    createStyles({
        fabButton: {
            margin: theme.spacing(1)
         }
     })
;
const StyledComp = withStyles(muiStyles)(PackiManager);
export default withThemeName(StyledComp);
