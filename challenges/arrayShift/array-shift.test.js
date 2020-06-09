'use strict';

const arrayShift = require('./array-shift.js');

describe('Testing array code challenges', () => {
  it ('Should insert a value into the middle of an array', () => {
    const testArray = [2,4,6,8];
    const insertShiftArray = arrayShift(testArray, 5);

    expect(insertShiftArray).not.toStrictEqual(testArray);
    expect(insertShiftArray).toStrictEqual([2,4,5,6,8]);

  });
  it ('Should insert a value into the middle of an array', () => {
    const testArray = [4,8,15,23,42]
    const insertShiftArray = arrayShift(testArray, 16);

    expect(insertShiftArray).not.toStrictEqual(testArray, 16);
    expect(insertShiftArray).toStrictEqual([4,8,15,16,23,42]);
  });
});