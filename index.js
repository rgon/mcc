'use strict';

var categoryCodes = require('./mcc_codes');

function getMCC(mcc) {
	mcc = parseInt(mcc);
	return categoryCodes.find(function (categoryCode) {
		return categoryCode.mcc == mcc;
	})
};

module.exports = {
	get: getMCC,
	all: categoryCodes
};