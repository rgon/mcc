'use strict';
import categoryCodes from './mccCodes.json'
import { mccEmojis } from './emojiMaps'
import type { MCCDetails } from './types'

function getMCC (mcc: string|number) : MCCDetails | undefined {
	mcc = parseInt(mcc as string)
	return categoryCodes.find((categoryCode : MCCDetails) => 
		categoryCode.mcc == mcc
	)
}

function getEmojis(mccCode: MCCDetails) {
	return mccEmojis[mccCode.irs_description]
}

export default {
	getEmojis,
	get: getMCC,
	all: categoryCodes
}
