'use strict';

const testSearch = require('./array-binary-search.js');

describe('Testing array code challenges', () => {
  it ('Should return element index of value', () => {
    const testArray = [4,8,15,16,23,42];
    const result = testSearch(testArray, 15);

    expect(result).toStrictEqual(2);

  });
  it ('Should return -1', () => {
    const testArray = [11,22,33,44,55,66,77];
    const result = testSearch(testArray, 90);

    expect(result).toStrictEqual(-1);

  });
});