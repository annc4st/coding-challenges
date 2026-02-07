const pigLatin = require('../pig-latin');

describe('pigLatin', () => {
    test("should return correct string if starts with 1 consonant", () => {
        const input = "northcoders";
        const output = 'orthcodersnay'
        expect(pigLatin(input)).toEqual(output);
    });

    test("should return correct string if starts with 1 vowel", () => {
        const input = "algorithm"
        const output = 'algorithmway'
        expect(pigLatin(input)).toEqual(output);
    });

    test("should return correct string if consists of few words", () => {
        const input = "keep on coding"
        const output = 'eepkay onway odingcay'
        expect(pigLatin(input)).toEqual(output);
    });
});