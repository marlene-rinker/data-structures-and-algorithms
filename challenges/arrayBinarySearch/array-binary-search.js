'use strict';

function binarySearch(arr, value) {
  for(let i=0; i<arr.length; i++){
    if (arr[i] === value){
      return i;
    }
  }
  return -1;
}




module.exports = binarySearch;