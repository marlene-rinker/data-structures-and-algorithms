'use strict';


function insertShiftArray(arr, value) {
  let result = [];
  let middle = Math.ceil(arr.length/2);
  for (let i = 0; i < arr.length; i++){
    if (i === middle){
      result.push(value);
      result.push(arr[i]);
    } else { 
    result.push(arr[i]);
    }
  }
  return result;
}




module.exports = insertShiftArray;