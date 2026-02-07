const till = require('../till-addition');

describe('tillAddition', () => {
  test('given till({ "1p": 1, "2p": 1 }) should return "£0.03" ', () => {
    const input = { "1p": 1, "2p": 1 }
    expect(till(input)).toEqual("£0.03");

  });
  test('given till input should return correct amount', () => {
    const input = { "1p": 1, "2p": 1, "5p": 1, "10p": 1, "20p": 1 }
    expect(till(input)).toEqual("£0.38");

  });
  test('given till input should return correct amount', () => {
    const input = { "5p": 1, "10p": 1, "20p": 1, "50p": 1, "£1": 1 }
    expect(till(input)).toEqual("£1.85");

  });
});