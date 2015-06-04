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
            app.phoneGapBeep.update();
            
        }
        this.textBarcode.setDataValue("");
        this.textBarcode.focus();
	},
    

	buttonBackClick: function(inSender) {
		this.listaVendite.deselectAll();
	},
	layerDettaglioShow: function(inSender) {
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
	_end: 0
});