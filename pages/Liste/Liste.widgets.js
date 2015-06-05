Liste.widgets = {
	serviceVarNuovaVendita: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"nuovaVendita","service":"xhrService"}, {"onResult":"notificationCall1","onResult1":"serviceVarListe","onResult2":"layerRicerca"}, {
		input: ["wm.ServiceInput", {"type":"nuovaVenditaInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"app.serviceApp.sessionName","targetProperty":"JXSESSNAME"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"gridClienti.selectedItem.ID_TESSERA","targetProperty":"tour_member"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"gridClienti.selectedItem.ID_TOUR","targetProperty":"tour_id"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"app.varConfig.server","targetProperty":"server"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"app.varConfig.server","targetProperty":"server"}, {}]
		}]
	}],
	serviceVarMembers: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"tour_members","service":"xhrService"}, {}, {
		input: ["wm.ServiceInput", {"type":"tour_membersInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"app.serviceApp.sessionName","targetProperty":"JXSESSNAME"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"textNome.dataValue","targetProperty":"nominativo"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"textDocumento.dataValue","targetProperty":"documento"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"app.varConfig.server","targetProperty":"server"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"gridClienti","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	serviceVarListe: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"liste","service":"xhrService","startUpdate":true}, {"onResult":"layerRicerca"}, {
		input: ["wm.ServiceInput", {"type":"listeInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"app.serviceApp.sessionName","targetProperty":"JXSESSNAME"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"app.serviceApp.userName","targetProperty":"operatore"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"app.varConfig.server","targetProperty":"server"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"listaVendite","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	notificationCall1: ["wm.NotificationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"alertInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"serviceVarNuovaVendita.message","targetProperty":"text"}, {}]
			}]
		}]
	}],
	serviceVarElimina: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"eliminaVendita","service":"xhrService"}, {"onResult":"serviceVarListe"}, {
		input: ["wm.ServiceInput", {"type":"eliminaVenditaInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"app.serviceApp.sessionName","targetProperty":"JXSESSNAME"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"listaVendite.selectedItem.SERIE_PRELIEVO","targetProperty":"serie_lista"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"listaVendite.selectedItem.IDPRELIEVO","targetProperty":"id_lista"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"app.varConfig.server","targetProperty":"server"}, {}]
			}]
		}]
	}],
	notificationCall2: ["wm.NotificationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"alertInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"serviceVarElimina.message","targetProperty":"text"}, {}]
			}]
		}]
	}],
	serviceVarNuovaRiga: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"nuovaRigaVendita","service":"xhrService"}, {"onInflightBacklogComplete":"serviceVarNuovaRigaInflightBacklogComplete","onResult":"serviceVarNuovaRigaResult","onResult1":"serviceVarRigheLista"}, {
		input: ["wm.ServiceInput", {"type":"nuovaRigaVenditaInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"app.serviceApp.sessionName","targetProperty":"JXSESSNAME"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"listaVendite.selectedItem.SERIE_PRELIEVO","targetProperty":"serie_lista"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"listaVendite.selectedItem.IDPRELIEVO","targetProperty":"id_lista"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"textBarcode.dataValue","targetProperty":"barcode"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"app.varConfig.server","targetProperty":"server"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"app.varConfig.server","targetProperty":"server"}, {}]
		}]
	}],
	serviceVarRigheLista: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"righeLista","service":"xhrService"}, {"onSuccess":"layerDettaglio","onSuccess1":"serviceVarRigheListaSuccess1"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"gridRighe","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"righeListaInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"app.serviceApp.sessionName","targetProperty":"JXSESSNAME"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"listaVendite.selectedItem.SERIE_PRELIEVO","targetProperty":"serie_prelievo"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"listaVendite.selectedItem.IDPRELIEVO","targetProperty":"idprelievo"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"app.varConfig.server","targetProperty":"server"}, {}]
			}]
		}]
	}],
	serviceVarEliminaRiga: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"eliminaRigaVendita","service":"xhrService"}, {"onSuccess":"serviceVarRigheLista"}, {
		input: ["wm.ServiceInput", {"type":"eliminaRigaVenditaInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"app.serviceApp.sessionName","targetProperty":"JXSESSNAME"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"gridRighe.selectedItem.SERIE_PRELIEVO","targetProperty":"serie_lista"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"gridRighe.selectedItem.IDPRELIEVO","targetProperty":"id_lista"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"gridRighe.selectedItem.IDRIGA","targetProperty":"id_riga_lista"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"app.varConfig.server","targetProperty":"server"}, {}]
			}]
		}]
	}],
	serviceVarCheckout: ["wm.ServiceVariable", {"operation":"updateStatoLista","service":"xhrService"}, {"onSuccess":"serviceVarListe","onSuccess1":"layerRicerca"}, {
		input: ["wm.ServiceInput", {"type":"updateStatoListaInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"app.serviceApp.sessionName","targetProperty":"JXSESSNAME"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"listaVendite.selectedItem.SERIE_PRELIEVO","targetProperty":"serie_prelievo"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"listaVendite.selectedItem.IDPRELIEVO","targetProperty":"idprelievo"}, {}],
				wire3: ["wm.Wire", {"expression":"5","targetProperty":"stato_lista"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"app.varConfig.server","targetProperty":"server"}, {}]
			}]
		}]
	}],
	notificationCallDelRiga: ["wm.NotificationCall", {"operation":"confirm"}, {"onOk":"serviceVarEliminaRiga"}, {
		input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Confirm delete line\"","targetProperty":"text"}, {}],
				wire1: ["wm.Wire", {"expression":"\"Yes\"","targetProperty":"OKButtonText"}, {}],
				wire2: ["wm.Wire", {"expression":"\"No\"","targetProperty":"CancelButtonText"}, {}]
			}]
		}]
	}],
	notificationCallCheckOut: ["wm.NotificationCall", {"operation":"confirm"}, {"onOk":"serviceVarCheckout"}, {
		input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Confirm check-out operation?\"","targetProperty":"text"}, {}]
			}]
		}]
	}],
	notificationDeleteLista: ["wm.NotificationCall", {"operation":"confirm"}, {"onOk":"serviceVarElimina"}, {
		input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Confirm delete operation?\"","targetProperty":"text"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
		panelHeader: ["wm.Panel", {"border":"1","borderColor":"#2780e3","desktopHeight":"50px","enableTouchHeight":true,"height":"50px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"50px","styles":{"backgroundColor":"#2780e3","color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
			buttonMenu: ["wm.Button", {"_classes":{"domNode":["buttonMenu"]},"border":"0","borderColor":"","caption":"Menu","desktopHeight":"100px","height":"50px","imageIndex":0,"imageList":"app.cosmoBasic","mobileHeight":"50px","styles":{}}, {"onclick":"app.navigationCallMenu"}],
			labelTitolo: ["wm.Label", {"_classes":{"domNode":["labelTitolo"]},"align":"left","borderColor":"","caption":"Sales","height":"100%","margin":"0,6,0,0","padding":"4","styles":{"textAlign":"right"},"width":"100%"}, {}]
		}],
		layers1: ["wm.Layers", {"defaultLayer":0,"transition":"fade"}, {}, {
			layerRicerca: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
				panel1: ["wm.Panel", {"desktopHeight":"30px","enableTouchHeight":true,"height":"40px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
					buttonNuovo: ["wm.Button", {"border":"0","caption":"New Sale","height":"100%","width":"100%"}, {"onclick":"layerNuovo"}]
				}],
				listaVendite: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"ROWID","title":"ROWID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PAGEID","title":"PAGEID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PAGECOUNT","title":"PAGECOUNT","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"O2ASPID","title":"O2ASPID","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"SERIE_PRELIEVO","title":"SERIE_PRELIEVO","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"IDPRELIEVO","title":"IDPRELIEVO","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"CODICE_PRELIEVO","title":"ID","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"CLIENTE_FATTURAZIONE","title":"CLIENTE_FATTURAZIONE","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"CLIENTE","title":"CLIENTE","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"DESTINATARIO","title":"DESTINATARIO","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"VETTORE","title":"VETTORE","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"DATA_LISTA","title":"Date","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"DATA_CONSEGNA","title":"DATA_CONSEGNA","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"OPERATORE","title":"OPERATORE","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"ID_DIPENDENTE","title":"ID_DIPENDENTE","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"STATO_LISTA","title":"STATO_LISTA","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"NOTE","title":"NOTE","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"NUMCOLLI","title":"NUMCOLLI","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"NUMLEGNI","title":"NUMLEGNI","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"NUMPEDANE","title":"NUMPEDANE","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"QTA_TOTALE","title":"QTA_TOTALE","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"VAL_TOTALE","title":"VAL_TOTALE","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"QTA_PRELEVATA","title":"QTA_PRELEVATA","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"VAL_PRELEVATO","title":"VAL_PRELEVATO","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"USER_CREAZIONE","title":"USER_CREAZIONE","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"DATA_CREAZIONE","title":"DATA_CREAZIONE","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"ORA_CREAZIONE","title":"ORA_CREAZIONE","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"USER_CONTABILIZZA","title":"USER_CONTABILIZZA","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"DATA_CONTABILIZZA","title":"DATA_CONTABILIZZA","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"NUMDOC","title":"NUMDOC","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"DATADOC","title":"DATADOC","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"UBICAZ_TRANSITO","title":"UBICAZ_TRANSITO","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"ID: \" + ${CODICE_PRELIEVO} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Date: \" + ${DATA_LISTA}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Tour Operator: \" + ${DESC_AGENZIA}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Tour Leader: \" + ${DESC_LEADER}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Name: \" + ${COGNOME}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Passport: \" + ${NUMERODOC}\n + \"</div>\"\n\n","isCustomField":true,"mobileColumn":true},
{"show":false,"field":"ID_TOUR","title":"ID_TOUR","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"ID_TESSERATO","title":"ID_TESSERATO","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"AGENZIA","title":"Tour Operator","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"TOUR_LEADER","title":"Tour Leader","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"DESC_AGENZIA","title":"Tour Operator","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"DESC_LEADER","title":"Tour Leader","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"COGNOME","title":"Name","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"NOME","title":"NOME","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"NUMERODOC","title":"Passport","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"deviceType":null,"dsType":"listeResponse","height":"100%","localizationStructure":{},"margin":"4","minDesktopHeight":60,"noHeader":true,"primaryKeyFields":["IDPRELIEVO"],"styles":{}}, {"onSelect":"serviceVarRigheLista"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"serviceVarListe","targetProperty":"dataSet"}, {}],
						wire1: ["wm.Wire", {"expression":"${serviceVarListe.count} > 0","targetProperty":"showing"}, {}]
					}]
				}]
			}],
			layerDettaglio: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {"onShow":"layerDettaglioShow"}, {
				fancyPanel1: ["wm.FancyPanel", {"height":"120px","labelHeight":"20","title":"Summary"}, {}, {
					label1: ["wm.Label", {"height":"22px","padding":"4","width":"100%"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":"${listaVendite.selectedItem.COGNOME} + \" \" +${listaVendite.selectedItem.DESC_AGENZIA} + \" \" +${listaVendite.selectedItem.DESC_LEADER}","targetProperty":"caption"}, {}]
						}]
					}],
					panel6: ["wm.Panel", {"height":"40px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
						buttonBack: ["wm.Button", {"_classes":{"domNode":["buttonBack"]},"border":"0","caption":"Back","height":"40px","styles":{}}, {"onclick":"buttonBackClick","onclick1":"layerRicerca"}],
						buttonDelete: ["wm.Button", {"_classes":{"domNode":["buttonDelete"]},"border":"0","caption":"Delete","height":"40px","styles":{}}, {"onclick":"notificationDeleteLista"}],
						buttonCheckout: ["wm.Button", {"border":"0","caption":"Checkout","height":"40px","styles":{}}, {"onclick":"notificationCallCheckOut"}]
					}],
					label2: ["wm.Label", {"align":"right","height":"22px","padding":"4","width":"100%"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire1: ["wm.Wire", {"expression":"!${serviceVarRigheLista.isEmpty}","targetProperty":"showing"}, {}],
							wire: ["wm.Wire", {"expression":"'Total qty: ' + parseInt(${serviceVarRigheLista.QTA_TOTALE}) + ' - Total amount: ' + parseFloat(${serviceVarRigheLista.VAL_TOTALE}).toFixed(2)","targetProperty":"caption"}, {}]
						}]
					}]
				}],
				gridRighe: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"","mobileColumn":false},
{"show":false,"field":"ROWID","title":"ROWID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PAGECOUNT","title":"PAGECOUNT","width":"80px","align":"right","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":false,"field":"PAGEID","title":"PAGEID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"O2ASPID","title":"O2ASPID","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"SERIE_PRELIEVO","title":"SERIE_PRELIEVO","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"IDPRELIEVO","title":"IDPRELIEVO","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"IDRIGA","title":"IDRIGA","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"CODART","title":"CODART","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"LOTTO","title":"LOTTO","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"MATRICOLA","title":"MATRICOLA","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"CODUDC","title":"CODUDC","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"COD_DEPOSITO","title":"COD_DEPOSITO","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"UBICAZIONE","title":"UBICAZIONE","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"UM","title":"UM","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"QTA","title":"Qty","width":"20px","align":"left","formatFunc":"","mobileColumn":true},
{"show":false,"field":"QTAPRELEVATA","title":"QTAPRELEVATA","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"DATAINS","title":"DATAINS","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"ORAINS","title":"ORAINS","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"SERIEDOC_ORI","title":"SERIEDOC_ORI","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"IDTESTA_ORI","title":"IDTESTA_ORI","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"IDRIGA_ORI","title":"IDRIGA_ORI","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"IDRIGA_IMP_ORI","title":"IDRIGA_IMP_ORI","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"SERIEDOC_GEN","title":"SERIEDOC_GEN","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"IDTESTA_GEN","title":"IDTESTA_GEN","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"IDRIGA_GEN","title":"IDRIGA_GEN","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"RIGA_EVASA","title":"RIGA_EVASA","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"FLG_SPEDIBILE","title":"FLG_SPEDIBILE","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"DATAMIN_SCADLOTTO","title":"DATAMIN_SCADLOTTO","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"DATAMAX_SCADLOTTO","title":"DATAMAX_SCADLOTTO","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"SERIE_GROUPAGE","title":"SERIE_GROUPAGE","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"IDTESTA_GROUPAGE","title":"IDTESTA_GROUPAGE","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"IDRIGA_GROUPAGE","title":"IDRIGA_GROUPAGE","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"DESCRIZIONE","title":"Description","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":true},
{"show":false,"field":"PREZZO","title":"PREZZO","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"STR_SCONTI","title":"STR_SCONTI","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"SCONTOVALORE","title":"SCONTOVALORE","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"VAL_UNITARIO","title":"Amount","width":"62px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"TAGLIA","width":"20px","align":"left","formatFunc":"","editorProps":null,"mobileColumn":true},
{"show":true,"field":"VAL_TOTALE_RIGA","title":"€","width":"45px","align":"left","formatFunc":"","editorProps":null,"mobileColumn":true},
{"show":false,"field":"VAL_TOTALE_PREL","title":"VAL_TOTALE_PREL","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"NUOVO_RRP","title":"NUOVO_RRP","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"NOTE_RIGA","title":"NOTE_RIGA","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"QTA_TOTALE","title":"QTA_TOTALE","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"VAL_TOTALE","title":"VAL_TOTALE","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"buttonDelete","width":"30px","align":"left","formatFunc":"wm_button_formatter","formatProps":{"buttonclass":"buttonDelete"},"expression":"\"x\"","isCustomField":true,"cssClass":"\"buttonIngrid\"","mobileColumn":true},
{"show":false,"field":"QTA_ORI","title":"QTA_ORI","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"VAL_TOTALE_RIGA_ORI","title":"VAL_TOTALE_RIGA_ORI","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"NUM_DECIMALI","title":"NUM_DECIMALI","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"deviceType":null,"dsType":"righeListaResponse","height":"100%","localizationStructure":{},"margin":"4","minDesktopHeight":60,"selectFirstRow":true,"singleClickEdit":true,"styles":{"fontSize":"11px"}}, {"onGridButtonClick":"notificationCallDelRiga","onRowDeleted":"notificationCallDelRiga"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"serviceVarRigheLista","targetProperty":"dataSet"}, {}]
					}]
				}],
				panel3: ["wm.Panel", {"desktopHeight":"30px","enableTouchHeight":true,"height":"36px","horizontalAlign":"center","layoutKind":"left-to-right","mobileHeight":"36px","verticalAlign":"top","width":"100%"}, {}, {
					textBarcode: ["wm.Text", {"caption":"Barcode","captionAlign":"left","captionSize":"70px","dataValue":undefined,"desktopHeight":"35px","displayValue":"","height":"30px","mobileHeight":"30px","width":"90%"}, {"onchange":"textBarcodeChange"}]
				}]
			}],
			layerNuovo: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
				fancyPanel2: ["wm.FancyPanel", {"height":"160px","title":"Search customer"}, {}, {
					textNome: ["wm.Text", {"caption":"Name","dataValue":undefined,"desktopHeight":"35px","displayValue":"","height":"36px"}, {}],
					textDocumento: ["wm.Text", {"caption":"Document","dataValue":undefined,"desktopHeight":"35px","displayValue":"","height":"36px"}, {}],
					panel5: ["wm.Panel", {"height":"40px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						buttonReset: ["wm.Button", {"border":"0","caption":"Reset","height":"40px"}, {"onclick":"buttonResetClick"}],
						buttonRicerca: ["wm.Button", {"border":"0","caption":"Search","height":"40px"}, {"onclick":"serviceVarMembers"}]
					}]
				}],
				gridClienti: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRow'>\" +\n\"Tour Operator: \" + ${TOUROPERATOR}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Tour Leader: \" + ${TOURLEADER}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Name: \" + ${NOMINATIVO}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Passport: \" + ${DOCUMENTO}\n + \"</div>\"\n\n","isCustomField":true,"mobileColumn":true},
{"show":false,"field":"ROWID","title":"ROWID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PAGEID","title":"PAGEID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PAGECOUNT","title":"PAGECOUNT","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"ID_SESSION","title":"ID_SESSION","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PROGNAME","title":"PROGNAME","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"ID_RIGA_ORD","title":"ID_RIGA_ORD","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"NOMINATIVO","title":"Name","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"DOCUMENTO","title":"Document","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"TOUROPERATOR","title":"Tour Operator","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"TOURLEADER","title":"Tour Leader","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"ID_TESSERA","title":"ID_TESSERA","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"ID_OPERATOR","title":"ID_OPERATOR","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"ID_LEADER","title":"ID_LEADER","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"ID_TOUR_POINT","title":"ID_TOUR_POINT","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"ID_TOUR","title":"ID_TOUR","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"deviceType":null,"dsType":"tour_membersResponse","height":"100%","margin":"4","minDesktopHeight":60,"noHeader":true,"singleClickEdit":true}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"serviceVarMembers","targetProperty":"dataSet"}, {}]
					}]
				}],
				panel4: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					buttonSelect: ["wm.Button", {"border":"0","caption":"Select customer","height":"40px","width":"100%"}, {"onclick":"serviceVarNuovaVendita"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"gridClienti.emptySelection","targetProperty":"disabled"}, {}]
						}]
					}]
				}]
			}]
		}]
	}]
}