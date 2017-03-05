var assert = require('assert');
var _ = require('lodash');
var generatorData = require('../emojiGenerator/generatorData');
var api = require('../index');
var categoryCodes = require('../mccCodes');

describe('test emoji and mcc category keys', function() {
	it('should have the same keys', function() {
		var mccCategories = generatorData.mccCategories,
			mccEmojis = generatorData.mccEmojis;

		var categoryKeys = Object.keys(mccCategories),
			emojiKeys = Object.keys(mccEmojis);

		assert.equal(categoryKeys.length, emojiKeys.length);
		assert(_.isEqual(categoryKeys, emojiKeys));
	});
});

describe('test mcc api', function() {
	it('should get Vetinary Services MCC object', function() {
		var expectedObject = { 
			'mcc': '0742',
			'edited_description': 'Veterinary Services',
			'combined_description': 'Veterinary Services',
			'usda_description': 'Veterinary Services',
			'irs_description': 'Veterinary Services',
			'irs_reportable': 'Yes',
			'id': 0 
		};

		assert(_.isEqual(expectedObject, api.get(742)));
	});

	it('should get all MCCs', function() {
		assert(_.isEqual(categoryCodes, api.all));
	});

	it('should get all MCCs for dog emoji', function() {
		var expectedMCCs = ['0742'];
		assert(_.isEqual(expectedMCCs, api.getByEmoji("🐶")));
	});

	it('should check if emoji exists', function() {
		assert(!api.emojiExists("💩"));
	});
});