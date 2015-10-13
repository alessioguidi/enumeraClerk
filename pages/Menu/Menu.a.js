dojo.declare("Menu", wm.Page, {
start: function() {
//	this.serviceCountNewDeals.update();
this.labelRelease.setCaption("Release:" + app.getFullVersionNumber());
var settings = app.varConfig.getItem(0);
this.layers.setLayer(this.layers.getLayerByCaption(settings.data.Menu));
},
"preferredDevice": "phone",
buttonMemoClick: function(inSender) {
main.ncMemo.update()
},
buttonInfoClick: function(inSender) {
main.ncInfo.update()
},
buttonNewsClick: function(inSender) {
main.ncNews.update()
},
buttonMeteoClick: function(inSender) {
main.ncMeteo.update()
},
buttonFriendsClick: function(inSender) {
main.ncFriends.update()
},
buttonShopClick: function(inSender) {
main.ncShop.update()
},
buttonProfiloClick: function(inSender) {
main.ncProfilo.update()
},
buttonUscitaClick: function(inSender) {
app.confirmExit.update();
},
buttonCouponClick: function(inSender) {
main.ncCoupons.update()
},
html1Click: function(inSender) {
main.ncShop.update()
},
serviceCountNewDealsSuccess: function(inSender, inDeprecated) {
var newqty = inSender.getItem(0).getValue("QTY_OUT");
if (newqty > 0){
$(menu_corner).append(newqty)
$(menu_corner).show()
}
else {
$(menu_corner).hide();
}
},
label3Click: function(inSender, inEvent) {
console.log(app.getFullVersionNumber());
},
_end: 0
});

