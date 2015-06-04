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

Main.widgets = {
navigationCall1: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Granting\"","targetProperty":"pageName"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}]
}]
}]
}],
openNuovoTs: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"NewTS\"","targetProperty":"pageName"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}]
}]
}]
}],
openElencoTS: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"ElencoTS\"","targetProperty":"pageName"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}]
}]
}]
}],
navigationCallArticolo: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Articolo\"","targetProperty":"pageName"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}]
}]
}]
}],
navigationCallListe: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Liste\"","targetProperty":"pageName"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}]
}]
}]
}],
navigationCallCommissions: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Commissions\"","targetProperty":"pageName"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}]
}]
}]
}],
navigationCallConfig: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Configurazione\"","targetProperty":"pageName"}, {}]
}]
}]
}],
loginPage: ["wm.PageDialog", {"border":"2","desktopHeight":"300px","height":"300px","hideControls":true,"mobileHeight":"300px","pageName":"Login","title":"Login"}, {}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
toggleButtonPanel1: ["wm.ToggleButtonPanel", {"horizontalAlign":"left","padding":"undefined","showing":false,"verticalAlign":"top"}, {}, {
toggleButtonVendite: ["wm.ToggleButton", {"border":"1,0,1,1","borderColor":"#2087fc","captionDown":"Sales","captionUp":"Sales","height":"100%","margin":"0","width":"34%"}, {"onclick":"navigationCallListe"}],
toggleButtonArticolo: ["wm.ToggleButton", {"border":"1,0,1,1","borderColor":"#2087fc","captionDown":"Product","captionUp":"Product","height":"100%","margin":"0","width":"33%"}, {"onclick":"navigationCallArticolo"}],
toggleButtonProvvigioni: ["wm.ToggleButton", {"border":"1,1,1,1","borderColor":"#2087fc","captionDown":"Commissions","captionUp":"Commissions","height":"100%","margin":"0","width":"33%"}, {"onclick":"navigationCallCommissions"}]
}],
pageContainer1: ["wm.PageContainer", {"deferLoad":true,"pageName":"Menu","styles":{},"subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}]
};

Main.prototype._cssText = '';
Main.prototype._htmlText = '';