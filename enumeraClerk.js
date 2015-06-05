dojo.declare("enumeraClerk", wm.Application, {
	"disableDirtyEditorTracking": false, 
	"eventDelay": 0, 
	"hintDelay": 1500, 
	"i18n": false, 
	"isSecurityEnabled": false, 
	"main": "Main", 
	"manageHistory": true, 
	"manageURL": false, 
	"name": "", 
	"phoneGapLoginPage": "Login", 
	"phoneMain": "", 
	"projectSubVersion": 25, 
	"projectVersion": 1, 
	"sessionExpirationHandler": "navigateToLogin", 
	"studioVersion": "6.7.0.RELEASE", 
	"tabletMain": "", 
	"theme": "common.themes.wm_enumera", 
	"toastPosition": "cc", 
	"touchToClickDelay": 500, 
	"touchToRightClickDelay": 1500,
	"widgets": {
		cosmoBasic: ["wm.ImageList", {"colCount":65,"height":40,"iconCount":65,"url":"resources/images/imagelists/cosmo_basic.png","width":40}, {}], 
		cosmoDocuments: ["wm.ImageList", {"colCount":77,"height":40,"iconCount":77,"url":"resources/images/imagelists/cosmo_documents.png","width":40}, {}], 
		cosmoMobile: ["wm.ImageList", {"colCount":55,"height":40,"iconCount":55,"url":"resources/images/imagelists/cosmo_mobile.png","width":40}, {}], 
		silkIconList: ["wm.ImageList", {"colCount":39,"height":16,"iconCount":90,"url":"lib/images/silkIcons/silk.png","width":16}, {}], 
		"granting.usersListResponse": ["wm.TypeDefinition", {}, {}, {
			O2USER: ["wm.TypeDefinitionField", {"fieldName":"O2USER"}, {}],
			O2PASSWORD: ["wm.TypeDefinitionField", {"fieldName":"O2PASSWORD"}, {}],
			AREA: ["wm.TypeDefinitionField", {"fieldName":"AREA"}, {}]
		}], 
		Configurazione: ["wm.TypeDefinition", {}, {}, {
			server: ["wm.TypeDefinitionField", {"fieldName":"server"}, {}],
			db: ["wm.TypeDefinitionField", {"fieldName":"db"}, {}],
			user: ["wm.TypeDefinitionField", {"fieldName":"user"}, {}],
			password: ["wm.TypeDefinitionField", {"fieldName":"password"}, {}]
		}], 
		agenteProvvigioniResponse: ["wm.TypeDefinition", {}, {}, {
			ROWID: ["wm.TypeDefinitionField", {"fieldName":"ROWID","fieldType":"Number"}, {}],
			PAGEID: ["wm.TypeDefinitionField", {"fieldName":"PAGEID","fieldType":"Number"}, {}],
			PAGECOUNT: ["wm.TypeDefinitionField", {"fieldName":"PAGECOUNT","fieldType":"Number"}, {}],
			O2ASPID: ["wm.TypeDefinitionField", {"fieldName":"O2ASPID"}, {}],
			COD_AGENTE: ["wm.TypeDefinitionField", {"fieldName":"COD_AGENTE"}, {}],
			DESC_AGENTE: ["wm.TypeDefinitionField", {"fieldName":"DESC_AGENTE"}, {}],
			MATURATO: ["wm.TypeDefinitionField", {"fieldName":"MATURATO"}, {}],
			LIQUIDATO: ["wm.TypeDefinitionField", {"fieldName":"LIQUIDATO"}, {}],
			SALDO: ["wm.TypeDefinitionField", {"fieldName":"SALDO"}, {}]
		}], 
		articoloResponse: ["wm.TypeDefinition", {}, {}, {
			siteCode: ["wm.TypeDefinitionField", {"fieldName":"siteCode"}, {}],
			siteDescription: ["wm.TypeDefinitionField", {"fieldName":"siteDescription"}, {}],
			sku: ["wm.TypeDefinitionField", {"fieldName":"sku"}, {}],
			parent_sku: ["wm.TypeDefinitionField", {"fieldName":"parent_sku"}, {}],
			description: ["wm.TypeDefinitionField", {"fieldName":"description"}, {}],
			size: ["wm.TypeDefinitionField", {"fieldName":"size"}, {}],
			um: ["wm.TypeDefinitionField", {"fieldName":"um"}, {}],
			has_variants: ["wm.TypeDefinitionField", {"fieldName":"has_variants","fieldType":"Boolean"}, {}],
			has_sizes: ["wm.TypeDefinitionField", {"fieldName":"has_sizes","fieldType":"Boolean"}, {}],
			taxRate: ["wm.TypeDefinitionField", {"fieldName":"taxRate","fieldType":"Number"}, {}],
			barcode: ["wm.TypeDefinitionField", {"fieldName":"barcode"}, {}],
			mainSupplier: ["wm.TypeDefinitionField", {"fieldName":"mainSupplier"}, {}],
			supplierProductCode: ["wm.TypeDefinitionField", {"fieldName":"supplierProductCode"}, {}],
			salePrice: ["wm.TypeDefinitionField", {"fieldName":"salePrice","fieldType":"Number"}, {}],
			lastCost: ["wm.TypeDefinitionField", {"fieldName":"lastCost","fieldType":"Number"}, {}],
			avgCost: ["wm.TypeDefinitionField", {"fieldName":"avgCost","fieldType":"Number"}, {}],
			margin: ["wm.TypeDefinitionField", {"fieldName":"margin","fieldType":"Number"}, {}],
			stockQty: ["wm.TypeDefinitionField", {"fieldName":"stockQty","fieldType":"Number"}, {}],
			availabilityQty: ["wm.TypeDefinitionField", {"fieldName":"availabilityQty","fieldType":"Number"}, {}],
			stockValue: ["wm.TypeDefinitionField", {"fieldName":"stockValue","fieldType":"Number"}, {}]
		}], 
		giacenza_altre_taglieResponse: ["wm.TypeDefinition", {}, {}, {
			ROWID: ["wm.TypeDefinitionField", {"fieldName":"ROWID","fieldType":"Number"}, {}],
			PAGEID: ["wm.TypeDefinitionField", {"fieldName":"PAGEID","fieldType":"Number"}, {}],
			PAGECOUNT: ["wm.TypeDefinitionField", {"fieldName":"PAGECOUNT","fieldType":"Number"}, {}],
			O2ASPID: ["wm.TypeDefinitionField", {"fieldName":"O2ASPID"}, {}],
			DEPOSITO: ["wm.TypeDefinitionField", {"fieldName":"DEPOSITO"}, {}],
			ARTICOLO: ["wm.TypeDefinitionField", {"fieldName":"ARTICOLO"}, {}],
			POSIZIONE: ["wm.TypeDefinitionField", {"fieldName":"POSIZIONE"}, {}],
			VARIANTE: ["wm.TypeDefinitionField", {"fieldName":"VARIANTE"}, {}],
			GIACENZA: ["wm.TypeDefinitionField", {"fieldName":"GIACENZA"}, {}]
		}], 
		jxResponse: ["wm.TypeDefinition", {}, {}, {
			status: ["wm.TypeDefinitionField", {"fieldName":"status"}, {}],
			errorCode: ["wm.TypeDefinitionField", {"fieldName":"errorCode"}, {}],
			message: ["wm.TypeDefinitionField", {"fieldName":"message"}, {}]
		}], 
		listeResponse: ["wm.TypeDefinition", {}, {}, {
			ROWID: ["wm.TypeDefinitionField", {"fieldName":"ROWID","fieldType":"Number"}, {}],
			PAGEID: ["wm.TypeDefinitionField", {"fieldName":"PAGEID","fieldType":"Number"}, {}],
			PAGECOUNT: ["wm.TypeDefinitionField", {"fieldName":"PAGECOUNT","fieldType":"Number"}, {}],
			O2ASPID: ["wm.TypeDefinitionField", {"fieldName":"O2ASPID"}, {}],
			SERIE_PRELIEVO: ["wm.TypeDefinitionField", {"fieldName":"SERIE_PRELIEVO"}, {}],
			IDPRELIEVO: ["wm.TypeDefinitionField", {"fieldName":"IDPRELIEVO"}, {}],
			CODICE_PRELIEVO: ["wm.TypeDefinitionField", {"fieldName":"CODICE_PRELIEVO"}, {}],
			CLIENTE_FATTURAZIONE: ["wm.TypeDefinitionField", {"fieldName":"CLIENTE_FATTURAZIONE"}, {}],
			CLIENTE: ["wm.TypeDefinitionField", {"fieldName":"CLIENTE"}, {}],
			DESTINATARIO: ["wm.TypeDefinitionField", {"fieldName":"DESTINATARIO"}, {}],
			VETTORE: ["wm.TypeDefinitionField", {"fieldName":"VETTORE"}, {}],
			DATA_LISTA: ["wm.TypeDefinitionField", {"fieldName":"DATA_LISTA"}, {}],
			DATA_CONSEGNA: ["wm.TypeDefinitionField", {"fieldName":"DATA_CONSEGNA"}, {}],
			OPERATORE: ["wm.TypeDefinitionField", {"fieldName":"OPERATORE"}, {}],
			ID_DIPENDENTE: ["wm.TypeDefinitionField", {"fieldName":"ID_DIPENDENTE"}, {}],
			STATO_LISTA: ["wm.TypeDefinitionField", {"fieldName":"STATO_LISTA"}, {}],
			NOTE: ["wm.TypeDefinitionField", {"fieldName":"NOTE"}, {}],
			NUMCOLLI: ["wm.TypeDefinitionField", {"fieldName":"NUMCOLLI"}, {}],
			NUMLEGNI: ["wm.TypeDefinitionField", {"fieldName":"NUMLEGNI"}, {}],
			NUMPEDANE: ["wm.TypeDefinitionField", {"fieldName":"NUMPEDANE"}, {}],
			QTA_TOTALE: ["wm.TypeDefinitionField", {"fieldName":"QTA_TOTALE"}, {}],
			VAL_TOTALE: ["wm.TypeDefinitionField", {"fieldName":"VAL_TOTALE"}, {}],
			QTA_PRELEVATA: ["wm.TypeDefinitionField", {"fieldName":"QTA_PRELEVATA"}, {}],
			VAL_PRELEVATO: ["wm.TypeDefinitionField", {"fieldName":"VAL_PRELEVATO"}, {}],
			USER_CREAZIONE: ["wm.TypeDefinitionField", {"fieldName":"USER_CREAZIONE"}, {}],
			DATA_CREAZIONE: ["wm.TypeDefinitionField", {"fieldName":"DATA_CREAZIONE"}, {}],
			ORA_CREAZIONE: ["wm.TypeDefinitionField", {"fieldName":"ORA_CREAZIONE"}, {}],
			USER_CONTABILIZZA: ["wm.TypeDefinitionField", {"fieldName":"USER_CONTABILIZZA"}, {}],
			DATA_CONTABILIZZA: ["wm.TypeDefinitionField", {"fieldName":"DATA_CONTABILIZZA"}, {}],
			NUMDOC: ["wm.TypeDefinitionField", {"fieldName":"NUMDOC"}, {}],
			DATADOC: ["wm.TypeDefinitionField", {"fieldName":"DATADOC"}, {}],
			UBICAZ_TRANSITO: ["wm.TypeDefinitionField", {"fieldName":"UBICAZ_TRANSITO"}, {}],
			ID_TOUR: ["wm.TypeDefinitionField", {"fieldName":"ID_TOUR"}, {}],
			ID_TESSERATO: ["wm.TypeDefinitionField", {"fieldName":"ID_TESSERATO"}, {}],
			AGENZIA: ["wm.TypeDefinitionField", {"fieldName":"AGENZIA"}, {}],
			TOUR_LEADER: ["wm.TypeDefinitionField", {"fieldName":"TOUR_LEADER"}, {}],
			DESC_AGENZIA: ["wm.TypeDefinitionField", {"fieldName":"DESC_AGENZIA"}, {}],
			DESC_LEADER: ["wm.TypeDefinitionField", {"fieldName":"DESC_LEADER"}, {}],
			COGNOME: ["wm.TypeDefinitionField", {"fieldName":"COGNOME"}, {}],
			NOME: ["wm.TypeDefinitionField", {"fieldName":"NOME"}, {}],
			NUMERODOC: ["wm.TypeDefinitionField", {"fieldName":"NUMERODOC"}, {}]
		}], 
		loginResponse: ["wm.TypeDefinition", {}, {}, {
			sessionName: ["wm.TypeDefinitionField", {"fieldName":"sessionName"}, {}],
			userName: ["wm.TypeDefinitionField", {"fieldName":"userName"}, {}],
			tokenStr: ["wm.TypeDefinitionField", {"fieldName":"tokenStr"}, {}],
			userArea: ["wm.TypeDefinitionField", {"fieldName":"userArea"}, {}],
			appName: ["wm.TypeDefinitionField", {"fieldName":"appName"}, {}],
			appTitle: ["wm.TypeDefinitionField", {"fieldName":"appTitle"}, {}],
			appCss: ["wm.TypeDefinitionField", {"fieldName":"appCss"}, {}]
		}], 
		righeListaResponse: ["wm.TypeDefinition", {}, {}, {
			ROWID: ["wm.TypeDefinitionField", {"fieldName":"ROWID","fieldType":"Number"}, {}],
			PAGEID: ["wm.TypeDefinitionField", {"fieldName":"PAGEID","fieldType":"Number"}, {}],
			PAGECOUNT: ["wm.TypeDefinitionField", {"fieldName":"PAGECOUNT","fieldType":"Number"}, {}],
			O2ASPID: ["wm.TypeDefinitionField", {"fieldName":"O2ASPID"}, {}],
			SERIE_PRELIEVO: ["wm.TypeDefinitionField", {"fieldName":"SERIE_PRELIEVO"}, {}],
			IDPRELIEVO: ["wm.TypeDefinitionField", {"fieldName":"IDPRELIEVO"}, {}],
			IDRIGA: ["wm.TypeDefinitionField", {"fieldName":"IDRIGA"}, {}],
			CODART: ["wm.TypeDefinitionField", {"fieldName":"CODART"}, {}],
			TAGLIA: ["wm.TypeDefinitionField", {"fieldName":"TAGLIA"}, {}],
			LOTTO: ["wm.TypeDefinitionField", {"fieldName":"LOTTO"}, {}],
			MATRICOLA: ["wm.TypeDefinitionField", {"fieldName":"MATRICOLA"}, {}],
			CODUDC: ["wm.TypeDefinitionField", {"fieldName":"CODUDC"}, {}],
			COD_DEPOSITO: ["wm.TypeDefinitionField", {"fieldName":"COD_DEPOSITO"}, {}],
			UBICAZIONE: ["wm.TypeDefinitionField", {"fieldName":"UBICAZIONE"}, {}],
			UM: ["wm.TypeDefinitionField", {"fieldName":"UM"}, {}],
			QTA_ORI: ["wm.TypeDefinitionField", {"fieldName":"QTA_ORI"}, {}],
			QTAPRELEVATA: ["wm.TypeDefinitionField", {"fieldName":"QTAPRELEVATA"}, {}],
			DATAINS: ["wm.TypeDefinitionField", {"fieldName":"DATAINS"}, {}],
			ORAINS: ["wm.TypeDefinitionField", {"fieldName":"ORAINS"}, {}],
			SERIEDOC_ORI: ["wm.TypeDefinitionField", {"fieldName":"SERIEDOC_ORI"}, {}],
			IDTESTA_ORI: ["wm.TypeDefinitionField", {"fieldName":"IDTESTA_ORI"}, {}],
			IDRIGA_ORI: ["wm.TypeDefinitionField", {"fieldName":"IDRIGA_ORI"}, {}],
			IDRIGA_IMP_ORI: ["wm.TypeDefinitionField", {"fieldName":"IDRIGA_IMP_ORI"}, {}],
			SERIEDOC_GEN: ["wm.TypeDefinitionField", {"fieldName":"SERIEDOC_GEN"}, {}],
			IDTESTA_GEN: ["wm.TypeDefinitionField", {"fieldName":"IDTESTA_GEN"}, {}],
			IDRIGA_GEN: ["wm.TypeDefinitionField", {"fieldName":"IDRIGA_GEN"}, {}],
			RIGA_EVASA: ["wm.TypeDefinitionField", {"fieldName":"RIGA_EVASA","fieldType":"Boolean"}, {}],
			FLG_SPEDIBILE: ["wm.TypeDefinitionField", {"fieldName":"FLG_SPEDIBILE","fieldType":"Boolean"}, {}],
			DATAMIN_SCADLOTTO: ["wm.TypeDefinitionField", {"fieldName":"DATAMIN_SCADLOTTO"}, {}],
			DATAMAX_SCADLOTTO: ["wm.TypeDefinitionField", {"fieldName":"DATAMAX_SCADLOTTO"}, {}],
			SERIE_GROUPAGE: ["wm.TypeDefinitionField", {"fieldName":"SERIE_GROUPAGE"}, {}],
			IDTESTA_GROUPAGE: ["wm.TypeDefinitionField", {"fieldName":"IDTESTA_GROUPAGE"}, {}],
			IDRIGA_GROUPAGE: ["wm.TypeDefinitionField", {"fieldName":"IDRIGA_GROUPAGE"}, {}],
			PREZZO: ["wm.TypeDefinitionField", {"fieldName":"PREZZO"}, {}],
			STR_SCONTI: ["wm.TypeDefinitionField", {"fieldName":"STR_SCONTI"}, {}],
			SCONTOVALORE: ["wm.TypeDefinitionField", {"fieldName":"SCONTOVALORE"}, {}],
			VAL_UNITARIO: ["wm.TypeDefinitionField", {"fieldName":"VAL_UNITARIO"}, {}],
			VAL_TOTALE_RIGA_ORI: ["wm.TypeDefinitionField", {"fieldName":"VAL_TOTALE_RIGA_ORI"}, {}],
			VAL_TOTALE_PREL: ["wm.TypeDefinitionField", {"fieldName":"VAL_TOTALE_PREL"}, {}],
			NUOVO_RRP: ["wm.TypeDefinitionField", {"fieldName":"NUOVO_RRP"}, {}],
			NOTE_RIGA: ["wm.TypeDefinitionField", {"fieldName":"NOTE_RIGA"}, {}],
			QTA: ["wm.TypeDefinitionField", {"fieldName":"QTA"}, {}],
			VAL_TOTALE_RIGA: ["wm.TypeDefinitionField", {"fieldName":"VAL_TOTALE_RIGA"}, {}],
			DESCRIZIONE: ["wm.TypeDefinitionField", {"fieldName":"DESCRIZIONE"}, {}],
			QTA_TOTALE: ["wm.TypeDefinitionField", {"fieldName":"QTA_TOTALE"}, {}],
			VAL_TOTALE: ["wm.TypeDefinitionField", {"fieldName":"VAL_TOTALE"}, {}],
			NUM_DECIMALI: ["wm.TypeDefinitionField", {"fieldName":"NUM_DECIMALI"}, {}]
		}], 
		tour_del_giornoResponse: ["wm.TypeDefinition", {}, {}, {
			ROWID: ["wm.TypeDefinitionField", {"fieldName":"ROWID","fieldType":"Number"}, {}],
			PAGEID: ["wm.TypeDefinitionField", {"fieldName":"PAGEID","fieldType":"Number"}, {}],
			PAGECOUNT: ["wm.TypeDefinitionField", {"fieldName":"PAGECOUNT","fieldType":"Number"}, {}],
			O2ASPID: ["wm.TypeDefinitionField", {"fieldName":"O2ASPID"}, {}],
			ID: ["wm.TypeDefinitionField", {"fieldName":"ID"}, {}],
			TOUR_ID: ["wm.TypeDefinitionField", {"fieldName":"TOUR_ID"}, {}],
			DATA_VISITA: ["wm.TypeDefinitionField", {"fieldName":"DATA_VISITA"}, {}],
			ID_NEGOZIO: ["wm.TypeDefinitionField", {"fieldName":"ID_NEGOZIO"}, {}],
			DESCRIZIONE: ["wm.TypeDefinitionField", {"fieldName":"DESCRIZIONE"}, {}],
			AGENZIA: ["wm.TypeDefinitionField", {"fieldName":"AGENZIA"}, {}],
			TOUR_LEADER: ["wm.TypeDefinitionField", {"fieldName":"TOUR_LEADER"}, {}],
			NUM_PERSONE: ["wm.TypeDefinitionField", {"fieldName":"NUM_PERSONE"}, {}],
			NAZIONE: ["wm.TypeDefinitionField", {"fieldName":"NAZIONE"}, {}],
			DESC_AGENZIA: ["wm.TypeDefinitionField", {"fieldName":"DESC_AGENZIA"}, {}],
			DESC_TOURLEADER: ["wm.TypeDefinitionField", {"fieldName":"DESC_TOURLEADER"}, {}],
			DESCR_NAZIONE: ["wm.TypeDefinitionField", {"fieldName":"DESCR_NAZIONE"}, {}]
		}], 
		tour_membersResponse: ["wm.TypeDefinition", {}, {}, {
			ROWID: ["wm.TypeDefinitionField", {"fieldName":"ROWID","fieldType":"Number"}, {}],
			PAGEID: ["wm.TypeDefinitionField", {"fieldName":"PAGEID","fieldType":"Number"}, {}],
			PAGECOUNT: ["wm.TypeDefinitionField", {"fieldName":"PAGECOUNT","fieldType":"Number"}, {}],
			ID_SESSION: ["wm.TypeDefinitionField", {"fieldName":"ID_SESSION"}, {}],
			PROGNAME: ["wm.TypeDefinitionField", {"fieldName":"PROGNAME"}, {}],
			ID_RIGA_ORD: ["wm.TypeDefinitionField", {"fieldName":"ID_RIGA_ORD"}, {}],
			NOMINATIVO: ["wm.TypeDefinitionField", {"fieldName":"NOMINATIVO"}, {}],
			DOCUMENTO: ["wm.TypeDefinitionField", {"fieldName":"DOCUMENTO"}, {}],
			TOUROPERATOR: ["wm.TypeDefinitionField", {"fieldName":"TOUROPERATOR"}, {}],
			TOURLEADER: ["wm.TypeDefinitionField", {"fieldName":"TOURLEADER"}, {}],
			ID_TESSERA: ["wm.TypeDefinitionField", {"fieldName":"ID_TESSERA"}, {}],
			ID_OPERATOR: ["wm.TypeDefinitionField", {"fieldName":"ID_OPERATOR"}, {}],
			ID_LEADER: ["wm.TypeDefinitionField", {"fieldName":"ID_LEADER"}, {}],
			ID_TOUR_POINT: ["wm.TypeDefinitionField", {"fieldName":"ID_TOUR_POINT"}, {}],
			ID_TOUR: ["wm.TypeDefinitionField", {"fieldName":"ID_TOUR"}, {}]
		}], 
		varianti_articoloResponse: ["wm.TypeDefinition", {}, {}, {
			ROWID: ["wm.TypeDefinitionField", {"fieldName":"ROWID","fieldType":"Number"}, {}],
			PAGEID: ["wm.TypeDefinitionField", {"fieldName":"PAGEID","fieldType":"Number"}, {}],
			PAGECOUNT: ["wm.TypeDefinitionField", {"fieldName":"PAGECOUNT","fieldType":"Number"}, {}],
			O2ASPID: ["wm.TypeDefinitionField", {"fieldName":"O2ASPID"}, {}],
			TIPOLOGIA: ["wm.TypeDefinitionField", {"fieldName":"TIPOLOGIA"}, {}],
			VARIANTE: ["wm.TypeDefinitionField", {"fieldName":"VARIANTE"}, {}],
			POSVARIANTE: ["wm.TypeDefinitionField", {"fieldName":"POSVARIANTE"}, {}],
			DESCRIZIONE: ["wm.TypeDefinitionField", {"fieldName":"DESCRIZIONE"}, {}],
			TAGLIA: ["wm.TypeDefinitionField", {"fieldName":"TAGLIA"}, {}],
			BARCODE: ["wm.TypeDefinitionField", {"fieldName":"BARCODE"}, {}]
		}], 
		agenteProvvigioni: ["wm.XhrDefinition", {"parameters":{"server":{"transmitType":"path","type":"String","defaultValue":"localhost/enumera"},"JXSESSNAME":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"rpc_program":{"transmitType":"queryString","type":"String","defaultValue":"rpc_tot_provvigioni_agente","hidden":true,"noEscape":false},"da_data":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"a_data":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false}},"returnType":"agenteProvvigioniResponse","url":"http://${server}/enumerarpc.php"}, {}], 
		articolo: ["wm.XhrDefinition", {"parameters":{"server":{"transmitType":"path","type":"String","defaultValue":"localhost/enumera"},"JXSESSNAME":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"rpc_program":{"transmitType":"queryString","type":"String","defaultValue":"rpc_product","hidden":true,"noEscape":false},"barcodeSearch":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false}},"returnType":"articoloResponse","url":"http://${server}/enumerarpc.php"}, {}], 
		confirmExit: ["wm.NotificationCall", {"operation":"confirm"}, {"onOk":"confirmExitOk"}, {
			input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}]
		}], 
		dummy: ["wm.XhrDefinition", {"parameters":{},"returnType":"Boolean","url":"http://192.168.187.101/enumerarpc.php"}, {}], 
		eliminaRigaVendita: ["wm.XhrDefinition", {"parameters":{"server":{"transmitType":"path","type":"String","defaultValue":"localhost/enumera"},"JXSESSNAME":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"rpc_program":{"transmitType":"queryString","type":"String","defaultValue":"rpc_liste_prel_corpo_D","hidden":true,"noEscape":false},"serie_lista":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":true},"id_lista":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":true},"id_riga_lista":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":true}},"returnType":"jxResponse","url":"http://${server}/enumerarpc.php"}, {}], 
		eliminaVendita: ["wm.XhrDefinition", {"parameters":{"server":{"transmitType":"path","type":"String","defaultValue":"localhost/enumera"},"JXSESSNAME":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"rpc_program":{"transmitType":"queryString","type":"String","defaultValue":"rpc_tcrm_eliminalista","hidden":true,"noEscape":false},"serie_lista":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":true},"id_lista":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":true}},"returnType":"jxResponse","url":"http://${server}/enumerarpc.php"}, {}], 
		giacenza_altre_taglie: ["wm.XhrDefinition", {"parameters":{"server":{"transmitType":"path","type":"String","defaultValue":"localhost/enumera"},"JXSESSNAME":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"rpc_program":{"transmitType":"queryString","type":"String","defaultValue":"rpc_stock_x_size","hidden":true,"noEscape":false},"articolo":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":true}},"returnType":"giacenza_altre_taglieResponse","url":"http://${server}/enumerarpc.php"}, {}], 
		liste: ["wm.XhrDefinition", {"parameters":{"server":{"transmitType":"path","type":"String","defaultValue":"localhost/enumera"},"JXSESSNAME":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"rpc_program":{"transmitType":"queryString","type":"String","defaultValue":"rpc_liste_prel_testa_R","hidden":true,"noEscape":false},"operatore":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"fino_stato_lista":{"transmitType":"queryString","type":"String","defaultValue":"4","hidden":true,"noEscape":false}},"returnType":"listeResponse","url":"http://${server}/enumerarpc.php"}, {}], 
		login: ["wm.XhrDefinition", {"parameters":{"server":{"transmitType":"path","type":"String","defaultValue":"localhost/enumera"},"user":{"transmitType":"queryString","type":"String","defaultValue":"root","hidden":false,"noEscape":false},"password":{"transmitType":"queryString","type":"String","defaultValue":"alt@2015","hidden":false,"noEscape":false},"db":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false}},"returnType":"loginResponse","url":"http://${server}/enumerarpc.php"}, {}], 
		navigationCallMenu: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
			input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"\"Menu\"","targetProperty":"pageName"}, {}]
				}]
			}]
		}], 
		notificationError: ["wm.NotificationCall", {"operation":"toast"}, {}, {
			input: ["wm.ServiceInput", {"type":"toastInputs"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"\"top right\"","targetProperty":"dialogPosition"}, {}],
					wire1: ["wm.Wire", {"expression":"\"Error\"","targetProperty":"cssClasses"}, {}]
				}]
			}]
		}], 
		nuovaRigaVendita: ["wm.XhrDefinition", {"parameters":{"server":{"transmitType":"path","type":"String","defaultValue":"localhost/enumera"},"JXSESSNAME":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"rpc_program":{"transmitType":"queryString","type":"String","defaultValue":"rpc_tcrm_nuovarigalista","hidden":true,"noEscape":false},"serie_lista":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":true},"id_lista":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":true},"barcode":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":true}},"returnType":"jxResponse","url":"http://${server}/enumerarpc.php"}, {}], 
		nuovaVendita: ["wm.XhrDefinition", {"parameters":{"server":{"transmitType":"path","type":"String","defaultValue":"localhost/enumera"},"JXSESSNAME":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"rpc_program":{"transmitType":"queryString","type":"String","defaultValue":"rpc_tcrm_nuovalista","hidden":true,"noEscape":false},"tour_id":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":true},"tour_member":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":true}},"returnType":"jxResponse","url":"http://${server}/enumerarpc.php"}, {}], 
		phoneGapBeep: ["wm.PhoneGapCall", {"inFlightBehavior":"executeLast","operation":"notification_beep"}, {}, {
			input: ["wm.ServiceInput", {"type":"notification_beepInputs"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"1","targetProperty":"times"}, {}]
				}]
			}]
		}], 
		righeLista: ["wm.XhrDefinition", {"parameters":{"server":{"transmitType":"path","type":"String","defaultValue":"localhost/enumera"},"JXSESSNAME":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"rpc_program":{"transmitType":"queryString","type":"String","defaultValue":"rpc_liste_prel_corpo_R","hidden":true,"noEscape":false},"serie_prelievo":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":true},"idprelievo":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":true},"idriga":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":true}},"returnType":"righeListaResponse","url":"http://${server}/enumerarpc.php"}, {}], 
		serviceApp: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"login","service":"xhrService"}, {"onSuccess":"serviceAppSuccess"}, {
			input: ["wm.ServiceInput", {"type":"loginInputs"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"[login].textUser.dataValue","targetProperty":"user"}, {}],
					wire1: ["wm.Wire", {"expression":undefined,"source":"[login].textPassword.dataValue","targetProperty":"password"}, {}],
					wire2: ["wm.Wire", {"expression":undefined,"source":"app.varConfig.server","targetProperty":"server"}, {}],
					wire3: ["wm.Wire", {"expression":undefined,"source":"app.varConfig.db","targetProperty":"db"}, {}]
				}]
			}]
		}], 
		tour_del_giorno: ["wm.XhrDefinition", {"parameters":{"server":{"transmitType":"path","type":"String","defaultValue":"localhost/enumera"},"JXSESSNAME":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"rpc_program":{"transmitType":"queryString","type":"String","defaultValue":"rpc_tcrm_tour","hidden":true,"noEscape":false}},"returnType":"tour_del_giornoResponse","url":"http://${server}/enumerarpc.php"}, {}], 
		tour_members: ["wm.XhrDefinition", {"parameters":{"server":{"transmitType":"path","type":"String","defaultValue":"localhost/enumera"},"JXSESSNAME":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"rpc_program":{"transmitType":"queryString","type":"String","defaultValue":"rpc_tcrm_members","hidden":true,"noEscape":false},"nominativo":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"documento":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"tour_leader":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"tour_operator":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false}},"returnType":"tour_membersResponse","url":"http://${server}/enumerarpc.php"}, {}], 
		updateStatoLista: ["wm.XhrDefinition", {"parameters":{"server":{"transmitType":"path","type":"String","defaultValue":"localhost/enumera"},"JXSESSNAME":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"rpc_program":{"transmitType":"queryString","type":"String","defaultValue":"rpc_liste_prel_testa_U","hidden":true,"noEscape":false},"serie_prelievo":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":true},"idprelievo":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":true},"stato_lista":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":true}},"returnType":"jxResponse","url":"http://${server}/enumerarpc.php"}, {}], 
		varConfig: ["wm.Variable", {"json":"{\"server\":\"192.168.187.101/enumera\",\"user\":\"root\",\"password\":\"alta@2015\"}","type":"Configurazione"}, {}], 
		varianti_articolo: ["wm.XhrDefinition", {"parameters":{"server":{"transmitType":"path","type":"String","defaultValue":"localhost/enumera"},"JXSESSNAME":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"rpc_program":{"transmitType":"queryString","type":"String","defaultValue":"rpc_varianti_articolo","hidden":true,"noEscape":false},"articolo":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":true},"numtip":{"transmitType":"queryString","type":"Number","defaultValue":"1","hidden":false,"noEscape":true},"taglia":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":true}},"returnType":"varianti_articoloResponse","url":"http://${server}/enumerarpc.php"}, {}]
	},
	_end: 0
});

enumeraClerk.extend({
	serviceAppSuccess: function(inSender, inDeprecated) {
        
        if (this.serviceApp.getItem(0).getValue("sessionName") != null){
               main.loginPage.hide();
        }
        else {
            app.toastError("Login error");
        }
	},
	confirmExitOk: function(inSender, inResult) {
		    	//alert("uscirei se potessi");
        //window.plugin.backgroundMode.enable();
        //navigator.app.exitApp();
        navigator.Backbutton.goHome(function() {
            console.log('success')
        }, function() {
            console.log('fail')
        });
	},
	_end: 0
});