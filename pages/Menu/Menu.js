dojo.declare("Menu", wm.Page, {
	start: function() {
	    //	this.serviceCountNewDeals.update();
        this.labelRelease.setCaption("Release:" + app.getFullVersionNumber());
        var settings = app.varConfig.getItem(0);
        this.layers.setLayer(this.layers.getLayerByCaption(settings.data.Menu));

	},
	"preferredDevice": "phone",

	buttonMemoClick: function(inSender) {
		main.ncMemo.update()
	},
	buttonInfoClick: function(inSender) {
		main.ncInfo.update()
	},
	buttonNewsClick: function(inSender) {
		main.ncNews.update()
	},
	buttonMeteoClick: function(inSender) {
		main.ncMeteo.update()
	},
	buttonFriendsClick: function(inSender) {
		main.ncFriends.update()
	},
	buttonShopClick: function(inSender) {
		main.ncShop.update()
	},

	buttonProfiloClick: function(inSender) {
		main.ncProfilo.update()
	},
	buttonUscitaClick: function(inSender) {
		app.confirmExit.update();
	},
	buttonCouponClick: function(inSender) {
		main.ncCoupons.update()
	},
	html1Click: function(inSender) {
		main.ncShop.update()
	},
	serviceCountNewDealsSuccess: function(inSender, inDeprecated) {
        var newqty = inSender.getItem(0).getValue("QTY_OUT");
		if (newqty > 0){
            $(menu_corner).append(newqty)
            $(menu_corner).show()
		}
        else {
            $(menu_corner).hide();
        }
	},
	label3Click: function(inSender, inEvent) {
        
		console.log(app.getFullVersionNumber());
	},
	_end: 0
});