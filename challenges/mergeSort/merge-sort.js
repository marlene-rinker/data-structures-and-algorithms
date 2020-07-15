'use strict';

function mergeSort(arr) {
  //no need to sort if empty or 1 item
  if(arr.length <= 1) {
    return arr; 
  }

  //find the middle
  const mid = Math.floor(arr.length/2);

  //divide into left and right
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);

}

function merge(left, right) {
    let result = [];
    while (left.length > 0 && right.length > 0) {
      if (left[0] < right[0]) {
        result.push(left.shift());
        continue;
      }  
      result.push(right.shift());
    }
    if (left.length > 0) {
      return result.concat(left);
    }
    return result.concat(right);
}

module.exports = mergeSort;
