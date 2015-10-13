Configurazione.widgets = {
	varPossibiliMenu: ["wm.Variable", {"isList":true,"json":"[{\"dataValue\":\"MenuMagazzino\"},{\"dataValue\":\"MenuClerk\"}]","type":"StringData"}, {}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"center","styles":{},"verticalAlign":"top"}, {}, {
		panelHeader: ["wm.Panel", {"border":"1","borderColor":"#2780e3","desktopHeight":"50px","enableTouchHeight":true,"height":"50px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"50px","styles":{"backgroundColor":"#2780e3","color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
			labelTitolo: ["wm.Label", {"_classes":{"domNode":["labelTitolo"]},"align":"left","borderColor":"","caption":"Settings","height":"100%","margin":"0,6,0,0","padding":"4","styles":{},"width":"100%"}, {}],
			buttonMenu: ["wm.Button", {"_classes":{"domNode":["buttonMenu"]},"border":"0","borderColor":"","caption":"Menu","height":"100%","imageIndex":0,"imageList":"app.cosmoBasic","styles":{}}, {"onclick":"app.navigationCallMenu"}]
		}],
		dataForm1: ["wm.DataForm", {"desktopHeight":"146px","height":"186px","isCompositeKey":false,"mobileHeight":"186px","type":"Configurazione"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"app.varConfig","targetProperty":"dataSet"}, {}]
			}],
			serverEditor1: ["wm.Text", {"caption":"Server","captionSize":"120px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"server","height":"36px","required":undefined,"width":"100%"}, {}],
			dbEditor1: ["wm.Text", {"caption":"Db","captionSize":"120px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"db","height":"36px","required":undefined,"width":"100%"}, {}],
			userEditor1: ["wm.Text", {"caption":"User","captionSize":"120px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"user","height":"36px","required":undefined,"width":"100%"}, {}],
			passwordEditor1: ["wm.Text", {"caption":"Password","captionSize":"120px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"password","height":"36px","password":true,"required":undefined,"width":"100%"}, {}],
			text1: ["wm.Text", {"caption":"Menu","captionSize":"120px","desktopHeight":"36px","emptyValue":"emptyString","formField":"Menu","height":"36px","width":"100%"}, {}]
		}],
		buttonSalva: ["wm.Button", {"border":"1","caption":"Salva","height":"40px","width":"80px"}, {"onclick":"buttonSalvaClick"}]
	}]
}