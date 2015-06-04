Login.widgets = {
	layoutBox1: ["wm.Layout", {"horizontalAlign":"center","verticalAlign":"top"}, {}, {
		panel1: ["wm.Panel", {"enableTouchHeight":true,"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"100%"}, {}, {
			textUser: ["wm.Text", {"caption":"User","dataValue":"mob","desktopHeight":"35px","displayValue":"mob","height":"36px","required":true,"width":"90%"}, {}],
			textPassword: ["wm.Text", {"caption":"Password","dataValue":undefined,"desktopHeight":"35px","displayValue":"","height":"36px","password":true,"width":"90%"}, {}],
			buttonLogin: ["wm.Button", {"border":"0","caption":"Enter","height":"40px","width":"80px"}, {"onclick":"buttonLoginClick"}]
		}]
	}]
}