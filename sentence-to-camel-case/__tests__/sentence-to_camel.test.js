const {sentenceToCamelCase,
    camelToEnglish} = require('../sentence-to-camel-case');

describe ('sentenceToCamelCase', () => {

  test('given string convert to camel case', () => {
    expect(sentenceToCamelCase("this sentence", true)).toEqual("ThisSentence");

  });
  test('given string convert to camel case', () => {
    expect(sentenceToCamelCase("this sentence", false)).toEqual("thisSentence");

  });

  test('given string convert to camel case', () => {
    expect(sentenceToCamelCase("This Bigger strange Sentence", true)).toEqual("ThisBiggerStrangeSentence");

  });
});

describe ('camelToEnglish', () => {
    test('given string convert to plain english', () => {
        const input = "thisBiggerStrangeSentence"
        expect(camelToEnglish(input)).toEqual("This bigger strange sentence.")


    });
});