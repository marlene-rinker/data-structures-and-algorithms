'use strict';

function insertShiftArray(arr, value) {
  let result = [...arr];
  let middle = Math.ceil(result.length/2);
  result.splice(middle, 0, value);
  return result;
}




module.exports = insertShiftArray;