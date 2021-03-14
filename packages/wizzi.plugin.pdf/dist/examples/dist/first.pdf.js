const fs = require("fs");
const pdfmake = require("pdfmake");

const pdf_doc_1 = { content: [], styles: {} };
const pdf_styleDef_2 = {};
pdf_styleDef_2.fontSize = 56;
pdf_styleDef_2.bold = true;
pdf_styleDef_2.italics = true;
pdf_styleDef_2.color = "red";
pdf_doc_1.styles["heading1"] = pdf_styleDef_2;
const pdf_styleDef_3 = {};
pdf_styleDef_3.fontSize = 32;
pdf_styleDef_3.color = "blue";
pdf_doc_1.styles["normal"] = pdf_styleDef_3;
const pdf_sect_4 = { content: [], styles: {} };
const pdf_p_5 = {};
pdf_p_5.text = [];
pdf_p_5.text.push("Titolo 1");
pdf_p_5.style = "heading1";
pdf_sect_4.content.push(pdf_p_5);
const pdf_p_6 = {};
pdf_p_6.text = [];
pdf_p_6.text.push("Hello world");
pdf_sect_4.content.push(pdf_p_6);
const pdf_txt_7 = {};
pdf_txt_7.text = "Bold hello";
pdf_txt_7.bold = true;
pdf_sect_4["content"].push(pdf_txt_7);
const pdf_txt_8 = {};
pdf_txt_8.text = "Italics hello";
pdf_txt_8.italics = true;
pdf_txt_8.fontSize = 32;
pdf_sect_4["content"].push(pdf_txt_8);
const pdf_p_9 = {};
pdf_p_9.text = [];
const pdf_txt_10 = {};
pdf_txt_10.text = "my hello in paragraph";
pdf_p_9["text"].push(pdf_txt_10);
pdf_sect_4.content.push(pdf_p_9);
const pdf_image_11 = {};
pdf_image_11.image = "C:/My/wizzi/stfnbssl/stfnbssl.github.io/cosie/.wizzi/src/17marzo2021/images/1 mese.png";
pdf_image_11.width = 300;
pdf_image_11.height = 700;
pdf_sect_4["content"].push(pdf_image_11);
const pdf_ul_12 = {};
pdf_ul_12.ul = [];
const pdf_txt_13 = {};
pdf_txt_13.text = "list item 1";
pdf_ul_12["ul"].push(pdf_txt_13);
const pdf_txt_14 = {};
pdf_txt_14.text = "list item 2";
pdf_ul_12["ul"].push(pdf_txt_14);
pdf_sect_4["content"].push(pdf_ul_12);
const pdf_MainObject = { sections : [] };
pdf_sect_4.content.push({ text: ' ', pageBreak: 'after'});
pdf_MainObject.sections.push(pdf_sect_4);

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
    fs.writeFileSync("first.json", JSON.stringify(documentDefinition, null, "	"));

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
pdfDoc.pipe(fs.createWriteStream("first.pdf"));
pdfDoc.end();
console.log("DONE written", new Date() - now)
