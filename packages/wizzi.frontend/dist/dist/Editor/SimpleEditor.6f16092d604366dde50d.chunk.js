(self["webpackChunkwizzi_frontend"] = self["webpackChunkwizzi_frontend"] || []).push([["Editor/SimpleEditor"],{

/***/ "./src/components/Editor/SimpleEditor.tsx":
/*!************************************************!*\
  !*** ./src/components/Editor/SimpleEditor.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SimpleEditor": () => (/* binding */ SimpleEditor),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var aphrodite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aphrodite */ "./node_modules/aphrodite/no-important.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var escape_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! escape-html */ "./node_modules/escape-html/index.js");
/* harmony import */ var escape_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(escape_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs/components/prism-core */ "./node_modules/prismjs/components/prism-core.js");
/* harmony import */ var prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_simple_code_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-simple-code-editor */ "./node_modules/react-simple-code-editor/lib/index.js");
/* harmony import */ var prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prismjs/components/prism-clike */ "./node_modules/prismjs/components/prism-clike.js");
/* harmony import */ var prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prismjs/components/prism-javascript */ "./node_modules/prismjs/components/prism-javascript.js");
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prismjs/components/prism-typescript */ "./node_modules/prismjs/components/prism-typescript.js");
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prismjs/components/prism-markup */ "./node_modules/prismjs/components/prism-markup.js");
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prismjs_components_prism_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prismjs/components/prism-jsx */ "./node_modules/prismjs/components/prism-jsx.js");
/* harmony import */ var prismjs_components_prism_jsx__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_jsx__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prismjs/components/prism-json */ "./node_modules/prismjs/components/prism-json.js");
/* harmony import */ var prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var prismjs_components_prism_markdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prismjs/components/prism-markdown */ "./node_modules/prismjs/components/prism-markdown.js");
/* harmony import */ var prismjs_components_prism_markdown__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_markdown__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _features_preferences_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../features/preferences/index */ "./src/features/preferences/index.tsx");
/* harmony import */ var _themes_simple_editor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./themes/simple-editor */ "./src/components/Editor/themes/simple-editor.tsx");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.frontend\.wizzi\src\components\Editor\SimpleEditor.tsx.ittf
    utc time: Sat, 01 May 2021 04:43:27 GMT
*/















// Store selection and undo stack
const sessions = new Map();

let SimpleEditorComp = /*#__PURE__*/function (_React$Component) {
  _inherits(SimpleEditorComp, _React$Component);

  var _super = _createSuper(SimpleEditorComp);

  function SimpleEditorComp(...args) {
    var _this;

    _classCallCheck(this, SimpleEditorComp);

    _this = _super.call(this, ...args);

    _defineProperty(_assertThisInitialized(_this), "_highlight", (path, code) => {
      if (path.endsWith('.ts') || path.endsWith('.tsx')) {
        return (0,prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_3__.highlight)(code, prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_3__.languages.ts, 'typescript');
      } else {
        if (path.endsWith('.js')) {
          return (0,prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_3__.highlight)(code, prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_3__.languages.jsx, 'jsx');
        } else {
          if (path.endsWith('.json')) {
            return (0,prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_3__.highlight)(code, prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_3__.languages.json, 'json');
          } else {
            if (path.endsWith('.md')) {
              return (0,prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_3__.highlight)(code, prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_3__.languages.markdown, 'markdown');
            }
          }
        }
      }

      return escape_html__WEBPACK_IMPORTED_MODULE_2___default()(code);
    });

    _defineProperty(_assertThisInitialized(_this), "_handleValueChange", code => _this.props.updateFiles(() => ({
      [_this.props.selectedFile]: {
        type: 'CODE',
        contents: code
      }
    })));

    _defineProperty(_assertThisInitialized(_this), "_editor", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createRef());

    return _this;
  }

  _createClass(SimpleEditorComp, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      const editor = this._editor.current;

      if (this.props.selectedFile !== prevProps.selectedFile && editor) {
        // Save the editor state for the previous file so we can restore it when it's re-opened
        sessions.set(prevProps.selectedFile, editor.session); // If we find a previous session for the current file, restore it
        // Otherwise set the session session to a fresh one

        const session = sessions.get(this.props.selectedFile);

        if (session) {
          editor.session = session;
        } else {
          editor.session = {
            history: {
              stack: [],
              offset: -1
            }
          };
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      const {
        selectedFile,
        lineNumbers,
        theme,
        files
      } = this.props;
      const file = files[selectedFile];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
        className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_0__.css)(styles.container, lineNumbers === 'on' && styles.containerWithLineNumbers)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_simple_code_editor__WEBPACK_IMPORTED_MODULE_5__.default // @ts-ignore
      , {
        ref: this._editor,
        value: (file === null || file === void 0 ? void 0 : file.type) === 'CODE' ? file.contents : '',
        onValueChange: this._handleValueChange,
        highlight: code => lineNumbers === 'on' ? this._highlight(selectedFile, code).split('\n').map(line => "<span class=\"".concat((0,aphrodite__WEBPACK_IMPORTED_MODULE_0__.css)(styles.line), "\">").concat(line, "</span>")).join('\n') : this._highlight(selectedFile, code),
        padding: lineNumbers === 'on' ? 0 : 8,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((0,aphrodite__WEBPACK_IMPORTED_MODULE_0__.css)(styles.editor), 'prism-code')
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("style", {
        type: "text/css",
        dangerouslySetInnerHTML: {
          __html: theme === 'dark' ? _themes_simple_editor__WEBPACK_IMPORTED_MODULE_14__.dark : _themes_simple_editor__WEBPACK_IMPORTED_MODULE_14__.light
        }
      }));
    }
  }], [{
    key: "removePath",
    value: function removePath(path) {
      sessions.delete(path);
    }
  }, {
    key: "renamePath",
    value: function renamePath(oldPath, newPath) {
      const session = sessions.get(oldPath);
      sessions.delete(oldPath);
      sessions.set(newPath, session);
    }
  }]);

  return SimpleEditorComp;
}(react__WEBPACK_IMPORTED_MODULE_4__.Component);

