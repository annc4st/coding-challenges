const getTweetData = require('../get-tweet-data');

describe('getTweetData', () => {
  test('first test check tweet length', () => {
    // add your test assertion(s) here
    const input = "My awesome tweet";
    const actual = getTweetData(input);
    expect(actual).toEqual({ tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 16 });

  });
  test('second test > mentions',() => {
    // add your test assertion(s) here
    const input = "My awesome tweet to @northcoders";
    const actual = getTweetData(input);
    expect(actual).toEqual({ tags: [], mentions: ['@northcoders'], tagCount: 0, mentionCount: 1, length: 32 });

  });

  test('third test > tags', () => {
    // add your test assertion(s) here
    const input = "My awesome tweet about #coding";
    const actual = getTweetData(input);
    expect(actual).toEqual({ tags: ['#coding'], mentions: [], tagCount: 1, mentionCount: 0, length: 30 } );

  });

  test('4 test > tags and mentions', () => {
    // add your test assertion(s) here
    const input = "My awesome tweet about #coding to @northcoders";
    const actual = getTweetData(input);
    expect(actual).toEqual({ tags: ['#coding'], mentions: ['@northcoders'], tagCount: 1, mentionCount: 1, length: 46 });

  });

  test('5 test > tags and mentions', () => {
    // add your test assertion(s) here
    const input = "I am #coding with @northcoders I love #coding and @northcoders";
    const actual = getTweetData(input);
    expect(actual).toEqual({ tags: ['#coding'], mentions: ['@northcoders'], tagCount: 1, mentionCount: 1, length: 62 });

  });


});
