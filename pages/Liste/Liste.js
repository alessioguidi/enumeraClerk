dojo.declare("Liste", wm.Page, {
	start: function() {
        this.textBarcode.focus();
		
	},
	"preferredDevice": "phone",

	buttonResetClick: function(inSender) {
		this.textNome.setDataValue("");
        this.textDocumento.setDataValue("");
	},
	serviceVarNuovaRigaResult: function(inSender, inDeprecated) {
		var item = this.serviceVarNuovaRiga.getData();
        if (item.errorCode != "") {
            app.toastError(item.message);
          //  app.phoneGapBeep.update();
            
            document.getElementById('errorebarcode').play();
            navigator.notification.beep(1);
            
        }

	},
    

	buttonBackClick: function(inSender) {
		this.listaListe.deselectAll();
        this.gridRighe.deselectAll();
        
	},
	layerDettaglioShow: function(inSender) {
        this.gridRighe.deselectAll();
		this.textBarcode.focus();
	},
	textBarcodeChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        
		if (inDataValue != null){
         this.serviceVarNuovaRiga.update();   
		}
	},

	serviceVarRigheListaSuccess1: function(inSender, inDeprecated) {
		this.textBarcode.focus();
	},
	serviceVarNuovaRigaInflightBacklogComplete: function(inSender) {
		this.textBarcode.setDataValue("");
        this.textBarcode.focus();
	},
	dialogModificaRigaClose: function(inSender, inWhy) {
	    this.textBarcode.focus();	
	},
	gridRigheSelect: function(inSender) {
		if (this.gridRighe.selectedItem != null){
            //console.log(this.gridRighe.selectedItem);
            //this.dialogModificaRiga.update();
		}
	},
	_end: 0
});