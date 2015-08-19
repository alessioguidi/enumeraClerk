Login.widgets = {
	navigationCallSettings: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Configurazione\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"center","styles":{},"verticalAlign":"top"}, {}, {
		panel1: ["wm.Panel", {"enableTouchHeight":true,"height":"100%","horizontalAlign":"center","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
			textUser: ["wm.Text", {"caption":"User","desktopHeight":"35px","displayValue":"root","height":"36px","required":true,"width":"90%"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"app.varConfig.user","targetProperty":"dataValue"}, {}]
				}]
			}],
			textPassword: ["wm.Text", {"caption":"Password","desktopHeight":"35px","displayValue":"alta@2015","height":"36px","password":true,"width":"90%"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"app.varConfig.password","targetProperty":"dataValue"}, {}]
				}]
			}],
			buttonLogin: ["wm.Button", {"border":"0","caption":"Enter","height":"40px","width":"80px"}, {"onclick":"buttonLoginClick"}],
			label1: ["wm.Label", {"align":"center","caption":"settings","link":undefined,"padding":"4","styles":{"textDecoration":"underline"},"width":"59px"}, {"onclick":"navigationCallSettings"}],
			spacer1: ["wm.Spacer", {"height":"19px","styles":{},"width":"96px"}, {}],
			panel2: ["wm.Panel", {"height":"186px","horizontalAlign":"center","styles":{},"verticalAlign":"top","width":"90%"}, {}, {
				picture1: ["wm.Picture", {"height":"150px","source":"resources/images/logos/Other/eclerk-qrcode.png","width":"90%"}, {}],
				labelDownload: ["wm.Label", {"align":"center","caption":"Download the latest APK","padding":"4","width":"90%"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":"\"https://build.phonegap.com/apps/1490170/download/android/?qr_key=qKzZu7JTzvQ94-DJUWKj\"","targetProperty":"link"}, {}]
					}]
				}]
			}]
		}]
	}]
}