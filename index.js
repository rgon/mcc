'use strict';

var categoryCodes = require('./mcc_codes');

module.exports = function (mcc) {
	mcc = parseInt(mcc);
	return categoryCodes.find(function (categoryCode) {
		return categoryCode.mcc == mcc;
	})
};