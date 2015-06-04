Commissions.widgets = {
	serviceVarProvvigioni: ["wm.ServiceVariable", {"operation":"agenteProvvigioni","service":"xhrService"}, {}, {
		input: ["wm.ServiceInput", {"type":"agenteProvvigioniInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"app.serviceApp.sessionName","targetProperty":"JXSESSNAME"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"date1.dataValue","targetProperty":"da_data"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"date2.dataValue","targetProperty":"a_data"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"app.varConfig.server","targetProperty":"server"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"center","styles":{},"verticalAlign":"top"}, {}, {
		panelHeader: ["wm.Panel", {"border":"1","borderColor":"#2780e3","desktopHeight":"50px","enableTouchHeight":true,"height":"50px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"50px","styles":{"backgroundColor":"#2780e3","color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
			buttonMenu: ["wm.Button", {"_classes":{"domNode":["buttonMenu"]},"border":"0","borderColor":"","caption":"Menu","desktopHeight":"100px","height":"50px","imageIndex":0,"imageList":"app.cosmoBasic","mobileHeight":"50px","styles":{}}, {"onclick":"app.navigationCallMenu"}],
			labelTitolo: ["wm.Label", {"_classes":{"domNode":["labelTitolo"]},"align":"left","borderColor":"","caption":"Commissions","height":"100%","margin":"0,6,0,0","padding":"4","styles":{"textAlign":"right"},"width":"100%"}, {}]
		}],
		fancyPanel1: ["wm.FancyPanel", {"height":"165px","innerHorizontalAlign":"center","title":"Filters"}, {}, {
			date1: ["wm.Date", {"border":"0","caption":"From date","dataValue":undefined,"desktopHeight":"35px","displayValue":"","height":"36px","width":"90%"}, {}],
			date2: ["wm.Date", {"border":"0","caption":"To date","dataValue":undefined,"desktopHeight":"35px","displayValue":"","height":"36px","width":"90%"}, {}],
			button1: ["wm.Button", {"border":"0","caption":"Refresh","height":"40px","width":"80%"}, {"onclick":"serviceVarProvvigioni"}]
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