Configurazione.widgets = {
	layoutBox1: ["wm.Layout", {"horizontalAlign":"center","styles":{},"verticalAlign":"top"}, {}, {
		panelHeader: ["wm.Panel", {"border":"1","borderColor":"#2780e3","desktopHeight":"50px","enableTouchHeight":true,"height":"50px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"50px","styles":{"backgroundColor":"#2780e3","color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
			labelTitolo: ["wm.Label", {"_classes":{"domNode":["labelTitolo"]},"align":"left","borderColor":"","caption":"Settings","height":"100%","margin":"0,6,0,0","padding":"4","styles":{},"width":"100%"}, {}],
			buttonMenu: ["wm.Button", {"_classes":{"domNode":["buttonMenu"]},"border":"0","borderColor":"","caption":"Menu","desktopHeight":"100px","height":"50px","imageIndex":0,"imageList":"app.cosmoBasic","mobileHeight":"50px","styles":{}}, {"onclick":"app.navigationCallMenu"}]
		}],
		dataForm1: ["wm.DataForm", {"desktopHeight":"146px","height":"150px","isCompositeKey":false,"mobileHeight":"150px","type":"Configurazione"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"app.varConfig","targetProperty":"dataSet"}, {}]
			}],
			serverEditor1: ["wm.Text", {"caption":"Server","captionSize":"120px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"server","height":"36px","required":undefined,"width":"100%"}, {}],
			dbEditor1: ["wm.Text", {"caption":"Db","captionSize":"120px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"db","height":"36px","required":undefined,"width":"100%"}, {}],
			userEditor1: ["wm.Text", {"caption":"User","captionSize":"120px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"user","height":"36px","required":undefined,"width":"100%"}, {}],
			passwordEditor1: ["wm.Text", {"caption":"Password","captionSize":"120px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"password","height":"36px","password":true,"required":undefined,"width":"100%"}, {}]
		}],
		buttonSalva: ["wm.Button", {"border":"1","caption":"Salva","height":"40px","width":"80px"}, {"onclick":"buttonSalvaClick"}]
	}]
}