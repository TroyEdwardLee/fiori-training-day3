sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("fiori.training.day3fiori-training-day3.controller.Controls", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf fiori.training.day3fiori-training-day3.view.Controls
		 */
		onInit: function() {
			this.oViewModel = new JSONModel({
				lessonName: "Fiori第三节培训课-20211225",
				countryF4: []
			});
			this.oViewModel.setSizeLimit(9999);
			this.oView.setModel(this.oViewModel, "viewModel");
			this._fetchCountriesF4Data();
		},
		
		_fetchCountriesF4Data: function(sPath) {
			this.oViewModel.setProperty("/countryF4", []);
			jQuery.ajax(sap.ui.require.toUrl("fiori/training/day3fiori-training-day3/mockdata/countriesExtendedCollection.json"), {
				dataType: "json",
				success: function(oData) {
					this.oViewModel.setProperty("/countryF4", oData.CountriesCollection);
				}.bind(this),
				error: function(error) {
					jQuery.sap.log.error("failed to load json");
				}
			});
		}

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf fiori.training.day3fiori-training-day3.view.Controls
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf fiori.training.day3fiori-training-day3.view.Controls
		 */
		//	onExit: function() {
		//
		//	}

	});

});