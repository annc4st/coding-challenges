const dnaPairs = require('../dna-pairs.js');

describe('dnaPairs()', () => {
  test('first test input "G", should return [["G", "C"]]', () => {
    // add your test assertion(s) here
    const input = "G";
    const actual = dnaPairs(input);
    expect(actual).toEqual([["G", "C"]]);

  });
  test('second test input "AG", should return [ ["A", "T"], ["G", "C"] ]', () => {
    // add your test assertion(s) here
    const input = "AG";
    const actual = dnaPairs(input);
    expect(actual).toEqual([ ["A", "T"], ["G", "C"] ]);

  });

  test('third test input "ATAG", should return [ ["A", "T"], ["T", "A"], ["A", "T"], ["G", "C"] ]', () => {
    // add your test assertion(s) here
    const input = "ATAG";
    const actual = dnaPairs(input);
    expect(actual).toEqual([ ["A", "T"], ["T", "A"], ["A", "T"], ["G", "C"] ]);

  });

});
