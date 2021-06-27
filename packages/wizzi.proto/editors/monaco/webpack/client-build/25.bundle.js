(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/handlebars/handlebars.js":
/*!************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/handlebars/handlebars.js ***!
  \************************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/* harmony import */ var _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fillers/monaco-editor-core.js */ \"./node_modules/monaco-editor/esm/vs/basic-languages/fillers/monaco-editor-core.js\");\n/*---------------------------------------------------------------------------------------------\r\n *  Copyright (c) Microsoft Corporation. All rights reserved.\r\n *  Licensed under the MIT License. See License.txt in the project root for license information.\r\n *--------------------------------------------------------------------------------------------*/\r\n\r\nvar EMPTY_ELEMENTS = [\r\n    'area',\r\n    'base',\r\n    'br',\r\n    'col',\r\n    'embed',\r\n    'hr',\r\n    'img',\r\n    'input',\r\n    'keygen',\r\n    'link',\r\n    'menuitem',\r\n    'meta',\r\n    'param',\r\n    'source',\r\n    'track',\r\n    'wbr'\r\n];\r\nvar conf = {\r\n    wordPattern: /(-?\\d*\\.\\d\\w*)|([^\\`\\~\\!\\@\\$\\^\\&\\*\\(\\)\\=\\+\\[\\{\\]\\}\\\\\\|\\;\\:\\'\\\"\\,\\.\\<\\>\\/\\s]+)/g,\r\n    comments: {\r\n        blockComment: ['{{!--', '--}}']\r\n    },\r\n    brackets: [\r\n        ['<!--', '-->'],\r\n        ['<', '>'],\r\n        ['{{', '}}'],\r\n        ['{', '}'],\r\n        ['(', ')']\r\n    ],\r\n    autoClosingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '\"', close: '\"' },\r\n        { open: \"'\", close: \"'\" }\r\n    ],\r\n    surroundingPairs: [\r\n        { open: '<', close: '>' },\r\n        { open: '\"', close: '\"' },\r\n        { open: \"'\", close: \"'\" }\r\n    ],\r\n    onEnterRules: [\r\n        {\r\n            beforeText: new RegExp(\"<(?!(?:\" + EMPTY_ELEMENTS.join('|') + \"))(\\\\w[\\\\w\\\\d]*)([^/>]*(?!/)>)[^<]*$\", 'i'),\r\n            afterText: /^<\\/(\\w[\\w\\d]*)\\s*>$/i,\r\n            action: {\r\n                indentAction: _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__[\"languages\"].IndentAction.IndentOutdent\r\n            }\r\n        },\r\n        {\r\n            beforeText: new RegExp(\"<(?!(?:\" + EMPTY_ELEMENTS.join('|') + \"))(\\\\w[\\\\w\\\\d]*)([^/>]*(?!/)>)[^<]*$\", 'i'),\r\n            action: { indentAction: _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__[\"languages\"].IndentAction.Indent }\r\n        }\r\n    ]\r\n};\r\nvar language = {\r\n    defaultToken: '',\r\n    tokenPostfix: '',\r\n    // ignoreCase: true,\r\n    // The main tokenizer for our languages\r\n    tokenizer: {\r\n        root: [\r\n            [/\\{\\{!--/, 'comment.block.start.handlebars', '@commentBlock'],\r\n            [/\\{\\{!/, 'comment.start.handlebars', '@comment'],\r\n            [/\\{\\{/, { token: '@rematch', switchTo: '@handlebarsInSimpleState.root' }],\r\n            [/<!DOCTYPE/, 'metatag.html', '@doctype'],\r\n            [/<!--/, 'comment.html', '@commentHtml'],\r\n            [/(<)(\\w+)(\\/>)/, ['delimiter.html', 'tag.html', 'delimiter.html']],\r\n            [/(<)(script)/, ['delimiter.html', { token: 'tag.html', next: '@script' }]],\r\n            [/(<)(style)/, ['delimiter.html', { token: 'tag.html', next: '@style' }]],\r\n            [/(<)([:\\w]+)/, ['delimiter.html', { token: 'tag.html', next: '@otherTag' }]],\r\n            [/(<\\/)(\\w+)/, ['delimiter.html', { token: 'tag.html', next: '@otherTag' }]],\r\n            [/</, 'delimiter.html'],\r\n            [/\\{/, 'delimiter.html'],\r\n            [/[^<{]+/] // text\r\n        ],\r\n        doctype: [\r\n            [\r\n                /\\{\\{/,\r\n                {\r\n                    token: '@rematch',\r\n                    switchTo: '@handlebarsInSimpleState.comment'\r\n                }\r\n            ],\r\n            [/[^>]+/, 'metatag.content.html'],\r\n            [/>/, 'metatag.html', '@pop']\r\n        ],\r\n        comment: [\r\n            [/\\}\\}/, 'comment.end.handlebars', '@pop'],\r\n            [/./, 'comment.content.handlebars']\r\n        ],\r\n        commentBlock: [\r\n            [/--\\}\\}/, 'comment.block.end.handlebars', '@pop'],\r\n            [/./, 'comment.content.handlebars']\r\n        ],\r\n        commentHtml: [\r\n            [\r\n                /\\{\\{/,\r\n                {\r\n                    token: '@rematch',\r\n                    switchTo: '@handlebarsInSimpleState.comment'\r\n                }\r\n            ],\r\n            [/-->/, 'comment.html', '@pop'],\r\n            [/[^-]+/, 'comment.content.html'],\r\n            [/./, 'comment.content.html']\r\n        ],\r\n        otherTag: [\r\n            [\r\n                /\\{\\{/,\r\n                {\r\n                    token: '@rematch',\r\n                    switchTo: '@handlebarsInSimpleState.otherTag'\r\n                }\r\n            ],\r\n            [/\\/?>/, 'delimiter.html', '@pop'],\r\n            [/\"([^\"]*)\"/, 'attribute.value'],\r\n            [/'([^']*)'/, 'attribute.value'],\r\n            [/[\\w\\-]+/, 'attribute.name'],\r\n            [/=/, 'delimiter'],\r\n            [/[ \\t\\r\\n]+/] // whitespace\r\n        ],\r\n        // -- BEGIN <script> tags handling\r\n        // After <script\r\n        script: [\r\n            [\r\n                /\\{\\{/,\r\n                {\r\n                    token: '@rematch',\r\n                    switchTo: '@handlebarsInSimpleState.script'\r\n                }\r\n            ],\r\n            [/type/, 'attribute.name', '@scriptAfterType'],\r\n            [/\"([^\"]*)\"/, 'attribute.value'],\r\n            [/'([^']*)'/, 'attribute.value'],\r\n            [/[\\w\\-]+/, 'attribute.name'],\r\n            [/=/, 'delimiter'],\r\n            [\r\n                />/,\r\n                {\r\n                    token: 'delimiter.html',\r\n                    next: '@scriptEmbedded.text/javascript',\r\n                    nextEmbedded: 'text/javascript'\r\n                }\r\n            ],\r\n            [/[ \\t\\r\\n]+/],\r\n            [\r\n                /(<\\/)(script\\s*)(>)/,\r\n                ['delimiter.html', 'tag.html', { token: 'delimiter.html', next: '@pop' }]\r\n            ]\r\n        ],\r\n        // After <script ... type\r\n        scriptAfterType: [\r\n            [\r\n                /\\{\\{/,\r\n                {\r\n                    token: '@rematch',\r\n                    switchTo: '@handlebarsInSimpleState.scriptAfterType'\r\n                }\r\n            ],\r\n            [/=/, 'delimiter', '@scriptAfterTypeEquals'],\r\n            [\r\n                />/,\r\n                {\r\n                    token: 'delimiter.html',\r\n                    next: '@scriptEmbedded.text/javascript',\r\n                    nextEmbedded: 'text/javascript'\r\n                }\r\n            ],\r\n            [/[ \\t\\r\\n]+/],\r\n            [/<\\/script\\s*>/, { token: '@rematch', next: '@pop' }]\r\n        ],\r\n        // After <script ... type =\r\n        scriptAfterTypeEquals: [\r\n            [\r\n                /\\{\\{/,\r\n                {\r\n                    token: '@rematch',\r\n                    switchTo: '@handlebarsInSimpleState.scriptAfterTypeEquals'\r\n                }\r\n            ],\r\n            [\r\n                /\"([^\"]*)\"/,\r\n                {\r\n                    token: 'attribute.value',\r\n                    switchTo: '@scriptWithCustomType.$1'\r\n                }\r\n            ],\r\n            [\r\n                /'([^']*)'/,\r\n                {\r\n                    token: 'attribute.value',\r\n                    switchTo: '@scriptWithCustomType.$1'\r\n                }\r\n            ],\r\n            [\r\n                />/,\r\n                {\r\n                    token: 'delimiter.html',\r\n                    next: '@scriptEmbedded.text/javascript',\r\n                    nextEmbedded: 'text/javascript'\r\n                }\r\n            ],\r\n            [/[ \\t\\r\\n]+/],\r\n            [/<\\/script\\s*>/, { token: '@rematch', next: '@pop' }]\r\n        ],\r\n        // After <script ... type = $S2\r\n        scriptWithCustomType: [\r\n            [\r\n                /\\{\\{/,\r\n                {\r\n                    token: '@rematch',\r\n                    switchTo: '@handlebarsInSimpleState.scriptWithCustomType.$S2'\r\n                }\r\n            ],\r\n            [\r\n                />/,\r\n                {\r\n                    token: 'delimiter.html',\r\n                    next: '@scriptEmbedded.$S2',\r\n                    nextEmbedded: '$S2'\r\n                }\r\n            ],\r\n            [/\"([^\"]*)\"/, 'attribute.value'],\r\n            [/'([^']*)'/, 'attribute.value'],\r\n            [/[\\w\\-]+/, 'attribute.name'],\r\n            [/=/, 'delimiter'],\r\n            [/[ \\t\\r\\n]+/],\r\n            [/<\\/script\\s*>/, { token: '@rematch', next: '@pop' }]\r\n        ],\r\n        scriptEmbedded: [\r\n            [\r\n                /\\{\\{/,\r\n                {\r\n                    token: '@rematch',\r\n                    switchTo: '@handlebarsInEmbeddedState.scriptEmbedded.$S2',\r\n                    nextEmbedded: '@pop'\r\n                }\r\n            ],\r\n            [/<\\/script/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }]\r\n        ],\r\n        // -- END <script> tags handling\r\n        // -- BEGIN <style> tags handling\r\n        // After <style\r\n        style: [\r\n            [\r\n                /\\{\\{/,\r\n                {\r\n                    token: '@rematch',\r\n                    switchTo: '@handlebarsInSimpleState.style'\r\n                }\r\n            ],\r\n            [/type/, 'attribute.name', '@styleAfterType'],\r\n            [/\"([^\"]*)\"/, 'attribute.value'],\r\n            [/'([^']*)'/, 'attribute.value'],\r\n            [/[\\w\\-]+/, 'attribute.name'],\r\n            [/=/, 'delimiter'],\r\n            [\r\n                />/,\r\n                {\r\n                    token: 'delimiter.html',\r\n                    next: '@styleEmbedded.text/css',\r\n                    nextEmbedded: 'text/css'\r\n                }\r\n            ],\r\n            [/[ \\t\\r\\n]+/],\r\n            [\r\n                /(<\\/)(style\\s*)(>)/,\r\n                ['delimiter.html', 'tag.html', { token: 'delimiter.html', next: '@pop' }]\r\n            ]\r\n        ],\r\n        // After <style ... type\r\n        styleAfterType: [\r\n            [\r\n                /\\{\\{/,\r\n                {\r\n                    token: '@rematch',\r\n                    switchTo: '@handlebarsInSimpleState.styleAfterType'\r\n                }\r\n            ],\r\n            [/=/, 'delimiter', '@styleAfterTypeEquals'],\r\n            [\r\n                />/,\r\n                {\r\n                    token: 'delimiter.html',\r\n                    next: '@styleEmbedded.text/css',\r\n                    nextEmbedded: 'text/css'\r\n                }\r\n            ],\r\n            [/[ \\t\\r\\n]+/],\r\n            [/<\\/style\\s*>/, { token: '@rematch', next: '@pop' }]\r\n        ],\r\n        // After <style ... type =\r\n        styleAfterTypeEquals: [\r\n            [\r\n                /\\{\\{/,\r\n                {\r\n                    token: '@rematch',\r\n                    switchTo: '@handlebarsInSimpleState.styleAfterTypeEquals'\r\n                }\r\n            ],\r\n            [\r\n                /\"([^\"]*)\"/,\r\n                {\r\n                    token: 'attribute.value',\r\n                    switchTo: '@styleWithCustomType.$1'\r\n                }\r\n            ],\r\n            [\r\n                /'([^']*)'/,\r\n                {\r\n                    token: 'attribute.value',\r\n                    switchTo: '@styleWithCustomType.$1'\r\n                }\r\n            ],\r\n            [\r\n                />/,\r\n                {\r\n                    token: 'delimiter.html',\r\n                    next: '@styleEmbedded.text/css',\r\n                    nextEmbedded: 'text/css'\r\n                }\r\n            ],\r\n            [/[ \\t\\r\\n]+/],\r\n            [/<\\/style\\s*>/, { token: '@rematch', next: '@pop' }]\r\n        ],\r\n        // After <style ... type = $S2\r\n        styleWithCustomType: [\r\n            [\r\n                /\\{\\{/,\r\n                {\r\n                    token: '@rematch',\r\n                    switchTo: '@handlebarsInSimpleState.styleWithCustomType.$S2'\r\n                }\r\n            ],\r\n            [\r\n                />/,\r\n                {\r\n                    token: 'delimiter.html',\r\n                    next: '@styleEmbedded.$S2',\r\n                    nextEmbedded: '$S2'\r\n                }\r\n            ],\r\n            [/\"([^\"]*)\"/, 'attribute.value'],\r\n            [/'([^']*)'/, 'attribute.value'],\r\n            [/[\\w\\-]+/, 'attribute.name'],\r\n            [/=/, 'delimiter'],\r\n            [/[ \\t\\r\\n]+/],\r\n            [/<\\/style\\s*>/, { token: '@rematch', next: '@pop' }]\r\n        ],\r\n        styleEmbedded: [\r\n            [\r\n                /\\{\\{/,\r\n                {\r\n                    token: '@rematch',\r\n                    switchTo: '@handlebarsInEmbeddedState.styleEmbedded.$S2',\r\n                    nextEmbedded: '@pop'\r\n                }\r\n            ],\r\n            [/<\\/style/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }]\r\n        ],\r\n        // -- END <style> tags handling\r\n        handlebarsInSimpleState: [\r\n            [/\\{\\{\\{?/, 'delimiter.handlebars'],\r\n            [/\\}\\}\\}?/, { token: 'delimiter.handlebars', switchTo: '@$S2.$S3' }],\r\n            { include: 'handlebarsRoot' }\r\n        ],\r\n        handlebarsInEmbeddedState: [\r\n            [/\\{\\{\\{?/, 'delimiter.handlebars'],\r\n            [\r\n                /\\}\\}\\}?/,\r\n                {\r\n                    token: 'delimiter.handlebars',\r\n                    switchTo: '@$S2.$S3',\r\n                    nextEmbedded: '$S3'\r\n                }\r\n            ],\r\n            { include: 'handlebarsRoot' }\r\n        ],\r\n        handlebarsRoot: [\r\n            [/\"[^\"]*\"/, 'string.handlebars'],\r\n            [/[#/][^\\s}]+/, 'keyword.helper.handlebars'],\r\n            [/else\\b/, 'keyword.helper.handlebars'],\r\n            [/[\\s]+/],\r\n            [/[^}]/, 'variable.parameter.handlebars']\r\n        ]\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/handlebars/handlebars.js?");

/***/ })

}]);