dojo.declare("Configurazione", wm.Page, {
	start: function() {
		
	},
	"preferredDevice": "phone",

	buttonSalvaClick: function(inSender) {
		window.localStorage.setItem("EnumeraClerk",JSON.stringify(this.dataForm1.dataOutput.getData()));
        console.log(this.dataForm1.dataOutput.getData());
        app.toastSuccess("Configurazione salvata. Ricaricare la pagina");
	},
	_end: 0
});