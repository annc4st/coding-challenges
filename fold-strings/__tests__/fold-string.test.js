const {reverse, foldString} = require('../fold-string');

describe('foldString', () => {
    test("should return correct folded string if 1 word passed", () => {
        const input = "code";
        const output = 'oced'
        expect(foldString(input)).toEqual(output);
    });

    test("should return correct folded string if 1 word passed", () => {
        const input = "abcdef"
        const output = 'cbafed'
        expect(foldString(input)).toEqual(output);
    });

    test("should return correct folded string if 1 word passed", () => {
        const input = "javascript is cool"
        const output = 'savajtpirc is oclo'
        expect(foldString(input)).toEqual(output);
    });

    test("should return correct folded string if 1 word passed", () => {
        const input = "Northcoders"
        const output = 'htroNcsredo'
        expect(foldString(input)).toEqual(output);
    });


});