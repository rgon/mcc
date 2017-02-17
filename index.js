'use strict';

var categoryCodes = require('./mcc_codes');
var emojiMap = require('./emojiMap');

function getMCC(mcc) {
	mcc = parseInt(mcc);
	return categoryCodes.find(function (categoryCode) {
		return categoryCode.mcc == mcc;
	})
};

function getMCCByEmoji(emoji) {
	return emojiMap[emoji];
};

module.exports = {
	get: getMCC,
	getByEmoji: getMCCByEmoji,
	all: categoryCodes
};