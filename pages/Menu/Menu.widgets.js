Menu.widgets = {
	imageList1: ["wm.ImageList", {"colCount":16,"height":60,"iconCount":16,"url":"resources/images/imagelists/menu_60.png","width":60}, {}],
	serviceCountNewDeals: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"newDealsCount","service":"xhrService"}, {"onSuccess":"serviceCountNewDealsSuccess"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"html1","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"newDealsCountInputs"}, {}, {
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
	navigationCallVendite: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Liste\"","targetProperty":"pageName"}, {}]
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
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
		panel2: ["wm.Panel", {"height":"200px","horizontalAlign":"center","verticalAlign":"top","width":"100%"}, {}, {
			pictureLogo: ["wm.Picture", {"height":"220px","imageList":"imageList1","source":"resources/images/logos/logo3.png","width":"300px"}, {}]
		}],
		panel1: ["wm.Panel", {"enableTouchHeight":true,"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
			buttonTours: ["wm.Button", {"_classes":{"domNode":["MenuButton"]},"border":"0","caption":"Tours","desktopHeight":"100px","height":"100px","imageIndex":9,"imageList":"imageList1","mobileHeight":"100px","styles":{"backgroundColor":"#ffffff","color":"#0c0303"}}, {"onclick":"navigationCallTours"}],
			buttonProduct: ["wm.Button", {"_classes":{"domNode":["MenuButton"]},"border":"0","caption":"Product","desktopHeight":"100px","height":"100px","imageIndex":15,"imageList":"imageList1","mobileHeight":"100px","styles":{"backgroundColor":"#ffffff","color":"#0c0303"}}, {"onclick":"navigationCallArticolo"}],
			buttonVendite: ["wm.Button", {"_classes":{"domNode":["MenuButton"]},"border":"0","caption":"Sales","desktopHeight":"100px","height":"100px","imageIndex":14,"imageList":"imageList1","mobileHeight":"100px","styles":{"backgroundColor":"#ffffff","color":"#0c0303"}}, {"onclick":"navigationCallVendite"}]
		}],
		panel4: ["wm.Panel", {"enableTouchHeight":true,"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
			buttonProvvigioni: ["wm.Button", {"_classes":{"domNode":["MenuButton"]},"border":"0","caption":"Commissions","desktopHeight":"100px","height":"100px","imageIndex":11,"imageList":"imageList1","mobileHeight":"100px","styles":{"backgroundColor":"#ffffff","color":"#0c0303"}}, {"onclick":"navigationCallProvvigioni"}],
			buttonProfilo: ["wm.Button", {"_classes":{"domNode":["MenuButton"]},"border":"0","caption":"Settings","desktopHeight":"100px","height":"100px","imageIndex":13,"imageList":"imageList1","mobileHeight":"100px","styles":{"backgroundColor":"#ffffff","color":"#0c0303"}}, {"onclick":"navigationCallConfig"}],
			buttonUscita: ["wm.Button", {"_classes":{"domNode":["MenuButton"]},"border":"0","caption":"ExitApp","desktopHeight":"100px","height":"100px","imageIndex":2,"imageList":"imageList1","mobileHeight":"100px","styles":{"backgroundColor":"#ffffff","color":"#0c0303"}}, {"onclick":"app.confirmExit"}]
		}],
		panelFooter: ["wm.Panel", {"height":"22px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			label3: ["wm.Label", {"align":"center","height":"100%","padding":"4","styles":{"fontSize":"9px"},"width":"100%"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"\"User: \" + ${app.serviceApp.userName} + \" Session: \" + ${app.serviceApp.sessionName}","targetProperty":"caption"}, {}],
					wire1: ["wm.Wire", {"expression":"${app.serviceApp.sessionName} != \"\"","targetProperty":"showing"}, {}]
				}]
			}]
		}]
	}]
}