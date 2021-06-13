/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-utils\.wizzi\ittf\lib\mocks\loader\liner.js.ittf
*/
'use strict';
var util = require('util');
//
//
//
//
var COMMENT = {
    NONE: 0, 
    NONE_SEEN_DOLLAR: 1, 
    MULTI_LINE: 2, 
    MULTI_LINE_SEEN_ASTER: 3, 
    SINGLE_LINE: 21
};
// https://hacks.mozilla.org/2015/05/es6-in-depth-template-strings-2/
var MACRO = {
    NONE: 0, 
    INSIDE_TEMPLATE: 1, 
    INSIDE_TEMPLATE_SEEN_ESCAPE: 2, 
    INSIDE_TEMPLATE_SEEN_DOLLAR: 10
};
var CP = {
    TAB: 9, 
    LF: 10, 
    CR: 13, 
    SPACE: 32, 
    DOLLAR: 36, 
    ASTER: 42, 
    SLASH: 92, 
    OPEN_PAREN: 40, 
    OPEN_GRAPH: 123, 
    CLOSE_GRAPH: 125, 
    SINGLE_QUOTE: 39, 
    DOUBLE_QUOTE: 34, 
    BACKTICK: 96, 
    MACRO_REPLACE: 198
};
module.exports = function(textContent, ittfDocumentData) {
    var sourceKey = ittfDocumentData.sourceKey,
        lines = [],
        leadingWhiteSpaces = 0,
        line = null,
        linepos = 1,
        lineHasMacro = false,
        colpos = 0,
        commentState = COMMENT.NONE,
        macroState = MACRO.NONE,
        quote = null,
        // TODO ensure textContent is red as utf-8 and avoid this
        chunk = textContent.toString('utf-8'),
        ch,
        cp,
        chUni,
        i,
        l = chunk.length;
    // TODO replace ch with chUni
    for (i = 0; i < l; i++) {
        ch = chunk[i];
        chUni = chunk.charCodeAt(i);
        if (i < l - 1) {
            cp = (chunk.charAt(i) + chunk.charAt(i + 1)).codePointAt(0);
        }
        else if (i < l) {
            cp = chunk.charAt(i).codePointAt(0);
        }
        else {
            throw new Error('wizzi-mtree.loader.liner index of chunk out of range: ' + chunk);
        }
        if (cp > 0xffff) {
            console.log('wizzi-mtree.loader.liner.cp > 0xffff');
            i += 1;
        }
        colpos++;
        if (cp == CP.SLASH) {
            // log '+++++ wizzi-mtree.liner', chunk[i+1], chunk[i+2], chunk[i+3]
        }
        if (quote != null) {
            if (quote == cp) {
                quote = null;
            }
            processMacro(cp);
        }
        else {
            if (commentState == COMMENT.MULTI_LINE) {
                if (cp == CP.ASTER) {
                    // could be start of end of comment
                    commentState = COMMENT.MULTI_LINE_SEEN_ASTER;
                }
                else {
                    // skip comment char
                    if (cp == CP.LF) {
                        linepos++;
                        colpos = 0;
                    }
                }
            }
            else if (commentState == COMMENT.SINGLE_LINE) {
                if (cp == CP.LF) {
                    // end of line comment
                    // delegate end of comment to processChar
                    processMacro(cp);
                }
            }
            else if (commentState == COMMENT.MULTI_LINE_SEEN_ASTER) {
                if (cp == CP.DOLLAR) {
                    // ok, really is end of comment
                    commentState = COMMENT.NONE;
                }
                else {
                    // no, multi line comments continue
                    commentState = COMMENT.MULTI_LINE;
                    // check if it is eol
                    if (cp == CP.LF) {
                        linepos++;
                        colpos = 0;
                    }
                }
            }
            else if (commentState == COMMENT.NONE_SEEN_DOLLAR) {
                if (cp == CP.ASTER) {
                    // ok, is start of multi line comment
                    commentState = COMMENT.MULTI_LINE;
                }
                else if (cp == CP.DOLLAR) {
                    // ok, is a single line comment
                    commentState = COMMENT.SINGLE_LINE;
                }
                else {
                    // no, it was not a comment, reset
                    commentState = COMMENT.NONE;
                    processMacro(CP.DOLLAR);
                    processMacro(cp);
                }
            }
            else if (commentState == COMMENT.NONE && ( cp == CP.SINGLE_QUOTE || cp == CP.DOUBLE_QUOTE )) {
                // start of literal
                // a literal suspend comments strip
                // comment delimiters inside quotes are normal characters.
                quote = cp;
                processMacro(cp);
            }
            else if (commentState == COMMENT.NONE && cp == CP.DOLLAR) {
                // could be start of comment
                commentState = COMMENT.NONE_SEEN_DOLLAR;
            }
            else if (cp == CP.SLASH && i+3 < l && chunk[i+1] == '$' && chunk[i+2] == '\\' && chunk[i+3] == '{') {
                processMacro(CP.DOLLAR);
                processMacro(CP.OPEN_GRAPH);
                i = i +3;
            }
            else {
                processMacro(cp);
            }
        }
    }
    if (line) {
        if (typeof (line.value) !== 'undefined') {
            line.value = line.value.trim();
        }
        line.hasMacro = lineHasMacro;
        // log 'last push line', line
        lines.push(line);
        lineHasMacro = false;
    }
    return lines;
    function processMacro(cp) {
        if (macroState == MACRO.INSIDE_TEMPLATE_SEEN_ESCAPE) {
            // remove escape state
            macroState = MACRO.INSIDE_TEMPLATE;
            processChar(cp);
            // log 'macroState', macroState, String.fromCodePoint(cp)
        }
        else if (macroState == MACRO.INSIDE_TEMPLATE_SEEN_DOLLAR) {
            if (cp == CP.OPEN_GRAPH) {
                // ok - really it was a start of macro
                // Alt+146 = Æ
                processChar(CP.MACRO_REPLACE);
                processChar(CP.OPEN_GRAPH);
                lineHasMacro = true;
            }
            else {
                // no - it was not a start of macro
                processChar(CP.DOLLAR);
                processChar(cp);
            }
            macroState = MACRO.INSIDE_TEMPLATE;
            // log 'macroState', macroState, String.fromCodePoint(cp)
        }
        else {
            if (cp == CP.BACKTICK) {
                if (macroState > MACRO.NONE) {
                    macroState = MACRO.NONE;
                    processChar(cp);
                    // log 'macroState', macroState, String.fromCodePoint(cp)
                }
                else {
                    macroState = MACRO.INSIDE_TEMPLATE;
                    processChar(cp);
                    // log 'macroState', macroState, String.fromCodePoint(cp)
                }
            }
            else {
                if (macroState == MACRO.INSIDE_TEMPLATE) {
                    if (cp == CP.DOLLAR) {
                        // could be start of macro
                        macroState = MACRO.INSIDE_TEMPLATE_SEEN_DOLLAR;
                        // log 'macroState', macroState, String.fromCodePoint(cp)
                    }
                    else if (cp == CP.SLASH) {
                        // could be an escape of a template start inside a template
                        macroState = MACRO.INSIDE_TEMPLATE_SEEN_ESCAPE;
                        processChar(cp);
                        // log 'macroState', macroState, String.fromCodePoint(cp)
                    }
                    else {
                        // log 'process char macroState', macroState, String.fromCodePoint(cp)
                        processChar(cp);
                    }
                }
                else {
                    processChar(cp);
                }
            }
        }
    }
    function processChar(cp) {
        if (cp == CP.LF) {
            if (line) {
                if (typeof (line.value) !== 'undefined') {
                    line.value = line.value.trim();
                }
                line.hasMacro = lineHasMacro;
                lines.push(line);
                line = null;
                lineHasMacro = false;
            }
            else {
                // Allow blank line. Do nothing
            }
            leadingWhiteSpaces = 0;
            colpos = 0;
            linepos++;
            macroState = MACRO.NONE;
            quote = null;
            if (commentState != COMMENT.MULTI_LINE) {
                commentState = COMMENT.NONE;
            }
        }
        else if (cp == CP.CR) {
        }
        else if ([CP.SPACE, CP.TAB].indexOf(cp) !== -1) {
            if (cp == CP.TAB) {
                colpos += 3;
            }
            if (line) {
                if (typeof (line.value) == 'undefined') {
                    line.value = '';
                }
                else {
                    line.value += String.fromCodePoint(cp);
                }
            }
            else {
                leadingWhiteSpaces += (cp == CP.SPACE ? 1 : 4);
            }
        }
        else {
            if (line) {
                if (typeof(line.value) == 'undefined') {
                    if (cp == CP.OPEN_PAREN) {
                        line.tagSuffix = String.fromCodePoint(cp);
                        line.value = '';
                    }
                    else {
                        line.name += String.fromCodePoint(cp);
                    }
                }
                else {
                    line.value += String.fromCodePoint(cp);
                }
            }
            else {
                line = {
                    indent: leadingWhiteSpaces / 4, 
                    name: String.fromCodePoint(cp), 
                    row: linepos, 
                    col: colpos, 
                    sourceKey: sourceKey
                };
            }
        }
        if (line) {
            // log 'line.name, value', line.name, line.value
        }
    }
};
