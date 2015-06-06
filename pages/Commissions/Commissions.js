dojo.declare("Commissions", wm.Page, {
	start: function() {
        var oggi = new Date();
        $( '[type=date], .datepicker' ).pickadate({max: oggi, format: 'd mmmm, yyyy'});
/*
        $( '[type=date]' ).datepicker({readonly: false})
        .on('change', function() {
          alert($(this).val());
        })
        .trigger('change');
  */
        $( '[type=date], .datepicker' ).val(oggi.toDateString());
         
        
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