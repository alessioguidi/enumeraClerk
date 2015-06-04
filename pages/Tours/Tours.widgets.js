Tours.widgets = {
	serviceVarTours: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"tour_del_giorno","service":"xhrService"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"dojoGrid1","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"tour_del_giornoInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"app.serviceApp.sessionName","targetProperty":"JXSESSNAME"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"app.varConfig.server","targetProperty":"server"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		panelHeader: ["wm.Panel", {"border":"1","borderColor":"#2780e3","desktopHeight":"50px","enableTouchHeight":true,"height":"50px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"50px","styles":{"backgroundColor":"#2780e3","color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
			buttonMenu: ["wm.Button", {"_classes":{"domNode":["buttonMenu"]},"border":"0","borderColor":"","caption":"Menu","desktopHeight":"100px","height":"50px","imageIndex":0,"imageList":"app.cosmoBasic","mobileHeight":"50px","styles":{}}, {"onclick":"app.navigationCallMenu"}],
			labelTitolo: ["wm.Label", {"_classes":{"domNode":["labelTitolo"]},"align":"left","borderColor":"","caption":"Today Tours","height":"100%","margin":"0,6,0,0","padding":"4","styles":{"textAlign":"right"},"width":"100%"}, {}]
		}],
		dojoGrid1: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"ROWID","title":"ROWID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PAGEID","title":"PAGEID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PAGECOUNT","title":"PAGECOUNT","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"O2ASPID","title":"O2ASPID","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"ID","title":"ID","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"TOUR_ID","title":"TOUR_ID","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"DATA_VISITA","title":"DATA_VISITA","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"ID_NEGOZIO","title":"ID_NEGOZIO","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"DESCRIZIONE","title":"DESCRIZIONE","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"AGENZIA","title":"AGENZIA","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"TOUR_LEADER","title":"TOUR_LEADER","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"NUM_PERSONE","title":"Members","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"NAZIONE","title":"NAZIONE","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"DESC_AGENZIA","title":"Tour Operator","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"DESC_TOURLEADER","title":"Tour Leader","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"DESCR_NAZIONE","title":"Country","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Members: \" + ${NUM_PERSONE} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Tour Operator: \" + ${DESC_AGENZIA}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Tour Leader: \" + ${DESC_TOURLEADER}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Country: \" + ${DESCR_NAZIONE}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"tour_del_giornoResponse","height":"100%","localizationStructure":{},"margin":"4","minDesktopHeight":60,"noHeader":true,"singleClickEdit":true}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"serviceVarTours","targetProperty":"dataSet"}, {}]
			}]
		}]
	}]
}