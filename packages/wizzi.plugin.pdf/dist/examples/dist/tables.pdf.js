const fs = require("fs");
const pdfmake = require("pdfmake");

const pdf_doc_1 = { content: [], styles: {} };
const pdf_styleDef_2 = {};
pdf_styleDef_2.fontSize = 18;
pdf_styleDef_2.bold = true;
pdf_styleDef_2.margin = [0,0,0,10];
pdf_doc_1.styles["header"] = pdf_styleDef_2;
const pdf_styleDef_3 = {};
pdf_styleDef_3.fontSize = 16;
pdf_styleDef_3.bold = true;
pdf_styleDef_3.margin = [0,10,0,5];
pdf_doc_1.styles["subheader"] = pdf_styleDef_3;
const pdf_styleDef_4 = {};
pdf_styleDef_4.margin = [0,5,0,15];
pdf_doc_1.styles["tableExample"] = pdf_styleDef_4;
const pdf_styleDef_5 = {};
pdf_styleDef_5.bold = true;
pdf_styleDef_5.fontSize = 13;
pdf_styleDef_5.color = "black";
pdf_doc_1.styles["tableHeader"] = pdf_styleDef_5;
const pdf_sect_6 = { content: [], styles: {} };
const pdf_p_7 = {};
pdf_p_7.text = [];
pdf_p_7.text.push("Tables");
pdf_p_7.style = "header";
pdf_sect_6["content"].push(pdf_p_7);
const pdf_p_8 = {};
pdf_p_8.text = [];
pdf_p_8.text.push("Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.");
pdf_sect_6["content"].push(pdf_p_8);
const pdf_p_9 = {};
pdf_p_9.text = [];
pdf_p_9.text.push("A simple table (no headers, no width specified, no spans, no styling)");
pdf_p_9.style = "subheader";
pdf_sect_6["content"].push(pdf_p_9);
const pdf_p_10 = {};
pdf_p_10.text = [];
pdf_p_10.text.push("The following table has nothing more than a body array");
pdf_sect_6["content"].push(pdf_p_10);
const pdf_table_11 = {};
pdf_table_11.table = { body: [] };
pdf_table_11.style = "tableExample";
const pdf_tr_12 = {};
pdf_tr_12.tds = [];
const pdf_txt_13 = {};
pdf_txt_13.text = "Column 1";
pdf_tr_12["tds"].push(pdf_txt_13);
const pdf_txt_14 = {};
pdf_txt_14.text = "Column 2";
pdf_tr_12["tds"].push(pdf_txt_14);
const pdf_txt_15 = {};
pdf_txt_15.text = "Column 3";
pdf_tr_12["tds"].push(pdf_txt_15);
pdf_table_11.table.body.push(pdf_tr_12.tds);
const pdf_tr_16 = {};
pdf_tr_16.tds = [];
const pdf_txt_17 = {};
pdf_txt_17.text = "One value goes here";
pdf_tr_16["tds"].push(pdf_txt_17);
const pdf_txt_18 = {};
pdf_txt_18.text = "Another one here";
pdf_tr_16["tds"].push(pdf_txt_18);
const pdf_txt_19 = {};
pdf_txt_19.text = "OK?";
pdf_tr_16["tds"].push(pdf_txt_19);
pdf_table_11.table.body.push(pdf_tr_16.tds);
pdf_sect_6["content"].push(pdf_table_11);
const pdf_p_20 = {};
pdf_p_20.text = [];
pdf_p_20.text.push("A simple table with nested elements");
pdf_p_20.style = "subheader";
pdf_sect_6["content"].push(pdf_p_20);
const pdf_p_21 = {};
pdf_p_21.text = [];
pdf_p_21.text.push("It is of course possible to nest any other type of nodes available in pdfmake inside table cells");
pdf_sect_6["content"].push(pdf_p_21);
const pdf_table_22 = {};
pdf_table_22.table = { body: [] };
pdf_table_22.style = "tableExample";
const pdf_tr_23 = {};
pdf_tr_23.tds = [];
const pdf_txt_24 = {};
pdf_txt_24.text = "Column 1";
pdf_tr_23["tds"].push(pdf_txt_24);
const pdf_txt_25 = {};
pdf_txt_25.text = "Column 2";
pdf_tr_23["tds"].push(pdf_txt_25);
const pdf_txt_26 = {};
pdf_txt_26.text = "Column 3";
pdf_tr_23["tds"].push(pdf_txt_26);
pdf_table_22.table.body.push(pdf_tr_23.tds);
const pdf_tr_27 = {};
pdf_tr_27.tds = [];
const pdf_stack_28 = {};
pdf_stack_28.stack = [];
const pdf_p_29 = {};
pdf_p_29.text = [];
pdf_p_29.text.push("Let's try an unordered list");
pdf_stack_28["stack"].push(pdf_p_29);
const pdf_ul_30 = {};
pdf_ul_30.ul = [];
const pdf_p_31 = {};
pdf_p_31.text = [];
pdf_p_31.text.push("item 1");
pdf_ul_30["ul"].push(pdf_p_31);
const pdf_p_32 = {};
pdf_p_32.text = [];
pdf_p_32.text.push("item 2");
pdf_ul_30["ul"].push(pdf_p_32);
pdf_stack_28["stack"].push(pdf_ul_30);
pdf_tr_27["tds"].push(pdf_stack_28);
const pdf_stack_33 = {};
pdf_stack_33.stack = [];
const pdf_p_34 = {};
pdf_p_34.text = [];
pdf_p_34.text.push("or a nested table");
pdf_stack_33["stack"].push(pdf_p_34);
const pdf_table_35 = {};
pdf_table_35.table = { body: [] };
const pdf_tr_36 = {};
pdf_tr_36.tds = [];
const pdf_txt_37 = {};
pdf_txt_37.text = "Col1";
pdf_tr_36["tds"].push(pdf_txt_37);
const pdf_txt_38 = {};
pdf_txt_38.text = "Col2";
pdf_tr_36["tds"].push(pdf_txt_38);
const pdf_txt_39 = {};
pdf_txt_39.text = "Col3";
pdf_tr_36["tds"].push(pdf_txt_39);
pdf_table_35.table.body.push(pdf_tr_36.tds);
const pdf_tr_40 = {};
pdf_tr_40.tds = [];
const pdf_txt_41 = {};
pdf_txt_41.text = "1";
pdf_tr_40["tds"].push(pdf_txt_41);
const pdf_txt_42 = {};
pdf_txt_42.text = "2";
pdf_tr_40["tds"].push(pdf_txt_42);
const pdf_txt_43 = {};
pdf_txt_43.text = "3";
pdf_tr_40["tds"].push(pdf_txt_43);
pdf_table_35.table.body.push(pdf_tr_40.tds);
const pdf_tr_44 = {};
pdf_tr_44.tds = [];
const pdf_txt_45 = {};
pdf_txt_45.text = "1";
pdf_tr_44["tds"].push(pdf_txt_45);
const pdf_txt_46 = {};
pdf_txt_46.text = "2";
pdf_tr_44["tds"].push(pdf_txt_46);
const pdf_txt_47 = {};
pdf_txt_47.text = "3";
pdf_tr_44["tds"].push(pdf_txt_47);
pdf_table_35.table.body.push(pdf_tr_44.tds);
pdf_stack_33["stack"].push(pdf_table_35);
pdf_tr_27["tds"].push(pdf_stack_33);
const pdf_stack_48 = {};
pdf_stack_48.stack = [];
const pdf_p_49 = {};
pdf_p_49.text = [];
const pdf_txt_50 = {};
pdf_txt_50.text = "Inlines can be";
pdf_p_49["text"].push(pdf_txt_50);
const pdf_txt_51 = {};
pdf_txt_51.text = "styled\n";
pdf_txt_51.italics = true;
pdf_p_49["text"].push(pdf_txt_51);
const pdf_txt_52 = {};
pdf_txt_52.text = "easily as everywhere else";
pdf_txt_52.fontSize = 10;
pdf_p_49["text"].push(pdf_txt_52);
pdf_stack_48["stack"].push(pdf_p_49);
pdf_tr_27["tds"].push(pdf_stack_48);
pdf_table_22.table.body.push(pdf_tr_27.tds);
pdf_sect_6["content"].push(pdf_table_22);
const pdf_p_53 = {};
pdf_p_53.text = [];
pdf_p_53.text.push("Defining column widths");
pdf_p_53.style = "subheader";
pdf_sect_6["content"].push(pdf_p_53);
const pdf_p_54 = {};
pdf_p_54.text = [];
pdf_p_54.text.push("Tables support the same width definitions as standard columns:");
pdf_sect_6["content"].push(pdf_p_54);
const pdf_stack_55 = {};
pdf_stack_55.stack = [];
pdf_stack_55.bold = true;
const pdf_ul_56 = {};
pdf_ul_56.ul = [];
const pdf_txt_57 = {};
pdf_txt_57.text = "auto";
pdf_ul_56["ul"].push(pdf_txt_57);
const pdf_txt_58 = {};
pdf_txt_58.text = "star";
pdf_ul_56["ul"].push(pdf_txt_58);
const pdf_txt_59 = {};
pdf_txt_59.text = "fixed value";
pdf_ul_56["ul"].push(pdf_txt_59);
pdf_stack_55["stack"].push(pdf_ul_56);
pdf_sect_6["content"].push(pdf_stack_55);
const pdf_table_60 = {};
pdf_table_60.table = { body: [] };
pdf_table_60.style = "tableExample";
pdf_table_60.table.widths = [100,'*',200,'*'];
const pdf_tr_61 = {};
pdf_tr_61.tds = [];
const pdf_txt_62 = {};
pdf_txt_62.text = "width=100";
pdf_tr_61["tds"].push(pdf_txt_62);
const pdf_txt_63 = {};
pdf_txt_63.text = "star-sized";
pdf_tr_61["tds"].push(pdf_txt_63);
const pdf_txt_64 = {};
pdf_txt_64.text = "width=200";
pdf_tr_61["tds"].push(pdf_txt_64);
const pdf_txt_65 = {};
pdf_txt_65.text = "star-sized";
pdf_tr_61["tds"].push(pdf_txt_65);
pdf_table_60.table.body.push(pdf_tr_61.tds);
const pdf_tr_66 = {};
pdf_tr_66.tds = [];
const pdf_txt_67 = {};
pdf_txt_67.text = "fixed-width cells have exactly the specified width";
pdf_tr_66["tds"].push(pdf_txt_67);
const pdf_txt_68 = {};
pdf_txt_68.text = "nothing interesting here";
pdf_txt_68.italics = true;
pdf_txt_68.color = "gray";
pdf_tr_66["tds"].push(pdf_txt_68);
const pdf_txt_69 = {};
pdf_txt_69.text = "nothing interesting here";
pdf_txt_69.italics = true;
pdf_txt_69.color = "gray";
pdf_tr_66["tds"].push(pdf_txt_69);
const pdf_txt_70 = {};
pdf_txt_70.text = "nothing interesting here";
pdf_txt_70.italics = true;
pdf_txt_70.color = "gray";
pdf_tr_66["tds"].push(pdf_txt_70);
pdf_table_60.table.body.push(pdf_tr_66.tds);
pdf_sect_6["content"].push(pdf_table_60);
const pdf_table_71 = {};
pdf_table_71.table = { body: [] };
pdf_table_71.style = "tableExample";
pdf_table_71.table.widths = ['*','auto'];
const pdf_tr_72 = {};
pdf_tr_72.tds = [];
const pdf_txt_73 = {};
pdf_txt_73.text = "This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.";
pdf_tr_72["tds"].push(pdf_txt_73);
const pdf_txt_74 = {};
pdf_txt_74.text = "I am auto sized.";
pdf_tr_72["tds"].push(pdf_txt_74);
pdf_table_71.table.body.push(pdf_tr_72.tds);
pdf_sect_6["content"].push(pdf_table_71);
const pdf_table_75 = {};
pdf_table_75.table = { body: [] };
pdf_table_75.style = "tableExample";
pdf_table_75.table.widths = ['*','auto'];
const pdf_tr_76 = {};
pdf_tr_76.tds = [];
const pdf_txt_77 = {};
pdf_txt_77.text = "This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.";
pdf_tr_76["tds"].push(pdf_txt_77);
const pdf_txt_78 = {};
pdf_txt_78.text = "I am auto sized";
pdf_txt_78.noWrap = true;
pdf_tr_76["tds"].push(pdf_txt_78);
pdf_table_75.table.body.push(pdf_tr_76.tds);
pdf_sect_6["content"].push(pdf_table_75);
const pdf_MainObject = { sections : [] };
pdf_sect_6.content.push({ text: ' ', pageBreak: 'after'});
pdf_MainObject.sections.push(pdf_sect_6);

// Make Pdf

// Build document definition
var now = new Date();
var documentDefinition = pdf_doc_1;
pdf_MainObject.sections.forEach(section => {
    section.content.forEach(contentItem => {
        documentDefinition.content.push(contentItem);
    });
    Object.assign({}, documentDefinition.styles, section.styles);
});

// Dump for test
    fs.writeFileSync(__dirname + "/tables.json", JSON.stringify(documentDefinition, null, "	"));

// Set fonts
var fonts = {
	Roboto: {
		normal: __dirname + "/fonts/Roboto-Regular.ttf",
		bold: __dirname + "/fonts/Roboto-Medium.ttf",
		italics: __dirname + "/fonts/Roboto-Italic.ttf",
		bolditalics: __dirname + "/fonts/Roboto-MediumItalic.ttf"
	}
};

// Create document
var printer = new pdfmake(fonts);
var pdfDoc = printer.createPdfKitDocument(documentDefinition);
pdfDoc.pipe(fs.createWriteStream(__dirname + "/tables.pdf"));
pdfDoc.end();
console.log("DONE written", new Date() - now)