_defineProperty(SimpleEditorComp, "defaultProps", {
  lineNumbers: 'on'
});

const SimpleEditor = (0,_features_preferences_index__WEBPACK_IMPORTED_MODULE_13__.withThemeName)(SimpleEditorComp);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_features_preferences_index__WEBPACK_IMPORTED_MODULE_13__.withThemeName)(SimpleEditorComp));
const styles = aphrodite__WEBPACK_IMPORTED_MODULE_0__.StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'auto'
  },
  containerWithLineNumbers: {
    paddingLeft: 64
  },
  editor: {
    fontFamily: 'var(--font-monospace)',
    fontSize: 12,
    minHeight: '100%',
    counterReset: 'line',
    overflow: 'visible !important'
  },
  line: {
    ':before': {
      position: 'absolute',
      right: '100%',
      marginRight: 26,
      textAlign: 'right',
      opacity: 0.5,
      userSelect: 'none',
      counterIncrement: 'line',
      content: 'counter(line)'
    }
  }
});

/***/ }),

/***/ "./src/components/Editor/themes/colors-dark.tsx":
/*!******************************************************!*\
  !*** ./src/components/Editor/themes/colors-dark.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "syntax": () => (/* binding */ syntax),
/* harmony export */   "ui": () => (/* binding */ ui)
/* harmony export */ });
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ThemeProvider */ "./src/components/ThemeProvider.tsx");
/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.frontend\.wizzi\src\components\Editor\themes\colors-dark.tsx.ittf
    utc time: Sat, 01 May 2021 04:43:27 GMT
*/

const syntax = {
  text: '#d9d7ce',
  variable: '#d9d7ce',
  invalid: '#ff3333',
  constant: '#ff9d45',
  comment: '#5c6773',
  regexp: '#95e6cb',
  annotation: '#5ccfe6',
  tag: '#80d4ff',
  number: '#ff9d45',
  string: '#bae67e',
  property: '#5ccfe6',
  value: '#bae67e',
  keyword: '#ffae57',
  operator: '#778899',
  predefined: '#ff00ff'
};
const ui = {
  background: (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_0__.c)('background', 'dark'),
  text: '#d9d7ce',
  selection: '#aaaaaa',
  indent: {
    active: '#393b41',
    inactive: '#494b51'
  }
};

/***/ }),

/***/ "./src/components/Editor/themes/colors-light.tsx":
/*!*******************************************************!*\
  !*** ./src/components/Editor/themes/colors-light.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "syntax": () => (/* binding */ syntax),
