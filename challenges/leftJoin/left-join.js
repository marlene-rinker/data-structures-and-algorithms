'use strict';

const HashMap = require('../../data-structures/hashtable/hashtable.js');



function leftJoin(hashmap1, hashmap2) {

  let results = [];

  let buckets = hashmap1.buckets;
  console.log(buckets);

  for (let i = 0; i < buckets.length; i++){
    if(buckets[i]){
      let itemKey = Object.keys(buckets[i].head.value);
      let itemVal = Object.values(buckets[i].head.value);
      let itemVal2 = hashmap2.get(itemKey[0]);
      results.push([itemKey[0], itemVal[0], itemVal2]);

    }
  }

  return results;

}


module.exports = leftJoin;