sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"nw/epm/refapps/ext/prod/manage/controller/SubControllerForShare",
	"nw/epm/refapps/ext/prod/manage/controller/messages",
	"nw/epm/refapps/ext/prod/manage/controller/utilities",
	"nw/epm/refapps/ext/prod/manage/model/formatter"
], function (C, J, S, m, u, f) {
	"use strict";
	return sap.ui.controller("nw.epm.refapps.ext.prod.manage.EPMRA_PRODMANExtension.controller.ProductDisplayCustom", {
		// onBeforeRendering: function () {
		// 	var v = this.getView();
	 //       this._oSupplierForm = this.byId("supplierInformationForm");
	 //       this._oSupplierForm.bindElement({ path: "Supplier" });
		//         // u.attachControlToView(v, this._oSupplierCard);
		// }
		//    formatter: f,
		//    onInit: function () {
		//        this._oView = this.getView();
		//        this._initViewPropertiesModel();
		//        var c = this.getOwnerComponent();
		//        this._oApplicationProperties = c.getModel("appProperties");
		//        this._oApplicationController = this._oApplicationProperties.getProperty("/applicationController");
		//        this._oResourceBundle = c.getModel("i18n").getResourceBundle();
		//        this._oHelper = this._oApplicationController.getODataHelper();
		//        this._oSubControllerForShare = new S(this._oView, this._oResourceBundle);
		//        this._sContextPath = "";
		//        this._mSupplierDatas = {};
		//    },
		//    _initViewPropertiesModel: function () {
		//        this._oViewProperties = new J({ dataLoaded: false });
		//        this._oView.setModel(this._oViewProperties, "viewProperties");
		//    },
		//    show: function () {
		//        var p = this._oApplicationProperties.getProperty("/productId");
		//        if (!p) {
		//            return;
		//        }
		//        this._oApplicationController.whenMetadataLoaded(this._show.bind(this, p));
		//    },
		//    _show: function (p) {
		//        this._sContextPath = this._oHelper.getPathForProductId(p);
		//        this._oView.bindElement(this._sContextPath);
		//        var P = this._extractProduct();
		//        this._oViewProperties.setProperty("/dataLoaded", P);
		//        if (!P) {
		//            this._oView.getElementBinding().attachEventOnce("dataReceived", this._getBindingDataReceivedHandler(p), this);
		//        }
		//    },
		//    _extractProduct: function () {
		//        var b = this._oView.getBindingContext();
		//        this._oProduct = null;
		//        if (b) {
		//            if (b.getPath() === this._sContextPath) {
		//                this._oProduct = b.getObject();
		//                this._oApplicationProperties.setProperty("/lastDisplay", this._oProduct.Id);
		//                this._oApplicationProperties.setProperty("/detailBusyIndicatorDelay", null);
		//                return true;
		//            }
		//        }
		//        return false;
		//    },
		//    _getBindingDataReceivedHandler: function (p) {
		//        return function () {
		//            if (p !== this._oApplicationProperties.getProperty("/productId") || !this._oView.getElementBinding()) {
		//                return;
		//            }
		//            var P = this._extractProduct();
		//            if (!P) {
		//                var t = this._oResourceBundle.getText("ymsg.productUnavailable", [p]);
		//                this._oApplicationController.navToEmptyPage(t);
		//            }
		//            this._oViewProperties.setProperty("/dataLoaded", true);
		//        };
		//    },
		//    leave: function () {
		//        this._oView.unbindElement();
		//    },
		//    onSupplierPressed: function (e) {
		//        if (!this._oSupplierCard) {
		//            this._initializeSupplierCard();
		//        }
		//        this._oSupplierCard.openBy(e.getSource());
		//    },
		//    _initializeSupplierCard: function () {
		//        var v = this.getView();
		//        this._oSupplierCard = sap.ui.xmlfragment(v.getId(), "nw.epm.refapps.ext.prod.manage.view.SupplierCard");
		//        this._oSupplierCard.bindElement({ path: "Supplier" });
		//        u.attachControlToView(v, this._oSupplierCard);
		//    },
		//    onCopyPressed: function () {
		//        this._oHelper.copyProductToDraft(this._oApplicationProperties.getProperty("/productId"), this._oApplicationController.navToProductEditPage.bind(this._oApplicationController));
		//    },
		//    onEditPressed: function () {
		//        this._oHelper.getProductDraftFromProductId(this._oApplicationProperties.getProperty("/productId"), this._oApplicationController.navToProductEditPage.bind(this._oApplicationController));
		//    },
		//    onDeletePressed: function () {
		//        this._oHelper.deleteProduct(this._sContextPath);
		//    },
		//    onSharePressed: function (e) {
		//        this._oSubControllerForShare.openDialog(e);
		//    },
		//    onNavButtonPress: function () {
		//        this._oApplicationController.navBack(true);
		//        this._oView.unbindElement();
		//    }
	});
});