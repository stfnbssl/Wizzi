/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\src\components\Editor\MonacoEditor.tsx.ittf
    utc time: Fri, 07 May 2021 18:42:12 GMT
*/
import {StyleSheet, css} from 'aphrodite';
import classnames from 'classnames';
import debounce from 'lodash/debounce';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.main';
import {SimpleEditorModelResolverService} from 'monaco-editor/esm/vs/editor/standalone/browser/simpleServices';
import {StaticServices} from 'monaco-editor/esm/vs/editor/standalone/browser/standaloneServices';
import * as React from 'react';
import {Annotation} from '../../features/annotations/index';
import {getFileLanguage, getRelativePath, getAbsolutePath} from '../../features/file/index';
import {prettierCode} from '../../features/prettier/index';
import {withThemeName, ThemeName} from '../../features/preferences/index';
import ResizeDetector from '../widgets/ResizeDetector';
import {EditorProps} from './EditorProps';
import {light, dark} from './themes/monaco';
import overrides from './themes/monaco-overrides';

/**
    * 
    * Monkeypatch to make 'Find All References' work across multiple files
    * https://github.com/Microsoft/monaco-editor/issues/779#issuecomment-374258435
    * 
*/

// @ts-ignore
SimpleEditorModelResolverService.prototype.findModel = function(_: any, resource: any) { 
    return monaco.editor.getModels().find(model => 
        
            model.uri.toString() === resource.toString()
        );
}
;


// @ts-ignore
global.MonacoEnvironment = { getWorker(_: string, label: string) { switch (label) { case 'json': {  // @ts-ignore return new Worker('monaco-editor/esm/vs/language/json/json.worker', { type: 'module'  }); 
            }
            case 'typescript':
            case 'javascript': {
                
                // @ts-ignore
                return new Worker('monaco-editor/esm/vs/language/typescript/ts.worker', { type: 'module'  }); 
            }
            default: {
                
                // @ts-ignore
                return new Worker('monaco-editor/esm/vs/editor/editor.worker', { type: 'module'  }); 
            }
        }
    }
    
 };

monaco.editor.defineTheme('light', light);
monaco.editor.defineTheme('dark', dark);
/**
    // 
    // Disable typescript's diagnostics for JavaScript files.
    // This suppresses errors when using Flow syntax.
    // It's also unnecessary since we use ESLint for error checking.
    // 
*/
// 
monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
    noSemanticValidation: true, 
    noSyntaxValidation: true
 })

/**
    * 
    * Use prettier to format code.
    * This will replace the default formatter.
    * 
*/
const documentFormattingProvider: monaco.languages.DocumentFormattingEditProvider = {
    async provideDocumentFormattingEdits(model) {
        const text = await prettierCode(model.uri.path, model.getValue());
        return [
                {
                    range: model.getFullModelRange(), 
                    text
                 }
            ];
    }
    
 };
monaco.languages.registerDocumentFormattingEditProvider('javascript', documentFormattingProvider);
monaco.languages.registerDocumentFormattingEditProvider('typescript', documentFormattingProvider);
/**
    // 
    // Sync all the models to the worker eagerly.
    // This enables intelliSense for all files without needing an `addExtraLib` call.
    // 
*/
monaco.languages.registerDocumentFormattingEditProvider('markdown', documentFormattingProvider);
/**
    // 
    // Sync all the models to the worker eagerly.
    // This enables intelliSense for all files without needing an `addExtraLib` call.
    // 
*/
monaco.languages.typescript.typescriptDefaults.setEagerModelSync(true);
monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true)
/**
    * 
    * Configure the typescript compiler to detect JSX and load type definitions
    * 
*/
const compilerOptions: monaco.languages.typescript.CompilerOptions = {
    allowJs: true, 
    allowSyntheticDefaultImports: true, 
    alwaysStrict: true, 
    esModuleInterop: true, 
    forceConsistentCasingInFileNames: true, 
    isolatedModules: true, 
    jsx: monaco.languages.typescript.JsxEmit.React, 
    module: monaco.languages.typescript.ModuleKind.ESNext, 
    moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs, 
    noEmit: true, 
    resolveJsonModule: true, 
    strict: true, 
    target: monaco.languages.typescript.ScriptTarget.ESNext, 
    paths: {
        '*': [
            '*', 
            '*.native', 
            '*.ios', 
            '*.android'
        ]
     }
 };

monaco.languages.typescript.typescriptDefaults.setCompilerOptions(compilerOptions);
monaco.languages.typescript.javascriptDefaults.setCompilerOptions(compilerOptions);
export type MonacoEditorProps = EditorProps & { 
    theme: ThemeName;
};
type State = { 
};

// Store editor states such as cursor position, selection and scroll position for each model
const editorStates = new Map();

// Store details about typings we have requested and loaded
const requestedTypings = new Map();
const extraLibs = new Map();
const codeEditorService = StaticServices.codeEditorService.get();
const findModel = (path: string) => 

    monaco.editor.getModels().find(model => 
    
        model.uri.path === (`/${path}`)
    )
