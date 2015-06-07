dojo.declare("Commissions", wm.Page, {
	start: function() {
        var oggi = new Date();
        document.getElementById("dadata").valueAsDate = oggi;
        document.getElementById("adata").valueAsDate = oggi;
        
	},
	"preferredDevice": "phone",

	button1Click: function(inSender) {

        var dateString = $("#dadata").val().replace(/-/g, "/");
    	var varDadata = new Date(dateString);
        var dateString = $("#adata").val().replace(/-/g, "/");
        var varAdata = new Date(dateString);

        this.serviceVarProvvigioni.input.setValue("da_data", varDadata);
        this.serviceVarProvvigioni.input.setValue("a_data", varAdata);
        this.serviceVarProvvigioni.update();
	},
	_end: 0
});