Menu.widgets = {
imageList1: ["wm.ImageList", {"colCount":16,"height":60,"iconCount":16,"url":"resources/images/imagelists/menu_60.png","width":60}, {}],
serviceCountNewDeals: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"agenteProvvigioni","service":"xhrService"}, {"onSuccess":"serviceCountNewDealsSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"html1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"agenteProvvigioniInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.varConnection.SERVER","targetProperty":"server"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"app.varConnection.ALIAS","targetProperty":"alias"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"app.deviceInformation.uuid","targetProperty":"device_uuid"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"app.deviceInformation.latitude","targetProperty":"latitude"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"app.deviceInformation.longitude","targetProperty":"longitude"}, {}]
}]
}]
}],
navigationCallArticolo: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Articolo\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navigationCallExit: ["wm.NavigationCall", {"operation":"gotoHomePage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoHomePageInputs"}, {}]
}],
navigationCallProvvigioni: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Commissions\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navigationCallTours: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Tours\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navigationCallConfig: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Configurazione\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navigationCallMovimenti: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Coming\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navigationCallListe: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Liste\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navigationCallVendite: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Vendite\"","targetProperty":"pageName"}, {}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {"onShow":"layoutBox1Show"}, {
panel2: ["wm.Panel", {"height":"200px","horizontalAlign":"center","verticalAlign":"top","width":"100%"}, {}, {
pictureLogo: ["wm.Picture", {"height":"220px","imageList":"imageList1","source":"resources/images/logos/logo3.png","width":"300px"}, {"onLongTouch":"navigationCallVendite"}]
}],
layers: ["wm.Layers", {}, {}, {
layerMagazzino: ["wm.Layer", {"borderColor":"","caption":"Magazzino","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
panel3: ["wm.Panel", {"enableTouchHeight":true,"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
buttonProduct1: ["wm.Button", {"_classes":{"domNode":["MenuButton"]},"border":"0","caption":"Prodotti","desktopHeight":"100px","height":"100px","imageIndex":15,"imageList":"imageList1","mobileHeight":"100px","styles":{"backgroundColor":"#ffffff","color":"#0c0303"}}, {"onclick":"navigationCallArticolo"}],
buttonListe: ["wm.Button", {"_classes":{"domNode":["MenuButton"]},"border":"0","caption":"ListeArticoli","desktopHeight":"100px","height":"100px","imageIndex":14,"imageList":"imageList1","mobileHeight":"100px","styles":{"backgroundColor":"#ffffff","color":"#0c0303"}}, {"onclick":"navigationCallListe"}],
buttonMovimenti: ["wm.Button", {"_classes":{"domNode":["MenuButton"]},"border":"0","caption":"Movimenti","desktopHeight":"100px","height":"100px","imageIndex":1,"imageList":"imageList1","mobileHeight":"100px","styles":{"backgroundColor":"#ffffff","color":"#0c0303"}}, {"onclick":"navigationCallMovimenti"}]
}],
panel5: ["wm.Panel", {"enableTouchHeight":true,"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
buttonUbicazioni: ["wm.Button", {"_classes":{"domNode":["MenuButton"]},"border":"0","caption":"Ubicazioni","desktopHeight":"100px","height":"100px","imageIndex":8,"imageList":"imageList1","mobileHeight":"100px","styles":{"backgroundColor":"#ffffff","color":"#0c0303"}}, {"onclick":"navigationCallMovimenti"}],
buttonProfilo1: ["wm.Button", {"_classes":{"domNode":["MenuButton"]},"border":"0","caption":"Configura","desktopHeight":"100px","height":"100px","imageIndex":13,"imageList":"imageList1","mobileHeight":"100px","styles":{"backgroundColor":"#ffffff","color":"#0c0303"}}, {"onclick":"navigationCallConfig"}],
buttonUscita1: ["wm.Button", {"_classes":{"domNode":["MenuButton"]},"border":"0","caption":"Uscita","desktopHeight":"100px","height":"100px","imageIndex":2,"imageList":"imageList1","mobileHeight":"100px","styles":{"backgroundColor":"#ffffff","color":"#0c0303"}}, {"onclick":"app.confirmExit"}]
}]
}],
layerClerk: ["wm.Layer", {"borderColor":"","caption":"Clerk","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"enableTouchHeight":true,"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
buttonTours: ["wm.Button", {"_classes":{"domNode":["MenuButton"]},"border":"0","caption":"Tours","desktopHeight":"100px","height":"100px","imageIndex":9,"imageList":"imageList1","mobileHeight":"100px","styles":{"backgroundColor":"#ffffff","color":"#0c0303"}}, {"onclick":"navigationCallTours"}],
buttonProduct: ["wm.Button", {"_classes":{"domNode":["MenuButton"]},"border":"0","caption":"Product","desktopHeight":"100px","height":"100px","imageIndex":15,"imageList":"imageList1","mobileHeight":"100px","styles":{"backgroundColor":"#ffffff","color":"#0c0303"}}, {"onclick":"navigationCallArticolo"}],
buttonVendite: ["wm.Button", {"_classes":{"domNode":["MenuButton"]},"border":"0","caption":"Sales","desktopHeight":"100px","height":"100px","imageIndex":14,"imageList":"imageList1","mobileHeight":"100px","styles":{"backgroundColor":"#ffffff","color":"#0c0303"}}, {"onclick":"navigationCallVendite"}]
}],
panel4: ["wm.Panel", {"enableTouchHeight":true,"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
buttonProvvigioni: ["wm.Button", {"_classes":{"domNode":["MenuButton"]},"border":"0","caption":"Commissions","desktopHeight":"100px","height":"100px","imageIndex":11,"imageList":"imageList1","mobileHeight":"100px","styles":{"backgroundColor":"#ffffff","color":"#0c0303"}}, {"onclick":"navigationCallProvvigioni"}],
buttonProfilo: ["wm.Button", {"_classes":{"domNode":["MenuButton"]},"border":"0","caption":"Settings","desktopHeight":"100px","height":"100px","imageIndex":13,"imageList":"imageList1","mobileHeight":"100px","styles":{"backgroundColor":"#ffffff","color":"#0c0303"}}, {"onclick":"navigationCallConfig"}],
buttonUscita: ["wm.Button", {"_classes":{"domNode":["MenuButton"]},"border":"0","caption":"ExitApp","desktopHeight":"100px","height":"100px","imageIndex":2,"imageList":"imageList1","mobileHeight":"100px","styles":{"backgroundColor":"#ffffff","color":"#0c0303"}}, {"onclick":"app.confirmExit"}]
}]
}]
}],
labelRelease: ["wm.Label", {"_classes":{"domNode":["smallLabel"]},"align":"center","caption":"","height":"16px","padding":"4","styles":{},"width":"100200%"}, {}],
panelFooter: ["wm.Panel", {"height":"22px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
label3: ["wm.Label", {"_classes":{"domNode":["smallLabel"]},"align":"center","height":"100%","padding":"4","styles":{},"width":"100%"}, {"onclick":"label3Click"}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":"${app.serviceApp.sessionName} != \"\"","targetProperty":"showing"}, {}],
wire: ["wm.Wire", {"expression":"\"User: \" + ${app.serviceApp.userName} + \" Session: \" + ${app.serviceApp.sessionName}","targetProperty":"caption"}, {}]
}]
}]
}]
}]
};

Menu.prototype._cssText = '';
Menu.prototype._htmlText = '';