;
class MonacoEditorComp extends React.Component<MonacoEditorProps, State> {
    static defaultProps: Partial<MonacoEditorProps> = {
        lineNumbers: 'on', 
        wordWrap: 'on', 
        scrollBeyondLastLine: false, 
        minimap: {
            enabled: false
         }, 
        fontFamily: 'var(--font-monospace)', 
        fontLigatures: true
    }
    ;
    state: State = {};
    static removePath(path: string) {
        // Remove editor states
        editorStates.delete(path);
        
        // Remove associated models
        const model = findModel(path);
        model?.dispose?.();
    }
    static renamePath(oldPath: string, newPath: string) {
        const selection = editorStates.get(oldPath);
        editorStates.delete(oldPath);
        editorStates.set(newPath, selection);
        this.removePath(oldPath);
    }
    componentDidMount() {
        const {
            files, 
            selectedFile, 
            autoFocus, 
            updateFiles, 
            onSelectFile, 
            ...rest
         } = this.props;
        
        // The methods provided by the service are on it's prototype
        
        // So spreading this object doesn't work, we must mutate it
        codeEditorService.openCodeEditor = async ({
            resource, 
            options
         }: any, editor: monaco.editor.IStandaloneCodeEditor) => {
        
            // Remove the leading slash added by the Uri
            this.props.onSelectFile(resource.path.replace(/^\//, ''));
            editor.setSelection(options.selection);
            editor.revealLine(options.selection.startLineNumber);
            return {
                    getControl: () => 
                    
                        editor
                    
                 };
        }
        ;
        const editor = monaco.editor.create(this._node.current as HTMLDivElement, rest, codeEditorService);
        this._editor = editor;
        this._disposables = [
            editor
        ];
        this._disposables.push(editor.onDidChangeModelContent(this._handleEditFile));
        this._openFile(selectedFile, files[selectedFile]?.contents as string, autoFocus)
        for (const path in files) {
            const file = files[path];
            if (file.type === 'CODE') {
                this._initializeFile(path, file.contents);
            }
            // Load all the files so the editor can provide proper intellisense
        }
    }
    componentDidUpdate(prevProps: MonacoEditorProps, prevState: State) {
        const {
            selectedFile, 
            files, 
            autoFocus, 
            theme, 
            updateFiles, 
            onSelectFile, 
            ...rest
         } = this.props;
        if (this._editor) {
            this._editor.updateOptions(rest);
            const model = this._editor.getModel();
            const value: string = files[selectedFile]?.contents as any;
            if (selectedFile !== prevProps.selectedFile) {
                // Save the editor state for the previous file so we can restore it when it's re-opened
                editorStates.set(prevProps.selectedFile, this._editor.saveViewState());
                this._openFile(selectedFile, value, autoFocus);
            }
            else {
                if (model && value !== model.getValue()) {
                    // @ts-ignore
                    this._editor.executeEdits(null, [
                        {
                            range: model.getFullModelRange(), 
                            text: value
                         }
                    ])
                }
            }
        }
        if (theme !== prevProps.theme) {
            monaco.editor.setTheme(theme);
        }
        if (prevProps.files !== this.props.files) {
            for (const path in this.props.files) {
                const file = this.props.files[path];
                if (file.type === 'CODE' && file.contents !== prevProps.files[path]?.contents && path !== selectedFile) {
                    this._initializeFile(path, file.contents);
                }
            }
        }
    }
    componentWillUnmount() {
        this._disposables.forEach(dis => 
        
            dis.dispose()
        )
    }
    _initializeFile = (path: string, value: string) => {
        let model = findModel(path);
        if (model && !model.isDisposed()) {
            // If a model exists, we need to update it's value
            // This is needed because the content for the file might have been modified externally
            // Use `pushEditOperations` instead of `setValue` or `applyEdits` to preserve undo stack
            // @ts-ignore
            model.pushEditOperations([], [
                {
                    range: model.getFullModelRange(), 
                    text: value
                 }
            ])
        }
        else {
            model = monaco.editor.createModel(value, undefined, monaco.Uri.from({
                scheme: 'file', 
                path
             }))
            ;
            model.updateOptions({
                tabSize: 2, 
                insertSpaces: true
             })
        }
    };
    _openFile = (path: string, value: string, focus?: boolean) => {
        this._initializeFile(path, value);
        const model = findModel(path);
        if (this._editor && model) {
            this._editor.setModel(model);
            
            // Restore the editor state for the file
            const editorState = editorStates.get(path);
            if (editorState) {
                this._editor.restoreViewState(editorState);
            }
            if (focus) {
                this._editor.focus();
            }
        }
    };
    _handleEditFile = (_event: monaco.editor.IModelContentChangedEvent):  void => {
        const model = this._editor?.getModel?.();
        if (model) {
            const value = model.getValue();
            console.log('MonacoEditor', '_handleEditFile', value);
            if (value !== this.props.files[this.props.selectedFile]?.contents) {
                this.props.updateFiles(() => 
                
                    ({
                        [this.props.selectedFile]: {
                            type: 'CODE', 
                            contents: value
                         }
                     })
                )
            }
        }
    };
    _handleResize = debounce(() => 
    
        this._editor?.layout?.()
    , 50, {
        leading: true, 
        trailing: true
     });
    _disposables: monaco.IDisposable[] = [];
    _editor: monaco.editor.IStandaloneCodeEditor | null = null;
    _node = React.createRef<HTMLDivElement>();
    _statusbar = React.createRef<HTMLDivElement>();
    render() {
        return  (
            <div
             className={css(styles.container)}>
                <style
                 type="text/css" dangerouslySetInnerHTML={{
                        __html: overrides
                     }} />
                <ResizeDetector
                 onResize={this._handleResize}>
                    <div
                     ref={this._node} className={classnames(css(styles.editor), 'snack-monaco-editor', `theme-${this.props.theme}`)} />
                </ResizeDetector>
            </div>
            )
        ;
    }
}
export const MonacoEditor = withThemeName(MonacoEditorComp);
export default withThemeName(MonacoEditorComp);
const styles = StyleSheet.create({
    container: {
        display: 'flex', 
        flex: 1, 
        flexDirection: 'column', 
        minWidth: 0, 
        minHeight: 0
     }, 
    editor: {
        height: '100%', 
        width: '100%'
     }
 });
