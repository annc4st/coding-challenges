const calculateDivisors = require('../calculate-divisors');

describe('calculateDivisors', () => {
  test('first test  ', () => {
    // add your test assertion(s) here
    const input =  1;
    const actual =  calculateDivisors(input);
    expect(actual).toEqual(0);

  });

  test('second test  ', () => {
    // add your test assertion(s) here
    const input =  5;
    const actual =  calculateDivisors(input);
    expect(actual).toEqual(3);

  });

  test('third test  ', () => {
    // add your test assertion(s) here
    const input =  6;
    const actual =  calculateDivisors(input);
    expect(actual).toEqual(8);

  });

  test('4 test num is 10', () => {
    // add your test assertion(s) here
    const input =  10;
    const actual =  calculateDivisors(input);
    expect(actual).toEqual(23);

  });
  test('5 test num is 12', () => {
    // add your test assertion(s) here
    const input =  12;
    const actual =  calculateDivisors(input);
    expect(actual).toEqual(33);

  });

  test('6 test num is not type number', () => {
    // add your test assertion(s) here
    const input =  'abc';
    const actual =  calculateDivisors(input);
    expect(actual).toEqual("Provide a number to calculate");

  });

  test('7 test num too big', () => {
    // add your test assertion(s) here
    const input =  100000;
    const actual =  calculateDivisors(input);
    expect(actual).toEqual("Provide a number between 4 and 30 to calculate");

  });




});