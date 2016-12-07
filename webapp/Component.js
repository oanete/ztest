jQuery.sap.declare("ZTEST.Component");
sap.ui.getCore().loadLibrary("sap.ui.generic.app");
jQuery.sap.require("sap.ui.generic.app.AppComponent");

sap.ui.generic.app.AppComponent.extend("ZTEST.Component", {
	metadata: {
		"manifest": "json"
	}
});