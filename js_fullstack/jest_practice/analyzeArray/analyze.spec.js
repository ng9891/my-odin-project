const {analyzeArr} = require('./analyze');

describe('Analyze an array and outputs min, max, avg and length', () => {
  test('basic', () => {
    const arr = [3, 2, 3, 4];
    expect(analyzeArr(arr)).toEqual({max: 4, min: 2, avg: 3, length: 4});
  });

  test('empty arr', () => {
    expect(analyzeArr([])).not.toBeTruthy();
  });

  test('one value', () => {
    expect(analyzeArr([2])).toEqual({max: 2, min: 2, avg: 2, length: 1});
  });

  test('not an array', () => {
    expect(analyzeArr('1,2,3,4')).not.toBeTruthy();
    expect(analyzeArr(1)).not.toBeTruthy();
  });
});
