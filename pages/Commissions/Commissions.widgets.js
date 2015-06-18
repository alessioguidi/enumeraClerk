Commissions.widgets = {
	serviceVarProvvigioni: ["wm.ServiceVariable", {"operation":"agenteProvvigioni","service":"xhrService"}, {}, {
		input: ["wm.ServiceInput", {"type":"agenteProvvigioniInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"app.serviceApp.sessionName","targetProperty":"JXSESSNAME"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"app.varConfig.server","targetProperty":"server"}, {}]
			}]
		}]
	}],
	designableDialog1: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			panel3: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				label3: ["wm.Label", {"caption":"From date","padding":"4","width":"100px"}, {}],
				html3: ["wm.Html", {"height":"100%","html":"<input tabindex=\"0\" id=\"dadata\" type=\"date\">\n\n","minDesktopHeight":15,"styles":{},"width":"90%"}, {}]
			}]
		}],
		buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#dddddd","height":"15px"}, {}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"center","styles":{},"verticalAlign":"top"}, {}, {
		panelHeader: ["wm.Panel", {"border":"1","borderColor":"#2780e3","desktopHeight":"50px","enableTouchHeight":true,"height":"50px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"50px","styles":{"backgroundColor":"#2780e3","color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
			buttonMenu: ["wm.Button", {"_classes":{"domNode":["buttonMenu"]},"border":"0","borderColor":"","caption":"Menu","desktopHeight":"100px","height":"50px","imageIndex":0,"imageList":"app.cosmoBasic","mobileHeight":"50px","styles":{}}, {"onclick":"app.navigationCallMenu"}],
			labelTitolo: ["wm.Label", {"_classes":{"domNode":["labelTitolo"]},"align":"left","borderColor":"","caption":"Commissions","height":"100%","margin":"0,6,0,0","padding":"4","styles":{"textAlign":"right"},"width":"100%"}, {}]
		}],
		fancyPanel1: ["wm.FancyPanel", {"height":"160px","innerHorizontalAlign":"center","title":"Filters"}, {}, {
			spacer1: ["wm.Spacer", {"height":"15px","width":"96px"}, {}],
			panel1: ["wm.Panel", {"autoScroll":true,"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				label1: ["wm.Label", {"caption":"From date","height":"30px","padding":"4","width":"100px"}, {}],
				html4: ["wm.Html", {"height":"30px","html":"<input id=\"dadata\" type=\"date\">\n","minDesktopHeight":15,"styles":{},"width":"90%"}, {}]
			}],
			panel2: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				label2: ["wm.Label", {"caption":"To date","height":"30px","padding":"4","width":"100px"}, {}],
				html2: ["wm.Html", {"height":"30px","html":"<input id=\"adata\" type=\"date\">\n","minDesktopHeight":15,"styles":{},"width":"90%"}, {}]
			}],
			button1: ["wm.Button", {"border":"0","caption":"Refresh","height":"40px","width":"80%"}, {"onclick":"button1Click"}]
		}],
		dataForm1: ["wm.DataForm", {"desktopHeight":"181px","fitToContentHeight":true,"height":"186px","isCompositeKey":false,"mobileHeight":"186px","readonly":true,"styles":{},"type":"agenteProvvigioniResponse","width":"98%"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"serviceVarProvvigioni","targetProperty":"dataSet"}, {}]
			}],
			COD_AGENTEEditor1: ["wm.Text", {"caption":"Code","captionAlign":"left","captionSize":"120px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"COD_AGENTE","height":"36px","readonly":true,"required":undefined,"width":"100%"}, {}],
			DESC_AGENTEEditor1: ["wm.Text", {"caption":"Name","captionAlign":"left","captionSize":"120px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"DESC_AGENTE","height":"36px","readonly":true,"required":undefined,"width":"100%"}, {}],
			MATURATOEditor1: ["wm.Text", {"caption":"Commissions","captionAlign":"left","captionSize":"120px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"MATURATO","height":"36px","readonly":true,"required":undefined,"styles":{},"width":"100%"}, {}],
			LIQUIDATOEditor1: ["wm.Text", {"caption":"Payed","captionAlign":"left","captionSize":"120px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"LIQUIDATO","height":"36px","readonly":true,"required":undefined,"styles":{},"width":"100%"}, {}],
			SALDOEditor1: ["wm.Text", {"caption":"Balance","captionAlign":"left","captionSize":"120px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"SALDO","formatter":undefined,"height":"36px","readonly":true,"required":undefined,"styles":{},"width":"100%"}, {}]
		}]
	}]
}