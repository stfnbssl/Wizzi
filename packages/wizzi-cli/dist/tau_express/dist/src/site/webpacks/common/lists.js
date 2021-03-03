/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\tau_express\.wizzi\src\site\webpacks\common\lists.js.ittf
    utc time: Wed, 03 Mar 2021 15:56:02 GMT
*/
'use strict';
var stylesInjected = false;
export function createList(listDef, elementId) {
    const jq2 = jQuery.noConflict();
    jq2(function($) {
        if (!stylesInjected) {
            injectListStyles();
            stylesInjected = true;
        }
        document.getElementById(elementId).innerHTML = getContainer(listDef);
        startList($, listDef)
        startListValidation($, listDef)
    })
}
function getContainer(ctx) {
    var __html = [];
    listHtml(__html, ctx)
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
function injectListStyles() {
    injectCssText({
        ".list-row": {
            display: "flex", 
            "flex-direction": "row", 
            "justify-content": "space-between"
        }, 
        ".list-head": {
            display: "flex", 
            "flex-direction": "row", 
            "justify-content": "space-between", 
            "font-weight": 600
        }, 
        "table td, table th": {
            padding: "5px"
        }, 
        ".td-hidden": {
            display: "none"
        }
    })
}
function listHtml(__html, list) {
    console.log('listHtml', list);
    if (list.def.kind == "table") {
        listTableHtml(__html, list)
    }
    else {
        listUlHtml(__html, list)
    }
}
function listUlHtml(__html, list) {
    var temp = [];
    listUlHtml_head(temp, list.def)
    var i, i_items=list.data.items, i_len=list.data.items.length, item;
    for (i=0; i<i_len; i++) {
        item = list.data.items[i];
        listUlHtml_row(temp, item, list.def)
    }
    __html.push('<div class="' + "card card-2" + '">');
    __html.push('<div class="' + "card-heading" + '">');
    __html.push('</div>');
    __html.push('<div class="' + "card-body" + '">');
    __html.push('<h2 class="' + "title" + '">');
    __html.push( list.title );
    __html.push('</h2>');
    __html.push('<div id="' + list.def.id + '">');
    __html.push('<ul>');
    __html.push( temp.join('\n') );
    __html.push('</ul>');
    __html.push('</div>');
    __html.push('</div>');
    __html.push('</div>');
}
function listUlHtml_head(__html, def) {
    var temp = [];
    var i, i_items=def.columns, i_len=def.columns.length, column;
    for (i=0; i<i_len; i++) {
        column = def.columns[i];
        listUlHtml_headCell(temp, column)
    }
    __html.push('<li class="' + "list-head" + '">');
    __html.push( temp.join('\n') );
    __html.push('</li>');
}
function listUlHtml_headCell(__html, def) {
    __html.push('<div class="' + "list-head-cell" + '">');
    __html.push('<div class="' + "list-head-cell-label" + '">');
    __html.push( def.label || def.id );
    __html.push('</div>');
    __html.push('</div>');
}
function listUlHtml_row(__html, item, def) {
    var temp = [];
    var i, i_items=def.columns, i_len=def.columns.length, column;
    for (i=0; i<i_len; i++) {
        column = def.columns[i];
        listUlHtml_cell(temp, item[column.id], column)
    }
    __html.push('<li class="' + "list-row" + '">');
    __html.push( temp.join('\n') );
    __html.push('</li>');
}
function listUlHtml_cell(__html, value, def) {
    __html.push('<div class="' + "list-cell" + '">');
    __html.push('<div class="' + "list-cell" + '">');
    __html.push( value );
    __html.push('</div>');
    __html.push('</div>');
}
function listTableHtml(__html, list) {
    var temp_thead = [];
    listTableHtml_thead(temp_thead, list.def)
    var temp_tbody = [];
    listTableHtml_tbody(temp_tbody, list)
    if (list.def.isEditAdd) {
        var temp_tbody_edit_add = [];
        listTableHtml_edit_add(temp_tbody_edit_add, list.def)
    }
    __html.push('<div class="' + "card card-2" + '">');
    __html.push('<div class="' + "card-heading" + '">');
    __html.push('</div>');
    __html.push('<div class="' + "card-body" + '">');
    __html.push('<h2 class="' + "title" + '">');
    __html.push( list.title );
    __html.push('</h2>');
    __html.push('</div>');
    __html.push('<div id="' + list.def.id + '">');
    __html.push('<table>');
    __html.push('<thead>');
    __html.push( temp_thead.join('\n') );
    __html.push('</thead>');
    __html.push('<tbody class="' + "list" + '">');
    __html.push( temp_tbody.join('\n') );
    __html.push('</tbody>');
    __html.push('</table>');
    if (list.def.isEditAdd) {
        __html.push('<table>');
        __html.push('<tbody>');
        __html.push( temp_tbody_edit_add.join('\n') );
        __html.push('</tbody>');
        __html.push('</table>');
    }
    __html.push('</div>');
    __html.push('</div>');
}
function listTableHtml_thead(__html, def) {
    var i, i_items=def.columns, i_len=def.columns.length, column_def;
    for (i=0; i<i_len; i++) {
        column_def = def.columns[i];
        listTableHtml_th(__html, column_def)
    }
    if (def.hasSearch) {
        __html.push('<th colspan="' + "2" + '">');
        __html.push('<input class="' + "search" + '" type="' + "text" + '" placeholder="' + "Search" + '">');
        __html.push('</input>');
        __html.push('</th>');
    }
}
function listTableHtml_th(__html, column_def) {
    __html.push('<th class="' + "list-table-th sort" + '" data-sort="' +  column_def.id  + '">');
    __html.push( column_def.label || column_def.id );
    __html.push('</th>');
}
function listTableHtml_tbody(__html, list) {
    var i, i_items=list.data.items, i_len=list.data.items.length, item;
    for (i=0; i<i_len; i++) {
        item = list.data.items[i];
        listTableHtml_tr(__html, item, list.def)
    }
}
function listTableHtml_tr(__html, data_item, list_def) {
    var temp = [];
    var i, i_items=list_def.columns, i_len=list_def.columns.length, column_def;
    for (i=0; i<i_len; i++) {
        column_def = list_def.columns[i];
        listTableHtml_td(temp, data_item[column_def.id], column_def)
    }
    __html.push('<tr class="' + "list-table-td" + '">');
    __html.push( temp.join('\n') );
    __html.push('<td class="' + "edit" + '">');
    __html.push('<button class="' + "edit-" + list_def.id + "-item-btn" + '">');
    __html.push("Edit");
    __html.push('</button>');
    __html.push('</td>');
    __html.push('<td class="' + "remove" + '">');
    __html.push('<button class="' + "remove-" + list_def.id + "-item-btn" + '">');
    __html.push("Remove");
    __html.push('</button>');
    __html.push('</td>');
    __html.push('</tr>');
}
function listTableHtml_td(__html, value, column_def) {
    __html.push('<td class="list-table-td ' + column_def.id + ' ' + (column_def.isKey ? 'td-hidden' : '') + '">' + value + '</td>')
}
function listTableHtml_edit_add(__html, list_def) {
    var first = true;
    var i, i_items=list_def.columns, i_len=list_def.columns.length, column_def;
    for (i=0; i<i_len; i++) {
        column_def = list_def.columns[i];
        if (!!column_def.isKey == false) {
            listTableHtml_edit_add_td(__html, list_def, column_def, first)
            first = false;
        }
    }
    __html.push('<td class="' + "add" + '">');
    __html.push('<button id="' + "add-" + list_def.id + "-btn" + '">');
    __html.push("Add");
    __html.push('</button>');
    __html.push('</td>');
    __html.push('<td class="' + "edit" + '">');
    __html.push('<button id="' + "edit-" + list_def.id + "-btn" + '">');
    __html.push("Edit");
    __html.push('</button>');
    __html.push('</td>');
}
function listTableHtml_edit_add_td(__html, list_def, column_def, first) {
    var temp = [];
    if (first) {
        listTableHtml_edit_add_key(temp, list_def)
    }
    __html.push('<td class="' + "list-table-edit-add-td " +  column_def.id  + '">');
    __html.push( temp.join('\n') );
    __html.push('<input type="' + "text" + '" id="' + column_def.id  + "_field" + '" placeholder="' + column_def.label + '">');
    __html.push('</input>');
    __html.push('</td>');
}
function listTableHtml_edit_add_key(__html, list_def) {
    var keyId;
    var i, i_items=list_def.columns, i_len=list_def.columns.length, column_def;
    for (i=0; i<i_len; i++) {
        column_def = list_def.columns[i];
        if (column_def.isKey) {
            keyId = column_def.id;
        }
    }
    __html.push('<input type="' + "hidden" + '" id="' + keyId  + "_field" + '">');
    __html.push('</input>');
}
function startList($, list, context) {
    if (list.def.kind == 'table') {
        startList_table($, list, context)
    }
    else {
        startList_ul($, list, context)
    }
}
function startList_ul($, list, context) {
}
function startList_table($, list, context) {
    var list_def = list.def;
    var keyId;
    var options = {
        valueNames: [
            
        ]
    };
    var i, i_items=list_def.columns, i_len=list_def.columns.length, column_def;
    for (i=0; i<i_len; i++) {
        column_def = list_def.columns[i];
        if (column_def.isKey) {
            keyId = column_def.id;
        }
        options.valueNames.push(column_def.id)
    }
    if (!keyId || keyId.length < 1) {
        throw new Error('Id key missing on list ' + list_def.id);
    }
    console.log('starting list', list_def.id, $('#' + list_def.id)[0]);
    // Init list
    var listObj = new List(list_def.id, options);
    var addBtn = $('#add-' + list_def.id + '-btn'),
        editBtn = $('#edit-' + list_def.id + '-btn').hide();
    addBtn.click(function() {
        var valuesObj = lt_formFieldsValues();
        valuesObj[keyId] = Math.floor(Math.random() * 110000);
        listObj.add(valuesObj)
        lt_clearFormFields();
        if (list_def.onAdd) {
            list_def.onAdd(valuesObj)
        }
    })
    editBtn.click(function() {
        var item = listObj.get(keyId, $('#' + keyId + '_field').val())[0];
        var oldValues = Object.assign({}, item.values());
        var newValues = lt_formFieldsValues();
        item.values(newValues)
        if (list_def.onUpdate) {
            list_def.onUpdate({
                old: oldValues, 
                new: newValues
            })
        }
        lt_clearFormFields();
        editBtn.hide();
        addBtn.show();
    })
    // Sets callbacks to the buttons in the list
    lt_setItemsEventHandlers();
    function lt_setItemsEventHandlers() {
        $(document).on('click', '.remove-' + list_def.id + '-item-btn', function() {
            var itemId = $(this).closest('tr').find('.' + keyId).text();
            var itemValues = listObj.get(keyId, itemId)[0].values();
            listObj.remove(keyId, itemId);
            if (list_def.onRemove) {
                list_def.onRemove(itemValues)
            }
        })
        $(document).on('click', '.edit-' + list_def.id + '-item-btn', function() {
            var itemId = $(this).closest('tr').find('.' + keyId).text();
            var itemValues = listObj.get(keyId, itemId)[0].values();
            var i, i_items=list_def.columns, i_len=list_def.columns.length, column_def;
            for (i=0; i<i_len; i++) {
                column_def = list_def.columns[i];
                $('#' + column_def.id + '_field').val(itemValues[column_def.id]);
            }
            editBtn.show();
            addBtn.hide();
            if (list_def.onSelectItem) {
                list_def.onSelectItem(itemValues)
            }
        })
    }
    function lt_clearFormFields() {
        var i, i_items=list_def.columns, i_len=list_def.columns.length, column_def;
        for (i=0; i<i_len; i++) {
            column_def = list_def.columns[i];
            $('#' + column_def.id + '_field').val('');
        }
    }
    function lt_formFieldsValues() {
        var ret = {};
        var i, i_items=list_def.columns, i_len=list_def.columns.length, column_def;
        for (i=0; i<i_len; i++) {
            column_def = list_def.columns[i];
            ret[column_def.id] = $('#' + column_def.id + '_field').val();
        }
        return ret;
    }
}
function startListValidation($, list) {
    var rules = {};
}
