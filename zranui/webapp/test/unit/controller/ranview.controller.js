/*global QUnit*/

sap.ui.define([
	"zranui/controller/ranview.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ranview Controller");

	QUnit.test("I should test the ranview controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
