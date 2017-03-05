'use strict';

var categoryCodes = require('./mccCodes.json');
var emojiMap = require('./emojiGenerator/emojiMap.json');

function getMCC(mcc) {
	mcc = parseInt(mcc);
	return categoryCodes.find(function (categoryCode) {
		return categoryCode.mcc == mcc;
	})
};

function getMCCByEmoji(emoji) {
	return emojiMap[emoji];
};

function emojiExists(emoji) {
	var emojiKeys = Object.keys(emojiMap);
	return emojiKeys.indexOf(emoji) !== -1;
};

module.exports = {
	get: getMCC,
	getByEmoji: getMCCByEmoji,
	emojiExists: emojiExists,
	all: categoryCodes
};