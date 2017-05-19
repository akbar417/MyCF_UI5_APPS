sap.ui.define([
		"sap/m/Text",
		"com/pdms/og/production_overview/model/formatter",
		"com/pdms/og/production_overview/controller/Home.controller"
	], function (Text, formatter, HomeContoller) {
		"use strict";

		QUnit.module("formatter - Currency value");

		function currencyValueTestCase(assert, sValue, fExpectedNumber) {
			// Act
			var fCurrency = formatter.currencyValue(sValue);
			
			

			// Assert
			assert.strictEqual(fCurrency, fExpectedNumber, "The rounding was correct");
		}
		
		QUnit.module("formatter - Icon URI test", {
			setup: function() {
				this.oHomeTreeController = new HomeContoller();
			}
		});
		
		function IconURITestCase(assert, sValue, fExpectedNumber){
			var fIconURI = formatter.getIconURI.bind(this.oHomeTreeController);
			// Assert
			assert.strictEqual(fIconURI, fExpectedNumber, "Returned Value is correct");
		}
		
		QUnit.test("Icon URI pass", function (assert) {
			IconURITestCase.call(this, assert, "Closed", "sap-icon://status-completed");
		});
		
		QUnit.test("Icon URI", function (assert) {
			IconURITestCase.call(this, assert, "Closed", "sap-icon://status-com");
		});
	}
);