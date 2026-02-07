const morseCode = require('../morse-code');

describe('morseCode', () => {
    test("should return correct decoded string 'HI' passed", () => {
        const input = ".... .."
        const output = "HI"
        expect(morseCode(input)).toEqual(output);
    });

    test("should return correct decoded string 'HELLO' passed", () => {
        const input = ".... . .-.. .-.. ---"
        const output = "HELLO"
        expect(morseCode(input)).toEqual(output);
    });

    test("should return correct decoded string NORTHCODERS passed", () => {
        const input = "-. --- .-. - .... -.-. --- -.. . .-. ..."
        const output = 'NORTHCODERS'
        expect(morseCode(input)).toEqual(output);
    });

    test("should return correct decoded string 'GOOD MORNING NORTHCODERS' passed", () => {
        const input = "--. --- --- -..   -- --- .-. -. .. -. --.   -. --- .-. - .... -.-. --- -.. . .-. ...";
        const output = "GOOD MORNING NORTHCODERS"
        expect(morseCode(input)).toEqual(output);
    });




});