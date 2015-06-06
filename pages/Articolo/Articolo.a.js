dojo.declare("Articolo", wm.Page, {
start: function() {
this.textBarcode.focus();
},
"preferredDevice": "phone",
serviceVarArticoloResult: function(inSender, inDeprecated) {
if (this.serviceVarArticolo.data.sku === '') {
this.notificationArticoloNonTrovato.update();
};
this.textBarcode.setDataValue(null);
this.textBarcode.focus();
},
textBarcodeChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
if (inDataValue != null) {
this.serviceVarArticolo.update();
}
},
buttonSelectClick: function(inSender) {
var row = this.gridVarianti.selectedItem.getData();
console.log(row);
if (row.BARCODE != ''){
this.textBarcode.setDataValue(row.BARCODE)
}
else {
app.toastInfo("Barcode not available for this variation");
//this.textBarcode.setDataValue(this.serviceVarArticolo.data.parent_sku + "@" + row.VARIANTE)
}
this.textBarcode.focus();
},
button3Click1: function(inSender) {
this.textBarcode.focus();
},
notificationArticoloNonTrovatoClose: function(inSender) {
this.textBarcode.focus();
},
_end: 0
});

Articolo.widgets = {
serviceVarArticolo: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"articolo","service":"xhrService"}, {"onResult":"serviceVarArticoloResult"}, {
input: ["wm.ServiceInput", {"type":"articoloInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.serviceApp.sessionName","targetProperty":"JXSESSNAME"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"textBarcode.dataValue","targetProperty":"barcodeSearch"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"app.varConfig.server","targetProperty":"server"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"fancyPanel1","targetProperty":"loadingDialog"}, {}]
}]
}],
notificationArticoloNonTrovato: ["wm.NotificationCall", {}, {"onClose":"notificationArticoloNonTrovatoClose"}, {
input: ["wm.ServiceInput", {"type":"alertInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Item not found\"","targetProperty":"text"}, {}]
}]
}]
}],
serviceVarStockTaglie: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"giacenza_altre_taglie","service":"xhrService"}, {"onResult":"dialogGiacenzaTaglie.show"}, {
input: ["wm.ServiceInput", {"type":"giacenza_altre_taglieInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.serviceApp.sessionName","targetProperty":"JXSESSNAME"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"serviceVarArticolo.sku","targetProperty":"articolo"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"app.varConfig.server","targetProperty":"server"}, {}]
}]
}]
}],
serviceVarVariantiArticolo: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"varianti_articolo","service":"xhrService"}, {"onResult":"dialogSelectVariante.show"}, {
input: ["wm.ServiceInput", {"type":"varianti_articoloInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.serviceApp.sessionName","targetProperty":"JXSESSNAME"}, {}],
wire1: ["wm.Wire", {"expression":"1","targetProperty":"numtip"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"serviceVarArticolo.parent_sku","targetProperty":"articolo"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"serviceVarArticolo.size","targetProperty":"taglia"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"app.varConfig.server","targetProperty":"server"}, {}]
}]
}]
}],
dialogGiacenzaTaglie: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","title":"Stock x size"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
dojoGrid1: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"ROWID","title":"ROWID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PAGEID","title":"PAGEID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PAGECOUNT","title":"PAGECOUNT","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"O2ASPID","title":"O2ASPID","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"DEPOSITO","title":"DEPOSITO","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"ARTICOLO","title":"ARTICOLO","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"POSIZIONE","title":"POSIZIONE","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"VARIANTE","title":"Size","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"GIACENZA","title":"Qty","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Size: \" + ${VARIANTE} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Qty: \" + ${GIACENZA}\n + \"</div>\"\n\n","isCustomField":true,"mobileColumn":true}
],"deviceType":null,"dsType":"giacenza_altre_taglieResponse","height":"100%","localizationStructure":{},"margin":"4","minDesktopHeight":60,"noHeader":true,"singleClickEdit":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"serviceVarStockTaglie","targetProperty":"dataSet"}, {}]
}]
}]
}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"black","height":"41px","horizontalAlign":"center","mobileHeight":"41px"}, {}, {
button3: ["wm.Button", {"border":"0","caption":"Close","height":"40px"}, {"onclick":"dialogGiacenzaTaglie.hide","onclick1":"button3Click1"}]
}]
}],
dialogSelectVariante: ["wm.DesignableDialog", {"buttonBarId":"buttonBar1","containerWidgetId":"containerWidget1","title":"Select variation"}, {}, {
containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
gridVarianti: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Variation: \" + ${VARIANTE} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Description: \" + ${DESCRIZIONE}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Barcode: \" + ${BARCODE}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Size Stock: \" + ${GIACENZA_TAGLIA}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Item Stock: \" + parseInt(${GIACENZA_ARTICOLO})\n + \"</div>\"\n","isCustomField":true,"mobileColumn":true},
{"show":false,"field":"ROWID","title":"ROWID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PAGEID","title":"PAGEID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PAGECOUNT","title":"PAGECOUNT","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"O2ASPID","title":"O2ASPID","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"TIPOLOGIA","title":"TIPOLOGIA","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"VARIANTE","title":"VARIANTE","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"POSVARIANTE","title":"POSVARIANTE","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"DESCRIZIONE","title":"DESCRIZIONE","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"TAGLIA","title":"TAGLIA","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"BARCODE","title":"BARCODE","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"GIACENZA_TAGLIA","title":"GIACENZA_TAGLIA","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"GIACENZA_ARTICOLO","title":"GIACENZA_ARTICOLO","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"deviceType":null,"dsType":"varianti_articoloResponse","height":"100%","margin":"4","minDesktopHeight":60,"noHeader":true,"singleClickEdit":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"serviceVarVariantiArticolo","targetProperty":"dataSet"}, {}]
}]
}]
}],
buttonBar1: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"black","height":"41px","horizontalAlign":"center","mobileHeight":"41px"}, {}, {
buttonClose: ["wm.Button", {"border":"0","caption":"Close","height":"40px"}, {"onclick":"dialogSelectVariante.hide"}],
buttonSelect: ["wm.Button", {"border":"0","caption":"Select","height":"40px"}, {"onclick":"buttonSelectClick","onclick1":"dialogSelectVariante.hide"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${gridVarianti.selectedItem.BARCODE} == \"\"","targetProperty":"disabled"}, {}]
}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"center","verticalAlign":"top"}, {}, {
panelHeader: ["wm.Panel", {"border":"1","borderColor":"#2780e3","desktopHeight":"50px","enableTouchHeight":true,"height":"50px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"50px","styles":{"backgroundColor":"#2780e3","color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
buttonMenu: ["wm.Button", {"_classes":{"domNode":["buttonMenu"]},"border":"0","borderColor":"","caption":"Menu","desktopHeight":"100px","height":"50px","imageIndex":0,"imageList":"app.cosmoBasic","mobileHeight":"50px","styles":{}}, {"onclick":"app.navigationCallMenu"}],
labelTitolo: ["wm.Label", {"_classes":{"domNode":["labelTitolo"]},"align":"left","borderColor":"","caption":"Product search","height":"100%","margin":"0,6,0,0","padding":"4","styles":{"textAlign":"right"},"width":"100%"}, {}]
}],
textBarcode: ["wm.Text", {"caption":"Barcode","captionAlign":"left","captionSize":"80px","dataValue":undefined,"desktopHeight":"35px","displayValue":"","height":"36px","styles":{},"width":"90%"}, {"onchange":"textBarcodeChange"}],
fancyPanel1: ["wm.FancyPanel", {"styles":{},"title":"Item details"}, {}, {
dataForm1: ["wm.DataForm", {"captionAlign":"left","captionSize":"80px","desktopHeight":"566px","editorHeight":"25px","fitToContentHeight":true,"height":"256px","isCompositeKey":false,"mobileHeight":"566px","readonly":true,"type":"articoloResponse"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"serviceVarArticolo","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":"${serviceVarArticolo.sku} != ''","targetProperty":"showing"}, {}]
}],
skuEditor1: ["wm.Text", {"caption":"Sku","captionAlign":"left","captionSize":"80px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"sku","height":"25px","mobileHeight":"25px","readonly":true,"required":undefined,"width":"100%"}, {}],
descriptionEditor1: ["wm.Text", {"caption":"Description","captionAlign":"left","captionSize":"80px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"description","height":"25px","mobileHeight":"25px","readonly":true,"required":undefined,"width":"100%"}, {}],
sizeEditor1: ["wm.Text", {"caption":"Size","captionAlign":"left","captionSize":"80px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"size","height":"25px","mobileHeight":"25px","readonly":true,"required":undefined,"width":"100%"}, {}],
umEditor1: ["wm.Text", {"caption":"Um","captionAlign":"left","captionSize":"80px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"um","height":"25px","mobileHeight":"25px","readonly":true,"required":undefined,"width":"100%"}, {}],
taxRateEditor1: ["wm.Text", {"caption":"TaxRate","captionAlign":"left","captionSize":"80px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"taxRate","height":"25px","mobileHeight":"25px","readonly":true,"required":undefined,"width":"100%"}, {}],
barcodeEditor1: ["wm.Text", {"caption":"Barcode","captionAlign":"left","captionSize":"80px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"barcode","height":"25px","mobileHeight":"25px","readonly":true,"required":undefined,"width":"100%"}, {}],
mainSupplierEditor1: ["wm.Text", {"caption":"Supplier","captionAlign":"left","captionSize":"80px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"mainSupplier","height":"25px","mobileHeight":"25px","readonly":true,"required":undefined,"width":"100%"}, {}],
supplierProductCodeEditor1: ["wm.Text", {"caption":"Suppl.Code","captionAlign":"left","captionSize":"80px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"supplierProductCode","height":"25px","mobileHeight":"25px","readonly":true,"required":undefined,"width":"100%"}, {}],
salePriceEditor1: ["wm.Number", {"caption":"SalePrice","captionAlign":"left","captionSize":"80px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"salePrice","height":"25px","mobileHeight":"25px","readonly":true,"required":undefined,"width":"100%"}, {}],
stockQtyEditor1: ["wm.Number", {"caption":"StockQty","captionAlign":"left","captionSize":"80px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"stockQty","height":"25px","mobileHeight":"25px","readonly":true,"required":undefined,"width":"100%"}, {}]
}],
panel2: ["wm.Panel", {"desktopHeight":"50px","enableTouchHeight":true,"height":"50px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"50px","verticalAlign":"top","width":"100%"}, {}, {
buttonStockTaglie: ["wm.Button", {"border":"0","caption":"Other sizes","height":"50px","mobileHeight":"50px","width":"50%"}, {"onclick":"serviceVarStockTaglie"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"serviceVarArticolo.has_sizes","targetProperty":"showing"}, {}]
}]
}],
buttonVarianti: ["wm.Button", {"border":"0","caption":"Other variants","height":"50px","mobileHeight":"50px","width":"50%"}, {"onclick":"serviceVarVariantiArticolo"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"serviceVarArticolo.has_variants","targetProperty":"showing"}, {}]
}]
}]
}]
}]
}]
};

Articolo.prototype._cssText = '';
Articolo.prototype._htmlText = '';