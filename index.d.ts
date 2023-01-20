declare module 'mcc' {
    interface MCCCode {
        mcc: string;
        edited_description: string
        combined_description: string
        usda_description: string
        irs_description: string

        irs_reportable: boolean
        id: number
    }

    declare function getMCC(mcc: string|number): MCCCode | undefined;

    declare function getMCCByEmoji(emoji: string): number | undefined;

    declare function emojiExists(emoji: string): boolean;

    declare const all: MCCCode[];

    declare const mcc: {
        get: typeof getMCC;
        getByEmoji: typeof getMCCByEmoji;
        emojiExists: typeof emojiExists;
        all: typeof all;
    };

    export default mcc;
}