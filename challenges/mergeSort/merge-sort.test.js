'use strict';

const mergeSort = require('./merge-sort.js');

describe('Testing merge sort', () => {
  it ('should return the array sorted in the correct order', () => {
    expect(mergeSort([8,4,23,42,16,15])).toEqual([ 4, 8, 15, 16, 23, 42 ]);
    expect(mergeSort([20,18,12,8,5,-2])).toEqual([ -2, 5, 8, 12, 18, 20 ]);
    expect(mergeSort([5,12,7,5,5,7])).toEqual([ 5, 5, 5, 7, 7, 12 ]);
    expect(mergeSort([2,3,5,7,13,11])).toEqual([ 2, 3, 5, 7, 11, 13 ]);
  })
});  