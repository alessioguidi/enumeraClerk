dojo.declare("Commissions", wm.Page, {
	start: function() {
        $( '[type=date], .datepicker' ).pickadate({max: oggi, format: 'd mmmm, yyyy'});
        var oggi = new Date();
        $( '[type=date], .datepicker' ).val(oggi.toDateString('d mmmm, yyyy'));
         
        
	},
	"preferredDevice": "phone",

	button1Click: function(inSender) {
		varDadata = new Date(dadata.value);
        varAdata = new Date (adata.value);
        //this.serviceVarProvvigioni.update();
        
        this.serviceVarProvvigioni.input.setValue("da_data", varDadata);
        this.serviceVarProvvigioni.input.setValue("a_data", varAdata);
        this.serviceVarProvvigioni.update();
	},
	_end: 0
});