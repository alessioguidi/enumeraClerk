Main.widgets = {
	navigationCall1: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Granting\"","targetProperty":"pageName"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}]
			}]
		}]
	}],
	openNuovoTs: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"NewTS\"","targetProperty":"pageName"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}]
			}]
		}]
	}],
	openElencoTS: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"ElencoTS\"","targetProperty":"pageName"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}]
			}]
		}]
	}],
	navigationCallArticolo: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Articolo\"","targetProperty":"pageName"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}]
			}]
		}]
	}],
	navigationCallListe: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Liste\"","targetProperty":"pageName"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}]
			}]
		}]
	}],
	navigationCallCommissions: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Commissions\"","targetProperty":"pageName"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}]
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
	timerSessionAlive: ["wm.Timer", {"autoStart":true,"delay":900000}, {"onTimerFire":"app.serviceVarSessionAlive"}],
	loginPage: ["wm.PageDialog", {"border":"2","height":"90%","hideControls":true,"pageName":"Login","title":"Login","width":"90%"}, {}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
		toggleButtonPanel1: ["wm.ToggleButtonPanel", {"horizontalAlign":"left","padding":"undefined","showing":false,"verticalAlign":"top"}, {}, {
			toggleButtonVendite: ["wm.ToggleButton", {"border":"0,1,0,0","borderColor":"#2087fc","captionDown":"Sales","captionUp":"Sales","height":"100%","margin":"0","width":"34%"}, {"onclick":"navigationCallListe"}],
			toggleButtonArticolo: ["wm.ToggleButton", {"border":"0,1,0,0","borderColor":"#2087fc","captionDown":"Product","captionUp":"Product","height":"100%","margin":"0","width":"33%"}, {"onclick":"navigationCallArticolo"}],
			toggleButtonProvvigioni: ["wm.ToggleButton", {"border":"0","borderColor":"#2087fc","captionDown":"Commissions","captionUp":"Commissions","height":"100%","margin":"0","width":"33%"}, {"onclick":"navigationCallCommissions"}]
		}],
		pageContainer1: ["wm.PageContainer", {"deferLoad":true,"pageName":"Menu","styles":{},"subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
	}]
}