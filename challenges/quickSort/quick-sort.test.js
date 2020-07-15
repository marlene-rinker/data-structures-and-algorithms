'use strict';

const quickSort = require('./quick-sort.js');

describe('Testing quick sort', () => {
  it ('should return the array sorted in the correct order', () => {
    expect(quickSort([8,4,23,42,16,15],0,5)).toEqual([ 4, 8, 15, 16, 23, 42 ]);
    expect(quickSort([20,18,12,8,5,-2],0,5)).toEqual([ -2, 5, 8, 12, 18, 20 ]);
    expect(quickSort([5,12,7,5,5,7],0,5)).toEqual([ 5, 5, 5, 7, 7, 12 ]);
    expect(quickSort([2,3,5,7,13,11],0,5)).toEqual([ 2, 3, 5, 7, 11, 13 ]);
  })
});  