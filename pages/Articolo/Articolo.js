dojo.declare("Articolo", wm.Page, {
    start: function() {
        this.textBarcode.focus();

    },
    "preferredDevice": "phone",

    serviceVarArticoloResult: function(inSender, inDeprecated) {
        console.log(this.serviceVarArticolo);
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
            this.textBarcode.setDataValue(this.serviceVarArticolo.data.parent_sku + "@" + row.VARIANTE)
        }
    },
    _end: 0
});