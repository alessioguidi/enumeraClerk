dojo.declare("Main", wm.Page, {
	"preferredDevice": "phone",
	start: function() {
                // carico configurazione
        this.loadConfig();
        console.log(app.varConfig.getData());
        if (app.varConfig.getData() == null){
            this.navigationCallConfig.update();
        }
        else this.loginPage.show();
      //  this.loginPage.show();
        document.addEventListener("deviceready", this.handleDeviceReady, false);;
        	
	},
    handleDeviceReady: function (event) {   
        // onSuccess Callback
        // This method accepts a Position object, which contains the
        // current GPS coordinates
        //
       // navigator.splashscreen.hide();
        document.addEventListener("backbutton", onBackButton, false);
        /*
        document.addEventListener("searchbutton", onSearch, false);
        document.addEventListener("menubutton", onMenuButton, false);
        
        document.addEventListener("online", onOnline, false);
        document.addEventListener("offline", onOffline, false);

        function onOnline() {
            this.pictureNetwork.setImageIndex(49);
        }
        function onOffline() {
            this.pictureNetwork.setImageIndex(50);
        }   
        */
        // Handle the backbutton
        //
        function onBackButton() {
            //navigator.notification.confirm("Are you sure want to exit from App?", onConfirmExit, "Confirmation", "Yes,No");
            if (main.pageContainer1.pageName == "Menu"){
                app.confirmExit.update();
            }
            else {
                if (typeof (navigator.app) !== "undefined") {
                    history.go(-1);
                    navigator.app.backHistory();
                } else {
                    console.log("window.history.back");
                    window.history.back();
                }   
            }
        }
        /*
        // Handle the menubutton
        //
        function onMenuButton() {
            alert("You hit the menu button!");
        }
        // Handle the searchbutton
        //
        function onSearchButton() {
            alert("You hit the search button!");
        }
        */
 
       this.loginPage.show(); 

    },   
    
    loadConfig: function (){
        app.varConfig.setData(JSON.parse(window.localStorage.getItem("EnumeraClerk")));
        
    },

	_end: 0
});