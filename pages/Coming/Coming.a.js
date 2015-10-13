dojo.declare("Coming", wm.Page, {
start: function() {
},
"preferredDevice": "phone",
_end: 0
});

Coming.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"center","verticalAlign":"top"}, {}, {
panelHeader: ["wm.Panel", {"border":"1","borderColor":"#2780e3","desktopHeight":"50px","enableTouchHeight":true,"height":"50px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"50px","styles":{"backgroundColor":"#2780e3","color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
labelTitolo: ["wm.Label", {"_classes":{"domNode":["labelTitolo"]},"align":"left","borderColor":"","caption":"Coming soon","height":"100%","margin":"0,6,0,0","padding":"4","styles":{},"width":"100%"}, {}],
buttonMenu: ["wm.Button", {"_classes":{"domNode":["buttonMenu"]},"border":"0","borderColor":"","caption":"Menu","height":"100%","imageIndex":0,"imageList":"app.cosmoBasic","styles":{}}, {"onclick":"app.navigationCallMenu"}]
}],
picture1: ["wm.Picture", {"aspect":"v","height":"200px","source":"resources/images/sfondi/coming.png","width":"200px"}, {}]
}]
};

Coming.prototype._cssText = '';
Coming.prototype._htmlText = '';