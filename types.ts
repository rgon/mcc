interface MCCDetails {
	mcc: string;
	edited_description: string
	combined_description: string
	usda_description: string
	irs_description: string

	irs_reportable: string
	id: number
}

interface MCCToEmoji {
	[mcc: string]: string[]
}
interface EmojiToMCC {
	[emoji: string]: string[]
}

export type { MCCDetails, MCCToEmoji, EmojiToMCC }