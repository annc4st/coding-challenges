const changeCalculator = require('../change-calculator');

describe ('changeCalculator', () => {

  test('given amount 1 should return correct object of coins and its denomination', () => {
    expect(changeCalculator(1)).toEqual({'1':1});

  });

  test('given amount 13 should return correct object of coins and its denomination', () => {
    expect(changeCalculator(13)).toEqual({'10':1,'2':1,'1':1});

  });

  test('given amount 7 should return correct object of coins and its denomination', () => {
    expect(changeCalculator(7)).toEqual({'5':1,'2':1});

  });
});