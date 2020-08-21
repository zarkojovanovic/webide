jQuery.sap.declare("nw.epm.refapps.ext.prod.manage.EPMRA_PRODMANExtension.Component");
// use the load function for getting the optimized preload file if present
sap.ui.component.load({
	name: "nw.epm.refapps.ext.prod.manage",
	// Use the below URL to run the extended application when SAP-delivered application is deployed on SAPUI5 ABAP Repository
	url: "/sap/bc/ui5_ui5/sap/EPMRA_PRODMAN" // we use a URL relative to our own component
		// extension application is deployed with customer namespace
});
this.nw.epm.refapps.ext.prod.manage.Component.extend("nw.epm.refapps.ext.prod.manage.EPMRA_PRODMANExtension.Component", {
	metadata: {
		version: "1.0.0",
		config: {
			"serviceConfig": {
				"name": "EPM_REF_APPS_PROD_MAN_SRV",
				"serviceUrl": "/sap/opu/odata/sap/ZEPM_REF_APP_PRODMAN_SRV/"
			}
		},
		customizing: {
			"sap.ui.viewExtensions": {
				"nw.epm.refapps.ext.prod.manage.view.ProductDisplay": {
					"extensionBottomOfScreen": {
						"className": "sap.ui.core.Fragment",
						"fragmentName": "nw.epm.refapps.ext.prod.manage.EPMRA_PRODMANExtension.view.ProductDisplay_extensionBottomOfScreenCustom",
						"type": "XML"
					}
				}
			},
			"sap.ui.controllerExtensions": {
				"nw.epm.refapps.ext.prod.manage.controller.ProductDisplay": {
					"controllerName": "nw.epm.refapps.ext.prod.manage.EPMRA_PRODMANExtension.controller.ProductDisplayCustom"
				}
			 },
			"sap.ui.viewReplacements": {
				"nw.epm.refapps.ext.prod.manage.view.ProductDisplay": {
					"viewName": "nw.epm.refapps.ext.prod.manage.EPMRA_PRODMANExtension.view.ProductDisplayCustom",
					"type": "XML"
				}
			}
		}
	},
	init: function () {
		if (nw.epm.refapps.ext.prod.manage.Component.prototype.init !== undefined) {
			nw.epm.refapps.ext.prod.manage.Component.prototype.init.apply(this, arguments);
		}
		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl: "./i18n/i18n.properties"
		});
		// set new i18n model
		this.setModel(i18nModel, "i18n");
	}
});