/* harmony export */   "ui": () => (/* binding */ ui)
/* harmony export */ });
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ThemeProvider */ "./src/components/ThemeProvider.tsx");
/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.frontend\.wizzi\src\components\Editor\themes\colors-light.tsx.ittf
    utc time: Sat, 01 May 2021 04:43:27 GMT
*/

const syntax = {
  text: '#5c6773',
  variable: '#5c6773',
  invalid: '#ff3333',
  constant: '#f08c36',
  comment: '#abb0b6',
  regexp: '#4dbf99',
  annotation: '#41a6d9',
  tag: '#e7c547',
  number: '#f08c36',
  string: '#86b300',
  property: '#41a6d9',
  value: '#0451a5',
  keyword: '#f2590c',
  operator: '#778899',
  predefined: '#FF00FF'
};
const ui = {
  background: (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_0__.c)('background', 'light'),
  text: '#5c6773',
  selection: '#cccccc',
  indent: {
    active: '#e0e0e0',
    inactive: '#ecebec'
  }
};

/***/ }),

/***/ "./src/components/Editor/themes/simple-editor.tsx":
/*!********************************************************!*\
  !*** ./src/components/Editor/themes/simple-editor.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "light": () => (/* binding */ light),
/* harmony export */   "dark": () => (/* binding */ dark)
/* harmony export */ });
/* harmony import */ var _colors_dark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors-dark */ "./src/components/Editor/themes/colors-dark.tsx");
/* harmony import */ var _colors_light__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colors-light */ "./src/components/Editor/themes/colors-light.tsx");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.frontend\.wizzi\src\components\Editor\themes\simple-editor.tsx.ittf
    utc time: Sat, 01 May 2021 04:43:27 GMT
*/


const css = String.raw;

const theme = ({
  ui,
  syntax
}) => css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .prism-code {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  .prism-code ::selection {\n    background: ", ";\n  }\n\n  .prism-code ::-moz-selection {\n    background: ", ";\n  }\n\n  .prism-code textarea {\n    outline: 0;\n  }\n\n  .prism-code .token.tag,\n  .prism-code .token.property {\n    color: ", ";\n  }\n\n  .prism-code .token.function {\n    color: ", ";\n  }\n\n  .prism-code .token.entity {\n    color: ", ";\n  }\n\n  .prism-code .token.string,\n  .prism-code .token.selector,\n  .prism-code .token.char,\n  .prism-code .token.builtin,\n  .prism-code .token.inserted {\n    color: ", ";\n  }\n\n  .prism-code .token.regexp,\n  .prism-code .token.variable {\n    color: ", ";\n  }\n\n  .prism-code .token.keyword,\n  .prism-code .token.atrule,\n  .prism-code .token.tag > .token.punctuation,\n  .prism-code .token.important {\n    color: ", ";\n  }\n\n  .prism-code .token.attr-name {\n    color: ", ";\n  }\n\n  .prism-code .token.attr-value {\n    color: ", ";\n  }\n\n  .prism-code .token.markup,\n  .prism-code .token.special {\n    color: ", ";\n  }\n\n  .prism-code .token.comment,\n  .prism-code .token.prolog,\n  .prism-code .token.doctype,\n  .prism-code .token.cdata {\n    color: ", ";\n  }\n\n  .prism-code .token.number {\n    color: ", ";\n  }\n\n  .prism-code .token.constant,\n  .prism-code .token.boolean,\n  .prism-code .token.constant,\n  .prism-code .token.symbol,\n  .prism-code .token.deleted {\n    color: ", ";\n  }\n\n  .prism-code .token.operator,\n  .prism-code .token.entity,\n  .prism-code .token.url,\n  .prism-code .language-css .token.string,\n  .prism-code .style .token.string {\n    color: ", ";\n  }\n\n  .prism-code .token.punctuation {\n    color: ", ";\n  }\n"])), ui.background, ui.text, ui.selection, ui.selection, syntax.property, syntax.constant, syntax.property, syntax.string, syntax.regexp, syntax.keyword, syntax.number, syntax.string, syntax.predefined, syntax.comment, syntax.number, syntax.constant, syntax.operator, syntax.comment);

const light = theme(_colors_light__WEBPACK_IMPORTED_MODULE_1__);
const dark = theme(_colors_dark__WEBPACK_IMPORTED_MODULE_0__);

/***/ })

}]);
//# sourceMappingURL=SimpleEditor.6f16092d604366dde50d.chunk.js.map