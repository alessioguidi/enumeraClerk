dojo.declare("Login", wm.Page, {
start: function() {
},
"preferredDevice": "phone",
buttonLoginClick: function(inSender) {
if (this.textUser.getDataValue() != null){
app.serviceApp.update();
}
},
_end: 0
});

Login.widgets = {
navigationCallSettings: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Configurazione\"","targetProperty":"pageName"}, {}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"center","verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"enableTouchHeight":true,"height":"100%","horizontalAlign":"center","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
textUser: ["wm.Text", {"caption":"User","desktopHeight":"35px","displayValue":"root","height":"36px","required":true,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.varConfig.user","targetProperty":"dataValue"}, {}]
}]
}],
textPassword: ["wm.Text", {"caption":"Password","desktopHeight":"35px","displayValue":"alta@2015","height":"36px","password":true,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.varConfig.password","targetProperty":"dataValue"}, {}]
}]
}],
buttonLogin: ["wm.Button", {"border":"0","caption":"Enter","height":"40px","width":"80px"}, {"onclick":"buttonLoginClick"}],
spacer1: ["wm.Spacer", {"height":"48px","styles":{},"width":"96px"}, {}],
panel2: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
label1: ["wm.Label", {"align":"center","caption":"Settings","padding":"4","styles":{"fontSize":"10px","textDecoration":"underline"},"width":"100%"}, {"onclick":"navigationCallSettings"}]
}]
}]
}]
};

Login.prototype._cssText = '';
Login.prototype._htmlText = '';