const updateRemoteStudents = require('../update-remote-students');

describe('updateRemoteStudents', () => {
  test('first test > check for 1 student', () => {
    // add your test assertion(s) here
    const input =  [{ name: 'Euler', age: 27 }];
    const actual =  updateRemoteStudents(input);
    expect(actual).toEqual([{ name: 'Euler', age: 27, location: 'remote' }]);

  });

  test('2 test > check for few students', () => {
    // add your test assertion(s) here
    const input =  [
        { name: 'Hypatia', age: 31, location: 'leeds' },
        { name: 'Ramanujan', age: 22 },
        { name: 'Tao', age: 47, location: 'manchester' }
      ];
    const actual =  updateRemoteStudents(input);
    expect(actual).toEqual([
        { name: 'Hypatia', age: 31, location: 'leeds' },
        { name: 'Ramanujan', age: 22, location: 'remote' },
        { name: 'Tao', age: 47, location: 'manchester' }
      ]);

  });
});