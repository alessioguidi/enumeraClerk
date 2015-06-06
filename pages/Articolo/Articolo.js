dojo.declare("Articolo", wm.Page, {
    start: function() {
        this.textBarcode.focus();

    },
    "preferredDevice": "phone",

    serviceVarArticoloResult: function(inSender, inDeprecated) {
        
        if (this.serviceVarArticolo.data.sku === '') {
            this.notificationArticoloNonTrovato.update();
        };
        this.textBarcode.setDataValue(null);
        this.textBarcode.focus();
    },
    textBarcodeChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        if (inDataValue != null) {
            this.serviceVarArticolo.update();
        }
    },
    buttonSelectClick: function(inSender) {
        var row = this.gridVarianti.selectedItem.getData();
        console.log(row);
        if (row.BARCODE != ''){
            this.textBarcode.setDataValue(row.BARCODE) 
        }
        else {
            app.toastInfo("Barcode not available for this variation");
            //this.textBarcode.setDataValue(this.serviceVarArticolo.data.parent_sku + "@" + row.VARIANTE)
        }
        this.textBarcode.focus();
    },
    button3Click1: function(inSender) {
		this.textBarcode.focus();
	},
	notificationArticoloNonTrovatoClose: function(inSender) {
		this.textBarcode.focus();
	},
	_end: 0
});