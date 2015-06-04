dojo.declare("Commissions", wm.Page, {
	start: function() {
        var oggi = new Date();
        this.date1.setDataValue(oggi);
        this.date2.setDataValue(oggi);		
	},
	"preferredDevice": "phone",

	_end: 0
});