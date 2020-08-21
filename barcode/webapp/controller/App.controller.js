jQuery.sap.require("sap.ndc.BarcodeScanner");
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.barcode.barcode.controller.App", {
		onInit: function () {

		},
		onPress: function(oEvent) {
			sap.ndc.BarcodeScanner.scan(
				function(mResult) {
					alert("We got a bar code\n" +
						"Result: " + mResult.text + "\n" +
						"Format: " + mResult.format + "\n" +
						"Cancelled: " + mResult.cancelled);
				},
				function(Error) {
					alert("Scanning failed: " + Error);
				}
			);
		}
	});
});