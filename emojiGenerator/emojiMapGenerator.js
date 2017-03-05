var jsonfile = require('jsonfile'),
	file = __dirname + '/emojiMap.json',
	generatorData = require('./generatorData');

var mccCategories = generatorData.mccCategories,
	mccEmojis = generatorData.mccEmojis;

var emojiMap = {};
var mccKeys = Object.keys(mccCategories)

// constructs emoji map where each emoji is mapped to an array of all corresponding mccs
mccKeys.forEach(function(key){
	var mccCodes = mccCategories[key];
	var emojis = mccEmojis[key];
	emojis.forEach(function(emoji){
		if (!emojiMap[emoji]) {
			emojiMap[emoji] = [];
		}
		emojiMap[emoji] = emojiMap[emoji].concat(mccCodes);
	});
});

// write the generated emoji map object to a json file
jsonfile.writeFile(file, emojiMap, function (err) {
	console.log('Done creating emoji map!')
	if (err){
		console.log(err);
	}
});