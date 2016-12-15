sap.ui.controller("ZTEST.ext.controller.Popup", { 
	onNotifyCustomer: function(oEvent) {
		var oSmartTable = oEvent.getSource().getParent().getParent().getTable();
		var selection = oSmartTable.getSelectedIndices();
		if (selection.length > 0) {
			for (var row in selection) {
				var oContext = oSmartTable.getContextByIndex(selection[row]);
				jQuery.sap.require("sap.m.MessageBox");
				sap.m.MessageBox.show(
					("Do you want to notify customer " + oContext.getProperty("CustomerID") + "?"), {
						icon: sap.m.MessageBox.Icon.CONFIRM,
						title: "Confirm",
						actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
						onClose: function(oAction) {
							//todo
							alert(oAction);
						}
					}
				);
			}
		} else {
			sap.m.MessageBox.error("Select an item");
		}
	}
});