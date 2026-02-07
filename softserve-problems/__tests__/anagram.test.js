const isAnagram = require('../anagram');

describe ('isAnagram checks whether there is an nagram in a string ', () => {

  test('test 1 "bag", "gab" =>> true', () => {
    expect(isAnagram("bag", "gab")).toEqual(true);
  });
  test('test 2 "bags", "gab" >> false', () => {
    expect(isAnagram("bags", "gab")).toEqual(false);
  });
  test('test 3', () => {
    expect(isAnagram("nod", "node")).toEqual(true);
  });
  test('test 4 "nod", "node" >> true', () => {
    expect(isAnagram("car", "race")).toEqual(true);
  });
  test('test 5 "bag", "grab" >> false', () => {
    expect(isAnagram("bag", "grab")).toEqual(false);
  });

  test('test 6 "nod", "done" >> true', () => {
    expect(isAnagram("nod", "done")).toEqual(true);
  });
});