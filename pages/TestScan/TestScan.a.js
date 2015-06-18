dojo.declare("TestScan", wm.Page, {
start: function() {
},
"preferredDevice": "phone",
button1Click: function(inSender) {
console.log('scanning');
var scanner = cordova.require("cordova/plugin/BarcodeScanner");
scanner.scan( function (result) {
this.text1.setDataValue(result.text);
alert("We got a barcode\n" +
"Result: " + result.text + "\n" +
"Format: " + result.format + "\n" +
"Cancelled: " + result.cancelled);
console.log("Scanner result: \n" +
"text: " + result.text + "\n" +
"format: " + result.format + "\n" +
"cancelled: " + result.cancelled + "\n");
document.getElementById("info").innerHTML = result.text;
console.log(result);
/*
if (args.format == "QR_CODE") {
window.plugins.childBrowser.showWebPage(args.text, { showLocationBar: false });
}
*/
}, function (error) {
console.log("Scanning failed: ", error);
} );
},
_end: 0
});

TestScan.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
text1: ["wm.Text", {"caption":"text1","dataValue":undefined,"displayValue":"","height":"36px"}, {}],
button1: ["wm.Button", {"border":"0","caption":"Scan","height":"40px","width":"80px"}, {"onclick":"button1Click"}]
}]
};

TestScan.prototype._cssText = '';
TestScan.prototype._htmlText = '';