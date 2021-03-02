/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\tau_express\.wizzi\src\site\webpacks\common\page.js.ittf
    utc time: Tue, 02 Mar 2021 21:04:16 GMT
*/
'use strict';
var stylesInjected = false;
export function createPage(pageDef, elementId) {
    const jq2 = jQuery.noConflict();
    jq2(function($) {
        if (!stylesInjected) {
            injectPageStyles();
            injectMenuStyles();
            stylesInjected = true;
        }
        document.getElementById(elementId).innerHTML = getContainer(pageDef);
        startPage($, pageDef)
    })
}
function getContainer(ctx) {
    var __html = [];
    pageHtml(__html, ctx)
    return __html.join('');
}
function injectCssLink(href) {
    var head = document.head || document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.rel = "stylesheet";
    link.href = href;
    link.type = "text/css";
    head.appendChild(link);
}
function injectCssText(cssObj) {
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';
    var aCss = [];
    for (var krule in cssObj) {
        var ruleObj = cssObj[krule];
        var aRule = [];
        for (var kstyle in ruleObj) {
            if (typeof ruleObj[kstyle] === 'object') {
                var aRule2 = [];
                for (var kstyle2 in ruleObj[kstyle]) {
                    aRule2.push(kstyle2 + ': ' + ruleObj[kstyle][kstyle2])
                }
                aRule.push(kstyle + ' { ' + aRule2.join(';\n') + ' } ')
            }
            else {
                aRule.push(kstyle + ': ' + ruleObj[kstyle])
            }
        }
        aCss.push(krule + ' { ' + aRule.join(';\n') + ' } ')
    }
    var css = aCss.join('\n');
    // IE8 and below.
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    }
    else {
        style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
}
function injectPageStyles() {
    injectCssLink("https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i")
    injectCssText({
        body: {
            margin: 0, 
            "font-family": '"Roboto", "Arial", "Helvetica Neue", sans-serif', 
            "font-weight": 400, 
            "font-size": "14px"
        }, 
        "#container": {
            width: "75%", 
            border: "none", 
            margin: "auto"
        }, 
        "#content": {
            padding: "2rem"
        }, 
        ".row": {
            display: "-webkit-box", 
            display: "-webkit-flex", 
            display: "-moz-box", 
            display: "-ms-flexbox", 
            display: "flex", 
            "-webkit-flex-wrap": "wrap", 
            "-ms-flex-wrap": "wrap", 
            "flex-wrap": "wrap"
        }, 
        ".row-space": {
            "-webkit-box-pack": "justify", 
            "-webkit-justify-content": "space-between", 
            "-moz-box-pack": "justify", 
            "-ms-flex-pack": "justify", 
            "justify-content": "space-between"
        }, 
        ".col-2": {
            width: "-webkit-calc((100% - 60px) / 2)", 
            width: "-moz-calc((100% - 60px) / 2)", 
            width: "calc((100% - 60px) / 2)"
        }, 
        "@media (max-width: 767px)": {
            ".col-2": {
                width: "100%"
            }
        }, 
        // ==========================================================================
        // HEADER
        // ==========================================================================
        ".header": {
            "background-color": "#2c6ed5", 
            "color": "#efc6ed"
        }, 
        // ==========================================================================
        // BACKGROUND
        // ==========================================================================
        ".bg-blue": {
            background: "#2c6ed5"
        }, 
        ".bg-red": {
            background: "#fa4251"
        }, 
        // ==========================================================================
        // SPACING
        // ==========================================================================
        ".m-t-20": {
            "margin-top": "20px"
        }, 
        ".m-t-30": {
            "margin-top": "30px"
        }, 
        ".m-t-100": {
            "margin-top": "100px"
        }, 
        ".m-t-180": {
            "margin-top": "180px"
        }, 
        ".m-b-20": {
            "margin-bottom": "20px"
        }, 
        ".m-b-30": {
            "margin-bottom": "30px"
        }, 
        ".m-b-100": {
            "margin-bottom": "100px"
        }, 
        ".m-b-180": {
            "margin-bottom": "180px"
        }, 
        ".p-t-20": {
            "padding-top": "20px"
        }, 
        ".p-t-30": {
            "padding-top": "30px"
        }, 
        ".p-t-100": {
            "padding-top": "100px"
        }, 
        ".p-t-180": {
            "padding-top": "180px"
        }, 
        ".p-b-180": {
            "padding-bottom": "180px"
        }, 
        ".p-b-180": {
            "padding-bottom": "180px"
        }, 
        ".p-b-180": {
            "padding-bottom": "180px"
        }, 
        ".p-b-180": {
            "padding-bottom": "180px"
        }, 
        // ==========================================================================
        // TITLE
        // ==========================================================================
        ".title": {
            "text-transform": "uppercase", 
            "font-weight": 700, 
            "margin-bottom": "37px"
        }, 
        // ==========================================================================
        // CARD
        // ==========================================================================
        ".card": {
            overflow: "hidden", 
            "-webkit-border-radius": "3px", 
            "-moz-border-radius": "3px", 
            "border-radius": "3px", 
            background: "#fff"
        }, 
        ".card-2": {
            "-webkit-box-shadow": "0px 8px 20px 0px rgba(0, 0, 0, 0.15)", 
            "-moz-box-shadow": "0px 8px 20px 0px rgba(0, 0, 0, 0.15)", 
            "box-shadow": "0px 8px 20px 0px rgba(0, 0, 0, 0.15)", 
            "-webkit-border-radius": "10px", 
            "-moz-border-radius": "10px", 
            "border-radius": "10px", 
            "width": "100%", 
            display: "table"
        }, 
        ".card-2 .card-heading": {
            background: 'url("./images/stefano_stop.jpg") top left/cover no-repeat', 
            width: "24.1%", 
            display: "table-cell"
        }, 
        ".card-2 .card-body": {
            display: "table-cell", 
            padding: "80px 90px", 
            "padding-bottom": "88px"
        }
    })
}
function injectMenuStyles() {
    injectCssText({
        ".menu-ul-row": {
            display: "flex", 
            "flex-direction": "row", 
            "list-style-type": "none", 
            "margin": 0, 
            "padding": "20px 0"
        }, 
        ".menu-li": {
            
        }, 
        ".menu-li > div > span": {
            "font-size": "2em", 
            "font-weight": "700", 
            "padding": "0 40px"
        }
    })
}
function pageHtml(__html, page_def) {
    console.log('page_def.items', page_def.items.length);
    var ctx = {};
    var i, i_items=page_def.items, i_len=page_def.items.length, item;
    for (i=0; i<i_len; i++) {
        item = page_def.items[i];
        pageHtml_item(__html, item, null, ctx)
    }
}
function pageHtml_item(__html, item_def, parent_def, ctx) {
    console.log('item_def.kind', item_def.kind);
    var temp = [];
    if (item_def.items && item_def.kind != 'menu') {
        var i, i_items=item_def.items, i_len=item_def.items.length, item;
        for (i=0; i<i_len; i++) {
            item = item_def.items[i];
            pageHtml_item(temp, item, item_def, ctx)
        }
    }
    if (item_def.kind == 'header') {
        __html.push('<div class="' + "header flex-row" + '">');
        __html.push( temp.join('\n') );
        __html.push('</div>');
    }
    else if (item_def.kind == 'footer') {
        __html.push('<div class="' + "footer flex-row" + '">');
        __html.push( temp.join('\n') );
        __html.push('</div>');
    }
    else if (item_def.kind == 'menu') {
        menuBarHtml(__html, item_def)
    }
    else if (item_def.kind == 'flex') {
        __html.push('<div class="' + "flex-" +  item_def.direction  + '">');
        __html.push( temp.join('\n') );
        __html.push('</div>');
    }
    else if (item_def.kind == 'panel') {
        __html.push('<div id="' + item_def.id + '">');
        __html.push('</div>');
    }
    else {
        throw new Error('pageHtml_item kind unknown ' + item_def.kind);
    }
}
function menuBarHtml(__html, menu_def) {
    var temp = [];
    if (menu_def.items) {
        var i, i_items=menu_def.items, i_len=menu_def.items.length, item;
        for (i=0; i<i_len; i++) {
            item = menu_def.items[i];
            menuItemHtml(temp, item)
        }
    }
    __html.push('<ul class="' + "menu-ul-" +  menu_def.direction  + '">');
    __html.push( temp.join('\n') );
    __html.push('</ul>');
}
function menuItemHtml(__html, item_def) {
    var temp = [];
    if (item_def.items) {
        var i, i_items=item_def.items, i_len=item_def.items.length, item;
        for (i=0; i<i_len; i++) {
            item = item_def.items[i];
            menuItem(temp, item)
        }
    }
    if (item_def.kind == 'sub') {
        __html.push('<ul class="' + "menu-ul-" +  item_def.direction  + '">');
        __html.push( temp.join('\n') );
        __html.push('</ul>');
    }
    else {
        __html.push('<li class="' + "menu-li" + '">');
        __html.push('<div class="' + "menu-li-div" + '">');
        __html.push( temp.join('\n') );
        __html.push('<span>');
        __html.push( item_def.label );
        __html.push('</span>');
        __html.push('</div>');
        __html.push('</li>');
    }
}
function startPage($, page, context) {
}
